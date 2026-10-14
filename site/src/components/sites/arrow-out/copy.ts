// Page copy for the Courtyard Arrows site (the words that are not store
// facts in src/content/courtyard-arrows.ts). Every number here is read from
// the game: level 9 is pack.json level 9, the renovation costs are
// MetaConfig.standardPuzzle areas, the board sizes are averages over
// assets/levels/pack.json + master.json (apps/arrow-out, v4, 2026-10-14).

import type { Locale } from "@/lib/i18n";

/** The five courtyard corners (kGardenAreas) and their renovation costs in stars. */
export const AREAS = [
  { id: "stone-path", costs: [5, 6, 7, 8, 9, 10] },
  { id: "koi-pond", costs: [11, 13, 15, 16, 17, 18] },
  { id: "bamboo-grove", costs: [20, 22, 24, 26, 28, 30] },
  { id: "tea-pavilion", costs: [24, 26, 28, 29, 31, 32] },
  { id: "moon-gate", costs: [26, 28, 30, 33, 35, 38] },
] as const;

export type AreaId = (typeof AREAS)[number]["id"];

/** Average arrows per board, fifty campaign levels at a time, then Master. */
export const BOARD_SIZES: { from: number; to: number; arrows: number; master?: boolean }[] = [
  { from: 1, to: 50, arrows: 21 },
  { from: 51, to: 100, arrows: 40 },
  { from: 101, to: 150, arrows: 52 },
  { from: 151, to: 200, arrows: 63 },
  { from: 201, to: 250, arrows: 71 },
  { from: 251, to: 300, arrows: 81 },
  { from: 301, to: 350, arrows: 88 },
  { from: 351, to: 400, arrows: 96 },
  { from: 401, to: 450, arrows: 90 },
  { from: 451, to: 500, arrows: 99 },
  { from: 501, to: 550, arrows: 98 },
  { from: 551, to: 600, arrows: 110 },
  { from: 1, to: 120, arrows: 124, master: true },
];

/** The same, a hundred levels at a time (the phone chart). */
export const BOARD_SIZES_PHONE: { from: number; to: number; arrows: number; master?: boolean }[] = [
  { from: 1, to: 100, arrows: 30 },
  { from: 101, to: 200, arrows: 57 },
  { from: 201, to: 300, arrows: 76 },
  { from: 301, to: 400, arrows: 92 },
  { from: 401, to: 500, arrows: 94 },
  { from: 501, to: 600, arrows: 104 },
  { from: 1, to: 120, arrows: 124, master: true },
];

export interface Copy {
  nav: { play: string; courtyard: string; faq: string; menu: string };
  hero: {
    h1: string;
    lead: string;
    action: string;
    stageLabel: string;
  };
  board: {
    level: string;
    arrows: string;
    hearts: string;
    gate: string; // "Moon Gate · step {n} of 6"
    hint: string;
    note: string;
    blocked: string;
    cleared: string;
    won: string;
    lost: string;
    again: string;
    arrowLabel: string; // "{colour} arrow pointing {dir}"
    colours: [string, string, string];
    dirs: { up: string; right: string; down: string; left: string };
    boardLabel: string;
    gateAlt: string; // "{n}"
  };
  how: {
    h2: string;
    slider: string;
    stages: { name: string; clause: string; body: string; alt: string; src: string }[];
  };
  panel: {
    h2: string;
    lead: string;
    videoLabel: string;
    notes: { name: string; body: string }[];
  };
  courtyard: {
    h2: string;
    lead: string;
    areas: Record<AreaId, string>;
    step: string; // "Step {n} of 6"
    restored: string;
    next: string; // "Next step: {n} stars"
    total: string; // "{n} stars in all"
    alt: string; // "{area}, step {n} of 6"
    altRestored: string; // "{area}, fully restored"
    note: string;
  };
  stats: {
    figure: string;
    claim: string;
    body: string;
    twists: string;
    daily: string;
    bar: string; // "Levels {from}–{to}: {n} arrows on average"
    master: string; // "Master: {n} arrows on average"
    masterShort: string;
    chartLabel: string;
  };
  ads: {
    h2: string;
    tiles: string[];
  };
  faq: { h2: string };
  credits: {
    h2: string;
    intro: string;
    music: string;
    tracks: string;
    sfx: string;
  };
  footer: { what: string; contact: string };
}

