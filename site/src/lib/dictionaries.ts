// UI strings for the three locales. App content (features, FAQs, privacy)
// lives with each app in src/content/; this file is only the site chrome.

import type { Locale } from "./i18n";
import type { AppStatus } from "@/content/apps";

export interface Dict {
  meta: { title: string; description: string };
  hub: {
    nav: { games: string; apps: string; poker: string; studio: string };
    /** The page's one solid action: the developer page on the App Store. */
    storeAction: string;
    /** The same action on narrow screens. */
    appStoreShort: string;
    headline: [string, string];
    intro: string;
    posterAlt: string; // {name} {subtitle}
    gamesTitle: string;
    gamesIntro: string;
    appsTitle: string;
    appsIntro: string;
    visit: string;
    appStore: string;
    storeSoon: string;
    tpTitle: string;
    tpLead: [string, string];
    tpBody: string;
    tpPairs: string;
    tpAction: string;
    tpCaption: string;
    tpShots: { home: string; equity: string; preflop: string; trainer: string };
    catTitle: string;
    catCols: { name: string; what: string; platforms: string; status: string };
    catOut: string;
    catNext: string;
    catWeb: string;
    catWebWhat: string;
    studioTitle: string;
    studioBody: string;
    facts: { label: string; value: string }[];
    contactTitle: string;
    contactLine: string;
    contactReply: string;
    city: string;
    footGames: string;
    footApps: string;
    footSites: string;
    footStudio: string;
    top: string;
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
    title: "App Factory — iPhone & Android Games and Apps from Singapore",
    description:
      "Calm puzzle games, poker tools and a Chinese, Japanese and Korean writing app for iPhone and Android, plus the free thinking.poker study site. Made by App Factory in Singapore.",
  },
  hub: {
    nav: { games: "Games", apps: "Apps", poker: "thinking.poker", studio: "Studio" },
    storeAction: "All apps on the App Store",
    appStoreShort: "App Store",
    headline: ["Small apps and games,", "made in Singapore."],
    intro:
      "App Factory is an independent studio making calm puzzle games, poker tools and a writing app for Chinese, Japanese and Korean, on iPhone and Android.",
    posterAlt: "App Store screenshot of {name}: {subtitle}",
    gamesTitle: "Games",
    gamesIntro: "Puzzle and card games for iPhone and Android. No timers you didn't ask for.",
    appsTitle: "Apps",
    appsIntro: "Tools for the poker table and the writing desk.",
    visit: "Visit site",
    appStore: "App Store",
    storeSoon: "App Store link on its way",
    tpTitle: "thinking.poker",
    tpLead: ["Run the numbers,", "then decide."],
    tpBody:
      "A free poker study site, written Chinese-first and also in English: an equity calculator for Hold'em and PLO, preflop charts, pot odds, ICM and SPR tools, trainers that turn the maths into reflexes, and articles on the basics. Everything runs in your browser, with no account.",
    tpPairs: "It pairs with Poker Night for the home game and TiltFree for reviewing your hands.",
    tpAction: "Open thinking.poker",
    tpCaption: "The home page, the equity calculator, preflop charts and the equity guess trainer.",
    tpShots: {
      home: "thinking.poker home page with a quick equity calculator showing aces against kings",
      equity: "The Hold'em and PLO equity calculator on thinking.poker",
      preflop: "Six-max preflop range chart with raise-first-in actions on thinking.poker",
      trainer: "The equity guess trainer on thinking.poker",
    },
    catTitle: "Everything we make",
    catCols: { name: "Name", what: "What it is", platforms: "Platforms", status: "Status" },
    catOut: "Out now",
    catNext: "In the works",
    catWeb: "Web",
    catWebWhat: "Free poker calculators, trainers and articles",
    studioTitle: "About the studio",
    studioBody:
      "App Factory builds small apps and games for phones and the web. Each one stays small enough to be good at one thing, and ships properly: its own site, a support page, a privacy policy, three languages, and a person who answers the email.",
    facts: [
      { label: "Founded", value: "2026" },
      { label: "Based in", value: "Singapore" },
      { label: "Languages", value: "English, 简体, 繁體" },
    ],
    contactTitle: "Contact",
    contactLine: "Ideas, bugs, partnerships or press: write to us.",
    contactReply: "Replies usually within two days",
    city: "Singapore",
    footGames: "Games",
    footApps: "Apps",
    footSites: "Websites",
    footStudio: "Studio",
    top: "Back to top",
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
    title: "App Factory — 新加坡独立工作室的 iPhone 与安卓游戏和应用",
    description:
      "治愈益智游戏、扑克工具，以及中日韩文字书写应用，支持 iPhone 和安卓；另有免费扑克学习网站 thinking.poker。由新加坡独立工作室 App Factory 打造。",
  },
  hub: {
    nav: { games: "游戏", apps: "应用", poker: "thinking.poker", studio: "工作室" },
    storeAction: "在 App Store 查看全部应用",
    appStoreShort: "App Store",
    headline: ["小巧的应用与游戏，", "在新加坡制作。"],
    intro:
      "App Factory 是新加坡的一间独立工作室，为 iPhone 和安卓打造治愈的益智游戏、扑克工具，以及中日韩文字书写应用。",
    posterAlt: "{name} 的 App Store 截图：{subtitle}",
    gamesTitle: "游戏",
    gamesIntro: "适合 iPhone 和安卓的益智与卡牌游戏，没有逼你赶时间的倒计时。",
    appsTitle: "应用",
    appsIntro: "牌桌上和书桌前用得上的工具。",
    visit: "访问网站",
    appStore: "App Store",
    storeSoon: "App Store 链接即将上线",
    tpTitle: "thinking.poker",
    tpLead: ["先算清楚，", "再做决定。"],
    tpBody:
      "免费的扑克学习网站，以中文为主，也有英文版：德州与奥马哈胜率计算器、翻牌前范围表、底池赔率、ICM 与 SPR 工具，把计算练成直觉的训练器，以及入门文章。全部在浏览器里运行，不需要账号。",
    tpPairs: "与记录家庭局的 Poker Night、复盘手牌的 TiltFree 搭配使用。",
    tpAction: "打开 thinking.poker",
    tpCaption: "首页、胜率计算器、翻牌前范围表和胜率估算训练。",
    tpShots: {
      home: "thinking.poker 首页，快速胜率计算显示 AA 对 KK",
      equity: "thinking.poker 的德州／奥马哈胜率计算器",
      preflop: "thinking.poker 的六人桌翻牌前范围表",
      trainer: "thinking.poker 的胜率估算训练",
    },
    catTitle: "我们做的全部产品",
    catCols: { name: "名称", what: "简介", platforms: "平台", status: "状态" },
    catOut: "已推出",
    catNext: "开发中",
    catWeb: "网页",
    catWebWhat: "免费扑克计算器、训练与文章",
    studioTitle: "关于工作室",
    studioBody:
      "App Factory 为手机和网页打造小巧的应用与游戏。每一款都保持小而专，只做好一件事；上线时也做足功课：独立网站、支持页面、隐私政策、三种语言，还有真人回复的邮箱。",
    facts: [
      { label: "成立", value: "2026" },
      { label: "所在地", value: "新加坡" },
      { label: "语言", value: "English、简体、繁體" },
    ],
    contactTitle: "联系我们",
    contactLine: "想法、问题、合作或媒体采访，欢迎来信。",
    contactReply: "通常两天内回复",
    city: "新加坡",
    footGames: "游戏",
    footApps: "应用",
    footSites: "网站",
    footStudio: "工作室",
    top: "回到顶部",
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
    title: "App Factory — 新加坡獨立工作室的 iPhone 與 Android 遊戲和 App",
    description:
      "療癒益智遊戲、撲克工具，以及中日韓文字書寫 App，支援 iPhone 與 Android；另有免費撲克學習網站 thinking.poker。由新加坡獨立工作室 App Factory 打造。",
  },
  hub: {
    nav: { games: "遊戲", apps: "App", poker: "thinking.poker", studio: "工作室" },
    storeAction: "在 App Store 查看全部 App",
    appStoreShort: "App Store",
    headline: ["小巧的 App 與遊戲，", "在新加坡製作。"],
    intro:
      "App Factory 是新加坡的一間獨立工作室，為 iPhone 與 Android 打造療癒的益智遊戲、撲克工具，以及中日韓文字書寫 App。",
    posterAlt: "{name} 的 App Store 截圖：{subtitle}",
    gamesTitle: "遊戲",
    gamesIntro: "適合 iPhone 與 Android 的益智與卡牌遊戲，沒有逼你趕時間的倒數計時。",
    appsTitle: "App",
    appsIntro: "牌桌上和書桌前用得上的工具。",
    visit: "前往網站",
    appStore: "App Store",
    storeSoon: "App Store 連結即將上線",
    tpTitle: "thinking.poker",
    tpLead: ["先算清楚，", "再做決定。"],
    tpBody:
      "免費的撲克學習網站，以中文為主，也有英文版：德州與奧馬哈勝率計算器、翻牌前範圍表、底池賠率、ICM 與 SPR 工具，把計算練成直覺的訓練器，以及入門文章。全部在瀏覽器裡運算，不需要帳號。",
    tpPairs: "與記錄家庭局的 Poker Night、複盤手牌的 TiltFree 搭配使用。",
    tpAction: "打開 thinking.poker",
    tpCaption: "首頁、勝率計算器、翻牌前範圍表和勝率估算訓練。",
    tpShots: {
      home: "thinking.poker 首頁，快速勝率計算顯示 AA 對 KK",
      equity: "thinking.poker 的德州／奧馬哈勝率計算器",
      preflop: "thinking.poker 的六人桌翻牌前範圍表",
      trainer: "thinking.poker 的勝率估算訓練",
    },
    catTitle: "我們做的全部產品",
    catCols: { name: "名稱", what: "簡介", platforms: "平台", status: "狀態" },
    catOut: "已推出",
    catNext: "開發中",
    catWeb: "網頁",
    catWebWhat: "免費撲克計算器、訓練與文章",
    studioTitle: "關於工作室",
    studioBody:
      "App Factory 為手機與網頁打造小巧的 App 與遊戲。每一款都保持小而專，只做好一件事；上架時也做足功課：獨立網站、支援頁面、隱私權政策、三種語言，還有真人回覆的信箱。",
    facts: [
      { label: "成立", value: "2026" },
      { label: "所在地", value: "新加坡" },
      { label: "語言", value: "English、简体、繁體" },
    ],
    contactTitle: "聯絡我們",
    contactLine: "想法、問題、合作或媒體採訪，歡迎來信。",
    contactReply: "通常兩天內回覆",
    city: "新加坡",
    footGames: "遊戲",
    footApps: "App",
    footSites: "網站",
    footStudio: "工作室",
    top: "回到頂部",
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
