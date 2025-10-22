import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포를 위해 output: "export" 제거
  // basePath, assetPrefix 제거 (루트 경로에서 배포)
  images: {
    // Vercel에서는 이미지 최적화 지원
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
