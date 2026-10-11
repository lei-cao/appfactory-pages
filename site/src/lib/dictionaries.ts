// UI strings for the three locales. App content (features, FAQs, privacy)
// lives with each app in src/content/; this file is only the site chrome.

import type { Locale } from "./i18n";
import type { AppStatus } from "@/content/apps";

export interface Dict {
  meta: { title: string; description: string };
  hub: {
    location: string;
    est: string;
    headline: [string, string];
    /** Sentence-final punctuation rendered as the brand accent. */
    period: string;
    intro: string;
    explore: string;
    contact: string;
    nav: { apps: string; games: string; soon: string; studio: string };
    statLive: string;
    statSoon: string;
    statLangs: string;
    appsTitle: string;
    appsIntro: string;
    gamesTitle: string;
    gamesIntro: string;
    soonTitle: string;
    soonIntro: string;
    visit: string;
    appStore: string;
    kind: { app: string; game: string };
    studioEyebrow: string;
    studioTitle: string;
    studioBody: string;
    principles: { title: string; body: string }[];
    contactTitle: string;
    contactBody: string;
    copyright: string; // {year}
  };
  status: Record<AppStatus, string>;
  badges: {
    comingSoon: string; // eyebrow when there's no store link yet
    download: string; // eyebrow when live
  };
  app: {
    navSupport: string;
    navPrivacy: string;
    navTerms: string;
    /** Poker Night only, en/zh-cn only — see the `guide` block below. */
    navGuide: string;
    whatItDoes: string;
    screens: string;
    footerFrom: string; // "{name} · build {n} from"
    footSupport: string;
    footPrivacy: string;
    footTerms: string;
    footGuide: string;
    footContact: string;
  };
  /** Poker Night's home-game guide (only rendered for that app). */
  guide: {
    eyebrow: string;
    title: string; // "{name} home-game guide"
    intro: string;
    back: string; // link back to the guide index
    minutesRead: string; // "{n} min read"
    updated: string; // "Updated {date}"
  };
  support: {
    eyebrow: string;
    title: string; // {name}
    intro: string;
    hint: string;
    faqTitle: string;
    mailSubject: string; // {name} {version}
    meta: string; // {name} — meta description
  };
  privacy: {
    updated: string; // {date}
    title: string;
    intro: string; // {name}
    meta: string; // {name} — meta description
  };
  terms: {
    updated: string; // {date}
    title: string;
    intro: string; // {name}
    meta: string; // {name} — meta description
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    back: string;
  };
}

const en: Dict = {
  meta: {
    title: "App Factory — Useful Apps and Playful Games",
    description:
      "Discover useful apps and playful games from App Factory, an independent studio building for mobile and web.",
  },
  hub: {
    location: "appfactory.sg · singapore",
    est: "est. 2026",
    headline: ["Small apps.", "Big possibilities"],
    period: ".",
    intro:
      "Useful tools. Playful games. Made for your everyday. We turn everyday ideas into apps you can use and games you can enjoy.",
    explore: "Explore our apps",
    contact: "Say hello",
    nav: { apps: "Apps", games: "Games", soon: "Coming soon", studio: "Studio" },
    statLive: "on the App Store",
    statSoon: "in the works",
    statLangs: "languages",
    appsTitle: "Useful apps",
    appsIntro:
      "Tools that do one job well — at the poker table, at the practice desk, wherever you need them.",
    gamesTitle: "Playful games",
    gamesIntro:
      "Calm puzzles and quick runs, built for a few good minutes at a time.",
    soonTitle: "Coming soon",
    soonIntro:
      "Next off the line. Each one already has its own page — tap in to see where it's at.",
    visit: "Visit site",
    appStore: "App Store",
    kind: { app: "App", game: "Game" },
    studioEyebrow: "The studio",
    studioTitle: "One small studio in Singapore.",
    studioBody:
      "App Factory is an independent studio building for mobile and web. Every app stays small enough to be good at one thing, and ships properly: its own site, support page and privacy policy.",
    principles: [
      { title: "Focused", body: "One app, one job. No feature soup." },
      { title: "Three languages", body: "English, 简体中文 and 繁體中文 from the first release." },
      { title: "Looked after", body: "A real support page for every app, and a person who answers email." },
    ],
    contactTitle: "Have an idea, a bug, or a partnership in mind?",
    contactBody: "We read every message.",
    copyright: "© {year} App Factory · Singapore",
  },
  status: {
    building: "In the works",
    testflight: "TestFlight beta",
    "in-review": "In App Review",
    live: "Live",
  },
  badges: { comingSoon: "coming soon to", download: "download on" },
  app: {
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    navGuide: "Guide",
    whatItDoes: "what it does",
    screens: "screens",
    footerFrom: "{name} · build {n} from",
    footSupport: "support",
    footPrivacy: "privacy",
    footTerms: "terms",
    footGuide: "guide",
    footContact: "contact",
  },
  guide: {
    eyebrow: "home-game guide",
    title: "{name} home-game guide",
    intro:
      "Seventeen short articles on the rules, hand rankings, hosting and etiquette — the same guide that's built into the app, plus an English–中文 glossary.",
    back: "← All articles",
    minutesRead: "{n} min read",
    updated: "Updated {date}",
  },
  support: {
    eyebrow: "support",
    title: "Get help with {name}",
    intro:
      "Email is the fastest way to reach us — a real person reads every message, usually within two days.",
    hint: "Include your device model and what you tapped right before the problem — it usually cuts a round-trip.",
    faqTitle: "common questions",
    mailSubject: "{name} support (v{version})",
    meta: "Help for {name}: answers to common questions and how to reach a real person at App Factory.",
  },
  privacy: {
    updated: "last updated {date}",
    title: "Privacy Policy",
    intro:
      '{name} is developed by lei cao ("we"). This policy explains what data the app handles and why.',
    meta: "{name} privacy policy: what data the app handles, why, and the choices you have.",
  },
  terms: {
    updated: "last updated {date}",
    title: "Terms of Use",
    intro:
      "These terms govern your use of {name}. By downloading or using the app you agree to them.",
    meta: "Terms of Use for {name}: the rules for using the app and what you can expect from App Factory.",
  },
  notFound: {
    eyebrow: "status 404",
    title: "Nothing on the line here.",
    body: "This page doesn't exist — the app may not have shipped yet, or the address has a typo.",
    back: "Back to the factory floor",
  },
};

