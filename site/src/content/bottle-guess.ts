// Can Swap: Bottle Match (games3d/apps/bottle-guess, bundle id
// com.appfactory.bottleGuess) — generic landing template, shared games3d
// privacy/terms/FAQ copy (./games3d-common.ts). Unreleased: status "building",
// no store links, no screenshots/icon yet (the pages degrade without them).
// Flip status + appStoreUrl when the store approves it. The display names live
// in the constants below, so a rename is a one-line change.

import type { AppContent, AppLocalized } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Home-screen / short display name. */
const NAME = "Can Swap";
/** Full store listing name. */
const STORE_NAME = "Can Swap: Bottle Match";

const names = { name: NAME, interstitials: true };

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Swap the cans. Crack the order.",
  subtitle: "Guess the Hidden Order",
  oneLiner:
    "A 3D logic puzzle: a row of cans hides a secret order. Swap cans, check the order, and let the rings tell you how many are in the right place.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — a 3D logic puzzle, guess the hidden order`,
  metaDescription: `${STORE_NAME} is a 3D logic puzzle: swap cans to find a hidden order, using ring feedback that shows how many are in the right place. Journey, Free Play, pass-and-play Party, Daily puzzle and Trainer modes.`,
  features: [
    {
      title: "A hidden order to crack",
      body: "A row of cans hides a secret order. Swap cans around, check your order, and work out the answer by logic.",
    },
    {
      title: "Ring feedback",
      body: "Every check lights rings that tell you how many cans are in the right place, so each guess narrows things down.",
    },
    {
      title: "Journey",
      body: "60 levels that grow from 3 to 10 cans, with a Challenge level every fifth level that limits how many checks you get.",
    },
    {
      title: "Free Play and Trainer",
      body: "Pick any number of cans from 3 to 10 in Free Play, or climb the Trainer's practice ladder, which opens the next size once you solve cleanly.",
    },
    {
      title: "Party mode",
      body: "Pass-and-play for 2 to 4 players: one player hides an order, the next one guesses, and the fewest checks wins.",
    },
    {
      title: "Daily puzzle",
      body: "One new puzzle a day, the same for everyone, with a spoiler-free result you can share.",
    },
  ],
  screenshots: [],
  trust: {
    title: "Honest about ads",
    body: "Reward videos are always optional and start only when you tap a button. A full-screen ad can appear only after a win, never during a puzzle, and never in Party mode or the Daily puzzle. A one-time Remove Ads purchase turns full-screen ads off for good.",
  },
  faqs: [
    {
      q: "Is there a timer?",
      a: "No. Take as long as you like. Some Challenge levels limit how many times you can check your order, but never how long you think.",
    },
    {
      q: "What is Party mode?",
      a: "A pass-and-play mode for 2 to 4 players on one device: one player hides an order, the next guesses it. There are no hints and no ads, and the fewest checks wins.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "换罐子，猜顺序。",
  subtitle: "猜出隐藏的顺序",
  oneLiner:
    "一款 3D 逻辑解谜：一排罐子藏着一个秘密顺序。交换罐子、检查顺序，用光环反馈告诉你有几个罐子摆对了位置。",
  statusNote: "开发中，即将登陆 App Store。",
  features: [
    { title: "待破解的隐藏顺序", body: "一排罐子藏着一个秘密顺序。交换罐子的位置、检查你的顺序，靠逻辑推理出答案。" },
    { title: "光环反馈", body: "每次检查都会亮起光环，告诉你有几个罐子摆对了位置，让每次猜测都更接近答案。" },
    { title: "旅程模式", body: "60 个关卡，罐子数量从 3 个逐步增加到 10 个，每五关有一个限制检查次数的挑战关。" },
    { title: "自由模式与训练", body: "自由模式可任选 3 到 10 个罐子；训练模式是一道练习阶梯，干净利落地解出后会解锁下一档数量。" },
    { title: "派对模式", body: "2 到 4 人轮流传递的同屏玩法：一人藏好顺序，下一人来猜，检查次数最少者获胜。" },
    { title: "每日谜题", body: "每天一道新谜题，所有人都一样，并附带不含剧透的结果可供分享。" },
  ],
  screenshots: [],
  trust: {
    title: "对广告坦诚",
    body: "奖励视频始终可选，只有你点按按钮才会开始。全屏广告只会在获胜后出现，绝不在解谜过程中出现，派对模式和每日谜题中也不会出现。一次性「去除广告」内购可永久关闭全屏广告。",
  },
  faqs: [
    { q: "有倒计时吗？", a: "没有。想多久都可以。部分挑战关会限制检查次数，但从不限制你思考的时间。" },
    { q: "派对模式是什么？", a: "2 到 4 人在同一设备上轮流游玩的模式：一人藏好顺序，下一人来猜。没有提示，也没有广告，检查次数最少者获胜。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "換罐子，猜順序。",
  subtitle: "猜出隱藏的順序",
  oneLiner:
    "一款 3D 邏輯解謎：一排罐子藏著一個祕密順序。交換罐子、檢查順序，用光環回饋告訴你有幾個罐子擺對了位置。",
  statusNote: "開發中，即將登陸 App Store。",
  features: [
    { title: "待破解的隱藏順序", body: "一排罐子藏著一個祕密順序。交換罐子的位置、檢查你的順序，靠邏輯推理出答案。" },
    { title: "光環回饋", body: "每次檢查都會亮起光環，告訴你有幾個罐子擺對了位置，讓每次猜測都更接近答案。" },
    { title: "旅程模式", body: "60 個關卡，罐子數量從 3 個逐步增加到 10 個，每五關有一個限制檢查次數的挑戰關。" },
    { title: "自由模式與訓練", body: "自由模式可任選 3 到 10 個罐子；訓練模式是一道練習階梯，乾淨俐落地解出後會解鎖下一檔數量。" },
    { title: "派對模式", body: "2 到 4 人輪流傳遞的同螢幕玩法：一人藏好順序，下一人來猜，檢查次數最少者獲勝。" },
    { title: "每日謎題", body: "每天一道新謎題，所有人都一樣，並附帶不含劇透的結果可供分享。" },
  ],
  screenshots: [],
  trust: {
    title: "對廣告坦誠",
    body: "獎勵影片始終可選，只有你點按按鈕才會開始。全螢幕廣告只會在獲勝後出現，絕不在解謎過程中出現，派對模式和每日謎題中也不會出現。一次性「移除廣告」內購可永久關閉全螢幕廣告。",
  },
  faqs: [
    { q: "有倒數計時嗎？", a: "沒有。想多久都可以。部分挑戰關會限制檢查次數，但從不限制你思考的時間。" },
    { q: "派對模式是什麼？", a: "2 到 4 人在同一裝置上輪流遊玩的模式：一人藏好順序，下一人來猜。沒有提示，也沒有廣告，檢查次數最少者獲勝。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const bottleGuess: AppContent = {
  slug: "bottle-guess",
  buildNumber: 13,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
