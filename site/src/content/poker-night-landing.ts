// Poker Night's landing page copy (site redesign 2026-10-15, on the v2.0 app
// released 2026-10-13). The page lives in components/poker-night/landing.tsx;
// app-wide copy (store name, FAQ, trust, privacy) stays in content/poker-night.ts.
// Facts come from the live App Store listing (id 6788786222: description and
// 2.0 release notes) and the app's fastlane metadata. Videos are the
// owner-approved 2.0 set (approved 2026-10-11: HQ marketing renders, the /brag
// cut and the App Store previews), transcoded for the web by
// scripts/poker-night-videos.py into poker-night-videos.json. Every one of
// them stays on the page and nothing downloads until play.
//
// Same hard rule as poker-night.ts: no wagering vocabulary (bet/betting,
// gamble, casino, real money; zh 赌/下注/押). Poker Night keeps score and
// teaches odds; it never moves money.

import type { Locale } from "@/lib/i18n";
import videoFiles from "./poker-night-videos.json";

export type PnVideoId = keyof typeof videoFiles;
type VideoFile = { src: string; poster: string; width: number; height: number; duration: number; bytes: number };
type VideoFiles = { v?: Record<"en" | "zh", VideoFile>; h?: Record<"en" | "zh", VideoFile> };

export function pnVideoFiles(id: PnVideoId, locale: Locale): { v?: VideoFile; h?: VideoFile } {
  const f = videoFiles[id] as VideoFiles;
  const k = locale === "en" ? "en" : "zh";
  return { v: f.v?.[k], h: f.h?.[k] };
}

export interface PnVideoCopy { id: PnVideoId; title: string; body: string }
export interface PnShot { src: string; alt: string }

export interface PnLanding {
  hero: {
    /** The h1 runs lead + [the results-card slot] + tail (the slot is decorative). */
    lead: string;
    tail: string;
    slot: PnShot;
    body: string;
    cta: string;
    note: string;
    videoTitle: string;
    videoBody: string;
    videoLabel: string;
    soundOn: string;
    soundOff: string;
  };
  night: {
    title: string;
    stages: { name: string; time: string; clause: string; grow: number }[];
  };
  live: {
    title: string;
    intro: string;
    inputLabel: string;
    examplesLabel: string;
    examples: { label: string; line: string }[];
    /** Currency as the app shows it in this locale, and its chip value. */
    money: { prefix: string; decimals: number; chipsPerUnit: number; chips: string };
    balanced: string;
    offBy: string; // {amount}
    players: string; // {n}
    playersOne: string;
    transfers: string; // {n}
    transfersOne: string;
    /** Read by screen readers between payer and payee. */
    pays: string;
    unreadable: string; // {text}
    tooFew: string;
    note: string;
  };
  host: { title: string; intro: string; items: { title: string; body: string; shots: PnShot[] }[] };
  pay: {
    title: string;
    line: string;
    chips: string;
    copyLine: string;
    detailsLabel: string;
    details: { label: string; value: string }[];
    copyAll: string;
    footnote: string;
  };
  study: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    shots: PnShot[];
    video: PnVideoCopy;
    guideLink: string;
  };
  previews: { title: [string, string]; note: string; items: PnVideoCopy[] };
  watch: { title: string; intro: string; cuts: PnVideoCopy[]; storiesTitle: string; storiesIntro: string; stories: PnVideoCopy[] };
  price: {
    lead: string;
    before: string;
    amount: string;
    after: string;
    includes: string;
    cta: string;
    free: { title: string; items: string[] };
    pro: { title: string; items: string[] };
    note: string;
  };
  faqTitle: string;
  more: { title: string; intro: string; tiltfree: string; thinking: string; guide: string };
  play: string;
  seconds: string;
  nav: { night: string; study: string; watch: string; price: string };
}

