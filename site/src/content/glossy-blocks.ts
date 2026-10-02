// Glossy Blocks (apps/slide-jam) — generic landing template, shared
// puzzle-shell privacy/terms/FAQ copy (./puzzle-games-common.ts). v3 facts
// (600 levels + 120 Master, colour-cycling and capacity arches, bombs,
// five-cell shapes) follow the app's fastlane/metadata description +
// LISTING.md. Unreleased: flip status + appStoreUrl/playStoreUrl when the
// store approves it.

import type { AppContent, AppLocalized } from "./apps";
import { slideJamCredits } from "./puzzle-games-credits";
import { legalFor, PUZZLE_GAMES_CONTACT, sharedFaqs } from "./puzzle-games-common";

const names = { name: "Glossy Blocks", pass: "Premium pass" };
const shot = (f: string) => `/apps/slide-jam/${f}`;

const en: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "Slide. Undo. Smile.",
  subtitle: "Color Door Puzzle, 600 Levels",
  oneLiner:
    "Drag glossy toy blocks out through the doors of their colour. Undo is free, there are no time limits on regular levels, and 600 levels plus a 120-level Master track are checked solvable.",
  statusNote: "Coming soon to the App Store and Google Play.",
  metaTitle: "Glossy Blocks: Toy Slide — a colour-door sliding puzzle, 600 levels",
  metaDescription:
    "Glossy Blocks is a calm sliding-block puzzle: drag toy blocks through matching colour doors, 600 levels plus a 120-level Master track each checked for a solution, free undo and no time limits on regular levels.",
  features: [
    {
      title: "Undo is free. Always.",
      body: "The Undo button sits under every board and costs nothing. Use up to the shown number of undos and you can still earn 3 stars; use more and the level tops out at 2. Try an idea, take it back, try another.",
    },
    {
      title: "No time limits on regular levels",
      body: "Every level has a move limit, and the counter always shows how many moves you have left. Run out and you can buy extra moves (for coins, or an optional ad) or simply retry. Only a few Rush levels race a countdown.",
    },
    {
      title: "Shapes that must fit",
      body: "Long bars and chunky L, T and S shapes only pass a door as wide as their side, and big five-cell shapes are hard to park, so plan where they go. Arrow blocks slide just one way.",
    },
    {
      title: "Arches with a twist",
      body: "Colour-cycling arches take their colour, then switch to the next one, so choose who goes first. Rainbow arches with a capacity take any colour a couple of times, then close. Shrinking arches get narrower every time.",
    },
    {
      title: "Bombs and layered blocks",
      body: "A bomb's number is how many moves you have to get it out; at 0 the level is lost. Layered blocks leave their outer colour at a matching door, then show the next colour underneath.",
    },
    {
      title: "600 levels, plus Master",
      body: "Thirty chapters, then a 120-level Master track for experts, all fixing up a toy workshop room by room: the Paint Bench, Wood Shop, Train Set, Doll House and Robot Lab. Every level is solver-checked.",
    },
  ],
  screenshots: [
    { src: shot("shot-bomb.png"), alt: "A Glossy Blocks board with a bomb counting down its moves, a padlocked door and a key block, with the free Undo button below" },
    { src: shot("shot-cycle.png"), alt: "A board with a colour-cycling arch that switches to the next colour, next to L-shaped and square toy blocks" },
    { src: shot("shot-capacity.png"), alt: "A board with a rainbow arch marked x3 that accepts several blocks, beside orange, purple and green blocks" },
    { src: shot("shot-board.png"), alt: "A crowded late-game board of coloured bars and shapes around the edge of a wooden tray, with Hint, Hammer and Shrink boosters" },
  ],
  trust: {
    title: "Honest about ads",
    body: "Full-screen ads only after a win — never during a level, never before your 9th completed level, at most once every three wins. The banner lives on the home and map screens only, and reward videos are always optional. A one-time Remove Ads purchase turns the banner and full-screen ads off for good.",
  },
  faqs: [
    {
      q: "Is undo really free?",
      a: "Yes. Undo is not a booster: it's a button under every board that costs nothing. Use up to the shown number of undos and you can still earn 3 stars; use more and the level tops out at 2 stars.",
    },
    {
      q: "Are there timers?",
      a: "There are no time limits on regular levels. Every level has a move limit instead, shown in the counter; run out and you can add moves or retry. A par clock never fails a level, and a few Rush levels race a real countdown.",
    },
    {
      q: "What are the Master levels?",
      a: "A separate 120-level track for experts, on top of the 600 campaign levels.",
    },
    ...sharedFaqs("en", names),
  ],
  ...legalFor("en", names),
};

