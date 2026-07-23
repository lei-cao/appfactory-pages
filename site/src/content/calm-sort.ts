// Calm Sort — content in all three locales, plus the copy for its bespoke
// landing page (src/components/calm-sort/landing.tsx). The subdomain gets a
// warm "izakaya" theme via [data-app="calm-sort"] in globals.css.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "Calm Sort",
  storeName: "Calm Sort: Sushi Puzzle Game",
  tagline: "Sort. Breathe. Repeat.",
  subtitle: "Relaxing zen escape. No timers",
  oneLiner:
    "Sort sushi onto bento serving lanes until every lane holds one kind. One-thumb calm, offline forever — no energy, no lives, no timers, ever.",
  statusNote: "iOS build submitted to App Review. Android release in progress.",
  metaTitle: "Calm Sort: Sushi Puzzle Game — a relaxing sort puzzle with no timers",
  metaDescription:
    "Calm Sort is the honest sushi sort puzzle: 200 verified-solvable levels across 10 worlds, free unlimited undo, no energy, no lives, no timers — and one $2.99 purchase removes every ad forever. Offline, no account.",
  features: [
    {
      title: "200 levels, all provably fair",
      body: "Every one of the 200 levels across 10 worlds is machine-verified solvable before it ships. If you're stuck, it's a puzzle — never a paywall.",
    },
    {
      title: "Ten worlds, ten menus",
      body: "Climb from a casual nigiri counter to a premium omakase spread. Each world serves its own plates and its own pace — gentle starts, satisfying finales, never a wall.",
    },
    {
      title: "Late-game twists",
      body: "Locked lanes, sealed plates, and mystery pieces that hide again if you look away. The rules stay simple; the boards get delightfully devious.",
    },
    {
      title: "A fresh challenge every day",
      body: "One new daily puzzle each day, plus an Endless mode that keeps getting tougher for as long as you keep your streak of calm.",
    },
    {
      title: "Sounds like a quiet kitchen",
      body: "Soft ambient music with ceramic-and-wood sound design. Plates click, lanes slide, nothing beeps at you.",
    },
    {
      title: "One-thumb, anywhere",
      body: "Drag or tap — play as fast as you think. Works completely offline with no account, on the train or thirty thousand feet above it.",
    },
  ],
  screenshots: [
    {
      src: "/apps/calm-sort/shot-home.png",
      alt: "Calm Sort home screen: a wooden sushi counter with Play, Daily, and Endless buttons under cherry blossoms",
    },
    {
      src: "/apps/calm-sort/shot-board.png",
      alt: "A Calm Sort puzzle board: sushi plates being sorted across six wooden serving lanes",
    },
    {
      src: "/apps/calm-sort/shot-worlds.png",
      alt: "The Worlds map: a winding conveyor path of levels passing torii gates for World 2 and World 3",
    },
    {
      src: "/apps/calm-sort/shot-promises.png",
      alt: "The promises screen listing Calm Sort's honest-game promises",
    },
    {
      src: "/apps/calm-sort/shot-settings.png",
      alt: "Settings screen with sound, haptics, and privacy controls on warm wood",
    },
  ],
  trust: {
    title: "The honest sort puzzle",
    body: "No energy, no lives, no timers. Restart never reshuffles. Undo is always free and unlimited. Every level is machine-verified solvable — and one $2.99 purchase removes every ad, including the optional ones, forever.",
  },
  faqs: [
    {
      q: "Is Calm Sort free?",
      a: "Yes. All 200 levels, the daily challenge, and Endless mode are free, with occasional ads between levels only — never during play. A single $2.99 purchase removes every ad permanently.",
    },
    {
      q: "What exactly does Remove Ads include?",
      a: "Everything. One purchase removes every ad in the game — including the optional rewarded ones — and hints become free. It's a one-time purchase, processed by the App Store, and it lasts forever.",
    },
    {
      q: "Are there timers, lives, or energy?",
      a: "No, and there never will be. You can play one level a month or fifty in a night; nothing recharges, expires, or locks you out.",
    },
    {
      q: "Does restarting a level reshuffle it?",
      a: "No. Restart gives you the exact same board, so you can actually learn a hard level instead of rerolling for an easier one.",
    },
    {
      q: "How does the sorting work?",
      a: "Only the front sushi — the piece nearest the serving end — can move. Place it on another lane and pieces snap forward. A lane is done when every plate on it holds the same kind.",
    },
    {
      q: "Do I need an account or an internet connection?",
      a: "Neither. There is no account and no sign-up, and the whole game works offline. Your progress, stars, and daily streak are stored only on your device.",
    },
    {
      q: "Can a level be unsolvable?",
      a: "No. Every level is machine-verified solvable before it ships — including the late-game boards with locked lanes, sealed plates, and mystery pieces.",
    },
  ],
  privacy: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous gameplay events such as level start/complete, hints used, and screen views, plus device identifiers used by Firebase. We use this to understand how the game is played and improve it.",
            "Crash reports (Firebase Crashlytics): technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
            "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier to serve and measure ads. On iOS we ask permission via App Tracking Transparency first; in regions covered by GDPR we show Google's consent form (UMP) before any ads load. After the one-time \"Remove Ads\" purchase the app shows no ads at all.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, no names, no emails, no contacts, no location, no photos, no messages. Your level progress, stars, and daily streak are stored only on your device. The app has no backend.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "The one-time \"Remove Ads\" purchase is processed entirely by Apple App Store / Google Play. We never see your payment details. Removing ads removes every ad in the game, including optional rewarded ads.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the game works identically.",
            "Change ad-consent choices anytime in Settings → \"Manage privacy consent\".",
            "Remove all ads permanently via the in-app purchase.",
          ],
        ],
      },
      {
        heading: "Children",
        body: [
          "Calm Sort is not directed at children under 13 and does not knowingly collect personal information from them.",
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
  terms: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "License",
        body: [
          "We grant you a personal, non-exclusive, non-transferable license to install and play Calm Sort on devices you own or control, for your own non-commercial use, subject to the App Store or Google Play terms under which you obtained it.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "The one-time \"Remove Ads\" purchase is processed by Apple App Store / Google Play under their payment terms. It permanently removes every ad in the game, including optional rewarded ads, and makes hints free. Restore it anytime on a new device via the store's restore-purchases mechanism (Settings → Restore purchases). Refunds are handled by the store, not by us.",
        ],
      },
      {
        heading: "Fair play, honestly kept",
        body: [
          "We publish gameplay promises (no energy, no lives, no timers; restart never reshuffles; free unlimited undo; every level machine-verified solvable). We intend to keep them; they are product commitments, not additional legal warranties.",
        ],
      },
      {
        heading: "What you may not do",
        body: [
          [
            "Reverse-engineer, decompile, or modify the app except where law expressly permits.",
            "Resell, rent, or redistribute the app or its assets.",
            "Use the app in any unlawful way.",
          ],
        ],
      },
      {
        heading: "Disclaimer & liability",
        body: [
          "Calm Sort is provided \"as is\", without warranties of any kind to the fullest extent permitted by law. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid for it in the twelve months before the claim.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of Singapore. Nothing in them limits any non-waivable consumer rights in your country of residence.",
        ],
      },
      {
        heading: "Changes & contact",
        body: [
          "We may update these terms; material changes will be noted in app release notes. Continued use after a change means you accept the new terms. Questions: lei@appfactory.sg.",
        ],
      },
    ],
  },
};

