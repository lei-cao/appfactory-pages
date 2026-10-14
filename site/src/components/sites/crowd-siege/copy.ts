// Crowd Siege's page words that are not marketing copy from the content
// file: headings, the Codex dial, the heroes (names, titles, blurbs and
// skills as the game ships them in lib/src/theme/heroes.dart; zh-cn / zh-tw
// are this site's translations) and the shell.

import type { Locale } from "@/lib/i18n";

type L = Record<Locale, string>;

export interface Hero {
  id: "hilde" | "tamsin" | "bram" | "oda" | "kai" | "mei";
  name: string;
  title: L;
  blurb: L;
  skill: L;
  /** Passive heroes add a bonus; the others have a charge skill. */
  passive?: true;
}

export const HEROES: Hero[] = [
  {
    id: "hilde",
    name: "Hilde Oakshield",
    title: { en: "The Bulwark", "zh-cn": "壁垒", "zh-tw": "壁壘" },
    blurb: {
      en: "Holds the line: the most HP and the widest charge. Flattens whole columns, a little slower to the gate.",
      "zh-cn": "坚守阵线：生命值最高，冲锋范围最宽。能压倒整列敌军，只是到城门稍慢一些。",
      "zh-tw": "堅守陣線：生命值最高，衝鋒範圍最寬。能壓倒整列敵軍，只是到城門稍慢一些。",
    },
    skill: { en: "Wide charge", "zh-cn": "宽幅冲锋", "zh-tw": "寬幅衝鋒" },
  },
  {
    id: "tamsin",
    name: "Tamsin Quickstep",
    title: { en: "The Outrider", "zh-cn": "斥候", "zh-tw": "斥候" },
    blurb: {
      en: "Rides like the wind: the fastest charge, so the strike lands before the enemy can close ranks.",
      "zh-cn": "疾驰如风：冲锋最快，在敌军合拢阵形之前就已出击。",
      "zh-tw": "疾馳如風：衝鋒最快，在敵軍合攏陣形之前就已出擊。",
    },
    skill: { en: "Fast charge", "zh-cn": "疾速冲锋", "zh-tw": "疾速衝鋒" },
  },
  {
    id: "bram",
    name: "Bram Ironram",
    title: { en: "The Breaker", "zh-cn": "破城者", "zh-tw": "破城者" },
    blurb: {
      en: "Swings a war hammer: the heaviest blow on the castle. Save him for when the gate is close to falling.",
      "zh-cn": "挥舞战锤：对城堡的打击最重。等城门快要倒下时再派他上。",
      "zh-tw": "揮舞戰鎚：對城堡的打擊最重。等城門快要倒下時再派他上。",
    },
    skill: { en: "Big blow", "zh-cn": "重击", "zh-tw": "重擊" },
  },
  {
    id: "oda",
    name: "Oda Stormbanner",
    title: { en: "The Herald", "zh-cn": "传令官", "zh-tw": "傳令官" },
    blurb: {
      en: "Her banner rallies the crowd: the skill comes back sooner.",
      "zh-cn": "她的旗帜鼓舞人群：技能冷却更快。",
      "zh-tw": "她的旗幟鼓舞人群：技能冷卻更快。",
    },
    skill: { en: "Skill +20%", "zh-cn": "技能 +20%", "zh-tw": "技能 +20%" },
    passive: true,
  },
  {
    id: "kai",
    name: "Kai Drumheart",
    title: { en: "The Drummer", "zh-cn": "鼓手", "zh-tw": "鼓手" },
    blurb: {
      en: "Beats the march: your launcher fires faster.",
      "zh-cn": "敲响进军鼓点：发射器射速更快。",
      "zh-tw": "敲響進軍鼓點：發射器射速更快。",
    },
    skill: { en: "Fire +6%", "zh-cn": "射速 +6%", "zh-tw": "射速 +6%" },
    passive: true,
  },
  {
    id: "mei",
    name: "Mei Stonewall",
    title: { en: "The Mason", "zh-cn": "石匠", "zh-tw": "石匠" },
    blurb: {
      en: "Builds as she fights: your wall holds more.",
      "zh-cn": "边战边筑：你的城墙更耐打。",
      "zh-tw": "邊戰邊築：你的城牆更耐打。",
    },
    skill: { en: "Wall +15%", "zh-cn": "城墙 +15%", "zh-tw": "城牆 +15%" },
    passive: true,
  },
];

/** A run of the features paragraph: words, or a picture slot by name. */
export type Run = string | { slot: "battle" | "hilde" | "shop" | "icon" };

