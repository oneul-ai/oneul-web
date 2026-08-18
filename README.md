# ONEUL 공식 웹사이트

ONEUL Inc.(주식회사 오엔이유엘) 공식 웹사이트. Next.js(App Router) + TypeScript + Tailwind CSS 4.

## 개발

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## 환경변수

`.env.example`을 복사해 `.env.local`을 만든다.

- `NEXT_PUBLIC_SITE_URL` — **프로덕션 필수.** canonical / OG / sitemap / robots URL의 기준. www / non-www 중 하나만 사용.
- `NEXT_PUBLIC_CONTACT_EMAIL` — Contact 이메일. 비워두면 사이트에 노출되지 않음.
- `GOOGLE_SITE_VERIFICATION` — Google Search Console 소유권 확인 코드 (선택).

## 구조

```
app/                  페이지 (/, /about, /products, /products/myday, /privacy, /terms)
  sitemap.ts          sitemap.xml
  robots.ts           robots.txt
  opengraph-image.tsx 전역 OG 이미지 (1200×630)
  icon.svg            파비콘
components/
  layout/             Header, Footer
  sections/           홈 섹션 (Hero, About, Philosophy, Products, Manifesto)
  seo/                JSON-LD 렌더러
  ui/                 Container, Reveal(스크롤 등장)
lib/
  site-config.ts      회사 정보 단일 소스
  seo.ts              metadata/JSON-LD 생성 유틸
data/
  products.ts         제품 데이터 (여기에 추가하면 사이트 전체에 반영)
public/
  llms.txt            AI 검색엔진용 회사/제품 요약
  llms-full.txt       상세 버전
```

## 제품 추가 방법

`data/products.ts`의 `products` 배열에 항목을 추가하면 홈/Products/Footer/sitemap에 자동 반영된다.
상세 페이지가 필요하면 `app/products/<id>/page.tsx`를 추가한다.

## 디자인 토큰

컬러는 `app/globals.css`의 CSS Variables(`--background`, `--foreground`, `--muted`,
`--surface`, `--border`, `--accent`)로만 관리한다. 다크 모드는 `prefers-color-scheme`으로 자동 지원.
