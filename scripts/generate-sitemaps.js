const fs = require('fs');
const path = require('path');

async function generateSitemaps() {
  const baseUrl = "https://buildninja.grapehub.io";
  const grapehubUrl = "https://www.grapehub.io";
  const stableStaticDate = "2026-05-21T06:00:00.000Z";

  console.log("Generating sitemap.xml...");

  // 1. Generate master sitemap.xml
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-0.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/docs/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf8');
  console.log("Successfully wrote sitemap.xml to public/sitemap.xml");

  // 2. Fetch blog posts for sitemap-0.xml
  console.log("Fetching blog posts from GrapeHub to generate sitemap-0.xml...");
  let blogPosts = [];
  try {
    const response = await fetch(`${grapehubUrl}/blog/categories/buildninja`);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const html = await response.text();
    const match = html.match(/<script type="application\/json" id="wix-warmup-data">([\s\S]*?)<\/script>/);
    if (match) {
      const data = JSON.parse(match[1]);
      const blogAppId = '14bcded7-0066-7c35-14d7-466cb3f09103';
      const blogData = data.appsWarmupData?.[blogAppId];
      if (blogData) {
        for (const key of Object.keys(blogData)) {
          if (key.startsWith('feed-page-')) {
            const feedStr = blogData[key];
            const feedObj = JSON.parse(feedStr);
            const posts = feedObj?.feedResponse?.postFeedPage?.posts?.posts;
            if (posts && Array.isArray(posts)) {
              blogPosts = posts.map(post => ({
                slug: post.slug,
                lastPublishedDate: post.lastPublishedDate ? new Date(post.lastPublishedDate).toISOString() : stableStaticDate
              }));
              break;
            }
          }
        }
      }
    }
    console.log(`Fetched ${blogPosts.length} blog posts successfully.`);
  } catch (error) {
    console.error("Warning: Failed to fetch blog posts for sitemap generation. Proceeding with static routes only.", error);
  }

  // 3. Generate sitemap-0.xml
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/dojo",
    "/eula",
    "/faq",
    "/features",
    "/partners",
    "/pricing",
    "/privacy-policy",
    "/refund-and-cancellation-policy",
    "/shipping-policy",
    "/support",
    "/terms-of-service",
    "/blog"
  ];

  const items = staticRoutes.map((route) => ({
    loc: `${baseUrl}${route}`,
    lastmod: stableStaticDate,
    changefreq: "weekly",
    priority: route === "" ? "1.0" : "0.7",
  }));

  blogPosts.forEach((post) => {
    if (post.slug) {
      items.push({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: post.lastPublishedDate,
        changefreq: "weekly",
        priority: "0.7"
      });
    }
  });

  const urlsetXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${items
    .map(
      (item) => `
  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), urlsetXml, 'utf8');
  console.log("Successfully wrote sitemap-0.xml to public/sitemap-0.xml");
}

generateSitemaps().catch(err => {
  console.error("Critical error generating sitemaps:", err);
  process.exit(1);
});
