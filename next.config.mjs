/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required when using export and Next Image
  },
  trailingSlash: false, // optional: adds / to URLs for static hosting
};

export default nextConfig;
