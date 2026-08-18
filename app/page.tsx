import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Products } from "@/components/sections/products";
import { Manifesto } from "@/components/sections/manifesto";

export default function HomePage() {
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
