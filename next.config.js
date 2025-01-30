/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export', // This replaces `next export`
  basePath: isGitHubPages ? '/OssieLin.github.io' : '',
  assetPrefix: isGitHubPages ? '/OssieLin.github.io' : '',
  images: {
    unoptimized: true, // This is needed for static exports if using images
  },
};

module.exports = nextConfig;
