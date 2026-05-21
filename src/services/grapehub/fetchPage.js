/**
 * Utility service to fetch and parse pages dynamically from GrapeHub at build-time or runtime.
 * Implements 24-hour server caching using Next.js Incremental Static Regeneration (ISR).
 */
export async function fetchGrapeHubPage(path) {
  try {
    const url = `${process.env.NEXT_PUBLIC_GRAPEHUB_URL}/${path}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    
    const html = await response.text();
    
    // Extract main container
    const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/);
    if (!mainMatch) {
      throw new Error(`No <main> tag found in HTML from ${url}`);
    }
    
    const mainHtml = mainMatch[1];
    
    // Split mainHtml into sections
    const sectionRegex = /<section[\s\S]*?>([\s\S]*?)<\/section>/g;
    let match;
    let pageContent = "";
    
    while ((match = sectionRegex.exec(mainHtml)) !== null) {
      const sectionHtml = match[0];
      
      // Filter out footer and navigation sections
      const isFooter = 
        sectionHtml.includes('_comp-m8fxdwir') || 
        sectionHtml.includes('Useful Links') || 
        sectionHtml.includes('Our Services') || 
        sectionHtml.includes('©') ||
        sectionHtml.includes('Our Products');
        
      if (isFooter) {
        continue;
      }
      
      // Extract data-testid="richTextElement" contents
      const richTextRegex = /<div[^>]*data-testid="richTextElement"[^>]*>([\s\S]*?)<\/div>/g;
      let richMatch;
      let sectionText = "";
      while ((richMatch = richTextRegex.exec(sectionHtml)) !== null) {
        sectionText += richMatch[1] + "\n";
      }
      
      if (sectionText.trim().length > 0) {
        pageContent += sectionText + "\n";
      }
    }
    
    let cleanHtml = pageContent;
    
    // Clean up Wix specific nested links (e.g., auto-link recognition wrapping text)
    cleanHtml = cleanHtml.replace(/<a[^>]*><a\s+([^>]+)>([\s\S]*?)<\/a><\/a>/gi, '<a $1>$2</a>');
    
    // Remove wixGuards
    cleanHtml = cleanHtml.replace(/<span class="wixGuard wixui-rich-text__text">.*?<\/span>/g, '');
    
    return cleanHtml.trim();
  } catch (error) {
    console.error(`Error in fetchGrapeHubPage for ${path}:`, error);
    // Return friendly error markup rather than crashing the page
    return `<p class="error-text">Content could not be loaded at this time. Please try again later.</p>`;
  }
}

/**
 * Fetches the BuildNinja blog feed from GrapeHub.
 * Parses the Wix App's warmup JSON data to extract posts metadata.
 */
export async function fetchGrapeHubBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_GRAPEHUB_URL || "https://www.grapehub.io";
    const url = `${baseUrl}/blog/categories/buildninja`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog feed from ${url}: ${response.statusText}`);
    }
    
    const html = await response.text();
    const match = html.match(/<script type="application\/json" id="wix-warmup-data">([\s\S]*?)<\/script>/);
    if (!match) {
      throw new Error("wix-warmup-data script tag not found in category page");
    }
    
    const data = JSON.parse(match[1]);
    const blogAppId = '14bcded7-0066-7c35-14d7-466cb3f09103';
    const blogData = data.appsWarmupData?.[blogAppId];
    if (!blogData) {
      throw new Error("No blog warmup data found under blogAppId");
    }
    
    // Find the feed-page key inside the warmup data
    for (const key of Object.keys(blogData)) {
      if (key.startsWith('feed-page-')) {
        const feedStr = blogData[key];
        const feedObj = JSON.parse(feedStr);
        const posts = feedObj?.feedResponse?.postFeedPage?.posts?.posts;
        if (posts && Array.isArray(posts)) {
          return posts.map(post => {
            let coverImage = "";
            if (post.media?.wixMedia?.image?.url) {
              coverImage = post.media.wixMedia.image.url;
            } else if (post.media?.wixMedia?.image?.id) {
              coverImage = `https://static.wixstatic.com/media/${post.media.wixMedia.image.id}`;
            }
            return {
              id: post.id,
              title: post.title,
              excerpt: post.excerpt || "",
              slug: post.slug,
              firstPublishedDate: post.firstPublishedDate,
              lastPublishedDate: post.lastPublishedDate,
              minutesToRead: post.minutesToRead || 5,
              coverImage: coverImage,
              author: post.owner?.name || "BuildNinja Team",
              authorAvatar: post.owner?.image?.url || ""
            };
          });
        }
      }
    }
    throw new Error("No feed page data found inside blog app warmup data");
  } catch (error) {
    console.error("Error in fetchGrapeHubBlogPosts:", error);
    return [];
  }
}

