import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import {
  getDictionary,
  isLocale,
  locales,
  localeTags,
} from "@/lib/i18n";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FirebaseAnalytics } from "@/components/analytics/firebase-analytics";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// 정적 export: 지원 로케일만 생성하고, 그 외 경로는 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const base = buildMetadata({
    locale,
    description: dict.company.description,
    path: "/main",
  });
  return {
    ...base,
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${siteConfig.slogan}`,
      template: `%s — ${siteConfig.name}`,
    },
    keywords: dict.meta.keywords,
    robots: { index: true, follow: true },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

/** 회사 웹사이트(/{locale}/main, /{locale}/about, ...) 루트 레이아웃. 진입 페이지(/)는 app/(entry) 에서 따로 처리한다. */
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd(dict)} />
        <JsonLd data={websiteJsonLd(locale)} />
        <FirebaseAnalytics />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <Header locale={locale} t={dict.nav} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