const zhCn: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "滑一滑，撤一步，笑一笑。",
  subtitle: "颜色门滑块解谜，600 个关卡",
  oneLiner: "把光亮的玩具积木拖过同色的门。撤销免费，普通关卡没有时间限制，600 个关卡外加 120 关大师轨道，全部经过验证有解。",
  statusNote: "即将登陆 App Store 和 Google Play。",
  features: [
    { title: "撤销永远免费", body: "撤销按钮在每个棋盘下方，不花一分钱。使用不超过所示次数的撤销仍可获得三星；超过后该关最高两星。试一个想法，撤回，再试另一个。" },
    { title: "普通关卡没有时间限制", body: "每关都有步数上限，计数器始终显示剩余步数。用完可以购买额外步数（用金币，或自愿看广告）或直接重来。只有少数「冲刺」关卡有倒计时。" },
    { title: "形状必须合得上", body: "长条和厚实的 L、T、S 形只能通过与其边同宽的门；大型五格形状很难停放，需要提前规划。箭头积木只能朝一个方向滑动。" },
    { title: "有花样的拱门", body: "变色拱门先接受自己的颜色，再切换到下一种，所以要选好谁先过。带容量的彩虹拱门可接受任意颜色几次，然后关闭。缩小拱门每通过一块就变窄。" },
    { title: "炸弹与分层积木", body: "炸弹上的数字是把它送出去的剩余步数，归零则关卡失败。分层积木在匹配的门前留下外层颜色，露出下一层颜色。" },
    { title: "600 关，外加大师轨道", body: "三十个章节，之后是 120 关的大师轨道，同时一间间修复玩具工坊：涂色台、木工坊、火车组、娃娃屋和机器人实验室。每一关都经过求解器验证。" },
  ],
  screenshots: [
    { src: shot("shot-bomb.png"), alt: "Glossy Blocks 棋盘：倒数步数的炸弹、挂锁门与钥匙积木，下方是免费撤销按钮" },
    { src: shot("shot-cycle.png"), alt: "带变色拱门的棋盘，旁边有 L 形和方形玩具积木" },
    { src: shot("shot-capacity.png"), alt: "带 ×3 标记的彩虹拱门，可接受多块积木" },
    { src: shot("shot-board.png"), alt: "后期关卡的密集棋盘：木托盘中的彩色长条与各种形状，下方是提示、锤子和缩小道具" },
  ],
  trust: {
    title: "对广告坦诚",
    body: "全屏广告只在通关后出现——绝不在关卡中，完成第 9 关前不会出现，最多每通关三次一次。横幅只在主页和地图页，奖励视频始终可选。一次性「去除广告」内购永久关闭横幅和全屏广告。",
  },
  faqs: [
    { q: "撤销真的免费吗？", a: "是的。撤销不是道具，而是每个棋盘下方的免费按钮。使用不超过所示次数的撤销仍可获得三星；超过后该关最高两星。" },
    { q: "有倒计时吗？", a: "普通关卡没有时间限制，取而代之的是每关的步数上限，计数器会显示；用完可以加步或重来。标准用时不会让关卡失败，少数「冲刺」关卡有真正的倒计时。" },
    { q: "大师关是什么？", a: "一条独立的 120 关专家轨道，位于 600 个主线关卡之外。" },
    ...sharedFaqs("zh-cn", names),
  ],
  ...legalFor("zh-cn", names),
};

const zhTw: AppLocalized = {
  name: "Glossy Blocks",
  storeName: "Glossy Blocks: Toy Slide",
  tagline: "滑一滑，復原一步，笑一笑。",
  subtitle: "顏色門滑塊解謎，600 個關卡",
  oneLiner: "把光亮的玩具積木拖過同色的門。復原免費，一般關卡沒有時間限制，600 個關卡外加 120 關大師軌道，全部經過驗證有解。",
  statusNote: "即將登陸 App Store 和 Google Play。",
  features: [
    { title: "復原永遠免費", body: "復原按鈕在每個棋盤下方，不花一分錢。使用不超過所示次數的復原仍可獲得三星；超過後該關最高兩星。試一個想法，復原，再試另一個。" },
    { title: "一般關卡沒有時間限制", body: "每關都有步數上限，計數器始終顯示剩餘步數。用完可以購買額外步數（用金幣，或自願看廣告）或直接重來。只有少數「衝刺」關卡有倒數計時。" },
    { title: "形狀必須合得上", body: "長條和厚實的 L、T、S 形只能通過與其邊同寬的門；大型五格形狀很難停放，需要提前規劃。箭頭積木只能朝一個方向滑動。" },
    { title: "有花樣的拱門", body: "變色拱門先接受自己的顏色，再切換到下一種，所以要選好誰先過。帶容量的彩虹拱門可接受任意顏色幾次，然後關閉。縮小拱門每通過一塊就變窄。" },
    { title: "炸彈與分層積木", body: "炸彈上的數字是把它送出去的剩餘步數，歸零則關卡失敗。分層積木在相符的門前留下外層顏色，露出下一層顏色。" },
    { title: "600 關，外加大師軌道", body: "三十個章節，之後是 120 關的大師軌道，同時一間間修復玩具工坊：塗色台、木工坊、火車組、娃娃屋和機器人實驗室。每一關都經過求解器驗證。" },
  ],
  screenshots: [
    { src: shot("shot-bomb.png"), alt: "Glossy Blocks 棋盤：倒數步數的炸彈、掛鎖門與鑰匙積木，下方是免費復原按鈕" },
    { src: shot("shot-cycle.png"), alt: "帶變色拱門的棋盤，旁邊有 L 形和方形玩具積木" },
    { src: shot("shot-capacity.png"), alt: "帶 ×3 標記的彩虹拱門，可接受多塊積木" },
    { src: shot("shot-board.png"), alt: "後期關卡的密集棋盤：木托盤中的彩色長條與各種形狀，下方是提示、錘子和縮小道具" },
  ],
  trust: {
    title: "對廣告坦誠",
    body: "全螢幕廣告只在過關後出現——絕不在關卡中，完成第 9 關前不會出現，最多每過關三次一次。橫幅只在主頁和地圖頁，獎勵影片始終可選。一次性「移除廣告」內購永久關閉橫幅和全螢幕廣告。",
  },
  faqs: [
    { q: "復原真的免費嗎？", a: "是的。復原不是道具，而是每個棋盤下方的免費按鈕。使用不超過所示次數的復原仍可獲得三星；超過後該關最高兩星。" },
    { q: "有倒數計時嗎？", a: "一般關卡沒有時間限制，取而代之的是每關的步數上限，計數器會顯示；用完可以加步或重來。標準用時不會讓關卡失敗，少數「衝刺」關卡有真正的倒數計時。" },
    { q: "大師關是什麼？", a: "一條獨立的 120 關專家軌道，位於 600 個主線關卡之外。" },
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
  credits: slideJamCredits,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
