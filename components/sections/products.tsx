import { products } from "@/data/products";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProductShowcase } from "@/components/sections/product-showcase";

export function Products({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-16 py-24 sm:py-40"
    >
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.products.label}
          </p>
          <h2
            id="products-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {dict.products.heading}
          </h2>
        </Reveal>
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
  );
}
