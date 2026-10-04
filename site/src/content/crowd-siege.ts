// Crowd Siege (games3d/apps/crowd-siege, bundle id com.appfactory.crowdSiege)
// — generic landing template, shared games3d privacy/terms/FAQ copy
// (./games3d-common.ts). Unreleased: status "building", no store links, no
// screenshots/icon yet. Claims are limited to the rebuilt game's confirmed
// facts: a 50-battle evolution campaign from the Primordial Pool to the Age of
// Sail & Powder, 6 heroes, a Forge, a Codex, a daily challenge and Last Stand.
// The display names live in the constants below, so a rename is a one-line
// change.

import type { AppContent, AppLocalized } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Short display name. */
const NAME = "Crowd Siege";
/** Full store listing name. */
const STORE_NAME = "Crowd Siege";

const names = { name: NAME, interstitials: true };

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Evolve your crowd. Break the army.",
  subtitle: "Evolve Crowds, Break Armies",
  oneLiner:
    "A 3D crowd battler with a 50-battle evolution campaign: fire soldiers through multiplier gates into an enemy army, from the first cells in the Primordial Pool to the Age of Sail & Powder.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — a 3D crowd battler, 50 battles of evolution`,
  metaDescription: `${STORE_NAME} is a 3D crowd battler: fire soldiers through multiplier gates into an enemy army across a 50-battle evolution campaign, from the Primordial Pool to the Age of Sail & Powder. 6 heroes, a Forge, a Codex, a daily challenge and Last Stand survival mode.`,
  features: [
    {
      title: "Gates multiply your army",
      body: "Fire soldiers through multiplier gates to grow a handful into a crowd, then send it into an enemy army.",
    },
    {
      title: "50 battles of evolution",
      body: "A 50-battle campaign that starts with the first cells in the Primordial Pool and carries on to the Age of Sail & Powder.",
    },
    {
      title: "6 heroes",
      body: "Six heroes to lead your crowd into battle.",
    },
    {
      title: "The Forge",
      body: "Upgrade your army in the Forge between battles.",
    },
    {
      title: "The Codex",
      body: "A Codex to look back on what you have met along the way.",
    },
    {
      title: "Daily challenge and Last Stand",
      body: "A daily challenge to come back to, and Last Stand, a survival mode for when the campaign is not enough.",
    },
  ],
  screenshots: [],
  trust: {
    title: "Honest about ads",
    body: "Reward videos are always optional and start only when you tap a button. A full-screen ad can appear only after a win, never during a battle. A one-time Remove Ads purchase turns full-screen ads off for good.",
  },
  faqs: [
    {
      q: "What kind of game is this?",
      a: "A 3D crowd battler: fire soldiers through multiplier gates into an enemy army, across a 50-battle evolution campaign from the Primordial Pool to the Age of Sail & Powder.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "进化你的军团，攻破敌军。",
  subtitle: "进化人海，攻破敌军",
  oneLiner:
    "一款 3D 人海对战游戏，拥有 50 场战斗的进化战役：让士兵穿过倍增闸门冲向敌军，从原始海洋中的最初细胞，一路打到风帆与火药时代。",
  statusNote: "开发中，即将登陆 App Store。",
  features: [
    { title: "闸门让军队倍增", body: "让士兵穿过倍增闸门，把寥寥数人变成一支大军，再冲向敌军。" },
    { title: "50 场进化之战", body: "一场 50 战的战役，从原始海洋中的最初细胞开始，一路延续到风帆与火药时代。" },
    { title: "6 位英雄", body: "六位英雄，带领你的军团上阵。" },
    { title: "锻造炉", body: "在战斗之间，用锻造炉升级你的军队。" },
    { title: "图鉴", body: "一本图鉴，让你回顾一路上遇到的一切。" },
    { title: "每日挑战与最后防线", body: "每天都值得回来的每日挑战，以及战役之外的生存模式「最后防线」（Last Stand）。" },
  ],
  screenshots: [],
  trust: {
    title: "对广告坦诚",
    body: "奖励视频始终可选，只有你点按按钮才会开始。全屏广告只会在获胜后出现，绝不在战斗过程中出现。一次性「去除广告」内购可永久关闭全屏广告。",
  },
  faqs: [
    { q: "这是什么类型的游戏？", a: "一款 3D 人海对战游戏：让士兵穿过倍增闸门冲向敌军，战役共 50 场战斗，从原始海洋一路打到风帆与火药时代。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "進化你的軍團，攻破敵軍。",
  subtitle: "進化人海，攻破敵軍",
  oneLiner:
    "一款 3D 人海對戰遊戲，擁有 50 場戰鬥的進化戰役：讓士兵穿過倍增閘門衝向敵軍，從原始海洋中的最初細胞，一路打到風帆與火藥時代。",
  statusNote: "開發中，即將登陸 App Store。",
  features: [
    { title: "閘門讓軍隊倍增", body: "讓士兵穿過倍增閘門，把寥寥數人變成一支大軍，再衝向敵軍。" },
    { title: "50 場進化之戰", body: "一場 50 戰的戰役，從原始海洋中的最初細胞開始，一路延續到風帆與火藥時代。" },
    { title: "6 位英雄", body: "六位英雄，帶領你的軍團上陣。" },
    { title: "鍛造爐", body: "在戰鬥之間，用鍛造爐升級你的軍隊。" },
    { title: "圖鑑", body: "一本圖鑑，讓你回顧一路上遇到的一切。" },
    { title: "每日挑戰與最後防線", body: "每天都值得回來的每日挑戰，以及戰役之外的生存模式「最後防線」（Last Stand）。" },
  ],
  screenshots: [],
  trust: {
    title: "對廣告坦誠",
    body: "獎勵影片始終可選，只有你點按按鈕才會開始。全螢幕廣告只會在獲勝後出現，絕不在戰鬥過程中出現。一次性「移除廣告」內購可永久關閉全螢幕廣告。",
  },
  faqs: [
    { q: "這是什麼類型的遊戲？", a: "一款 3D 人海對戰遊戲：讓士兵穿過倍增閘門衝向敵軍，戰役共 50 場戰鬥，從原始海洋一路打到風帆與火藥時代。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const crowdSiege: AppContent = {
  slug: "crowd-siege",
  buildNumber: 14,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
