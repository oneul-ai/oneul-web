import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.about;
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-40">
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {t.label}
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {t.heading}
          </h2>
        </Reveal>
        <Reveal className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
          <p>
            {t.p1[0]}
            <br />
            {t.p1[1]}
          </p>
          <p className="text-foreground">{t.p2}</p>
          <p>{dict.company.definition}</p>
        </Reveal>
        <Reveal className="mt-10">
          <Link
            href={localizePath(locale, "/about")}
            className="group inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            {t.more}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
