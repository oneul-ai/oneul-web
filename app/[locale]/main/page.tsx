import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Products } from "@/components/sections/products";
import { Manifesto } from "@/components/sections/manifesto";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/main">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    description: dict.company.description,
    path: "/main",
  });
}

/** ONEUL 회사 웹사이트 메인. 루트(/)는 회사/제품 분기 페이지다. */
export default async function MainPage({ params }: PageProps<"/[locale]/main">) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = await getDictionary(locale);

  return (
    <main>
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Philosophy dict={dict} />
      <Products locale={locale} dict={dict} />
      <Manifesto dict={dict} />
    </main>
  );
}
