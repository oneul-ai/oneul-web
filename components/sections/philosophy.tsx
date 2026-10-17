import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    number: "01",
    title: "Respect",
    en: "Respect each other, always.",
    ko: "역할과 연차에 상관없이 서로를 동등한 동료로 존중합니다.",
  },
  {
    number: "02",
    title: "Execution",
    en: "Show what's good for users by building it.",
    ko: "유저에게 좋은 것은 말이 아니라 실행으로 보여줍니다.",
  },
  {
    number: "03",
    title: "Integrity",
    en: "Do what's right, not what's easy.",
    ko: "쉬운 길보다 우리의 철학에 비추어 옳은 길을 택합니다.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-16 border-y border-border bg-surface py-24 sm:py-40"
    >
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Three principles.
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-14 sm:mt-24 sm:grid-cols-3 sm:gap-10">
          {principles.map((p) => (
            <Reveal as="li" key={p.number}>
              <p aria-hidden="true" className="text-sm font-medium text-accent">
                {p.number}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">{p.en}</p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {p.ko}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
