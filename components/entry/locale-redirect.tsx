"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectLocale, localizePath } from "@/lib/i18n/locales";

/**
 * 로케일 접두사가 없는 옛 경로(/main, /about 등)로 들어오면
 * 타임존/저장된 언어로 감지한 로케일의 같은 경로로 보낸다.
 */
export function LocaleRedirect({ path }: { path: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(localizePath(detectLocale(), path));
  }, [router, path]);
  return null;
}
