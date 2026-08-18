import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
  type Analytics,
} from "firebase/analytics";

/**
 * Firebase 웹 설정. API 키를 포함해 전부 클라이언트에 노출되는 공개 식별자이며
 * 비밀 값이 아니다 — 접근 제어는 Firebase 보안 규칙에서 담당한다.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDN4IRC-7b-Hfoga3oDv5w8ZInWJj2LG4A",
  authDomain: "oneul-ai.firebaseapp.com",
  projectId: "oneul-ai",
  storageBucket: "oneul-ai.firebasestorage.app",
  messagingSenderId: "653268987731",
  appId: "1:653268987731:web:1a4fd9db741d26e3b7fba6",
  measurementId: "G-G59EX1WDPJ",
};

export function getFirebaseApp(): FirebaseApp {
  return getApps()[0] ?? initializeApp(firebaseConfig);
}

/**
 * Analytics는 브라우저에서만 동작한다 (SSR/정적 빌드 중에는 null).
 * 지원 여부(iframe, 쿠키 차단 등) 확인 후 초기화한다.
 */
export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (!(await isAnalyticsSupported())) return null;
  return getAnalytics(getFirebaseApp());
}
