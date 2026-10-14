// Can Swap's page words that are not marketing copy from the content file:
// section headings, the four-step strip, the live puzzle's labels, the
// shell. Marketing copy (tagline, features, faqs, trust) stays in
// src/content/bottle-guess.ts.

import type { Locale } from "@/lib/i18n";

export interface Flavour {
  id: string;
  /** Three-or-four letter label, as on the game's history strips. */
  code: string;
  name: string;
}

const FLAVOURS: Record<Locale, Flavour[]> = {
  en: [
    { id: "cola", code: "COLA", name: "Cola" },
    { id: "lemon", code: "LMN", name: "Lemon" },
    { id: "silver", code: "ICE", name: "Silver" },
    { id: "peach", code: "PCH", name: "Peach" },
  ],
  "zh-cn": [
    { id: "cola", code: "COLA", name: "可乐" },
    { id: "lemon", code: "LMN", name: "柠檬" },
    { id: "silver", code: "ICE", name: "银冰" },
    { id: "peach", code: "PCH", name: "蜜桃" },
  ],
  "zh-tw": [
    { id: "cola", code: "COLA", name: "可樂" },
    { id: "lemon", code: "LMN", name: "檸檬" },
    { id: "silver", code: "ICE", name: "銀冰" },
    { id: "peach", code: "PCH", name: "蜜桃" },
  ],
};

const COPY = {
  en: {
    play: "Try a puzzle",
    status: "In development · coming to the App Store",
    howTitle: "How it plays",
    steps: [
      "First, the cover hides an order.",
      "Then you swap two cans.",
      "Ring the bell: the lamps count.",
      "Crack it: all four in place.",
    ],
    stepCount: ["? / 4", "swap", "2 / 4 in place", "4 / 4 all in place"],
    rowTitle: "Your row",
    bellTitle: "the bell’s count",
    rowHint: "Tap a can, then another, to swap them. The secret order is new on every visit.",
    ring: "Ring the bell",
    inPlace: "in place",
    allInPlace: "All in place",
    noChecks: "No checks yet. Swap, then ring.",
    solvedIn: (n: number) => `Cracked in ${n} ${n === 1 ? "check" : "checks"}.`,
    again: "New secret order",
    checks: "Checks",
    canLabel: (name: string, pos: number, lifted: boolean) =>
      `${name}, position ${pos}${lifted ? ", lifted" : ""}`,
    noScript: "The puzzle needs JavaScript; the game itself needs none of this.",
    gameRow: "The same row in the game, under the cabinet’s cover.",
    historyCaption: "In the game every ring is kept as a strip of mini cans and its count.",
    modesTitle: "Five ways to play",
    faqTitle: "Questions, answered",
    footPages: "Pages",
    footStudio: "Studio",
    footCredits: "Music & sound",
    backToTop: "Back to top",
    rights: "Can Swap is in development at App Factory, Singapore.",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    language: "Language",
  },
  "zh-cn": {
    play: "试玩一局",
    status: "开发中 · 即将登陆 App Store",
    howTitle: "玩法",
    steps: [
      "首先，盖子藏起一个顺序。",
      "然后，交换两个罐子。",
      "按铃：亮灯就是计数。",
      "破解：四个全部摆对。",
    ],
    stepCount: ["? / 4", "交换", "2 / 4 摆对", "4 / 4 全部摆对"],
    rowTitle: "你的排列",
    bellTitle: "铃铛的计数",
    rowHint: "点一个罐子，再点另一个，就能交换。每次打开页面，秘密顺序都不一样。",
    ring: "按响铃铛",
    inPlace: "个摆对",
    allInPlace: "全部摆对",
    noChecks: "还没有检查。先交换，再按铃。",
    solvedIn: (n: number) => `用 ${n} 次检查破解。`,
    again: "换一个秘密顺序",
    checks: "检查",
    canLabel: (name: string, pos: number, lifted: boolean) =>
      `${name}，第 ${pos} 位${lifted ? "，已拿起" : ""}`,
    noScript: "这个小谜题需要 JavaScript 才能玩；游戏本身不需要。",
    gameRow: "游戏里的同一排罐子，在木柜的盖子下面。",
    historyCaption: "在游戏里，每次按铃都会留下一条迷你罐子记录和它的计数。",
    modesTitle: "五种玩法",
    faqTitle: "常见问题",
    footPages: "页面",
    footStudio: "工作室",
    footCredits: "音乐与音效",
    backToTop: "回到顶部",
    rights: "Can Swap 由新加坡 App Factory 开发中。",
    support: "支持",
    privacy: "隐私",
    terms: "条款",
    contact: "联系",
    language: "语言",
  },
  "zh-tw": {
    play: "試玩一局",
    status: "開發中 · 即將登陸 App Store",
    howTitle: "玩法",
    steps: [
      "首先，蓋子藏起一個順序。",
      "然後，交換兩個罐子。",
      "按鈴：亮燈就是計數。",
      "破解：四個全部擺對。",
    ],
    stepCount: ["? / 4", "交換", "2 / 4 擺對", "4 / 4 全部擺對"],
    rowTitle: "你的排列",
    bellTitle: "鈴鐺的計數",
    rowHint: "點一個罐子，再點另一個，就能交換。每次打開頁面，祕密順序都不一樣。",
    ring: "按響鈴鐺",
    inPlace: "個擺對",
    allInPlace: "全部擺對",
    noChecks: "還沒有檢查。先交換，再按鈴。",
    solvedIn: (n: number) => `用 ${n} 次檢查破解。`,
    again: "換一個祕密順序",
    checks: "檢查",
    canLabel: (name: string, pos: number, lifted: boolean) =>
      `${name}，第 ${pos} 位${lifted ? "，已拿起" : ""}`,
    noScript: "這個小謎題需要 JavaScript 才能玩；遊戲本身不需要。",
    gameRow: "遊戲裡的同一排罐子，在木櫃的蓋子下面。",
    historyCaption: "在遊戲裡，每次按鈴都會留下一條迷你罐子紀錄和它的計數。",
    modesTitle: "五種玩法",
    faqTitle: "常見問題",
    footPages: "頁面",
    footStudio: "工作室",
    footCredits: "音樂與音效",
    backToTop: "回到頂端",
    rights: "Can Swap 由新加坡 App Factory 開發中。",
    support: "支援",
    privacy: "隱私",
    terms: "條款",
    contact: "聯絡",
    language: "語言",
  },
} as const;

export type CanSwapCopy = (typeof COPY)[Locale];

export const copyFor = (locale: Locale) => COPY[locale];
export const flavoursFor = (locale: Locale) => FLAVOURS[locale];
