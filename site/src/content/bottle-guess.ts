// Can Swap: Bottle Match (games3d/apps/bottle-guess, bundle id
// com.appfactory.bottleGuess) — its own site (components/sites/bottle-guess),
// shared games3d privacy/terms/FAQ copy (./games3d-common.ts). Unreleased:
// status "building", no store links. Claims follow the game's README and
// fastlane listing (2026-10-05): one row of 3–10 cans, Journey (60 levels,
// a Challenge every fifth), Free Play, Party (2–4), Daily, Coach (4 lessons),
// Hint / Peek / Lock. The pictures are crops of the game's own renders and
// store shots (public/apps/bottle-guess/). Flip status + appStoreUrl when the
// store approves it. The display names live in the constants below, so a
// rename is a one-line change.

import type { AppContent, AppLocalized, Screenshot } from "./apps";
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

const IMG = "/apps/bottle-guess";
/** The landing looks pictures up by src; keep the order and srcs aligned across locales. */
const shots = (alts: string[]): Screenshot[] =>
  ["cabinet", "history", "home", "party", "daily", "coach"].map((n, i) => ({
    src: `${IMG}/${n}.webp`,
    alt: alts[i],
  }));

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Swap the cans. Ring the bell. Crack the hidden order.",
  subtitle: "Guess the Hidden Order",
  oneLiner:
    "A 3D logic puzzle: a row of cans hides a secret order. Swap two cans, ring the bell, and the count tells you how many sit in the right place, never which.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — 3D Logic Puzzle, Guess the Order`,
  metaDescription:
    "A 3D logic puzzle game: swap cans, ring the bell and crack the hidden order. 60 levels, a daily puzzle, pass-and-play party mode and a coach.",
  features: [
    {
      title: "Journey",
      body: "60 levels that grow from 3 cans to 10, with 1 to 3 stars each.",
    },
    {
      title: "Challenge levels",
      body: "Every fifth level puts a hard limit on how many times you can ring.",
    },
    {
      title: "Free Play",
      body: "Pick 3 to 10 cans and your own rules, and chase a best for each size.",
    },
    {
      title: "Party",
      body: "Pass the phone, 2 to 4 players. One hides an order, the next guesses; fewest checks wins.",
    },
    {
      title: "Daily",
      body: "One 7-can puzzle a day, the same for everyone, with a share card that gives nothing away.",
    },
    {
      title: "Coach",
      body: "Four short lessons, one idea each: the coach lights the cans to swap and explains every count.",
    },
    {
      title: "Hint, Peek, Lock",
      body: "A suggested swap with the reason, one can checked in secret, or one can locked in place.",
    },
  ],
  screenshots: shots([
    "The wooden cabinet with its cover closed over the secret order, and a row of five cans below it: Cola, Night, Silver, Lemon and Peach",
    "The check history: four earlier orders as strips of mini cans, each with how many were in the right place",
    "The Can Swap home screen: cans on a turntable above the Journey, Daily, Coach, Free Play and Party buttons",
    "Party mode hand-off screen: pass the phone to the next player, who must find the hidden order",
    "The Daily share card: a 7-can puzzle solved in 7 checks, shown as a spoiler-free grid of counts",
    "A Coach lesson: a tip explains that the count went down by one, above five cans in a row",
  ]),
  trust: {
    title: "Ads stay out of the puzzle",
    body: "A full-screen ad can appear only after you win a level: never during one, never in your first session or the first five levels, and never in the Daily, Party or a Coach lesson. Videos for coins, hints or extra checks play only when you tap. A one-time Remove Ads purchase turns the between-level ads off for good.",
  },
  faqs: [
    {
      q: "How does the bell work?",
      a: "Ring it to check your row. The lamps on the cabinet light one per can in the right place, and the counter says how many, but never which ones. Every ring is logged in your history.",
    },
    {
      q: "Is there a timer?",
      a: "No. Take as long as you like. Challenge levels limit how many times you can ring, never how long you think.",
    },
    {
      q: "What is Party mode?",
      a: "Pass-and-play for 2 to 4 people on one phone: one player hides an order, the next one guesses it. No hints, no ads; the fewest checks wins.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "换罐子，按铃铛，破解隐藏的顺序。",
  subtitle: "猜出隐藏的顺序",
  oneLiner:
    "一款 3D 逻辑解谜：一排罐子藏着一个秘密顺序。交换两个罐子、按响铃铛，计数会告诉你有几个摆对了位置，但不会告诉你是哪几个。",
  statusNote: "开发中，即将登陆 App Store。",
  metaTitle: "Can Swap: Bottle Match｜3D 换罐子逻辑解谜，猜出隐藏顺序",
  metaDescription:
    "Can Swap 是一款 3D 逻辑解谜游戏：交换罐子、按响铃铛，从摆对的数量推理出隐藏的顺序。60 个关卡、每日谜题、多人轮流的派对模式，还有教练课程。",
  features: [
    { title: "旅程", body: "60 个关卡，罐子从 3 个增加到 10 个，每关可得 1 到 3 颗星。" },
    { title: "挑战关", body: "每第五关严格限制按铃次数。" },
    { title: "自由模式", body: "任选 3 到 10 个罐子和自己的规则，挑战每种数量的最佳成绩。" },
    { title: "派对", body: "2 到 4 人传递手机：一人藏好顺序，下一人来猜，检查次数最少者获胜。" },
    { title: "每日谜题", body: "每天一道 7 罐谜题，所有人都一样，分享卡片不含剧透。" },
    { title: "教练", body: "四节短课，每节一个思路：教练点亮该交换的罐子，并解释每一次计数。" },
    { title: "提示、偷看、锁定", body: "给出下一步交换和理由、悄悄检查一个罐子，或把一个罐子锁在正确位置。" },
  ],
  screenshots: shots([
    "木柜的盖子遮住秘密顺序，下面一排五个罐子：可乐、夜光、银冰、柠檬和蜜桃",
    "检查记录：之前的四次排列以迷你罐子条显示，并标出各有几个摆对",
    "Can Swap 主界面：转盘上的罐子，下方是旅程、每日、教练、自由模式和派对按钮",
    "派对模式的交接画面：把手机交给下一位玩家，由他找出隐藏的顺序",
    "每日谜题分享卡：7 罐谜题用 7 次检查解出，以不含剧透的计数格子显示",
    "教练课程：提示说明计数少了一个，下方是一排五个罐子",
  ]),
  trust: {
    title: "广告不打扰解谜",
    body: "全屏广告只会在你通关后出现：绝不在关卡中、首次游玩时或前五关出现，每日谜题、派对和教练课程中也不会出现。换金币、提示或额外检查次数的视频只在你点按时播放。一次性「去除广告」内购可永久关闭关卡间广告。",
  },
  faqs: [
    { q: "铃铛是怎么用的？", a: "按铃检查你的排列。木柜上的灯会按摆对的罐子数量亮起，计数告诉你有几个，但不告诉你是哪几个。每次按铃都会记录在检查记录里。" },
    { q: "有倒计时吗？", a: "没有，想多久都可以。挑战关只限制按铃次数，从不限制你思考的时间。" },
    { q: "派对模式是什么？", a: "2 到 4 人在一部手机上轮流游玩：一人藏好顺序，下一人来猜。没有提示，也没有广告，检查次数最少者获胜。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "換罐子，按鈴鐺，破解隱藏的順序。",
  subtitle: "猜出隱藏的順序",
  oneLiner:
    "一款 3D 邏輯解謎：一排罐子藏著一個祕密順序。交換兩個罐子、按響鈴鐺，計數會告訴你有幾個擺對了位置，但不會告訴你是哪幾個。",
  statusNote: "開發中，即將登陸 App Store。",
  metaTitle: "Can Swap: Bottle Match｜3D 換罐子邏輯解謎，猜出隱藏順序",
  metaDescription:
    "Can Swap 是一款 3D 邏輯解謎遊戲：交換罐子、按響鈴鐺，從擺對的數量推理出隱藏的順序。60 個關卡、每日謎題、多人輪流的派對模式，還有教練課程。",
  features: [
    { title: "旅程", body: "60 個關卡，罐子從 3 個增加到 10 個，每關可得 1 到 3 顆星。" },
    { title: "挑戰關", body: "每第五關嚴格限制按鈴次數。" },
    { title: "自由模式", body: "任選 3 到 10 個罐子和自己的規則，挑戰每種數量的最佳成績。" },
    { title: "派對", body: "2 到 4 人傳遞手機：一人藏好順序，下一人來猜，檢查次數最少者獲勝。" },
    { title: "每日謎題", body: "每天一道 7 罐謎題，所有人都一樣，分享卡片不含劇透。" },
    { title: "教練", body: "四堂短課，每堂一個思路：教練點亮該交換的罐子，並解釋每一次計數。" },
    { title: "提示、偷看、鎖定", body: "給出下一步交換和理由、悄悄檢查一個罐子，或把一個罐子鎖在正確位置。" },
  ],
  screenshots: shots([
    "木櫃的蓋子遮住祕密順序，下面一排五個罐子：可樂、夜光、銀冰、檸檬和蜜桃",
    "檢查紀錄：之前的四次排列以迷你罐子條顯示，並標出各有幾個擺對",
    "Can Swap 主畫面：轉盤上的罐子，下方是旅程、每日、教練、自由模式和派對按鈕",
    "派對模式的交接畫面：把手機交給下一位玩家，由他找出隱藏的順序",
    "每日謎題分享卡：7 罐謎題用 7 次檢查解出，以不含劇透的計數格子顯示",
    "教練課程：提示說明計數少了一個，下方是一排五個罐子",
  ]),
  trust: {
    title: "廣告不打擾解謎",
    body: "全螢幕廣告只會在你過關後出現：絕不在關卡中、第一次遊玩時或前五關出現，每日謎題、派對和教練課程中也不會出現。換金幣、提示或額外檢查次數的影片只在你點按時播放。一次性「移除廣告」內購可永久關閉關卡間廣告。",
  },
  faqs: [
    { q: "鈴鐺怎麼用？", a: "按鈴檢查你的排列。木櫃上的燈會依擺對的罐子數量亮起，計數告訴你有幾個，但不告訴你是哪幾個。每次按鈴都會記錄在檢查紀錄裡。" },
    { q: "有倒數計時嗎？", a: "沒有，想多久都可以。挑戰關只限制按鈴次數，從不限制你思考的時間。" },
    { q: "派對模式是什麼？", a: "2 到 4 人在一支手機上輪流遊玩：一人藏好順序，下一人來猜。沒有提示，也沒有廣告，檢查次數最少者獲勝。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const bottleGuess: AppContent = {
  slug: "bottle-guess",
  category: "game",
  icon: `${IMG}/icon.webp`,
  ogImage: "/apps/bottle-guess/og.png",
  buildNumber: 13,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
