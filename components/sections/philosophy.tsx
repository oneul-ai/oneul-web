import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    number: "01",
    title: "Simple",
    en: "Less complexity. More clarity.",
    ko: "복잡함을 줄이고 꼭 필요한 것만 남깁니다.",
  },
  {
    number: "02",
    title: "Intentional",
    en: "Design that helps people act with intention.",
    ko: "사용자가 자신의 하루와 행동을 의식할 수 있도록 돕습니다.",
  },
  {
    number: "03",
    title: "Human",
    en: "Technology should disappear into everyday life.",
    ko: "기술보다 사람의 경험을 우선합니다.",
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
