/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://buildninja.grapehub.io",
  generateRobotsTxt: true,
  transform: async (config, path) => {
  // Skip internal routes
  if (path.startsWith('/components')) {
    return null;
  }

  return {
    loc: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  };
},
  exclude: [
    '/install/access',
    '/install/dashboard',
    '/addtocart',
    '/components/**',
    '/_next/**',
    '/api/**',
    '/landing-page'
  ],
};
