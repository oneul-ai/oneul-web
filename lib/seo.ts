import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/data/products";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import {
  locales,
  localeTags,
  ogLocales,
  localizePath,
  type Locale,
} from "@/lib/i18n/locales";

/** NEXT_PUBLIC_SITE_URL 기준 절대 URL 생성. 모든 canonical/OG URL은 이 함수를 거친다. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

/**
 * 같은 페이지의 언어별 URL 목록 (hreflang).
 * x-default 는 타임존이 어느 언어에도 해당하지 않을 때 보내는 영어 버전이다.
 */
export function languageAlternates(path: string): Record<string, string> {
  const entries = locales.map((l) => [
    localeTags[l],
    absoluteUrl(localizePath(l, path)),
  ]);
  return Object.fromEntries([
    ...entries,
    ["x-default", absoluteUrl(localizePath("en", path))],
  ]);
}

/** 로케일 페이지 메타데이터 공통 생성기. canonical + hreflang + Open Graph + Twitter Card를 한 번에 처리한다. */
export function buildMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(localizePath(locale, path));
  const fullTitle = title ?? `${siteConfig.name} — ${siteConfig.slogan}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.legalNameKo],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    slogan: siteConfig.slogan,
    description: dict.company.definition,
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl(localizePath(locale, "/main")),
    inLanguage: localeTags[locale],
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };
}

export function softwareApplicationJsonLd(product: Product, dict: Dictionary) {
  const text = dict.product[product.id];
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.applicationCategory,
    operatingSystem: product.platform,
    url: product.url,
    description: text.definition,
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
