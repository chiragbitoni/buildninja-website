/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- enables static HTML export
  images: {
    unoptimized: true, // required when using export and Next Image
  },
  trailingSlash: true, // optional: adds / to URLs for static hosting
};

export default nextConfig;
