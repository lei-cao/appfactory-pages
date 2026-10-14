// Courtyard Arrows (apps/arrow-out) — its own site
// (src/components/sites/arrow-out), shared puzzle-shell privacy/terms/FAQ
// copy (./puzzle-games-common.ts). v4 facts (600 levels + 120 Master, three
// daily puzzles from level 8, Rush levels, the Lantern/Undo/Reveal/Mallet
// boosters) follow the app's fastlane/metadata/ios/en-US/description.txt +
// LISTING.md (2026-10-03); the screenshots are the v4 store captures cropped
// to the phone screen. Unreleased: flip appStoreUrl/playStoreUrl in when the
// stores approve it.

import type { AppContent, AppLocalized } from "./apps";
import { arrowOutCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Courtyard Arrows", pass: "Premium pass" };
const shot = (f: string) => `/apps/arrow-out/screens/${f}.webp`;

const en: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "Tap arrows. Clear the path.",
  subtitle: "Tap Away Arrow Puzzle Game",
  oneLiner:
    "A calm, tricky tap-away puzzle: send each arrow off the board once its way is clear, and every star restores a quiet courtyard. 600 levels plus 120 Master levels; regular levels have no time limit.",
  statusNote: "Launching now on the App Store and Google Play.",
  metaTitle: "Courtyard Arrows: Tap & Clear — Arrow Puzzle Game",
  metaDescription:
    "Tap arrows off the board once their way is clear: bent arrows, fuses and linked pairs over 600 levels plus 120 Master. Restore a quiet courtyard.",
  features: [
    {
      title: "Arrows that bend",
      body: "Arrows grow long and wind around corners; when one leaves, its whole body snakes out behind its head. Crowded boards ask you to plan two or three moves ahead.",
    },
    {
      title: "Hearts, not clocks",
      body: "Three hearts per level (two on Super Hard levels from 101 and on Master). A blocked tap costs one; out of hearts, continue with two more or simply retry. Regular levels have no time limit; only Rush levels race a countdown, and it pauses whenever the board is covered.",
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
      body: "Stars bring five corners back to life, six steps each: the Stone Path, Koi Pond, Bamboo Grove, Tea Pavilion and the Moon Gate, in a soft hand-painted style.",
    },
    {
      title: "Three puzzles a day",
      body: "Morning, Noon and Moonlight: three new daily puzzles from level 8, Endless mode from level 30, and new twists (padlocks, ice, rocks, fog, turntables, colour gates), each with a short tutorial.",
    },
  ],
  screenshots: [
    { src: shot("01-board"), alt: "Courtyard Arrows level 102: a wooden board of long and bent arrows, a fuse and two linked pairs joined by gold chains, with hearts, arrows and par counters above and four boosters below" },
    { src: shot("02-snakeout"), alt: "A long U-shaped arrow snaking off the board along its own bend" },
    { src: shot("03-bigboard"), alt: "Super Hard level 140: a 14 by 20 board of 80 arrows with two hearts" },
    { src: shot("04-courtyard"), alt: "The Garden screen: the Bamboo Grove at step 2 of 6, with a Renovate button for 24 stars" },
    { src: shot("05-master"), alt: "A Master board zoomed in, with fuse badges on the bent arrows and two hearts" },
    { src: shot("06-daily"), alt: "The Daily Puzzle panel with three puzzles: Morning, Noon and Moonlight" },
  ],
  trust: {
    title: "Honest about ads",
    body: "Full-screen ads only after a win: never during a level, never after a fail, a retry or a daily puzzle, and never in your first levels. The banner lives on the home and map screens only, and reward videos are always optional. A one-time Remove Ads purchase turns the banner and between-level ads off for good.",
  },
  faqs: [
    {
      q: "Is there an undo?",
      a: "Not a general one: a cleared arrow stays cleared, so there's nothing to take back after a good move. The Undo booster gives back a heart you lost to a mistake.",
    },
    {
      q: "Is there a timer?",
      a: "Regular levels have no time limit. A par clock from level 11 lets you earn a Speed crown but never fails a level. A few Super Hard and Master levels are Rush levels with a real countdown, and it pauses whenever the board is covered.",
    },
    {
      q: "What are the Master levels?",
      a: "A separate 120-level track for experts, after the 600 campaign levels. You get two hearts per level, and every fourth Master level is a Rush level.",
    },
    {
      q: "How do the daily puzzles work?",
      a: "From level 8 there are three new puzzles every day: Morning (easy), Noon (medium) and Moonlight (hard). Playing on consecutive days builds a streak that opens chests.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "点一下箭头，清出一条路",
  subtitle: "点击消除的箭头解谜游戏",
  oneLiner:
    "一款静心又烧脑的点击解谜：箭头前方畅通时点它飞出棋盘，每颗星星都让安静的庭院重焕生机。600 关外加 120 关大师关卡，普通关卡不限时。",
  statusNote: "正在登陆 App Store 和 Google Play。",
  metaTitle: "Courtyard Arrows：箭头消除解谜游戏，600 关",
  metaDescription:
    "点击箭头，前路畅通就飞出棋盘。会拐弯的长箭头、引信与连体箭头，600 关外加 120 关大师关卡。用每颗星星修复一座安静的庭院，普通关卡不限时。",
  features: [
    { title: "会拐弯的箭头", body: "箭头会变长、会拐弯；飞出时整条身体沿自己的路径蛇行而出。拥挤的棋盘需要你提前规划两三步。" },
    { title: "只有红心，没有时钟", body: "每关三颗红心（第 101 关起的超难关和大师关为两颗）。点到被挡住的箭头失去一颗；用完可以再加两颗继续，或直接重来。普通关卡不限时，只有「冲刺」关有倒计时，棋盘被遮挡时会暂停。" },
    { title: "600 关，外加大师轨道", body: "三十个四季章节，从「梅花」到「月门」，之后是 120 关的大师轨道。每一关上线前都经过求解器验证，确保有解。" },
    { title: "引信与连体箭头", body: "引信会数你的出口数：每飞出一支箭头就减一，所以要在归零前放走带引信的箭头。连体箭头会一起飞出，所以两条路径都必须畅通。" },
    { title: "修复一座庭院", body: "星星让庭院的五个角落重现生机，每处六个步骤：石径、锦鲤池、竹林、茶亭和月门，柔和的手绘风格画面。" },
    { title: "每天三道谜题", body: "清晨、正午和月夜：第 8 关起每天三道新的每日谜题，第 30 关开放无尽模式；锁与钥匙、冰块、岩石、迷雾、转盘和颜色闸门等新玩法陆续登场，都有简短教学。" },
  ],
  screenshots: [
    { src: shot("01-board"), alt: "Courtyard Arrows 第 102 关：木质棋盘上的长箭头与弯箭头、一个引信和两对由金色锁链相连的连体箭头，上方是红心、箭头与标准用时计数，下方是四种道具" },
    { src: shot("02-snakeout"), alt: "一支 U 形长箭头沿着自己的弯道蛇行飞出棋盘" },
    { src: shot("03-bigboard"), alt: "超难关第 140 关：14×20 的棋盘上有 80 支箭头，两颗红心" },
    { src: shot("04-courtyard"), alt: "花园页面：竹林修复到第 2/6 步，「修复」按钮需要 24 颗星星" },
    { src: shot("05-master"), alt: "放大的大师关棋盘，弯箭头上带有引信标记，两颗红心" },
    { src: shot("06-daily"), alt: "每日谜题面板中的三道谜题：清晨、正午和月夜" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现：绝不在关卡进行中，也不会在失败、重来或每日谜题之后出现，最初几关完全没有。横幅只在主页和地图页，奖励视频始终由你选择。一次性「去除广告」内购会永久关闭横幅和关卡间广告。",
  },
  faqs: [
    { q: "可以撤销吗？", a: "没有通用撤销：清除的箭头不会回来，所以好的一步无需撤回。「撤销」道具可以找回因失误失去的一颗心。" },
    { q: "有倒计时吗？", a: "普通关卡不限时。第 11 关起的标准用时只用来争取「速度皇冠」，绝不会让关卡失败。少数超难关和大师关是有真正倒计时的「冲刺」关，棋盘被遮挡时会暂停。" },
    { q: "大师关是什么？", a: "一条独立的 120 关专家轨道，位于 600 个主线关卡之后。每关两颗红心，每四个大师关中有一个是「冲刺」关。" },
    { q: "每日谜题怎么玩？", a: "第 8 关起，每天有三道新谜题：清晨（简单）、正午（中等）和月夜（困难）。连续几天游玩可以累积连胜，打开宝箱。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Courtyard Arrows",
  storeName: "Courtyard Arrows: Tap & Clear",
  tagline: "點一下箭頭，清出一條路",
  subtitle: "點擊消除的箭頭解謎遊戲",
  oneLiner:
    "一款靜心又燒腦的點擊解謎：箭頭前方暢通時點它飛出棋盤，每顆星星都讓寧靜的庭院重現生機。600 關外加 120 關大師關卡，一般關卡不限時。",
  statusNote: "正在上架 App Store 與 Google Play。",
  metaTitle: "Courtyard Arrows：箭頭消除解謎遊戲，600 關",
  metaDescription:
    "點擊箭頭，前路暢通就飛出棋盤。會轉彎的長箭頭、引信與連體箭頭，600 關外加 120 關大師關卡。用每顆星星修復一座寧靜的庭院，一般關卡不限時。",
  features: [
    { title: "會轉彎的箭頭", body: "箭頭會變長、會轉彎；飛出時整條身體沿自己的路徑蛇行而出。擁擠的棋盤需要你預先規劃兩三步。" },
    { title: "只有紅心，沒有時鐘", body: "每關三顆紅心（第 101 關起的超難關和大師關為兩顆）。點到被擋住的箭頭失去一顆；用完可以再加兩顆繼續，或直接重來。一般關卡不限時，只有「衝刺」關有倒數計時，棋盤被遮擋時會暫停。" },
    { title: "600 關，外加大師軌道", body: "三十個四季章節，從「梅花」到「月門」，之後是 120 關的大師軌道。每一關上線前都經過求解器驗證，確保有解。" },
    { title: "引信與連體箭頭", body: "引信會數你的出口數：每飛出一支箭頭就減一，所以要在歸零前放走帶引信的箭頭。連體箭頭會一起飛出，所以兩條路徑都必須暢通。" },
    { title: "修復一座庭院", body: "星星讓庭院的五個角落重現生機，每處六個步驟：石徑、錦鯉池、竹林、茶亭和月門，柔和的手繪風格畫面。" },
    { title: "每天三道謎題", body: "清晨、正午和月夜：第 8 關起每天三道新的每日謎題，第 30 關開放無盡模式；鎖與鑰匙、冰塊、岩石、迷霧、轉盤和顏色閘門等新玩法陸續登場，都有簡短教學。" },
  ],
  screenshots: [
    { src: shot("01-board"), alt: "Courtyard Arrows 第 102 關：木質棋盤上的長箭頭與彎箭頭、一個引信和兩對由金色鎖鏈相連的連體箭頭，上方是紅心、箭頭與標準用時計數，下方是四種道具" },
    { src: shot("02-snakeout"), alt: "一支 U 形長箭頭沿著自己的彎道蛇行飛出棋盤" },
    { src: shot("03-bigboard"), alt: "超難關第 140 關：14×20 的棋盤上有 80 支箭頭，兩顆紅心" },
    { src: shot("04-courtyard"), alt: "花園頁面：竹林修復到第 2/6 步，「修復」按鈕需要 24 顆星星" },
    { src: shot("05-master"), alt: "放大的大師關棋盤，彎箭頭上帶有引信標記，兩顆紅心" },
    { src: shot("06-daily"), alt: "每日謎題面板中的三道謎題：清晨、正午和月夜" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現：絕不在關卡進行中，也不會在失敗、重來或每日謎題之後出現，最初幾關完全沒有。橫幅只在主頁和地圖頁，獎勵影片始終由你選擇。一次性「移除廣告」內購會永久關閉橫幅和關卡間廣告。",
  },
  faqs: [
    { q: "可以復原嗎？", a: "沒有通用復原：清除的箭頭不會回來，所以好的一步無需撤回。「復原」道具可以找回因失誤失去的一顆心。" },
    { q: "有倒數計時嗎？", a: "一般關卡不限時。第 11 關起的標準用時只用來爭取「速度皇冠」，絕不會讓關卡失敗。少數超難關和大師關是有真正倒數計時的「衝刺」關，棋盤被遮擋時會暫停。" },
    { q: "大師關是什麼？", a: "一條獨立的 120 關專家軌道，位於 600 個主線關卡之後。每關兩顆紅心，每四個大師關中有一個是「衝刺」關。" },
    { q: "每日謎題怎麼玩？", a: "第 8 關起，每天有三道新謎題：清晨（簡單）、正午（中等）和月夜（困難）。連續幾天遊玩可以累積連勝，打開寶箱。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const courtyardArrows: AppContent = {
  slug: "arrow-out",
  category: "game",
  ogImage: "/apps/arrow-out/og.png",
  buildNumber: 10,
  version: "1.0.0",
  // Treated as released ahead of store approval; add appStoreUrl when live.
  status: "live",
  platforms: ["iOS", "Android"],
  icon: "/apps/arrow-out/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  credits: arrowOutCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
