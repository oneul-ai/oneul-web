import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import { fill } from "@/lib/i18n";
import { Container } from "@/components/ui/container";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      aria-label={dict.hero.aria}
      className="pb-28 pt-24 sm:pb-40 sm:pt-36"
    >
      <Container>
        <h1 className="hero-enter text-[17vw] font-bold leading-[0.95] tracking-tighter sm:text-8xl lg:text-[8.5rem]">
          Life <span className="on-mark">ON</span>,
          <br />
          ONEUL
        </h1>
        <div className="hero-enter-delay">
          <p className="mt-10 text-xl font-medium sm:text-2xl">
            {dict.company.sloganSub}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {dict.hero.body[0]}
            <br className="hidden sm:block" /> {dict.hero.body[1]}
          </p>
          <Link
            href={localizePath(locale, "/products/myday")}
            className="group mt-10 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            {fill(dict.common.discover, { name: "MyDay" })}
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
