import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: `${siteConfig.legalName} 웹사이트 이용 안내.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <section className="pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
            <p>
              본 웹사이트는 {siteConfig.legalName}({siteConfig.legalNameKo})의
              회사 및 제품 소개를 위한 정보 제공 목적의 웹사이트입니다.
            </p>
            <p>
              본 웹사이트에 게시된 모든 콘텐츠(텍스트, 로고, 그래픽 등)의
              저작권은 {siteConfig.legalName}에 있으며, 사전 동의 없이 상업적
              목적으로 복제·배포할 수 없습니다.
            </p>
            <p>
              ONEUL 제품(예: MyDay)의 서비스 이용약관은 각 제품의 공식
              웹사이트에서 별도로 안내합니다.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
