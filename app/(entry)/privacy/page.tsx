import type { Metadata } from "next";
import { LocaleRedirect } from "@/components/entry/locale-redirect";

// 로케일 접두사가 없는 옛 경로. 검색엔진에는 노출하지 않고 언어별 경로로 보낸다.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function LegacyRedirectPage() {
  return <LocaleRedirect path="/privacy" />;
}
