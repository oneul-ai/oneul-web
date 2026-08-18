import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-40">
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            We build for today.
          </h2>
        </Reveal>
        <Reveal className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
          <p>
            미래를 계획하는 도구는 이미 충분히 많습니다.
            <br />
            정작 오늘을 잘 살아가게 돕는 도구는 드뭅니다.
          </p>
          <p className="text-foreground">
            ONEUL은 사람들이 자신의 시간과 행동을 조금 더 의식하고, 오늘이라는
            하루를 자신답게 살아갈 수 있도록 돕는 제품을 만듭니다.
          </p>
          <p>
            ONEUL Inc. is a Korean software company building digital products
            that help people live each day more intentionally.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            More about ONEUL
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
