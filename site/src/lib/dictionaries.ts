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
    /** Sentence-final punctuation rendered as the indigo accent. */
    period: string;
    intro: string;
    ledger: string;
    counts: string; // {n} live-ish apps, {m} in the works
    build: string; // word before the build number
    nextSlot: string;
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
    whatItDoes: string;
    screens: string;
    footerFrom: string; // "{name} · build {n} from"
    footSupport: string;
    footPrivacy: string;
    footContact: string;
  };
  support: {
    eyebrow: string;
    title: string; // {name}
    intro: string;
    hint: string;
    faqTitle: string;
    mailSubject: string; // {name} {version}
  };
  privacy: {
    updated: string; // {date}
    title: string;
    intro: string; // {name}
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
    title: "appfactory — small apps, off the line",
    description:
      "appfactory is a one-person studio in Singapore where AI agents build, test, and ship small, focused mobile apps.",
  },
  hub: {
    location: "appfactory.sg · singapore",
    est: "est. 2026",
    headline: ["Small apps,", "off the line"],
    period: ".",
    intro:
      "appfactory is a one-person studio where AI agents build, test, and ship focused mobile apps — each one small enough to be good at one thing. This page is the line: every app, its build number, and where it is right now.",
    ledger: "build ledger",
    counts: "{n} on the line · {m} in the works",
    build: "build",
    nextSlot: "In the works — the next app is on the line.",
    copyright: "© {year} appfactory · lei cao, singapore",
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
    whatItDoes: "what it does",
    screens: "screens",
    footerFrom: "{name} · build {n} from",
    footSupport: "support",
    footPrivacy: "privacy",
    footContact: "contact",
  },
  support: {
    eyebrow: "support",
    title: "Get help with {name}",
    intro:
      "Email is the fastest way to reach us — a real person reads every message, usually within two days.",
    hint: "Include your device model and what you tapped right before the problem — it usually cuts a round-trip.",
    faqTitle: "common questions",
    mailSubject: "{name} support (v{version})",
  },
  privacy: {
    updated: "last updated {date}",
    title: "Privacy Policy",
    intro:
      '{name} is developed by lei cao ("we"). This policy explains what data the app handles and why.',
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
    title: "appfactory — 小而专的 App，一个个下线",
    description:
      "appfactory 是一间位于新加坡的一人工作室，AI 智能体在这里构建、测试并发布小而专的手机应用。",
  },
  hub: {
    location: "appfactory.sg · 新加坡",
    est: "始于 2026",
    headline: ["小而专的 App，", "一个个下线"],
    period: "。",
    intro:
      "appfactory 是一间一人工作室：AI 智能体在这里构建、测试并发布小而专的手机应用——每一个都只做好一件事。这个页面就是产线：每个应用的编号、版本，以及它现在走到了哪一步。",
    ledger: "生产台账",
    counts: "{n} 个在产线 · {m} 个在制",
    build: "编号",
    nextSlot: "在制中——下一个应用正在产线上。",
    copyright: "© {year} appfactory · lei cao · 新加坡",
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
    whatItDoes: "功能亮点",
    screens: "应用截图",
    footerFrom: "{name} · 编号 {n} · 出自",
    footSupport: "支持",
    footPrivacy: "隐私",
    footContact: "联系",
  },
  support: {
    eyebrow: "支持",
    title: "{name} 支持与帮助",
    intro: "邮件是联系我们最快的方式——每一封都有真人阅读，通常两天内回复。",
    hint: "请附上设备型号，以及出问题前你点了什么——通常能省一个来回。",
    faqTitle: "常见问题",
    mailSubject: "{name} 支持（v{version}）",
  },
  privacy: {
    updated: "最近更新 {date}",
    title: "隐私政策",
    intro: "{name} 由 lei cao（“我们”）开发。本政策说明应用会处理哪些数据以及原因。",
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
    title: "appfactory — 小而專的 App，一個個下線",
    description:
      "appfactory 是一間位於新加坡的一人工作室，AI 代理在這裡打造、測試並發布小而專的手機應用程式。",
  },
  hub: {
    location: "appfactory.sg · 新加坡",
    est: "始於 2026",
    headline: ["小而專的 App，", "一個個下線"],
    period: "。",
    intro:
      "appfactory 是一間一人工作室：AI 代理在這裡打造、測試並發布小而專的手機應用程式——每一個都只做好一件事。這個頁面就是產線：每個 App 的編號、版本，以及它現在走到哪一步。",
    ledger: "生產台帳",
    counts: "{n} 個在產線 · {m} 個製作中",
    build: "編號",
    nextSlot: "製作中——下一個 App 正在產線上。",
    copyright: "© {year} appfactory · lei cao · 新加坡",
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
    whatItDoes: "功能亮點",
    screens: "畫面截圖",
    footerFrom: "{name} · 編號 {n} · 出自",
    footSupport: "支援",
    footPrivacy: "隱私",
    footContact: "聯絡",
  },
  support: {
    eyebrow: "支援",
    title: "{name} 支援與協助",
    intro: "Email 是聯絡我們最快的方式——每一封都由真人閱讀，通常兩天內回覆。",
    hint: "請附上裝置型號，以及出問題前你點了什麼——通常能省一個來回。",
    faqTitle: "常見問題",
    mailSubject: "{name} 支援（v{version}）",
  },
  privacy: {
    updated: "最近更新 {date}",
    title: "隱私權政策",
    intro:
      "{name} 由 lei cao（「我們」）開發。本政策說明應用程式會處理哪些資料以及原因。",
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
