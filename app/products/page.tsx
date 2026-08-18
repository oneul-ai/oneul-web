import type { Metadata } from "next";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ProductShowcase } from "@/components/sections/product-showcase";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "ONEUL이 만드는 제품. 하루 계획, 집중, 회고를 돕는 하루 관리 앱 MyDay를 소개합니다.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main>
      <section className="pb-24 pt-20 sm:pb-40 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Products
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            Made for today.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            ONEUL은 오늘을 더 의식적으로 살아가게 하는 제품을 만듭니다. 기능이
            많은 제품보다, 핵심 경험이 명확한 제품을 지향합니다.
          </p>
          <div className="mt-16 space-y-10 sm:mt-24">
            {products.map((product) => (
              <ProductShowcase key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
