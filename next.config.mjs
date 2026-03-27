/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  allowedDevOrigins: ['buildninja.localtest.me', '[IP_ADDRESS]', '10.64.1.27'],
=======
  allowedDevOrigins: ['buildninja.localtest.me'],
>>>>>>> dev
  output: 'export',
  images: {
    unoptimized: true, // required when using export and Next Image
  },
  trailingSlash: false, // optional: adds / to URLs for static hosting
};

export default nextConfig;
