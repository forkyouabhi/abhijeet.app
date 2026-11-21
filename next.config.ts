import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "**.localhost"],
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