const COPY = {
  en: {
    act: "Open the Codex",
    status: "In development · coming to the App Store",
    strip: "Six heroes of Crowd Siege",
    codexTitle: "The Codex: a history card for every battle",
    battle: "Battle",
    battleSuffix: "",
    inputLabel: "Battle number, 1 to 50",
    prev: "Previous battle",
    next: "Next battle",
    examples: [1, 30, 50],
    exampleLabel: (n: number, t: string) => `Battle ${n} · ${t}`,
    battles: (a: number, b: number) => `Battles ${a}–${b}`,
    bossLabel: "Boss",
    relic: "Boss battle: this card is the age’s relic.",
    codexNote: "Card",
    agesTitle: ["Six ages,", "fifty battles"],
    agesWord: "Campaign",
    agesCols: ["Age", "Battles", "Boss"],
    frontier: ["After 50", "The endless frontier"],
    paragraph: [
      "Pour your crowd through the gates",
      { slot: "battle" },
      ", recruit six heroes",
      { slot: "hilde" },
      ", spend Gold in the Forge",
      { slot: "shop" },
      " and win a Codex card",
      { slot: "icon" },
      " for every battle.",
    ] as Run[],
    featuresTitle: "What you do",
    heroesTitle: "Six heroes",
    skill: "Charge",
    passive: "Passive",
    faqTitle: "Questions",
    notes: "A 3D crowd battle game for iPhone.",
    write: "Write to us",
    pages: "Pages",
    credits: "Music & sound",
    place: "App Factory · Singapore",
    backToTop: "Back to top",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
  },
  "zh-cn": {
    act: "打开图鉴",
    status: "开发中 · 即将登陆 App Store",
    strip: "Crowd Siege 的六位英雄",
    codexTitle: "图鉴：每场战斗一张历史卡片",
    battle: "第",
    battleSuffix: "场",
    inputLabel: "战斗编号，1 到 50",
    prev: "上一场",
    next: "下一场",
    examples: [1, 30, 50],
    exampleLabel: (n: number, t: string) => `第 ${n} 场 · ${t}`,
    battles: (a: number, b: number) => `第 ${a}–${b} 场`,
    bossLabel: "首领",
    relic: "首领之战：这张卡是这个时代的遗物。",
    codexNote: "卡片",
    agesTitle: ["六个时代，", "五十场战斗"],
    agesWord: "战役",
    agesCols: ["时代", "战斗", "首领"],
    frontier: ["50 场之后", "无尽边疆"],
    paragraph: [
      "让人海冲过闸门",
      { slot: "battle" },
      "，招募六位英雄",
      { slot: "hilde" },
      "，在锻造炉花掉金币",
      { slot: "shop" },
      "，每赢一场就得到一张图鉴卡",
      { slot: "icon" },
      "。",
    ] as Run[],
    featuresTitle: "你要做的事",
    heroesTitle: "六位英雄",
    skill: "冲锋",
    passive: "被动",
    faqTitle: "常见问题",
    notes: "一款 iPhone 上的 3D 人海对战游戏。",
    write: "写信给我们",
    pages: "页面",
    credits: "音乐与音效",
    place: "App Factory · 新加坡",
    backToTop: "回到顶部",
    support: "支持",
    privacy: "隐私",
    terms: "条款",
  },
  "zh-tw": {
    act: "打開圖鑑",
    status: "開發中 · 即將登陸 App Store",
    strip: "Crowd Siege 的六位英雄",
    codexTitle: "圖鑑：每場戰鬥一張歷史卡片",
    battle: "第",
    battleSuffix: "場",
    inputLabel: "戰鬥編號，1 到 50",
    prev: "上一場",
    next: "下一場",
    examples: [1, 30, 50],
    exampleLabel: (n: number, t: string) => `第 ${n} 場 · ${t}`,
    battles: (a: number, b: number) => `第 ${a}–${b} 場`,
    bossLabel: "首領",
    relic: "首領之戰：這張卡是這個時代的遺物。",
    codexNote: "卡片",
    agesTitle: ["六個時代，", "五十場戰鬥"],
    agesWord: "戰役",
    agesCols: ["時代", "戰鬥", "首領"],
    frontier: ["50 場之後", "無盡邊疆"],
    paragraph: [
      "讓人海衝過閘門",
      { slot: "battle" },
      "，招募六位英雄",
      { slot: "hilde" },
      "，在鍛造爐花掉金幣",
      { slot: "shop" },
      "，每贏一場就得到一張圖鑑卡",
      { slot: "icon" },
      "。",
    ] as Run[],
    featuresTitle: "你要做的事",
    heroesTitle: "六位英雄",
    skill: "衝鋒",
    passive: "被動",
    faqTitle: "常見問題",
    notes: "一款 iPhone 上的 3D 人海對戰遊戲。",
    write: "寫信給我們",
    pages: "頁面",
    credits: "音樂與音效",
    place: "App Factory · 新加坡",
    backToTop: "回到頂端",
    support: "支援",
    privacy: "隱私",
    terms: "條款",
  },
};

export const copyFor = (locale: Locale) => COPY[locale];
