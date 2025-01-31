/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ Ensure Next.js exports static files correctly
    basePath: "/OssieLin.github.io", // ✅ Required for GitHub Pages
    assetPrefix: "/OssieLin.github.io/", // ✅ Ensures assets are loaded correctly
  
    images: {
      unoptimized: true, // ✅ Fix Next.js Image issues on GitHub Pages
    },
  };
  
  module.exports = nextConfig;
  