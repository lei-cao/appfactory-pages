// Sushi Sort — content in all three locales, plus the copy for its bespoke
// landing page (src/components/sushi-sort/landing.tsx). The subdomain gets a
// warm "izakaya" theme via [data-app="sushi-sort"] in globals.css.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "Sushi Sort",
  storeName: "Sushi Sort: Zen Puzzle Game",
  tagline: "Lift the lids. Sort the sushi.",
  subtitle: "Calm mystery trays, no timers",
  oneLiner:
    "A calm Japanese sorting puzzle where most sushi waits face-down under black lacquer lids. Only the front piece shows, every pour flips the next one, and there are no timers, no energy and no lives.",
  statusNote:
    "On the App Store for iPhone and iPad. Android release in progress.",
  metaTitle: "Sushi Sort 2.2: The Mystery Tray — a calm sushi sort puzzle with no timers",
  metaDescription:
    "Sushi Sort 2.2 hides the sushi under black lacquer lids: only the front piece shows and every pour flips the next. 600 machine-verified levels across 30 worlds, racks up to 10 deep, free undo, Zen mode, no timers. One $3.99 purchase removes every ad.",
  features: [
    {
      title: "The mystery tray",
      body: "Most sushi sits face-down under a black lacquer lid marked with a gold question mark. Only the front piece shows. Every pour flips the next one, so you remember what you've seen.",
    },
    {
      title: "Racks up to 10 deep",
      body: "Late boards stack eight to ten pieces per rack with little free space. Each move is a small commitment.",
    },
    {
      title: "Five kinds of board",
      body: "Nigiri Line, Deep Tray, Mystery Box, Tight Counter and Chef's Lock. The same kind never comes up twice in a row.",
    },
    {
      title: "Chef's Order",
      body: "Every level has a move goal and three star lines. Undo is free and gives the move back. Zen mode turns the limit off.",
    },
    {
      title: "Spare spots",
      body: "Spots on the counter hold one piece of any kind while you sort. Add one when you're stuck, or play the Chef's Challenge with one fewer.",
    },
    {
      title: "Restore the restaurant",
      body: "Stars renovate five areas of a Japanese restaurant, one task at a time. After the grand opening they dress it for the seasons.",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shot-mystery.png",
      alt: "A Sushi Sort board mid-game: six hinoki racks of sushi, most under black lacquer lids with a gold question mark, a few pieces already revealed, and a tamago piece parked on one of three lacquer spare spots",
    },
    {
      src: "/apps/sushi-sort/shot-lids.png",
      alt: "The same board before the first move: every piece behind the front one is under a lid, one rack is empty, and two spare spots wait above the racks",
    },
    {
      src: "/apps/sushi-sort/shot-master.png",
      alt: "A Master level on a gold-trimmed black lacquer tray: ten racks ten deep, almost every piece lidded, and a reserved spot that opens after one plate is served",
    },
    {
      src: "/apps/sushi-sort/shot-first.png",
      alt: "World 1, level 4: four short racks with every piece face up, three empty spare spots, and the Chef's Order tip: finish within the moves shown, undo gives moves back",
    },
    {
      src: "/apps/sushi-sort/shot-order.png",
      alt: "The Chef's Order ticket for World 29 Level 10, a Master level: serve it all in 94 moves, three stars in 80, with one reserved spare spot",
    },
    {
      src: "/apps/sushi-sort/shot-restaurant.png",
      alt: "The restaurant home: a tea garden with a koi pond being renovated, area 3 of 5, with the next task 'Plant the red maple' for 10 stars",
    },
    {
      src: "/apps/sushi-sort/shot-world-page.png",
      alt: "The world page for World 15, Hot Spring Inn: 14 of 60 stars, rack depth, lids, spare racks and kinds at a glance, above a grid of levels",
    },
  ],
  trust: {
    title: "The honest sort puzzle",
    body: "No energy, no lives, no timers. Restart never reshuffles. Undo is always free and gives the move back. Every level is machine-verified solvable within its move goal, and one $3.99 purchase removes every ad for good.",
  },
  faqs: [
    {
      q: "What's new in Sushi Sort 2.2?",
      a: "The mystery tray. Most sushi now sits face-down under a lacquer lid, only the front piece shows, and each pour flips the next one. Racks go up to 10 deep, boards come in five kinds, spare spots sit on the counter, and there's new Japanese background music.",
    },
    {
      q: "Is Sushi Sort free?",
      a: "Yes. All 600 levels, the daily quests, the weekly Omakase Festival and Endless mode are free. There's a banner and an occasional ad between levels, never during a move. Reward ads are always optional. One $3.99 purchase removes every ad.",
    },
    {
      q: "What exactly does Remove Ads include?",
      a: "Every ad goes: the banner, the between-level ads and the optional reward ads. When your booster stock runs out, the ones you'd have watched an ad for are simply free. It's a one-time App Store purchase and you can restore it on a new device.",
    },
    {
      q: "How do the lids work?",
      a: "Only the front piece of a rack — the one you can take — is face up. When you move it, the next piece flips over and stays face up. A move stops at the first lid, so you can only lift what you can see. The Lift the lids booster shows every piece for four seconds.",
    },
    {
      q: "What if a level is too hard?",
      a: "Undo is free and gives the move back. Fail twice and the chef adds a few moves; fail four times and the chef adds more, plus a free lid-lift and a spare spot. You can also add a spot yourself, or switch on Zen mode to play with no move limit.",
    },
    {
      q: "Are there timers, lives, or energy?",
      a: "No, and there never will be. Nothing recharges, expires, or locks you out. The only countdown is on the weekly festival page, never in a level.",
    },
    {
      q: "Can a level be unsolvable?",
      a: "No. Every level is machine-verified solvable within its move goal before it ships, by a solver that plays under the real face-down rule. Restart gives you the exact same board.",
    },
    {
      q: "Do I need an account or an internet connection?",
      a: "Neither. There's no account or sign-up and the game plays offline. Your progress, stars and restaurant are stored on your device.",
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
          "Sushi Sort is not directed at children under 13 and does not knowingly collect personal information from them.",
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
          "We grant you a personal, non-exclusive, non-transferable license to install and play Sushi Sort on devices you own or control, for your own non-commercial use, subject to the App Store or Google Play terms under which you obtained it.",
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
          "Sushi Sort is provided \"as is\", without warranties of any kind to the fullest extent permitted by law. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid for it in the twelve months before the claim.",
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
  name: "Sushi Sort",
  storeName: "Sushi Sort：寿司分拣解谜",
  tagline: "掀开漆盖，分拣寿司。",
  subtitle: "安静的神秘漆盘，没有倒计时",
  oneLiner:
    "一款安静的日式分拣解谜：大多数寿司扣在黑漆盖下，只有最前面一件朝上，每移走一件就翻开下一件。没有倒计时、没有体力、没有生命值。",
  statusNote: "已在 App Store 上线（iPhone 与 iPad），Android 版本筹备中。",
  metaTitle: "Sushi Sort 2.2「神秘漆盘」— 没有倒计时的放松寿司分拣解谜",
  metaDescription:
    "Sushi Sort 2.2 把寿司藏在黑漆盖下：只有最前面一件朝上，每移走一件就翻开下一件。30 个世界、600 个经机器验证可解的关卡，餐架最深 10 格，撤销免费，禅模式，没有倒计时。一次 $3.99 内购移除所有广告。",
  features: [
    {
      title: "神秘漆盘",
      body: "大多数寿司扣在描着金色「?」的黑漆盖下，只有最前面一件朝上。每移走一件，下一件就翻开——记住你看过的。",
    },
    {
      title: "餐架最深 10 格",
      body: "后期每条餐架叠 8 到 10 件，空位很少。每一步都是一次小小的取舍。",
    },
    {
      title: "五种棋盘",
      body: "握寿司长列、深盘、神秘盒、窄柜台、主厨之锁。同一种棋盘不会连续出现两次。",
    },
    {
      title: "主厨订单",
      body: "每关都有步数目标和三条星级线。撤销免费并退还步数。开启禅模式即可取消步数限制。",
    },
    {
      title: "备用小碟",
      body: "柜台上的小碟可暂放任意一件寿司。卡住时可以加一个，也可以接受「主厨挑战」少用一个。",
    },
    {
      title: "重建餐厅",
      body: "用星星逐项翻新一家日式餐厅的五个区域。盛大开业之后，星星还能为餐厅换上四季装扮。",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shot-mystery.png",
      alt: "Sushi Sort 对局中：六条桧木餐架，大多数寿司扣在带金色问号的黑漆盖下，几件已经翻开，一件玉子寿司暂放在三个漆器备用小碟之一",
    },
    {
      src: "/apps/sushi-sort/shot-lids.png",
      alt: "同一棋盘开局前：每条餐架除最前面一件外全部盖着漆盖，一条餐架为空，上方有两个备用小碟",
    },
    {
      src: "/apps/sushi-sort/shot-master.png",
      alt: "金边黑漆盘上的大师关：十条餐架、每条十格，几乎全部盖着漆盖，另有一个送出一盘后才开放的预留小碟",
    },
    {
      src: "/apps/sushi-sort/shot-first.png",
      alt: "第 1 世界第 4 关：四条短餐架，寿司全部朝上，三个空的备用小碟，以及主厨订单提示：在规定步数内完成，撤销会退还步数",
    },
    {
      src: "/apps/sushi-sort/shot-order.png",
      alt: "第 29 世界第 10 关（大师关）的主厨订单：94 步内全部出餐，80 步内三星，带一个预留备用小碟",
    },
    {
      src: "/apps/sushi-sort/shot-restaurant.png",
      alt: "餐厅主页：正在翻新的茶庭与锦鲤池，第 3 / 5 区域，下一项任务「种下红枫」需要 10 颗星",
    },
    {
      src: "/apps/sushi-sort/shot-world-page.png",
      alt: "第 15 世界「温泉旅馆」页面：60 颗星中已得 14 颗，餐架深度、漆盖、空餐架与寿司种类一目了然，下方是关卡格",
    },
  ],
  trust: {
    title: "诚实的分拣解谜",
    body: "没有体力、没有生命值、没有倒计时。重开不洗牌。撤销永久免费并退还步数。每一关都经机器验证可在步数目标内完成，一次 $3.99 内购永久移除所有广告。",
  },
  faqs: [
    {
      q: "Sushi Sort 2.2 有什么新内容？",
      a: "神秘漆盘。大多数寿司现在扣在漆盖下，只有最前面一件朝上，每移走一件就翻开下一件。餐架最深 10 格，棋盘分五种，柜台上有备用小碟，还有全新的日式背景音乐。",
    },
    {
      q: "Sushi Sort 免费吗？",
      a: "免费。全部 600 关、每日任务、每周的 Omakase 祭典和无尽模式都免费。游戏有横幅广告，关卡之间偶尔有广告，移动途中绝不插播。激励广告永远是可选的。一次 $3.99 内购即可移除所有广告。",
    },
    {
      q: "「移除广告」到底包含什么？",
      a: "所有广告都会消失：横幅、关卡间广告和可选的激励广告。道具库存用完后，原本需要看广告才能获得的道具直接免费。一次性 App Store 内购，换新设备可恢复购买。",
    },
    {
      q: "漆盖是怎么运作的？",
      a: "每条餐架只有最前面、可以拿走的那一件朝上。移走它，下一件就会翻开并保持朝上。一次移动在遇到第一个漆盖时停下，所以你只能拿起看得见的寿司。「掀开漆盖」道具会让所有寿司显示 4 秒。",
    },
    {
      q: "关卡太难怎么办？",
      a: "撤销免费并退还步数。失败两次，主厨会加几步；失败四次，主厨再多加几步，并送一次掀盖和一个备用小碟。你也可以自己加一个小碟，或开启禅模式不限步数。",
    },
    {
      q: "有倒计时、生命值或体力吗？",
      a: "没有，将来也不会有。没有任何东西会充能、过期或把你锁在门外。唯一的倒计时在每周祭典页面上，关卡里永远没有。",
    },
    {
      q: "会不会遇到无解的关卡？",
      a: "不会。每一关上线前都由按真实翻盖规则下棋的求解器验证，确保能在步数目标内完成。重开后棋盘完全一样。",
    },
    {
      q: "需要账号或联网吗？",
      a: "都不需要。没有账号、无需注册，游戏可离线游玩。进度、星星和餐厅都保存在你的设备上。",
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
        body: ["Sushi Sort 不面向 13 岁以下儿童，也不会刻意收集他们的个人信息。"],
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
          "我们授予你一项个人的、非独占、不可转让的许可：在你拥有或控制的设备上安装并游玩 Sushi Sort，仅限个人非商业用途，并受你获取本应用时所适用的 App Store 或 Google Play 条款约束。",
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
          "Sushi Sort 按「现状」提供，在法律允许的最大范围内不附带任何形式的保证。在同等范围内，我们就与本应用相关的任何索赔所承担的全部责任，以你在索赔前十二个月内为本应用支付的金额为限。",
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
  name: "Sushi Sort",
  storeName: "Sushi Sort：壽司分揀解謎",
  tagline: "掀開漆蓋，分揀壽司。",
  subtitle: "安靜的神祕漆盤，沒有倒數計時",
  oneLiner:
    "一款安靜的日式分揀解謎：大多數壽司扣在黑漆蓋下，只有最前面一件朝上，每移走一件就翻開下一件。沒有倒數計時、沒有體力、沒有生命值。",
  statusNote: "已在 App Store 上架（iPhone 與 iPad），Android 版本籌備中。",
  metaTitle: "Sushi Sort 2.2「神祕漆盤」— 沒有倒數計時的放鬆壽司分揀解謎",
  metaDescription:
    "Sushi Sort 2.2 把壽司藏在黑漆蓋下：只有最前面一件朝上，每移走一件就翻開下一件。30 個世界、600 個經機器驗證可解的關卡，餐架最深 10 格，復原免費，禪模式，沒有倒數計時。一次 $3.99 內購移除所有廣告。",
  features: [
    {
      title: "神祕漆盤",
      body: "大多數壽司扣在描著金色「?」的黑漆蓋下，只有最前面一件朝上。每移走一件，下一件就翻開——記住你看過的。",
    },
    {
      title: "餐架最深 10 格",
      body: "後期每條餐架疊 8 到 10 件，空位很少。每一步都是一次小小的取捨。",
    },
    {
      title: "五種棋盤",
      body: "握壽司長列、深盤、神祕盒、窄櫃檯、主廚之鎖。同一種棋盤不會連續出現兩次。",
    },
    {
      title: "主廚訂單",
      body: "每關都有步數目標和三條星級線。復原免費並退還步數。開啟禪模式即可取消步數限制。",
    },
    {
      title: "備用小碟",
      body: "櫃檯上的小碟可暫放任意一件壽司。卡住時可以加一個，也可以接受「主廚挑戰」少用一個。",
    },
    {
      title: "重建餐廳",
      body: "用星星逐項翻新一家日式餐廳的五個區域。盛大開幕之後，星星還能為餐廳換上四季裝扮。",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shot-mystery.png",
      alt: "Sushi Sort 對局中：六條檜木餐架，大多數壽司扣在帶金色問號的黑漆蓋下，幾件已經翻開，一件玉子壽司暫放在三個漆器備用小碟之一",
    },
    {
      src: "/apps/sushi-sort/shot-lids.png",
      alt: "同一棋盤開局前：每條餐架除最前面一件外全部蓋著漆蓋，一條餐架為空，上方有兩個備用小碟",
    },
    {
      src: "/apps/sushi-sort/shot-master.png",
      alt: "金邊黑漆盤上的大師關：十條餐架、每條十格，幾乎全部蓋著漆蓋，另有一個送出一盤後才開放的預留小碟",
    },
    {
      src: "/apps/sushi-sort/shot-first.png",
      alt: "第 1 世界第 4 關：四條短餐架，壽司全部朝上，三個空的備用小碟，以及主廚訂單提示：在規定步數內完成，復原會退還步數",
    },
    {
      src: "/apps/sushi-sort/shot-order.png",
      alt: "第 29 世界第 10 關（大師關）的主廚訂單：94 步內全部出餐，80 步內三星，帶一個預留備用小碟",
    },
    {
      src: "/apps/sushi-sort/shot-restaurant.png",
      alt: "餐廳主頁：正在翻新的茶庭與錦鯉池，第 3 / 5 區域，下一項任務「種下紅楓」需要 10 顆星",
    },
    {
      src: "/apps/sushi-sort/shot-world-page.png",
      alt: "第 15 世界「溫泉旅館」頁面：60 顆星中已得 14 顆，餐架深度、漆蓋、空餐架與壽司種類一目了然，下方是關卡格",
    },
  ],
  trust: {
    title: "誠實的分揀解謎",
    body: "沒有體力、沒有生命值、沒有倒數計時。重開不洗牌。復原永久免費並退還步數。每一關都經機器驗證可在步數目標內完成，一次 $3.99 內購永久移除所有廣告。",
  },
  faqs: [
    {
      q: "Sushi Sort 2.2 有什麼新內容？",
      a: "神祕漆盤。大多數壽司現在扣在漆蓋下，只有最前面一件朝上，每移走一件就翻開下一件。餐架最深 10 格，棋盤分五種，櫃檯上有備用小碟，還有全新的日式背景音樂。",
    },
    {
      q: "Sushi Sort 免費嗎？",
      a: "免費。全部 600 關、每日任務、每週的 Omakase 祭典和無盡模式都免費。遊戲有橫幅廣告，關卡之間偶爾有廣告，移動途中絕不插播。獎勵廣告永遠是可選的。一次 $3.99 內購即可移除所有廣告。",
    },
    {
      q: "「移除廣告」到底包含什麼？",
      a: "所有廣告都會消失：橫幅、關卡間廣告和可選的獎勵廣告。道具庫存用完後，原本需要看廣告才能取得的道具直接免費。一次性 App Store 內購，換新裝置可回復購買。",
    },
    {
      q: "漆蓋是怎麼運作的？",
      a: "每條餐架只有最前面、可以拿走的那一件朝上。移走它，下一件就會翻開並保持朝上。一次移動在遇到第一個漆蓋時停下，所以你只能拿起看得見的壽司。「掀開漆蓋」道具會讓所有壽司顯示 4 秒。",
    },
    {
      q: "關卡太難怎麼辦？",
      a: "復原免費並退還步數。失敗兩次，主廚會加幾步；失敗四次，主廚再多加幾步，並送一次掀蓋和一個備用小碟。你也可以自己加一個小碟，或開啟禪模式不限步數。",
    },
    {
      q: "有倒數計時、生命值或體力嗎？",
      a: "沒有，將來也不會有。沒有任何東西會充能、過期或把你鎖在門外。唯一的倒數計時在每週祭典頁面上，關卡裡永遠沒有。",
    },
    {
      q: "會不會遇到無解的關卡？",
      a: "不會。每一關上架前都由按真實翻蓋規則下棋的求解器驗證，確保能在步數目標內完成。重開後棋盤完全一樣。",
    },
    {
      q: "需要帳號或連網嗎？",
      a: "都不需要。沒有帳號、無需註冊，遊戲可離線遊玩。進度、星星和餐廳都保存在你的裝置上。",
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
        body: ["Sushi Sort 不面向 13 歲以下兒童，也不會刻意收集他們的個人資訊。"],
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
          "我們授予你一項個人的、非專屬、不可轉讓的授權：在你擁有或控制的裝置上安裝並遊玩 Sushi Sort，僅限個人非商業用途，並受你取得本應用程式時所適用的 App Store 或 Google Play 條款約束。",
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
          "Sushi Sort 按「現況」提供，在法律允許的最大範圍內不附帶任何形式的保證。在同等範圍內，我們就與本應用程式相關的任何索賠所承擔的全部責任，以你在索賠前十二個月內為本應用程式支付的金額為限。",
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

export const sushiSort: AppContent = {
  slug: "sushi-sort",
  buildNumber: 7,
  version: "2.2.0",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/us/app/sushi-sort-zen-puzzle-game/id6792529319",
  platforms: ["iOS", "Android"],
  icon: "/apps/sushi-sort/icon.png",
  ogImage: "/apps/sushi-sort/og-2-2.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).
// Facts come from the 2.2 design docs in the app repo
// (apps/sushi-sort/docs/upgrade-2.2/) and the in-app help text.

interface Point {
  title: string;
  body: string;
}

export interface SushiSortLanding {
  /** Small line above the hero headline. */
  kicker: string;
  /** Two lines of the hero headline; the second renders in vermilion. */
  heroLines: [string, string];
  heroSub: string;
  /** "New in 2.2" label on the hero. */
  versionLabel: string;
  priceNote: string;
  mysteryEyebrow: string;
  mysteryTitle: string;
  mysteryBody: string;
  mysteryPoints: Point[];
  /** Captions under the before / after pair of screenshots. */
  mysteryBefore: string;
  mysteryAfter: string;
  coursesEyebrow: string;
  coursesTitle: string;
  coursesBody: string;
  /** Five board kinds: the name is a proper noun in the game. */
  courses: Point[];
  /** Caption for the World 1 board beside the course list. */
  firstCaption: string;
  orderEyebrow: string;
  orderTitle: string;
  orderBody: string;
  orderPoints: Point[];
  orderCaption: string;
  restaurantEyebrow: string;
  restaurantTitle: string;
  restaurantBody: string;
  restaurantPoints: Point[];
  restaurantCaption: string;
  worldsCaption: string;
  promisesEyebrow: string;
  promisesTitle: string;
  promisesIntro: string;
  promises: Point[];
  faqEyebrow: string;
  faqTitle: string;
  closingTitle: string;
  closingBody: string;
  creditsEyebrow: string;
  creditsTitle: string;
  creditsIntro: string;
  creditsMusic: string;
  creditsSfx: string;
  /** "Music by" / "Sounds by" prefix for a credit source. */
  creditsMusicBy: string;
  creditsSoundsBy: string;
  /** Closing line for the original (procedural) score and sounds. */
  creditsOriginal: string;
}

const landingEn: SushiSortLanding = {
  kicker: "600 levels · 30 worlds · no timers",
  heroLines: ["Lift the lids.", "Sort the sushi."],
  heroSub:
    "Most sushi waits face-down under black lacquer lids. Only the front piece of each rack shows, and every move lifts the next lid. A calm Japanese puzzle that really makes you think — no timers, no energy, no lives.",
  versionLabel: "New in 2.2 · The Mystery Tray",
  priceNote: "Free to play · one $3.99 purchase removes every ad",
  mysteryEyebrow: "the mystery tray",
  mysteryTitle: "Every pour reveals the next piece",
  mysteryBody:
    "Sushi Sort 2.2 is built around one rule: you can only lift what you can see. Watch the racks, remember what turns up, and plan a few moves ahead.",
  mysteryPoints: [
    {
      title: "Only the front piece shows",
      body: "Everything behind it sits under a black lacquer lid marked with a gold question mark.",
    },
    {
      title: "Move it and the next one flips",
      body: "A revealed piece stays face up wherever it goes. A move stops at the first lid.",
    },
    {
      title: "Racks up to 10 deep",
      body: "Late boards are tall and tight, with one empty rack or none, and a few spare spots.",
    },
    {
      title: "Lift the lids when you need to",
      body: "The booster shows every piece for four seconds, then the lids close again.",
    },
  ],
  mysteryBefore: "Before the first move: lids on every rack.",
  mysteryAfter: "A few pours later: pieces revealed, one parked on a spot.",
  coursesEyebrow: "five courses",
  coursesTitle: "No two levels in a row feel the same",
  coursesBody:
    "Every level is dealt as one of five kinds of board, and the same kind never comes up twice in a row. Every fifth level is Hard. Every tenth is a Master board on a gold-trimmed black lacquer tray, and the one after it is a breather.",
  courses: [
    {
      title: "Nigiri Line",
      body: "Wide and shallow, everything face up. Read the board and route.",
    },
    {
      title: "Deep Tray",
      body: "A few tall racks. Commit, and bury what you'll need later.",
    },
    {
      title: "Mystery Box",
      body: "Tall racks with lids everywhere. Reveal, remember, commit.",
    },
    {
      title: "Tight Counter",
      body: "Full racks and very little room. Park each piece with care.",
    },
    {
      title: "Chef's Lock",
      body: "A locked rack or a nori wrap. Open things in the right order.",
    },
  ],
  firstCaption:
    "Where it starts: World 1, short racks, every piece face up. The Master board at the top of this page is World 29.",
  orderEyebrow: "the chef's order",
  orderTitle: "A move goal, not a clock",
  orderBody:
    "Each level comes with an order ticket: serve every plate within the moves shown. There's still no timer, and undo is always free — it even gives the move back.",
  orderPoints: [
    {
      title: "Spare spots",
      body: "Small lacquer spots on the counter hold one piece of any kind. Stuck? The dashed + adds one more for the attempt.",
    },
    {
      title: "Chef's Challenge",
      body: "Start with one spot fewer for extra coins and a red seal on the level. Only offered when the board is verified solvable that way.",
    },
    {
      title: "The chef helps",
      body: "Fail twice and the chef adds a few moves. Fail four times and you get more moves, a free lid-lift and a spare spot.",
    },
    {
      title: "Zen mode",
      body: "Prefer no limits? Switch Zen mode on in Settings and play any level with no move goal.",
    },
  ],
  orderCaption: "The order ticket for a Master level.",
  restaurantEyebrow: "between levels",
  restaurantTitle: "Bring a little restaurant back to life",
  restaurantBody:
    "Stars you earn renovate a Japanese restaurant, one task at a time, across five areas. After the grand opening they dress it for the seasons.",
  restaurantPoints: [
    {
      title: "Thirty worlds",
      body: "Each world page shows its stars, rack depth, lids and kinds, with your next level one tap away.",
    },
    {
      title: "Something every day",
      body: "Daily quests, a calendar that never resets, the Sushi Encyclopedia album and a new Omakase Festival every week.",
    },
    {
      title: "Japanese music",
      body: "Teahouse, ryokan and ryotei pieces by MOMIZizm MUSiC and others, with soft wood-and-ceramic sounds. Full credits below.",
    },
  ],
  restaurantCaption: "The tea garden, mid-renovation.",
  worldsCaption: "A world at a glance.",
  promisesEyebrow: "our promises",
  promisesTitle: "The honest sort puzzle",
  promisesIntro:
    "Harder boards, same promises. They're printed here and in the game.",
  promises: [
    {
      title: "Remove Ads means removed",
      body: "One $3.99 purchase removes every ad, including the optional ones.",
    },
    {
      title: "No energy, no lives, no timers",
      body: "Nothing recharges, expires, or locks you out.",
    },
    {
      title: "Undo is always free",
      body: "Unlimited, one tap, never behind an ad — and it gives the move back.",
    },
    {
      title: "Restart never reshuffles",
      body: "The same board every time, so a hard level is something you learn.",
    },
    {
      title: "Every level provably solvable",
      body: "All 600 are machine-verified within their move goal, lids and all.",
    },
    {
      title: "No account",
      body: "No sign-up. The game plays offline and your progress stays on your device.",
    },
  ],
  faqEyebrow: "questions",
  faqTitle: "Fair questions, straight answers",
  closingTitle: "The lids are on. Take your time.",
  closingBody:
    "Sushi Sort is free on the App Store for iPhone and iPad.",
  creditsEyebrow: "credits",
  creditsTitle: "Music & sound credits",
  creditsIntro:
    "The music and sounds in Sushi Sort come from these composers and libraries. Thank you — every track links to its page.",
  creditsMusic: "Music",
  creditsSfx: "Sound effects",
  creditsMusicBy: "Music by",
  creditsSoundsBy: "Sounds by",
  creditsOriginal:
    "Everything else — the procedural koto, shakuhachi and taiko score and the chimes — was made for Sushi Sort.",
};

const landingZhCn: SushiSortLanding = {
  kicker: "600 关 · 30 个世界 · 没有倒计时",
  heroLines: ["掀开漆盖，", "分拣寿司。"],
  heroSub:
    "大多数寿司扣在黑漆盖下。只有最前面一件朝上，每移走一件就翻开下一件。一款安静却真正烧脑的日式解谜——没有体力、没有生命值、没有倒计时。",
  versionLabel: "2.2 新内容 · 神秘漆盘",
  priceNote: "免费游玩 · 一次 $3.99 内购移除所有广告",
  mysteryEyebrow: "神秘漆盘",
  mysteryTitle: "每一次移动，都翻开下一件",
  mysteryBody:
    "Sushi Sort 2.2 围绕一条规则：看得见的才能拿。盯住餐架，记住翻出来的寿司，提前想好几步。",
  mysteryPoints: [
    {
      title: "只有最前面一件朝上",
      body: "后面的都扣在描着金色「?」的漆盖下。",
    },
    {
      title: "移走它，下一件就翻开",
      body: "翻开的寿司无论放到哪里都保持朝上。一次移动遇到第一个漆盖就停下。",
    },
    {
      title: "餐架最深 10 格",
      body: "后期棋盘又高又挤，空餐架只有一条甚至没有，外加几个备用小碟。",
    },
    {
      title: "需要时掀开漆盖",
      body: "道具会让所有寿司显示 4 秒，然后漆盖重新合上。",
    },
  ],
  mysteryBefore: "开局前：每条餐架都盖着漆盖。",
  mysteryAfter: "几步之后：寿司陆续翻开，一件暂放在小碟上。",
  coursesEyebrow: "五道菜",
  coursesTitle: "连续两关，绝不雷同",
  coursesBody:
    "每一关都属于五种棋盘之一，同一种不会连续出现两次。每第 5 关是困难关；每第 10 关是摆在金边黑漆盘上的大师关，紧随其后的一关让你喘口气。",
  courses: [
    {
      title: "握寿司长列",
      body: "又宽又浅，全部朝上。读懂棋盘，规划路线。",
    },
    {
      title: "深盘",
      body: "几条高高的餐架。果断下手，把之后要用的先压在下面。",
    },
    {
      title: "神秘盒",
      body: "高餐架，处处是漆盖。翻开、记住、下定决心。",
    },
    {
      title: "窄柜台",
      body: "餐架满满，空间极少。每一件都要小心安放。",
    },
    {
      title: "主厨之锁",
      body: "上锁的餐架或海苔卷。按正确顺序逐一打开。",
    },
  ],
  firstCaption: "起点：第 1 世界，短餐架，寿司全部朝上。页首那块大师关棋盘来自第 29 世界。",
  orderEyebrow: "主厨订单",
  orderTitle: "目标是步数，不是时钟",
  orderBody:
    "每关都附一张订单：在规定步数内送出所有餐盘。依然没有倒计时，撤销永远免费——还会退还步数。",
  orderPoints: [
    {
      title: "备用小碟",
      body: "柜台上的漆器小碟可暂放任意一件寿司。卡住了？点虚线「+」为本局再加一个。",
    },
    {
      title: "主厨挑战",
      body: "少用一个小碟开局，赢得额外金币和关卡上的红色印章。只在验证过这样也能解开的棋盘上提供。",
    },
    {
      title: "主厨来帮忙",
      body: "失败两次，主厨会加几步；失败四次，再加步数，外送一次掀盖和一个备用小碟。",
    },
    {
      title: "禅模式",
      body: "不想受限？在设置中开启禅模式，任何关卡都没有步数目标。",
    },
  ],
  orderCaption: "大师关的订单。",
  restaurantEyebrow: "关卡之外",
  restaurantTitle: "让一家小餐厅重新热闹起来",
  restaurantBody:
    "赢得的星星用来逐项翻新一家日式餐厅，共五个区域。盛大开业之后，星星还能为餐厅换上四季装扮。",
  restaurantPoints: [
    {
      title: "三十个世界",
      body: "每个世界页面都列出星星、餐架深度、漆盖与寿司种类，下一关一点即达。",
    },
    {
      title: "每天都有新鲜事",
      body: "每日任务、永不重置的签到日历、寿司图鉴，以及每周一场新的 Omakase 祭典。",
    },
    {
      title: "日式音乐",
      body: "来自 MOMIZizm MUSiC 等作者的茶屋、旅馆与料亭风格曲目，配上柔和的木与陶瓷音效。完整致谢见下方。",
    },
  ],
  restaurantCaption: "翻新中的茶庭。",
  worldsCaption: "一个世界，一目了然。",
  promisesEyebrow: "我们的承诺",
  promisesTitle: "诚实的分拣解谜",
  promisesIntro: "棋盘更难了，承诺不变。写在这里，也写在游戏里。",
  promises: [
    {
      title: "移除广告 = 真的移除",
      body: "一次 $3.99 购买，移除所有广告，包括可选广告。",
    },
    {
      title: "没有体力、生命值和倒计时",
      body: "没有任何东西会充能、过期或把你锁在门外。",
    },
    {
      title: "撤销永久免费",
      body: "不限次数，一键撤销，绝不藏在广告后面——还会退还步数。",
    },
    {
      title: "重开不洗牌",
      body: "每次都是同一个棋盘，难关是用来钻研的。",
    },
    {
      title: "每关都验证可解",
      body: "600 关全部经机器验证可在步数目标内完成，漆盖也算在内。",
    },
    {
      title: "无需账号",
      body: "无需注册。游戏可离线游玩，进度只保存在你的设备上。",
    },
  ],
  faqEyebrow: "常见问题",
  faqTitle: "坦率的问题，直接的回答",
  closingTitle: "漆盖已经盖好，慢慢来。",
  closingBody: "Sushi Sort 已在 App Store 免费提供，支持 iPhone 与 iPad。",
  creditsEyebrow: "致谢",
  creditsTitle: "音乐与音效致谢",
  creditsIntro:
    "Sushi Sort 的音乐与音效来自以下作曲者和素材库，衷心感谢。每首曲目都附有原始页面链接。",
  creditsMusic: "音乐",
  creditsSfx: "音效",
  creditsMusicBy: "作曲",
  creditsSoundsBy: "音效",
  creditsOriginal: "其余部分——程序生成的筝、尺八、太鼓配乐与铃声——均为 Sushi Sort 原创。",
};

const landingZhTw: SushiSortLanding = {
  kicker: "600 關 · 30 個世界 · 沒有倒數計時",
  heroLines: ["掀開漆蓋，", "分揀壽司。"],
  heroSub:
    "大多數壽司扣在黑漆蓋下。只有最前面一件朝上，每移走一件就翻開下一件。一款安靜卻真正燒腦的日式解謎——沒有體力、沒有生命值、沒有倒數計時。",
  versionLabel: "2.2 新內容 · 神祕漆盤",
  priceNote: "免費遊玩 · 一次 $3.99 內購移除所有廣告",
  mysteryEyebrow: "神祕漆盤",
  mysteryTitle: "每一次移動，都翻開下一件",
  mysteryBody:
    "Sushi Sort 2.2 圍繞一條規則：看得見的才能拿。盯住餐架，記住翻出來的壽司，提前想好幾步。",
  mysteryPoints: [
    {
      title: "只有最前面一件朝上",
      body: "後面的都扣在描著金色「?」的漆蓋下。",
    },
    {
      title: "移走它，下一件就翻開",
      body: "翻開的壽司無論放到哪裡都保持朝上。一次移動遇到第一個漆蓋就停下。",
    },
    {
      title: "餐架最深 10 格",
      body: "後期棋盤又高又擠，空餐架只有一條甚至沒有，外加幾個備用小碟。",
    },
    {
      title: "需要時掀開漆蓋",
      body: "道具會讓所有壽司顯示 4 秒，然後漆蓋重新合上。",
    },
  ],
  mysteryBefore: "開局前：每條餐架都蓋著漆蓋。",
  mysteryAfter: "幾步之後：壽司陸續翻開，一件暫放在小碟上。",
  coursesEyebrow: "五道菜",
  coursesTitle: "連續兩關，絕不雷同",
  coursesBody:
    "每一關都屬於五種棋盤之一，同一種不會連續出現兩次。每第 5 關是困難關；每第 10 關是擺在金邊黑漆盤上的大師關，緊隨其後的一關讓你喘口氣。",
  courses: [
    {
      title: "握壽司長列",
      body: "又寬又淺，全部朝上。讀懂棋盤，規劃路線。",
    },
    {
      title: "深盤",
      body: "幾條高高的餐架。果斷下手，把之後要用的先壓在下面。",
    },
    {
      title: "神祕盒",
      body: "高餐架，處處是漆蓋。翻開、記住、下定決心。",
    },
    {
      title: "窄櫃檯",
      body: "餐架滿滿，空間極少。每一件都要小心安放。",
    },
    {
      title: "主廚之鎖",
      body: "上鎖的餐架或海苔捲。按正確順序逐一打開。",
    },
  ],
  firstCaption: "起點：第 1 世界，短餐架，壽司全部朝上。頁首那塊大師關棋盤來自第 29 世界。",
  orderEyebrow: "主廚訂單",
  orderTitle: "目標是步數，不是時鐘",
  orderBody:
    "每關都附一張訂單：在規定步數內送出所有餐盤。依然沒有倒數計時，復原永遠免費——還會退還步數。",
  orderPoints: [
    {
      title: "備用小碟",
      body: "櫃檯上的漆器小碟可暫放任意一件壽司。卡住了？點虛線「+」為本局再加一個。",
    },
    {
      title: "主廚挑戰",
      body: "少用一個小碟開局，贏得額外金幣和關卡上的紅色印章。只在驗證過這樣也能解開的棋盤上提供。",
    },
    {
      title: "主廚來幫忙",
      body: "失敗兩次，主廚會加幾步；失敗四次，再加步數，外送一次掀蓋和一個備用小碟。",
    },
    {
      title: "禪模式",
      body: "不想受限？在設定中開啟禪模式，任何關卡都沒有步數目標。",
    },
  ],
  orderCaption: "大師關的訂單。",
  restaurantEyebrow: "關卡之外",
  restaurantTitle: "讓一家小餐廳重新熱鬧起來",
  restaurantBody:
    "贏得的星星用來逐項翻新一家日式餐廳，共五個區域。盛大開幕之後，星星還能為餐廳換上四季裝扮。",
  restaurantPoints: [
    {
      title: "三十個世界",
      body: "每個世界頁面都列出星星、餐架深度、漆蓋與壽司種類，下一關一點即達。",
    },
    {
      title: "每天都有新鮮事",
      body: "每日任務、永不重置的簽到日曆、壽司圖鑑，以及每週一場新的 Omakase 祭典。",
    },
    {
      title: "日式音樂",
      body: "來自 MOMIZizm MUSiC 等作者的茶屋、旅館與料亭風格曲目，配上柔和的木與陶瓷音效。完整致謝見下方。",
    },
  ],
  restaurantCaption: "翻新中的茶庭。",
  worldsCaption: "一個世界，一目了然。",
  promisesEyebrow: "我們的承諾",
  promisesTitle: "誠實的分揀解謎",
  promisesIntro: "棋盤更難了，承諾不變。寫在這裡，也寫在遊戲裡。",
  promises: [
    {
      title: "移除廣告 = 真的移除",
      body: "一次 $3.99 購買，移除所有廣告，包括可選廣告。",
    },
    {
      title: "沒有體力、生命值和倒數計時",
      body: "沒有任何東西會充能、過期或把你鎖在門外。",
    },
    {
      title: "復原永久免費",
      body: "不限次數，一鍵復原，絕不藏在廣告後面——還會退還步數。",
    },
    {
      title: "重開不洗牌",
      body: "每次都是同一個棋盤，難關是用來鑽研的。",
    },
    {
      title: "每關都驗證可解",
      body: "600 關全部經機器驗證可在步數目標內完成，漆蓋也算在內。",
    },
    {
      title: "無需帳號",
      body: "無需註冊。遊戲可離線遊玩，進度只保存在你的裝置上。",
    },
  ],
  faqEyebrow: "常見問題",
  faqTitle: "坦率的問題，直接的回答",
  closingTitle: "漆蓋已經蓋好，慢慢來。",
  closingBody: "Sushi Sort 已在 App Store 免費提供，支援 iPhone 與 iPad。",
  creditsEyebrow: "致謝",
  creditsTitle: "音樂與音效致謝",
  creditsIntro:
    "Sushi Sort 的音樂與音效來自以下作曲者與素材庫，衷心感謝。每首曲目都附有原始頁面連結。",
  creditsMusic: "音樂",
  creditsSfx: "音效",
  creditsMusicBy: "作曲",
  creditsSoundsBy: "音效",
  creditsOriginal: "其餘部分——程式生成的箏、尺八、太鼓配樂與鈴聲——皆為 Sushi Sort 原創。",
};

export const sushiSortLanding: Record<Locale, SushiSortLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};

// ---------------------------------------------------------------------------
// Music & sound credits — mirrors the app's assets/audio/credits.json
// (Settings → Credits). Track titles are proper names: Japanese original +
// English, the same in every locale. MOMIZizm MUSiC's terms ask for credit
// plus a link to https://music.storyinvention.com/en/.

export interface CreditSource {
  /** Library or label, linked to its site. */
  name: string;
  url: string;
  /** Composer / maker. */
  by: string;
  /** A credit line the licence asks for verbatim (e.g. 音楽：魔王魂). */
  requiredCredit?: string;
  licence: Record<Locale, string>;
  tracks: { title: string; url: string }[];
}

const MOMIZIZM = "https://music.storyinvention.com/en/";
const withCredit: Record<Locale, string> = {
  en: "Free with credit and a link to the site",
  "zh-cn": "注明出处并附网站链接即可使用",
  "zh-tw": "註明出處並附網站連結即可使用",
};
const MOMIZIZM_TRACKS: [string, string][] = [
  ["温泉旅館で流れてそうな曲24 — Onsen-style music 24", "onsen-ryokan-24-en"],
  ["料亭で流れてそうな曲30（桜懐石） — Sakura Kaiseki", "ryoutei-30-en"],
  ["温泉旅館で流れてそうな曲7 — Onsen-style music 7", "onsen-ryokan-7-en"],
  ["旅館・宿っぽい曲1 — Ryokan-style music 1", "ryokan-yado-1-en"],
  ["京都の料亭 — Kyoto's Ryotei", "kyoto-ryotey-en"],
  ["料亭で流れてそうな曲14 — Ryotei-style music 14", "ryoutei-14-en"],
  ["宇治抹茶 — Uji Green Tea", "uji-matcha-en"],
  ["京都のお囃子 — Kyoto's Musical Accompaniment", "kyoto-ohayashi-en"],
  ["ほのぼの茶房 — Honobono Teahouse", "honobono-sabou-en"],
  ["あんみつ道中 — Syrup Journey", "anmitsu-douchu-en"],
  ["おむすびの冒険 — Omusubi Adventure", "omusubi-bouken-en"],
  ["ほんのり小町 — Honnori Komachi", "honnori-komachi-en"],
  ["お月さまとのお話 — Talking with the Moon", "otsukisama-ohanashi-en"],
  ["トコトコくん — Tokotoko Boy", "tokotoko-kun-en"],
];
const cc0: Record<Locale, string> = {
  en: "CC0 1.0 (public domain)",
  "zh-cn": "CC0 1.0（公有领域）",
  "zh-tw": "CC0 1.0（公有領域）",
};

export const sushiSortMusicCredits: CreditSource[] = [
  {
    name: "MOMIZizm MUSiC",
    url: MOMIZIZM,
    by: "もみじば (Momijiba)",
    licence: withCredit,
    tracks: MOMIZIZM_TRACKS.map(([title, slug]) => ({
      title,
      url: `${MOMIZIZM}${slug}/`,
    })),
  },
  {
    name: "魔王魂 Maou Damashii",
    url: "https://maou.audio/",
    by: "森田交一 (Koichi Morita)",
    requiredCredit: "音楽：魔王魂",
    licence: { en: "CC BY 4.0", "zh-cn": "CC BY 4.0", "zh-tw": "CC BY 4.0" },
    tracks: [
      { title: "民族32 初詣 — Hatsumode", url: "https://maou.audio/bgm_ethnic32/" },
      { title: "民族27 和の輪 — Wa no Wa", url: "https://maou.audio/bgm_ethnic27/" },
      { title: "民族09 揺れる提灯 — Yureru Chōchin", url: "https://maou.audio/bgm_ethnic09/" },
    ],
  },
  {
    name: "甘茶の音楽工房 Amacha",
    url: "https://amachamusic.chagasi.com/",
    by: "甘茶 (Amacha)",
    licence: {
      en: "Free for commercial use (site terms)",
      "zh-cn": "可免费商用（网站条款）",
      "zh-tw": "可免費商用（網站條款）",
    },
    tracks: [
      { title: "花祭り — Hanamatsuri", url: "https://amachamusic.chagasi.com/music_hanamatsuri.html" },
    ],
  },
];

export const sushiSortSfxCredits: CreditSource[] = [
  {
    name: "Kenney",
    url: "https://kenney.nl/",
    by: "Kenney",
    licence: cc0,
    tracks: [
      { title: "Casino Audio — plate clacks, spot tick, lid lift, flight", url: "https://kenney.nl/assets/casino-audio" },
      { title: "RPG Audio — soft knock, coins", url: "https://kenney.nl/assets/rpg-audio" },
    ],
  },
];
