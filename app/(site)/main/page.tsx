import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Products } from "@/components/sections/products";
import { Manifesto } from "@/components/sections/manifesto";

export const metadata: Metadata = buildMetadata({
  description: siteConfig.description,
  path: "/main",
});

/** ONEUL 회사 웹사이트 메인. 루트(/)는 회사/제품 분기 페이지다. */
export default function MainPage() {
  return (
    <main>
      <Hero />
      <About />
      <Philosophy />
      <Products />
      <Manifesto />
    </main>
  );
}
