// Porcelain Trio (apps/tile-trio) — its own site in
// src/components/sites/tile-trio/, shared puzzle-shell privacy/terms/FAQ copy
// (./puzzle-games-common.ts). Facts follow the live App Store listing (v4
// store text, live 2026-10-13: 600 levels + 120 Master from level 60, Rush
// clocks, daily from level 8, endless from level 30, continues). Not in the
// mainland China App Store. Add playStoreUrl when Google Play goes live.

import type { AppContent, AppLocalized } from "./apps";
import { tileTrioCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Porcelain Trio", pass: "Tea House pass" };
const shot = (f: string) => `/apps/tile-trio/${f}`;

const en: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "Three alike, and they vanish.",
  subtitle: "Triple Tile Match Puzzle",
  oneLiner:
    "Pick hand-painted porcelain tiles into a 7-slot tray, clear them three alike, and restore an old tea house room by room. 600 levels plus a 120-level Master track.",
  statusNote: "Free on the App Store for iPhone and iPad. Google Play is next.",
  metaTitle: "Porcelain Trio: Tea Tiles – Triple Tile Match Puzzle",
  metaDescription:
    "Match porcelain tiles three alike, clear a 7-slot tray and restore an old tea house. 600 levels, a Master track and a daily puzzle. Free on iPhone.",
  features: [
    {
      title: "Three alike vanish",
      body: "Tap a tile and it slides into your tray; three matching tiles clear. Fill all seven slots with no match and the level ends, so plan your sets of three.",
    },
    {
      title: "Layers and pyramids",
      body: "Tiles sit in layers and tall pyramids; the darker ones underneath free up as you clear the bright ones on top. Face-down tiles, side piles, keys and padlocks, vines, ice and twin trays arrive one at a time.",
    },
    {
      title: "A tea house to restore",
      body: "Stars from every level restore an old tea house, room by room: the Entrance, the Tea Room, the Kitchen, the Garden Deck and the Moon Balcony.",
    },
    {
      title: "Countdown tiles",
      body: "A numbered tile shows how many picks you have left to take it. Let it reach 0 on the board and it cracks, so choose which tile to clear first.",
    },
    {
      title: "Cracked tray slots",
      body: "A cracked slot shows how many triples will mend it. Until then your tray is a slot shorter, and every pick counts.",
    },
    {
      title: "Master track and Rush",
      body: "From level 60, a 120-level Master track for experts, with Rush levels against a clock that pauses whenever the board is covered.",
    },
  ],
  screenshots: [
    { src: shot("store-01-hook.webp"), alt: "Level 200, a Super Hard board of porcelain tiles: dumplings, ginkgo leaves, coins, teacups and koi, with three tiles waiting in the tray" },
    { src: shot("store-02-countdown.webp"), alt: "Level 180 with countdown tiles: numbered tiles show how many picks are left before they crack" },
    { src: shot("store-03-big-board.webp"), alt: "Level 240, a large layered board where darker tiles wait underneath the bright ones on top" },
    { src: shot("store-04-tea-house.webp"), alt: "The Tea House screen: the restored kitchen with blue-and-white porcelain on its shelves, step 5 of 6" },
    { src: shot("store-05-master-rush.webp"), alt: "Master level 21, a Rush level with 158 seconds on the clock" },
    { src: shot("store-06-daily.webp"), alt: "The Daily Puzzle card with three teas to choose from: Easy Tea, Green Tea and Dark Tea" },
    { src: shot("store-07-revive.webp"), alt: "The Out of space card on a full tray, offering to revive with your last three tray tiles back on the board" },
  ],
  trust: {
    title: "Honest about ads",
    body: "A full-screen ad can only appear after you win a level: never during one, never after a lost level, a retry or a daily puzzle. The banner stays on the home and map screens, reward videos are always your choice, and a one-time Remove Ads purchase turns the banner and between-level ads off for good.",
  },
  faqs: [
    {
      q: "How does undo work?",
      a: "Every level gives you 3 free undos to take back a pick. After that, one more undo costs a few coins you earn by playing, or an optional short ad.",
    },
    {
      q: "What happens when the tray fills up?",
      a: "The level ends, but you never lose progress. Continue (for coins, or an optional ad once per level) and your last 3 tray tiles go back on the board with one more slot, or simply retry.",
    },
    {
      q: "Are there timers?",
      a: "Regular levels have no time limit. Countdown tiles count your picks, not seconds. The Master track has Rush levels with a real clock, which pauses whenever the board is covered; a continue gives 30 more seconds.",
    },
    {
      q: "When do the daily puzzle and Endless mode open?",
      a: "The daily puzzle opens at level 8, Endless mode at level 30 and the Master track at level 60.",
    },
    {
      q: "Can every level be solved?",
      a: "Yes. Every level is checked by our solver to have a solution before it ships.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "三块一样，就会消失。",
  subtitle: "三消瓷砖配对解谜",
  oneLiner:
    "把手绘风格的青花瓷砖放进 7 格托盘，三块相同即消除，一间间修复一座老茶馆。600 个关卡，外加 120 关大师轨道。",
  statusNote: "App Store 免费下载，支持 iPhone 和 iPad（中国大陆 App Store 暂未上架）。Google Play 版即将推出。",
  metaTitle: "Porcelain Trio：青花瓷砖三消配对解谜游戏",
  metaDescription:
    "把青花瓷砖放进 7 格托盘，三块相同即消除，一间间修复老茶馆。600 个关卡、120 关大师轨道和每日谜题，iPhone 与 iPad 免费下载。",
  features: [
    { title: "三块相同即消除", body: "点一块瓷砖，它就滑进托盘；凑齐三块相同的就会消除。七格放满却没有配对，本关结束，所以每一组三块都要提前规划。" },
    { title: "层层叠叠的金字塔", body: "瓷砖分层堆叠，还有高高的金字塔；清掉上层明亮的瓷砖，下层颜色较暗的才会解锁。背面朝上的瓷砖、侧边牌堆、钥匙与挂锁、藤蔓、冰块和双托盘会逐一登场。" },
    { title: "修复一座老茶馆", body: "每关获得的星星会一间间修复老茶馆：入口、茶室、厨房、庭院露台和赏月阳台。" },
    { title: "倒计时瓷砖", body: "带数字的瓷砖显示你还剩几次拾取来取走它。数字归零时它还在棋盘上就会碎裂，所以要想好先清哪一块。" },
    { title: "碎裂的托盘格", body: "碎裂的托盘格显示还要消除几组三块才能修好它。在此之前托盘少一格，每一次拾取都很关键。" },
    { title: "大师轨道与冲刺关", body: "第 60 关起开放 120 关的大师轨道，其中的冲刺关卡有真正的倒计时，棋盘被遮挡时计时会暂停。" },
  ],
  screenshots: [
    { src: shot("store-01-hook.webp"), alt: "第 200 关「超难」棋盘：包子、银杏叶、铜钱、茶杯和锦鲤瓷砖，托盘里已有三块瓷砖" },
    { src: shot("store-02-countdown.webp"), alt: "第 180 关的倒计时瓷砖：数字显示碎裂前还剩几次拾取" },
    { src: shot("store-03-big-board.webp"), alt: "第 240 关的大型分层棋盘，较暗的瓷砖压在明亮的瓷砖下面" },
    { src: shot("store-04-tea-house.webp"), alt: "茶馆页面：修复中的厨房，架子上摆满青花瓷，进度第 5 步（共 6 步）" },
    { src: shot("store-05-master-rush.webp"), alt: "大师第 21 关，一个还剩 158 秒的冲刺关卡" },
    { src: shot("store-06-daily.webp"), alt: "每日谜题卡片，可选三种茶：Easy Tea、Green Tea 和 Dark Tea" },
    { src: shot("store-07-revive.webp"), alt: "托盘已满时的「Out of space」卡片，可复活并把最后三块瓷砖放回棋盘" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只会在你通关后出现：绝不在关卡中，也不会在失败、重试或每日谜题之后出现。横幅只在主页和地图页，奖励视频始终由你决定，一次性「去除广告」内购会永久关闭横幅和关卡间广告。",
  },
  faqs: [
    { q: "撤销怎么用？", a: "每关有 3 次免费撤销，可以收回一次拾取。之后每次撤销需要少量金币（游玩即可获得），或自愿观看一段短广告。" },
    { q: "托盘满了怎么办？", a: "本关结束，但不会损失任何进度。选择继续（花金币，或每关一次自愿看广告），托盘里最后 3 块瓷砖会放回棋盘并多加一格；也可以直接重来。" },
    { q: "有倒计时吗？", a: "普通关卡没有时间限制。倒计时瓷砖数的是拾取次数，不是秒数。大师轨道有带真正倒计时的冲刺关卡，棋盘被遮挡时计时暂停；选择继续可再获得 30 秒。" },
    { q: "每日谜题和无尽模式什么时候开放？", a: "每日谜题在第 8 关开放，无尽模式在第 30 关开放，大师轨道在第 60 关开放。" },
    { q: "每一关都有解吗？", a: "有。每一关在上线前都经过我们的求解器验证，确保有解。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Porcelain Trio",
  storeName: "Porcelain Trio: Tea Tiles",
  tagline: "三塊一樣，就會消失。",
  subtitle: "三消瓷磚配對益智",
  oneLiner:
    "把手繪風格的青花瓷磚放進 7 格托盤，三塊相同就消除，一間間修復一座老茶館。600 個關卡，外加 120 關大師關卡。",
  statusNote: "App Store 免費下載，支援 iPhone 與 iPad。Google Play 版即將推出。",
  metaTitle: "Porcelain Trio：青花瓷磚三消配對益智遊戲",
  metaDescription:
    "把青花瓷磚放進 7 格托盤，三塊相同就消除，一間間修復老茶館。600 個關卡、120 關大師關卡和每日謎題，iPhone 與 iPad 免費下載。",
  features: [
    { title: "三塊相同就消除", body: "點一塊瓷磚，它就滑進托盤；湊齊三塊相同的就會消除。七格放滿卻沒有配對，這關就結束，所以每一組三塊都要先想好。" },
    { title: "層層疊疊的金字塔", body: "瓷磚分層堆疊，還有高高的金字塔；清掉上層明亮的瓷磚，下層顏色較暗的才會解鎖。背面朝上的瓷磚、側邊牌堆、鑰匙與掛鎖、藤蔓、冰塊和雙托盤會一一登場。" },
    { title: "修復一座老茶館", body: "每關拿到的星星會一間間修復老茶館：入口、茶室、廚房、庭院露台和賞月陽台。" },
    { title: "倒數瓷磚", body: "帶數字的瓷磚顯示你還剩幾次拾取來拿走它。數字歸零時它還在棋盤上就會碎裂，所以要想好先清哪一塊。" },
    { title: "碎裂的托盤格", body: "碎裂的托盤格顯示還要消除幾組三塊才能修好它。在那之前托盤少一格，每一次拾取都很關鍵。" },
    { title: "大師關卡與衝刺關", body: "第 60 關起開放 120 關的大師關卡，其中的衝刺關有真正的倒數計時，棋盤被遮住時計時會暫停。" },
  ],
  screenshots: [
    { src: shot("store-01-hook.webp"), alt: "第 200 關「超難」棋盤：包子、銀杏葉、銅錢、茶杯和錦鯉瓷磚，托盤裡已有三塊瓷磚" },
    { src: shot("store-02-countdown.webp"), alt: "第 180 關的倒數瓷磚：數字顯示碎裂前還剩幾次拾取" },
    { src: shot("store-03-big-board.webp"), alt: "第 240 關的大型分層棋盤，較暗的瓷磚壓在明亮的瓷磚下面" },
    { src: shot("store-04-tea-house.webp"), alt: "茶館頁面：修復中的廚房，架上擺滿青花瓷，進度第 5 步（共 6 步）" },
    { src: shot("store-05-master-rush.webp"), alt: "大師第 21 關，一個還剩 158 秒的衝刺關卡" },
    { src: shot("store-06-daily.webp"), alt: "每日謎題卡片，可選三種茶：Easy Tea、Green Tea 和 Dark Tea" },
    { src: shot("store-07-revive.webp"), alt: "托盤滿了時的「Out of space」卡片，可以復活並把最後三塊瓷磚放回棋盤" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只會在你過關後出現：絕不在關卡中，也不會在失敗、重試或每日謎題之後出現。橫幅只在主頁和地圖頁，獎勵影片永遠由你決定，一次性「移除廣告」內購會永久關閉橫幅和關卡之間的廣告。",
  },
  faqs: [
    { q: "復原怎麼用？", a: "每關有 3 次免費復原，可以收回一次拾取。之後每次復原需要少量金幣（遊玩就能取得），或自願觀看一段短廣告。" },
    { q: "托盤滿了怎麼辦？", a: "這關結束，但不會失去任何進度。選擇繼續（花金幣，或每關一次自願看廣告），托盤裡最後 3 塊瓷磚會放回棋盤並多加一格；也可以直接重來。" },
    { q: "有倒數計時嗎？", a: "一般關卡沒有時間限制。倒數瓷磚數的是拾取次數，不是秒數。大師關卡有帶真正倒數計時的衝刺關，棋盤被遮住時計時暫停；選擇繼續可以再多 30 秒。" },
    { q: "每日謎題和無盡模式什麼時候開放？", a: "每日謎題在第 8 關開放，無盡模式在第 30 關開放，大師關卡在第 60 關開放。" },
    { q: "每一關都有解嗎？", a: "有。每一關在上線前都經過我們的解題程式驗證，確保有解。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const porcelainTrio: AppContent = {
  slug: "tile-trio",
  category: "game",
  ogImage: "/apps/tile-trio/og.png",
  buildNumber: 11,
  version: "1.0.0",
  status: "live",
  appStoreUrl: "https://apps.apple.com/app/id6818530086",
  appStoreId: "6818530086",
  platforms: ["iOS", "Android"],
  icon: "/apps/tile-trio/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  credits: tileTrioCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
