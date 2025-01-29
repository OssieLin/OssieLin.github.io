/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: "/OssieLin.github.io",  // Ensures correct paths on GitHub Pages
    assetPrefix: "./",                // Fixes local testing issues
    trailingSlash: true,               // Ensures correct linking
  };
  
  module.exports = nextConfig;
  