const en: Copy = {
  nav: { play: "How it plays", courtyard: "The courtyard", faq: "Questions", menu: "Site" },
  hero: {
    h1: "Tap arrows. Clear the path.",
    lead: "Courtyard Arrows is a calm, tricky arrow puzzle. An arrow flies off the board once its way is clear, and every star you earn restores a quiet courtyard.",
    action: "Play level 9",
    stageLabel: "Level 9 from the game, playable here",
  },
  board: {
    level: "Level",
    arrows: "Arrows",
    hearts: "Hearts",
    gate: "Moon Gate · step {n} of 6",
    hint: "Tap an arrow whose head has a clear run to the edge.",
    note: "Here every arrow you clear restores a little of the Moon Gate. In the game, your stars do it.",
    blocked: "Blocked. That cost a heart.",
    cleared: "{n} arrows left.",
    won: "Board clear. The Moon Gate is restored.",
    lost: "Out of hearts. In the game you can continue with two more, or simply retry.",
    again: "Play it again",
    arrowLabel: "{colour} arrow pointing {dir}",
    colours: ["Red", "Blue", "Green"],
    dirs: { up: "up", right: "right", down: "down", left: "left" },
    boardLabel: "Courtyard Arrows level 9: a 5 by 7 board of eight arrows",
    gateAlt: "The Moon Gate corner of the courtyard, step {n} of 6 of its restoration",
  },
  how: {
    h2: "How Courtyard Arrows plays",
    slider: "Step through the rules",
    stages: [
      {
        name: "Tap",
        clause: "Tap an arrow with a clear way out.",
        body: "Only its head needs a clear run to the edge. Tap one that is blocked and it knocks back.",
        alt: "Level 102 in Courtyard Arrows: a crowded wooden board of bent arrows, a fuse and two linked pairs, with the hearts, arrows and par counters above",
        src: "/apps/arrow-out/screens/01-board.webp",
      },
      {
        name: "Snake out",
        clause: "Long arrows snake out behind.",
        body: "Arrows grow long and bend around corners. When one leaves, its whole body follows its head, so crowded boards ask you to plan two or three moves ahead.",
        alt: "A U-shaped yellow arrow snaking off the board along its own bend in level 61",
        src: "/apps/arrow-out/screens/02-snakeout.webp",
      },
      {
        name: "Hearts",
        clause: "Three hearts, then a choice.",
        body: "A blocked tap costs a heart; no mistakes earns three stars. Super Hard levels from 101 and Master levels give two. Out of hearts, continue with two more or simply retry.",
        alt: "Super Hard level 140: a 14 by 20 board of 80 arrows with two hearts left",
        src: "/apps/arrow-out/screens/03-bigboard.webp",
      },
      {
        name: "Fuses and links",
        clause: "Fuses count. Links leave together.",
        body: "Every arrow that flies out takes one from a fuse, so free the fused arrow before it reaches zero. A linked pair leaves only when both paths are clear.",
        alt: "A Master board zoomed in, with fuse badges reading 34, 28 and 47 on bent arrows",
        src: "/apps/arrow-out/screens/05-master.webp",
      },
    ],
  },
  panel: {
    h2: "Read the board",
    lead: "Real play from the game: the counters above the board and the four boosters below.",
    videoLabel: "Gameplay from Courtyard Arrows: arrows tapped off a crowded board, linked pairs leaving together and a board cleared",
    notes: [
      { name: "Arrows", body: "How many are left. The level ends when it reaches zero." },
      { name: "Hearts", body: "Your hearts for this level. A blocked tap costs one; no mistakes earns three stars." },
      { name: "Fuse", body: "The lowest fuse on the board. Free its arrow before every exit uses it up." },
      { name: "Par clock", body: "From level 11. Beat it for a Speed crown; it never fails a level." },
      { name: "Gold chains", body: "A chain joins a linked pair. Both paths must be clear before either can go." },
      { name: "Boosters", body: "Lantern lights a free arrow, Undo gives a heart back, Reveal makes every free arrow glow, Mallet removes one. You start with two of each." },
    ],
  },
  courtyard: {
    h2: "Five corners to restore",
    lead: "Every star you earn goes back into the courtyard. Each corner has six renovation steps, from a tidy, plain start to fully restored, in a soft hand-painted style.",
    areas: {
      "stone-path": "Stone Path",
      "koi-pond": "Koi Pond",
      "bamboo-grove": "Bamboo Grove",
      "tea-pavilion": "Tea Pavilion",
      "moon-gate": "Moon Gate",
    },
    step: "Step {n} of 6",
    restored: "Restored",
    next: "Next step: {n} stars",
    total: "{n} stars in all",
    alt: "{area} in Courtyard Arrows, step {n} of 6 of its restoration",
    altRestored: "{area} in Courtyard Arrows, fully restored",
    note: "Pictures from the game's courtyard screen.",
  },
  stats: {
    figure: "600",
    claim: "levels, then 120 Master",
    body: "Boards grow from 4 arrows at level 1 to 140 by level 600, across thirty seasonal chapters from Plum Blossom to The Moon Gate. Each bar is the average board for fifty levels; the last is the Master track. Every level is checked by our solver to have a solution before it ships.",
    twists: "New twists arrive as you go: padlocks and keys, ice, rocks, fog, long snakes, fuses, linked pairs, turntables and colour gates, each with a short tutorial the first time it appears.",
    daily: "Three new daily puzzles every day from level 8: Morning, Noon and Moonlight. Endless mode opens at level 30.",
    bar: "Levels {from}–{to}: {n} arrows on average",
    master: "Master track: {n} arrows on average",
    masterShort: "Master",
    chartLabel: "Average arrows per board: 21 in levels 1–50, rising to 110 in levels 551–600, and 124 on the Master track",
  },
  ads: {
    h2: "Honest about ads",
    tiles: [
      "Full-screen ads only after a win",
      "Never during a level",
      "None in your first levels",
      "Banner on home and map only",
      "Reward videos are your choice",
      "Remove Ads once, for good",
    ],
  },
  faq: { h2: "Questions, answered" },
  credits: {
    h2: "Music and sound",
    intro: "The music and sound effects in this game come from these sources, used under their licences.",
    music: "Music",
    tracks: "Tracks",
    sfx: "Sound effects",
  },
  footer: { what: "A calm arrow puzzle", contact: "Contact" },
};

