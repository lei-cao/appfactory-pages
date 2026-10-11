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
import { pokerNightLanding } from "./poker-night-landing";

const en: AppLocalized = {
  name: "Poker Night",
  storeName: "Poker Night: Home Game Tracker",
  tagline: "Settle a home game in seconds.",
  metaTitle: "Poker Night: Home Game Tracker, Blinds Timer & Odds Trainer",
  metaDescription:
    "Track poker buy-ins and rebuys, run a blinds timer and settle a home game in seconds. Plus an equity calculator, pot odds and poker trainers. No ads.",
  subtitle: "Blinds timer, odds & trainer",
  oneLiner:
    "Poker Night runs your home game and sharpens your play: track buy-ins and rebuys, run the blinds timer, settle the night in the fewest transfers and share a results card with the group chat. Between nights, an equity calculator, pot odds and one-handed trainers. No ads, no subscription.",
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
      body: "Get the fewest possible transfers, or have everyone square up with one banker. Tap Pay to copy the line and the payee's saved Venmo, Zelle or PayPal details, ready to paste into the app you already use. Poker Night never touches the money.",
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
      body: "An equity calculator for Hold'em, Omaha and ESG with up to three boards, a range editor (text and slider), pot odds, outs, implied odds, fold equity, MDF, SPR and 40+ common situations. Pro adds GTO presets, the equity graph and unlimited saved spots.",
    },
    {
      title: "Odds trainers you can play one-handed",
      body: "Practice pot odds, outs, equity and more in quick questions: 10 free a day, with your recent answers kept. Pro unlocks unlimited questions, accuracy stats and weak spots.",
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
      body: "One optional purchase (US$7.99), yours forever, no subscription. Pro adds unlimited blinds clock nights, unlimited trainer questions and stats, unlimited chip sets, past and custom seasons with head-to-head and recaps, deep player insights, the full Wrapped story, custom payouts with an ICM deal calculator, GTO presets, ESG mode, unlimited saved spots, hand replays and CSV export. Bought Remove Ads before? You already have Pro.",
    },
  ],
  screenshots: pokerNightLanding.en.screens.shots,
  trust: {
    title: "Money stays between friends",
    body: "Poker Night keeps score — it never touches your money. Settle-up works out the fewest transfers to get everyone even, and tapping Pay copies the line and the payee's payment details so you can paste them into the app you already use: Venmo, Zelle, PayPal, WeChat, Alipay or similar. Paying each other happens the same way it always has, between you and your friends.",
  },
  faqs: [
    {
      q: "Does Poker Night have a poker odds calculator?",
      a: "Yes. The Study tab has an equity calculator for Hold'em, Omaha and ESG (hand vs. hand or vs. a range, up to three boards) with a card keyboard made for poker, plus pot odds, outs, implied odds, fold equity, MDF, SPR and ICM. The calculators are free.",
    },
    {
      q: "Are the poker trainers free?",
      a: "Six one-handed trainers (equity, pot odds, outs, bluffs and MDF, fold equity and more) give you 10 free questions a day, and every miss explains itself. Pro unlocks unlimited questions with accuracy stats and weak spots.",
    },
    {
      q: "Does the blinds timer keep running when my phone is locked?",
      a: "Yes. On iPhone the level, blinds and countdown stay on the Lock Screen and in the Dynamic Island as a Live Activity, with a chime and a notification when the blinds go up. Android shows an ongoing notification. The timer is free for 3 nights; Pro makes it unlimited.",
    },
    {
      q: "Where is my data stored?",
      a: "On your device. Player names, buy-ins, chip counts and session history stay on your phone, and there is no account system. The one exception is optional: if you choose to share a night live with your table, a temporary copy of that night is sent so guests can follow along.",
    },
    {
      q: "Does Poker Night move money?",
      a: "No — never. Settle-up just works out who pays whom; tapping Pay only copies the line and the payment details you saved for that player. Poker Night never opens a payment app, and never sees or processes a payment.",
    },
    {
      q: "Does Poker Night show ads or track me?",
      a: "No. There are no ads at all, and the app doesn't track you across other apps or websites, so there's no tracking prompt either.",
    },
    {
      q: "What does Poker Night Pro cost, and is it a subscription?",
      a: "Pro is a single optional purchase of US$7.99, yours forever. There is no subscription. The ledger, settle-up, share card, host tools and quick hand log stay free. Pro adds depth: unlimited blinds timer nights, past and custom seasons, deep insights, the full Wrapped story, ICM deal calculator, GTO presets, hand replays and CSV export. Already bought Remove Ads? You already have every Pro feature, at no extra cost.",
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
    updated: "2026-10-11",
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
          "Poker Night never sees or processes a payment. Settle-up works out who pays whom; tapping Pay only copies the line and the payment details you saved (for example a Venmo or Zelle handle) so you can paste them into the payment app you already use, with no amount filled in. Paying each other happens the same way it always has, between you and your friends.",
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
  storeName: "扑克之夜 — 德州扑克牌局记账",
  tagline: "家庭牌局，几秒算清。",
  metaTitle: "扑克之夜：德州扑克牌局记账、盲注计时、胜率计算器与德扑训练",
  metaDescription:
    "记录德州扑克朋友局的买入与补码，盲注计时，散场几秒算清谁付谁；还有胜率计算器、底池赔率与德扑训练。无广告，无需账号，Pro 一次买断。",
  subtitle: "盲注计时·胜率计算·德扑训练",
  oneLiner:
    "扑克之夜帮你组好朋友局，也帮你把牌打得更好：随手记录买入和补码，盲注计时，散场用最少笔数结算，再把战报卡片发到群里。牌局之间，用胜率计算器、底池赔率和单手训练练牌。无广告，无订阅。",
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
      body: "最少笔数互转，或者指定一人代收代付。点「支付」复制转账信息和收款人保存的收款方式，粘贴到你常用的应用里——扑克之夜完全不经手这笔钱。",
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
      body: "德州、奥马哈与 ESG 胜率计算器，最多三块牌面，文字与滑杆的范围编辑器，底池赔率、补牌、隐含赔率、弃牌率、最小防守频率、筹码底池比，以及 40 多个常见局面。Pro 增加 GTO 预设、胜率曲线与无限保存局面。",
    },
    {
      title: "可单手操作的赔率训练",
      body: "用快问快答练底池赔率、补牌、胜率等：每天 10 题免费，并保留最近的答题记录。Pro 解锁不限题数、正确率统计与薄弱项。",
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
      body: "一次性可选购买（7.99 美元），永久拥有，不是订阅。Pro 解锁不限次数的盲注计时、不限题数的训练与统计、不限数量的筹码套装、往季与自定义赛季（含两人对比与赛季回顾）、深度玩家洞察、完整年度回顾、自定义奖金与 ICM 分配计算器、GTO 预设、ESG 模式、无限保存局面、牌谱回放和 CSV 导出。买过「移除广告」？你已拥有 Pro。",
    },
  ],
  screenshots: pokerNightLanding["zh-cn"].screens.shots,
  trust: {
    title: "钱，只在朋友之间转",
    body: "扑克之夜只负责算账，从不经手你的钱。结算页面给出最少笔数的转账方案；点「支付」会复制转账信息和收款人的收款方式，你粘贴到微信、支付宝等常用应用里即可。朋友之间怎么转账，还是一如既往。",
  },
  faqs: [
    {
      q: "扑克之夜有胜率计算器吗？",
      a: "有。「学牌」里有德州、奥马哈与 ESG 胜率计算器（手牌对手牌或对范围，最多三块牌面），配扑克专用选牌键盘；还有底池赔率、补牌、隐含赔率、弃牌率、最小防守频率、筹码底池比和 ICM。计算器都免费。",
    },
    {
      q: "德扑训练免费吗？",
      a: "六种单手训练（胜率、底池赔率、补牌、诈唬与最小防守频率、弃牌率等）每天 10 题免费，答错会讲清原因。Pro 解锁不限题数，附正确率统计和薄弱点。",
    },
    {
      q: "锁屏后盲注计时还会继续吗？",
      a: "会。iPhone 上级别、盲注和倒计时以实时活动显示在锁屏和灵动岛上，升盲时有提示音和通知；Android 显示常驻通知。盲注计时免费 3 晚，Pro 不限次数。",
    },
    {
      q: "我的数据存在哪里？",
      a: "只存在你的设备上。玩家姓名、买入、码量与历史记录都留在你的手机里，也没有账号系统。唯一的例外由你决定：如果你选择与牌桌实时共享某一局，会上传这一局的临时副本，方便牌友同步查看。",
    },
    {
      q: "扑克之夜会经手资金吗？",
      a: "不会，从来不会。结算页面只是算出谁该转给谁多少；点「支付」只会复制转账信息和你为该玩家保存的收款方式。扑克之夜不会打开任何支付应用，也从不接触、处理任何一笔支付。",
    },
    {
      q: "扑克之夜有广告吗？会跟踪我吗？",
      a: "没有。应用里完全没有广告，也不会跨其他应用或网站跟踪你，所以也没有跟踪授权弹窗。",
    },
    {
      q: "扑克之夜 Pro 多少钱？是订阅吗？",
      a: "Pro 是一次性可选购买，7.99 美元，永久拥有，不是订阅。账本、结算、战报卡片、主持工具和快速牌谱始终免费；Pro 增加深度功能：不限次数的盲注计时、往季与自定义赛季、深度洞察、完整年度回顾、ICM 分配计算器、GTO 预设、牌谱回放和 CSV 导出。之前买过「移除广告」的话，已经自动拥有全部 Pro 功能，无需重复购买。",
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
    updated: "2026-10-11",
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
          "扑克之夜不会接触或处理任何一笔支付。结算页面会算出谁该转给谁多少；点「支付」只会复制转账信息和你保存的收款方式（例如微信号或支付宝账号），方便你粘贴到常用的支付应用里。朋友之间怎么转账，还是一如既往。",
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
  storeName: "撲克之夜 — 德州撲克牌局記帳",
  tagline: "家庭牌局，幾秒算清。",
  metaTitle: "撲克之夜：德州撲克牌局記帳、盲注計時、勝率計算器與德撲訓練",
  metaDescription:
    "記錄德州撲克朋友局的買入與補碼，盲注計時，散場幾秒算清誰付誰；還有勝率計算器、底池賠率與德撲訓練。無廣告，無需帳號，Pro 一次買斷。",
  subtitle: "盲注計時·勝率計算·德撲訓練",
  oneLiner:
    "撲克之夜幫你組好朋友局，也幫你把牌打得更好：隨手記錄買入和補碼，盲注計時，散場用最少筆數結算，再把戰報卡片發到群組。牌局之間，用勝率計算器、底池賠率和單手訓練練牌。無廣告，無訂閱。",
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
      body: "最少筆數互轉，或者指定一人代收代付。點「支付」複製轉帳資訊和收款人儲存的收款方式，貼到你常用的 App 裡——撲克之夜完全不經手這筆錢。",
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
      body: "德州、奧馬哈與 ESG 勝率計算器，最多三塊牌面，文字與滑桿的範圍編輯器，底池賠率、補牌、隱含賠率、棄牌率、最小防守頻率、籌碼底池比，以及 40 多個常見局面。Pro 增加 GTO 預設、勝率曲線與無限儲存局面。",
    },
    {
      title: "可單手操作的賠率訓練",
      body: "用快問快答練底池賠率、補牌、勝率等：每天 10 題免費，並保留最近的答題記錄。Pro 解鎖不限題數、正確率統計與弱項。",
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
      body: "一次性選購（7.99 美元），永久擁有，不是訂閱。Pro 解鎖不限次數的盲注計時、不限題數的訓練與統計、不限數量的籌碼套裝、往季與自訂賽季（含兩人對比與賽季回顧）、深度玩家洞察、完整年度回顧、自訂獎金與 ICM 分配計算器、GTO 預設、ESG 模式、無限儲存局面、牌譜回放和 CSV 匯出。買過「移除廣告」？你已擁有 Pro。",
    },
  ],
  screenshots: pokerNightLanding["zh-tw"].screens.shots,
  trust: {
    title: "錢，只在朋友之間轉",
    body: "撲克之夜只負責算帳，從不經手你的錢。結算頁面給出最少筆數的轉帳方案；點「支付」會複製轉帳資訊和收款人的收款方式，你貼到常用的支付 App 裡即可。朋友之間怎麼轉帳，還是一如既往。",
  },
  faqs: [
    {
      q: "撲克之夜有勝率計算器嗎？",
      a: "有。「學牌」裡有德州、奧馬哈與 ESG 勝率計算器（手牌對手牌或對範圍，最多三塊牌面），配撲克專用選牌鍵盤；還有底池賠率、補牌、隱含賠率、棄牌率、最小防守頻率、籌碼底池比和 ICM。計算器都免費。",
    },
    {
      q: "德撲訓練免費嗎？",
      a: "六種單手訓練（勝率、底池賠率、補牌、詐唬與最小防守頻率、棄牌率等）每天 10 題免費，答錯會講清原因。Pro 解鎖不限題數，附正確率統計和弱點。",
    },
    {
      q: "鎖定畫面後盲注計時還會繼續嗎？",
      a: "會。iPhone 上級別、盲注和倒數以即時動態顯示在鎖定畫面和動態島上，升盲時有提示音和通知；Android 顯示常駐通知。盲注計時免費 3 晚，Pro 不限次數。",
    },
    {
      q: "我的資料存在哪裡？",
      a: "只存在你的裝置上。玩家姓名、買入、碼量與歷史記錄都留在你的手機裡，也沒有帳號系統。唯一的例外由你決定：如果你選擇與牌桌即時共享某一局，會上傳這一局的暫時副本，方便牌友同步查看。",
    },
    {
      q: "撲克之夜會經手資金嗎？",
      a: "不會，從來不會。結算頁面只是算出誰該轉給誰多少；點「支付」只會複製轉帳資訊和你為該玩家儲存的收款方式。撲克之夜不會開啟任何支付 App，也從不接觸、處理任何一筆付款。",
    },
    {
      q: "撲克之夜有廣告嗎？會追蹤我嗎？",
      a: "沒有。App 裡完全沒有廣告，也不會跨其他 App 或網站追蹤你，所以也沒有追蹤授權視窗。",
    },
    {
      q: "撲克之夜 Pro 多少錢？是訂閱嗎？",
      a: "Pro 是一次性選購，7.99 美元，永久擁有，不是訂閱。帳本、結算、戰報卡片、主持工具和快速牌譜始終免費；Pro 增加深度功能：不限次數的盲注計時、往季與自訂賽季、深度洞察、完整年度回顧、ICM 分配計算器、GTO 預設、牌譜回放和 CSV 匯出。之前買過「移除廣告」的話，已經自動擁有全部 Pro 功能，不必重複購買。",
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
    updated: "2026-10-11",
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
          "撲克之夜不會接觸或處理任何一筆付款。結算頁面會算出誰該轉給誰多少；點「支付」只會複製轉帳資訊和你儲存的收款方式（例如 Venmo 帳號或 LINE Pay 帳號），方便你貼到常用的支付 App 裡。朋友之間怎麼轉帳，還是一如既往。",
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

const PN_UTM =
  "utm_source=poker-night.appfactory.sg&utm_medium=referral&utm_campaign=crosspromo";

export const pokerNight: AppContent = {
  slug: "poker-night",
  category: "app",
  buildNumber: 1,
  version: "2.0.0",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/us/app/poker-night-home-game-tracker/id6788786222",
  platforms: ["iOS", "Android"],
  icon: "/apps/poker-night/icon.png",
  // Cross-promo: surface TiltFree to players who also want to study hands.
  studioLink: {
    urls: {
      en: `https://www.pokertools.ai?${PN_UTM}`,
      "zh-cn": `https://www.pokertools.ai/zh-Hans?${PN_UTM}`,
      "zh-tw": `https://www.pokertools.ai/zh-Hant?${PN_UTM}`,
    },
    text: {
      en: "Want to study the hands you play? TiltFree is a hand journal for live players.",
      "zh-cn":
        "想复盘自己打过的牌？TiltFree 是一款专为现场玩家设计的手牌记录本。",
      "zh-tw":
        "想復盤自己打過的牌？TiltFree 是一款專為現場玩家設計的手牌記錄本。",
    },
  },
  ogImage: "/apps/poker-night/og.png",
  proOffer: { name: "Poker Night Pro (one-time in-app purchase)", price: "7.99" },
  appStoreId: "6788786222",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
