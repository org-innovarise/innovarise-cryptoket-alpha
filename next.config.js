/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },  
  staticPageGenerationTimeout: 1000,
  images: {
    unoptimized: true, // for cloudflare pages
    domains: ['gola-nft-marketplace.infura-ipfs.io','gateway.pinata.cloud']
  },
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, content-type, Authorization'
          }
        ]
      }
    ];
  },
  experimental: {}
};

module.exports = nextConfig;