const zhCn: Dict = {
  meta: {
    title: "App Factory — 实用应用与趣味游戏",
    description:
      "探索 App Factory 的实用应用与趣味游戏。我们是一间为手机和网页打造产品的独立工作室。",
  },
  hub: {
    location: "appfactory.sg · 新加坡",
    est: "始于 2026",
    headline: ["小小应用，", "无限可能"],
    period: "。",
    intro:
      "实用工具，趣味游戏，为日常生活而造。我们把日常灵感变成好用的应用和好玩的游戏。",
    explore: "探索我们的应用",
    contact: "联系我们",
    nav: { apps: "应用", games: "游戏", soon: "即将推出", studio: "工作室" },
    statLive: "已上架 App Store",
    statSoon: "开发中",
    statLangs: "种语言",
    appsTitle: "实用应用",
    appsIntro: "把一件事做好的工具——牌桌上、练字桌前，需要时就在手边。",
    gamesTitle: "趣味游戏",
    gamesIntro: "安静的解谜与快节奏的闯关，几分钟就能玩得尽兴。",
    soonTitle: "即将推出",
    soonIntro: "产线上的下一批。每一款都已有自己的页面，点进去看看进度。",
    visit: "访问网站",
    appStore: "App Store",
    kind: { app: "应用", game: "游戏" },
    studioEyebrow: "关于工作室",
    studioTitle: "新加坡的一间小工作室。",
    studioBody:
      "App Factory 是一间为手机和网页打造产品的独立工作室。每个应用都保持小而专，只做好一件事；上线时也做足功课：独立网站、支持页面与隐私政策一应俱全。",
    principles: [
      { title: "专注", body: "一个应用，一件事。不堆砌功能。" },
      { title: "三种语言", body: "从第一版起就支持 English、简体中文与繁體中文。" },
      { title: "有人照看", body: "每个应用都有支持页面，邮件有真人回复。" },
    ],
    contactTitle: "有想法、发现问题，或想谈合作？",
    contactBody: "每一封邮件我们都会读。",
    copyright: "© {year} App Factory · 新加坡",
  },
  status: {
    building: "开发中",
    testflight: "TestFlight 测试中",
    "in-review": "App Store 审核中",
    live: "已上线",
  },
  badges: { comingSoon: "即将登陆", download: "前往下载" },
  app: {
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",
    navGuide: "指南",
    whatItDoes: "功能亮点",
    screens: "应用截图",
    footerFrom: "{name} · 编号 {n} · 出自",
    footSupport: "支持",
    footPrivacy: "隐私",
    footTerms: "条款",
    footGuide: "指南",
    footContact: "联系",
  },
  guide: {
    eyebrow: "家庭牌局指南",
    title: "{name} 家庭牌局指南",
    intro:
      "17 篇关于规则、牌型、组局与礼仪的短文——和内置在应用里的指南完全一样，还附带中英文术语表。",
    back: "← 所有文章",
    minutesRead: "{n} 分钟读完",
    updated: "更新于 {date}",
  },
  support: {
    eyebrow: "支持",
    title: "{name} 支持与帮助",
    intro: "邮件是联系我们最快的方式——每一封都有真人阅读，通常两天内回复。",
    hint: "请附上设备型号，以及出问题前你点了什么——通常能省一个来回。",
    faqTitle: "常见问题",
    mailSubject: "{name} 支持（v{version}）",
    meta: "{name} 帮助中心：常见问题解答，以及如何联系 App Factory 的真人客服。",
  },
  privacy: {
    updated: "最近更新 {date}",
    title: "隐私政策",
    intro: "{name} 由 lei cao（“我们”）开发。本政策说明应用会处理哪些数据以及原因。",
    meta: "{name} 隐私政策：应用会处理哪些数据、为什么，以及你可以做的选择。",
  },
  terms: {
    updated: "最近更新 {date}",
    title: "使用条款",
    intro: "本条款约束你对 {name} 的使用。下载或使用本应用即表示你同意这些条款。",
    meta: "{name} 使用条款：使用本应用的规则，以及 App Factory 的承诺。",
  },
  notFound: {
    eyebrow: "状态 404",
    title: "这条产线上什么都没有。",
    body: "页面不存在——应用可能还没发布，或者地址打错了。",
    back: "回到工厂车间",
  },
};

