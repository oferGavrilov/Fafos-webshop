/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    ADMIN_ID: process.env.ADMIN_ID,
  },
}

module.exports = nextConfig
