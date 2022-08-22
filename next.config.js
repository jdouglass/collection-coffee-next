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
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
