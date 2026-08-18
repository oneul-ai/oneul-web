import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/data/products";

/** NEXT_PUBLIC_SITE_URL 기준 절대 URL 생성. 모든 canonical/OG URL은 이 함수를 거친다. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

/** 페이지별 메타데이터 공통 생성기. canonical + Open Graph + Twitter Card를 한 번에 처리한다. */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title ?? `${siteConfig.name} — ${siteConfig.slogan}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? `${siteConfig.name} — ${siteConfig.slogan}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.legalNameKo],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    slogan: siteConfig.slogan,
    description: siteConfig.definition,
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: ["ko", "en"],
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };
}

export function softwareApplicationJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    alternateName: product.nameKo,
    applicationCategory: product.applicationCategory,
    operatingSystem: product.platform,
    url: product.url,
    description: product.definition,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
