// Crowd Siege (games3d/apps/crowd-siege, bundle id com.appfactory.crowdSiege)
// — generic landing template, shared games3d privacy/terms/FAQ copy
// (./games3d-common.ts). Unreleased: status "building", no store links, no
// screenshots/icon yet. The game is being redesigned, so the copy stays
// generic (gates, armies, upgrades). The final store name is undecided: the
// display names live in the constants below, so a rename is a one-line change.

import type { AppContent, AppLocalized } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Short display name. */
const NAME = "Crowd Siege";
/** Full store listing name (not final). */
const STORE_NAME = "Crowd Siege";

const names = { name: NAME, interstitials: true };

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Aim. Multiply. Break the siege.",
  subtitle: "A 3D Swipe Battler",
  oneLiner:
    "A 3D swipe battler: slide your cannon, fire soldiers through multiplier gates, and send a growing army into the enemy's.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — a 3D swipe battler with multiplier gates`,
  metaDescription: `${STORE_NAME} is a 3D swipe battler: fire soldiers through multiplier gates to grow your army, then crash it into the enemy's. Upgrades and heroes carry you from battle to battle.`,
  features: [
    {
      title: "Swipe to fire",
      body: "Slide to aim your cannon and fire soldiers down the battlefield with simple touch controls.",
    },
    {
      title: "Gates multiply your army",
      body: "Soldiers that pass through a gate are multiplied or reinforced, so a good line turns a handful into a crowd.",
    },
    {
      title: "Army against army",
      body: "Your crowd meets the enemy's head on. Bigger is not always enough: where and when you fire matters.",
    },
    {
      title: "Upgrades and heroes",
      body: "Spend what you earn on upgrades and grow your heroes between battles to push further each time.",
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
      a: "A 3D crowd battler played with one finger: aim a cannon, fire soldiers through multiplier gates, and clash with the enemy army.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "瞄准，倍增，攻破围城。",
  subtitle: "3D 滑动对战游戏",
  oneLiner:
    "一款 3D 滑动对战游戏：滑动大炮，让士兵穿过倍增闸门，带着越来越庞大的军队冲向敌军。",
  statusNote: "开发中，即将登陆 App Store。",
  features: [
    { title: "滑动即开火", body: "滑动瞄准大炮，用简单的触控把士兵射向战场。" },
    { title: "闸门让军队倍增", body: "穿过闸门的士兵会被倍增或增援，好的走位能让寥寥数人变成一支大军。" },
    { title: "军队对军队", body: "你的大军与敌军正面相撞。人多并不总是够用：开火的位置和时机很重要。" },
    { title: "升级与英雄", body: "把战利品花在升级上，并在战斗之间培养英雄，每一次都走得更远。" },
  ],
  screenshots: [],
  trust: {
    title: "对广告坦诚",
    body: "奖励视频始终可选，只有你点按按钮才会开始。全屏广告只会在获胜后出现，绝不在战斗过程中出现。一次性「去除广告」内购可永久关闭全屏广告。",
  },
  faqs: [
    { q: "这是什么类型的游戏？", a: "一款单指操作的 3D 人海对战游戏：瞄准大炮，让士兵穿过倍增闸门，与敌军交锋。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "瞄準，倍增，攻破圍城。",
  subtitle: "3D 滑動對戰遊戲",
  oneLiner:
    "一款 3D 滑動對戰遊戲：滑動大砲，讓士兵穿過倍增閘門，帶著越來越龐大的軍隊衝向敵軍。",
  statusNote: "開發中，即將登陸 App Store。",
  features: [
    { title: "滑動即開火", body: "滑動瞄準大砲，用簡單的觸控把士兵射向戰場。" },
    { title: "閘門讓軍隊倍增", body: "穿過閘門的士兵會被倍增或增援，好的走位能讓寥寥數人變成一支大軍。" },
    { title: "軍隊對軍隊", body: "你的大軍與敵軍正面相撞。人多並不總是夠用：開火的位置和時機很重要。" },
    { title: "升級與英雄", body: "把戰利品花在升級上，並在戰鬥之間培養英雄，每一次都走得更遠。" },
  ],
  screenshots: [],
  trust: {
    title: "對廣告坦誠",
    body: "獎勵影片始終可選，只有你點按按鈕才會開始。全螢幕廣告只會在獲勝後出現，絕不在戰鬥過程中出現。一次性「移除廣告」內購可永久關閉全螢幕廣告。",
  },
  faqs: [
    { q: "這是什麼類型的遊戲？", a: "一款單指操作的 3D 人海對戰遊戲：瞄準大砲，讓士兵穿過倍增閘門，與敵軍交鋒。" },
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
