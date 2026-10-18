import type { Metadata } from "next";
import { products } from "@/data/products";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ProductShowcase } from "@/components/sections/product-showcase";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.products,
    description: dict.productsPage.metaDescription,
    path: "/products",
  });
}

export default async function ProductsPage({
  params,
}: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = await getDictionary(locale);
  const t = dict.productsPage;

  return (
    <main>
      <section className="pb-24 pt-20 sm:pb-40 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.nav.products}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {t.heading}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {t.intro}
          </p>
          <div className="mt-16 space-y-10 sm:mt-24">
            {products.map((product) => (
              <ProductShowcase
                key={product.id}
                product={product}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
