import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['https://placehold.co/**'],
    remotePatterns: [
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },],
  },

  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