/**
 * Fetches an individual blog post and parses its HTML to extract clean copy and metadata.
 */
export async function fetchGrapeHubBlogPost(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_GRAPEHUB_URL || "https://www.grapehub.io";
    const url = `${baseUrl}/post/${slug}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post from ${url}: ${response.statusText}`);
    }
    
    const html = await response.text();
    
    // Extract metadata
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].replace(' | GrapeHub', '').trim() : '';

    const authorMatch = html.match(/<span data-hook="user-name">([\s\S]*?)<\/span>/);
    const author = authorMatch ? authorMatch[1].trim() : 'BuildNinja Team';

    const timeMatch = html.match(/<span[^>]*data-hook="time-ago">([\s\S]*?)<\/span>/);
    const date = timeMatch ? timeMatch[1].trim() : '';

    const readTimeMatch = html.match(/<span[^>]*data-hook="time-to-read">([\s\S]*?)<\/span>/);
    const readTime = readTimeMatch ? readTimeMatch[1].trim() : '';

    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    let coverImage = '';
    if (schemaMatch) {
      try {
        const schema = JSON.parse(schemaMatch[1]);
        if (schema.image && schema.image.url) {
          coverImage = schema.image.url;
        }
      } catch (e) {}
    }
    
    if (!coverImage) {
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogImageMatch) {
        coverImage = ogImageMatch[1];
      }
    }

    // Extract content
    const contentMatch = html.match(/<section[^>]*data-hook=["']post-description["'][^>]*>([\s\S]*?)<\/section>/i);
    let postBody = '';
    if (contentMatch) {
      postBody = contentMatch[1];
    } else {
      const rceMatch = html.match(/<div[^>]*data-rce-version=["'][^"]*["'][^>]*>([\s\S]*?)<\/div>/i);
      if (rceMatch) {
        postBody = rceMatch[1];
      } else {
        postBody = '';
        console.warn(`Post body not found for ${url}`);
      }
    }

    // Clean wixGuards
    postBody = postBody.replace(/<span class="wixGuard wixui-rich-text__text">.*?<\/span>/g, '');

    // Rewrite low-res image sources to high-res data-pin-media sources
    postBody = postBody.replace(/<img([^>]*)\bdata-pin-media="([^"]+)"([^>]*)>/gi, (match, p1, p2, p3) => {
      let tag = match;
      if (p1.includes('src="')) {
        p1 = p1.replace(/src="[^"]*"/, `src="${p2}"`);
        tag = `<img${p1}data-pin-media="${p2}"${p3}>`;
      } else if (p3.includes('src="')) {
        p3 = p3.replace(/src="[^"]*"/, `src="${p2}"`);
        tag = `<img${p1}data-pin-media="${p2}"${p3}>`;
      } else {
        tag = `<img${p1}src="${p2}" data-pin-media="${p2}"${p3}>`;
      }
      return tag;
    });

    // Rewrite any links referencing GrapeHub posts to local /blog/ dynamic routes
    const postLinkRegex = new RegExp(`href="https:\\/\\/(www\\.)?grapehub\\.io\\/post\\/([^"]+)"`, 'gi');
    postBody = postBody.replace(postLinkRegex, 'href="/blog/$2"');

    return {
      title,
      author,
      date,
      readTime,
      coverImage,
      content: postBody.trim()
    };
  } catch (error) {
    console.error(`Error in fetchGrapeHubBlogPost for ${slug}:`, error);
    return null;
  }
}

