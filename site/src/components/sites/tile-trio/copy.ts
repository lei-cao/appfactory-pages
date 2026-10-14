// Porcelain Trio site copy that is not app content: section headings, the
// playable tray's labels, the tea house rooms, the store-screen label strips
// and the "what's inside" menu. Marketing copy the hub and SEO also read
// (tagline, oneLiner, features, faqs, trust…) lives in
// src/content/porcelain-trio.ts. Every fact here follows the live App Store
// listing (v4 store text); the room lines describe the game's own room art.

import type { Locale } from "@/lib/i18n";

export type RoomKey = "entrance" | "tea-room" | "kitchen" | "garden-deck" | "moon-balcony";
export type MotifKey = "teacup" | "koi" | "lantern" | "cat";

interface MenuItem {
  name: string;
  value: string;
  note?: string;
}

export interface SiteCopy {
  /** The one supporting sentence under the name in the hero. */
  hero: string;
  tabs: { play: string; house: string; twists: string; screens: string; inside: string };
  appStore: string;
  appStoreLabel: string;
  play: {
    title: string;
    body: string;
    tiles: string;
    tray: string;
    room: string;
    again: string;
    noscript: string;
    status: { start: string; cleared: string; won: string; full: string; blocked: string };
    motif: Record<MotifKey, string>;
    covered: string;
    roomAlt: string; // {n}
  };
  house: {
    title: string;
    intro: string;
    rooms: { key: RoomKey; name: string; line: string; alt: string }[];
  };
  twists: { title: string; alts: string[] };
  screens: {
    title: string;
    video: { values: string[]; caption: string; label: string };
    strips: { values: string[]; caption: string }[];
  };
  inside: {
    title: string;
    note: string;
    groups: { name: string; items: MenuItem[] }[];
    closing: [string, string];
    photoAlt: string;
  };
  faqTitle: string;
  faqPhotoAlt: string;
  credits: {
    title: string;
    intro: string;
    music: string;
    tracks: string;
    sfx: string;
    pictures: string;
    picturesIntro: string;
  };
  letter: {
    paragraphs: string[];
    signoff: string;
    role: string;
    write: string;
  };
  footer: {
    menu: string;
    play: string;
    house: string;
    faq: string;
    contact: string;
    language: string;
    photoAlt: string;
    legal: string;
  };
  home: string;
}

