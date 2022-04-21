/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['tsx', 'ts']
}

module.exports = nextConfig
