import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.strengthmovements.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'vhtnlfbnq3ecybmn.public.blob.vercel-storage.com',
        port: '',
        pathname: '/gertjan/**',
      },
    ],
  },
};

export default nextConfig;
