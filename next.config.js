/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'collection-coffee-product-images-dev.s3.ca-central-1.amazonaws.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};

module.exports = nextConfig;