const en: PnLanding = {
  hero: {
    lead: "Poker Night,",
    tail: "settled.",
    slot: { src: "/apps/poker-night/slot-card-en.jpg", alt: "Poker Night results card: tonight's top, Alex +$25.00, stamped Settled" },
    body:
      "Poker Night keeps the ledger, runs the blinds clock and settles who pays whom in the fewest transfers. Between nights, it teaches the odds.",
    cta: "Get it on the App Store",
    note: "Free on iPhone and iPad. No ads, no account. Android is on its way.",
    videoTitle: "Settle a home game in seconds",
    videoBody: "The lead story: count to Balanced, the fewest transfers and the results card, in 30 seconds.",
    videoLabel: "Video: settle a home game in seconds with Poker Night",
    soundOn: "Sound on",
    soundOff: "Mute",
  },
  night: {
    title: "One night, start to settled",
    stages: [
      { name: "Start", time: "Two minutes", clause: "First, seat your regulars, pick cash game or tournament and set what a buy-in is worth.", grow: 16 },
      { name: "Play", time: "All night", clause: "Then one tap per rebuy, with undo, while the blinds clock runs on the Lock Screen.", grow: 52 },
      { name: "Count", time: "One minute", clause: "Next, type every stack once. The balance check says Balanced, or exactly how far off.", grow: 16 },
      { name: "Settle", time: "Seconds", clause: "Last, the fewest transfers, each payee's details to copy and a card for the group chat.", grow: 16 },
    ],
  },
  live: {
    title: "Who owes who? Type the night.",
    intro: "Each player's result, separated by commas. The answer is the arithmetic Poker Night does at the table.",
    inputLabel: "Tonight's results: a name and a plus or minus amount for each player",
    examplesLabel: "Try another night",
    examples: [
      { label: "Sunday at Alex's", line: "Alex +25, Mia +20, Nick -1, Sam -8, David -36" },
      { label: "Two pairs cancel out", line: "Jo +40, Kai -40, Lee +15, Max -10, Ana -5" },
      { label: "Eight at the table", line: "Rae +62, Ben +18, Cam +9, Dee -4, Eli -15, Fin -20, Gus -21, Hal -29" },
      { label: "A count that's off", line: "Alex +30, Mia -12, Sam -15" },
    ],
    money: { prefix: "$", decimals: 2, chipsPerUnit: 10, chips: "chips" },
    balanced: "Balanced",
    offBy: "Off by {amount}. Recount before anyone leaves.",
    players: "{n} players",
    playersOne: "1 player",
    transfers: "{n} transfers",
    transfersOne: "1 transfer",
    pays: "pays",
    unreadable: "Couldn't read “{text}”. Write a name, then an amount like +25 or -8.",
    tooFew: "Add at least two players with a result.",
    note: "In the app, every line also shows chips (here 200 chips = $20), banker mode is one switch, and Pay copies the payee's saved details.",
  },
  host: {
    title: "Everything the host does, on one phone",
    intro: "Money and chips side by side on every row, total and transfer, from the first buy-in to the last payment.",
    items: [
      {
        title: "Buy-ins, rebuys and a count that checks itself",
        body: "Set what a buy-in is worth once (say 200 chips = $20), then tap once per rebuy, with undo. Type each stack at the end and the footer says Balanced, or exactly how far off the count is.",
        shots: [{ src: "/apps/poker-night/v2/en/04-live.jpg", alt: "Live session: buy-ins and chip counts in money and chips, with the balance check" }],
      },
      {
        title: "A blinds clock on the Lock Screen",
        body: "Ready-made or custom structures with breaks and a chime each level. On iPhone a Live Activity keeps the level, blinds and countdown in the Dynamic Island, with widgets for tonight's game.",
        shots: [{ src: "/apps/poker-night/v2/en/02-timer.jpg", alt: "Blinds timer at Level 1, 25/50, with the countdown in the Dynamic Island" }],
      },
      {
        title: "Who pays whom, in the fewest transfers",
        body: "Settle-up finds the fewest payments in dollars and chips, or runs banker mode. Pay copies the payee's details; it never opens a payment app. Settled too soon? Undo it.",
        shots: [{ src: "/apps/poker-night/v2/en/01-settle.jpg", alt: "Settle up in seconds: who pays whom, with each payee's Venmo and Zelle details ready to copy" }],
      },
      {
        title: "A results card for the group chat",
        body: "The winner, the standings and every transfer with its payment details, as one image. Copy it, save it or share it before the last player finds their coat.",
        shots: [{ src: "/apps/poker-night/v2/en/03-share-card.jpg", alt: "Results card for the group chat: the winner, the standings and who pays whom" }],
      },
      {
        title: "Host tools, tournaments and shared costs",
        body: "Random seats and a high-card draw for the button, chip sets whose starting stacks add up, tournament entries, bust-outs and payouts, a dealer's choice wheel, and pizza or the table fee split before you add it.",
        shots: [{ src: "/apps/poker-night/v2/en/08-seats.jpg", alt: "Host tools: random seats and a high-card draw for the button" }],
      },
      {
        title: "Leaderboard, seasons and Wrapped",
        body: "Net results, wins, streaks and biggest nights by month, season or all time, 16 badges, player insights, and your group's year told as a story that ends on the MVP.",
        shots: [
          { src: "/apps/poker-night/v2/en/05-leaderboard.jpg", alt: "Leaderboard by month, season or all time with wins and streaks" },
          { src: "/apps/poker-night/v2/en/06-wrapped.jpg", alt: "Wrapped: the group's season as a story, ending on the MVP card" },
        ],
      },
    ],
  },
  pay: {
    title: "Pay",
    line: "David → Alex $25.00",
    chips: "250 chips",
    copyLine: "Copy this line",
    detailsLabel: "Payment details",
    details: [
      { label: "Venmo", value: "@alex" },
      { label: "Zelle", value: "555-0100" },
    ],
    copyAll: "Copy all",
    footnote: "Poker Night never moves money. Copy a payment detail and paste it into your own payment app.",
  },
  study: {
    title: "Sharper between home games",
    intro: "A poker odds calculator and six one-handed trainers in the same app as your ledger: the math you need at the table, a few questions at a time.",
    items: [
      { title: "Equity calculator", body: "Hold'em, Omaha and ESG, hand against hand or a range, up to three boards, with a card keyboard made for poker: rank, then suit." },
      { title: "Pot odds, outs and implied odds", body: "Plus fold equity, MDF, SPR and ICM, each with a plain verdict, call or fold, and the numbers behind it." },
      { title: "Six one-handed trainers", body: "Equity, pot odds, outs, bluffs and MDF, fold equity and more. 10 free questions a day, and every miss explains itself." },
      { title: "Ranges, spots and a hand log", body: "A range editor with text and sliders, 40+ common situations with their equities, saved spots, and a hand log you fill in seconds." },
    ],
    shots: [
      { src: "/apps/poker-night/v2/en/07-equity.jpg", alt: "Poker equity calculator: A♠K♠ against a tight range in Hold'em, 57.9% to 42.1%" }, // taste-skill-ignore: card suits in the screen's own text
      { src: "/apps/poker-night/v2/en/09-trainer.jpg", alt: "Study trainers: equity, pot odds, outs, bluff and MDF, and fold equity drills" },
    ],
    video: { id: "b5-study", title: "Get sharper between home games", body: "Equity on the card keyboard, a pot odds verdict, a 9-out flush draw and a trainer miss that explains itself." },
    guideLink: "Read the home-game guide: rules, hand rankings and a poker glossary",
  },
  previews: {
    title: ["Thirty", "seconds"],
    note: "The three previews from the App Store listing. Tap one to play it with sound.",
    items: [
      { id: "preview-store", title: "The night in six screens", body: "Settle-up, rebuys, chip count, blinds clock, payment details, results card." },
      { id: "preview-brag", title: "Start to settled", body: "The night as a title sequence, cut on the beat." },
      { id: "preview-brag2", title: "End of the night: who pays whom?", body: "Headlines over the real screens, ending on the results card." },
    ],
  },
  watch: {
    title: "See it at the table",
    intro: "Real app footage from a demo night. No actors, no mock-ups.",
    cuts: [
      { id: "b4-night", title: "The whole night, start to settled", body: "Start, blinds, count, settle, share and Study in 24 seconds." },
      { id: "b1-settle", title: "Who owes who? Settled in seconds", body: "Count to Balanced, the fewest transfers, the Pay sheet and the results card." },
      { id: "b3-clock", title: "A real blinds clock for the home game", body: "Level 1 at 25/50, the Live Activity in the Dynamic Island, then Level 2." },
      { id: "b2-card", title: "Who's up tonight? One card says it", body: "The results card for the group chat, the all-time leaderboard and Wrapped's MVP." },
      { id: "brag-night", title: "5 players, $140 in play, 3 payments", body: "One night from the first rebuy to the share card." },
    ],
    storiesTitle: "Narrated walkthroughs",
    storiesIntro: "Short explainers with voice-over, for when you want the why as well as the what.",
    stories: [
      { id: "pn4-walkthrough", title: "The whole night in one app", body: "A one-minute tour of a full home game, from seating players to the results card." },
      { id: "pn2-card", title: "Who's up tonight: the results card", body: "The image that ends the night: standings, transfers and payment details." },
      { id: "pn3-clock", title: "A real blinds clock for the home game", body: "Structures, breaks, the level chime and the Lock Screen countdown." },
    ],
  },
  price: {
    lead: "Free to host.",
    before: "Pro is",
    amount: "US$7.99",
    after: "once.",
    includes: "The ledger, settle-up, results card, host tools and every odds calculator are free for good. Pro is one purchase, yours forever, with no subscription.",
    cta: "Download free",
    free: { title: "Free", items: ["The full ledger, rebuys and chip count", "Settle-up, payment details and the results card", "3 blinds timer nights", "The equity calculator and every odds tool", "10 trainer questions a day", "Host tools, leaderboard and the home-game guide"] },
    pro: { title: "Poker Night Pro", items: ["Unlimited blinds timer nights", "Unlimited trainer questions with stats and weak spots", "Past and custom seasons, deep insights, the full Wrapped", "GTO presets, ESG mode, saved spots and hand replays", "Custom payouts with an ICM deal calculator, CSV export"] },
    note: "No ads. No account. No subscription. Bought Remove Ads before? You already have Pro.",
  },
  faqTitle: "Questions from the table",
  more: {
    title: "More for the poker table",
    intro: "Poker Night is for the night itself. Two sister projects help with the hands you play.",
    tiltfree: "TiltFree: a hand journal for live players, to review the hands you played.",
    thinking: "thinking.poker: free poker study tools in your browser, from equity to preflop ranges.",
    guide: "The home-game guide: 17 short articles on rules, hand rankings, hosting and etiquette.",
  },
  play: "Play",
  seconds: "s",
  nav: { night: "The night", study: "Study", watch: "Watch", price: "Price" },
};

