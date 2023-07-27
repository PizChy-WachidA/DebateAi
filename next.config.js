/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    APIKEY: process.env.APIKEY,
  },
  nextConfig,
};
