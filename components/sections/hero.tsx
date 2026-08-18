import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section aria-label="ONEUL 소개" className="pb-28 pt-24 sm:pb-40 sm:pt-36">
      <Container>
        <h1 className="hero-enter text-[17vw] font-bold leading-[0.95] tracking-tighter sm:text-8xl lg:text-[8.5rem]">
          Life <span className="on-mark">ON</span>,
          <br />
          ONEUL
        </h1>
        <div className="hero-enter-delay">
          <p className="mt-10 text-xl font-medium sm:text-2xl">
            {siteConfig.sloganKo}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            ONEUL은 오늘을 더 의식적으로 살아갈 수 있도록
            <br className="hidden sm:block" /> 돕는 제품을 만듭니다.
          </p>
          <Link
            href="/products/myday"
            className="group mt-10 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            Discover MyDay
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
