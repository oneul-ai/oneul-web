import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";

const dayCycle = [
  { time: "Morning", label: "나의 하루 계획하기" },
  { time: "Day", label: "오늘에 집중하기" },
  { time: "Evening", label: "나의 하루 돌아보기" },
];

/**
 * 제품 쇼케이스 카드. products 데이터만으로 렌더링되며,
 * product.image / product.icon이 채워지면 비주얼 영역이 자동으로 노출된다.
 */
export function ProductShowcase({ product }: { product: Product }) {
  return (
    <Reveal as="article" aria-labelledby={`product-${product.id}`}>
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              {product.icon && (
                <Image
                  src={product.icon.src}
                  alt={product.icon.alt}
                  width={56}
                  height={56}
                  className="rounded-xl"
                />
              )}
              <div>
                <h3
                  id={`product-${product.id}`}
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-base font-medium text-accent">
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-relaxed">{product.summaryKo}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {product.definition}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Discover {product.name}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <Link
                href={product.path}
                className="text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-xs">
            {product.image ? (
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                className="h-auto w-full rounded-xl"
              />
            ) : (
              <ol
                aria-label={`${product.name} 하루 사이클`}
                className="rounded-xl border border-border bg-background p-6"
              >
                {dayCycle.map((step, i) => (
                  <li key={step.time}>
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="my-1.5 block pl-[3px] text-sm leading-none text-muted"
                      >
                        ↓
                      </span>
                    )}
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {step.time}
                    </p>
                    <p className="mt-1 text-base font-medium">{step.label}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
