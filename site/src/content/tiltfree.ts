// TiltFree is an externally-hosted studio app (pokertools.ai). It appears on
// the appfactory.sg home page as a linked card but has no subdomain site here.
// Only name, subtitle, oneLiner, features, and statusNote are rendered;
// the other AppLocalized fields are stubs required by the type.

import type { AppContent, AppLocalized } from "./apps";

const UTM = "utm_source=appfactory.sg&utm_medium=referral&utm_campaign=crosspromo";

const en: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree: Poker Hand Tracker",
  tagline: "Study every hand you play.",
  subtitle: "Live poker hand journal & AI coach",
  oneLiner:
    "Record live poker hands in a few taps, replay every street, and drill the spots you got wrong.",
  statusNote: "Live on the App Store.",
  features: [
    { title: "Record at the table one-handed", body: "" },
    { title: "Replay hands and get AI coach reviews", body: "" },
    {
      title: "Train with built-in 6-max charts and an equity calculator",
      body: "",
    },
  ],
  screenshots: [],
  faqs: [],
  privacy: { updated: "2026-10-08", sections: [] },
};

const zhCn: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree：德州扑克记录与AI教练",
  tagline: "复盘每一手牌。",
  subtitle: "现场手牌记录与 AI 复盘",
  oneLiner: "几下就能记下现场手牌，逐街回放，把打错的牌练回来。",
  statusNote: "已在 App Store 上线。",
  features: [
    { title: "单手记牌，不挡牌桌", body: "" },
    { title: "逐街回放与 AI 复盘", body: "" },
    { title: "内置 6-max 翻前图表与胜率计算器", body: "" },
  ],
  screenshots: [],
  faqs: [],
  privacy: { updated: "2026-10-08", sections: [] },
};

const zhTw: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree：德州撲克記錄與AI教練",
  tagline: "復盤每一手牌。",
  subtitle: "現場手牌記錄與 AI 復盤",
  oneLiner: "幾下就能記下現場手牌，逐街回放，把打錯的牌練回來。",
  statusNote: "已在 App Store 上架。",
  features: [
    { title: "單手記牌，不擋牌桌", body: "" },
    { title: "逐街回放與 AI 復盤", body: "" },
    { title: "內建 6-max 翻前圖表與勝率計算器", body: "" },
  ],
  screenshots: [],
  faqs: [],
  privacy: { updated: "2026-10-08", sections: [] },
};

export const tiltFree: AppContent = {
  slug: "tiltfree",
  // Build slot 2 — sits right after Poker Night, its sibling poker app.
  buildNumber: 2,
  version: "1.0",
  status: "live",
  platforms: ["iOS"],
  appStoreUrl: "https://apps.apple.com/app/id6758140114",
  appStoreId: "6758140114",
  icon: "/apps/tiltfree/icon.png",
  // External app: the card links out; no subdomain site is generated.
  externalUrls: {
    en: `https://pokertools.ai?${UTM}`,
    "zh-cn": `https://pokertools.ai/zh-Hans?${UTM}`,
    "zh-tw": `https://pokertools.ai/zh-Hant?${UTM}`,
  },
  externalDomain: "pokertools.ai",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
