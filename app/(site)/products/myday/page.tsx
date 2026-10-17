import type { Metadata } from "next";
import { getProduct } from "@/data/products";
import {
  buildMetadata,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const myday = getProduct("myday")!;

export const metadata: Metadata = buildMetadata({
  title: "MyDay — Awake & Aware",
  description:
    "MyDay(마이데이)는 ONEUL이 만든 iOS 하루 관리 앱입니다. 아침에 하루를 계획하고, 낮에는 Must Do에 집중하고, 저녁에 하루를 돌아봅니다.",
  path: "/products/myday",
});

const cycle = [
  {
    time: "Morning",
    title: "나의 하루 계획하기",
    body: "캘린더, 미리알림, 직접 입력으로 오늘의 일을 한곳에 정리합니다.",
  },
  {
    time: "Day",
    title: "오늘에 집중하기",
    body: "중요한 일을 Must Do로 선택해 하루의 우선순위를 명확하게 만듭니다.",
  },
  {
    time: "Evening",
    title: "나의 하루 돌아보기",
    body: "하루를 돌아보며 마무리합니다. 그 회고가 다음 날의 더 나은 하루로 이어집니다.",
  },
];

export default function MyDayPage() {
  return (
    <main>
      <JsonLd data={softwareApplicationJsonLd(myday)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/main" },
          { name: "Products", path: "/products" },
          { name: "MyDay", path: "/products/myday" },
        ])}
      />

      <section className="pb-20 pt-20 sm:pb-32 sm:pt-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Products
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            MyDay
          </h1>
          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {myday.tagline}
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>
              오늘의 중요한 일을 정하고, 하루를 살아가고, 하루를 돌아보는 의식
              있는 하루 관리 앱.
            </p>
            <p className="text-muted">{myday.definition}</p>
          </div>
          <a
            href={myday.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background transition-opacity hover:opacity-85"
          >
            Discover MyDay
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Container>
      </section>

      <section
        aria-labelledby="myday-cycle"
        className="border-t border-border bg-surface py-20 sm:py-32"
      >
        <Container>
          <h2
            id="myday-cycle"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            하루의 사이클
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            MyDay의 핵심 경험은 아침 계획, 낮의 집중, 저녁 회고로 이어지는 하루
            단위의 사이클입니다.
          </p>
          <ol className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {cycle.map((step) => (
              <Reveal as="li" key={step.time}>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  {step.time}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="myday-focus" className="py-20 sm:py-32">
        <Container>
          <h2
            id="myday-focus"
            className="text-3xl font-bold tracking-tight sm:text-5xl"
          >
            오늘만 집중
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>
              기존 할 일 관리 앱은 미래의 할 일을 계속 쌓아두는 방식입니다.
              MyDay는 오늘이라는 하루 단위에 집중합니다.
            </p>
            <p className="text-muted">
              쌓여가는 목록 대신 오늘 해야 할 일만 남기고, 그중 가장 중요한 일을
              Must Do로 선택합니다. 하루의 우선순위가 명확해지면, 하루를
              살아가는 방식이 달라집니다.
            </p>
          </div>
          <a
            href={myday.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-accent"
          >
            myday.now에서 자세히 보기
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Container>
      </section>
    </main>
  );
}
