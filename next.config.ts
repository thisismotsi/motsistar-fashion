// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp",],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.preply.com" },
      // add other CDNs you use
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  // Ensure static pages cache well on Vercel CDN
  experimental: { optimizePackageImports: ["lucide-react"] },
};

export default nextConfig;
