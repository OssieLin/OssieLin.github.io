/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/OssieLin.github.io" : "", // Use basePath only for GitHub Pages
  assetPrefix: isProd ? "/OssieLin.github.io/" : "/", // Fix local & GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
