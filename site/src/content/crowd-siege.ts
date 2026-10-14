// Crowd Siege (games3d/apps/crowd-siege, bundle id com.appfactory.crowdSiege)
// — its own site (components/sites/crowd-siege), shared games3d
// privacy/terms/FAQ copy (./games3d-common.ts). Unreleased: status
// "building", no store links. Claims are limited to the rebuilt game's
// confirmed facts (README + fastlane listing, 2026-10-05): a 50-battle
// evolution campaign in six ages from the Primordial Pool to the Age of Sail
// & Powder, a boss closing each age, then an endless frontier; 6 heroes; a
// Forge; a Codex of 50 real history cards (components/sites/crowd-siege/
// codex.ts); a daily challenge and Last Stand. The enemy, the Crimson line,
// is fictional. The pictures are the game's own icon, hero portraits, a
// battle render and its shop (public/apps/crowd-siege/). The display names
// live in the constants below, so a rename is a one-line change.

import type { AppContent, AppLocalized, Screenshot } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Short display name. */
const NAME = "Crowd Siege";
/** Full store listing name. */
const STORE_NAME = "Crowd Siege";

const names = { name: NAME, interstitials: true };

const IMG = "/apps/crowd-siege";
/** The landing looks pictures up by src; keep the order and srcs aligned across locales. */
const shots = (alts: string[]): Screenshot[] =>
  ["battle", "shop", "icon"].map((n, i) => ({ src: `${IMG}/${n}.webp`, alt: alts[i] }));

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Fifty battles, from a single cell to cannon fire.",
  subtitle: "Evolve Crowds, Break Armies",
  oneLiner:
    "A 3D crowd battle game: fire soldiers through multiplier gates and break the enemy army, across a 50-battle campaign from the Primordial Pool to the Age of Sail & Powder.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: "Crowd Siege — 3D Crowd Battle Game, From Cells to Cannons",
  metaDescription:
    "A 3D crowd battle game: fire soldiers through multiplier gates and break armies in 50 battles, from the Primordial Pool to the Age of Sail & Powder.",
  features: [
    {
      title: "Multiplier gates",
      body: "Hold to fire, drag to aim: x2 to x5 gates clone every soldier who passes, and add gates bring recruits.",
    },
    {
      title: "Six heroes",
      body: "One joins free before battle 6, each age's boss brings the next, or Medals recruit them early.",
    },
    {
      title: "The Forge",
      body: "Spend Gold on your launcher, wall, hero charge and drill; each new age raises the highest rank.",
    },
    {
      title: "The Codex",
      body: "Fifty short history cards, one for every battle you win, and a relic for every boss.",
    },
    {
      title: "Daily challenge",
      body: "One battle with a twist, new every day, from battle 8.",
    },
    {
      title: "Last Stand",
      body: "Hold your wall against wave after wave for as long as you can, from battle 12.",
    },
  ],
  screenshots: shots([
    "A Crowd Siege battle: a blue army of 1,200 pours through a x3 gate up a stone road toward an enemy castle and a red army of 600",
    "The Crowd Siege shop: a starter pack of 3,000 Gold and 60 Medals, Gold pouches and Medal packs",
    "The Crowd Siege icon: a blue crowd storms a castle with red towers through x2 gates",
  ]),
  trust: {
    title: "Ads wait for the win",
    body: "A full-screen ad can appear only after you win a campaign battle: never during one, and never after a daily challenge or Last Stand. Boosts, double Gold, revives and other videos play only when you tap. A one-time Remove Ads purchase turns the between-battle ads off for good, and every hero, upgrade and age can be earned by playing.",
  },
  faqs: [
    {
      q: "How does a battle play?",
      a: "Hold anywhere to fire and drag to slide the launcher. Multiplier gates clone your soldiers, add gates bring recruits, and your crowd has to break the enemy stronghold before it breaks your wall. A battle takes about a minute.",
    },
    {
      q: "Is the history real?",
      a: "Yes. Each Codex card states one fact about the age its battle is fought in. The enemy you fight in every age, the Crimson line, is made up.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "五十场战斗，从一个细胞打到火炮齐鸣。",
  subtitle: "进化人海，攻破敌军",
  oneLiner:
    "一款 3D 人海对战游戏：让士兵穿过倍增闸门、击溃敌军，50 场进化战役从原始之池一路打到风帆与火药时代。",
  statusNote: "开发中，即将登陆 App Store。",
  metaTitle: "Crowd Siege｜3D 人海对战游戏，从细胞进化到火炮时代",
  metaDescription:
    "Crowd Siege 是一款 3D 人海对战游戏：让士兵穿过倍增闸门、击溃敌军。50 场进化战役从原始之池打到风帆与火药时代，还有 6 位英雄、锻造炉和每日挑战。",
  features: [
    { title: "倍增闸门", body: "按住发射、拖动瞄准：x2 到 x5 的闸门会复制每个穿过的士兵，加号闸门带来新兵。" },
    { title: "六位英雄", body: "第一位在第 6 场前免费加入，每个时代的首领会带来下一位，也可以用勋章提前招募。" },
    { title: "锻造炉", body: "用金币升级发射器、城墙、英雄冲锋和钻头；每进入新时代，等级上限都会提高。" },
    { title: "图鉴", body: "50 张简短的历史卡片，每赢一场得一张，每击败一位首领得一件遗物。" },
    { title: "每日挑战", body: "每天一场带有变化的战斗，第 8 场后开放。" },
    { title: "最后防线", body: "抵挡一波又一波的敌人，坚守城墙越久越好，第 12 场后开放。" },
  ],
  screenshots: shots([
    "Crowd Siege 战斗画面：1,200 人的蓝色大军穿过 x3 闸门，沿石路冲向敌方城堡和 600 人的红色军队",
    "Crowd Siege 商店：3,000 金币加 60 枚勋章的新手礼包、金币袋和勋章包",
    "Crowd Siege 图标：蓝色人潮穿过 x2 闸门，冲向红色塔楼的城堡",
  ]),
  trust: {
    title: "广告等你赢了再说",
    body: "全屏广告只会在你赢下一场战役战斗后出现：绝不在战斗中出现，每日挑战和最后防线结束后也不会出现。加成、双倍金币、复活等视频只在你点按时播放。一次性「去除广告」内购可永久关闭战斗间广告，所有英雄、升级和时代都能靠游玩获得。",
  },
  faqs: [
    { q: "一场战斗怎么玩？", a: "按住任意位置发射，拖动来移动发射器。倍增闸门复制士兵，加号闸门带来新兵，你的人海要在敌人攻破城墙之前攻破对方据点。一场战斗大约一分钟。" },
    { q: "里面的历史是真的吗？", a: "是的。每张图鉴卡讲述该场战斗所处时代的一个事实。每个时代的敌人「赤红军团」则是虚构的。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "五十場戰鬥，從一個細胞打到火砲齊鳴。",
  subtitle: "進化人海，攻破敵軍",
  oneLiner:
    "一款 3D 人海對戰遊戲：讓士兵穿過倍增閘門、擊潰敵軍，50 場進化戰役從原始之池一路打到風帆與火藥時代。",
  statusNote: "開發中，即將登陸 App Store。",
  metaTitle: "Crowd Siege｜3D 人海對戰遊戲，從細胞進化到火砲時代",
  metaDescription:
    "Crowd Siege 是一款 3D 人海對戰遊戲：讓士兵穿過倍增閘門、擊潰敵軍。50 場進化戰役從原始之池打到風帆與火藥時代，還有 6 位英雄、鍛造爐和每日挑戰。",
  features: [
    { title: "倍增閘門", body: "按住發射、拖曳瞄準：x2 到 x5 的閘門會複製每個穿過的士兵，加號閘門帶來新兵。" },
    { title: "六位英雄", body: "第一位在第 6 場前免費加入，每個時代的首領會帶來下一位，也可以用勳章提前招募。" },
    { title: "鍛造爐", body: "用金幣升級發射器、城牆、英雄衝鋒和鑽頭；每進入新時代，等級上限都會提高。" },
    { title: "圖鑑", body: "50 張簡短的歷史卡片，每贏一場得一張，每擊敗一位首領得一件遺物。" },
    { title: "每日挑戰", body: "每天一場帶有變化的戰鬥，第 8 場後開放。" },
    { title: "最後防線", body: "抵擋一波又一波的敵人，堅守城牆越久越好，第 12 場後開放。" },
  ],
  screenshots: shots([
    "Crowd Siege 戰鬥畫面：1,200 人的藍色大軍穿過 x3 閘門，沿石路衝向敵方城堡和 600 人的紅色軍隊",
    "Crowd Siege 商店：3,000 金幣加 60 枚勳章的新手禮包、金幣袋和勳章包",
    "Crowd Siege 圖示：藍色人潮穿過 x2 閘門，衝向紅色塔樓的城堡",
  ]),
  trust: {
    title: "廣告等你贏了再說",
    body: "全螢幕廣告只會在你贏下一場戰役戰鬥後出現：絕不在戰鬥中出現，每日挑戰和最後防線結束後也不會出現。加成、雙倍金幣、復活等影片只在你點按時播放。一次性「移除廣告」內購可永久關閉戰鬥間廣告，所有英雄、升級和時代都能靠遊玩取得。",
  },
  faqs: [
    { q: "一場戰鬥怎麼玩？", a: "按住任意位置發射，拖曳來移動發射器。倍增閘門複製士兵，加號閘門帶來新兵，你的人海要在敵人攻破城牆之前攻破對方據點。一場戰鬥大約一分鐘。" },
    { q: "裡面的歷史是真的嗎？", a: "是的。每張圖鑑卡講述該場戰鬥所處時代的一個事實。每個時代的敵人「赤紅軍團」則是虛構的。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const crowdSiege: AppContent = {
  slug: "crowd-siege",
  category: "game",
  icon: `${IMG}/icon.webp`,
  ogImage: "/apps/crowd-siege/og.png",
  buildNumber: 14,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
