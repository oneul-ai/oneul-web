import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting(정적 호스팅)에 배포하므로 순수 정적 파일로 빌드한다.
  output: "export",
  // 정적 export에는 이미지 최적화 서버가 없다.
  images: { unoptimized: true },
};

export default nextConfig;
