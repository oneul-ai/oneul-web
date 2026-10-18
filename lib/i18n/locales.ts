/**
 * 지원 로케일과 로케일 감지 규칙.
 * 서버/클라이언트 양쪽에서 import 되므로 순수 데이터와 순수 함수만 둔다.
 */

export const locales = ["ko", "en", "ja", "zh", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

/** 언어 전환 UI에 표시할 각 언어의 자기 이름 */
export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "简体中文",
  "zh-tw": "繁體中文",
};

/** <html lang> / hreflang 에 쓰는 BCP 47 태그 */
export const localeTags: Record<Locale, string> = {
  ko: "ko",
  en: "en",
  ja: "ja",
  zh: "zh-CN",
  "zh-tw": "zh-TW",
};

/** Open Graph locale */
export const ogLocales: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
  "zh-tw": "zh_TW",
};

/**
 * 브라우저 타임존 → 로케일. 여기 없는 타임존은 전부 영어.
 * 중국 본토는 간체(zh), 대만/홍콩/마카오는 번체(zh-tw).
 */
export const timeZoneLocales: Record<string, Locale> = {
  "Asia/Seoul": "ko",
  "Asia/Pyongyang": "ko",
  "Asia/Tokyo": "ja",
  "Asia/Shanghai": "zh",
  "Asia/Chongqing": "zh",
  "Asia/Chungking": "zh",
  "Asia/Harbin": "zh",
  "Asia/Urumqi": "zh",
  "Asia/Kashgar": "zh",
  "Asia/Hong_Kong": "zh-tw",
  "Asia/Macau": "zh-tw",
  "Asia/Macao": "zh-tw",
  "Asia/Taipei": "zh-tw",
  PRC: "zh",
  ROC: "zh-tw",
  ROK: "ko",
  Japan: "ja",
};

/** 방문자가 직접 고른 언어를 기억하는 localStorage 키 */
export const LOCALE_STORAGE_KEY = "oneul:locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function localeFromTimeZone(timeZone: string | undefined): Locale {
  if (!timeZone) return "en";
  return timeZoneLocales[timeZone] ?? "en";
}

/**
 * 브라우저에서 로케일을 결정한다. 우선순위: 직접 고른 언어 > 타임존.
 * 서버에서 호출되면 기본 로케일을 돌려준다.
 */
export function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* localStorage 차단 환경 */
  }
  try {
    return localeFromTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return "en";
  }
}

export function rememberLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* 저장 불가 환경에서는 무시 */
  }
}

/** `/ko/about` → `/about` 처럼 로케일 접두사를 뗀다. 접두사가 없으면 그대로. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(ko|en|ja|zh-tw|zh)(?=\/|$)/);
  if (!match) return pathname;
  return pathname.slice(match[0].length) || "/";
}

export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * HTML 파싱 중 동기 실행할 인라인 스크립트 본문.
 * React가 hydrate 하기 전에 <html>에 data-locale / lang 을 붙여서
 * 진입 페이지의 언어별 텍스트가 첫 페인트부터 맞게 보이도록 한다.
 */
export const localeDetectScript = `(function(){var l="${defaultLocale}";try{var s=localStorage.getItem(${JSON.stringify(
  LOCALE_STORAGE_KEY,
)});if(${JSON.stringify(locales)}.indexOf(s)>-1){l=s}else{var m=${JSON.stringify(
  timeZoneLocales,
)};var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;l=m[tz]||"en"}}catch(e){l="en"}var h=document.documentElement;h.setAttribute("data-locale",l);h.setAttribute("lang",${JSON.stringify(
  localeTags,
)}[l]||l)})()`;

/** `{url}` 같은 자리표시자를 채운다. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`);
}
