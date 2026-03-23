/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['buildninja.localtest.me', '[IP_ADDRESS]', '10.64.1.27'],
  output: 'export',
  images: {
    unoptimized: true, // required when using export and Next Image
  },
  trailingSlash: false, // optional: adds / to URLs for static hosting
};

export default nextConfig;
