/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  env: {
    SANITY_PROJECT_ID: ""
  }
}

module.exports = nextConfig
