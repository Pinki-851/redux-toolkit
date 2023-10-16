/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
    // Add the domain(s) you want to allow here
    distDir: isProd ? `/${process.env.DIST_DIR}` : ".next",
  },
};

module.exports = nextConfig;
