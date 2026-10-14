// Haystack Hollow's page words that are not marketing copy from the content
// file: the seed-to-cash slip, the menu of the farm, the Order Board's
// labels and the shell. Numbers come from the game's catalog (./farm.ts).

import type { Locale } from "@/lib/i18n";

type Row = [what: string, value: string];
type Group = { title: string; rows: Row[] };
type MenuItem = { name: string; value: string; note: string };

const COPY = {
  en: {
    act: "Fill an order",
    status: "In development · coming to the App Store",
    links: ["How it plays", "The Order Board", "Questions"],
    heroAlt: "The Haystack Hollow icon: a red barn with white trim and a grey silo on green grass",
    slipTitle: "From seed to cash pile",
    slipBody:
      "One loop runs the whole town. Your farmer walks it; every stop is a building you stand beside. Here is a first order, start to finish, with the game’s own timings.",
    slip: [
      { title: "In the field", rows: [["Wheat ripens", "30 s"], ["Walk through it: two sheaves a field", "×2"]] },
      { title: "At the Feed Mill", rows: [["2 wheat + 1 corn make 3 cow feed", "45 s"]] },
      { title: "In the Cowshed", rows: [["Feed the three cows, carry the milk", "×3"]] },
      { title: "At the Bakery", rows: [["3 wheat make 1 loaf", "60 s"]] },
      { title: "At the Order Board", rows: [["Deliver 1 bread + 1 milk", "27 coins"]] },
    ] as Group[],
    slipTotal: ["A cash pile on the ground: walk over it", "27 coins"] as Row,
    boardTitle: "The Order Board",
    boardIntro: "The board holds three orders at a time. Pick one to see what it takes and what it pays.",
    orderTab: (n: number) => `Order ${n}`,
    wants: "Wanted",
    takes: "What it takes",
    from: (inputs: string, at: string, secs?: number) =>
      `${inputs} at ${at}${secs ? `, ${secs} s` : ""}`,
    grows: (at: string, secs?: number) => `grows in ${at}${secs ? ` in ${secs} s` : ""}`,
    pays: "Pays",
    coins: "coins",
    fairOn: (n: number) => `Weekend Fair today: +${n} coins`,
    fairOff: "On Saturdays and Sundays the Weekend Fair adds 25 %.",
    deliver: "Deliver",
    another: "New order",
    collected: (n: number) => `Collected this visit: ${n} coins`,
    plateAlt: "",
    menuTitle: "What grows here",
    menu: [
      {
        title: "On foot",
        items: [
          { name: "Walk to harvest", value: "slide", note: "Ripe crops jump onto your farmer’s back." },
          { name: "Trade by standing", value: "stand", note: "Stop beside a building and it takes what it needs." },
          { name: "Glowing pads", value: "stand on it", note: "Fields, a bigger basket, faster boots, a field hand." },
        ],
      },
      {
        title: "Buildings",
        items: [
          { name: "Feed Mill", value: "level 1", note: "Wheat, corn and carrots into feed for the animals." },
          { name: "Bakery", value: "level 2", note: "Bread, then cookies from wheat, egg and milk." },
          { name: "Dairy", value: "level 3", note: "Cream and cheese, then butter." },
          { name: "Jam Kitchen", value: "level 8", note: "Strawberry jam, and berry pie from level 12." },
        ],
      },
      {
        title: "Every day",
        items: [
          { name: "Mayor Hazel’s goals", value: "36", note: "Four chapters, a chest at the end of each." },
          { name: "Daily tasks", value: "3 + chest", note: "Three small jobs and a bonus chest." },
          { name: "Gift calendar", value: "7 days", note: "A streak; a missed day starts it again." },
          { name: "Weekend Fair", value: "+25 %", note: "Orders pay more every Saturday and Sunday." },
        ],
      },
    ] as { title: string; items: MenuItem[] }[],
    faqTitle: "Questions",
    footMenu: ["How it plays", "The Order Board", "Questions"],
    contact: "Write to us",
    studio: "Studio",
    credits: "Music & sound",
    legal: "Haystack Hollow is in development at App Factory, Singapore.",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
  },
  "zh-cn": {
    act: "完成一张订单",
    status: "开发中 · 即将登陆 App Store",
    links: ["玩法", "订单板", "常见问题"],
    heroAlt: "Haystack Hollow 的图标：绿草地上的红色谷仓，白色饰边，旁边是灰色筒仓",
    slipTitle: "从种子到现金堆",
    slipBody: "整座小镇靠一个循环运转。农夫走一圈，每一站都是你停在旁边的一座建筑。下面是第一张订单从头到尾的样子，用的是游戏里的真实时间。",
    slip: [
      { title: "在田里", rows: [["小麦成熟", "30 秒"], ["走过麦田：每块田两捆", "×2"]] },
      { title: "在饲料厂", rows: [["2 小麦 + 1 玉米 做出 3 份牛饲料", "45 秒"]] },
      { title: "在牛棚", rows: [["喂三头奶牛，带走牛奶", "×3"]] },
      { title: "在面包坊", rows: [["3 小麦 烤出 1 个面包", "60 秒"]] },
      { title: "在订单板", rows: [["交付 1 面包 + 1 牛奶", "27 金币"]] },
    ] as Group[],
    slipTotal: ["地上出现一堆现金：走过去就能捡", "27 金币"] as Row,
    boardTitle: "订单板",
    boardIntro: "订单板一次挂三张订单。选一张，看看需要什么、能赚多少。",
    orderTab: (n: number) => `订单 ${n}`,
    wants: "需要",
    takes: "怎么做出来",
    from: (inputs: string, at: string, secs?: number) =>
      `${at}：${inputs}${secs ? `，${secs} 秒` : ""}`,
    grows: (at: string, secs?: number) => `${at}种植${secs ? `，${secs} 秒成熟` : ""}`,
    pays: "报酬",
    coins: "金币",
    fairOn: (n: number) => `今天有周末集市：额外 +${n} 金币`,
    fairOff: "每逢周六周日，周末集市让订单多付 25%。",
    deliver: "交货",
    another: "换一张订单",
    collected: (n: number) => `这次已赚：${n} 金币`,
    plateAlt: "",
    menuTitle: "这里有什么",
    menu: [
      {
        title: "步行",
        items: [
          { name: "走过就收获", value: "滑动", note: "成熟的作物会跳上农夫的背。" },
          { name: "站着就能交易", value: "停下", note: "在建筑旁停下，它会拿走需要的东西。" },
          { name: "发光地块", value: "解锁", note: "新田地、更大的篮子、更快的靴子、帮工。" },
        ],
      },
      {
        title: "建筑",
        items: [
          { name: "饲料厂", value: "1 级", note: "把小麦、玉米和胡萝卜做成动物饲料。" },
          { name: "面包坊", value: "2 级", note: "先是面包，之后用小麦、鸡蛋和牛奶做饼干。" },
          { name: "乳品坊", value: "3 级", note: "奶油和奶酪，之后还有黄油。" },
          { name: "果酱厨房", value: "8 级", note: "草莓果酱，12 级起还能做莓果派。" },
        ],
      },
      {
        title: "每一天",
        items: [
          { name: "镇长 Hazel 的目标", value: "36", note: "四个章节，每章结束有一个宝箱。" },
          { name: "每日任务", value: "3 + 宝箱", note: "三件小事，再加一个奖励宝箱。" },
          { name: "礼物日历", value: "7 天", note: "连续签到；断一天就重新开始。" },
          { name: "周末集市", value: "+25%", note: "每个周六周日，订单报酬更高。" },
        ],
      },
    ] as { title: string; items: MenuItem[] }[],
    faqTitle: "常见问题",
    footMenu: ["玩法", "订单板", "常见问题"],
    contact: "写信给我们",
    studio: "工作室",
    credits: "音乐与音效",
    legal: "Haystack Hollow 由新加坡 App Factory 开发中。",
    support: "支持",
    privacy: "隐私",
    terms: "条款",
  },
  "zh-tw": {
    act: "完成一張訂單",
    status: "開發中 · 即將登陸 App Store",
    links: ["玩法", "訂單板", "常見問題"],
    heroAlt: "Haystack Hollow 的圖示：綠草地上的紅色穀倉，白色飾邊，旁邊是灰色筒倉",
    slipTitle: "從種子到現金堆",
    slipBody: "整座小鎮靠一個循環運轉。農夫走一圈，每一站都是你停在旁邊的一棟建築。下面是第一張訂單從頭到尾的樣子，用的是遊戲裡的真實時間。",
    slip: [
      { title: "在田裡", rows: [["小麥成熟", "30 秒"], ["走過麥田：每塊田兩捆", "×2"]] },
      { title: "在飼料廠", rows: [["2 小麥 + 1 玉米 做出 3 份牛飼料", "45 秒"]] },
      { title: "在牛舍", rows: [["餵三頭乳牛，帶走牛奶", "×3"]] },
      { title: "在麵包坊", rows: [["3 小麥 烤出 1 個麵包", "60 秒"]] },
      { title: "在訂單板", rows: [["交付 1 麵包 + 1 牛奶", "27 金幣"]] },
    ] as Group[],
    slipTotal: ["地上出現一堆現金：走過去就能撿", "27 金幣"] as Row,
    boardTitle: "訂單板",
    boardIntro: "訂單板一次掛三張訂單。選一張，看看需要什麼、能賺多少。",
    orderTab: (n: number) => `訂單 ${n}`,
    wants: "需要",
    takes: "怎麼做出來",
    from: (inputs: string, at: string, secs?: number) =>
      `${at}：${inputs}${secs ? `，${secs} 秒` : ""}`,
    grows: (at: string, secs?: number) => `${at}種植${secs ? `，${secs} 秒成熟` : ""}`,
    pays: "報酬",
    coins: "金幣",
    fairOn: (n: number) => `今天有週末市集：額外 +${n} 金幣`,
    fairOff: "每逢週六週日，週末市集讓訂單多付 25%。",
    deliver: "交貨",
    another: "換一張訂單",
    collected: (n: number) => `這次已賺：${n} 金幣`,
    plateAlt: "",
    menuTitle: "這裡有什麼",
    menu: [
      {
        title: "步行",
        items: [
          { name: "走過就收成", value: "滑動", note: "成熟的作物會跳上農夫的背。" },
          { name: "站著就能交易", value: "停下", note: "在建築旁停下，它會拿走需要的東西。" },
          { name: "發光地塊", value: "解鎖", note: "新田地、更大的籃子、更快的靴子、幫手。" },
        ],
      },
      {
        title: "建築",
        items: [
          { name: "飼料廠", value: "1 級", note: "把小麥、玉米和紅蘿蔔做成動物飼料。" },
          { name: "麵包坊", value: "2 級", note: "先是麵包，之後用小麥、雞蛋和牛奶做餅乾。" },
          { name: "乳品坊", value: "3 級", note: "鮮奶油和起司，之後還有奶油。" },
          { name: "果醬廚房", value: "8 級", note: "草莓果醬，12 級起還能做莓果派。" },
        ],
      },
      {
        title: "每一天",
        items: [
          { name: "鎮長 Hazel 的目標", value: "36", note: "四個章節，每章結束有一個寶箱。" },
          { name: "每日任務", value: "3 + 寶箱", note: "三件小事，再加一個獎勵寶箱。" },
          { name: "禮物日曆", value: "7 天", note: "連續簽到；斷一天就重新開始。" },
          { name: "週末市集", value: "+25%", note: "每個週六週日，訂單報酬更高。" },
        ],
      },
    ] as { title: string; items: MenuItem[] }[],
    faqTitle: "常見問題",
    footMenu: ["玩法", "訂單板", "常見問題"],
    contact: "寫信給我們",
    studio: "工作室",
    credits: "音樂與音效",
    legal: "Haystack Hollow 由新加坡 App Factory 開發中。",
    support: "支援",
    privacy: "隱私",
    terms: "條款",
  },
};

export const copyFor = (locale: Locale) => COPY[locale];
