// Poker Night — v2.x "final" copy (no ads, one-time Pro). Sourced from the app's own fastlane metadata
// (apps/poker-night/fastlane/metadata/ios/{en-US,zh-Hans}/*.txt) and the
// home-game guide content pack (apps/poker-night/docs/content/web/*), not
// copied verbatim — rewritten for the site's shorter, feature-card format.
// zh-Hans copy is adapted from the app's own zh-Hans App Store listing;
// zh-Hant is a Traditional-characters / Taiwan-convention rewrite of it.
//
// HARD RULE: no wagering vocabulary anywhere in this file (bet, betting,
// gamble, gambling, casino, real money; zh 赌/下注/押) — Poker Night is a
// scorekeeper, not a gambling app, and the App Store listing is 17+ only for
// the presence of chips/wagers as a concept, not because the app itself
// takes wagers.

import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "Poker Night",
  storeName: "Poker Night: Home Game Ledger",
  tagline: "Every buy-in tracked. One tap to settle. Ready to share.",
  subtitle: "Home game ledger & settle-up",
  oneLiner:
    "Track buy-ins and rebuys as you play, settle the night in the fewest transfers with dollars and chips side by side, then share a results card built for the group chat.",
  statusNote: "Live now on the App Store. Android release in progress.",
  features: [
    {
      title: "Money-first ledger",
      body: "Set what a buy-in is worth once, and every buy-in, rebuy and transfer shows dollars and chips side by side — no converting in your head at 1am.",
    },
    {
      title: "A results card for the group chat",
      body: "End the night with a clean summary — the winner, the standings and every transfer — ready to share straight to the group chat.",
    },
    {
      title: "Settle up, then just tap Pay",
      body: "Get the fewest possible transfers, or have everyone square up with one banker. Pay copies the line or opens your own Venmo, PayPal, Cash App, WeChat or Alipay — Poker Night never touches the money.",
    },
    {
      title: "Leaderboard & seasons",
      body: "Net results, wins, streaks and biggest nights by month, season or all time, plus head-to-head between any two regulars.",
    },
    {
      title: "Blinds timer on your Lock Screen",
      body: "Ready-made or custom blind structures with level alerts, and on iOS a Live Activity on the Lock Screen and Dynamic Island, plus widgets for tonight's game.",
    },
    {
      title: "A home-game guide, built in",
      body: "17 short articles on rules, hand rankings, hosting and etiquette, plus an English–中文 glossary — nothing to search for mid-hand.",
    },
    {
      title: "Four tabs: Tonight, Players, Study, History",
      body: "Tonight holds the live game and your host tools, Players the roster and leaderboard, Study the odds tools and the guide, History every past night — one tap each.",
    },
    {
      title: "Host tools",
      body: "Random seats and a high-card draw for the button, a chip-set calculator for starting chips, tournament payouts with bounties, and a dealer's choice wheel for picking the game.",
    },
    {
      title: "Personal limits, never a lock",
      body: "Set a rebuy cap, a stop-loss or a leave-by time for yourself and get a gentle reminder when you reach it. Poker Night never blocks a rebuy.",
    },
    {
      title: "Player insights & 16 badges",
      body: "Win rate, streaks and biggest nights for every player, plus 16 badges earned from your own nights. Pro adds deep insights.",
    },
    {
      title: "Wrapped: your group's year",
      body: "Turn a year or a season into a story to share: nights, hours, the MVP and the rivalries. The group summary is free; Pro unlocks the full story.",
    },
    {
      title: "Study: odds, ranges and saved spots",
      body: "Hand vs. hand, hand vs. range and up to three boards, with ESG mode, a full range editor (text and slider) and three saved spots free. Pro adds GTO presets, the equity graph and hand categories.",
    },
    {
      title: "Hand log",
      body: "Jot down a hand in seconds for free. With Pro, record the action street by street and replay it later.",
    },
    {
      title: "No ads. No subscription.",
      body: "Poker Night shows no ads and doesn't track you across apps or websites. No account, no sign-up — your ledger stays on your device. English and 简体中文, with Dynamic Type, VoiceOver, and light and dark themes.",
    },
    {
      title: "Poker Night Pro",
      body: "One optional purchase (US$7.99), yours forever, no subscription. Pro adds the blinds timer, past and custom seasons with head-to-head and recaps, deep player insights, the full Wrapped story, custom payouts with an ICM deal calculator, hand-vs-range odds with GTO presets, ESG mode, unlimited saved spots, hand replays and CSV export. Bought Remove Ads before? You already have Pro.",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/shot-01-share-card.png",
      alt: "Results card ready to share: the winner, the standings and who pays whom",
    },
    {
      src: "/apps/poker-night/shot-02-live.png",
      alt: "Live session: buy-ins and chip counts shown in dollars and chips, with the table balance at a glance",
    },
    {
      src: "/apps/poker-night/shot-03-settle.png",
      alt: "Settle-up screen: the fewest transfers in dollars and chips, with Pay ready to open a payment app",
    },
    {
      src: "/apps/poker-night/shot-04-leaderboard.png",
      alt: "Leaderboard: net results, wins and streaks by season",
    },
    {
      src: "/apps/poker-night/shot-05-timer.png",
      alt: "Blinds timer showing the current level and next blinds, with a Live Activity on the Lock Screen",
    },
    {
      src: "/apps/poker-night/shot-06-equity.png",
      alt: "Equity calculator: a hand's odds against a full range in Hold'em",
    },
    {
      src: "/apps/poker-night/shot-07-guide.png",
      alt: "Home-game guide: hand rankings, hosting and etiquette articles",
    },
  ],
  trust: {
    title: "Money stays between friends",
    body: "Poker Night keeps score — it never touches your money. Settle-up works out the fewest transfers to get everyone even, and tapping Pay just opens the payment app you already use — Venmo, PayPal, Cash App, WeChat, Alipay or similar — with nothing filled in. Paying each other happens the same way it always has, between you and your friends.",
  },
  faqs: [
    {
      q: "Where is my data stored?",
      a: "On your device, and nowhere else. Player names, buy-ins, chip counts, and session history never leave your phone — the app has no backend and no account system.",
    },
    {
      q: "Does Poker Night move money?",
      a: "No — never. Settle-up just works out who pays whom; tapping Pay only opens a payment app you already have installed, with nothing filled in. Poker Night never sees or processes a payment.",
    },
    {
      q: "Does Poker Night show ads or track me?",
      a: "No. There are no ads at all, and the app doesn't track you across other apps or websites, so there's no tracking prompt either.",
    },
    {
      q: "What does Poker Night Pro cost, and is it a subscription?",
      a: "Pro is a single optional purchase of US$7.99, yours forever. There is no subscription. The ledger, settle-up, share card, host tools and quick hand log stay free. Pro adds depth: the blinds timer, past and custom seasons, deep insights, the full Wrapped story, ICM deal calculator, GTO presets, hand replays and CSV export. Already bought Remove Ads? You already have every Pro feature, at no extra cost.",
    },
    {
      q: "The chip counts don't balance — what now?",
      a: "The live session footer shows total up, total down, and the exact difference, so you can spot the missing chips before ending the game. You can still settle with an off-balance table; the discrepancy is shown on the summary.",
    },
    {
      q: "How do I delete a player or a past session?",
      a: "Swipe or long-press the entry in Roster or History. Deleting removes it from your device immediately — there is no server copy.",
    },
  ],
  privacy: {
    updated: "2026-10-02",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous usage events such as session created/settled, players added, equity calculations run, and screen views, plus device identifiers used by Firebase. In-app purchase events are counted anonymously for analytics too. We use this to understand how the app is used and improve it.",
            "Crash reports (Firebase Crashlytics): technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
            "App configuration and guide updates (Firebase Remote Config and Firebase Hosting): the app checks for configuration such as which features are switched on and the current version of the home-game guide, using the same installation identifier as the analytics line above. If the guide has new content, it's downloaded as a plain static file from Firebase Hosting — a normal web request that carries nothing about you or your games.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No ads and no tracking: Poker Night shows no advertising, does not use your device's advertising identifier, does not track you across other apps or websites, and never asks for App Tracking Transparency permission. No accounts, no emails, no contacts, no location, no photos, no messages. Your game ledger — player names, buy-ins, chip counts, session history — is stored only on your device. Your ledger is never uploaded unless you choose to share a night live (see below); the app has no accounts. Live Activities, widgets and blinds-timer alerts are generated entirely on your device — nothing about a running game or a timer is ever sent anywhere.",
        ],
      },
      {
        heading: "Live sharing (optional)",
        body: [
          "If you tap Share live during a night, Poker Night uploads a read-only snapshot of that night so the people at your table can follow it on their own phones: the display names you typed for tonight's players, buy-ins, chip counts, results, the chip value, who pays whom once settled, and the night's title if you gave it one. It is stored in Google Cloud Firestore (Firebase) under a random 128-bit link, together with an anonymous Firebase sign-in id that lets only your device update or stop it. It is not linked to any account, email, advertising id or analytics id.",
          "Anyone with the link or QR code can view the snapshot; it can't be searched or listed. It's no longer viewable after 48 hours from its last update (or 24 hours after the night settles) — reads are refused past that point. It's deleted outright when you tap Stop sharing, when you delete the night, or automatically 24 hours after the night settles (checked the next time the app runs); there's no separate server-side deletion guarantee beyond that. Nothing is uploaded for nights you don't share, and guests who open the link in a browser are not asked for anything.",
        ],
      },
      {
        heading: "Money stays between friends",
        body: [
          "Poker Night never sees or processes a payment. Settle-up works out who pays whom; tapping Pay only opens a payment app you already have installed — Venmo, PayPal, Cash App, WeChat, Alipay or similar — with no amount filled in. Paying each other happens the same way it always has, between you and your friends.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "Poker Night Pro and the earlier Remove ads purchase (which unlocks all of Pro) are one-time, optional purchases processed entirely by Apple App Store / Google Play. We never see your payment details.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Turn off blinds-timer notifications and Live Activities anytime in your device's notification settings.",
            "Delete any player or session in the app to remove it from your device.",
            "Stop sharing a live night anytime; the link stops working and the snapshot is deleted.",
          ],
        ],
      },
      {
        heading: "Children",
        body: [
          "Poker Night is not directed at children under 13 and does not knowingly collect personal information from them.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions: email lei@appfactory.sg."],
      },
      {
        heading: "Changes",
        body: [
          "We'll update this page when the policy changes; material changes will be noted in app release notes.",
        ],
      },
    ],
  },
};