const zhCn: PnLanding = {
  hero: {
    lead: "扑克之夜，",
    tail: "几秒算清。",
    slot: { src: "/apps/poker-night/slot-card-zh.jpg", alt: "扑克之夜战报卡片：今晚大赢家小明 +¥125.00，盖着「已结清」章" },
    body: "扑克之夜帮你记账、跑盲注计时，散场用最少笔数算清谁付谁。牌局之间，还能练胜率和底池赔率。",
    cta: "在 App Store 下载",
    note: "iPhone 和 iPad 免费下载。无广告，无需账号。Android 版即将推出。",
    videoTitle: "家庭牌局，几秒算清",
    videoBody: "主打短片：清点到已平账、最少笔数转账和战报卡片，30 秒看完。",
    videoLabel: "视频：用扑克之夜几秒算清家庭牌局",
    soundOn: "打开声音",
    soundOff: "静音",
  },
  night: {
    title: "一晚牌局，从开局到结算",
    stages: [
      { name: "开局", time: "两分钟", clause: "先让常客上桌，选现金局或锦标赛，设定一手买入值多少。", grow: 16 },
      { name: "打牌", time: "一整晚", clause: "然后每次补码点一下、可撤销，盲注计时在锁屏上走。", grow: 52 },
      { name: "清点", time: "一分钟", clause: "接着每人码量输入一次，对账显示「已平账」，或差多少。", grow: 16 },
      { name: "结算", time: "几秒", clause: "最后，最少笔数转账，复制收款信息，战报卡片发到群里。", grow: 16 },
    ],
  },
  live: {
    title: "谁该付谁？输入今晚战绩",
    intro: "每位玩家的输赢，用逗号分开。下面的答案，就是扑克之夜在牌桌上做的算术。",
    inputLabel: "今晚的战绩：每位玩家写名字和正负金额",
    examplesLabel: "换一晚试试",
    examples: [
      { label: "周日小明家", line: "小明 +125，嘉嘉 +100，Nick -5，阿伟 -40，老陈 -180" },
      { label: "两两对冲", line: "阿杰 +200，小凯 -200，老李 +75，大毛 -50，安安 -25" },
      { label: "八人一桌", line: "小雨 +310，阿斌 +90，小卡 +45，迪迪 -20，老易 -75，阿凡 -100，老顾 -105，阿豪 -145" },
      { label: "码量对不上", line: "小明 +150，嘉嘉 -60，老陈 -75" },
    ],
    money: { prefix: "¥", decimals: 2, chipsPerUnit: 2, chips: "码" },
    balanced: "已平账",
    offBy: "差 {amount}，散场前再数一遍。",
    players: "{n} 位玩家",
    playersOne: "1 位玩家",
    transfers: "{n} 笔转账",
    transfersOne: "1 笔转账",
    pays: "付给",
    unreadable: "看不懂「{text}」。请写名字再写金额，例如 +125 或 -40。",
    tooFew: "至少要有两位玩家有输赢。",
    note: "在 App 里，每一行还会显示筹码（这里 200 码 = ¥100），一人代收代付只要一个开关，点「支付」复制收款人保存好的收款信息。",
  },
  host: {
    title: "主持一局，一部手机就够",
    intro: "每一行、合计和转账都金额与筹码并列显示，从第一笔买入到最后一笔转账。",
    items: [
      {
        title: "买入、补码，还有会自己对账的清点",
        body: "先设定一手买入值多少（例如 200 码 = ¥100），之后每次补码点一下，可撤销。散场时每人码量输入一次，底部直接显示「已平账」，或差多少。",
        shots: [{ src: "/apps/poker-night/v2/zh/04-live.jpg", alt: "进行中：买入与码量金额筹码并列，附账目核对" }],
      },
      {
        title: "锁屏上的盲注计时",
        body: "内置结构也可自定义，含休息，每级升盲有提示音。iPhone 上的实时活动把级别、盲注和倒计时放进灵动岛，还有今晚牌局的小组件。",
        shots: [{ src: "/apps/poker-night/v2/zh/02-timer.jpg", alt: "盲注计时器第 1 级 25/50，倒计时显示在灵动岛" }],
      },
      {
        title: "谁付谁，最少笔数",
        body: "自动算出最少笔数的转账，金额与筹码并列，也可选一人代收代付。「支付」只复制收款人的收款信息，从不打开任何支付应用。结算早了？可以撤销。",
        shots: [{ src: "/apps/poker-night/v2/zh/01-settle.jpg", alt: "几秒结算：谁付谁，附收款人的收款信息，一键复制" }],
      },
      {
        title: "发到群里的战报卡片",
        body: "赢家、排名和每一笔转账连同收款信息，一张图说清。最后一位牌友还没穿好外套，你已经复制、保存或分享出去了。",
        shots: [{ src: "/apps/poker-night/v2/zh/03-share-card.jpg", alt: "发群里的战报卡片：赢家、排名与谁付谁" }],
      },
      {
        title: "主持工具、锦标赛与公摊费用",
        body: "随机座位与比大小定庄，起始筹码始终等于买入的筹码套装，锦标赛报名、淘汰顺序与奖金分配，选游戏转盘，外卖、小费和场地费也能一起分摊。",
        shots: [{ src: "/apps/poker-night/v2/zh/08-seats.jpg", alt: "主持工具：随机座位与比大小定庄" }],
      },
      {
        title: "排行榜、赛季与年度回顾",
        body: "按月、赛季或全部时间看净结果、胜场、连胜与最大的一晚，16 枚徽章、玩家洞察，还有以 MVP 收尾的牌友年度故事。",
        shots: [
          { src: "/apps/poker-night/v2/zh/05-leaderboard.jpg", alt: "按月、赛季或全部时间的排行榜，含胜场与连胜" },
          { src: "/apps/poker-night/v2/zh/06-wrapped.jpg", alt: "年度回顾：把一季牌局做成故事，以 MVP 卡片收尾" },
        ],
      },
    ],
  },
  pay: {
    title: "支付",
    line: "老陈 → 小明 ¥125.00",
    chips: "250 码",
    copyLine: "复制这一笔",
    detailsLabel: "收款信息",
    details: [
      { label: "微信", value: "xiaoming_88" },
      { label: "支付宝", value: "138-0000-0000" },
    ],
    copyAll: "全部复制",
    footnote: "扑克之夜从不经手资金。复制收款信息，粘贴到你自己的支付应用里即可。",
  },
  study: {
    title: "牌局之间，把牌练好",
    intro: "胜率计算器和六种单手训练，和你的账本在同一个 App 里：牌桌上要用的数学，每天几道题慢慢练熟。",
    items: [
      { title: "胜率计算器", body: "德州、奥马哈与 ESG，手牌对手牌或对范围，最多三块牌面，配扑克专用选牌键盘：先点点数，再点花色。" },
      { title: "底池赔率、补牌与隐含赔率", body: "还有弃牌率、最小防守频率、筹码底池比和 ICM，每项都给出直白结论（跟注还是弃牌）和背后的数字。" },
      { title: "六种单手训练", body: "胜率、底池赔率、补牌、诈唬与最小防守频率、弃牌率等。每天 10 题免费，答错会讲清原因。" },
      { title: "范围、局面与牌谱", body: "文字与滑杆两种范围编辑，40 多个常见局面及其胜率，可保存局面，几秒记下一手牌。" },
    ],
    shots: [
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "德州扑克胜率计算器：A♠K♠ 对紧手范围，57.9% 对 42.1%" }, // taste-skill-ignore: card suits in the screen's own text
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "学习训练：胜率、底池赔率、补牌、诈唬与最小防守频率、弃牌率" },
    ],
    video: { id: "b5-study", title: "牌局之间，把牌练好", body: "选牌键盘算胜率、底池赔率给出结论、9 张补牌的同花听牌，还有一道会讲清原因的训练题。" },
    guideLink: "阅读家庭牌局指南：规则、牌型与德扑术语表",
  },
  previews: {
    title: ["三十秒", "看一晚"],
    note: "App Store 页面上的三段预览视频。点一下，带声音播放。",
    items: [
      { id: "preview-store", title: "六个画面看完一晚", body: "结算、补码、清点、盲注计时、收款信息、战报卡片。" },
      { id: "preview-brag", title: "从开局到结算", body: "片头风格的一晚，卡着节拍剪辑。" },
      { id: "preview-brag2", title: "牌局散场，谁该付谁？", body: "真实画面配大标题，以战报卡片收尾。" },
    ],
  },
  watch: {
    title: "牌桌上的样子",
    intro: "全部是演示牌局里的真实 App 画面，没有演员，也没有效果图。",
    cuts: [
      { id: "b4-night", title: "整晚牌局，从开局到结算", body: "开局、盲注、清点、结算、分享和学习，24 秒看完。" },
      { id: "b1-settle", title: "谁该付谁？几秒算清", body: "清点到已平账，最少笔数转账，支付面板和战报卡片。" },
      { id: "b3-clock", title: "家庭局也有专业盲注计时", body: "第 1 级 25/50，灵动岛实时活动，然后升到第 2 级。" },
      { id: "b2-card", title: "今晚谁赢？一张战报说清", body: "发群里的战报卡片、历史排行榜和年度回顾的 MVP。" },
      { id: "brag-night", title: "5 位玩家，桌上 ¥700，3 笔转账", body: "一晚牌局，从第一次补码到战报卡片。" },
    ],
    storiesTitle: "带旁白的完整讲解",
    storiesIntro: "有配音的短讲解，不只看怎么用，也讲清为什么。",
    stories: [
      { id: "pn4-walkthrough", title: "一个 App 搞定整晚", body: "一分钟走完一场完整的家庭局，从上桌到战报卡片。" },
      { id: "pn2-card", title: "今晚谁赢了：战报卡片", body: "收尾的那张图：排名、转账和收款信息。" },
      { id: "pn3-clock", title: "家庭局也有专业盲注计时", body: "盲注结构、休息、升盲提示音和锁屏倒计时。" },
    ],
  },
  price: {
    lead: "组局免费，",
    before: "Pro",
    amount: "7.99 美元",
    after: "买断。",
    includes: "账本、结算、战报卡片、主持工具和全部胜率计算器永久免费。Pro 是一次性购买，永久拥有，不是订阅。",
    cta: "免费下载",
    free: { title: "免费", items: ["完整账本、补码与清点", "结算、收款信息与战报卡片", "3 晚盲注计时", "胜率计算器与全部赔率工具", "每天 10 道训练题", "主持工具、排行榜与家庭牌局指南"] },
    pro: { title: "扑克之夜 Pro", items: ["不限次数的盲注计时", "不限题数的训练，附统计与薄弱点", "往季与自定义赛季、深度洞察、完整年度回顾", "GTO 预设、ESG 模式、保存局面与牌谱回放", "自定义奖金与 ICM 分配计算器、CSV 导出"] },
    note: "无广告，无需账号，无订阅。买过「移除广告」？你已拥有 Pro。",
  },
  faqTitle: "牌桌上常问的问题",
  more: {
    title: "牌桌之外，还有这些",
    intro: "扑克之夜管好这一晚。另外两个姊妹项目，帮你琢磨打过的牌。",
    tiltfree: "TiltFree：专为现场玩家设计的手牌记录本，复盘你打过的牌。",
    thinking: "thinking.poker：在浏览器里免费使用的德扑学习工具，从胜率到翻前范围。",
    guide: "家庭牌局指南：17 篇关于规则、牌型、组局与礼仪的短文。",
  },
  play: "播放",
  seconds: "秒",
  nav: { night: "一晚流程", study: "学习", watch: "视频", price: "价格" },
};

