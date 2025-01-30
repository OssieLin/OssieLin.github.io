/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export', // Enables static site generation (replaces `next export`)
  basePath: isGitHubPages ? '/OssieLin.github.io' : '', // Ensure correct basePath
  assetPrefix: isGitHubPages ? '/OssieLin.github.io/' : '', // Fixes CSS/JS paths
  images: {
    unoptimized: true, // Required for GitHub Pages (no Next.js image optimization)
  },
};

module.exports = {
    assetPrefix: '/OssieLin.github.io',  // The name of the repository
    basePath: '/OssieLin.github.io',    // The name of the repository
    output: 'export',                    // For static export (if using 'next export')
    trailingSlash: true,                 // Adds trailing slashes to paths, can help with GitHub Pages
  };
  
