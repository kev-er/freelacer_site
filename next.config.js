
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Kev Builds" : "",
  assetPrefix: isProd ? "/Kev Builds/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