// Copy sourced from the app's own zh-Hans App Store listing where it exists.
const zhCn: AppLocalized = {
  name: "扑克之夜",
  storeName: "扑克之夜 — 牌局记账",
  tagline: "买入实时记，结算一键清，战报随手发。",
  subtitle: "买入补码随手记，散场一键结算",
  oneLiner:
    "牌局进行时随手记录买入和补码，散场时用最少笔数完成转账、金额与筹码并列显示，再生成一张战报卡片发到群里。",
  statusNote: "已在 App Store 上线，Android 版本即将推出。",
  features: [
    {
      title: "金额优先的账本",
      body: "先设定一手买入值多少钱，之后每一次买入、补码和转账都会同时显示金额与筹码，凌晨也不用心算换算。",
    },
    {
      title: "战报卡片，直接发群",
      body: "散场后自动生成一张清爽的战报：赢家、排名和每一笔转账，直接分享到群聊。",
    },
    {
      title: "结算之后，点「支付」就好",
      body: "最少笔数互转，或者指定一人代收代付。点「支付」可以复制收款信息，或打开你自己的微信、支付宝——扑克之夜完全不经手这笔钱。",
    },
    {
      title: "排行榜与赛季",
      body: "按月、按赛季或全部时间查看净结果、胜场与连胜，还能看任意两人的对战记录。",
    },
    {
      title: "盲注计时器，锁屏可见",
      body: "内置或自定义盲注结构，升盲有提醒；iOS 上支持锁屏与灵动岛的实时活动，还有桌面小组件显示今晚牌局。",
    },
    {
      title: "内置家庭牌局指南",
      body: "17 篇规则、牌型、组局与礼仪短文，附中英术语表——牌局进行到一半也不用去搜索引擎查。",
    },
    {
      title: "四个标签：今晚、玩家、研习、历史",
      body: "「今晚」放着进行中的牌局和主持工具，「玩家」是名单与排行榜，「研习」是胜率工具与指南，「历史」是所有往期牌局——一键直达。",
    },
    {
      title: "主持工具",
      body: "随机座位与比大小定庄、按你的筹码套装算出每人起始筹码、含赏金的锦标赛奖金分配，还有选游戏的转盘。",
    },
    {
      title: "个人限额，只提醒不阻止",
      body: "给自己设补码上限、止损或离场时间，到点会轻轻提醒。扑克之夜从不阻止补码。",
    },
    {
      title: "玩家洞察与 16 枚徽章",
      body: "每位玩家的胜率、连胜与最大的一晚，以及根据你的牌局自动获得的 16 枚徽章。Pro 解锁深度洞察。",
    },
    {
      title: "年度回顾：牌友的一年",
      body: "把一年（或一个赛季）的牌局做成可分享的故事：场次、时长、MVP 与宿敌。群组总览免费，Pro 解锁完整故事。",
    },
    {
      title: "研习：胜率、范围与保存局面",
      body: "手牌对手牌、手牌对范围，最多三块牌面，支持 ESG 模式、文字与滑杆的完整范围编辑器，免费可保存 3 个局面。Pro 增加 GTO 预设、胜率曲线与牌型分布。",
    },
    {
      title: "牌谱",
      body: "几秒记下一手牌，免费使用。升级 Pro 后可逐条街录入动作，之后随时回放。",
    },
    {
      title: "无广告，无订阅",
      body: "扑克之夜没有任何广告，也不会跨应用或跨网站跟踪你。无需注册账号，账本只存在你的设备上。中英双语，支持大字体、旁白朗读，浅色深色主题都有。",
    },
    {
      title: "扑克之夜 Pro",
      body: "一次性可选购买（7.99 美元），永久拥有，不是订阅。Pro 解锁盲注计时器、往季与自定义赛季（含两人对比与赛季回顾）、深度玩家洞察、完整年度回顾、自定义奖金与 ICM 分配计算器、手牌对范围胜率与 GTO 预设、ESG 模式、无限保存局面、牌谱回放和 CSV 导出。买过「移除广告」？你已拥有 Pro。",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/zh/shot-01-share-card.png",
      alt: "战报卡片：赢家、排名与谁转给谁，随手可分享",
    },
    {
      src: "/apps/poker-night/zh/shot-02-live.png",
      alt: "进行中界面：金额与筹码并列显示的买入与码量，底部是账目核对",
    },
    {
      src: "/apps/poker-night/zh/shot-03-settle.png",
      alt: "结算界面：最少笔数的转账，金额与筹码并列，点「支付」即可打开支付应用",
    },
    {
      src: "/apps/poker-night/zh/shot-04-leaderboard.png",
      alt: "排行榜：按赛季查看净结果、胜场与连胜",
    },
    {
      src: "/apps/poker-night/zh/shot-05-timer.png",
      alt: "盲注计时器：当前级别、下一级盲注，并支持锁屏实时活动",
    },
    {
      src: "/apps/poker-night/zh/shot-06-equity.png",
      alt: "胜率计算器：德州扑克手牌对范围的胜率",
    },
    {
      src: "/apps/poker-night/zh/shot-07-guide.png",
      alt: "家庭牌局指南：牌型、组局与礼仪文章",
    },
  ],
  trust: {
    title: "钱，只在朋友之间转",
    body: "扑克之夜只负责算账，从不经手你的钱。结算页面给出最少笔数的转账方案；点「支付」只会打开你已经在用的微信、支付宝等应用，金额不会预先填好。朋友之间怎么转账，还是一如既往。",
  },
  faqs: [
    {
      q: "我的数据存在哪里？",
      a: "只存在你的设备上，别处都没有。玩家姓名、买入、码量与历史记录都不会离开你的手机——应用没有后端，也没有账号系统。",
    },
    {
      q: "扑克之夜会经手资金吗？",
      a: "不会，从来不会。结算页面只是算出谁该转给谁多少；点「支付」只会打开你自己已经安装的微信、支付宝等应用，金额不会预先填好。扑克之夜从不接触、也不处理任何一笔支付。",
    },
    {
      q: "扑克之夜有广告吗？会跟踪我吗？",
      a: "没有。应用里完全没有广告，也不会跨其他应用或网站跟踪你，所以也没有跟踪授权弹窗。",
    },
    {
      q: "扑克之夜 Pro 多少钱？是订阅吗？",
      a: "Pro 是一次性可选购买，7.99 美元，永久拥有，不是订阅。账本、结算、战报卡片、主持工具和快速牌谱始终免费；Pro 增加深度功能：盲注计时器、往季与自定义赛季、深度洞察、完整年度回顾、ICM 分配计算器、GTO 预设、牌谱回放和 CSV 导出。之前买过「移除广告」的话，已经自动拥有全部 Pro 功能，无需重复购买。",
    },
    {
      q: "码量对不上怎么办？",
      a: "进行中页面底部实时显示总水上、总水下和差额，散场前就能发现问题。帐不平也可以照常结算，差额会标注在战报里。",
    },
    {
      q: "如何删除玩家或历史牌局？",
      a: "在名单或历史页面滑动或长按对应条目即可删除。删除立即从设备上移除——没有服务器副本。",
    },
  ],
  privacy: {
    updated: "2026-10-02",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如创建/结算牌局、添加玩家、运行胜率计算、页面浏览，以及 Firebase 使用的设备标识符；内购事件也会被匿名计数用于分析。用于了解应用的使用情况并加以改进。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
            "应用配置与指南更新（Firebase Remote Config / Firebase Hosting）：应用会用与上面分析功能相同的安装标识符，检查诸如“哪些功能已开启”之类的配置，以及家庭牌局指南的最新版本号；如果指南有更新，会从 Firebase Hosting 下载静态文件——这只是一次普通的网络请求，不会携带任何与你或你的牌局有关的信息。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有广告，也不跟踪：扑克之夜不展示任何广告，不使用设备的广告标识符，不跨其他应用或网站跟踪你，也从不请求 App 跟踪透明度（ATT）权限。没有账号、邮箱、通讯录、位置、照片或消息。你的牌局账本——玩家姓名、买入、码量、历史记录——只保存在你的设备上；除非你主动选择实时共享某一局（见下文），否则从不上传。应用没有账号系统。锁屏实时活动、桌面小组件与盲注计时器的提醒完全在设备本地生成——不会有任何牌局或计时信息被发送出去。",
        ],
      },
      {
        heading: "实时共享（可选）",
        body: [
          "如果你在牌局中点了「实时共享」，扑克之夜会上传这一局的只读快照，让同桌的朋友用自己的手机查看：你为今晚玩家填写的显示名字、买入、筹码数、盈亏、筹码折算金额、结算后的转账明细，以及你设置的牌局名称（如有）。快照存放在 Google Cloud Firestore（Firebase）中，以一个 128 位随机链接标识，并附带一个匿名的 Firebase 登录标识，只有你的设备才能更新或停止共享。它不与任何账号、邮箱、广告标识或分析标识关联。",
          "拿到链接或二维码的人都可以查看快照，但无法被搜索或列出。最后一次更新后满 48 小时（或牌局结算后满 24 小时），快照即不再可查看——之后的读取请求会被拒绝。你点击「停止共享」、删除该局，或结算后 24 小时（由应用自动完成，需应用再次运行时触发）都会直接删除快照；除此之外没有额外的服务器端删除保证。没有共享的牌局不会上传任何内容；客人在浏览器中打开链接时也不需要提供任何信息。",
        ],
      },
      {
        heading: "钱，只在朋友之间转",
        body: [
          "扑克之夜不会接触或处理任何一笔支付。结算页面会算出谁该转给谁多少；点「支付」只会打开你已经安装的微信、支付宝、Venmo、PayPal 等应用，金额不会预先填好。朋友之间怎么转账，还是一如既往。",
        ],
      },
      {
        heading: "内购",
        body: [
          "「扑克之夜 Pro」与之前的「移除广告」（购买后即自动解锁全部 Pro 功能）都是可选的一次性内购，完全由 Apple App Store 或 Google Play 处理，我们不会接触你的付款信息。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "随时在系统设置中关闭盲注计时器的通知与实时活动。",
            "在应用内删除任意玩家或牌局，即从设备上移除。",
            "随时停止实时共享；链接立即失效，快照随之删除。",
          ],
        ],
      },
      {
        heading: "儿童",
        body: [
          "扑克之夜不面向 13 岁以下儿童，也不会有意收集他们的个人信息。",
        ],
      },
      {
        heading: "联系方式",
        body: ["如有疑问：发邮件至 lei@appfactory.sg。"],
      },
      {
        heading: "政策变更",
        body: ["政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。"],
      },
    ],
  },
};