const zhCn: Copy = {
  nav: { play: "玩法", courtyard: "庭院", faq: "常见问题", menu: "站点" },
  hero: {
    h1: "点一下箭头，清出一条路",
    lead: "Courtyard Arrows 是一款静心又烧脑的箭头解谜。箭头前方畅通，点它就会飞出棋盘；你赢得的每颗星星，都让一座安静的庭院重焕生机。",
    action: "试玩第 9 关",
    stageLabel: "游戏中的第 9 关，可在此试玩",
  },
  board: {
    level: "关卡",
    arrows: "箭头",
    hearts: "红心",
    gate: "月门 · 第 {n}/6 步",
    hint: "点一支箭头：它的头部到边缘之间必须畅通。",
    note: "在这里，每清除一支箭头，月门就修复一点；在游戏里，靠的是你的星星。",
    blocked: "被挡住了，失去一颗心。",
    cleared: "还剩 {n} 支箭头。",
    won: "棋盘已清空，月门修复完成。",
    lost: "红心用完了。在游戏中可以再加两颗心继续，或者直接重来。",
    again: "再玩一次",
    arrowLabel: "{colour}箭头，指向{dir}",
    colours: ["红色", "蓝色", "绿色"],
    dirs: { up: "上", right: "右", down: "下", left: "左" },
    boardLabel: "Courtyard Arrows 第 9 关：5×7 的棋盘上有八支箭头",
    gateAlt: "庭院中的月门，修复到第 {n}/6 步",
  },
  how: {
    h2: "Courtyard Arrows 怎么玩",
    slider: "逐步查看规则",
    stages: [
      {
        name: "点击",
        clause: "点一支前路畅通的箭头",
        body: "只要箭头的头部到边缘之间没有阻挡就能飞出。点到被挡住的箭头，它会弹回原位。",
        alt: "Courtyard Arrows 第 102 关：拥挤的木质棋盘上布满弯箭头、一个引信和两对连体箭头，上方是红心、箭头和标准用时计数",
        src: "/apps/arrow-out/screens/01-board.webp",
      },
      {
        name: "蛇行飞出",
        clause: "长箭头整条蛇行而出",
        body: "箭头会变长、会拐弯；飞走时整条身体跟着头部一起离开，所以拥挤的棋盘需要你提前想好两三步。",
        alt: "第 61 关中，一支 U 形黄色箭头沿着自己的弯道蛇行飞出棋盘",
        src: "/apps/arrow-out/screens/02-snakeout.webp",
      },
      {
        name: "红心",
        clause: "三颗红心，用完再选",
        body: "点到被挡住的箭头会失去一颗心，零失误可得三星。第 101 关起的超难关和大师关只有两颗心。红心用完，可以再加两颗继续，或者直接重来。",
        alt: "超难关第 140 关：14×20 的棋盘上有 80 支箭头，只剩两颗红心",
        src: "/apps/arrow-out/screens/03-bigboard.webp",
      },
      {
        name: "引信与连体",
        clause: "引信倒数，连体同飞",
        body: "每飞出一支箭头，引信就减一，要在归零前放走带引信的箭头。连体箭头必须两条路都畅通，才会一起飞走。",
        alt: "放大的大师关棋盘，弯箭头上的引信数字分别是 34、28 和 47",
        src: "/apps/arrow-out/screens/05-master.webp",
      },
    ],
  },
  panel: {
    h2: "看懂棋盘",
    lead: "游戏实录：棋盘上方是各项计数，下方是四种道具。",
    videoLabel: "Courtyard Arrows 实际游戏画面：从拥挤的棋盘上点走箭头、连体箭头一起飞出、清空整个棋盘",
    notes: [
      { name: "箭头", body: "剩余箭头数，归零即过关。" },
      { name: "红心", body: "本关剩余的红心。点到被挡住的箭头失去一颗，零失误可得三星。" },
      { name: "引信", body: "棋盘上最小的引信数。在出口次数用完之前放走它的箭头。" },
      { name: "标准用时", body: "第 11 关起出现。跑赢它可得速度皇冠，但绝不会因此失败。" },
      { name: "金色锁链", body: "锁链连着一对连体箭头，两条路都畅通才能飞走。" },
      { name: "道具", body: "灯笼点亮一支可走的箭头，撤销找回一颗心，透视让所有可走箭头发光，木槌直接移除一支。每种道具开局各有两个。" },
    ],
  },
  courtyard: {
    h2: "五个角落等你修复",
    lead: "你赢得的每颗星星都会回到庭院里。每个角落有六个修复步骤，从整洁却朴素的起点到焕然一新，画面是柔和的手绘风格。",
    areas: {
      "stone-path": "石径",
      "koi-pond": "锦鲤池",
      "bamboo-grove": "竹林",
      "tea-pavilion": "茶亭",
      "moon-gate": "月门",
    },
    step: "第 {n}/6 步",
    restored: "已修复",
    next: "下一步：{n} 颗星",
    total: "共 {n} 颗星",
    alt: "Courtyard Arrows 中的{area}，修复到第 {n}/6 步",
    altRestored: "Courtyard Arrows 中完全修复的{area}",
    note: "图片来自游戏中的庭院画面。",
  },
  stats: {
    figure: "600",
    claim: "关，外加 120 关大师",
    body: "棋盘从第 1 关的 4 支箭头，增长到第 600 关的 140 支，贯穿从「梅花」到「月门」的三十个四季章节。每根柱子是五十关的平均箭头数，最后一根是大师轨道。每一关上线前都经过求解器验证，确保有解。",
    twists: "新玩法会陆续登场：锁与钥匙、冰块、岩石、迷雾、长蛇、引信、连体箭头、转盘和颜色闸门，首次出现时都有简短教学。",
    daily: "第 8 关起，每天三道新的每日谜题：清晨、正午和月夜。第 30 关开放无尽模式。",
    bar: "第 {from}–{to} 关：平均 {n} 支箭头",
    master: "大师轨道：平均 {n} 支箭头",
    masterShort: "大师",
    chartLabel: "每个棋盘的平均箭头数：第 1–50 关为 21 支，第 551–600 关增至 110 支，大师轨道为 124 支",
  },
  ads: {
    h2: "对广告坦诚",
    tiles: [
      "全屏广告只在过关后出现",
      "关卡进行中绝不打扰",
      "最初几关没有广告",
      "横幅只在主页和地图页",
      "奖励视频由你决定",
      "一次购买，永久去广告",
    ],
  },
  faq: { h2: "常见问题" },
  credits: {
    h2: "音乐与音效",
    intro: "本游戏的音乐与音效来自以下来源，并按其许可使用。",
    music: "音乐",
    tracks: "曲目",
    sfx: "音效",
  },
  footer: { what: "一款静心的箭头解谜", contact: "联系我们" },
};

