import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `${siteConfig.legalName} 웹사이트 개인정보 처리방침.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <section className="pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
            <p>
              본 웹사이트({siteConfig.url})는 {siteConfig.legalName}(
              {siteConfig.legalNameKo})의 공식 웹사이트입니다.
            </p>
            <p>
              본 웹사이트는 회원가입, 로그인, 개인정보 입력 기능을 제공하지
              않으며, 방문자의 개인정보를 직접 수집하지 않습니다.
            </p>
            <p>
              ONEUL 제품(예: MyDay)의 개인정보 처리방침은 각 제품의 공식
              웹사이트에서 별도로 안내합니다.
            </p>
            {siteConfig.contactEmail && (
              <p>
                개인정보 관련 문의:{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-foreground underline underline-offset-4"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
