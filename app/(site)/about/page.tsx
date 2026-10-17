import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `${siteConfig.legalName}(${siteConfig.legalNameKo}) 소개. ONEUL은 오늘에 집중하는 제품을 만드는 한국 소프트웨어 회사입니다.`,
  path: "/about",
});

const principles = [
  {
    title: "Respect",
    body: "역할, 연차, 직군에 상관없이 서로를 동등한 동료로 존중합니다. 의견은 자유롭게, 피드백은 솔직하게, 사람에 대한 예의는 끝까지 지킵니다.",
  },
  {
    title: "Execution",
    body: "유저에게 좋은 것은 말이나 문서가 아니라 실제 제품과 결과로 보여줍니다. 오래 논의하기보다 작게 만들어 직접 써보고, 빠르게 고칩니다.",
  },
  {
    title: "Integrity",
    body: "쉬운 길과 옳은 길이 갈릴 때, 우리의 철학에 비추어 옳은 길을 택합니다. 단기 지표보다 유저의 하루에 진짜 도움이 되는지를 기준으로 결정합니다.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pb-20 pt-20 sm:pb-32 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            We build for today.
          </h1>
          <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>
              ONEUL은 한국어 &lsquo;오늘&rsquo;에서 출발한 이름입니다. 우리는
              사람들이 미래에 대한 불안이나 지나간 시간에 대한 후회보다, 지금 이
              순간과 오늘을 더 의식적으로 살아갈 수 있도록 돕는 제품을 만듭니다.
            </p>
            <p className="text-muted">
              거대한 플랫폼보다, 작지만 명확한 문제를 해결하는 좋은 제품을
              지향합니다. 단순한 생산성 도구를 넘어 사용자의 삶을 조금 더
              정돈하고 의식적으로 만드는 방향을 추구합니다.
            </p>
            <p className="text-muted">{siteConfig.definition}</p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="about-principles"
        className="border-t border-border py-20 sm:py-32"
      >
        <Container>
          <h2
            id="about-principles"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            How we make things.
          </h2>
          <ul className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {principles.map((p) => (
              <Reveal as="li" key={p.title}>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ul>
          <Link
            href="/products"
            className="group mt-16 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            See what we make
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Container>
      </section>
    </main>
  );
}
