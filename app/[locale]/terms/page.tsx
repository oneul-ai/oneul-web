import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { fill, getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.termsPage.heading,
    description: dict.termsPage.metaDescription,
    path: "/terms",
  });
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = await getDictionary(locale);
  const t = dict.termsPage;
  const vars = { legal: siteConfig.legalName, legalKo: siteConfig.legalNameKo };

  return (
    <main>
      <section className="pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.heading}
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
            <p>{fill(t.p1, vars)}</p>
            <p>{fill(t.p2, vars)}</p>
            <p>{t.p3}</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