const zhTw: Copy = {
  nav: { play: "玩法", courtyard: "庭院", faq: "常見問題", menu: "網站" },
  hero: {
    h1: "點一下箭頭，清出一條路",
    lead: "Courtyard Arrows 是一款靜心又燒腦的箭頭解謎。箭頭前方暢通，點它就會飛出棋盤；你贏得的每顆星星，都讓一座寧靜的庭院重現生機。",
    action: "試玩第 9 關",
    stageLabel: "遊戲中的第 9 關，可在此試玩",
  },
  board: {
    level: "關卡",
    arrows: "箭頭",
    hearts: "紅心",
    gate: "月門 · 第 {n}/6 步",
    hint: "點一支箭頭：它的頭部到邊緣之間必須暢通。",
    note: "在這裡，每清除一支箭頭，月門就修復一點；在遊戲裡，靠的是你的星星。",
    blocked: "被擋住了，失去一顆心。",
    cleared: "還剩 {n} 支箭頭。",
    won: "棋盤已清空，月門修復完成。",
    lost: "紅心用完了。在遊戲中可以再加兩顆心繼續，或是直接重來。",
    again: "再玩一次",
    arrowLabel: "{colour}箭頭，指向{dir}",
    colours: ["紅色", "藍色", "綠色"],
    dirs: { up: "上", right: "右", down: "下", left: "左" },
    boardLabel: "Courtyard Arrows 第 9 關：5×7 的棋盤上有八支箭頭",
    gateAlt: "庭院中的月門，修復到第 {n}/6 步",
  },
  how: {
    h2: "Courtyard Arrows 怎麼玩",
    slider: "逐步查看規則",
    stages: [
      {
        name: "點擊",
        clause: "點一支前路暢通的箭頭",
        body: "只要箭頭的頭部到邊緣之間沒有阻擋就能飛出。點到被擋住的箭頭，它會彈回原位。",
        alt: "Courtyard Arrows 第 102 關：擁擠的木質棋盤上布滿彎箭頭、一個引信和兩對連體箭頭，上方是紅心、箭頭和標準用時計數",
        src: "/apps/arrow-out/screens/01-board.webp",
      },
      {
        name: "蛇行飛出",
        clause: "長箭頭整條蛇行而出",
        body: "箭頭會變長、會轉彎；飛走時整條身體跟著頭部一起離開，所以擁擠的棋盤需要你預先想好兩三步。",
        alt: "第 61 關中，一支 U 形黃色箭頭沿著自己的彎道蛇行飛出棋盤",
        src: "/apps/arrow-out/screens/02-snakeout.webp",
      },
      {
        name: "紅心",
        clause: "三顆紅心，用完再選",
        body: "點到被擋住的箭頭會失去一顆心，零失誤可得三星。第 101 關起的超難關和大師關只有兩顆心。紅心用完，可以再加兩顆繼續，或是直接重來。",
        alt: "超難關第 140 關：14×20 的棋盤上有 80 支箭頭，只剩兩顆紅心",
        src: "/apps/arrow-out/screens/03-bigboard.webp",
      },
      {
        name: "引信與連體",
        clause: "引信倒數，連體同飛",
        body: "每飛出一支箭頭，引信就減一，要在歸零前放走帶引信的箭頭。連體箭頭必須兩條路都暢通，才會一起飛走。",
        alt: "放大的大師關棋盤，彎箭頭上的引信數字分別是 34、28 和 47",
        src: "/apps/arrow-out/screens/05-master.webp",
      },
    ],
  },
  panel: {
    h2: "看懂棋盤",
    lead: "遊戲實錄：棋盤上方是各項計數，下方是四種道具。",
    videoLabel: "Courtyard Arrows 實際遊戲畫面：從擁擠的棋盤上點走箭頭、連體箭頭一起飛出、清空整個棋盤",
    notes: [
      { name: "箭頭", body: "剩餘箭頭數，歸零即過關。" },
      { name: "紅心", body: "本關剩餘的紅心。點到被擋住的箭頭失去一顆，零失誤可得三星。" },
      { name: "引信", body: "棋盤上最小的引信數。在出口次數用完之前放走它的箭頭。" },
      { name: "標準用時", body: "第 11 關起出現。跑贏它可得速度皇冠，但絕不會因此失敗。" },
      { name: "金色鎖鏈", body: "鎖鏈連著一對連體箭頭，兩條路都暢通才能飛走。" },
      { name: "道具", body: "燈籠點亮一支可走的箭頭，復原找回一顆心，透視讓所有可走箭頭發光，木槌直接移除一支。每種道具開局各有兩個。" },
    ],
  },
  courtyard: {
    h2: "五個角落等你修復",
    lead: "你贏得的每顆星星都會回到庭院裡。每個角落有六個修復步驟，從整潔卻樸素的起點到煥然一新，畫面是柔和的手繪風格。",
    areas: {
      "stone-path": "石徑",
      "koi-pond": "錦鯉池",
      "bamboo-grove": "竹林",
      "tea-pavilion": "茶亭",
      "moon-gate": "月門",
    },
    step: "第 {n}/6 步",
    restored: "已修復",
    next: "下一步：{n} 颗星",
    total: "共 {n} 顆星",
    alt: "Courtyard Arrows 中的{area}，修復到第 {n}/6 步",
    altRestored: "Courtyard Arrows 中完全修復的{area}",
    note: "圖片來自遊戲中的庭院畫面。",
  },
  stats: {
    figure: "600",
    claim: "關，外加 120 關大師",
    body: "棋盤從第 1 關的 4 支箭頭，增加到第 600 關的 140 支，貫穿從「梅花」到「月門」的三十個四季章節。每根柱子是五十關的平均箭頭數，最後一根是大師軌道。每一關上線前都經過求解器驗證，確保有解。",
    twists: "新玩法會陸續登場：鎖與鑰匙、冰塊、岩石、迷霧、長蛇、引信、連體箭頭、轉盤和顏色閘門，首次出現時都有簡短教學。",
    daily: "第 8 關起，每天三道新的每日謎題：清晨、正午和月夜。第 30 關開放無盡模式。",
    bar: "第 {from}–{to} 關：平均 {n} 支箭頭",
    master: "大師軌道：平均 {n} 支箭頭",
    masterShort: "大師",
    chartLabel: "每個棋盤的平均箭頭數：第 1–50 關為 21 支，第 551–600 關增至 110 支，大師軌道為 124 支",
  },
  ads: {
    h2: "對廣告坦誠",
    tiles: [
      "全螢幕廣告只在過關後出現",
      "關卡進行中絕不打擾",
      "最初幾關沒有廣告",
      "橫幅只在主頁和地圖頁",
      "獎勵影片由你決定",
      "一次購買，永久移除廣告",
    ],
  },
  faq: { h2: "常見問題" },
  credits: {
    h2: "音樂與音效",
    intro: "本遊戲的音樂與音效來自以下來源，並依其授權使用。",
    music: "音樂",
    tracks: "曲目",
    sfx: "音效",
  },
  footer: { what: "一款靜心的箭頭解謎", contact: "聯絡我們" },
};

export const COPY: Record<Locale, Copy> = { en, "zh-cn": zhCn, "zh-tw": zhTw };

/** "{n} arrows" style templating. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`));
}
