import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isLocale, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.about,
    description: dict.aboutPage.metaDescription,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = await getDictionary(locale);
  const t = dict.aboutPage;

  return (
    <main>
      <section className="pb-20 pt-20 sm:pb-32 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.nav.about}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {t.heading}
          </h1>
          <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>{t.p1}</p>
            <p className="text-muted">{t.p2}</p>
            <p className="text-muted">{dict.company.definition}</p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="about-principles"
        className="border-t border-border py-20 sm:py-32"
      >
        <Container>
          <h2
            id="about-principles"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            {t.principlesHeading}
          </h2>
          <ul className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {t.principles.map((p) => (
              <Reveal as="li" key={p.title}>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ul>
          <Link
            href={localizePath(locale, "/products")}
            className="group mt-16 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            {t.cta}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Container>
      </section>
    </main>
  );
}
