/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    ADMIN_ID: process.env.ADMIN_ID,
    API_ENDPOINT:'/'
  }
}

module.exports = nextConfig
