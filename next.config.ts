import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    strictNullChecks: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