// Traditional Chinese, Taiwan conventions (裝置/設定/內購/當機).
const zhTw: AppLocalized = {
  name: "撲克之夜",
  storeName: "撲克之夜 — 牌局記帳",
  tagline: "買入即時記，結算一鍵清，戰報隨手發。",
  subtitle: "買入補碼隨手記，散場一鍵結算",
  oneLiner:
    "牌局進行時隨手記錄買入和補碼，散場時用最少筆數完成轉帳、金額與籌碼並列顯示，再產生一張戰報卡片發到群組。",
  statusNote: "已在 App Store 上線，Android 版本即將推出。",
  features: [
    {
      title: "金額優先的帳本",
      body: "先設定一手買入值多少錢，之後每一次買入、補碼和轉帳都會同時顯示金額與籌碼，半夜也不用心算換算。",
    },
    {
      title: "戰報卡片，直接發群組",
      body: "散場後自動產生一張清爽的戰報：贏家、排名和每一筆轉帳，直接分享到群組。",
    },
    {
      title: "結算之後，點「支付」就好",
      body: "最少筆數互轉，或者指定一人代收代付。點「支付」可以複製收款資訊，或開啟你自己的微信、支付寶——撲克之夜完全不經手這筆錢。",
    },
    {
      title: "排行榜與賽季",
      body: "按月、按賽季或全部時間查看淨結果、勝場與連勝，還能看任兩人的對戰紀錄。",
    },
    {
      title: "盲注計時器，鎖定畫面就看得到",
      body: "內建或自訂盲注結構，升盲有提醒；iOS 上支援鎖定畫面與動態島的即時動態，還有桌面小工具顯示今晚牌局。",
    },
    {
      title: "內建家庭牌局指南",
      body: "17 篇規則、牌型、組局與禮儀短文，附中英術語表——牌局進行到一半也不用上網查。",
    },
    {
      title: "四個分頁：今晚、玩家、研習、歷史",
      body: "「今晚」放著進行中的牌局和主持工具，「玩家」是名單與排行榜，「研習」是勝率工具與指南，「歷史」是所有過往牌局——一鍵直達。",
    },
    {
      title: "主持工具",
      body: "隨機座位與比大小定莊、依你的籌碼套組算出每人起始籌碼、含賞金的錦標賽獎金分配，還有選遊戲的轉盤。",
    },
    {
      title: "個人限額，只提醒不阻止",
      body: "替自己設補碼上限、止損或離場時間，到點會輕輕提醒。撲克之夜從不阻止補碼。",
    },
    {
      title: "玩家洞察與 16 枚徽章",
      body: "每位玩家的勝率、連勝與最大的一晚，以及依你的牌局自動獲得的 16 枚徽章。Pro 解鎖深度洞察。",
    },
    {
      title: "年度回顧：牌友的一年",
      body: "把一年（或一個賽季）的牌局做成可分享的故事：場次、時數、MVP 與宿敵。群組總覽免費，Pro 解鎖完整故事。",
    },
    {
      title: "研習：勝率、範圍與儲存局面",
      body: "手牌對手牌、手牌對範圍，最多三塊牌面，支援 ESG 模式、文字與滑桿的完整範圍編輯器，免費可儲存 3 個局面。Pro 增加 GTO 預設、勝率曲線與牌型分布。",
    },
    {
      title: "牌譜",
      body: "幾秒記下一手牌，免費使用。升級 Pro 後可逐條街錄入動作，之後隨時回放。",
    },
    {
      title: "無廣告，無訂閱",
      body: "撲克之夜沒有任何廣告，也不會跨 App 或跨網站追蹤你。無需註冊帳號，帳本只存在你的裝置上。中英雙語，支援大字體、旁白朗讀，淺色深色主題都有。",
    },
    {
      title: "撲克之夜 Pro",
      body: "一次性選購（7.99 美元），永久擁有，不是訂閱。Pro 解鎖盲注計時器、往季與自訂賽季（含兩人對比與賽季回顧）、深度玩家洞察、完整年度回顧、自訂獎金與 ICM 分配計算器、手牌對範圍勝率與 GTO 預設、ESG 模式、無限儲存局面、牌譜回放和 CSV 匯出。買過「移除廣告」？你已擁有 Pro。",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/zh/shot-01-share-card.png",
      alt: "戰報卡片：贏家、排名與誰轉誰多少，隨手可分享",
    },
    {
      src: "/apps/poker-night/zh/shot-02-live.png",
      alt: "進行中畫面：金額與籌碼並列顯示的買入與碼量，底部是帳目核對",
    },
    {
      src: "/apps/poker-night/zh/shot-03-settle.png",
      alt: "結算畫面：最少筆數的轉帳，金額與籌碼並列，點「支付」即可開啟支付 App",
    },
    {
      src: "/apps/poker-night/zh/shot-04-leaderboard.png",
      alt: "排行榜：按賽季查看淨結果、勝場與連勝",
    },
    {
      src: "/apps/poker-night/zh/shot-05-timer.png",
      alt: "盲注計時器：目前級別、下一級盲注，並支援鎖定畫面即時動態",
    },
    {
      src: "/apps/poker-night/zh/shot-06-equity.png",
      alt: "勝率計算器：德州撲克手牌對範圍的勝率",
    },
    {
      src: "/apps/poker-night/zh/shot-07-guide.png",
      alt: "家庭牌局指南：牌型、組局與禮儀文章",
    },
  ],
  trust: {
    title: "錢，只在朋友之間轉",
    body: "撲克之夜只負責算帳，從不經手你的錢。結算頁面給出最少筆數的轉帳方案；點「支付」只會開啟你已經在用的微信、支付寶等 App，金額不會預先填好。朋友之間怎麼轉帳，還是一如既往。",
  },
  faqs: [
    {
      q: "我的資料存在哪裡？",
      a: "只存在你的裝置上，別處都沒有。玩家姓名、買入、碼量與歷史記錄都不會離開你的手機——App 沒有後端，也沒有帳號系統。",
    },
    {
      q: "撲克之夜會經手資金嗎？",
      a: "不會，從來不會。結算頁面只是算出誰該轉給誰多少；點「支付」只會開啟你自己已經安裝的微信、支付寶等 App，金額不會預先填好。撲克之夜從不接觸、也不處理任何一筆付款。",
    },
    {
      q: "撲克之夜有廣告嗎？會追蹤我嗎？",
      a: "沒有。App 裡完全沒有廣告，也不會跨其他 App 或網站追蹤你，所以也沒有追蹤授權視窗。",
    },
    {
      q: "撲克之夜 Pro 多少錢？是訂閱嗎？",
      a: "Pro 是一次性選購，7.99 美元，永久擁有，不是訂閱。帳本、結算、戰報卡片、主持工具和快速牌譜始終免費；Pro 增加深度功能：盲注計時器、往季與自訂賽季、深度洞察、完整年度回顧、ICM 分配計算器、GTO 預設、牌譜回放和 CSV 匯出。之前買過「移除廣告」的話，已經自動擁有全部 Pro 功能，不必重複購買。",
    },
    {
      q: "碼量對不上怎麼辦？",
      a: "進行中頁面底部即時顯示總水上、總水下和差額，散場前就能發現問題。帳不平也可以照常結算，差額會標註在戰報裡。",
    },
    {
      q: "如何刪除玩家或歷史牌局？",
      a: "在名單或歷史頁面滑動或長按對應條目即可刪除。刪除後立即從裝置上移除——沒有伺服器副本。",
    },
  ],
  privacy: {
    updated: "2026-10-02",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如建立/結算牌局、新增玩家、執行勝率計算、頁面瀏覽，以及 Firebase 使用的裝置識別碼；內購事件也會被匿名計數用於分析。用於瞭解 App 的使用情況並加以改進。",
            "當機回報（Firebase Crashlytics）：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分連結。",
            "App 設定與指南更新（Firebase Remote Config / Firebase Hosting）：App 會用與上面分析功能相同的安裝識別碼，檢查諸如「哪些功能已開啟」之類的設定，以及家庭牌局指南的最新版本號；如果指南有更新，會從 Firebase Hosting 下載靜態檔案——這只是一次普通的網路請求，不會帶有任何與你或你的牌局相關的資訊。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有廣告，也不追蹤：撲克之夜不顯示任何廣告，不使用裝置的廣告識別碼，不跨其他 App 或網站追蹤你，也從不請求 App 追蹤透明度（ATT）權限。沒有帳號、Email、通訊錄、位置、照片或訊息。你的牌局帳本——玩家姓名、買入、碼量、歷史記錄——只保存在你的裝置上；除非你主動選擇即時分享某一局（見下文），否則從不上傳。App 沒有帳號系統。鎖定畫面即時動態、桌面小工具與盲注計時器的提醒完全在裝置本機產生——不會有任何牌局或計時資訊被送出去。",
        ],
      },
      {
        heading: "即時分享（選用）",
        body: [
          "如果你在牌局中點了「即時分享」，撲克之夜會上傳這一局的唯讀快照，讓同桌的朋友用自己的手機查看：你為今晚玩家填寫的顯示名稱、買入、籌碼數、盈虧、籌碼換算金額、結算後的轉帳明細，以及你設定的牌局名稱（如有）。快照存放在 Google Cloud Firestore（Firebase）中，以一個 128 位元隨機連結識別，並附帶一個匿名的 Firebase 登入識別碼，只有你的裝置才能更新或停止分享。它不與任何帳號、Email、廣告識別碼或分析識別碼關聯。",
          "拿到連結或 QR code 的人都可以查看快照，但無法被搜尋或列出。最後一次更新後滿 48 小時（或牌局結算後滿 24 小時），快照即不再可查看——之後的讀取請求會被拒絕。你點擊「停止分享」、刪除該局，或結算後 24 小時（由 App 自動完成，需 App 再次執行時觸發）都會直接刪除快照；除此之外沒有額外的伺服器端刪除保證。沒有分享的牌局不會上傳任何內容；客人在瀏覽器中開啟連結時也不需要提供任何資訊。",
        ],
      },
      {
        heading: "錢，只在朋友之間轉",
        body: [
          "撲克之夜不會接觸或處理任何一筆付款。結算頁面會算出誰該轉給誰多少；點「支付」只會開啟你已經安裝的微信、支付寶、Venmo、PayPal 等 App，金額不會預先填好。朋友之間怎麼轉帳，還是一如既往。",
        ],
      },
      {
        heading: "內購",
        body: [
          "「撲克之夜 Pro」與先前的「移除廣告」（購買後會自動解鎖全部 Pro 功能）都是選購的一次性內購，完全由 Apple App Store 或 Google Play 處理，我們不會接觸你的付款資訊。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "隨時在系統設定中關閉盲注計時器的通知與即時動態。",
            "在 App 內刪除任意玩家或牌局，即從裝置上移除。",
            "隨時停止即時分享；連結立即失效，快照隨之刪除。",
          ],
        ],
      },
      {
        heading: "兒童",
        body: ["撲克之夜不面向 13 歲以下兒童，也不會刻意收集他們的個人資訊。"],
      },
      {
        heading: "聯絡方式",
        body: ["如有疑問：來信 lei@appfactory.sg。"],
      },
      {
        heading: "政策變更",
        body: ["政策變更時我們會更新本頁面；重大變更會在 App 的更新說明中註明。"],
      },
    ],
  },
};

export const pokerNight: AppContent = {
  slug: "poker-night",
  buildNumber: 1,
  version: "2.0.0",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/us/app/poker-night-home-game-ledger/id6788786222",
  platforms: ["iOS", "Android"],
  icon: "/apps/poker-night/icon.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
