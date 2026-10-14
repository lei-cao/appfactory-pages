// Landing-page words for the Glossy Blocks site that aren't app facts (those
// live in src/content/glossy-blocks.ts): section headings, the live tray's
// labels, captions. Every fact here follows the live App Store listing.

import type { Locale } from "@/lib/i18n";

export interface SlideJamCopy {
  nav: { how: string; twists: string; rules: string; workshop: string; faq: string };
  hero: { cta: string; trayLabel: string };
  tray: {
    moves: string;
    par: string;
    left: string;
    undo: string;
    free: string;
    reset: string;
    hint: string;
    /** {n} = moves used */
    won: string;
    stars3: string;
    starsLess: string;
    names: Record<string, string>;
    /** {name} block; read by screen readers on each block */
    blockLabel: string;
  };
  how: { title: string; steps: [string, string, string, string]; trayLabels: [string, string, string, string]; cleared: string };
  twists: { title: string; items: { key: string; name: string; text: string }[] };
  rules: {
    title: string;
    boosters: { name: string; text: string };
    symbols: { name: string; text: string };
    alts: Record<"goal" | "undo" | "bomb" | "key" | "shapes" | "boosters", string>;
  };
  workshop: { title: string; text: string; rooms: { key: string; name: string; alt: string }[] };
  pace: { question: string; label: string; unit: string; working: string };
  faq: { title: string };
  credits: { title: string; intro: string; music: string; sfx: string; tracks: string };
  footer: { cta: string; legal: string; contact: string };
}

const en: SlideJamCopy = {
  nav: { how: "How it plays", twists: "Twists", rules: "Fair rules", workshop: "Workshop", faq: "Questions" },
  hero: {
    cta: "Get it on the App Store",
    trayLabel: "A playable Glossy Blocks tray with six blocks",
  },
  tray: {
    moves: "Moves",
    par: "3 stars in",
    left: "Blocks left",
    undo: "Undo",
    free: "Free",
    reset: "Start over",
    hint: "Drag a block out through the arch of its colour. Arrow keys work too.",
    won: "Tray clear in {n} moves.",
    stars3: "Three stars. The game has 600 more levels.",
    starsLess: "Cleared. Six moves earns three stars: try again?",
    names: { pink: "Pink", sky: "Sky blue", yellow: "Yellow", red: "Red", mint: "Mint", navy: "Navy" },
    blockLabel: "{name} block",
  },
  how: {
    title: "How it plays",
    steps: [
      "First, find a block that can leave.",
      "Drag it out through its colour.",
      "Wrong move? Undo is free.",
      "Clear it in par for three stars.",
    ],
    trayLabels: [
      "A full tray: six blocks and their arches",
      "The navy and red blocks have left the tray",
      "Two blocks left on the tray",
      "An empty tray, cleared in six moves",
    ],
    cleared: "6 moves",
  },
  twists: {
    title: "Twists as you go",
    items: [
      { key: "hook", name: "Every block has an arch", text: "Drag a block into the arch of its colour and it's out. Clear every block to win; combos stack up as you go." },
      { key: "twists", name: "Keys and padlocks", text: "Pick up the key to open a padlocked arch. Colour-changing arches switch colour after each block." },
      { key: "bombs", name: "Bomb countdowns", text: "A bomb shows how many moves you have to get it out. Layered blocks leave one colour at a time." },
      { key: "bigboard", name: "Super Hard boards", text: "Hard and Super Hard levels close every chapter, with ice, pegs and big five-cell shapes." },
      { key: "rush", name: "Rush levels", text: "A few Rush levels race a real countdown clock. Regular levels have no clock at all." },
      { key: "daily", name: "Three dailies", text: "Three new puzzles every day, Easy, Medium and Hard, from level 9. Endless mode opens at level 30." },
    ],
  },
  rules: {
    title: "Rules that play fair",
    boosters: { name: "Three boosters", text: "Hint shows the best next move; Hammer and Shrink clear the way." },
    symbols: { name: "A symbol for every colour", text: "Plus a colour-blind pattern option." },
    alts: {
      goal: "Close-up of a level goal card: “Clear in 22 moves, three stars in 18”",
      undo: "Close-up of the free Undo button with “2 free” above it, beside the Shrink booster",
      bomb: "Close-up of a bomb showing 15 moves left on a navy block",
      key: "Close-up of a padlocked green arch and a key on a pink block",
      shapes: "Close-up of a yellow arch on the tray rim above orange, pink and navy shapes",
      boosters: "Close-up of the Hint and Hammer boosters on the wooden booster bar",
    },
  },
  workshop: {
    title: "Stars fix up the workshop",
    text: "The stars you earn renovate the Toy Workshop, room by room. These are the five rooms, finished.",
    rooms: [
      { key: "paint", name: "Paint Bench", alt: "The finished Paint Bench: a painted workbench, a toy robot, brushes and a splashy rug" },
      { key: "wood", name: "Wood Shop", alt: "The finished Wood Shop: a pegboard of tools, a wooden train and a rainbow rag rug" },
      { key: "train", name: "Train Set", alt: "The finished Train Set: a toy railway on a wooden table by a sunny window" },
      { key: "doll", name: "Doll House", alt: "The finished Doll House: a pink dolls' house, balloons and a rocking horse" },
      { key: "robot", name: "Robot Lab", alt: "The finished Robot Lab: friendly toy robots, a robot dog and building blocks" },
    ],
  },
  pace: {
    question: "How many levels a day?",
    label: "Levels a day",
    unit: "days",
    working: "600 levels across 30 chapters plus the 120-level Master track, divided by your levels a day. The three daily puzzles come on top.",
  },
  faq: { title: "Questions" },
  credits: {
    title: "Music and sound credits",
    intro: "The music and sound effects in this game come from these sources, used under their licences.",
    music: "Music",
    sfx: "Sound effects",
    tracks: "Tracks",
  },
  footer: { cta: "Get it on the App Store", legal: "Glossy Blocks is made by App Factory in Singapore.", contact: "Write to us" },
};

