/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://avatars.githubusercontent.com/u/28040410?v=4',
    ],
  },
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig
