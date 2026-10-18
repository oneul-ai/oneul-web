import type { MetadataRoute } from "next";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { locales, localizePath } from "@/lib/i18n/locales";
import { products } from "@/data/products";

// output: "export" 빌드에서 라우트를 정적으로 생성하기 위해 필요하다.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes: { path: string; priority: number }[] = [
    { path: "/main", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/products", priority: 0.9 },
    ...products.map((product) => ({ path: product.path, priority: 0.9 })),
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  const entry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  };

  const pages = localizedRoutes.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );

  return [entry, ...pages];
}