const zhCn: SlideJamCopy = {
  nav: { how: "玩法", twists: "花样", rules: "公平规则", workshop: "工坊", faq: "常见问题" },
  hero: {
    cta: "前往 App Store 下载",
    trayLabel: "可以试玩的 Glossy Blocks 托盘，共六块积木",
  },
  tray: {
    moves: "步数",
    par: "三星步数",
    left: "剩余积木",
    undo: "撤销",
    free: "免费",
    reset: "重新开始",
    hint: "把积木拖出同色的拱门。也可以用方向键。",
    won: "托盘清空，用了 {n} 步。",
    stars3: "三星！游戏里还有 600 关等你。",
    starsLess: "过关了。六步内可拿三星，再试一次？",
    names: { pink: "粉色", sky: "天蓝色", yellow: "黄色", red: "红色", mint: "薄荷绿", navy: "藏青色" },
    blockLabel: "{name}积木",
  },
  how: {
    title: "怎么玩",
    steps: ["先找一块能出去的积木。", "把它拖出同色的拱门。", "走错了？撤销免费。", "标准步数内清空，拿三星。"],
    trayLabels: ["满满的托盘：六块积木和它们的拱门", "藏青色和红色积木已经离开托盘", "托盘上还剩两块积木", "空托盘，六步清空"],
    cleared: "6 步",
  },
  twists: {
    title: "越玩越有花样",
    items: [
      { key: "hook", name: "每块积木都有拱门", text: "把积木拖进同色拱门，它就出去了。清空所有积木即过关，连击会越叠越高。" },
      { key: "twists", name: "钥匙和挂锁", text: "拿到钥匙才能打开挂锁拱门。变色拱门每过一块积木就换一种颜色。" },
      { key: "bombs", name: "倒数的炸弹", text: "炸弹显示把它送出去的剩余步数。分层积木一次只留下一层颜色。" },
      { key: "bigboard", name: "超难棋盘", text: "每个章节末尾都有困难和超难关卡，还有冰块、钉子和五格大积木。" },
      { key: "rush", name: "冲刺关卡", text: "少数冲刺关卡有真正的倒计时。普通关卡完全不计时。" },
      { key: "daily", name: "每日三题", text: "每天三道新谜题：简单、中等、困难，第 9 关解锁。第 30 关开启无尽模式。" },
    ],
  },
  rules: {
    title: "规则很公平",
    boosters: { name: "三种道具", text: "提示给出最佳下一步；锤子和缩小帮你开路。" },
    symbols: { name: "每种颜色都有符号", text: "另有色弱图案选项。" },
    alts: {
      goal: "关卡目标卡片特写：「22 步内通关，18 步三星」",
      undo: "免费撤销按钮特写，上方标着「2 次免费」，旁边是缩小道具",
      bomb: "藏青色积木上炸弹特写，显示剩余 15 步",
      key: "挂锁绿色拱门和粉色积木上钥匙的特写",
      shapes: "托盘边缘黄色拱门特写，下方是橙色、粉色和藏青色积木",
      boosters: "木质道具栏上提示和锤子道具的特写",
    },
  },
  workshop: {
    title: "星星修好玩具工坊",
    text: "你赚到的星星会一间间翻新玩具工坊。下面是五个房间完工后的样子。",
    rooms: [
      { key: "paint", name: "涂色台", alt: "完工的涂色台：彩绘工作台、玩具机器人、画笔和彩色地毯" },
      { key: "wood", name: "木工坊", alt: "完工的木工坊：挂满工具的洞洞板、木头小火车和彩虹地毯" },
      { key: "train", name: "火车组", alt: "完工的火车组：阳光窗边木桌上的玩具铁路" },
      { key: "doll", name: "娃娃屋", alt: "完工的娃娃屋：粉色娃娃屋、气球和摇摇马" },
      { key: "robot", name: "机器人实验室", alt: "完工的机器人实验室：友善的玩具机器人、机器狗和积木" },
    ],
  },
  pace: {
    question: "每天玩几关？",
    label: "每天关数",
    unit: "天",
    working: "30 个章节共 600 关，加上 120 关大师轨道，除以你每天玩的关数。每日三题不计在内。",
  },
  faq: { title: "常见问题" },
  credits: {
    title: "音乐与音效致谢",
    intro: "本游戏的音乐与音效来自以下来源，并按其许可使用。",
    music: "音乐",
    sfx: "音效",
    tracks: "曲目",
  },
  footer: { cta: "前往 App Store 下载", legal: "Glossy Blocks 由新加坡的 App Factory 制作。", contact: "写信给我们" },
};

const zhTw: SlideJamCopy = {
  nav: { how: "玩法", twists: "花樣", rules: "公平規則", workshop: "工坊", faq: "常見問題" },
  hero: {
    cta: "前往 App Store 下載",
    trayLabel: "可以試玩的 Glossy Blocks 托盤，共六塊積木",
  },
  tray: {
    moves: "步數",
    par: "三星步數",
    left: "剩餘積木",
    undo: "復原",
    free: "免費",
    reset: "重新開始",
    hint: "把積木拖出同色的拱門。也可以用方向鍵。",
    won: "托盤清空，用了 {n} 步。",
    stars3: "三星！遊戲裡還有 600 關等你。",
    starsLess: "過關了。六步內可拿三星，再試一次？",
    names: { pink: "粉紅", sky: "天藍", yellow: "黃色", red: "紅色", mint: "薄荷綠", navy: "深藍" },
    blockLabel: "{name}積木",
  },
  how: {
    title: "怎麼玩",
    steps: ["先找一塊能出去的積木。", "把它拖出同色的拱門。", "走錯了？復原免費。", "標準步數內清空，拿三星。"],
    trayLabels: ["滿滿的托盤：六塊積木和它們的拱門", "深藍和紅色積木已經離開托盤", "托盤上還剩兩塊積木", "空托盤，六步清空"],
    cleared: "6 步",
  },
  twists: {
    title: "越玩越有花樣",
    items: [
      { key: "hook", name: "每塊積木都有拱門", text: "把積木拖進同色拱門，它就出去了。清空所有積木即過關，連擊會越疊越高。" },
      { key: "twists", name: "鑰匙和掛鎖", text: "拿到鑰匙才能打開掛鎖拱門。變色拱門每過一塊積木就換一種顏色。" },
      { key: "bombs", name: "倒數的炸彈", text: "炸彈顯示把它送出去的剩餘步數。分層積木一次只留下一層顏色。" },
      { key: "bigboard", name: "超難棋盤", text: "每個章節結尾都有困難和超難關卡，還有冰塊、釘子和五格大積木。" },
      { key: "rush", name: "衝刺關卡", text: "少數衝刺關卡有真正的倒數計時。一般關卡完全不計時。" },
      { key: "daily", name: "每日三題", text: "每天三道新謎題：簡單、中等、困難，第 9 關解鎖。第 30 關開啟無盡模式。" },
    ],
  },
  rules: {
    title: "規則很公平",
    boosters: { name: "三種道具", text: "提示給出最佳下一步；錘子和縮小幫你開路。" },
    symbols: { name: "每種顏色都有符號", text: "另有色弱圖案選項。" },
    alts: {
      goal: "關卡目標卡片特寫：「22 步內過關，18 步三星」",
      undo: "免費復原按鈕特寫，上方標著「2 次免費」，旁邊是縮小道具",
      bomb: "深藍積木上炸彈特寫，顯示剩餘 15 步",
      key: "掛鎖綠色拱門和粉紅積木上鑰匙的特寫",
      shapes: "托盤邊緣黃色拱門特寫，下方是橘色、粉紅和深藍積木",
      boosters: "木質道具欄上提示和錘子道具的特寫",
    },
  },
  workshop: {
    title: "星星修好玩具工坊",
    text: "你賺到的星星會一間間翻新玩具工坊。下面是五個房間完工後的樣子。",
    rooms: [
      { key: "paint", name: "塗色台", alt: "完工的塗色台：彩繪工作台、玩具機器人、畫筆和彩色地毯" },
      { key: "wood", name: "木工坊", alt: "完工的木工坊：掛滿工具的洞洞板、木頭小火車和彩虹地毯" },
      { key: "train", name: "火車組", alt: "完工的火車組：陽光窗邊木桌上的玩具鐵路" },
      { key: "doll", name: "娃娃屋", alt: "完工的娃娃屋：粉紅娃娃屋、氣球和搖搖馬" },
      { key: "robot", name: "機器人實驗室", alt: "完工的機器人實驗室：友善的玩具機器人、機器狗和積木" },
    ],
  },
  pace: {
    question: "每天玩幾關？",
    label: "每天關數",
    unit: "天",
    working: "30 個章節共 600 關，加上 120 關大師軌道，除以你每天玩的關數。每日三題不算在內。",
  },
  faq: { title: "常見問題" },
  credits: {
    title: "音樂與音效致謝",
    intro: "本遊戲的音樂與音效來自以下來源，並依其授權使用。",
    music: "音樂",
    sfx: "音效",
    tracks: "曲目",
  },
  footer: { cta: "前往 App Store 下載", legal: "Glossy Blocks 由新加坡的 App Factory 製作。", contact: "寫信給我們" },
};

export const COPY: Record<Locale, SlideJamCopy> = { en, "zh-cn": zhCn, "zh-tw": zhTw };

export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
