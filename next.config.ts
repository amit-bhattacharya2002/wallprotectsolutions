import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Next.js only shows its dev indicator (the bottom-left "N" badge) in
  // development; production builds suppress it by default. We disable the
  // indicator explicitly so future upgrades can't accidentally turn it back on
  // for the client.
  devIndicators: false,
};

export default nextConfig;
