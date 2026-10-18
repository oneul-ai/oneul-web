/**
 * 사이트 전역 설정 (언어와 무관한 값만).
 * 언어별 문구(슬로건 부제, 회사 정의, 메타 설명 등)는 lib/i18n/dictionaries 에서 관리한다.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const siteConfig = {
  name: "ONEUL",
  legalName: "ONEUL Inc.",
  legalNameKo: "주식회사 오엔이유엘",
  /** 브랜드 슬로건 — 모든 언어에서 영문 그대로 사용한다 */
  slogan: "Life ON, ONEUL",
  url: siteUrl,
  /**
   * 공식 Contact 이메일. 아직 정해지지 않았다면 비워둔다.
   * 비어 있으면 UI에 이메일이 노출되지 않는다.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Organization JSON-LD sameAs — SNS/프로필 URL이 생기면 여기에 추가 */
  sameAs: [] as string[],
} as const;

export type SiteConfig = typeof siteConfig;