const en: SiteCopy = {
  hero: "Three alike, and they vanish: a triple tile match puzzle in hand-painted porcelain, and an old tea house to bring back to life.",
  tabs: {
    play: "Play a tray",
    house: "The tea house",
    twists: "Twists",
    screens: "Screens",
    inside: "What’s inside",
  },
  appStore: "Get it on the App Store",
  appStoreLabel: "Porcelain Trio on the App Store",
  play: {
    title: "Clear three, mend a room",
    body: "Tap a tile that nothing covers and it slides into the tray. Three alike vanish. Clear all four sets and the Tea Room behind the board comes back to life. Fill all seven slots without a match and the round is over.",
    tiles: "Tiles",
    tray: "Tray",
    room: "Tea Room",
    again: "Start again",
    noscript: "This little board needs JavaScript. The full game is free on the App Store.",
    status: {
      start: "Pick a bright tile: the darker ones are still covered.",
      cleared: "Three alike. The Tea Room gets a little brighter.",
      won: "Board cleared and the Tea Room restored. 600 more levels wait in the game.",
      full: "Seven tiles and no match: the tray is full. Start again?",
      blocked: "That tile is still covered. Clear the one on top first.",
    },
    motif: { teacup: "Teacup", koi: "Koi", lantern: "Red lantern", cat: "Lucky cat" },
    covered: "covered",
    roomAlt: "The Tea Room of the old tea house, restoration step {n} of 6",
  },
  house: {
    title: "Five rooms to bring back",
    intro: "Stars from every level restore an old tea house, room by room, from a dusty doorway to lanterns on the Moon Balcony.",
    rooms: [
      { key: "entrance", name: "Entrance", line: "Shoe shelves, a blue wave curtain and red lanterns at the door.", alt: "The restored Entrance: a blue noren curtain with wave patterns, red lanterns and porcelain vases" },
      { key: "tea-room", name: "Tea Room", line: "Tatami, a low table, an iron kettle and a scroll in the alcove.", alt: "The restored Tea Room: tatami mats, a low table set with a kettle and teacups, red cushions" },
      { key: "kitchen", name: "Kitchen", line: "A lit stove, dried persimmons and shelves of blue-and-white.", alt: "The restored Kitchen: a lit stove, hanging persimmons and shelves of blue-and-white porcelain" },
      { key: "garden-deck", name: "Garden Deck", line: "A red parasol over the koi pond, under the blossom.", alt: "The restored Garden Deck: a red parasol, a bench with tea and a koi pond under blossom" },
      { key: "moon-balcony", name: "Moon Balcony", line: "Paper lanterns, a full moon and the hills at dusk.", alt: "The restored Moon Balcony: strings of paper lanterns and a full moon over the hills" },
    ],
  },
  twists: {
    title: "Gentle at first, then real puzzles",
    alts: [
      "A large layered board in the game, darker tiles waiting underneath the bright ones",
      "Countdown tiles on the board, one showing 2 picks left and one showing 25",
      "A tray with two cracked slots that show how many triples will mend them",
      "A Master Rush level with 158 seconds left on the clock",
    ],
  },
  screens: {
    title: "Screens from the game",
    video: { values: ["Preview", "22 s", "iPhone", "Muted"], caption: "The game in motion", label: "Play the App Store preview" },
    strips: [
      { values: ["Level 200", "Super Hard", "77 tiles", "Par 2:05"], caption: "Match three, clear the board" },
      { values: ["Level 180", "Super Hard", "58 tiles", "2 picks left"], caption: "Beat the countdown tiles" },
      { values: ["Level 240", "Super Hard", "78 tiles", "Par 2:20"], caption: "Can you clear this one?" },
      { values: ["Kitchen", "Step 5/6", "417 stars", "30 to renovate"], caption: "Restore an old tea house" },
      { values: ["Master 21", "Rush", "78 tiles", "158 s"], caption: "Master levels, Rush clocks" },
      { values: ["Easy Tea", "Green Tea", "Dark Tea", "Daily"], caption: "A fresh puzzle every day" },
      { values: ["Level 200", "Tray full", "Revive", "Retry"], caption: "Full tray? Revive and play on" },
    ],
  },
  inside: {
    title: "What’s inside",
    note: "Free to play. All of it comes with the game.",
    groups: [
      {
        name: "Levels",
        items: [
          { name: "Levels, in 30 chapters", value: "600", note: "Every one checked by our solver to have a solution" },
          { name: "Master track, from level 60", value: "120", note: "With Rush levels against the clock" },
          { name: "A Hard level", value: "every 10th" },
          { name: "A Super Hard level", value: "every 20th" },
        ],
      },
      {
        name: "Every day",
        items: [
          { name: "Daily puzzle", value: "from level 8" },
          { name: "Endless mode", value: "from level 30" },
          { name: "Daily rewards and quests", value: "daily" },
          { name: "An event and reward chests", value: "weekly" },
        ],
      },
      {
        name: "Help at hand",
        items: [
          { name: "Free undos", value: "3 a level" },
          { name: "Shuffle, Magnet, Extra Slot", value: "3 boosters" },
          { name: "Full tray, continued", value: "+1 slot", note: "Your last 3 tray tiles go back on the board" },
          { name: "Cracked countdown tile, continued", value: "+5 picks" },
          { name: "Rush level, continued", value: "+30 s" },
        ],
      },
      {
        name: "The house",
        items: [
          { name: "Hand-painted porcelain motifs", value: "24", note: "Teacups, koi, lanterns, lucky cats, dango, bonsai…" },
          { name: "Tea house rooms to restore", value: "5" },
          { name: "Account or sign-up", value: "none" },
          { name: "Plays offline", value: "yes" },
        ],
      },
    ],
    closing: ["Open every day, offline too.", "Free on the App Store for iPhone and iPad."],
    photoAlt: "A Chinese porcelain bowl painted in underglaze cobalt blue with waves and petals, early 15th century",
  },
  faqTitle: "Questions",
  faqPhotoAlt: "A Ming dynasty blue-and-white porcelain bowl painted with a phoenix among scrolling flowers",
  credits: {
    title: "Music and sound",
    intro: "The music and sound effects in this game come from these sources, used under their licences.",
    music: "Music",
    tracks: "Tracks",
    sfx: "Sound effects",
    pictures: "Pictures on this page",
    picturesIntro: "Game art and screens are from Porcelain Trio. The two bowls are real porcelain, shown as atmosphere:",
  },
  letter: {
    paragraphs: [
      "Porcelain Trio is free, and ads pay for it. We keep them out of your way.",
      "A full-screen ad can only appear after you win a level. Never during one, and never after a lost level, a retry or a daily puzzle.",
      "A small banner sits on the home and map screens only, never on a board. Reward videos are always your choice: tap Watch ad for a bonus, or don’t.",
      "A one-time Remove Ads purchase turns off the banner and the between-level ads for good, and the win bonus becomes a free x2. Coins and boosters can all be earned by playing.",
    ],
    signoff: "App Factory",
    role: "The studio that makes Porcelain Trio",
    write: "Write to us",
  },
  footer: {
    menu: "On this site",
    play: "Play a tray",
    house: "The tea house",
    faq: "Questions",
    contact: "Contact",
    language: "Language",
    photoAlt: "The restored Moon Balcony of the tea house at night, lanterns lit under a full moon",
    legal: "Porcelain Trio is a game by App Factory, Singapore.",
  },
  home: "Porcelain Trio home",
};

