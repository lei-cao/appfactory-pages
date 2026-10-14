// Haystack Hollow: Farm Town (games3d/apps/harvest-town, slug harvest-town,
// bundle id com.appfactory.harvestTown) — its own site
// (components/sites/harvest-town), shared games3d privacy/terms/FAQ copy
// (./games3d-common.ts). Unreleased: status "building", no store links.
// Claims follow the game's README, catalog and fastlane listing (v3,
// 2026-10-05): Walk mode, the Feed Mill / Bakery / Dairy / Jam Kitchen
// chain, the Order Board, glowing unlock pads, a field hand, Mayor Hazel's
// 36 goals in 4 chapters, daily tasks + 7-day gift calendar, the Weekend
// Fair (+25 % on orders). The pictures are the game's icon, a town render
// and its Farm Store (public/apps/harvest-town/). The final store name is
// undecided: the display names live in the constants below, so a rename is a
// one-line change. v1 shows no full-screen ads (reward videos only); set
// interstitials: true below if that changes.

import type { AppContent, AppLocalized, Screenshot } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Short display name. */
const NAME = "Haystack Hollow";
/** Full store listing name (not final). */
const STORE_NAME = "Haystack Hollow: Farm Town";

const names = { name: NAME, interstitials: false };

const IMG = "/apps/harvest-town";
/** The landing looks pictures up by src; keep the order and srcs aligned across locales. */
const shots = (alts: string[]): Screenshot[] =>
  ["town", "barn", "mill", "fields", "pass", "packs"].map((n, i) => ({
    src: `${IMG}/${n}.webp`,
    alt: alts[i],
  }));

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Walk the wheat, bake the bread, fill the board.",
  subtitle: "Cozy 3D Farm Town Builder",
  oneLiner:
    "A cozy 3D farm town: walk your farmer through ripe crops to harvest them, turn them into feed, bread and jam, fill orders and grow a small farm into a busy town.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — Cozy 3D Farming Game`,
  metaDescription:
    "A cozy 3D farming game: walk through your crops to harvest, mill feed, bake bread, fill orders on the board and grow a small farm into a busy town.",
  features: [
    {
      title: "Walk to harvest",
      body: "Slide a thumb and your farmer walks; ripe crops jump onto his back and the field replants.",
    },
    {
      title: "Trade by standing still",
      body: "Stop beside a building to trade: the Feed Mill takes crops, animals take feed, the Order Board takes orders.",
    },
    {
      title: "Glowing pads",
      body: "Stand on a pad to unlock fields, a bigger basket, faster boots, a field hand and new buildings.",
    },
    {
      title: "Build mode",
      body: "Place, move and arrange buildings your way: drag to pan, pinch to zoom.",
    },
    {
      title: "Mayor Hazel's goals",
      body: "36 goals in four chapters, each ending in a chest, then endless wishes.",
    },
    {
      title: "Every day",
      body: "Three daily tasks with a bonus chest, a 7-day gift calendar, and the Weekend Fair on Saturdays and Sundays.",
    },
  ],
  screenshots: shots([
    "A Haystack Hollow town from above: a red barn, a windmill, a cowshed with cows, a farm truck and rows of wheat, corn and carrots",
    "The red barn and silo beside the farm truck loaded with crates",
    "The windmill turning above the cowshed, where three cows wait for feed",
    "Fields of ripe wheat and young corn in neat rows",
    "The Farm Store's Farmer's Pass: every bonus without videos, bought once",
    "Coin packs in the Farm Store, from a 400-coin pouch to a 3,600-coin chest",
  ]),
  trust: {
    title: "No ads between your chores",
    body: "Haystack Hollow shows no full-screen ads. Videos that speed up a job or double an order, a cash pile or the daily gift play only when you tap. A one-time Farmer's Pass skips the video on every bonus for good, and every coin can be earned by playing.",
  },
  faqs: [
    {
      q: `What do I do in ${NAME}?`,
      a: "Walk through ripe crops to harvest them, take them to the Feed Mill, the Bakery or the animals, deliver orders at the Order Board, pick up the cash piles and step on glowing pads to unlock more.",
    },
    {
      q: "Can I build the town my way?",
      a: "Yes. Switch to Build mode to buy, place and move buildings, then switch back to walking.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "走过麦田，烤好面包，填满订单板。",
  subtitle: "温馨的 3D 农场小镇建造游戏",
  oneLiner:
    "一座温馨的 3D 农场小镇：带着农夫走过成熟的作物来收获，把它们做成饲料、面包和果酱，完成订单，把小农场发展成热闹的小镇。",
  statusNote: "开发中，即将登陆 App Store。",
  metaTitle: "Haystack Hollow 农场小镇｜温馨 3D 农场经营游戏",
  metaDescription:
    "一款温馨的 3D 农场经营游戏：走过作物就能收获，磨饲料、烤面包、在订单板交货，把小农场发展成热闹的小镇。每日任务、周末集市和镇长的目标。",
  features: [
    { title: "走过就收获", body: "手指一滑，农夫就会走动；成熟的作物跳上他的背，田地自动重新播种。" },
    { title: "站着就能交易", body: "在建筑旁停下就能交易：饲料厂收作物，动物吃饲料，订单板收订单。" },
    { title: "发光的地块", body: "站上发光地块，解锁新田地、更大的篮子、更快的靴子、帮工和新建筑。" },
    { title: "建造模式", body: "按你的想法摆放和移动建筑：拖动平移，双指缩放。" },
    { title: "镇长 Hazel 的目标", body: "四个章节共 36 个目标，每章结束有宝箱，之后还有无尽的心愿。" },
    { title: "每一天", body: "三个每日任务和奖励宝箱、7 天礼物日历，以及周六周日的周末集市。" },
  ],
  screenshots: shots([
    "俯瞰 Haystack Hollow 小镇：红色谷仓、风车、养着奶牛的牛棚、农场卡车，以及成排的小麦、玉米和胡萝卜",
    "红色谷仓和筒仓，旁边是装满货箱的农场卡车",
    "风车在牛棚上方转动，三头奶牛等着吃饲料",
    "一排排成熟的小麦和嫩绿的玉米",
    "农场商店的农夫通行证：所有奖励免看视频，一次购买",
    "农场商店的金币包，从 400 金币的小袋到 3,600 金币的宝箱",
  ]),
  trust: {
    title: "农活之间没有广告",
    body: "Haystack Hollow 不显示全屏广告。加速工作、订单翻倍、现金堆翻倍或每日礼物翻倍的视频只在你点按时播放。一次性的农夫通行证可永久免看视频领取所有奖励，所有金币也都能靠游玩赚到。",
  },
  faqs: [
    { q: `在 ${NAME} 里做什么？`, a: "走过成熟的作物来收获，把它们送到饲料厂、面包坊或动物那里，在订单板交货，捡起现金堆，再站上发光地块解锁更多内容。" },
    { q: "可以按自己的想法建造小镇吗？", a: "可以。切换到建造模式即可购买、摆放和移动建筑，之后再切回步行。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "走過麥田，烤好麵包，填滿訂單板。",
  subtitle: "溫馨的 3D 農場小鎮建造遊戲",
  oneLiner:
    "一座溫馨的 3D 農場小鎮：帶著農夫走過成熟的作物來收成，把它們做成飼料、麵包和果醬，完成訂單，把小農場發展成熱鬧的小鎮。",
  statusNote: "開發中，即將登陸 App Store。",
  metaTitle: "Haystack Hollow 農場小鎮｜溫馨 3D 農場經營遊戲",
  metaDescription:
    "一款溫馨的 3D 農場經營遊戲：走過作物就能收成，磨飼料、烤麵包、在訂單板交貨，把小農場發展成熱鬧的小鎮。每日任務、週末市集和鎮長的目標。",
  features: [
    { title: "走過就收成", body: "手指一滑，農夫就會走動；成熟的作物跳上他的背，田地自動重新播種。" },
    { title: "站著就能交易", body: "在建築旁停下就能交易：飼料廠收作物，動物吃飼料，訂單板收訂單。" },
    { title: "發光的地塊", body: "站上發光地塊，解鎖新田地、更大的籃子、更快的靴子、幫手和新建築。" },
    { title: "建造模式", body: "照你的想法擺放和移動建築：拖曳平移，雙指縮放。" },
    { title: "鎮長 Hazel 的目標", body: "四個章節共 36 個目標，每章結束有寶箱，之後還有無盡的心願。" },
    { title: "每一天", body: "三個每日任務和獎勵寶箱、7 天禮物日曆，以及週六週日的週末市集。" },
  ],
  screenshots: shots([
    "俯瞰 Haystack Hollow 小鎮：紅色穀倉、風車、養著乳牛的牛舍、農場貨車，以及成排的小麥、玉米和紅蘿蔔",
    "紅色穀倉和筒倉，旁邊是裝滿貨箱的農場貨車",
    "風車在牛舍上方轉動，三頭乳牛等著吃飼料",
    "一排排成熟的小麥和嫩綠的玉米",
    "農場商店的農夫通行證：所有獎勵免看影片，一次購買",
    "農場商店的金幣包，從 400 金幣的小袋到 3,600 金幣的寶箱",
  ]),
  trust: {
    title: "農活之間沒有廣告",
    body: "Haystack Hollow 不顯示全螢幕廣告。加速工作、訂單加倍、現金堆加倍或每日禮物加倍的影片只在你點按時播放。一次性的農夫通行證可永久免看影片領取所有獎勵，所有金幣也都能靠遊玩賺到。",
  },
  faqs: [
    { q: `在 ${NAME} 裡做什麼？`, a: "走過成熟的作物來收成，把它們送到飼料廠、麵包坊或動物那裡，在訂單板交貨，撿起現金堆，再站上發光地塊解鎖更多內容。" },
    { q: "可以照自己的想法建造小鎮嗎？", a: "可以。切換到建造模式即可購買、擺放和移動建築，之後再切回步行。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const harvestTown: AppContent = {
  slug: "harvest-town",
  category: "game",
  icon: `${IMG}/icon.webp`,
  ogImage: "/apps/harvest-town/og.png",
  buildNumber: 15,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
