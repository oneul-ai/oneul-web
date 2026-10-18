"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  defaultLocale,
  detectLocale,
  localizePath,
  locales,
  type Locale,
} from "@/lib/i18n/locales";

/**
 * 진입 페이지에서 쓰는 최소 문구. 사전 전체를 클라이언트로 보내지 않기 위해 따로 둔다.
 * 텍스트는 네 언어를 모두 렌더하고 CSS(html[data-locale])로 하나만 보여주므로
 * 첫 페인트부터 올바른 언어가 보이고 깜빡임이 없다.
 */
const text: Record<Locale, { sub: string; company: string; product: string; nav: string }> = {
  ko: { sub: "오늘을 자각하다.", company: "회사 웹사이트", product: "제품 웹사이트", nav: "웹사이트 선택" },
  en: { sub: "Be aware of today.", company: "Company website", product: "Product website", nav: "Choose a website" },
  ja: { sub: "今日を自覚する。", company: "会社サイト", product: "製品サイト", nav: "サイトを選択" },
  zh: { sub: "觉察今天。", company: "公司网站", product: "产品网站", nav: "选择网站" },
  "zh-tw": { sub: "覺察今天。", company: "公司網站", product: "產品網站", nav: "選擇網站" },
};

function Localized({ pick }: { pick: (t: (typeof text)[Locale]) => string }) {
  return (
    <>
      {locales.map((l) => (
        <span key={l} lang={l} className={`l-${l}`}>
          {pick(text[l])}
        </span>
      ))}
    </>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

const linkClass =
  "group inline-flex items-center gap-2 font-medium transition-colors hover:text-accent";

export function EntryChooser({
  productUrl,
  companyHost,
}: {
  productUrl: string;
  companyHost: string;
}) {
  // 서버/첫 hydrate 에서는 기본 로케일로 링크를 만들고, 마운트 후 감지 결과로 바꾼다.
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const productHost = productUrl.replace(/^https?:\/\//, "");

  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <p className="hero-enter text-lg font-bold tracking-[0.08em]">
          {siteConfig.legalName}
        </p>
        <h1 className="hero-enter mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {siteConfig.slogan}
        </h1>
        <p className="hero-enter mt-3 text-lg text-muted sm:text-xl">
          <Localized pick={(t) => t.sub} />
        </p>

        <nav aria-label={text[locale].nav}>
          <ul className="hero-enter-delay mt-14 space-y-4 text-lg sm:mt-20 sm:text-xl">
            <li>
              <Link href={localizePath(locale, "/main")} className={linkClass}>
                <Localized pick={(t) => t.company} />
                <span className="text-sm font-normal text-muted">
                  {companyHost}
                </span>
                <Arrow />
              </Link>
            </li>
            <li>
              <a href={productUrl} className={linkClass}>
                <Localized pick={(t) => t.product} />
                <span className="text-sm font-normal text-muted">
                  {productHost}
                </span>
                <Arrow />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
