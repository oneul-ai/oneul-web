import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { products } from "@/data/products";

// output: "export" 빌드에서 라우트를 정적으로 생성하기 위해 필요하다.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/products", priority: 0.9 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  const productRoutes = products.map((product) => ({
    path: product.path,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