const zhCn: SiteCopy = {
  hero: "三块一样，就会消失。一款手绘青花瓷风格的三消配对解谜游戏，还有一座等你修复的老茶馆。",
  tabs: { play: "试玩托盘", house: "老茶馆", twists: "玩法变化", screens: "游戏画面", inside: "游戏内容" },
  appStore: "前往 App Store 下载",
  appStoreLabel: "在 App Store 查看 Porcelain Trio",
  play: {
    title: "凑齐三块，修好一间房",
    body: "点一块没有被压住的瓷砖，它会滑进托盘。三块相同就会消除。清掉全部四组，棋盘后面的茶室就会焕然一新。七格放满却没有配对，这一局就结束了。",
    tiles: "瓷砖",
    tray: "托盘",
    room: "茶室",
    again: "重新开始",
    noscript: "这个小棋盘需要 JavaScript。完整游戏可在 App Store 免费下载。",
    status: {
      start: "先点明亮的瓷砖：颜色较暗的还被压着。",
      cleared: "三块相同！茶室又亮了一点。",
      won: "棋盘清空，茶室修好了。游戏里还有 600 个关卡等着你。",
      full: "七块瓷砖都没有配对，托盘满了。要重新开始吗？",
      blocked: "这块还被压着，先清掉上面那块。",
    },
    motif: { teacup: "茶杯", koi: "锦鲤", lantern: "红灯笼", cat: "招财猫" },
    covered: "被压住",
    roomAlt: "老茶馆的茶室，修复进度第 {n} 步（共 6 步）",
  },
  house: {
    title: "五个房间，等你修复",
    intro: "每关获得的星星会一间间修复老茶馆，从积满灰尘的门口，一直到点亮灯笼的赏月阳台。",
    rooms: [
      { key: "entrance", name: "入口", line: "鞋架、蓝色波纹门帘，门口挂着红灯笼。", alt: "修复后的入口：蓝色波纹暖帘、红灯笼和青花瓷瓶" },
      { key: "tea-room", name: "茶室", line: "榻榻米、矮桌、铁壶，壁龛里挂着一幅画。", alt: "修复后的茶室：榻榻米、摆着茶壶和茶杯的矮桌、红色坐垫" },
      { key: "kitchen", name: "厨房", line: "灶火正旺，挂着柿子干，架上摆满青花瓷。", alt: "修复后的厨房：烧着火的灶台、挂起的柿子和摆满青花瓷的架子" },
      { key: "garden-deck", name: "庭院露台", line: "锦鲤池边一把红纸伞，头顶是盛开的花。", alt: "修复后的庭院露台：红纸伞、摆着茶的长凳和花下的锦鲤池" },
      { key: "moon-balcony", name: "赏月阳台", line: "一串纸灯笼、一轮满月，和暮色中的远山。", alt: "修复后的赏月阳台：成串的纸灯笼和远山上的满月" },
    ],
  },
  twists: {
    title: "上手轻松，越玩越烧脑",
    alts: [
      "游戏中的大型分层棋盘，较暗的瓷砖压在明亮的瓷砖下面",
      "棋盘上的倒计时瓷砖，一块显示还剩 2 次，另一块显示 25 次",
      "托盘里有两个碎裂格，显示还要消除几组才能修好",
      "大师冲刺关卡，计时还剩 158 秒",
    ],
  },
  screens: {
    title: "游戏画面",
    video: { values: ["预览", "22 秒", "iPhone", "静音"], caption: "游戏实机画面", label: "播放 App Store 预览视频" },
    strips: [
      { values: ["第 200 关", "超难", "77 块", "标准 2:05"], caption: "凑齐三块，清空棋盘" },
      { values: ["第 180 关", "超难", "58 块", "还剩 2 次"], caption: "抢在倒计时归零前" },
      { values: ["第 240 关", "超难", "78 块", "标准 2:20"], caption: "这一关你能清空吗？" },
      { values: ["厨房", "第 5/6 步", "417 星", "30 星翻新"], caption: "修复一座老茶馆" },
      { values: ["大师 21", "冲刺", "78 块", "158 秒"], caption: "大师关卡，冲刺计时" },
      { values: ["Easy Tea", "Green Tea", "Dark Tea", "每日"], caption: "每天一道新谜题" },
      { values: ["第 200 关", "托盘已满", "复活", "重来"], caption: "托盘满了？复活接着玩" },
    ],
  },
  inside: {
    title: "游戏内容",
    note: "免费游玩，以下内容全部包含在游戏里。",
    groups: [
      {
        name: "关卡",
        items: [
          { name: "关卡，分 30 个章节", value: "600", note: "每一关都经过求解器验证，确保有解" },
          { name: "大师轨道，第 60 关起", value: "120", note: "包含限时冲刺关卡" },
          { name: "困难关卡", value: "每 10 关" },
          { name: "超难关卡", value: "每 20 关" },
        ],
      },
      {
        name: "每天都有",
        items: [
          { name: "每日谜题", value: "第 8 关起" },
          { name: "无尽模式", value: "第 30 关起" },
          { name: "每日奖励与任务", value: "每天" },
          { name: "活动与奖励宝箱", value: "每周" },
        ],
      },
      {
        name: "随时帮你",
        items: [
          { name: "免费撤销", value: "每关 3 次" },
          { name: "洗牌、磁铁、加一格", value: "3 种道具" },
          { name: "托盘满了，继续", value: "+1 格", note: "托盘里最后 3 块瓷砖放回棋盘" },
          { name: "倒计时瓷砖碎了，继续", value: "+5 次" },
          { name: "冲刺关卡，继续", value: "+30 秒" },
        ],
      },
      {
        name: "关于这座茶馆",
        items: [
          { name: "手绘风格瓷绘图案", value: "24", note: "茶杯、锦鲤、灯笼、招财猫、团子、盆景……" },
          { name: "待修复的茶馆房间", value: "5" },
          { name: "账号或注册", value: "不需要" },
          { name: "离线游玩", value: "可以" },
        ],
      },
    ],
    closing: ["每天开放，离线也能玩。", "App Store 免费下载，支持 iPhone 和 iPad。"],
    photoAlt: "一只 15 世纪初的中国青花瓷碗，绘有海浪和莲瓣纹",
  },
  faqTitle: "常见问题",
  faqPhotoAlt: "一只明代青花瓷碗，绘有缠枝花间的凤凰",
  credits: {
    title: "音乐与音效",
    intro: "本游戏的音乐与音效来自以下来源，并按其许可使用。",
    music: "音乐",
    tracks: "曲目",
    sfx: "音效",
    pictures: "本页图片",
    picturesIntro: "游戏美术和画面来自 Porcelain Trio。两只碗是真实的瓷器，仅作氛围展示：",
  },
  letter: {
    paragraphs: [
      "Porcelain Trio 免费游玩，由广告支持。我们尽量不让广告打扰你。",
      "全屏广告只会在你通关后出现。绝不在关卡中，也不会在失败、重试或每日谜题之后出现。",
      "小横幅只出现在主页和地图页，绝不会盖在棋盘上。奖励视频永远由你决定：想要奖励就点「Watch ad」，不想看就不看。",
      "一次性购买「去除广告」，会永久关闭横幅和关卡间的广告，通关奖励也会免费翻倍。金币和道具都可以通过游玩获得。",
    ],
    signoff: "App Factory",
    role: "Porcelain Trio 的开发工作室",
    write: "给我们写信",
  },
  footer: {
    menu: "本站导航",
    play: "试玩托盘",
    house: "老茶馆",
    faq: "常见问题",
    contact: "联系",
    language: "语言",
    photoAlt: "修复后的茶馆赏月阳台，夜里灯笼点亮，满月高挂",
    legal: "Porcelain Trio 是新加坡 App Factory 出品的游戏。",
  },
  home: "Porcelain Trio 首页",
};