const zhCn: AppLocalized = {
  name: "Calm Sort",
  storeName: "Calm Sort：寿司分拣解谜",
  tagline: "分拣。呼吸。再来一局。",
  subtitle: "禅意解压小游戏，没有倒计时",
  oneLiner:
    "把寿司分拣到便当出餐道上，直到每条道只剩一种。单手可玩、完全离线——没有体力、没有生命值、没有倒计时，永远没有。",
  statusNote: "iOS 版本已提交 App Store 审核，Android 版本筹备中。",
  metaTitle: "Calm Sort：寿司分拣解谜 — 没有倒计时的放松分类游戏",
  metaDescription:
    "Calm Sort 是「诚实的分拣解谜」：10 个世界、200 个经机器验证可解的关卡，撤销永久免费，没有体力、生命值和倒计时——一次 $2.99 内购即可永久移除所有广告。离线可玩，无需账号。",
  features: [
    {
      title: "200 关，关关可解",
      body: "10 个世界共 200 关，每一关上线前都经过机器验证确保可解。卡住了，那是谜题——绝不是付费墙。",
    },
    {
      title: "十个世界，十份菜单",
      body: "从家常握寿司小馆一路吃到高级 omakase。每个世界有自己的餐盘与节奏——开局轻柔、收尾尽兴，绝不撞墙。",
    },
    {
      title: "后期新花样",
      body: "上锁的餐道、封印的餐盘、一转眼又藏起来的神秘寿司。规则始终简单，棋盘越来越有趣。",
    },
    {
      title: "每天一道新题",
      body: "每日挑战每天更新一题，还有越玩越难的无尽模式，陪你把「静心时刻」坚持下去。",
    },
    {
      title: "听起来像安静的厨房",
      body: "柔和的环境音乐，陶瓷与木质的音效设计。餐盘轻响、餐道滑动，没有任何刺耳提示音。",
    },
    {
      title: "单手随处可玩",
      body: "拖动或点按，想多快就多快。完全离线、无需账号——通勤路上或三万英尺高空都能玩。",
    },
  ],
  screenshots: [
    {
      src: "/apps/calm-sort/shot-home.png",
      alt: "Calm Sort 主界面：樱花下的木质寿司台，带开始、每日挑战和无尽模式按钮",
    },
    {
      src: "/apps/calm-sort/shot-board.png",
      alt: "Calm Sort 关卡棋盘：寿司餐盘在六条木质出餐道之间分拣",
    },
    {
      src: "/apps/calm-sort/shot-worlds.png",
      alt: "世界地图：蜿蜒的传送带关卡路径，穿过第 2、3 世界的鸟居",
    },
    {
      src: "/apps/calm-sort/shot-promises.png",
      alt: "承诺页面：列出 Calm Sort 的诚实游戏承诺",
    },
    {
      src: "/apps/calm-sort/shot-settings.png",
      alt: "设置页面：暖木背景上的声音、震动与隐私选项",
    },
  ],
  trust: {
    title: "诚实的分拣解谜",
    body: "没有体力、没有生命值、没有倒计时。重开不会重新洗牌，撤销永久免费不限次数。每一关都经机器验证可解——一次 $2.99 内购即可永久移除包括可选广告在内的所有广告。",
  },
  faqs: [
    {
      q: "Calm Sort 免费吗？",
      a: "免费。全部 200 关、每日挑战和无尽模式都免费，仅在关卡之间偶尔出现广告——游戏进行中绝不插播。一次 $2.99 内购即可永久移除所有广告。",
    },
    {
      q: "「移除广告」到底包含什么？",
      a: "全部。一次购买移除游戏内所有广告——包括可选的激励广告——提示也变为免费。一次性内购，由 App Store 处理，永久有效。",
    },
    {
      q: "有倒计时、生命值或体力吗？",
      a: "没有，将来也不会有。一个月玩一关，或一晚玩五十关都行；没有任何东西会充能、过期或把你锁在门外。",
    },
    {
      q: "重开关卡会重新洗牌吗？",
      a: "不会。重开后棋盘完全一样，你可以真正钻研一道难题，而不是刷一个更简单的开局。",
    },
    {
      q: "分拣规则是怎样的？",
      a: "只有最前面的寿司（最靠近出餐口的那件）可以移动。把它放到另一条道上，后面的会自动往前补位。一条道上所有餐盘都是同一种寿司，就算完成。",
    },
    {
      q: "需要账号或联网吗？",
      a: "都不需要。没有账号、无需注册，整个游戏离线可玩。进度、星星和每日连胜只保存在你的设备上。",
    },
    {
      q: "会不会遇到无解的关卡？",
      a: "不会。每一关上线前都经过机器验证确保可解——包括后期带锁道、封印盘和神秘寿司的棋盘。",
    },
  ],
  privacy: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用统计（Google Firebase Analytics）：匿名的游戏事件，如关卡开始/完成、使用提示和页面浏览，以及 Firebase 使用的设备标识符。用于了解游戏的实际玩法并改进它。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
            "广告数据（Google AdMob）：展示广告时，Google 的 SDK 可能使用设备的广告标识符来投放和衡量广告。iOS 上我们会先通过 App Tracking Transparency 征求许可；在 GDPR 适用地区，加载广告前会先显示 Google 的同意表单（UMP）。完成一次性「移除广告」购买后，应用不再显示任何广告。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有账号、姓名、邮箱、通讯录、位置、照片或消息。你的关卡进度、星星和每日连胜只保存在你的设备上。应用没有任何后端服务器。",
        ],
      },
      {
        heading: "内购",
        body: [
          "一次性的「移除广告」内购完全由 Apple App Store / Google Play 处理，我们不会接触你的付款信息。移除广告会移除游戏内的所有广告，包括可选的激励广告。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 权限弹窗中拒绝跟踪——游戏功能完全不受影响。",
            "随时在 设置 →「管理隐私许可」中更改广告同意选项。",
            "通过内购永久移除所有广告。",
          ],
        ],
      },
      {
        heading: "儿童",
        body: ["Calm Sort 不面向 13 岁以下儿童，也不会刻意收集他们的个人信息。"],
      },
      {
        heading: "联系方式",
        body: ["如有疑问：来信 lei@appfactory.sg。"],
      },
      {
        heading: "政策变更",
        body: ["政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。"],
      },
    ],
  },
  terms: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "许可",
        body: [
          "我们授予你一项个人的、非独占、不可转让的许可：在你拥有或控制的设备上安装并游玩 Calm Sort，仅限个人非商业用途，并受你获取本应用时所适用的 App Store 或 Google Play 条款约束。",
        ],
      },
      {
        heading: "内购",
        body: [
          "一次性的「移除广告」内购由 Apple App Store / Google Play 按其支付条款处理。它永久移除游戏内所有广告（含可选激励广告），并使提示免费。换新设备后可随时通过商店的恢复购买机制找回（设置 → 恢复购买）。退款由商店处理，而非我们。",
        ],
      },
      {
        heading: "诚实经营的承诺",
        body: [
          "我们公开了一组游戏承诺（没有体力、生命值和倒计时；重开不洗牌；撤销免费不限次数；每关经机器验证可解）。我们打算信守它们；它们是产品承诺，而非额外的法律保证。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "对应用进行逆向工程、反编译或修改（法律明确允许的情形除外）。",
            "转售、出租或再分发应用及其素材。",
            "以任何违法方式使用本应用。",
          ],
        ],
      },
      {
        heading: "免责声明与责任限制",
        body: [
          "Calm Sort 按「现状」提供，在法律允许的最大范围内不附带任何形式的保证。在同等范围内，我们就与本应用相关的任何索赔所承担的全部责任，以你在索赔前十二个月内为本应用支付的金额为限。",
        ],
      },
      {
        heading: "适用法律",
        body: [
          "本条款受新加坡法律管辖。本条款不限制你居住国法律赋予你的任何不可放弃的消费者权利。",
        ],
      },
      {
        heading: "变更与联系",
        body: [
          "我们可能更新本条款；重大变更会在应用的更新说明中注明。变更后继续使用即表示接受新条款。如有疑问：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "Calm Sort",
  storeName: "Calm Sort：壽司分揀解謎",
  tagline: "分揀。呼吸。再來一局。",
  subtitle: "禪意紓壓小遊戲，沒有倒數計時",
  oneLiner:
    "把壽司分揀到便當出餐道上，直到每條道只剩一種。單手可玩、完全離線——沒有體力、沒有生命值、沒有倒數計時，永遠沒有。",
  statusNote: "iOS 版本已送交 App Store 審核，Android 版本籌備中。",
  metaTitle: "Calm Sort：壽司分揀解謎 — 沒有倒數計時的放鬆分類遊戲",
  metaDescription:
    "Calm Sort 是「誠實的分揀解謎」：10 個世界、200 個經機器驗證可解的關卡，復原永久免費，沒有體力、生命值和倒數計時——一次 $2.99 內購即可永久移除所有廣告。離線可玩，無需帳號。",
  features: [
    {
      title: "200 關，關關可解",
      body: "10 個世界共 200 關，每一關上架前都經過機器驗證確保可解。卡住了，那是謎題——絕不是付費牆。",
    },
    {
      title: "十個世界，十份菜單",
      body: "從家常握壽司小館一路吃到高級 omakase。每個世界有自己的餐盤與節奏——開局輕柔、收尾盡興,絕不撞牆。",
    },
    {
      title: "後期新花樣",
      body: "上鎖的餐道、封印的餐盤、一轉眼又藏起來的神祕壽司。規則始終簡單，棋盤越來越有趣。",
    },
    {
      title: "每天一道新題",
      body: "每日挑戰每天更新一題，還有越玩越難的無盡模式，陪你把「靜心時刻」堅持下去。",
    },
    {
      title: "聽起來像安靜的廚房",
      body: "柔和的環境音樂，陶瓷與木質的音效設計。餐盤輕響、餐道滑動，沒有任何刺耳提示音。",
    },
    {
      title: "單手隨處可玩",
      body: "拖曳或點按，想多快就多快。完全離線、無需帳號——通勤路上或三萬英尺高空都能玩。",
    },
  ],
  screenshots: [
    {
      src: "/apps/calm-sort/shot-home.png",
      alt: "Calm Sort 主畫面：櫻花下的木質壽司台，帶開始、每日挑戰和無盡模式按鈕",
    },
    {
      src: "/apps/calm-sort/shot-board.png",
      alt: "Calm Sort 關卡棋盤：壽司餐盤在六條木質出餐道之間分揀",
    },
    {
      src: "/apps/calm-sort/shot-worlds.png",
      alt: "世界地圖：蜿蜒的輸送帶關卡路徑，穿過第 2、3 世界的鳥居",
    },
    {
      src: "/apps/calm-sort/shot-promises.png",
      alt: "承諾頁面：列出 Calm Sort 的誠實遊戲承諾",
    },
    {
      src: "/apps/calm-sort/shot-settings.png",
      alt: "設定頁面：暖木背景上的聲音、震動與隱私選項",
    },
  ],
  trust: {
    title: "誠實的分揀解謎",
    body: "沒有體力、沒有生命值、沒有倒數計時。重開不會重新洗牌，復原永久免費不限次數。每一關都經機器驗證可解——一次 $2.99 內購即可永久移除包括可選廣告在內的所有廣告。",
  },
  faqs: [
    {
      q: "Calm Sort 免費嗎？",
      a: "免費。全部 200 關、每日挑戰和無盡模式都免費，僅在關卡之間偶爾出現廣告——遊戲進行中絕不插播。一次 $2.99 內購即可永久移除所有廣告。",
    },
    {
      q: "「移除廣告」到底包含什麼？",
      a: "全部。一次購買移除遊戲內所有廣告——包括可選的獎勵廣告——提示也變為免費。一次性內購，由 App Store 處理，永久有效。",
    },
    {
      q: "有倒數計時、生命值或體力嗎？",
      a: "沒有，將來也不會有。一個月玩一關，或一晚玩五十關都行；沒有任何東西會充能、過期或把你鎖在門外。",
    },
    {
      q: "重開關卡會重新洗牌嗎？",
      a: "不會。重開後棋盤完全一樣，你可以真正鑽研一道難題，而不是刷一個更簡單的開局。",
    },
    {
      q: "分揀規則是怎樣的？",
      a: "只有最前面的壽司（最靠近出餐口的那件）可以移動。把它放到另一條道上，後面的會自動往前補位。一條道上所有餐盤都是同一種壽司，就算完成。",
    },
    {
      q: "需要帳號或連網嗎？",
      a: "都不需要。沒有帳號、無需註冊，整個遊戲離線可玩。進度、星星和每日連勝只保存在你的裝置上。",
    },
    {
      q: "會不會遇到無解的關卡？",
      a: "不會。每一關上架前都經過機器驗證確保可解——包括後期帶鎖道、封印盤和神祕壽司的棋盤。",
    },
  ],
  privacy: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用統計（Google Firebase Analytics）：匿名的遊戲事件，如關卡開始/完成、使用提示和頁面瀏覽，以及 Firebase 使用的裝置識別碼。用於了解遊戲的實際玩法並改進它。",
            "當機報告（Firebase Crashlytics）：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分關聯。",
            "廣告資料（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用裝置的廣告識別碼來投放和衡量廣告。iOS 上我們會先透過 App Tracking Transparency 徵求許可；在 GDPR 適用地區，載入廣告前會先顯示 Google 的同意表單（UMP）。完成一次性「移除廣告」購買後，應用程式不再顯示任何廣告。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有帳號、姓名、電子郵件、通訊錄、位置、照片或訊息。你的關卡進度、星星和每日連勝只保存在你的裝置上。應用程式沒有任何後端伺服器。",
        ],
      },
      {
        heading: "內購",
        body: [
          "一次性的「移除廣告」內購完全由 Apple App Store / Google Play 處理，我們不會接觸你的付款資訊。移除廣告會移除遊戲內的所有廣告，包括可選的獎勵廣告。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 權限視窗中拒絕追蹤——遊戲功能完全不受影響。",
            "隨時在 設定 →「管理隱私許可」中更改廣告同意選項。",
            "透過內購永久移除所有廣告。",
          ],
        ],
      },
      {
        heading: "兒童",
        body: ["Calm Sort 不面向 13 歲以下兒童，也不會刻意收集他們的個人資訊。"],
      },
      {
        heading: "聯絡方式",
        body: ["如有疑問：來信 lei@appfactory.sg。"],
      },
      {
        heading: "政策變更",
        body: ["政策變更時我們會更新本頁面；重大變更會在應用程式的更新說明中註明。"],
      },
    ],
  },
  terms: {
    updated: "2026-07-23",
    sections: [
      {
        heading: "授權",
        body: [
          "我們授予你一項個人的、非專屬、不可轉讓的授權：在你擁有或控制的裝置上安裝並遊玩 Calm Sort，僅限個人非商業用途，並受你取得本應用程式時所適用的 App Store 或 Google Play 條款約束。",
        ],
      },
      {
        heading: "內購",
        body: [
          "一次性的「移除廣告」內購由 Apple App Store / Google Play 按其付款條款處理。它永久移除遊戲內所有廣告（含可選獎勵廣告），並使提示免費。換新裝置後可隨時透過商店的恢復購買機制找回（設定 → 恢復購買）。退款由商店處理，而非我們。",
        ],
      },
      {
        heading: "誠實經營的承諾",
        body: [
          "我們公開了一組遊戲承諾（沒有體力、生命值和倒數計時；重開不洗牌；復原免費不限次數；每關經機器驗證可解）。我們打算信守它們；它們是產品承諾，而非額外的法律保證。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "對應用程式進行逆向工程、反編譯或修改（法律明確允許的情形除外）。",
            "轉售、出租或再散布應用程式及其素材。",
            "以任何違法方式使用本應用程式。",
          ],
        ],
      },
      {
        heading: "免責聲明與責任限制",
        body: [
          "Calm Sort 按「現況」提供，在法律允許的最大範圍內不附帶任何形式的保證。在同等範圍內，我們就與本應用程式相關的任何索賠所承擔的全部責任，以你在索賠前十二個月內為本應用程式支付的金額為限。",
        ],
      },
      {
        heading: "準據法",
        body: [
          "本條款受新加坡法律管轄。本條款不限制你居住地法律賦予你的任何不可拋棄的消費者權利。",
        ],
      },
      {
        heading: "變更與聯絡",
        body: [
          "我們可能更新本條款；重大變更會在應用程式的更新說明中註明。變更後繼續使用即表示接受新條款。如有疑問：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

export const calmSort: AppContent = {
  slug: "calm-sort",
  buildNumber: 3,
  version: "1.2.0",
  status: "in-review",
  platforms: ["iOS", "Android"],
  icon: "/apps/calm-sort/icon.png",
  ogImage: "/apps/calm-sort/og.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).

export interface CalmSortLanding {
  kicker: string;
  /** Three beats of the hero headline; the last renders in the accent color. */
  heroWords: [string, string, string];
  heroSub: string;
  priceNote: string;
  promisesEyebrow: string;
  promisesTitle: string;
  promisesIntro: string;
  promises: { title: string; body: string }[];
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; body: string }[];
  worldsEyebrow: string;
  worldsTitle: string;
  worldsBody: string;
  worldFirst: string;
  worldLast: string;
  insideEyebrow: string;
  insideTitle: string;
  galleryEyebrow: string;
  galleryTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  closingTitle: string;
  closingBody: string;
}

const landingEn: CalmSortLanding = {
  kicker: "10 worlds · 200 levels · offline forever",
  heroWords: ["Sort.", "Breathe.", "Repeat."],
  heroSub:
    "Sort sushi onto bento serving lanes until every lane holds one kind. One-thumb calm with no energy, no lives, no timers — ever.",
  priceNote:
    "Free to play · one $2.99 purchase removes every ad, forever",
  promisesEyebrow: "our promises",
  promisesTitle: "The honest sort puzzle",
  promisesIntro:
    "Most \"relaxing\" puzzles relax you until the paywall. Calm Sort makes six promises instead — printed here, kept in the game.",
  promises: [
    {
      title: "Remove Ads means removed",
      body: "One $2.99 purchase and every ad disappears — including the optional ones. Hints become free. Forever.",
    },
    {
      title: "No energy, no lives, no timers",
      body: "Nothing recharges, expires, or locks you out. Play one level a month or fifty in a night.",
    },
    {
      title: "Restart never reshuffles",
      body: "The same board every time, so a hard level is something you learn — not something you reroll.",
    },
    {
      title: "Undo is always free",
      body: "Unlimited, one tap, never behind an ad. Thinking out loud is how sorting is meant to feel.",
    },
    {
      title: "Every level provably solvable",
      body: "All 200 levels are machine-verified before they ship. No engineered dead ends, no difficulty paywalls.",
    },
    {
      title: "No account. Fully offline",
      body: "No sign-up, no cloud, no permissions begging. Your progress lives on your device and nowhere else.",
    },
  ],
  howEyebrow: "how it plays",
  howTitle: "Three rules, endless calm",
  steps: [
    {
      title: "Only the front sushi moves",
      body: "The piece nearest the serving end is the one you can pick up — every lane is a little queue.",
    },
    {
      title: "Place it, pieces snap forward",
      body: "Drop it on another lane and everything shuffles neatly ahead. Drag or tap — play as fast as you think.",
    },
    {
      title: "One kind per lane wins",
      body: "When every plate on a lane holds the same sushi, it's served. Clear the board, take a breath, next level.",
    },
  ],
  worldsEyebrow: "ten worlds",
  worldsTitle: "Difficulty like a tasting course",
  worldsBody:
    "Climb from a casual nigiri counter to a premium omakase spread — each world serves its own plates and its own pace. Gentle starts, satisfying finales, never a wall. Late worlds fold in locked lanes, sealed plates, and mystery pieces that hide again if you look away.",
  worldFirst: "World 1 · a casual nigiri counter",
  worldLast: "World 10 · the omakase finale",
  insideEyebrow: "what's inside",
  insideTitle: "Small game, deep pantry",
  galleryEyebrow: "screens",
  galleryTitle: "Warm wood, soft light",
  faqEyebrow: "questions",
  faqTitle: "Fair questions, straight answers",
  closingTitle: "Ready when you are. No timer says so.",
  closingBody:
    "Calm Sort will be on the App Store shortly — it's in Apple's review queue right now.",
};

const landingZhCn: CalmSortLanding = {
  kicker: "10 个世界 · 200 关 · 永远离线可玩",
  heroWords: ["分拣。", "呼吸。", "再来一局。"],
  heroSub:
    "把寿司分拣到便当出餐道上，直到每条道只剩一种。单手即可享受的平静——没有体力、没有生命值、没有倒计时，永远没有。",
  priceNote: "免费游玩 · 一次 $2.99 内购永久移除所有广告",
  promisesEyebrow: "我们的承诺",
  promisesTitle: "诚实的分拣解谜",
  promisesIntro:
    "多数「放松」解谜游戏，只放松到付费墙为止。Calm Sort 换一种做法：立下六条承诺——写在这里，兑现在游戏里。",
  promises: [
    {
      title: "移除广告 = 真的移除",
      body: "一次 $2.99 购买，所有广告消失——包括可选广告。提示变为免费。永久有效。",
    },
    {
      title: "没有体力、生命值和倒计时",
      body: "没有任何东西会充能、过期或把你锁在门外。一个月玩一关，或一晚玩五十关都行。",
    },
    {
      title: "重开不洗牌",
      body: "每次重开都是同一个棋盘。难关是用来钻研的——不是用来刷开局的。",
    },
    {
      title: "撤销永久免费",
      body: "不限次数，一键撤销，绝不藏在广告后面。边想边试，才是分拣该有的感觉。",
    },
    {
      title: "每关都验证可解",
      body: "200 关全部经机器验证后才上线。没有故意设计的死局，没有难度付费墙。",
    },
    {
      title: "无账号，完全离线",
      body: "无需注册、没有云端、不索要多余权限。你的进度只存在你的设备上。",
    },
  ],
  howEyebrow: "玩法",
  howTitle: "三条规则，无尽平静",
  steps: [
    {
      title: "只有最前面的寿司能动",
      body: "最靠近出餐口的那件才能拿起——每条餐道都是一列小队伍。",
    },
    {
      title: "放下后自动补位",
      body: "放到另一条道上，所有寿司整齐地向前挪。拖动或点按，想多快就多快。",
    },
    {
      title: "一道一种即完成",
      body: "当一条道上的餐盘都是同一种寿司，这道就出餐了。清空棋盘，深呼吸，下一关。",
    },
  ],
  worldsEyebrow: "十个世界",
  worldsTitle: "难度像一场怀石料理",
  worldsBody:
    "从家常握寿司小馆一路进阶到高级 omakase——每个世界有自己的餐盘与节奏。开局轻柔、收尾尽兴，绝不撞墙。后期世界还会加入上锁餐道、封印餐盘，和一转眼又藏起来的神秘寿司。",
  worldFirst: "第 1 世界 · 家常握寿司小馆",
  worldLast: "第 10 世界 · omakase 终章",
  insideEyebrow: "游戏内容",
  insideTitle: "小游戏，大厨房",
  galleryEyebrow: "截图",
  galleryTitle: "暖木与柔光",
  faqEyebrow: "常见问题",
  faqTitle: "坦率的问题，直接的回答",
  closingTitle: "随时开局——反正没有倒计时。",
  closingBody: "Calm Sort 即将登陆 App Store——目前正在 Apple 审核队列中。",
};

const landingZhTw: CalmSortLanding = {
  kicker: "10 個世界 · 200 關 · 永遠離線可玩",
  heroWords: ["分揀。", "呼吸。", "再來一局。"],
  heroSub:
    "把壽司分揀到便當出餐道上，直到每條道只剩一種。單手即可享受的平靜——沒有體力、沒有生命值、沒有倒數計時，永遠沒有。",
  priceNote: "免費遊玩 · 一次 $2.99 內購永久移除所有廣告",
  promisesEyebrow: "我們的承諾",
  promisesTitle: "誠實的分揀解謎",
  promisesIntro:
    "多數「放鬆」解謎遊戲，只放鬆到付費牆為止。Calm Sort 換一種做法：立下六條承諾——寫在這裡，兌現在遊戲裡。",
  promises: [
    {
      title: "移除廣告 = 真的移除",
      body: "一次 $2.99 購買，所有廣告消失——包括可選廣告。提示變為免費。永久有效。",
    },
    {
      title: "沒有體力、生命值和倒數計時",
      body: "沒有任何東西會充能、過期或把你鎖在門外。一個月玩一關，或一晚玩五十關都行。",
    },
    {
      title: "重開不洗牌",
      body: "每次重開都是同一個棋盤。難關是用來鑽研的——不是用來刷開局的。",
    },
    {
      title: "復原永久免費",
      body: "不限次數，一鍵復原，絕不藏在廣告後面。邊想邊試，才是分揀該有的感覺。",
    },
    {
      title: "每關都驗證可解",
      body: "200 關全部經機器驗證後才上架。沒有故意設計的死局，沒有難度付費牆。",
    },
    {
      title: "無帳號，完全離線",
      body: "無需註冊、沒有雲端、不索取多餘權限。你的進度只存在你的裝置上。",
    },
  ],
  howEyebrow: "玩法",
  howTitle: "三條規則，無盡平靜",
  steps: [
    {
      title: "只有最前面的壽司能動",
      body: "最靠近出餐口的那件才能拿起——每條餐道都是一列小隊伍。",
    },
    {
      title: "放下後自動補位",
      body: "放到另一條道上，所有壽司整齊地向前挪。拖曳或點按，想多快就多快。",
    },
    {
      title: "一道一種即完成",
      body: "當一條道上的餐盤都是同一種壽司，這道就出餐了。清空棋盤，深呼吸，下一關。",
    },
  ],
  worldsEyebrow: "十個世界",
  worldsTitle: "難度像一場懷石料理",
  worldsBody:
    "從家常握壽司小館一路進階到高級 omakase——每個世界有自己的餐盤與節奏。開局輕柔、收尾盡興，絕不撞牆。後期世界還會加入上鎖餐道、封印餐盤，和一轉眼又藏起來的神祕壽司。",
  worldFirst: "第 1 世界 · 家常握壽司小館",
  worldLast: "第 10 世界 · omakase 終章",
  insideEyebrow: "遊戲內容",
  insideTitle: "小遊戲，大廚房",
  galleryEyebrow: "截圖",
  galleryTitle: "暖木與柔光",
  faqEyebrow: "常見問題",
  faqTitle: "坦率的問題，直接的回答",
  closingTitle: "隨時開局——反正沒有倒數計時。",
  closingBody: "Calm Sort 即將登陸 App Store——目前正在 Apple 審核佇列中。",
};

export const calmSortLanding: Record<Locale, CalmSortLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};
