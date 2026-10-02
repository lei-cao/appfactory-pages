// Porcelain Trio (apps/tile-trio) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). v3 facts
// (600 levels + 120 Master, countdown tiles, cracked tray slots) follow the
// app's fastlane/metadata description + LISTING.md. Unreleased: flip status +
// appStoreUrl/playStoreUrl when the store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { tileTrioCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Porcelain Trio", pass: "Tea House pass" };
const shot = (f: string) => `/apps/tile-trio/${f}`;

const en: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "Pick. Match. Sip.",
  subtitle: "A Calm Triple Match Puzzle",
  oneLiner:
    "Pick porcelain tiles into a 7-slot tray and clear them three alike, while an old tea house comes back to life. 600 levels plus a 120-level Master track, and no time limits on regular levels.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Porcelain Trio: Tea Tiles — a calm triple-match tile puzzle, 600 levels",
  metaDescription:
    "Porcelain Trio is a calm, layered triple-match puzzle: porcelain tiles in a hand-painted style, a 7-slot tray, 3 free undos every level, 600 levels plus a 120-level Master track each checked for a solution, and no time limits on regular levels.",
  features: [
    {
      title: "Three alike vanish",
      body: "Tap a tile and it slides into your tray; three matching tiles clear. Fill the tray with no match and the level ends — so plan your sets of three.",
    },
    {
      title: "Layers to read",
      body: "Tiles sit in layers and tall pyramids; the darker ones underneath free up as you clear the bright ones on top. Face-down tiles, side piles, keys and padlocks, vines, ice and twin trays join in as you go.",
    },
    {
      title: "Countdown tiles",
      body: "A numbered tile shows how many picks you have left to take it. Reach 0 with it still on the board and it cracks, so know which tile to clear first.",
    },
    {
      title: "Cracked tray slots",
      body: "A cracked slot shows how many triples will open it. Until then your tray is one slot shorter, so every pick counts.",
    },
    {
      title: "600 levels, plus Master",
      body: "Thirty chapters, then a 120-level Master track for experts. 24 hand-painted porcelain motifs keep every tile easy to tell apart, and every level is solver-checked.",
    },
    {
      title: "A tea house to restore",
      body: "Stars restore an old tea house room by room: the Entrance, Tea Room, Kitchen, Garden Deck and Moon Balcony. Every level gives you 3 free undos.",
    },
  ],
  screenshots: [
    { src: shot("shot-countdown.png"), alt: "A Porcelain Trio board with layered porcelain tiles, a numbered countdown tile, and a 7-slot tray with two matching blossoms picked" },
    { src: shot("shot-cracked.png"), alt: "A board with two cracked tray slots showing how many triples open them, above the Shuffle, Magnet, Extra Slot and Undo buttons" },
    { src: shot("shot-twin.png"), alt: "A board played with twin trays, each four slots wide, above the booster row" },
    { src: shot("shot-board.png"), alt: "A full late-game board of blue-and-white porcelain tiles in a tight grid, with a locked tile waiting in the tray row" },
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
    {
      q: "Are there timers?",
      a: "There are no time limits on regular levels. Countdown tiles count your picks, not seconds. A par clock never fails a level, and the Master track has a few Rush levels with a real countdown.",
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
  oneLiner: "把瓷砖放进 7 格托盘，三枚相同即消除，一座老茶馆随之重现生机。600 个关卡外加 120 关大师轨道，普通关卡没有时间限制。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "三枚相同即消除", body: "点一块瓷砖，它会滑进托盘；三块相同即消除。托盘满了却没有配对，本关结束——所以要规划好每组三块。" },
    { title: "层层叠叠", body: "瓷砖分层堆叠，还有高高的金字塔；清掉上层明亮的瓷砖，下层较暗的才会解锁。随着进度还有背面朝上的瓷砖、侧边瓷砖堆、钥匙与挂锁、藤蔓、冰块和双托盘。" },
    { title: "倒计时瓷砖", body: "带数字的瓷砖显示你还能拾取几次来取走它。数字归零时它仍在棋盘上就会碎裂，所以要想好先清哪一块。" },
    { title: "碎裂的托盘格", body: "碎裂的托盘格显示还需消除几组三块才能打开它。在此之前你的托盘少一格，每一次拾取都很重要。" },
    { title: "600 关，外加大师轨道", body: "三十个章节，之后是 120 关的大师轨道。24 种手绘瓷绘图案让每块瓷砖都容易分辨，每一关都经过求解器验证。" },
    { title: "修复一座茶馆", body: "星星让老茶馆一间间焕新：入口、茶室、厨房、庭院露台和赏月阳台。每关有 3 次免费撤销。" },
  ],
  screenshots: [
    { src: shot("shot-countdown.png"), alt: "Porcelain Trio 棋盘：分层瓷砖、带数字的倒计时瓷砖，7 格托盘里已放入两朵相同的花" },
    { src: shot("shot-cracked.png"), alt: "托盘有两个碎裂格，显示需消除几组三块才能打开，下方是洗牌、磁铁、加一格和撤销按钮" },
    { src: shot("shot-twin.png"), alt: "双托盘关卡，两个托盘各四格，下方是道具栏" },
    { src: shot("shot-board.png"), alt: "后期关卡的整齐青花瓷砖棋盘，托盘行里有一块上锁的瓷砖" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "撤销怎么用？", a: "每关有 3 次免费撤销，可收回一次拾取。之后每次撤销需 40 金币（游玩获得）或自愿观看一段短广告。" },
    { q: "托盘满了怎么办？", a: "本关结束，但不会损失任何进度：可以加一格托盘继续（花金币，或每关一次自愿看广告），或直接重来。" },
    { q: "有倒计时吗？", a: "普通关卡没有时间限制。倒计时瓷砖数的是你的拾取次数，不是秒数。标准用时不会让关卡失败，大师轨道有少数带真正倒计时的「冲刺」关卡。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "拾一片，湊三枚，品一口。",
  subtitle: "靜心三消解謎",
  oneLiner: "把瓷磚放進 7 格托盤，三枚相同即消除，一座老茶館隨之重現生機。600 個關卡外加 120 關大師軌道，一般關卡沒有時間限制。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "三枚相同即消除", body: "點一塊瓷磚，它會滑進托盤；三塊相同即消除。托盤滿了卻沒有配對，本關結束——所以要規劃好每組三塊。" },
    { title: "層層疊疊", body: "瓷磚分層堆疊，還有高高的金字塔；清掉上層明亮的瓷磚，下層較暗的才會解鎖。隨著進度還有背面朝上的瓷磚、側邊瓷磚堆、鑰匙與掛鎖、藤蔓、冰塊和雙托盤。" },
    { title: "倒數瓷磚", body: "帶數字的瓷磚顯示你還能拾取幾次來取走它。數字歸零時它仍在棋盤上就會碎裂，所以要想好先清哪一塊。" },
    { title: "碎裂的托盤格", body: "碎裂的托盤格顯示還需消除幾組三塊才能打開它。在此之前你的托盤少一格，每一次拾取都很重要。" },
    { title: "600 關，外加大師軌道", body: "三十個章節，之後是 120 關的大師軌道。24 種手繪瓷繪圖案讓每塊瓷磚都容易分辨，每一關都經過求解器驗證。" },
    { title: "修復一座茶館", body: "星星讓老茶館一間間煥新：入口、茶室、廚房、庭院露台和賞月陽台。每關有 3 次免費復原。" },
  ],
  screenshots: [
    { src: shot("shot-countdown.png"), alt: "Porcelain Trio 棋盤：分層瓷磚、帶數字的倒數瓷磚，7 格托盤裡已放入兩朵相同的花" },
    { src: shot("shot-cracked.png"), alt: "托盤有兩個碎裂格，顯示需消除幾組三塊才能打開，下方是洗牌、磁鐵、加一格和復原按鈕" },
    { src: shot("shot-twin.png"), alt: "雙托盤關卡，兩個托盤各四格，下方是道具欄" },
    { src: shot("shot-board.png"), alt: "後期關卡的整齊青花瓷磚棋盤，托盤列裡有一塊上鎖的瓷磚" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "復原怎麼用？", a: "每關有 3 次免費復原，可收回一次拾取。之後每次復原需 40 金幣（遊玩獲得）或自願觀看一段短廣告。" },
    { q: "托盤滿了怎麼辦？", a: "本關結束，但不會損失任何進度：可以加一格托盤繼續（花金幣，或每關一次自願看廣告），或直接重來。" },
    { q: "有倒數計時嗎？", a: "一般關卡沒有時間限制。倒數瓷磚數的是你的拾取次數，不是秒數。標準用時不會讓關卡失敗，大師軌道有少數帶真正倒數計時的「衝刺」關卡。" },
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
  credits: tileTrioCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
