import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FirebaseAnalytics } from "@/components/analytics/firebase-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ONEUL",
    "ONEUL Inc.",
    "오엔이유엘",
    "주식회사 오엔이유엘",
    "오늘",
    "MyDay",
    "마이데이",
    "하루 관리 앱",
    "하루 계획",
    "하루 회고",
    "데일리 플래너",
    "생산성 앱",
    "intentional living",
    "mindful productivity",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <FirebaseAnalytics />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
