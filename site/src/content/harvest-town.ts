// Harvest Town (games3d/apps/harvest-town, bundle id com.appfactory.harvestTown)
// — generic landing template, shared games3d privacy/terms/FAQ copy
// (./games3d-common.ts). Unreleased: status "building", no store links, no
// screenshots/icon yet. The final store name is undecided: the display names
// live in the constants below, so a rename is a one-line change. v1 shows no
// full-screen ads (reward videos only); set interstitials: true below if that
// changes.

import type { AppContent, AppLocalized } from "./apps";
import {
  GAMES3D_CONTACT,
  games3dCredits,
  legalFor,
  sharedFaqs,
} from "./games3d-common";

/** Short display name. */
const NAME = "Harvest Town";
/** Full store listing name (not final). */
const STORE_NAME = "Harvest Town";

const names = { name: NAME, interstitials: false };

const en: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "Plant. Produce. Grow the town.",
  subtitle: "A Cozy 3D Farm Town Builder",
  oneLiner:
    "A cozy 3D farm town builder: plant crops, run factories, fill orders and grow a small farm into a busy town.",
  statusNote: "In development. Coming to the App Store.",
  metaTitle: `${STORE_NAME} — a cozy 3D farm town builder`,
  metaDescription: `${STORE_NAME} is a cozy 3D farm town builder: plant and harvest crops, run factories, fill orders and grow your town.`,
  features: [
    {
      title: "Plant and harvest",
      body: "Grow crops in your fields and bring in the harvest when they ripen.",
    },
    {
      title: "Run factories",
      body: "Turn crops into goods in your factories and keep the production chain moving.",
    },
    {
      title: "Fill orders",
      body: "Deliver goods to the order board for coins, and use what you earn to keep expanding.",
    },
    {
      title: "Grow the town",
      body: "Unlock new fields and buildings, and watch a small farm become a busy town.",
    },
  ],
  screenshots: [],
  trust: {
    title: "Honest about ads",
    body: "Reward videos are always optional and start only when you tap a button. The game does not interrupt play with full-screen ads.",
  },
  faqs: [
    {
      q: `What do I do in ${NAME}?`,
      a: "You plant crops, run factories that turn them into goods, fill orders for coins, and use the earnings to unlock fields and buildings.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "种植，生产，建设小镇。",
  subtitle: "温馨的 3D 农场小镇建造游戏",
  oneLiner:
    "一款温馨的 3D 农场小镇建造游戏：种植作物、经营工厂、完成订单，把小小的农场发展成热闹的小镇。",
  statusNote: "开发中，即将登陆 App Store。",
  features: [
    { title: "种植与收获", body: "在田里种下作物，成熟后收获。" },
    { title: "经营工厂", body: "用工厂把作物加工成商品，让生产链运转起来。" },
    { title: "完成订单", body: "把商品送到订单板换取金币，再用赚到的钱继续扩张。" },
    { title: "发展小镇", body: "解锁新的田地和建筑，看着小农场变成热闹的小镇。" },
  ],
  screenshots: [],
  trust: {
    title: "对广告坦诚",
    body: "奖励视频始终可选，只有你点按按钮才会开始。游戏不会用全屏广告打断游玩。",
  },
  faqs: [
    { q: `在 ${NAME} 里做什么？`, a: "你可以种植作物、经营把作物变成商品的工厂、完成订单赚取金币，并用收入解锁田地和建筑。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: NAME,
  storeName: STORE_NAME,
  tagline: "種植，生產，建設小鎮。",
  subtitle: "溫馨的 3D 農場小鎮建造遊戲",
  oneLiner:
    "一款溫馨的 3D 農場小鎮建造遊戲：種植作物、經營工廠、完成訂單，把小小的農場發展成熱鬧的小鎮。",
  statusNote: "開發中，即將登陸 App Store。",
  features: [
    { title: "種植與收穫", body: "在田裡種下作物，成熟後收穫。" },
    { title: "經營工廠", body: "用工廠把作物加工成商品，讓生產鏈運轉起來。" },
    { title: "完成訂單", body: "把商品送到訂單板換取金幣，再用賺到的錢繼續擴張。" },
    { title: "發展小鎮", body: "解鎖新的田地和建築，看著小農場變成熱鬧的小鎮。" },
  ],
  screenshots: [],
  trust: {
    title: "對廣告坦誠",
    body: "獎勵影片始終可選，只有你點按按鈕才會開始。遊戲不會用全螢幕廣告打斷遊玩。",
  },
  faqs: [
    { q: `在 ${NAME} 裡做什麼？`, a: "你可以種植作物、經營把作物變成商品的工廠、完成訂單賺取金幣，並用收入解鎖田地和建築。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const harvestTown: AppContent = {
  slug: "harvest-town",
  buildNumber: 15,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  contactEmail: GAMES3D_CONTACT,
  credits: games3dCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
