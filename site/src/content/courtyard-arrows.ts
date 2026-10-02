// Courtyard Arrows (apps/arrow-out) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). v3 facts
// (600 levels + 120 Master, fuses, linked pairs) follow the app's
// fastlane/metadata description + LISTING.md. Unreleased: flip status +
// appStoreUrl/playStoreUrl when the store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { arrowOutCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Courtyard Arrows", pass: "Premium pass" };
const shot = (f: string) => `/apps/arrow-out/${f}`;

const en: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "Tap. Clear. Breathe.",
  subtitle: "A Calm, Tricky Arrow Puzzle",
  oneLiner:
    "A calm tap puzzle: send each arrow off the board once its way is clear, and restore a quiet courtyard with every star. 600 levels plus a 120-level Master track, and no time limits on regular levels.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Courtyard Arrows: Tap & Clear — a calm arrow puzzle, 600 levels",
  metaDescription:
    "Courtyard Arrows is a calm tap-and-clear arrow puzzle: long and bent arrows, fuses and linked pairs, 600 levels plus a 120-level Master track each checked for a solution, and no time limits on regular levels.",
  features: [
    {
      title: "Arrows that bend",
      body: "Arrows grow long and wind around corners; when one leaves, its whole body snakes out behind its head. Crowded boards ask you to plan two or three moves ahead.",
    },
    {
      title: "Hearts, not clocks",
      body: "Three hearts per level (two on Super Hard and Master levels). Tap a blocked arrow and you lose a heart; run out and you can continue or simply retry. No time limits on regular levels; a few Rush levels race a countdown that pauses whenever the board is covered.",
    },
    {
      title: "600 levels, plus Master",
      body: "Thirty seasonal chapters from Plum Blossom to The Moon Gate, then a 120-level Master track for experts. Every level is checked by our solver to have a solution before it ships.",
    },
    {
      title: "Fuses and linked pairs",
      body: "A fuse counts your exits: every arrow that flies out takes one, so free the fused arrow before it hits 0. Linked pairs leave together, so both paths must be clear.",
    },
    {
      title: "A courtyard to restore",
      body: "Stars bring five corners back to life: the Stone Path, Koi Pond, Bamboo Grove, Tea Pavilion and the Moon Gate, in a soft hand-painted style.",
    },
    {
      title: "New twists, gently taught",
      body: "Padlocks and keys, ice, rocks, fog, turntables and colour gates, each with a short tutorial the first time it appears. A new daily puzzle from level 10 and Endless mode from level 30.",
    },
  ],
  screenshots: [
    { src: shot("shot-fit.png"), alt: "A full Courtyard Arrows board in its fit-to-screen view: long and bent arrows, a linked pair joined by a chain, hearts and arrows-left counters, and four boosters below" },
    { src: shot("shot-fuse.png"), alt: "A zoomed Courtyard Arrows board with numbered fuse markers on the arrows" },
    { src: shot("shot-link.png"), alt: "A zoomed board showing linked arrows joined by golden chains" },
    { src: shot("shot-master.png"), alt: "A dense Master-track board with many bent arrows and several linked pairs" },
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
      a: "There are no time limits on regular levels. A par clock from level 11 lets you earn a Speed crown but never fails a level, and a few Rush levels race a real countdown that pauses whenever the board is covered. Each level gives you three hearts; if you run out you can continue or retry right away.",
    },
    {
      q: "What are the Master levels?",
      a: "A separate 120-level track for experts, after the 600 campaign levels. You get two hearts per level, and some Master levels are Rush levels with a real countdown.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "点一下，清一片，深呼吸。",
  subtitle: "静心而有挑战的箭头解谜",
  oneLiner:
    "一款静心的点击解谜：箭头前方畅通时点它飞出棋盘，每颗星星都让安静的庭院焕然一新。600 个关卡外加 120 关大师轨道，普通关卡没有时间限制。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "会拐弯的箭头", body: "箭头会变长、会拐弯；飞出时整条身体沿自己的路径蛇行而出。拥挤的棋盘需要你提前规划两三步。" },
    { title: "只有红心，没有时钟", body: "每关三颗红心（超难关和大师关为两颗）。点到被挡住的箭头会失去一颗心；用完可以继续或直接重来。普通关卡没有时间限制；少数「冲刺」关卡有倒计时，棋盘被遮挡时会暂停。" },
    { title: "600 关，外加大师轨道", body: "三十个四季章节，从梅花到月门，之后是 120 关的大师轨道。每一关上线前都经过求解器验证，确保有解。" },
    { title: "引信与连体箭头", body: "引信会数你的出口数：每飞出一支箭头就减一，所以要在归零前放走带引信的箭头。连体箭头会一起飞出，所以两条路径都必须畅通。" },
    { title: "修复一座庭院", body: "星星让庭院的五个角落重现生机：石径、锦鲤池、竹林、茶亭和月门，柔和的手绘风格画面。" },
    { title: "新玩法循序渐进", body: "锁与钥匙、冰块、岩石、迷雾、转盘和颜色闸门，首次出现时都有简短教学。第 10 关开放每日谜题，第 30 关开放无尽模式。" },
  ],
  screenshots: [
    { src: shot("shot-fit.png"), alt: "Courtyard Arrows 完整棋盘（适应屏幕视图）：直箭头与弯箭头、锁链相连的连体箭头、红心与剩余箭头计数，下方有四个道具" },
    { src: shot("shot-fuse.png"), alt: "放大的棋盘，箭头上带有数字引信标记" },
    { src: shot("shot-link.png"), alt: "放大的棋盘，金色锁链连接的连体箭头" },
    { src: shot("shot-master.png"), alt: "大师轨道的密集棋盘，有许多弯箭头和连体箭头" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "可以撤销吗？", a: "没有通用撤销——清除的箭头不会回来，所以好的一步无需撤回。「撤销」道具可以找回因失误失去的一颗心。" },
    { q: "有倒计时吗？", a: "普通关卡没有时间限制。第 11 关起的标准用时只用来争取「速度皇冠」，绝不会让关卡失败；少数「冲刺」关卡有真正的倒计时，棋盘被遮挡时会暂停。每关三颗红心，用完可以立即继续或重来。" },
    { q: "大师关是什么？", a: "一条独立的 120 关专家轨道，位于 600 个主线关卡之后。每关两颗红心，部分大师关是有真正倒计时的「冲刺」关。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "點一下，清一片，深呼吸。",
  subtitle: "靜心而有挑戰的箭頭解謎",
  oneLiner:
    "一款靜心的點擊解謎：箭頭前方暢通時點它飛出棋盤，每顆星星都讓安靜的庭院煥然一新。600 個關卡外加 120 關大師軌道，一般關卡沒有時間限制。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "會轉彎的箭頭", body: "箭頭會變長、會轉彎；飛出時整條身體沿自己的路徑蛇行而出。擁擠的棋盤需要你提前規劃兩三步。" },
    { title: "只有紅心，沒有時鐘", body: "每關三顆紅心（超難關和大師關為兩顆）。點到被擋住的箭頭會失去一顆心；用完可以繼續或直接重來。一般關卡沒有時間限制；少數「衝刺」關卡有倒數計時，棋盤被遮擋時會暫停。" },
    { title: "600 關，外加大師軌道", body: "三十個四季章節，從梅花到月門，之後是 120 關的大師軌道。每一關上線前都經過求解器驗證，確保有解。" },
    { title: "引信與連體箭頭", body: "引信會數你的出口數：每飛出一支箭頭就減一，所以要在歸零前放走帶引信的箭頭。連體箭頭會一起飛出，所以兩條路徑都必須暢通。" },
    { title: "修復一座庭院", body: "星星讓庭院的五個角落重現生機：石徑、錦鯉池、竹林、茶亭和月門，柔和的手繪風格畫面。" },
    { title: "新玩法循序漸進", body: "鎖與鑰匙、冰塊、岩石、迷霧、轉盤和顏色閘門，首次出現時都有簡短教學。第 10 關開放每日謎題，第 30 關開放無盡模式。" },
  ],
  screenshots: [
    { src: shot("shot-fit.png"), alt: "Courtyard Arrows 完整棋盤（適應螢幕檢視）：直箭頭與彎箭頭、鎖鏈相連的連體箭頭、紅心與剩餘箭頭計數，下方有四個道具" },
    { src: shot("shot-fuse.png"), alt: "放大的棋盤，箭頭上帶有數字引信標記" },
    { src: shot("shot-link.png"), alt: "放大的棋盤，金色鎖鏈連接的連體箭頭" },
    { src: shot("shot-master.png"), alt: "大師軌道的密集棋盤，有許多彎箭頭和連體箭頭" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "可以復原嗎？", a: "沒有通用復原——清除的箭頭不會回來，所以好的一步無需撤回。「復原」道具可以找回因失誤失去的一顆心。" },
    { q: "有倒數計時嗎？", a: "一般關卡沒有時間限制。第 11 關起的標準用時只用來爭取「速度皇冠」，絕不會讓關卡失敗；少數「衝刺」關卡有真正的倒數計時，棋盤被遮擋時會暫停。每關三顆紅心，用完可以立即繼續或重來。" },
    { q: "大師關是什麼？", a: "一條獨立的 120 關專家軌道，位於 600 個主線關卡之後。每關兩顆紅心，部分大師關是有真正倒數計時的「衝刺」關。" },
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
  credits: arrowOutCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
