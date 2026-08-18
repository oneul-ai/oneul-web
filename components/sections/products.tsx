import { products } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProductShowcase } from "@/components/sections/product-showcase";

export function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-16 py-24 sm:py-40"
    >
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Products
          </p>
          <h2
            id="products-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Made for today.
          </h2>
        </Reveal>
        <div className="mt-16 space-y-10 sm:mt-24">
          {products.map((product) => (
            <ProductShowcase key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
