import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries/ko";

export type { Dictionary } from "@/lib/i18n/dictionaries/ko";
export * from "@/lib/i18n/locales";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ko: () => import("@/lib/i18n/dictionaries/ko").then((m) => m.ko),
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.en),
  ja: () => import("@/lib/i18n/dictionaries/ja").then((m) => m.ja),
  zh: () => import("@/lib/i18n/dictionaries/zh").then((m) => m.zh),
  "zh-tw": () => import("@/lib/i18n/dictionaries/zh-tw").then((m) => m.zhTw),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
