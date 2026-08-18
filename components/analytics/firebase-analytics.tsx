"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";

/**
 * Firebase Analytics 초기화. page_view 추적은 GA4 향상된 측정
 * (히스토리 이벤트 기반 페이지 조회)에 맡긴다.
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    getFirebaseAnalytics();
  }, []);

  return null;
}
