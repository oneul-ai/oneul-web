import type { Dictionary } from "@/lib/i18n/dictionaries/ko";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Manifesto({ dict }: { dict: Dictionary }) {
  const t = dict.manifesto;
  return (
    <section
      aria-label={t.aria}
      className="border-t border-border py-28 sm:py-48"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
            {t.lines[0]}
            <br />
            {t.lines[1]}
            <br />
            {t.lines[2]}
          </p>
          <p className="mt-10 text-2xl font-medium leading-snug tracking-tight sm:mt-14 sm:text-4xl">
            {t.before}
            <span className="text-accent">{t.today}</span>
            {t.after}
          </p>
          <p className="mt-10 text-lg leading-relaxed text-muted sm:mt-14 sm:text-xl">
            {t.sub}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
