// Poker Night's bespoke landing page copy (v2.0, 2026-10-11). The page lives in
// components/poker-night/landing.tsx; app-wide copy (store name, FAQ, privacy)
// stays in content/poker-night.ts. Videos are the owner-approved 2.0 set
// (HQ marketing renders, the /brag cut and the App Store previews), transcoded
// for the web by scripts/poker-night-videos.py into poker-night-videos.json.
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

export interface PnLanding {
  hero: { kicker: string; title: string; body: string; videoLabel: string; soundOn: string; soundOff: string };
  jobs: { title: string; body: string; href: string }[];
  host: { kicker: string; title: string; intro: string; items: { title: string; body: string }[] };
  study: {
    kicker: string; title: string; intro: string;
    items: { title: string; body: string }[];
    shots: { src: string; alt: string }[];
    video: PnVideoCopy;
    guideLink: string;
  };
  watch: { kicker: string; title: string; intro: string; cuts: PnVideoCopy[] };
  stories: { kicker: string; title: string; intro: string; items: PnVideoCopy[] };
  previews: { kicker: string; title: string; intro: string; items: PnVideoCopy[] };
  screens: { kicker: string; title: string; shots: { src: string; alt: string }[] };
  plans: { kicker: string; title: string; free: { title: string; items: string[] }; pro: { title: string; price: string; items: string[] }; note: string };
  faqTitle: string;
  play: string;
  seconds: string;
}

