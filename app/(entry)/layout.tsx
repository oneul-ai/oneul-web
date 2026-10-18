import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { localeDetectScript } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/seo";
import { FirebaseAnalytics } from "@/components/analytics/firebase-analytics";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.slogan}`,
  description:
    "ONEUL Inc. — Life ON, ONEUL. Choose the company website or the product website (MyDay).",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description:
      "ONEUL Inc. — Life ON, ONEUL. Choose the company website or the product website (MyDay).",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

/**
 * 진입 페이지(/)와 옛 경로 리다이렉트 전용 루트 레이아웃. 헤더/푸터가 없다.
 * 인라인 스크립트가 hydrate 전에 <html>에 lang / data-locale 을 붙이므로
 * (타임존 기반 언어 감지) 그 속성 불일치 경고는 suppressHydrationWarning 으로 끈다.
 */
export default function EntryLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeDetectScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
