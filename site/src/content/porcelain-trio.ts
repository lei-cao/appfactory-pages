// Porcelain Trio (apps/tile-trio) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). Unreleased:
// flip status + appStoreUrl/playStoreUrl when the store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Porcelain Trio", pass: "Tea House pass" };
const shot = (f: string) => `/apps/tile-trio/${f}`;

const en: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "Pick. Match. Sip.",
  subtitle: "A Calm Triple Match Puzzle",
  oneLiner:
    "Pick porcelain tiles into a 7-slot tray and clear them three alike, while an old tea house comes back to life. No timer on any board.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Porcelain Trio: Tea Tiles — a calm triple-match tile puzzle",
  metaDescription:
    "Porcelain Trio is a calm, layered triple-match puzzle: porcelain tiles in a hand-painted style, a 7-slot tray, 3 free undos every level, 240 levels each checked for a solution, and no timers.",
  features: [
    {
      title: "Three alike vanish",
      body: "Tap a tile and it slides into your tray; three matching tiles clear. Fill the tray with no match and the level ends — so plan your sets of three.",
    },
    {
      title: "Layers to read",
      body: "Tiles sit in layers and tall pyramids; the darker ones underneath free up as you clear the bright ones on top.",
    },
    {
      title: "24 porcelain motifs",
      body: "Teacups, koi, lanterns, lucky cats, dango, bonsai and more, in a blue-and-white hand-painted style — every tile is told apart by its picture.",
    },
    {
      title: "Undo when you need it",
      body: "3 free undos every level. After that an undo costs a few coins earned by playing, or an optional short ad. No timers, ever, on any board.",
    },
    {
      title: "240 checked levels",
      body: "Twelve chapters from Spring Tea to Cloud Temple. Every level is checked by our solver to have a solution before it ships.",
    },
    {
      title: "A tea house to restore",
      body: "Stars restore an old tea house room by room: the Entrance, Tea Room, Kitchen, Garden Deck and Moon Balcony.",
    },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "A Porcelain Trio board: layered porcelain tiles above a 7-slot tray, with the Undo button showing 3 free" },
    { src: shot("shot-triple.png"), alt: "Three matching tiles clearing from the tray" },
    { src: shot("shot-teahouse.png"), alt: "The tea house restoration card" },
    { src: shot("shot-map.png"), alt: "The chapter map with level nodes" },
  ],
  trust: {
    title: "Honest about ads",
    body: "Full-screen ads only after a win — never during a level, never before your 9th completed level, at most once every three wins. The banner lives on the home and map screens only, and reward videos are always optional. A one-time Remove Ads purchase turns the banner and full-screen ads off for good.",
  },
  faqs: [
    {
      q: "How does undo work?",
      a: "Every level gives you 3 free undos to take back a pick. After that, each extra undo costs 40 coins (earned by playing) or an optional short ad.",
    },
    {
      q: "What happens when the tray fills up?",
      a: "The level ends, but you never lose progress: add a tray slot to keep going (for coins, or an optional ad once per level), or simply retry.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "拾一片，凑三枚，品一口。",
  subtitle: "静心三消解谜",
  oneLiner: "把瓷砖放进 7 格托盘，三枚相同即消除，一座老茶馆随之重现生机。所有关卡都没有倒计时。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "三枚相同即消除", body: "点一块瓷砖，它会滑进托盘；三块相同即消除。托盘满了却没有配对，本关结束——所以要规划好每组三块。" },
    { title: "层层叠叠", body: "瓷砖分层堆叠，还有高高的金字塔；清掉上层明亮的瓷砖，下层较暗的才会解锁。" },
    { title: "24 种瓷绘图案", body: "茶杯、锦鲤、灯笼、招财猫、团子、盆景等，青花手绘风格——每块瓷砖都靠图案区分。" },
    { title: "需要时就撤销", body: "每关 3 次免费撤销。之后每次撤销需少量游玩所得金币，或自愿观看一段短广告。所有关卡都没有倒计时。" },
    { title: "240 个经过验证的关卡", body: "十二个章节。每一关上线前都经过求解器验证，确保有解。" },
    { title: "修复一座茶馆", body: "星星让老茶馆一间间焕新：入口、茶室、厨房、庭院露台和赏月阳台。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Porcelain Trio 棋盘：分层瓷砖与 7 格托盘，撤销按钮显示 3 次免费" },
    { src: shot("shot-triple.png"), alt: "三块相同瓷砖从托盘中消除" },
    { src: shot("shot-teahouse.png"), alt: "茶馆修复卡片" },
    { src: shot("shot-map.png"), alt: "章节地图与关卡节点" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "撤销怎么用？", a: "每关有 3 次免费撤销，可收回一次拾取。之后每次撤销需 40 金币（游玩获得）或自愿观看一段短广告。" },
    { q: "托盘满了怎么办？", a: "本关结束，但不会损失任何进度：可以加一格托盘继续（花金币，或每关一次自愿看广告），或直接重来。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "拾一片，湊三枚，品一口。",
  subtitle: "靜心三消解謎",
  oneLiner: "把瓷磚放進 7 格托盤，三枚相同即消除，一座老茶館隨之重現生機。所有關卡都沒有倒數計時。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "三枚相同即消除", body: "點一塊瓷磚，它會滑進托盤；三塊相同即消除。托盤滿了卻沒有配對，本關結束——所以要規劃好每組三塊。" },
    { title: "層層疊疊", body: "瓷磚分層堆疊，還有高高的金字塔；清掉上層明亮的瓷磚，下層較暗的才會解鎖。" },
    { title: "24 種瓷繪圖案", body: "茶杯、錦鯉、燈籠、招財貓、糰子、盆景等，青花手繪風格——每塊瓷磚都靠圖案區分。" },
    { title: "需要時就復原", body: "每關 3 次免費復原。之後每次復原需少量遊玩所得金幣，或自願觀看一段短廣告。所有關卡都沒有倒數計時。" },
    { title: "240 個經過驗證的關卡", body: "十二個章節。每一關上線前都經過求解器驗證，確保有解。" },
    { title: "修復一座茶館", body: "星星讓老茶館一間間煥新：入口、茶室、廚房、庭院露台和賞月陽台。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Porcelain Trio 棋盤：分層瓷磚與 7 格托盤，復原按鈕顯示 3 次免費" },
    { src: shot("shot-triple.png"), alt: "三塊相同瓷磚從托盤中消除" },
    { src: shot("shot-teahouse.png"), alt: "茶館修復卡片" },
    { src: shot("shot-map.png"), alt: "章節地圖與關卡節點" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "復原怎麼用？", a: "每關有 3 次免費復原，可收回一次拾取。之後每次復原需 40 金幣（遊玩取得）或自願觀看一段短廣告。" },
    { q: "托盤滿了怎麼辦？", a: "本關結束，但不會損失任何進度：可以加一格托盤繼續（花金幣，或每關一次自願看廣告），或直接重來。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const porcelainTrio: AppContent = {
  slug: "tile-trio",
  buildNumber: 11,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS", "Android"],
  icon: "/apps/tile-trio/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
