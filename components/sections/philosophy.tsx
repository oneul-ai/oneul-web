import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy({ dict }: { dict: Dictionary }) {
  const t = dict.philosophy;
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-16 border-y border-border bg-surface py-24 sm:py-40"
    >
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {t.label}
          </p>
          <h2
            id="philosophy-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {t.heading}
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-14 sm:mt-24 sm:grid-cols-3 sm:gap-10">
          {t.items.map((p, i) => (
            <Reveal as="li" key={p.title}>
              <p aria-hidden="true" className="text-sm font-medium text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">{p.line1}</p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {p.line2}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