const zhTw: SiteCopy = {
  hero: "三塊一樣，就會消失。一款手繪青花瓷風格的三消配對益智遊戲，還有一座等你修復的老茶館。",
  tabs: { play: "試玩托盤", house: "老茶館", twists: "玩法變化", screens: "遊戲畫面", inside: "遊戲內容" },
  appStore: "前往 App Store 下載",
  appStoreLabel: "在 App Store 查看 Porcelain Trio",
  play: {
    title: "湊齊三塊，修好一間房",
    body: "點一塊沒有被壓住的瓷磚，它會滑進托盤。三塊相同就會消除。清掉全部四組，棋盤後面的茶室就會煥然一新。七格放滿卻沒有配對，這一局就結束了。",
    tiles: "瓷磚",
    tray: "托盤",
    room: "茶室",
    again: "重新開始",
    noscript: "這個小棋盤需要 JavaScript。完整遊戲可在 App Store 免費下載。",
    status: {
      start: "先點明亮的瓷磚：顏色較暗的還被壓著。",
      cleared: "三塊相同！茶室又亮了一點。",
      won: "棋盤清空，茶室修好了。遊戲裡還有 600 個關卡等著你。",
      full: "七塊瓷磚都沒有配對，托盤滿了。要重新開始嗎？",
      blocked: "這塊還被壓著，先清掉上面那塊。",
    },
    motif: { teacup: "茶杯", koi: "錦鯉", lantern: "紅燈籠", cat: "招財貓" },
    covered: "被壓住",
    roomAlt: "老茶館的茶室，修復進度第 {n} 步（共 6 步）",
  },
  house: {
    title: "五個房間，等你修復",
    intro: "每關拿到的星星會一間間修復老茶館，從積滿灰塵的門口，一直到點亮燈籠的賞月陽台。",
    rooms: [
      { key: "entrance", name: "入口", line: "鞋櫃、藍色波紋門簾，門口掛著紅燈籠。", alt: "修復後的入口：藍色波紋暖簾、紅燈籠和青花瓷瓶" },
      { key: "tea-room", name: "茶室", line: "榻榻米、矮桌、鐵壺，壁龕裡掛著一幅畫。", alt: "修復後的茶室：榻榻米、擺著茶壺和茶杯的矮桌、紅色坐墊" },
      { key: "kitchen", name: "廚房", line: "爐火正旺，掛著柿子乾，架上擺滿青花瓷。", alt: "修復後的廚房：燒著火的爐灶、掛起的柿子和擺滿青花瓷的架子" },
      { key: "garden-deck", name: "庭院露台", line: "錦鯉池邊一把紅紙傘，頭頂是盛開的花。", alt: "修復後的庭院露台：紅紙傘、擺著茶的長凳和花下的錦鯉池" },
      { key: "moon-balcony", name: "賞月陽台", line: "一串紙燈籠、一輪滿月，和暮色中的遠山。", alt: "修復後的賞月陽台：成串的紙燈籠和遠山上的滿月" },
    ],
  },
  twists: {
    title: "上手輕鬆，越玩越燒腦",
    alts: [
      "遊戲中的大型分層棋盤，較暗的瓷磚壓在明亮的瓷磚下面",
      "棋盤上的倒數瓷磚，一塊顯示還剩 2 次，另一塊顯示 25 次",
      "托盤裡有兩個碎裂格，顯示還要消除幾組才能修好",
      "大師衝刺關卡，計時還剩 158 秒",
    ],
  },
  screens: {
    title: "遊戲畫面",
    video: { values: ["預覽", "22 秒", "iPhone", "靜音"], caption: "遊戲實機畫面", label: "播放 App Store 預覽影片" },
    strips: [
      { values: ["第 200 關", "超難", "77 塊", "標準 2:05"], caption: "湊齊三塊，清空棋盤" },
      { values: ["第 180 關", "超難", "58 塊", "還剩 2 次"], caption: "搶在倒數歸零前" },
      { values: ["第 240 關", "超難", "78 塊", "標準 2:20"], caption: "這一關你清得掉嗎？" },
      { values: ["廚房", "第 5/6 步", "417 星", "30 星翻新"], caption: "修復一座老茶館" },
      { values: ["大師 21", "衝刺", "78 塊", "158 秒"], caption: "大師關卡，衝刺計時" },
      { values: ["Easy Tea", "Green Tea", "Dark Tea", "每日"], caption: "每天一道新謎題" },
      { values: ["第 200 關", "托盤已滿", "復活", "重來"], caption: "托盤滿了？復活繼續玩" },
    ],
  },
  inside: {
    title: "遊戲內容",
    note: "免費遊玩，以下內容全部包含在遊戲裡。",
    groups: [
      {
        name: "關卡",
        items: [
          { name: "關卡，分 30 個章節", value: "600", note: "每一關都經過解題程式驗證，確保有解" },
          { name: "大師關卡，第 60 關起", value: "120", note: "包含限時衝刺關" },
          { name: "困難關卡", value: "每 10 關" },
          { name: "超難關卡", value: "每 20 關" },
        ],
      },
      {
        name: "每天都有",
        items: [
          { name: "每日謎題", value: "第 8 關起" },
          { name: "無盡模式", value: "第 30 關起" },
          { name: "每日獎勵與任務", value: "每天" },
          { name: "活動與獎勵寶箱", value: "每週" },
        ],
      },
      {
        name: "隨時幫你",
        items: [
          { name: "免費復原", value: "每關 3 次" },
          { name: "洗牌、磁鐵、加一格", value: "3 種道具" },
          { name: "托盤滿了，繼續", value: "+1 格", note: "托盤裡最後 3 塊瓷磚放回棋盤" },
          { name: "倒數瓷磚碎了，繼續", value: "+5 次" },
          { name: "衝刺關，繼續", value: "+30 秒" },
        ],
      },
      {
        name: "關於這座茶館",
        items: [
          { name: "手繪風格瓷繪圖案", value: "24", note: "茶杯、錦鯉、燈籠、招財貓、糰子、盆景……" },
          { name: "待修復的茶館房間", value: "5" },
          { name: "帳號或註冊", value: "不需要" },
          { name: "離線遊玩", value: "可以" },
        ],
      },
    ],
    closing: ["每天開放，離線也能玩。", "App Store 免費下載，支援 iPhone 與 iPad。"],
    photoAlt: "一只 15 世紀初的中國青花瓷碗，繪有海浪和蓮瓣紋",
  },
  faqTitle: "常見問題",
  faqPhotoAlt: "一只明代青花瓷碗，繪有纏枝花間的鳳凰",
  credits: {
    title: "音樂與音效",
    intro: "本遊戲的音樂與音效來自以下來源，並依其授權使用。",
    music: "音樂",
    tracks: "曲目",
    sfx: "音效",
    pictures: "本頁圖片",
    picturesIntro: "遊戲美術和畫面來自 Porcelain Trio。兩只碗是真實的瓷器，僅作氛圍展示：",
  },
  letter: {
    paragraphs: [
      "Porcelain Trio 免費遊玩，由廣告支持。我們盡量不讓廣告打擾你。",
      "全螢幕廣告只會在你過關後出現。絕不在關卡中，也不會在失敗、重試或每日謎題之後出現。",
      "小橫幅只出現在主頁和地圖頁，絕不會蓋在棋盤上。獎勵影片永遠由你決定：想要獎勵就點「Watch ad」，不想看就不看。",
      "一次性購買「移除廣告」，會永久關閉橫幅和關卡之間的廣告，過關獎勵也會免費加倍。金幣和道具都可以透過遊玩取得。",
    ],
    signoff: "App Factory",
    role: "Porcelain Trio 的開發工作室",
    write: "寫信給我們",
  },
  footer: {
    menu: "本站導覽",
    play: "試玩托盤",
    house: "老茶館",
    faq: "常見問題",
    contact: "聯絡",
    language: "語言",
    photoAlt: "修復後的茶館賞月陽台，夜裡燈籠點亮，滿月高掛",
    legal: "Porcelain Trio 是新加坡 App Factory 出品的遊戲。",
  },
  home: "Porcelain Trio 首頁",
};

export const COPY: Record<Locale, SiteCopy> = { en, "zh-cn": zhCn, "zh-tw": zhTw };

/** Real porcelain shown as atmosphere (both CC0, credited on the landing). */
export const FOUND_PICTURES = [
  {
    src: "/apps/tile-trio/met-bowl-waves.webp",
    width: 1920,
    height: 1440,
    title: "Bowl with pomegranates, lotus scrolls, and chrysanthemum petals",
    maker: "China, early 15th century",
    source: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/art/collection/search/44745",
    licence: "CC0",
  },
  {
    src: "/apps/tile-trio/aic-phoenix-bowl.webp",
    width: 1200,
    height: 795,
    title: "One of a Pair of Blue and White ‘Phoenix’ Bowls",
    maker: "China, Ming dynasty",
    source: "Art Institute of Chicago",
    url: "https://www.artic.edu/artworks/94181",
    licence: "CC0",
  },
] as const;
