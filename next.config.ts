import type { NextConfig } from 'next';

const config: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: 'https://empathy-hub-backend-131065304705.us-central1.run.app/api/v1/:path*',
        },
      ],
      afterFiles: [
        {
          source: '/:path((?!api/).*)',
          destination: '/index.html',
        },
      ],
    }
  },
};

export default config;

