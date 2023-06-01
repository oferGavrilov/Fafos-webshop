/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    ADMIN_ID: process.env.ADMIN_ID,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  output: 'standalone'
}

module.exports = nextConfig