const en: PnLanding = {
  hero: {
    kicker: "Home game tracker · Blinds timer · Odds calculator & trainer",
    title: "Settle a home game in seconds.",
    body:
      "Poker Night runs your home game and sharpens your play. One-tap buy-ins and rebuys, a blinds timer in the Dynamic Island, and who pays whom in the fewest transfers, with each payee's details ready to copy. Between nights, check your equity and pot odds and practice with quick trainers.",
    videoLabel: "Video: settle a home game in seconds with Poker Night",
    soundOn: "Sound on",
    soundOff: "Mute",
  },
  jobs: [
    { title: "Host the night", body: "Buy-ins, rebuys, chip count, blinds timer.", href: "#host" },
    { title: "Settle up", body: "Fewest transfers, payment details, results card.", href: "#host" },
    { title: "Study", body: "Equity calculator, pot odds, six trainers.", href: "#study" },
  ],
  host: {
    kicker: "Host the night",
    title: "From first buy-in to last transfer",
    intro: "Everything the host does at the table, on one screen, in money and chips side by side.",
    items: [
      { title: "One-tap buy-ins and rebuys", body: "Seat your regulars, set what a buy-in is worth (say 200 chips = $20) and tap once per rebuy, with undo. The status line shows time played, players and money in play." },
      { title: "A chip count that checks itself", body: "Type each stack once. The footer says Balanced, or exactly how far off the count is, before anyone leaves." },
      { title: "Blinds timer on the Lock Screen", body: "Ready-made or custom structures with breaks and a chime each level. On iPhone a Live Activity keeps the level and countdown in the Dynamic Island." },
      { title: "Who pays whom, fewest transfers", body: "Settle-up finds the fewest payments in dollars and chips, or runs banker mode. Tap Pay to copy the line and the payee's Venmo, Zelle or PayPal details. Poker Night never moves money." },
      { title: "A results card for the group chat", body: "The winner, the standings and every transfer with its payment details, as one image. Copy it, save it or share it." },
      { title: "Host tools, seasons and Wrapped", body: "Random seats and a high-card draw, chip sets that add up, tournament payouts, a leaderboard by month or season, 16 badges and your group's year as a story." },
    ],
  },
  study: {
    kicker: "Study",
    title: "Get sharper between home games",
    intro: "A poker odds calculator and one-handed trainers in the same app as your ledger: the math you need at the table, practiced a few questions at a time.",
    items: [
      { title: "Equity calculator", body: "Hold'em, Omaha and ESG, hand vs. hand or vs. a range, up to three boards, with a card keyboard made for poker: rank, then suit." },
      { title: "Pot odds, outs and implied odds", body: "Plus fold equity, MDF, SPR and ICM, each with a plain verdict (call or fold) and the numbers behind it." },
      { title: "Six one-handed trainers", body: "Equity, pot odds, outs, bluffs and MDF, fold equity and more. 10 free questions a day; every miss explains itself." },
      { title: "Ranges, spots and a hand log", body: "A range editor with text and sliders, 40+ common situations with their equities, saved spots, and a hand log you can fill in seconds." },
    ],
    shots: [
      { src: "/apps/poker-night/v2/en/07-equity.jpg", alt: "Poker equity calculator: A♠K♠ against a tight range in Hold'em, 57.9% to 42.1%" },
      { src: "/apps/poker-night/v2/en/09-trainer.jpg", alt: "Study trainers: equity, pot odds, outs, bluff and MDF, and fold equity drills" },
    ],
    video: { id: "b5-study", title: "Get sharper between home games", body: "Equity on the card keyboard, a pot odds verdict, a 9-out flush draw and a trainer miss that explains itself." },
    guideLink: "Read the home-game guide: rules, hand rankings and a poker glossary",
  },
  watch: {
    kicker: "Watch",
    title: "See it at the table",
    intro: "Real app footage from a demo night. No actors, no mock-ups.",
    cuts: [
      { id: "b1-settle", title: "Who owes who? Settled in seconds", body: "Count to Balanced, the fewest transfers, the Pay sheet and the results card." },
      { id: "b3-clock", title: "A real blinds clock for the home game", body: "Level 1 at 25/50, the Live Activity in the Dynamic Island, then Level 2." },
      { id: "b2-card", title: "Who's up tonight? One card says it", body: "The results card for the group chat, the all-time leaderboard and Wrapped's MVP." },
      { id: "b4-night", title: "The whole night, start to settled", body: "Start, blinds, count, settle, share and Study in 24 seconds." },
      { id: "brag-night", title: "5 players, $140 in play, 3 payments", body: "One night from the first rebuy to the share card." },
    ],
  },
  stories: {
    kicker: "Stories",
    title: "Narrated walkthroughs",
    intro: "Short explainers with voice-over, for when you want the why as well as the what.",
    items: [
      { id: "pn2-card", title: "Who's up tonight: the results card", body: "The image that ends the night: standings, transfers and payment details." },
      { id: "pn3-clock", title: "A real blinds clock for the home game", body: "Structures, breaks, the level chime and the Lock Screen countdown." },
      { id: "pn4-walkthrough", title: "The whole night in one app", body: "A one-minute tour of a full home game, from seating players to the results card." },
    ],
  },
  previews: {
    kicker: "App Store previews",
    title: "Three ways to see it in 30 seconds",
    intro: "The previews made for the App Store listing.",
    items: [
      { id: "preview-store", title: "The night in six screens", body: "Settle-up, rebuys, chip count, blinds clock, payment details, results card." },
      { id: "preview-brag", title: "Start to settled", body: "The night as a title sequence, cut on the beat." },
      { id: "preview-brag2", title: "End of the night: who pays whom?", body: "Headlines over the real screens, ending on the results card." },
    ],
  },
  screens: {
    kicker: "Screens",
    title: "What's inside",
    shots: [
      { src: "/apps/poker-night/v2/en/01-settle.jpg", alt: "Settle up in seconds: who pays whom, with each payee's Venmo and Zelle details ready to copy" },
      { src: "/apps/poker-night/v2/en/02-timer.jpg", alt: "Blinds timer at Level 1, 25/50, with the countdown in the Dynamic Island" },
      { src: "/apps/poker-night/v2/en/03-share-card.jpg", alt: "Results card for the group chat: the winner, the standings and who pays whom" },
      { src: "/apps/poker-night/v2/en/04-live.jpg", alt: "Live session: buy-ins and chip counts in money and chips, with the balance check" },
      { src: "/apps/poker-night/v2/en/05-leaderboard.jpg", alt: "Leaderboard by month, season or all time with wins and streaks" },
      { src: "/apps/poker-night/v2/en/06-wrapped.jpg", alt: "Wrapped: the group's season as a story, ending on the MVP card" },
      { src: "/apps/poker-night/v2/en/07-equity.jpg", alt: "Equity calculator: your hand against their range in Hold'em" },
      { src: "/apps/poker-night/v2/en/08-seats.jpg", alt: "Host tools: random seats and a high-card draw for the button" },
      { src: "/apps/poker-night/v2/en/09-trainer.jpg", alt: "Six one-handed poker trainers: equity, pot odds and outs" },
    ],
  },
  plans: {
    kicker: "Price",
    title: "Free to host. Pro once, for life.",
    free: { title: "Free", items: ["The full ledger, rebuys and chip count", "Settle-up, payment details and the results card", "3 blinds timer nights", "The equity calculator and every odds tool", "10 trainer questions a day", "Host tools, leaderboard and the home-game guide"] },
    pro: { title: "Poker Night Pro", price: "US$7.99 once", items: ["Unlimited blinds timer nights", "Unlimited trainer questions with stats and weak spots", "Past and custom seasons, deep insights, the full Wrapped", "GTO presets, ESG mode, saved spots and hand replays", "Custom payouts with an ICM deal calculator, CSV export"] },
    note: "No ads. No account. No subscription. Bought Remove Ads before? You already have Pro.",
  },
  faqTitle: "Questions",
  play: "Play",
  seconds: "s",
};

