// Courtyard Arrows (apps/arrow-out) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). Unreleased:
// flip status + appStoreUrl/playStoreUrl when the store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Courtyard Arrows", pass: "Premium pass" };
const shot = (f: string) => `/apps/arrow-out/${f}`;

const en: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "Tap. Clear. Breathe.",
  subtitle: "A Calm No-Timer Puzzle",
  oneLiner:
    "A calm tap puzzle: send each arrow off the board once its way is clear, and restore a quiet courtyard with every star. No timer on any board.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Courtyard Arrows: Tap & Clear — a calm arrow puzzle with no timers",
  metaDescription:
    "Courtyard Arrows is a calm tap-and-clear arrow puzzle: long and bent arrows, 240 levels each checked for a solution, a courtyard to restore, and no timer on any board.",
  features: [
    {
      title: "Arrows that bend",
      body: "Arrows grow long and wind around corners; when one leaves, its whole body snakes out behind its head. Crowded boards ask you to plan a few moves ahead.",
    },
    {
      title: "Hearts, not timers",
      body: "Three hearts per level and no clock. Tap a blocked arrow and you lose a heart; run out and you can continue or simply retry — you never wait to play.",
    },
    {
      title: "240 checked levels",
      body: "Twelve seasonal chapters from Plum Blossom to Starlit Garden. Every level is checked by our solver to have a solution before it ships.",
    },
    {
      title: "A courtyard to restore",
      body: "Stars bring back five corners of the courtyard — the Stone Path, Koi Pond, Bamboo Grove, Tea Pavilion and Moon Gate — painted in a soft, hand-painted style.",
    },
    {
      title: "New twists, gently taught",
      body: "Padlocks and keys, ice, rocks, turntables, colour gates and fog, each introduced with a short tutorial the first time it appears.",
    },
    {
      title: "Every day, and endless",
      body: "A new daily puzzle from level 10 and Endless mode from level 30, plus daily rewards, quests and a weekly event.",
    },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "A Courtyard Arrows board: straight and bent arrows on a paper grid, with hearts and arrows-left counters" },
    { src: shot("shot-snakeout.png"), alt: "A bent arrow snaking off the board along its own path" },
    { src: shot("shot-garden.png"), alt: "Home screen with the Bamboo Grove restoration card at stage 3 of 6" },
    { src: shot("shot-map.png"), alt: "The chapter map with seasonal chapters and level nodes" },
  ],
  trust: {
    title: "Honest about ads",
    body: "Full-screen ads only after a win — never during a level, never before your 9th completed level, at most once every three wins. The banner lives on the home and map screens only, and reward videos are always optional. A one-time Remove Ads purchase turns the banner and full-screen ads off for good.",
  },
  faqs: [
    {
      q: "Is there an undo?",
      a: "Not a general one — a cleared arrow stays cleared, so there's nothing to take back after a good move. The Undo booster gives back a heart you lost to a mistake.",
    },
    {
      q: "Is there a timer?",
      a: "No level has a timer. Each level gives you three hearts; if you run out you can continue or retry right away.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "点一下，清一片，深呼吸。",
  subtitle: "没有倒计时的静心解谜",
  oneLiner:
    "一款静心的点击解谜：箭头前方畅通时点它飞出棋盘，每颗星星都让安静的庭院焕然一新。所有关卡都没有倒计时。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "会拐弯的箭头", body: "箭头会变长、会拐弯；飞出时整条身体沿自己的路径蛇行而出。拥挤的棋盘需要你提前规划几步。" },
    { title: "只有红心，没有倒计时", body: "每关三颗红心，没有时钟。点到被挡住的箭头会失去一颗心；用完可以继续或直接重来，从不需要等待。" },
    { title: "240 个经过验证的关卡", body: "十二个四季章节。每一关上线前都经过求解器验证，确保有解。" },
    { title: "修复一座庭院", body: "星星让庭院的五个角落重现生机：石径、锦鲤池、竹林、茶亭和月门，手绘风格画面。" },
    { title: "新玩法循序渐进", body: "锁与钥匙、冰块、岩石、转盘、颜色闸门和迷雾，首次出现时都有简短教学。" },
    { title: "每日一题，还有无尽模式", body: "第 10 关开放每日谜题，第 30 关开放无尽模式，另有每日奖励、任务和每周活动。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Courtyard Arrows 棋盘：纸面网格上的直箭头与弯箭头" },
    { src: shot("shot-snakeout.png"), alt: "一支弯箭头沿自身路径蛇行飞出棋盘" },
    { src: shot("shot-garden.png"), alt: "庭院修复卡片，展示已修复的庭院一角" },
    { src: shot("shot-map.png"), alt: "四季章节地图与关卡节点" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "可以撤销吗？", a: "没有通用撤销——清除的箭头不会回来，所以好的一步无需撤回。「撤销」道具可以找回因失误失去的一颗心。" },
    { q: "有倒计时吗？", a: "所有关卡都没有倒计时。每关三颗红心，用完可以立即继续或重来。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "點一下，清一片，深呼吸。",
  subtitle: "沒有倒數計時的靜心解謎",
  oneLiner:
    "一款靜心的點擊解謎：箭頭前方暢通時點它飛出棋盤，每顆星星都讓安靜的庭院煥然一新。所有關卡都沒有倒數計時。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "會轉彎的箭頭", body: "箭頭會變長、會轉彎；飛出時整條身體沿自己的路徑蛇行而出。擁擠的棋盤需要你提前規劃幾步。" },
    { title: "只有紅心，沒有倒數", body: "每關三顆紅心，沒有時鐘。點到被擋住的箭頭會失去一顆心；用完可以繼續或直接重來，從不需要等待。" },
    { title: "240 個經過驗證的關卡", body: "十二個四季章節。每一關上線前都經過求解器驗證，確保有解。" },
    { title: "修復一座庭院", body: "星星讓庭院的五個角落重現生機：石徑、錦鯉池、竹林、茶亭和月門，手繪風格畫面。" },
    { title: "新玩法循序漸進", body: "鎖與鑰匙、冰塊、岩石、轉盤、顏色閘門和迷霧，首次出現時都有簡短教學。" },
    { title: "每日一題，還有無盡模式", body: "第 10 關開放每日謎題，第 30 關開放無盡模式，另有每日獎勵、任務和每週活動。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Courtyard Arrows 棋盤：紙面網格上的直箭頭與彎箭頭" },
    { src: shot("shot-snakeout.png"), alt: "一支彎箭頭沿自身路徑蛇行飛出棋盤" },
    { src: shot("shot-garden.png"), alt: "庭院修復卡片，展示已修復的庭院一角" },
    { src: shot("shot-map.png"), alt: "四季章節地圖與關卡節點" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "可以復原嗎？", a: "沒有通用復原——清除的箭頭不會回來，所以好的一步無需撤回。「復原」道具可以找回因失誤失去的一顆心。" },
    { q: "有倒數計時嗎？", a: "所有關卡都沒有倒數計時。每關三顆紅心，用完可以立即繼續或重來。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const courtyardArrows: AppContent = {
  slug: "arrow-out",
  buildNumber: 10,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS", "Android"],
  icon: "/apps/arrow-out/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