const zhTw: Dict = {
  meta: {
    title: "App Factory — 實用 App 與趣味遊戲",
    description:
      "探索 App Factory 的實用 App 與趣味遊戲。我們是一間為手機與網頁打造產品的獨立工作室。",
  },
  hub: {
    location: "appfactory.sg · 新加坡",
    est: "始於 2026",
    headline: ["小小 App，", "無限可能"],
    period: "。",
    intro:
      "實用工具，趣味遊戲，為日常生活而造。我們把日常靈感變成好用的 App 和好玩的遊戲。",
    explore: "探索我們的 App",
    contact: "聯絡我們",
    nav: { apps: "App", games: "遊戲", soon: "即將推出", studio: "工作室" },
    statLive: "已上架 App Store",
    statSoon: "製作中",
    statLangs: "種語言",
    appsTitle: "實用 App",
    appsIntro: "把一件事做好的工具——牌桌上、練字桌前，需要時就在手邊。",
    gamesTitle: "趣味遊戲",
    gamesIntro: "安靜的解謎與快節奏的闖關，幾分鐘就能玩得盡興。",
    soonTitle: "即將推出",
    soonIntro: "產線上的下一批。每一款都已有自己的頁面，點進去看看進度。",
    visit: "前往網站",
    appStore: "App Store",
    kind: { app: "App", game: "遊戲" },
    studioEyebrow: "關於工作室",
    studioTitle: "新加坡的一間小工作室。",
    studioBody:
      "App Factory 是一間為手機與網頁打造產品的獨立工作室。每個 App 都保持小而專，只做好一件事；上架時也做足功課：獨立網站、支援頁面與隱私權政策一應俱全。",
    principles: [
      { title: "專注", body: "一個 App，一件事。不堆砌功能。" },
      { title: "三種語言", body: "從第一版起就支援 English、简体中文與繁體中文。" },
      { title: "有人照看", body: "每個 App 都有支援頁面，郵件有真人回覆。" },
    ],
    contactTitle: "有想法、發現問題，或想談合作？",
    contactBody: "每一封郵件我們都會讀。",
    copyright: "© {year} App Factory · 新加坡",
  },
  status: {
    building: "開發中",
    testflight: "TestFlight 測試中",
    "in-review": "App Store 審核中",
    live: "已上架",
  },
  badges: { comingSoon: "即將登陸", download: "前往下載" },
  app: {
    navSupport: "支援",
    navPrivacy: "隱私",
    navTerms: "條款",
    navGuide: "指南",
    whatItDoes: "功能亮點",
    screens: "畫面截圖",
    footerFrom: "{name} · 編號 {n} · 出自",
    footSupport: "支援",
    footPrivacy: "隱私",
    footTerms: "條款",
    footGuide: "指南",
    footContact: "聯絡",
  },
  guide: {
    eyebrow: "家庭牌局指南",
    title: "{name} 家庭牌局指南",
    intro:
      "17 篇關於規則、牌型、組局與禮儀的短文——與 App 內建的指南完全相同，並附中英術語表。",
    back: "← 所有文章",
    minutesRead: "{n} 分鐘讀完",
    updated: "更新於 {date}",
  },
  support: {
    eyebrow: "支援",
    title: "{name} 支援與協助",
    intro: "Email 是聯絡我們最快的方式——每一封都由真人閱讀，通常兩天內回覆。",
    hint: "請附上裝置型號，以及出問題前你點了什麼——通常能省一個來回。",
    faqTitle: "常見問題",
    mailSubject: "{name} 支援（v{version}）",
    meta: "{name} 說明中心：常見問題解答，以及如何聯絡 App Factory 的真人客服。",
  },
  privacy: {
    updated: "最近更新 {date}",
    title: "隱私權政策",
    intro:
      "{name} 由 lei cao（「我們」）開發。本政策說明應用程式會處理哪些資料以及原因。",
    meta: "{name} 隱私權政策：應用會處理哪些資料、為什麼，以及你可以做的選擇。",
  },
  terms: {
    updated: "最近更新 {date}",
    title: "使用條款",
    intro: "本條款規範你對 {name} 的使用。下載或使用本應用程式即表示你同意這些條款。",
    meta: "{name} 使用條款：使用本 App 的規則，以及 App Factory 的承諾。",
  },
  notFound: {
    eyebrow: "狀態 404",
    title: "這條產線上什麼都沒有。",
    body: "頁面不存在——App 可能還沒發布，或網址打錯了。",
    back: "回到工廠",
  },
};

const DICTS: Record<Locale, Dict> = { en, "zh-cn": zhCn, "zh-tw": zhTw };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
