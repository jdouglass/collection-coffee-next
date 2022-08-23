/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'collection-coffee-product-images-dev.s3.ca-central-1.amazonaws.com',
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
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
};

module.exports = nextConfig;
