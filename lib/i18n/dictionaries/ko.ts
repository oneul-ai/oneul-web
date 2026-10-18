/**
 * 한국어 사전 — 모든 로케일 사전의 원본(타입 기준).
 * 새 문구를 추가할 때는 여기 먼저 추가하고 en/ja/zh 에 같은 키를 채운다.
 */

export type Dictionary = {
  /** 언어 자기 이름 */
  languageName: string;
  company: {
    legalName: string;
    /** 현지어 법인명. 한국어 외 로케일에서는 영문/한글 병기를 위해 한글명을 그대로 둔다. */
    legalNameKo: string;
    /** 검색엔진/AI가 회사를 이해할 수 있는 한 문장 정의 */
    definition: string;
    /** 메타 description */
    description: string;
    /** "오늘을 자각하다." 에 해당하는 보조 슬로건 */
    sloganSub: string;
  };
  meta: {
    keywords: string[];
  };
  nav: {
    about: string;
    products: string;
    philosophy: string;
    contact: string;
    mainMenu: string;
    mobileMenu: string;
    openMenu: string;
    closeMenu: string;
    homeAria: string;
    language: string;
  };
  entry: {
    company: string;
    product: string;
    nav: string;
  };
  common: {
    discover: string;
    learnMore: string;
    home: string;
  };
  hero: {
    aria: string;
    body: [string, string];
  };
  about: {
    label: string;
    heading: string;
    p1: [string, string];
    p2: string;
    more: string;
  };
  philosophy: {
    label: string;
    heading: string;
    items: { title: string; line1: string; line2: string }[];
  };
  products: {
    label: string;
    heading: string;
    cycleAria: string;
  };
  cycle: { time: string; title: string; body: string }[];
  manifesto: {
    aria: string;
    lines: [string, string, string];
    before: string;
    today: string;
    after: string;
    sub: string;
  };
  footer: {
    menuAria: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  aboutPage: {
    metaDescription: string;
    heading: string;
    p1: string;
    p2: string;
    principlesHeading: string;
    principles: { title: string; body: string }[];
    cta: string;
  };
  productsPage: {
    metaDescription: string;
    heading: string;
    intro: string;
  };
  mydayPage: {
    metaTitle: string;
    metaDescription: string;
    cycleHeading: string;
    cycleIntro: string;
    focusHeading: string;
    focusP1: string;
    focusP2: string;
    moreAt: string;
  };
  privacyPage: {
    metaDescription: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    contact: string;
  };
  termsPage: {
    metaDescription: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
  };
  product: {
    myday: {
      tagline: string;
      summary: string;
      definition: string;
      description: string[];
    };
  };
};

export const ko: Dictionary = {
  languageName: "한국어",
  company: {
    legalName: "ONEUL Inc.",
    legalNameKo: "주식회사 오엔이유엘",
    definition:
      "ONEUL(주식회사 오엔이유엘)은 사람들이 오늘 하루를 더 의식적으로 살아갈 수 있도록 돕는 제품을 만드는 한국 소프트웨어 회사입니다.",
    description:
      "ONEUL Inc.(주식회사 오엔이유엘)은 오늘에 집중하는 제품을 만드는 한국 소프트웨어 회사입니다. 하루 관리 앱 MyDay로 하루 계획, 집중, 회고를 돕습니다.",
    sloganSub: "오늘을 자각하다.",
  },
  meta: {
    keywords: [
      "ONEUL",
      "ONEUL Inc.",
      "오엔이유엘",
      "주식회사 오엔이유엘",
      "오늘",
      "MyDay",
      "마이데이",
      "하루 관리 앱",
      "하루 계획",
      "하루 회고",
      "데일리 플래너",
      "생산성 앱",
      "intentional living",
      "mindful productivity",
    ],
  },
  nav: {
    about: "About",
    products: "Products",
    philosophy: "Philosophy",
    contact: "Contact",
    mainMenu: "주요 메뉴",
    mobileMenu: "모바일 메뉴",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    homeAria: "ONEUL 홈",
    language: "언어 선택",
  },
  entry: {
    company: "회사 웹사이트",
    product: "제품 웹사이트",
    nav: "웹사이트 선택",
  },
  common: {
    discover: "Discover {name}",
    learnMore: "Learn more",
    home: "Home",
  },
  hero: {
    aria: "ONEUL 소개",
    body: [
      "ONEUL은 오늘을 더 의식적으로 살아갈 수 있도록",
      "돕는 제품을 만듭니다.",
    ],
  },
  about: {
    label: "About",
    heading: "We build for today.",
    p1: [
      "미래를 계획하는 도구는 이미 충분히 많습니다.",
      "정작 오늘을 잘 살아가게 돕는 도구는 드뭅니다.",
    ],
    p2: "ONEUL은 사람들이 자신의 시간과 행동을 조금 더 의식하고, 오늘이라는 하루를 자신답게 살아갈 수 있도록 돕는 제품을 만듭니다.",
    more: "More about ONEUL",
  },
  philosophy: {
    label: "Philosophy",
    heading: "Three principles.",
    items: [
      {
        title: "Respect",
        line1: "Respect each other, always.",
        line2: "역할과 연차에 상관없이 서로를 동등한 동료로 존중합니다.",
      },
      {
        title: "Execution",
        line1: "Show what's good for users by building it.",
        line2: "유저에게 좋은 것은 말이 아니라 실행으로 보여줍니다.",
      },
      {
        title: "Integrity",
        line1: "Do what's right, not what's easy.",
        line2: "쉬운 길보다 우리의 철학에 비추어 옳은 길을 택합니다.",
      },
    ],
  },
  products: {
    label: "Products",
    heading: "Made for today.",
    cycleAria: "{name} 하루 사이클",
  },
  cycle: [
    {
      time: "Morning",
      title: "나의 하루 계획하기",
      body: "캘린더, 미리알림, 직접 입력으로 오늘의 일을 한곳에 정리합니다.",
    },
    {
      time: "Day",
      title: "오늘에 집중하기",
      body: "중요한 일을 Must Do로 선택해 하루의 우선순위를 명확하게 만듭니다.",
    },
    {
      time: "Evening",
      title: "나의 하루 돌아보기",
      body: "하루를 돌아보며 마무리합니다. 그 회고가 다음 날의 더 나은 하루로 이어집니다.",
    },
  ],
  manifesto: {
    aria: "ONEUL 선언",
    lines: [
      "We spend much of our lives",
      "thinking about yesterday",
      "or preparing for tomorrow.",
    ],
    before: "But life happens ",
    today: "today",
    after: ".",
    sub: "ONEUL은 그 사실을 알아차리게 하는 도구를 만듭니다.",
  },
  footer: {
    menuAria: "푸터 메뉴",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
  aboutPage: {
    metaDescription:
      "ONEUL Inc.(주식회사 오엔이유엘) 소개. ONEUL은 오늘에 집중하는 제품을 만드는 한국 소프트웨어 회사입니다.",
    heading: "We build for today.",
    p1: "ONEUL은 한국어 ‘오늘’에서 출발한 이름입니다. 우리는 사람들이 미래에 대한 불안이나 지나간 시간에 대한 후회보다, 지금 이 순간과 오늘을 더 의식적으로 살아갈 수 있도록 돕는 제품을 만듭니다.",
    p2: "거대한 플랫폼보다, 작지만 명확한 문제를 해결하는 좋은 제품을 지향합니다. 단순한 생산성 도구를 넘어 사용자의 삶을 조금 더 정돈하고 의식적으로 만드는 방향을 추구합니다.",
    principlesHeading: "How we make things.",
    principles: [
      {
        title: "Respect",
        body: "역할, 연차, 직군에 상관없이 서로를 동등한 동료로 존중합니다. 의견은 자유롭게, 피드백은 솔직하게, 사람에 대한 예의는 끝까지 지킵니다.",
      },
      {
        title: "Execution",
        body: "유저에게 좋은 것은 말이나 문서가 아니라 실제 제품과 결과로 보여줍니다. 오래 논의하기보다 작게 만들어 직접 써보고, 빠르게 고칩니다.",
      },
      {
        title: "Integrity",
        body: "쉬운 길과 옳은 길이 갈릴 때, 우리의 철학에 비추어 옳은 길을 택합니다. 단기 지표보다 유저의 하루에 진짜 도움이 되는지를 기준으로 결정합니다.",
      },
    ],
    cta: "See our products",
  },
  productsPage: {
    metaDescription:
      "ONEUL이 만드는 제품. 하루 계획, 집중, 회고를 돕는 하루 관리 앱 MyDay를 소개합니다.",
    heading: "Made for today.",
    intro:
      "ONEUL은 오늘을 더 의식적으로 살아가게 하는 제품을 만듭니다. 기능이 많은 제품보다, 핵심 경험이 명확한 제품을 지향합니다.",
  },
  mydayPage: {
    metaTitle: "MyDay — Awake & Aware",
    metaDescription:
      "MyDay(마이데이)는 ONEUL이 만든 iOS 하루 관리 앱입니다. 아침에 하루를 계획하고, 낮에는 Must Do에 집중하고, 저녁에 하루를 돌아봅니다.",
    cycleHeading: "하루의 사이클",
    cycleIntro:
      "MyDay의 핵심 경험은 아침 계획, 낮의 집중, 저녁 회고로 이어지는 하루 단위의 사이클입니다.",
    focusHeading: "오늘만 집중",
    focusP1:
      "기존 할 일 관리 앱은 미래의 할 일을 계속 쌓아두는 방식입니다. MyDay는 오늘이라는 하루 단위에 집중합니다.",
    focusP2:
      "쌓여가는 목록 대신 오늘 해야 할 일만 남기고, 그중 가장 중요한 일을 Must Do로 선택합니다. 하루의 우선순위가 명확해지면, 하루를 살아가는 방식이 달라집니다.",
    moreAt: "{host}에서 자세히 보기",
  },
  privacyPage: {
    metaDescription: "ONEUL Inc. 웹사이트 개인정보 처리방침.",
    heading: "Privacy Policy",
    p1: "본 웹사이트({url})는 {legal}({legalKo})의 공식 웹사이트입니다.",
    p2: "본 웹사이트는 회원가입, 로그인, 개인정보 입력 기능을 제공하지 않으며, 방문자의 개인정보를 직접 수집하지 않습니다.",
    p3: "ONEUL 제품(예: MyDay)의 개인정보 처리방침은 각 제품의 공식 웹사이트에서 별도로 안내합니다.",
    contact: "개인정보 관련 문의:",
  },
  termsPage: {
    metaDescription: "ONEUL Inc. 웹사이트 이용 안내.",
    heading: "Terms",
    p1: "본 웹사이트는 {legal}({legalKo})의 회사 및 제품 소개를 위한 정보 제공 목적의 웹사이트입니다.",
    p2: "본 웹사이트에 게시된 모든 콘텐츠(텍스트, 로고, 그래픽 등)의 저작권은 {legal}에 있으며, 사전 동의 없이 상업적 목적으로 복제·배포할 수 없습니다.",
    p3: "ONEUL 제품(예: MyDay)의 서비스 이용약관은 각 제품의 공식 웹사이트에서 별도로 안내합니다.",
  },
  product: {
    myday: {
      tagline: "Awake & Aware",
      summary:
        "오늘의 중요한 일을 정하고, 하루를 살아가고, 하루를 돌아보는 의식 있는 하루 관리 앱.",
      definition:
        "MyDay is an iOS daily planning app by ONEUL designed around morning planning, daily focus, and evening reflection.",
      description: [
        "MyDay는 미래의 할 일을 계속 쌓아두는 Todo 앱이 아닙니다. 오늘이라는 하루 단위에 집중하는 하루 관리 앱입니다.",
        "캘린더, 미리알림, 직접 입력으로 오늘의 일을 정리하고, 그중 중요한 일을 Must Do로 선택해 하루의 우선순위를 명확하게 만듭니다.",
        "아침에는 하루를 계획하고, 낮에는 오늘에 집중하고, 저녁에는 하루를 돌아봅니다. 이 사이클이 다음 날의 더 나은 하루로 이어집니다.",
      ],
    },
  },
};