const zhCn: PnLanding = {
  hero: {
    kicker: "德州扑克牌局记账 · 盲注计时 · 胜率计算与训练",
    title: "家庭牌局，几秒算清。",
    body:
      "扑克之夜帮你组好朋友局，也帮你把牌打得更好：买入补码点一下就记，灵动岛上看盲注倒计时，散场自动算出最少笔数的转账，收款信息一键复制。牌局之间，用胜率计算器查胜率和底池赔率，再用小测验练手。",
    videoLabel: "视频：用扑克之夜几秒算清家庭牌局",
    soundOn: "打开声音",
    soundOff: "静音",
  },
  jobs: [
    { title: "组局记账", body: "买入、补码、清点筹码、盲注计时。", href: "#host" },
    { title: "一键结算", body: "最少笔数转账、收款信息、战报卡片。", href: "#host" },
    { title: "学牌", body: "胜率计算器、底池赔率、六种训练。", href: "#study" },
  ],
  host: {
    kicker: "组局",
    title: "从第一笔买入到最后一笔转账",
    intro: "主持一局牌要做的事，都在一个界面里，金额与筹码并列显示。",
    items: [
      { title: "买入补码，点一下就记", body: "常用玩家一键上桌，设定一手买入值多少（例如 200 筹码 = ¥100），每次补码点一下，可撤销。状态栏显示时长、人数和桌上总额。" },
      { title: "会自己对账的清点", body: "每人码量输入一次，底部直接显示「已平账」，或者差多少，散场前就能发现。" },
      { title: "锁屏上的盲注计时", body: "内置结构也可自定义，含休息，每级升盲有提示音。iPhone 上的实时活动把级别和倒计时放进灵动岛。" },
      { title: "谁付谁，最少笔数", body: "自动算出最少笔数的转账，金额与筹码并列，也可选一人代收代付。点「支付」复制转账信息和收款人的收款方式。扑克之夜不经手任何资金。" },
      { title: "发群里的战报卡片", body: "赢家、排名和每一笔转账连同收款信息，一张图说清。可复制、保存或分享。" },
      { title: "主持工具、赛季与年度回顾", body: "随机座位与比大小定庄、算得清的筹码套装、锦标赛奖金、按月或赛季的排行榜、16 枚徽章，以及把一年牌局做成故事的年度回顾。" },
    ],
  },
  study: {
    kicker: "学牌",
    title: "牌局之间，把牌练好",
    intro: "胜率计算器和单手就能玩的训练，和你的账本在同一个 App 里：牌桌上要用的数学，每天几道题慢慢练熟。",
    items: [
      { title: "胜率计算器", body: "德州、奥马哈与 ESG，手牌对手牌或对范围，最多三块牌面，配扑克专用选牌键盘：先点点数，再点花色。" },
      { title: "底池赔率、补牌与隐含赔率", body: "还有弃牌率、最小防守频率、筹码底池比和 ICM，每项都给出直白结论（跟注还是弃牌）和背后的数字。" },
      { title: "六种单手训练", body: "胜率、底池赔率、补牌、诈唬与最小防守频率、弃牌率等。每天 10 题免费，答错会讲清原因。" },
      { title: "范围、局面与牌谱", body: "文字与滑杆两种范围编辑，40 多个常见局面及其胜率，可保存局面，几秒记下一手牌。" },
    ],
    shots: [
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "德州扑克胜率计算器：A♠K♠ 对紧手范围，57.9% 对 42.1%" },
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "学牌训练：胜率、底池赔率、补牌、诈唬与最小防守频率、弃牌率" },
    ],
    video: { id: "b5-study", title: "牌局之间，把牌练好", body: "选牌键盘算胜率、底池赔率给出结论、9 张补牌的同花听牌，还有一道会讲清原因的训练题。" },
    guideLink: "阅读家庭牌局指南：规则、牌型与德扑术语表",
  },
  watch: {
    kicker: "视频",
    title: "牌桌上的样子",
    intro: "全部是演示牌局里的真实 App 画面，没有演员，也没有效果图。",
    cuts: [
      { id: "b1-settle", title: "谁该付谁？几秒算清", body: "清点到已平账，最少笔数转账，支付面板和战报卡片。" },
      { id: "b3-clock", title: "家庭局也有专业盲注计时", body: "第 1 级 25/50，灵动岛实时活动，然后升到第 2 级。" },
      { id: "b2-card", title: "今晚谁赢？一张战报说清", body: "发群里的战报卡片、历史排行榜和年度回顾的 MVP。" },
      { id: "b4-night", title: "整晚牌局，从开局到结算", body: "开局、盲注、清点、结算、分享和学牌，24 秒看完。" },
      { id: "brag-night", title: "5 位玩家，桌上 ¥700，3 笔转账", body: "一晚牌局，从第一次补码到战报卡片。" },
    ],
  },
  stories: {
    kicker: "讲解",
    title: "带旁白的完整讲解",
    intro: "有配音的短讲解，不只看怎么用，也讲清为什么。",
    items: [
      { id: "pn2-card", title: "今晚谁赢了：战报卡片", body: "收尾的那张图：排名、转账和收款信息。" },
      { id: "pn3-clock", title: "家庭局也有专业盲注计时", body: "盲注结构、休息、升盲提示音和锁屏倒计时。" },
      { id: "pn4-walkthrough", title: "一个 App 搞定整晚", body: "一分钟走完一场完整的家庭局，从上桌到战报卡片。" },
    ],
  },
  previews: {
    kicker: "App Store 预览",
    title: "30 秒看懂的三种方式",
    intro: "为 App Store 页面制作的预览视频。",
    items: [
      { id: "preview-store", title: "六个画面看完一晚", body: "结算、补码、清点、盲注计时、收款信息、战报卡片。" },
      { id: "preview-brag", title: "从开局到结算", body: "片头风格的一晚，卡着节拍剪辑。" },
      { id: "preview-brag2", title: "牌局散场，谁该付谁？", body: "真实画面配大标题，以战报卡片收尾。" },
    ],
  },
  screens: {
    kicker: "界面",
    title: "App 里有什么",
    shots: [
      { src: "/apps/poker-night/v2/zh/01-settle.jpg", alt: "几秒结算：谁付谁，附收款人的收款信息，一键复制" },
      { src: "/apps/poker-night/v2/zh/02-timer.jpg", alt: "盲注计时器第 1 级 25/50，倒计时显示在灵动岛" },
      { src: "/apps/poker-night/v2/zh/03-share-card.jpg", alt: "发群里的战报卡片：赢家、排名与谁付谁" },
      { src: "/apps/poker-night/v2/zh/04-live.jpg", alt: "进行中：买入与码量金额筹码并列，附账目核对" },
      { src: "/apps/poker-night/v2/zh/05-leaderboard.jpg", alt: "按月、赛季或全部时间的排行榜，含胜场与连胜" },
      { src: "/apps/poker-night/v2/zh/06-wrapped.jpg", alt: "年度回顾：把一季牌局做成故事，以 MVP 卡片收尾" },
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "胜率计算器：德州扑克手牌对范围" },
      { src: "/apps/poker-night/v2/zh/08-seats.jpg", alt: "主持工具：随机座位与比大小定庄" },
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "六种单手德扑训练：胜率、底池赔率与补牌" },
    ],
  },
  plans: {
    kicker: "价格",
    title: "组局免费，Pro 买一次用一辈子",
    free: { title: "免费", items: ["完整账本、补码与清点", "结算、收款信息与战报卡片", "3 晚盲注计时", "胜率计算器与全部赔率工具", "每天 10 道训练题", "主持工具、排行榜与家庭牌局指南"] },
    pro: { title: "扑克之夜 Pro", price: "一次性 7.99 美元", items: ["不限次数的盲注计时", "不限题数的训练，附统计与薄弱点", "往季与自定义赛季、深度洞察、完整年度回顾", "GTO 预设、ESG 模式、保存局面与牌谱回放", "自定义奖金与 ICM 分配计算器、CSV 导出"] },
    note: "无广告，无需账号，无订阅。买过「移除广告」？你已拥有 Pro。",
  },
  faqTitle: "常见问题",
  play: "播放",
  seconds: "秒",
};

