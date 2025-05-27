/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Required for static routing to work on Netlify
  images: {
    unoptimized: true, // Needed if you're using <Image> but not optimizing on server
  },
};

module.exports = nextConfig;

