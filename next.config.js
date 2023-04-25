/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate(nextConfig);
