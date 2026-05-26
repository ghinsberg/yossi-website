import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel handles optimisation natively — no unoptimized flag needed
    remotePatterns: [],
  },
};

export default nextConfig;
