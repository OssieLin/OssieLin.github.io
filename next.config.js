/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/OssieLin.github.io" : "", // Set basePath for GitHub Pages
  assetPrefix: isGitHubPages ? "/OssieLin.github.io/" : "/", // Ensure assets load correctly
  trailingSlash: true,
};

module.exports = nextConfig;
