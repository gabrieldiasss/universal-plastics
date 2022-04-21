/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['index.tsx', 'styles.ts']
}

module.exports = nextConfig
