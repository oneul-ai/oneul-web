import type { Dictionary } from "@/lib/i18n/dictionaries/ko";

/** 繁體中文 (台灣/香港/澳門). 간체 사전을 그대로 변환하지 않고 대만식 용어로 쓴다. */
export const zhTw: Dictionary = {
  languageName: "繁體中文",
  company: {
    legalName: "ONEUL Inc.",
    legalNameKo: "주식회사 오엔이유엘",
    definition:
      "ONEUL Inc. 是一家韓國軟體公司，致力於打造幫助人們更有意識地過好每一天的數位產品。",
    description:
      "ONEUL Inc. 是一家專注於「今天」的韓國軟體公司。透過每日管理 App MyDay，幫助人們規劃、專注並回顧自己的一天。",
    sloganSub: "覺察今天。",
  },
  meta: {
    keywords: [
      "ONEUL",
      "ONEUL Inc.",
      "오늘",
      "今天",
      "MyDay",
      "每日規劃 App",
      "每日計畫",
      "每日回顧",
      "生產力 App",
      "intentional living",
      "有意識的生活",
      "韓國軟體公司",
    ],
  },
  nav: {
    about: "About",
    products: "Products",
    philosophy: "Philosophy",
    contact: "Contact",
    mainMenu: "主選單",
    mobileMenu: "行動版選單",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    homeAria: "ONEUL 首頁",
    language: "選擇語言",
  },
  entry: {
    company: "公司網站",
    product: "產品網站",
    nav: "選擇網站",
  },
  common: {
    discover: "認識 {name}",
    learnMore: "了解更多",
    home: "首頁",
  },
  hero: {
    aria: "關於 ONEUL",
    body: ["ONEUL 打造的產品，", "幫助人們更有意識地過好今天。"],
  },
  about: {
    label: "About",
    heading: "We build for today.",
    p1: [
      "規劃未來的工具已經夠多了。",
      "真正幫助你過好今天的工具卻很少。",
    ],
    p2: "ONEUL 打造的產品，幫助人們更清楚地覺察自己的時間與行動，以自己的方式過好「今天」這一天。",
    more: "進一步認識 ONEUL",
  },
  philosophy: {
    label: "Philosophy",
    heading: "Three principles.",
    items: [
      {
        title: "Respect",
        line1: "Respect each other, always.",
        line2: "無論職位或資歷，我們都把彼此當作平等的夥伴來尊重。",
      },
      {
        title: "Execution",
        line1: "Show what's good for users by building it.",
        line2: "對使用者有益的事，用行動而不是言語來證明。",
      },
      {
        title: "Integrity",
        line1: "Do what's right, not what's easy.",
        line2: "不走輕鬆的路，而是依據我們的理念選擇正確的路。",
      },
    ],
  },
  products: {
    label: "Products",
    heading: "Made for today.",
    cycleAria: "{name} 每日循環",
  },
  cycle: [
    {
      time: "Morning",
      title: "規劃我的一天",
      body: "從行事曆、提醒事項或手動輸入，把今天要做的事集中在一處。",
    },
    {
      time: "Day",
      title: "專注於今天",
      body: "把重要的事設為 Must Do，讓一天的優先順序一目了然。",
    },
    {
      time: "Evening",
      title: "回顧我的一天",
      body: "回顧並結束這一天。這份回顧會帶來更好的明天。",
    },
  ],
  manifesto: {
    aria: "ONEUL 宣言",
    lines: [
      "We spend much of our lives",
      "thinking about yesterday",
      "or preparing for tomorrow.",
    ],
    before: "But life happens ",
    today: "today",
    after: ".",
    sub: "ONEUL 打造的工具，讓你覺察到這一點。",
  },
  footer: {
    menuAria: "頁尾選單",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
  aboutPage: {
    metaDescription:
      "關於 ONEUL Inc.。ONEUL 是一家專注於「今天」的韓國軟體公司。",
    heading: "We build for today.",
    p1: "ONEUL 這個名字來自韓文的「오늘」，意思是「今天」。比起對未來的焦慮或對過去的悔恨，我們更希望打造的產品能幫助人們更有意識地活在此刻、過好今天。",
    p2: "比起龐大的平台，我們更追求解決小而明確問題的好產品。我們希望超越單純的生產力工具，幫助使用者把生活整理得更有條理、更有意識。",
    principlesHeading: "How we make things.",
    principles: [
      {
        title: "Respect",
        body: "無論職位、資歷或職務，我們都把彼此當作平等的夥伴來尊重。意見自由表達，回饋坦誠直接，對人的禮貌始終如一。",
      },
      {
        title: "Execution",
        body: "對使用者有益的事，用真實的產品和成果來證明，而不是用言語或文件。與其長時間討論，不如做出小版本、親自使用、快速修正。",
      },
      {
        title: "Integrity",
        body: "當輕鬆的路與正確的路出現分岔時，我們依據自己的理念選擇正確的路。我們以是否真正幫助到使用者的一天為標準做決定，而不是短期指標。",
      },
    ],
    cta: "查看我們的產品",
  },
  productsPage: {
    metaDescription:
      "ONEUL 的產品。介紹幫助你規劃、專注並回顧一天的每日管理 App MyDay。",
    heading: "Made for today.",
    intro:
      "ONEUL 打造的產品幫助人們更有意識地過好今天。比起功能繁多，我們更追求核心體驗清晰的產品。",
  },
  mydayPage: {
    metaTitle: "MyDay — Awake & Aware",
    metaDescription:
      "MyDay 是 ONEUL 打造的 iOS 每日管理 App。早上規劃一天，白天專注於 Must Do，晚上回顧這一天。",
    cycleHeading: "一天的循環",
    cycleIntro:
      "MyDay 的核心體驗，是由早上規劃、白天專注、晚上回顧串連而成、以「一天」為單位的循環。",
    focusHeading: "只專注於今天",
    focusP1:
      "傳統的待辦 App 會不斷堆積未來的任務。MyDay 則專注於「今天」這一天。",
    focusP2:
      "不再是越積越多的清單，只保留今天要做的事，並從中選出最重要的設為 Must Do。當一天的優先順序清楚了，過這一天的方式也會跟著改變。",
    moreAt: "前往 {host} 了解更多",
  },
  privacyPage: {
    metaDescription: "ONEUL Inc. 網站隱私權政策。",
    heading: "Privacy Policy",
    p1: "本網站（{url}）是 {legal}（{legalKo}）的官方網站。",
    p2: "本網站不提供註冊、登入或個人資料填寫功能，也不直接蒐集訪客的個人資料。",
    p3: "ONEUL 產品（如 MyDay）的隱私權政策將於各產品的官方網站另行說明。",
    contact: "隱私權相關詢問：",
  },
  termsPage: {
    metaDescription: "ONEUL Inc. 網站使用說明。",
    heading: "Terms",
    p1: "本網站是用於介紹 {legal}（{legalKo}）公司及其產品的資訊型網站。",
    p2: "本網站刊載的所有內容（文字、標誌、圖像等）之著作權歸 {legal} 所有，未經事先同意不得以商業目的重製或散布。",
    p3: "ONEUL 產品（如 MyDay）的服務條款將於各產品的官方網站另行說明。",
  },
  product: {
    myday: {
      tagline: "Awake & Aware",
      summary:
        "決定今天最重要的事，過好這一天，再回顧這一天。一款有意識的每日管理 App。",
      definition:
        "MyDay 是 ONEUL 打造的 iOS 每日管理 App，圍繞早上規劃、白天專注與晚上回顧而設計。",
      description: [
        "MyDay 不是不斷堆積未來任務的待辦 App，而是專注於「今天」這一天的每日管理 App。",
        "從行事曆、提醒事項或手動輸入整理今天要做的事，並把其中重要的設為 Must Do，讓一天的優先順序一目了然。",
        "早上規劃一天，白天專注於今天，晚上回顧這一天。這個循環會帶來更好的明天。",
      ],
    },
  },
};
