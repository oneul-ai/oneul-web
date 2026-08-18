import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** crawling 차단이 필요한 경로가 생기면 여기에 추가한다 (예: "/admin") */
const disallowedPaths: string[] = [];

// output: "export" 빌드에서 라우트를 정적으로 생성하기 위해 필요하다.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        ...(disallowedPaths.length > 0 ? { disallow: disallowedPaths } : {}),
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
