import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel handles optimisation natively — no unoptimized flag needed
    remotePatterns: [],
  },

  // Self-hosted fonts in public/fonts are not content-hashed, so a font update
  // must ship under a new file name (see public/fonts/README.md).
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // 301 permanent redirect: ghinsberg.com → yossighinsberg.com
  // Ensures all traffic, link equity, and crawl budget consolidates
  // on the canonical domain. Both bare and www variants covered.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ghinsberg.com" }],
        destination: "https://yossighinsberg.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ghinsberg.com" }],
        destination: "https://yossighinsberg.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
