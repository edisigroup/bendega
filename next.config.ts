import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion", "lucide-react"],
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
