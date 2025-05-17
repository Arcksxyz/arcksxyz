import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
