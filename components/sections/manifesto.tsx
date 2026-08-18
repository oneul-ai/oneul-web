import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Manifesto() {
  return (
    <section
      aria-label="ONEUL manifesto"
      className="border-t border-border py-28 sm:py-48"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
            We spend much of our lives
            <br />
            thinking about yesterday
            <br />
            or preparing for tomorrow.
          </p>
          <p className="mt-10 text-2xl font-medium leading-snug tracking-tight sm:mt-14 sm:text-4xl">
            But life happens <span className="text-accent">today</span>.
          </p>
          <p className="mt-10 text-lg leading-relaxed text-muted sm:mt-14 sm:text-xl">
            ONEUL은 그 사실을 알아차리게 하는 도구를 만듭니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
