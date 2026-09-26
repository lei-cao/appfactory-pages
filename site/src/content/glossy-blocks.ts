// Glossy Blocks (apps/slide-jam) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). Unreleased:
// flip status + appStoreUrl/playStoreUrl when the store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Glossy Blocks", pass: "Premium pass" };
const shot = (f: string) => `/apps/slide-jam/${f}`;

const en: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "Slide. Undo. Smile.",
  subtitle: "Color Door Puzzle, No Timers",
  oneLiner:
    "Drag glossy toy blocks out through the doors of their colour. Undo is free and unlimited, and there's no timer on any board.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Glossy Blocks: Toy Slide — a colour-door sliding puzzle with free undo",
  metaDescription:
    "Glossy Blocks is a calm sliding-block puzzle: drag toy blocks through matching colour doors, 240 levels each checked for a solution, free unlimited undo and no timer on any board.",
  features: [
    {
      title: "Undo is free. Always.",
      body: "The Undo button sits under every board, costs nothing and never runs out. Try an idea, take it back, try another.",
    },
    {
      title: "No clock on any board",
      body: "Most levels let you use as many moves as you like — beat par for 3 stars. A few marked hard levels have a move limit; run out and you can add moves or retry.",
    },
    {
      title: "Shapes that must fit",
      body: "Long bars and chunky L, T and S shapes only pass a door as wide as their side. Arrow blocks slide just one way.",
    },
    {
      title: "Layered blocks",
      body: "A layered block leaves its outer colour at a matching door, then shows the next colour underneath — so you read the whole board, not just the nearest door.",
    },
    {
      title: "240 checked levels",
      body: "Twelve chapters from Building Blocks to Midnight Parade. Every level is checked by our solver to have a solution before it ships.",
    },
    {
      title: "A toy workshop to fix up",
      body: "Stars fix up the Toy Workshop room by room: the Paint Bench, Wood Shop, Train Set, Doll House and Robot Lab.",
    },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "A Glossy Blocks board: glossy toy blocks next to matching colour doors, with the free Undo button below" },
    { src: shot("shot-door.png"), alt: "A block squeezing out through a door of its colour" },
    { src: shot("shot-workshop.png"), alt: "The Toy Workshop renovation card" },
    { src: shot("shot-map.png"), alt: "The chapter map with level nodes" },
  ],
  trust: {
    title: "Honest about ads",
    body: "Full-screen ads only after a win — never during a level, never before your 9th completed level, at most once every three wins. The banner lives on the home and map screens only, and reward videos are always optional. A one-time Remove Ads purchase turns the banner and full-screen ads off for good.",
  },
  faqs: [
    {
      q: "Is undo really free?",
      a: "Yes. Undo is not a booster: it's a button under every board, free and unlimited, and it gives the move back on move-limited levels too.",
    },
    {
      q: "Are there timers?",
      a: "No level has a timer. Most levels have no move limit either; the few marked hard levels do, and you can add 5 moves or retry if you run out.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "滑一滑，撤一步，笑一笑。",
  subtitle: "颜色门滑块解谜，没有倒计时",
  oneLiner: "把光亮的玩具积木拖过同色的门。撤销免费且无限次，所有关卡都没有倒计时。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "撤销永远免费", body: "每个棋盘下方都有撤销按钮，不花钱、不限次。试一个想法，收回来，再试一个。" },
    { title: "没有任何倒计时", body: "大多数关卡步数不限——达到标准步数即可三星。少数标注的困难关卡有步数上限，用完可以加步或重来。" },
    { title: "形状必须合得上", body: "长条和 L、T、S 形积木只能穿过与其边等宽的门。箭头积木只能朝一个方向滑。" },
    { title: "多层积木", body: "多层积木在同色门留下外层颜色，再露出下一层颜色——要读懂整个棋盘，而不只是最近的门。" },
    { title: "240 个经过验证的关卡", body: "十二个章节。每一关上线前都经过求解器验证，确保有解。" },
    { title: "修好玩具工坊", body: "星星让玩具工坊一间间焕新：油漆台、木工房、火车模型、娃娃屋和机器人实验室。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Glossy Blocks 棋盘：光亮的玩具积木与同色门，下方是免费撤销按钮" },
    { src: shot("shot-door.png"), alt: "一块积木穿过同色的门" },
    { src: shot("shot-workshop.png"), alt: "玩具工坊修复卡片" },
    { src: shot("shot-map.png"), alt: "章节地图与关卡节点" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "撤销真的免费吗？", a: "是的。撤销不是道具，而是每个棋盘下方的按钮，免费不限次；在有步数上限的关卡中也会返还步数。" },
    { q: "有倒计时吗？", a: "所有关卡都没有倒计时。大多数关卡也不限步数；少数困难关卡有上限，用完可加 5 步或重来。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "滑一滑，退一步，笑一笑。",
  subtitle: "顏色門滑塊解謎，沒有倒數計時",
  oneLiner: "把光亮的玩具積木拖過同色的門。復原免費且無限次，所有關卡都沒有倒數計時。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "復原永遠免費", body: "每個棋盤下方都有復原按鈕，不花錢、不限次。試一個想法，收回來，再試一個。" },
    { title: "沒有任何倒數計時", body: "大多數關卡步數不限——達到標準步數即可三星。少數標示的困難關卡有步數上限，用完可以加步或重來。" },
    { title: "形狀必須合得上", body: "長條和 L、T、S 形積木只能穿過與其邊等寬的門。箭頭積木只能朝一個方向滑。" },
    { title: "多層積木", body: "多層積木在同色門留下外層顏色，再露出下一層顏色——要讀懂整個棋盤，而不只是最近的門。" },
    { title: "240 個經過驗證的關卡", body: "十二個章節。每一關上線前都經過求解器驗證，確保有解。" },
    { title: "修好玩具工坊", body: "星星讓玩具工坊一間間煥新：油漆台、木工房、火車模型、娃娃屋和機器人實驗室。" },
  ],
  screenshots: [
    { src: shot("shot-board.png"), alt: "Glossy Blocks 棋盤：光亮的玩具積木與同色門，下方是免費復原按鈕" },
    { src: shot("shot-door.png"), alt: "一塊積木穿過同色的門" },
    { src: shot("shot-workshop.png"), alt: "玩具工坊修復卡片" },
    { src: shot("shot-map.png"), alt: "章節地圖與關卡節點" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "復原真的免費嗎？", a: "是的。復原不是道具，而是每個棋盤下方的按鈕，免費不限次；在有步數上限的關卡中也會退回步數。" },
    { q: "有倒數計時嗎？", a: "所有關卡都沒有倒數計時。大多數關卡也不限步數；少數困難關卡有上限，用完可加 5 步或重來。" },
    ...sharedFaqs("zh-tw", names),
  ],
  ...legalFor("zh-tw", names),
};

export const glossyBlocks: AppContent = {
  slug: "slide-jam",
  buildNumber: 12,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS", "Android"],
  icon: "/apps/slide-jam/icon.png",
  contactEmail: PUZZLE_GAMES_CONTACT,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
