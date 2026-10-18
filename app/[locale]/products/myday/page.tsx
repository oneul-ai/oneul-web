import type { Metadata } from "next";
import { getProduct } from "@/data/products";
import { fill, getDictionary, isLocale, localizePath } from "@/lib/i18n";
import {
  buildMetadata,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const myday = getProduct("myday")!;
const mydayHost = myday.url.replace(/^https?:\/\//, "");

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/products/myday">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.mydayPage.metaTitle,
    description: dict.mydayPage.metaDescription,
    path: myday.path,
  });
}

export default async function MyDayPage({
  params,
}: PageProps<"/[locale]/products/myday">) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = await getDictionary(locale);
  const t = dict.mydayPage;
  const text = dict.product.myday;

  return (
    <main>
      <JsonLd data={softwareApplicationJsonLd(myday, dict)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.common.home, path: localizePath(locale, "/main") },
          { name: dict.nav.products, path: localizePath(locale, "/products") },
          { name: myday.name, path: localizePath(locale, myday.path) },
        ])}
      />

      <section className="pb-20 pt-20 sm:pb-32 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.nav.products}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {myday.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {text.tagline}
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>{text.summary}</p>
            <p className="text-muted">{text.definition}</p>
          </div>
          <a
            href={myday.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-opacity hover:opacity-85"
          >
            {fill(dict.common.discover, { name: myday.name })}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Container>
      </section>

      <section
        aria-labelledby="myday-cycle"
        className="border-t border-border bg-surface py-20 sm:py-32"
      >
        <Container>
          <h2
            id="myday-cycle"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            {t.cycleHeading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.cycleIntro}
          </p>
          <ol className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {dict.cycle.map((step) => (
              <Reveal as="li" key={step.time}>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  {step.time}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="myday-focus" className="py-20 sm:py-32">
        <Container>
          <h2
            id="myday-focus"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            {t.focusHeading}
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>{t.focusP1}</p>
            <p className="text-muted">{t.focusP2}</p>
          </div>
          <a
            href={myday.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            {fill(t.moreAt, { host: mydayHost })}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Container>
      </section>
    </main>
  );
}
