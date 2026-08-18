/**
 * 제품 데이터.
 * 새 제품이 나오면 이 배열에 항목을 추가하는 것만으로 사이트 전체(홈, Products,
 * sitemap, llms.txt 안내)에 노출된다. 컴포넌트 수정은 필요 없다.
 */

export type Product = {
  id: string;
  name: string;
  nameKo: string;
  tagline: string;
  /** 한 줄 요약 (국문) */
  summaryKo: string;
  /** 검색엔진/AI를 위한 명확한 제품 정의 (영문) */
  definition: string;
  /** 제품 상세 설명 (국문, 문단 배열) */
  descriptionKo: string[];
  url: string;
  /** 사이트 내부 상세 페이지 경로 */
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
    nameKo: "마이데이",
    tagline: "Awake & Aware",
    summaryKo:
      "오늘의 중요한 일을 정하고, 하루를 살아가고, 하루를 돌아보는 의식 있는 하루 관리 앱.",
    definition:
      "MyDay is an iOS daily planning app by ONEUL designed around morning planning, daily focus, and evening reflection.",
    descriptionKo: [
      "MyDay는 미래의 할 일을 계속 쌓아두는 Todo 앱이 아닙니다. 오늘이라는 하루 단위에 집중하는 하루 관리 앱입니다.",
      "캘린더, 미리알림, 직접 입력으로 오늘의 일을 정리하고, 그중 중요한 일을 Must Do로 선택해 하루의 우선순위를 명확하게 만듭니다.",
      "아침에는 하루를 계획하고, 낮에는 오늘에 집중하고, 저녁에는 하루를 돌아봅니다. 이 사이클이 다음 날의 더 나은 하루로 이어집니다.",
    ],
    url: "https://myday.now",
    path: "/products/myday",
    platform: "iOS",
    applicationCategory: "ProductivityApplication",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