// zh-TW: Traditional characters, Taiwan phrasing (帳/資訊/影片/鎖定畫面), NT$ examples.
const zhTw: PnLanding = {
  hero: {
    lead: "撲克之夜，",
    tail: "幾秒算清。",
    slot: { src: "/apps/poker-night/slot-card-zh.jpg", alt: "撲克之夜戰報卡片：今晚大贏家小明 +¥125.00，蓋著「已結清」章" },
    body: "撲克之夜幫你記帳、跑盲注計時，散場用最少筆數算清誰付誰。牌局之間，還能練勝率和底池賠率。",
    cta: "在 App Store 下載",
    note: "iPhone 和 iPad 免費下載。無廣告，無需帳號。Android 版即將推出。",
    videoTitle: "家庭牌局，幾秒算清",
    videoBody: "主打短片：清點到已平帳、最少筆數轉帳和戰報卡片，30 秒看完。",
    videoLabel: "影片：用撲克之夜幾秒算清家庭牌局",
    soundOn: "開啟聲音",
    soundOff: "靜音",
  },
  night: {
    title: "一晚牌局，從開局到結算",
    stages: [
      { name: "開局", time: "兩分鐘", clause: "先讓常客上桌，選現金局或錦標賽，設定一手買入值多少。", grow: 16 },
      { name: "打牌", time: "一整晚", clause: "然後每次補碼點一下、可復原，盲注計時在鎖定畫面上走。", grow: 52 },
      { name: "清點", time: "一分鐘", clause: "接著每人碼量輸入一次，對帳顯示「已平帳」，或差多少。", grow: 16 },
      { name: "結算", time: "幾秒", clause: "最後，最少筆數轉帳，複製收款資訊，戰報卡片發到群組。", grow: 16 },
    ],
  },
  live: {
    title: "誰該付誰？輸入今晚戰績",
    intro: "每位玩家的輸贏，用逗號分開。下面的答案，就是撲克之夜在牌桌上做的算術。",
    inputLabel: "今晚的戰績：每位玩家寫名字和正負金額",
    examplesLabel: "換一晚試試",
    examples: [
      { label: "週日小明家", line: "小明 +500，嘉嘉 +400，Nick -20，阿偉 -160，老陳 -720" },
      { label: "兩兩對沖", line: "阿傑 +800，小凱 -800，老李 +300，大毛 -200，安安 -100" },
      { label: "八人一桌", line: "小雨 +1240，阿斌 +360，小卡 +180，迪迪 -80，老易 -300，阿凡 -400，老顧 -420，阿豪 -580" },
      { label: "碼量對不上", line: "小明 +600，嘉嘉 -240，老陳 -300" },
    ],
    money: { prefix: "NT$", decimals: 0, chipsPerUnit: 0.4, chips: "碼" },
    balanced: "已平帳",
    offBy: "差 {amount}，散場前再數一遍。",
    players: "{n} 位玩家",
    playersOne: "1 位玩家",
    transfers: "{n} 筆轉帳",
    transfersOne: "1 筆轉帳",
    pays: "付給",
    unreadable: "看不懂「{text}」。請寫名字再寫金額，例如 +500 或 -160。",
    tooFew: "至少要有兩位玩家有輸贏。",
    note: "在 App 裡，每一行還會顯示籌碼（這裡 200 碼 = NT$500），一人代收代付只要一個開關，點「支付」複製收款人儲存好的收款資訊。",
  },
  host: {
    title: "主持一局，一支手機就夠",
    intro: "每一行、合計和轉帳都金額與籌碼並列顯示，從第一筆買入到最後一筆轉帳。",
    items: [
      {
        title: "買入、補碼，還有會自己對帳的清點",
        body: "先設定一手買入值多少（例如 200 碼 = NT$500），之後每次補碼點一下，可復原。散場時每人碼量輸入一次，底部直接顯示「已平帳」，或差多少。",
        shots: [{ src: "/apps/poker-night/v2/zh/04-live.jpg", alt: "進行中：買入與碼量金額籌碼並列，附帳目核對" }],
      },
      {
        title: "鎖定畫面上的盲注計時",
        body: "內建結構也可自訂，含休息，每級升盲有提示音。iPhone 上的即時動態把級別、盲注和倒數放進動態島，還有今晚牌局的小工具。",
        shots: [{ src: "/apps/poker-night/v2/zh/02-timer.jpg", alt: "盲注計時器第 1 級 25/50，倒數顯示在動態島" }],
      },
      {
        title: "誰付誰，最少筆數",
        body: "自動算出最少筆數的轉帳，金額與籌碼並列，也可選一人代收代付。「支付」只複製收款人的收款資訊，從不開啟任何支付 App。結算早了？可以復原。",
        shots: [{ src: "/apps/poker-night/v2/zh/01-settle.jpg", alt: "幾秒結算：誰付誰，附收款人的收款資訊，一鍵複製" }],
      },
      {
        title: "發到群組的戰報卡片",
        body: "贏家、排名和每一筆轉帳連同收款資訊，一張圖說清。最後一位牌友還沒穿好外套，你已經複製、儲存或分享出去了。",
        shots: [{ src: "/apps/poker-night/v2/zh/03-share-card.jpg", alt: "發群組的戰報卡片：贏家、排名與誰付誰" }],
      },
      {
        title: "主持工具、錦標賽與公攤費用",
        body: "隨機座位與比大小定莊，起始籌碼始終等於買入的籌碼套組，錦標賽報名、淘汰順序與獎金分配，選遊戲轉盤，外送、小費和場地費也能一起分攤。",
        shots: [{ src: "/apps/poker-night/v2/zh/08-seats.jpg", alt: "主持工具：隨機座位與比大小定莊" }],
      },
      {
        title: "排行榜、賽季與年度回顧",
        body: "按月、賽季或全部時間看淨結果、勝場、連勝與最大的一晚，16 枚徽章、玩家洞察，還有以 MVP 收尾的牌友年度故事。",
        shots: [
          { src: "/apps/poker-night/v2/zh/05-leaderboard.jpg", alt: "按月、賽季或全部時間的排行榜，含勝場與連勝" },
          { src: "/apps/poker-night/v2/zh/06-wrapped.jpg", alt: "年度回顧：把一季牌局做成故事，以 MVP 卡片收尾" },
        ],
      },
    ],
  },
  pay: {
    title: "支付",
    line: "老陳 → 小明 NT$500",
    chips: "200 碼",
    copyLine: "複製這一筆",
    detailsLabel: "收款資訊",
    details: [
      { label: "LINE Pay", value: "xiaoming_88" },
      { label: "街口支付", value: "0912-000-000" },
    ],
    copyAll: "全部複製",
    footnote: "撲克之夜從不經手資金。複製收款資訊，貼到你自己的支付 App 裡即可。",
  },
  study: {
    title: "牌局之間，把牌練好",
    intro: "勝率計算器和六種單手訓練，和你的帳本在同一個 App 裡：牌桌上要用的數學，每天幾道題慢慢練熟。",
    items: [
      { title: "勝率計算器", body: "德州、奧馬哈與 ESG，手牌對手牌或對範圍，最多三塊牌面，配撲克專用選牌鍵盤：先點點數，再點花色。" },
      { title: "底池賠率、補牌與隱含賠率", body: "還有棄牌率、最小防守頻率、籌碼底池比和 ICM，每項都給出直白結論（跟注還是棄牌）和背後的數字。" },
      { title: "六種單手訓練", body: "勝率、底池賠率、補牌、詐唬與最小防守頻率、棄牌率等。每天 10 題免費，答錯會講清原因。" },
      { title: "範圍、局面與牌譜", body: "文字與滑桿兩種範圍編輯，40 多個常見局面及其勝率，可儲存局面，幾秒記下一手牌。" },
    ],
    shots: [
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "德州撲克勝率計算器：A♠K♠ 對緊手範圍，57.9% 對 42.1%" }, // taste-skill-ignore: card suits in the screen's own text
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "學習訓練：勝率、底池賠率、補牌、詐唬與最小防守頻率、棄牌率" },
    ],
    video: { id: "b5-study", title: "牌局之間，把牌練好", body: "選牌鍵盤算勝率、底池賠率給出結論、9 張補牌的同花聽牌，還有一道會講清原因的訓練題。" },
    guideLink: "閱讀家庭牌局指南：規則、牌型與德撲術語表",
  },
  previews: {
    title: ["三十秒", "看一晚"],
    note: "App Store 頁面上的三段預覽影片。點一下，帶聲音播放。",
    items: [
      { id: "preview-store", title: "六個畫面看完一晚", body: "結算、補碼、清點、盲注計時、收款資訊、戰報卡片。" },
      { id: "preview-brag", title: "從開局到結算", body: "片頭風格的一晚，卡著節拍剪輯。" },
      { id: "preview-brag2", title: "牌局散場，誰該付誰？", body: "真實畫面配大標題，以戰報卡片收尾。" },
    ],
  },
  watch: {
    title: "牌桌上的樣子",
    intro: "全部是示範牌局裡的真實 App 畫面，沒有演員，也沒有效果圖。",
    cuts: [
      { id: "b4-night", title: "整晚牌局，從開局到結算", body: "開局、盲注、清點、結算、分享和學習，24 秒看完。" },
      { id: "b1-settle", title: "誰該付誰？幾秒算清", body: "清點到已平帳，最少筆數轉帳，支付面板和戰報卡片。" },
      { id: "b3-clock", title: "家庭局也有專業盲注計時", body: "第 1 級 25/50，動態島即時動態，然後升到第 2 級。" },
      { id: "b2-card", title: "今晚誰贏？一張戰報說清", body: "發群組的戰報卡片、歷史排行榜和年度回顧的 MVP。" },
      { id: "brag-night", title: "5 位玩家，桌上 ¥700，3 筆轉帳", body: "一晚牌局，從第一次補碼到戰報卡片。" },
    ],
    storiesTitle: "帶旁白的完整講解",
    storiesIntro: "有配音的短講解，不只看怎麼用，也講清為什麼。",
    stories: [
      { id: "pn4-walkthrough", title: "一個 App 搞定整晚", body: "一分鐘走完一場完整的家庭局，從上桌到戰報卡片。" },
      { id: "pn2-card", title: "今晚誰贏了：戰報卡片", body: "收尾的那張圖：排名、轉帳和收款資訊。" },
      { id: "pn3-clock", title: "家庭局也有專業盲注計時", body: "盲注結構、休息、升盲提示音和鎖定畫面倒數。" },
    ],
  },
  price: {
    lead: "組局免費，",
    before: "Pro",
    amount: "7.99 美元",
    after: "買斷。",
    includes: "帳本、結算、戰報卡片、主持工具和全部勝率計算器永久免費。Pro 是一次性購買，永久擁有，不是訂閱。",
    cta: "免費下載",
    free: { title: "免費", items: ["完整帳本、補碼與清點", "結算、收款資訊與戰報卡片", "3 晚盲注計時", "勝率計算器與全部賠率工具", "每天 10 道訓練題", "主持工具、排行榜與家庭牌局指南"] },
    pro: { title: "撲克之夜 Pro", items: ["不限次數的盲注計時", "不限題數的訓練，附統計與弱點", "往季與自訂賽季、深度洞察、完整年度回顧", "GTO 預設、ESG 模式、儲存局面與牌譜回放", "自訂獎金與 ICM 分配計算器、CSV 匯出"] },
    note: "無廣告，無需帳號，無訂閱。買過「移除廣告」？你已擁有 Pro。",
  },
  faqTitle: "牌桌上常問的問題",
  more: {
    title: "牌桌之外，還有這些",
    intro: "撲克之夜管好這一晚。另外兩個姊妹專案，幫你琢磨打過的牌。",
    tiltfree: "TiltFree：專為現場玩家設計的手牌記錄本，復盤你打過的牌。",
    thinking: "thinking.poker：在瀏覽器裡免費使用的德撲學習工具，從勝率到翻前範圍。",
    guide: "家庭牌局指南：17 篇關於規則、牌型、組局與禮儀的短文。",
  },
  play: "播放",
  seconds: "秒",
  nav: { night: "一晚流程", study: "學習", watch: "影片", price: "價格" },
};

export const pokerNightLanding: Record<Locale, PnLanding> = { en, "zh-cn": zhCn, "zh-tw": zhTw };

/** The nine App Store screenshots in store order (01 settle … 09 trainer). */
export function pnScreens(locale: Locale): PnShot[] {
  const c = pokerNightLanding[locale];
  return [...c.host.items.flatMap((i) => i.shots), ...c.study.shots].sort((a, b) =>
    a.src.localeCompare(b.src),
  );
}
