// Glossy Blocks (apps/slide-jam) — its own site in
// src/components/sites/slide-jam/, shared puzzle-shell privacy/terms/FAQ copy
// (./puzzle-games-common.ts). Facts follow the live App Store listing
// (id 6818530151, v1.0.0, live 2026-10-13): name "Glossy Blocks: Toy Slide",
// subtitle "Color Block Slide & Escape", blocks leave through the *arch* of
// their colour, 600 levels in 30 chapters + a 120-level Master track, all
// solver-checked, free Undo (the first few undos per level give the move
// back), move limits with no clock except Rush levels, three daily puzzles.
// Screenshots are the live store frames, cropped to the phone screen
// (public/apps/slide-jam/screens/). Google Play: not live yet.

import type { AppContent, AppLocalized } from "./apps";
import { slideJamCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Glossy Blocks", pass: "Premium pass" };
const shot = (f: string) => `/apps/slide-jam/screens/${f}.webp`;

const en: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "Slide each block into its arch.",
  subtitle: "Color Block Slide & Escape",
  oneLiner:
    "A colour block sliding puzzle: drag each glossy toy block out through the arch of its colour. 600 levels plus a 120-level Master track, each checked solvable, and Undo is always free.",
  statusNote: "Free on the App Store for iPhone and iPad. Google Play is next.",
  metaTitle: "Glossy Blocks: Toy Slide – Color Block Slide & Escape",
  metaDescription:
    "Slide glossy toy blocks out through the arch of their colour. 600 levels plus 120 Master levels, all solvable, free Undo, no clock on regular levels.",
  features: [
    {
      title: "Undo is always free",
      body: "Undo sits beside every board and never costs a coin. The first few undos on each level even give the move back.",
    },
    {
      title: "Moves, not minutes",
      body: "Every level has a move limit and tells you the 3-star target before you start. Regular levels have no clock.",
    },
    {
      title: "600 levels, plus Master",
      body: "Thirty chapters, then a 120-level Master track for experts. Our solver checks every level has a solution before it ships.",
    },
    {
      title: "Shapes must fit their arch",
      body: "Long bars and chunky L, T and S shapes only pass an arch as wide as their side. Arrow blocks slide one way only.",
    },
    {
      title: "Arches with a catch",
      body: "Keys open padlocked arches, colour-changing arches switch after each block, and rainbow arches take a set number.",
    },
    {
      title: "Bombs on a countdown",
      body: "The number on a bomb is how many moves you have to get it out. At zero the level is lost.",
    },
  ],
  screenshots: [
    { src: shot("hook"), alt: "Glossy Blocks level 465: glossy toy blocks on a wooden tray, coloured arches on its rim, combo ×2 and ×3, and the free Undo button" },
    { src: shot("twists"), alt: "A board with a padlocked green arch, a key on a pink block and a star arch marked ×2" },
    { src: shot("bombs"), alt: "A board with a bomb counting down 15 moves on a navy block, beside a layered block marked ×3" },
    { src: shot("bigboard"), alt: "Super Hard level 500: a crowded board of bars and five-cell shapes with ice and a key" },
    { src: shot("workshop"), alt: "The Toy Workshop screen: the Train Set room at step 2 of 6, with a Renovate button that costs 24 stars" },
    { src: shot("rush"), alt: "A Rush level card: 85 seconds, goal “Clear in 22 moves, three stars in 18”, with Hint, Hammer and Shrink boosters" },
    { src: shot("daily"), alt: "The Daily Puzzle card with Easy, Medium and Hard puzzles and a daily streak" },
  ],
  trust: {
    title: "Ads stay off the board",
    body: "A full-screen ad can only appear between levels after a win: never during a level, never after a failed level, a retry or a daily puzzle. The small banner lives on the home and map screens only, reward videos are always your choice, and a one-time Remove Ads purchase turns the banner and between-level ads off for good.",
  },
  faqs: [
    {
      q: "Is Undo really free?",
      a: "Yes. Undo is a button beside every board and never costs coins. The first few undos on each level give the move back; after that an undo still rewinds the board, but the move stays used.",
    },
    {
      q: "Is there a timer?",
      a: "Not on regular levels. Every level has a move limit instead, and the goal tells you the numbers before you start, for example “Clear in 13 moves, 3 stars in 11”. Only Rush levels race a real countdown clock.",
    },
    {
      q: "What are the Master levels?",
      a: "A separate 120-level track for experts, on top of the 600 levels across 30 chapters. Hard and Super Hard levels also close every chapter.",
    },
    {
      q: "Can I play if I'm colour-blind?",
      a: "Yes. Every colour carries its own symbol on its blocks and arches (a moon, a drop, a heart, a leaf and so on), and there is a colour-blind pattern option.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "把每块积木滑进同色拱门。",
  subtitle: "彩色积木滑块解谜",
  oneLiner:
    "一款彩色积木滑块解谜游戏：把光亮的玩具积木拖出同色的拱门。600 关外加 120 关大师关，每关都验证有解，撤销永远免费。",
  statusNote: "已在 App Store 免费上架，支持 iPhone 和 iPad。Google Play 版即将推出。",
  metaTitle: "Glossy Blocks：彩色积木滑块解谜游戏，600 关",
  metaDescription:
    "把光亮的玩具积木滑出同色拱门。600 关外加 120 关大师关，每关都经求解器验证有解；撤销免费，普通关卡不计时。iPhone、iPad 免费下载。",
  features: [
    { title: "撤销永远免费", body: "撤销按钮就在每个棋盘旁边，从不花金币。每关的前几次撤销还会把步数还给你。" },
    { title: "只计步数，不计时间", body: "每关都有步数上限，开局前就告诉你三星目标。普通关卡没有计时。" },
    { title: "600 关，外加大师关", body: "三十个章节，之后是 120 关的大师轨道。每一关上线前都由求解器验证有解。" },
    { title: "形状要合得上拱门", body: "长条和厚实的 L、T、S 形，只能穿过与其边同宽的拱门。箭头积木只能朝一个方向滑。" },
    { title: "拱门也有花样", body: "钥匙打开挂锁拱门，变色拱门每过一块就换颜色，彩虹拱门只收固定数量。" },
    { title: "倒数的炸弹", body: "炸弹上的数字，是把它送出去的剩余步数。归零即失败。" },
  ],
  screenshots: [
    { src: shot("hook"), alt: "Glossy Blocks 第 465 关：木托盘上的光亮玩具积木，托盘边缘是彩色拱门，连击 ×2、×3，下方是免费撤销按钮" },
    { src: shot("twists"), alt: "带挂锁的绿色拱门、粉色积木上的钥匙，以及标有 ×2 的星星拱门" },
    { src: shot("bombs"), alt: "藏青色积木上的炸弹倒数 15 步，旁边是标有 ×3 的分层积木" },
    { src: shot("bigboard"), alt: "超难第 500 关：长条和五格形状挤满棋盘，还有冰块和钥匙" },
    { src: shot("workshop"), alt: "玩具工坊页面：火车组房间进度 2/6，翻新需要 24 颗星" },
    { src: shot("rush"), alt: "冲刺关卡卡片：85 秒，目标「22 步内通关，18 步三星」，可加提示、锤子、缩小道具" },
    { src: shot("daily"), alt: "每日谜题卡片：简单、中等、困难三道题，以及连续打卡" },
  ],
  trust: {
    title: "广告不上棋盘",
    body: "全屏广告只会在通关后的关卡之间出现：绝不在关卡中，也不会在失败、重试或每日谜题之后出现。小横幅只在主页和地图页，奖励视频永远由你决定。一次性「去除广告」购买可永久关闭横幅和关卡间广告。",
  },
  faqs: [
    { q: "撤销真的免费吗？", a: "真的。撤销是每个棋盘旁的按钮，从不花金币。每关的前几次撤销会把步数还给你；之后撤销仍会把棋盘退回一步，但步数不再退还。" },
    { q: "有计时吗？", a: "普通关卡没有。每关改为步数上限，开局前目标就会写明，例如「13 步内通关，11 步三星」。只有冲刺关卡有真正的倒计时。" },
    { q: "大师关是什么？", a: "一条独立的 120 关专家轨道，在 30 个章节共 600 关之外。每个章节末尾还有困难和超难关卡。" },
    { q: "色弱也能玩吗？", a: "可以。每种颜色的积木和拱门都带有自己的符号（月亮、水滴、爱心、叶子等），游戏还提供色弱图案选项。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "把每塊積木滑進同色拱門。",
  subtitle: "彩色積木滑塊解謎",
  oneLiner:
    "一款彩色積木滑塊解謎遊戲：把亮晶晶的玩具積木拖出同色的拱門。600 關外加 120 關大師關，每關都驗證有解，復原永遠免費。",
  statusNote: "已在 App Store 免費上架，支援 iPhone 與 iPad。Google Play 版即將推出。",
  metaTitle: "Glossy Blocks：彩色積木滑塊解謎遊戲，600 關",
  metaDescription:
    "把亮晶晶的玩具積木滑出同色拱門。600 關外加 120 關大師關，每關都經求解器驗證有解；復原免費，一般關卡不計時。iPhone、iPad 免費下載。",
  features: [
    { title: "復原永遠免費", body: "復原按鈕就在每個棋盤旁邊，從不花金幣。每關的前幾次復原還會把步數還給你。" },
    { title: "只算步數，不算時間", body: "每關都有步數上限，開局前就告訴你三星目標。一般關卡沒有計時。" },
    { title: "600 關，外加大師關", body: "三十個章節，之後是 120 關的大師軌道。每一關上架前都由求解器驗證有解。" },
    { title: "形狀要對得上拱門", body: "長條和厚實的 L、T、S 形，只能穿過與其邊同寬的拱門。箭頭積木只能朝一個方向滑。" },
    { title: "拱門也有花樣", body: "鑰匙打開掛鎖拱門，變色拱門每過一塊就換顏色，彩虹拱門只收固定數量。" },
    { title: "倒數的炸彈", body: "炸彈上的數字，是把它送出去的剩餘步數。歸零即失敗。" },
  ],
  screenshots: [
    { src: shot("hook"), alt: "Glossy Blocks 第 465 關：木托盤上亮晶晶的玩具積木，托盤邊緣是彩色拱門，連擊 ×2、×3，下方是免費復原按鈕" },
    { src: shot("twists"), alt: "帶掛鎖的綠色拱門、粉紅積木上的鑰匙，以及標有 ×2 的星星拱門" },
    { src: shot("bombs"), alt: "深藍積木上的炸彈倒數 15 步，旁邊是標有 ×3 的分層積木" },
    { src: shot("bigboard"), alt: "超難第 500 關：長條和五格形狀擠滿棋盤，還有冰塊和鑰匙" },
    { src: shot("workshop"), alt: "玩具工坊頁面：火車組房間進度 2/6，翻新需要 24 顆星" },
    { src: shot("rush"), alt: "衝刺關卡卡片：85 秒，目標「22 步內過關，18 步三星」，可加提示、錘子、縮小道具" },
    { src: shot("daily"), alt: "每日謎題卡片：簡單、中等、困難三道題，以及連續打卡" },
  ],
  trust: {
    title: "廣告不上棋盤",
    body: "全螢幕廣告只會在過關後的關卡之間出現：絕不在關卡中，也不會在失敗、重試或每日謎題之後出現。小橫幅只在主頁和地圖頁，獎勵影片永遠由你決定。一次性「移除廣告」購買可永久關閉橫幅和關卡間廣告。",
  },
  faqs: [
    { q: "復原真的免費嗎？", a: "真的。復原是每個棋盤旁的按鈕，從不花金幣。每關的前幾次復原會把步數還給你；之後復原仍會把棋盤退回一步，但步數不再退還。" },
    { q: "有計時嗎？", a: "一般關卡沒有。每關改為步數上限，開局前目標就會寫明，例如「13 步內過關，11 步三星」。只有衝刺關卡有真正的倒數計時。" },
    { q: "大師關是什麼？", a: "一條獨立的 120 關專家軌道，在 30 個章節共 600 關之外。每個章節結尾還有困難和超難關卡。" },
    { q: "色弱也能玩嗎？", a: "可以。每種顏色的積木和拱門都帶有自己的符號（月亮、水滴、愛心、葉子等），遊戲也提供色弱圖案選項。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const glossyBlocks: AppContent = {
  slug: "slide-jam",
  category: "game",
  ogImage: "/apps/slide-jam/og.png",
  buildNumber: 12,
  version: "1.0.0",
  status: "live",
  appStoreUrl: "https://apps.apple.com/app/id6818530151",
  appStoreId: "6818530151",
  platforms: ["iOS", "Android"],
  icon: "/apps/slide-jam/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  credits: slideJamCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
