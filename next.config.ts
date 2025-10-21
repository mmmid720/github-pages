import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // GitHub Pages를 위한 정적 export
  basePath: isProd ? "/github-pages" : "", // GitHub Pages 리포지토리 이름과 일치
  assetPrefix: isProd ? "/github-pages" : "",
  images: {
    unoptimized: true, // 정적 export를 위해 이미지 최적화 비활성화
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  turbopack: {
    root: __dirname,
  },
  trailingSlash: true, // GitHub Pages 호환성
};

export default nextConfig;