// zh-TW: OpenCC s2twp conversion of zhCn (Taiwan phrasing), reviewed by hand.
const zhTw: PnLanding = {
  hero: {
    kicker: "德州撲克牌局記帳 · 盲注計時 · 勝率計算與訓練",
    title: "家庭牌局，幾秒算清。",
    body:
      "撲克之夜幫你組好朋友局，也幫你把牌打得更好：買入補碼點一下就記，動態島上看盲注倒數，散場自動算出最少筆數的轉帳，收款資訊一鍵複製。牌局之間，用勝率計算器查勝率和底池賠率，再用小測驗練手。",
    videoLabel: "影片：用撲克之夜幾秒算清家庭牌局",
    soundOn: "開啟聲音",
    soundOff: "靜音",
  },
  jobs: [
    { title: "組局記帳", body: "買入、補碼、清點籌碼、盲注計時。", href: "#host" },
    { title: "一鍵結算", body: "最少筆數轉帳、收款資訊、戰報卡片。", href: "#host" },
    { title: "學牌", body: "勝率計算器、底池賠率、六種訓練。", href: "#study" },
  ],
  host: {
    kicker: "組局",
    title: "從第一筆買入到最後一筆轉帳",
    intro: "主持一局牌要做的事，都在一個畫面裡，金額與籌碼並列顯示。",
    items: [
      { title: "買入補碼，點一下就記", body: "常用玩家一鍵上桌，設定一手買入值多少（例如 200 籌碼 = NT$500），每次補碼點一下，可撤銷。狀態列顯示時長、人數和桌上總額。" },
      { title: "會自己對帳的清點", body: "每人碼量輸入一次，底部直接顯示「已平帳」，或者差多少，散場前就能發現。" },
      { title: "鎖定畫面上的盲注計時", body: "內建結構也可自訂，含休息，每級升盲有提示音。iPhone 上的即時動態把級別和倒數放進動態島。" },
      { title: "誰付誰，最少筆數", body: "自動算出最少筆數的轉帳，金額與籌碼並列，也可選一人代收代付。點「支付」複製轉帳資訊和收款人的收款方式。撲克之夜不經手任何資金。" },
      { title: "發群組的戰報卡片", body: "贏家、排名和每一筆轉帳連同收款資訊，一張圖說清。可複製、儲存或分享。" },
      { title: "主持工具、賽季與年度回顧", body: "隨機座位與比大小定莊、算得清的籌碼套組、錦標賽獎金、按月或賽季的排行榜、16 枚徽章，以及把一年牌局做成故事的年度回顧。" },
    ],
  },
  study: {
    kicker: "學牌",
    title: "牌局之間，把牌練好",
    intro: "勝率計算器和單手就能玩的訓練，和你的帳本在同一個 App 裡：牌桌上要用的數學，每天幾道題慢慢練熟。",
    items: [
      { title: "勝率計算器", body: "德州、奧馬哈與 ESG，手牌對手牌或對範圍，最多三塊牌面，配撲克專用選牌鍵盤：先點點數，再點花色。" },
      { title: "底池賠率、補牌與隱含賠率", body: "還有棄牌率、最小防守頻率、籌碼底池比和 ICM，每項都給出直白結論（跟注還是棄牌）和背後的數字。" },
      { title: "六種單手訓練", body: "勝率、底池賠率、補牌、詐唬與最小防守頻率、棄牌率等。每天 10 題免費，答錯會講清原因。" },
      { title: "範圍、局面與牌譜", body: "文字與滑桿兩種範圍編輯，40 多個常見局面及其勝率，可儲存局面，幾秒記下一手牌。" },
    ],
    shots: [
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "德州撲克勝率計算器：A♠K♠ 對緊手範圍，57.9% 對 42.1%" },
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "學牌訓練：勝率、底池賠率、補牌、詐唬與最小防守頻率、棄牌率" },
    ],
    video: { id: "b5-study", title: "牌局之間，把牌練好", body: "選牌鍵盤算勝率、底池賠率給出結論、9 張補牌的同花聽牌，還有一道會講清原因的訓練題。" },
    guideLink: "閱讀家庭牌局指南：規則、牌型與德撲術語表",
  },
  watch: {
    kicker: "影片",
    title: "牌桌上的樣子",
    intro: "全部是示範牌局裡的真實 App 畫面，沒有演員，也沒有效果圖。",
    cuts: [
      { id: "b1-settle", title: "誰該付誰？幾秒算清", body: "清點到已平帳，最少筆數轉帳，支付面板和戰報卡片。" },
      { id: "b3-clock", title: "家庭局也有專業盲注計時", body: "第 1 級 25/50，動態島即時動態，然後升到第 2 級。" },
      { id: "b2-card", title: "今晚誰贏？一張戰報說清", body: "發群組的戰報卡片、歷史排行榜和年度回顧的 MVP。" },
      { id: "b4-night", title: "整晚牌局，從開局到結算", body: "開局、盲注、清點、結算、分享和學牌，24 秒看完。" },
      { id: "brag-night", title: "5 位玩家，桌上 ¥700，3 筆轉帳", body: "一晚牌局，從第一次補碼到戰報卡片。" },
    ],
  },
  stories: {
    kicker: "講解",
    title: "帶旁白的完整講解",
    intro: "有配音的短講解，不只看怎麼用，也講清為什麼。",
    items: [
      { id: "pn2-card", title: "今晚誰贏了：戰報卡片", body: "收尾的那張圖：排名、轉帳和收款資訊。" },
      { id: "pn3-clock", title: "家庭局也有專業盲注計時", body: "盲注結構、休息、升盲提示音和鎖定畫面倒數。" },
      { id: "pn4-walkthrough", title: "一個 App 搞定整晚", body: "一分鐘走完一場完整的家庭局，從上桌到戰報卡片。" },
    ],
  },
  previews: {
    kicker: "App Store 預覽",
    title: "30 秒看懂的三種方式",
    intro: "為 App Store 頁面製作的預覽影片。",
    items: [
      { id: "preview-store", title: "六個畫面看完一晚", body: "結算、補碼、清點、盲注計時、收款資訊、戰報卡片。" },
      { id: "preview-brag", title: "從開局到結算", body: "片頭風格的一晚，卡著節拍剪輯。" },
      { id: "preview-brag2", title: "牌局散場，誰該付誰？", body: "真實畫面配大標題，以戰報卡片收尾。" },
    ],
  },
  screens: {
    kicker: "畫面",
    title: "App 裡有什麼",
    shots: [
      { src: "/apps/poker-night/v2/zh/01-settle.jpg", alt: "幾秒結算：誰付誰，附收款人的收款資訊，一鍵複製" },
      { src: "/apps/poker-night/v2/zh/02-timer.jpg", alt: "盲注計時器第 1 級 25/50，倒數顯示在動態島" },
      { src: "/apps/poker-night/v2/zh/03-share-card.jpg", alt: "發群組的戰報卡片：贏家、排名與誰付誰" },
      { src: "/apps/poker-night/v2/zh/04-live.jpg", alt: "進行中：買入與碼量金額籌碼並列，附帳目核對" },
      { src: "/apps/poker-night/v2/zh/05-leaderboard.jpg", alt: "按月、賽季或全部時間的排行榜，含勝場與連勝" },
      { src: "/apps/poker-night/v2/zh/06-wrapped.jpg", alt: "年度回顧：把一季牌局做成故事，以 MVP 卡片收尾" },
      { src: "/apps/poker-night/v2/zh/07-equity.jpg", alt: "勝率計算器：德州撲克手牌對範圍" },
      { src: "/apps/poker-night/v2/zh/08-seats.jpg", alt: "主持工具：隨機座位與比大小定莊" },
      { src: "/apps/poker-night/v2/zh/09-trainer.jpg", alt: "六種單手德撲訓練：勝率、底池賠率與補牌" },
    ],
  },
  plans: {
    kicker: "價格",
    title: "組局免費，Pro 買一次用一輩子",
    free: { title: "免費", items: ["完整帳本、補碼與清點", "結算、收款資訊與戰報卡片", "3 晚盲注計時", "勝率計算器與全部賠率工具", "每天 10 道訓練題", "主持工具、排行榜與家庭牌局指南"] },
    pro: { title: "撲克之夜 Pro", price: "一次性 7.99 美元", items: ["不限次數的盲注計時", "不限題數的訓練，附統計與弱點", "往季與自訂賽季、深度洞察、完整年度回顧", "GTO 預設、ESG 模式、儲存局面與牌譜回放", "自訂獎金與 ICM 分配計算器、CSV 匯出"] },
    note: "無廣告，無需帳號，無訂閱。買過「移除廣告」？你已擁有 Pro。",
  },
  faqTitle: "常見問題",
  play: "播放",
  seconds: "秒",
};

export const pokerNightLanding: Record<Locale, PnLanding> = { en, "zh-cn": zhCn, "zh-tw": zhTw };
