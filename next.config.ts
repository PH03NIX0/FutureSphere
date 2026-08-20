import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Node-only SDKs out of the serverless bundle. Bundling firebase-admin
  // is a common reason API routes work locally and 500 on Vercel/Netlify.
  serverExternalPackages: ["firebase-admin", "cloudinary"],
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinary-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Tree-shake barrel imports in client chunks.
  experimental: {
    optimizePackageImports: ["motion", "firebase/auth", "firebase/app"],
  },
};

export default nextConfig;
