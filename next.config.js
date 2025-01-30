/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export', // Replaces `next export`
  basePath: isGitHubPages ? '/OssieLin.github.io' : '',
  assetPrefix: isGitHubPages ? '/OssieLin.github.io/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
