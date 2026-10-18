/**
 * 제품 데이터 (언어와 무관한 값만).
 * 제품의 문구(태그라인, 요약, 설명)는 lib/i18n/dictionaries 의 `product.<id>` 에서 관리한다.
 * 새 제품이 나오면 이 배열과 각 사전에 항목을 추가하면 사이트 전체(홈, Products, sitemap)에 노출된다.
 */

export type ProductId = "myday";

export type Product = {
  id: ProductId;
  name: string;
  url: string;
  /** 사이트 내부 상세 페이지 경로 (로케일 접두사 제외) */
  path: string;
  platform: string;
  applicationCategory: string;
  /** 스크린샷/앱 아이콘이 준비되면 경로를 채운다 (public 기준) */
  image?: { src: string; alt: string; width: number; height: number };
  icon?: { src: string; alt: string };
};

export const products: Product[] = [
  {
    id: "myday",
    name: "MyDay",
    url: "https://myday.now",
    path: "/products/myday",
    platform: "iOS",
    applicationCategory: "ProductivityApplication",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
