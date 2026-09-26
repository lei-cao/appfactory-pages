// Poker Night — v2.0 copy. Sourced from the app's own fastlane metadata
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
      title: "Hand vs. range equity",
      body: "The Hold'em and Omaha calculator now runs your hand against a full range, not just another hand — exact or Monte Carlo.",
    },
    {
      title: "Offline, bilingual, accessible",
      body: "No account, no sign-up — your ledger stays on your device. English and 简体中文, with Dynamic Type, VoiceOver, and light and dark themes.",
    },
    {
      title: "Poker Night Pro",
      body: "A one-time purchase, no subscription: unlocks the blinds timer, past and custom seasons, head-to-head, the season recap card, hand-vs-range odds and CSV export. Already bought Remove Ads? You already have Pro.",
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
      q: "How do I remove ads?",
      a: "Settings → Remove ads, or buy Poker Night Pro directly — a one-time purchase that includes ad removal plus everything else Pro unlocks. Already bought Remove Ads? You already have every Pro feature, at no extra cost.",
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
    updated: "2026-09-26",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous usage events such as session created/settled, players added, equity calculations run, and screen views, plus device identifiers used by Firebase. We use this to understand how the app is used and improve it.",
            "Crash reports (Firebase Crashlytics): technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
            "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier to serve and measure ads. On iOS we ask permission via App Tracking Transparency first; in regions covered by GDPR we show Google's consent form (UMP) before any ads load.",
            "App configuration and guide updates (Firebase Remote Config and Firebase Hosting): the app checks for configuration such as which screens may show ads and the current version of the home-game guide, using the same installation identifier as the analytics line above. If the guide has new content, it's downloaded as a plain static file from Firebase Hosting — a normal web request that carries nothing about you or your games.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, no emails, no contacts, no location, no photos, no messages. Your game ledger — player names, buy-ins, chip counts, session history — is stored only on your device. Your ledger is never uploaded; the app has no accounts and no server that stores your data. Live Activities, widgets and blinds-timer alerts are generated entirely on your device — nothing about a running game or a timer is ever sent anywhere.",
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
          "Poker Night Pro and the earlier Remove ads purchase (which unlocks all of Pro) are one-time purchases processed entirely by Apple App Store / Google Play. We never see your payment details.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the app works identically.",
            "Change ad-consent choices anytime in Settings → \"Manage privacy consent\".",
            "Remove ads permanently via Poker Night Pro (or the earlier Remove ads purchase, which already includes it).",
            "Turn off blinds-timer notifications and Live Activities anytime in your device's notification settings.",
            "Delete any player or session in the app to remove it from your device.",
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
      title: "手牌对范围胜率",
      body: "德州与奥马哈胜率计算器新增「手牌对范围」，不再只是手牌对手牌，精确枚举或蒙特卡洛都支持。",
    },
    {
      title: "完全离线、中英双语、无障碍",
      body: "无需注册账号，账本只存在你的设备上。中英双语，支持大字体、旁白朗读，浅色深色主题都有。",
    },
    {
      title: "扑克之夜 Pro",
      body: "一次性购买，不是订阅：解锁去广告、盲注计时器、往季与自定义赛季、两人对比、赛季战报卡片、手牌对范围胜率与 CSV 导出。之前买过「移除广告」的话，已经自动拥有全部 Pro 功能。",
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
      q: "如何移除广告？",
      a: "设置 → 移除广告，或直接购买「扑克之夜 Pro」（一次性内购，包含去广告和全部 Pro 功能）。如果你之前买过「移除广告」，已经自动拥有 Pro 的全部权益，无需重复购买。",
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
    updated: "2026-09-26",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如创建/结算牌局、添加玩家、运行胜率计算、页面浏览，以及 Firebase 使用的设备标识符。用于了解应用的使用情况并加以改进。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
            "广告数据（Google AdMob）：展示广告时，Google 的 SDK 可能使用设备的广告标识符来投放和衡量广告。iOS 上会先通过 App 跟踪透明度（ATT）征求许可；在 GDPR 适用地区，加载任何广告前会先显示 Google 的同意表单（UMP）。",
            "应用配置与指南更新（Firebase Remote Config / Firebase Hosting）：应用会用与上面分析功能相同的安装标识符，检查诸如“哪些页面可以展示广告”之类的配置，以及家庭牌局指南的最新版本号；如果指南有更新，会从 Firebase Hosting 下载静态文件——这只是一次普通的网络请求，不会携带任何与你或你的牌局有关的信息。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有账号、邮箱、通讯录、位置、照片或消息。你的牌局账本——玩家姓名、买入、码量、历史记录——只保存在你的设备上，从不上传；应用没有账号系统，也没有存储你数据的服务器。锁屏实时活动、桌面小组件与盲注计时器的提醒完全在设备本地生成——不会有任何牌局或计时信息被发送出去。",
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
          "「扑克之夜 Pro」与之前的「移除广告」（购买后即自动解锁全部 Pro 功能）都是一次性内购，完全由 Apple App Store 或 Google Play 处理，我们不会接触你的付款信息。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 权限弹窗中拒绝跟踪——应用功能完全不受影响。",
            "随时在 设置 →“管理隐私许可”中更改广告同意选项。",
            "通过「扑克之夜 Pro」（或之前购买的「移除广告」，已自动包含 Pro）永久移除广告。",
            "随时在系统设置中关闭盲注计时器的通知与实时活动。",
            "在应用内删除任意玩家或牌局，即从设备上移除。",
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
      title: "手牌對範圍勝率",
      body: "德州與奧馬哈勝率計算器新增「手牌對範圍」，不再只是手牌對手牌，精確枚舉或蒙地卡羅都支援。",
    },
    {
      title: "完全離線、中英雙語、無障礙",
      body: "無需註冊帳號，帳本只存在你的裝置上。中英雙語，支援大字體、旁白朗讀，淺色深色主題都有。",
    },
    {
      title: "撲克之夜 Pro",
      body: "一次性購買，不是訂閱：解鎖去廣告、盲注計時器、往季與自訂賽季、兩人對比、賽季戰報卡片、手牌對範圍勝率與 CSV 匯出。之前買過「移除廣告」的話，已經自動擁有全部 Pro 功能。",
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
      q: "如何移除廣告？",
      a: "設定 → 移除廣告，或直接購買「撲克之夜 Pro」（一次性內購，包含去廣告和全部 Pro 功能）。如果你之前買過「移除廣告」，已經自動擁有 Pro 的全部權益，不必重複購買。",
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
    updated: "2026-09-26",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如建立/結算牌局、新增玩家、執行勝率計算、頁面瀏覽，以及 Firebase 使用的裝置識別碼。用於瞭解 App 的使用情況並加以改進。",
            "當機回報（Firebase Crashlytics）：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分連結。",
            "廣告資料（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用裝置的廣告識別碼來投放和衡量廣告。iOS 上會先透過 App 追蹤透明度（ATT）徵求許可；在 GDPR 適用地區，載入任何廣告前會先顯示 Google 的同意表單（UMP）。",
            "App 設定與指南更新（Firebase Remote Config / Firebase Hosting）：App 會用與上面分析功能相同的安裝識別碼，檢查諸如「哪些頁面可以顯示廣告」之類的設定，以及家庭牌局指南的最新版本號；如果指南有更新，會從 Firebase Hosting 下載靜態檔案——這只是一次普通的網路請求，不會帶有任何與你或你的牌局相關的資訊。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有帳號、Email、通訊錄、位置、照片或訊息。你的牌局帳本——玩家姓名、買入、碼量、歷史記錄——只保存在你的裝置上，從不上傳；App 沒有帳號系統，也沒有儲存你資料的伺服器。鎖定畫面即時動態、桌面小工具與盲注計時器的提醒完全在裝置本機產生——不會有任何牌局或計時資訊被送出去。",
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
          "「撲克之夜 Pro」與先前的「移除廣告」（購買後會自動解鎖全部 Pro 功能）都是一次性內購，完全由 Apple App Store 或 Google Play 處理，我們不會接觸你的付款資訊。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 權限視窗中拒絕追蹤——App 功能完全不受影響。",
            "隨時在 設定 →「管理隱私許可」中更改廣告同意選項。",
            "透過「撲克之夜 Pro」（或先前購買的「移除廣告」，已自動包含 Pro）永久移除廣告。",
            "隨時在系統設定中關閉盲注計時器的通知與即時動態。",
            "在 App 內刪除任意玩家或牌局，即從裝置上移除。",
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
