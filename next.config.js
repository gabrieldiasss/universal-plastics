/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['profile.index.tsx', 'profile.styles.ts']
}

module.exports = nextConfig
