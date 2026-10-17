import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getProduct } from "@/data/products";

/**
 * 루트(/) 분기 페이지. 회사 웹사이트(/main)와 제품 웹사이트(myday.now) 중 하나를 고른다.
 * 제품 링크는 새 창이 아니라 현재 창에서 이동한다.
 */

const myday = getProduct("myday");
const productUrl = myday?.url ?? "https://myday.now";
const productHost = productUrl.replace(/^https?:\/\//, "");
const companyHost = siteConfig.url.replace(/^https?:\/\//, "");

const linkClass =
  "group inline-flex items-center gap-2 font-medium transition-colors hover:text-accent";

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

export default function EntryPage() {
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
          {siteConfig.sloganKo}
        </p>

        <nav aria-label="웹사이트 선택">
          <ul className="hero-enter-delay mt-14 space-y-4 text-lg sm:mt-20 sm:text-xl">
            <li>
              <Link href="/main" className={linkClass}>
                회사 웹사이트
                <span className="text-sm font-normal text-muted">
                  {companyHost}
                </span>
                <Arrow />
              </Link>
            </li>
            <li>
              <a href={productUrl} className={linkClass}>
                제품 웹사이트
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
