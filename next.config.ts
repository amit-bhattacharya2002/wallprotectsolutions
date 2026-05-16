import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    /**
     * When set, only matching paths are allowed. Omit `search` so optional
     * query strings (e.g. logo cache-bust `?rev=`) are allowed on any local file.
     */
    localPatterns: [{ pathname: "/**" }],
  },
  // Next.js only shows its dev indicator (the bottom-left "N" badge) in
  // development; production builds suppress it by default. We disable the
  // indicator explicitly so future upgrades can't accidentally turn it back on
  // for the client.
  devIndicators: false,
};

export default nextConfig;
