/**
 * 사이트 전역 설정.
 * 회사 정보는 이 파일에서만 관리하고, 컴포넌트/페이지에 하드코딩하지 않는다.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const siteConfig = {
  name: "ONEUL",
  legalName: "ONEUL Inc.",
  legalNameKo: "주식회사 오엔이유엘",
  slogan: "Life ON, ONEUL",
  sloganKo: "오늘을 자각하다.",
  /** 검색엔진/AI가 회사를 이해할 수 있는 한 문장 정의 (영문) */
  definition:
    "ONEUL Inc. is a Korean software company building digital products that help people live each day more intentionally.",
  /** 검색엔진/AI가 회사를 이해할 수 있는 한 문장 정의 (국문) */
  definitionKo:
    "ONEUL(주식회사 오엔이유엘)은 사람들이 오늘 하루를 더 의식적으로 살아갈 수 있도록 돕는 제품을 만드는 한국 소프트웨어 회사입니다.",
  description:
    "ONEUL Inc.(주식회사 오엔이유엘)은 오늘에 집중하는 제품을 만드는 한국 소프트웨어 회사입니다. 하루 관리 앱 MyDay로 하루 계획, 집중, 회고를 돕습니다.",
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
