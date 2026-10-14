// Sushi Sort — content in all three locales, plus the copy deck for its
// bespoke site (src/components/sites/sushi-sort/). Facts follow the live
// 2.4.0 listing (fastlane/metadata/ios/en-US in the app repo, iTunes lookup
// id 6792529319) and the 2.3 design doc (450 levels, 30 cities × 15, Chef's
// Score, free undos). The game itself is English-only for now, and the store
// name and subtitle are the live listing's in every locale.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "Sushi Sort",
  storeName: "Sushi Sort: Calm Color Puzzle",
  tagline: "Lift the lids. Sort the sushi.",
  subtitle: "Ball & water sort, no timers",
  oneLiner:
    "A calm Japanese color sort puzzle: most sushi hides under black lacquer lids, and every pour lifts the next one. 450 levels, free undo, no time limits.",
  statusNote:
    "Free on the App Store for iPhone and iPad. Android is in progress.",
  metaTitle: "Sushi Sort: Calm Color Sort Puzzle, No Time Limits",
  metaDescription:
    "Lift the lacquer lids and sort the sushi. A calm Japanese color sort puzzle: 450 levels in 30 cities, free undo, no energy, no time limits.",
  features: [
    {
      title: "Lift the lids",
      body: "Most sushi waits face-down under a black lacquer lid. Only the front piece shows, and every pour lifts the next lid.",
    },
    {
      title: "450 levels, 30 cities",
      body: "A new city every 15 levels, five kinds of board, and every level machine-verified solvable within its move goal.",
    },
    {
      title: "No time limits, ever",
      body: "No energy, no lives. Undo is always free and gives the move back, and Zen mode switches move goals off.",
    },
    {
      title: "Chef's Score",
      body: "Every clear scores up to 1000 for moves, tidy play and speed against par. Score 950 for Perfect Service. The clock never ends a level.",
    },
    {
      title: "Rebuild the restaurant",
      body: "Stars renovate five areas of a sushi restaurant, one task at a time, then dress it for the seasons.",
    },
    {
      title: "The Sushi Encyclopedia",
      body: "Twenty sushi in three grades across five regional sets, plate skins, daily quests and a new Omakase Festival every week.",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shots/01-mystery.webp",
      alt: "Sushi Sort mid-game in World 15: seven hinoki racks, most sushi under black lacquer lids with a gold question mark, a few pieces revealed and two lacquer spare spots above",
    },
    {
      src: "/apps/sushi-sort/shots/02-peek.webp",
      alt: "The same board with the Lift lids booster on: every piece shown face up for a moment, salmon, tuna, futomaki and flower sushi in the racks",
    },
    {
      src: "/apps/sushi-sort/shots/03-master.webp",
      alt: "A Master board in World 12, Level 15 on a gold-trimmed black lacquer tray: eight racks, almost every piece lidded, a 65-move order",
    },
    {
      src: "/apps/sushi-sort/shots/04-ticket.webp",
      alt: "The Chef's Order ticket for World 15, Level 2, a Deep Tray: serve it all in 52 moves, three stars in 36, with two spare spots and the Chef's Challenge switch",
    },
    {
      src: "/apps/sushi-sort/shots/05-promises.webp",
      alt: "A board mid-sort with two racks completed and a free undo counter showing 3 left",
    },
    {
      src: "/apps/sushi-sort/shots/06-restaurant.webp",
      alt: "The restaurant home: the chef waving in the Tea Garden, area 3 of 5, with the next renovation 'Plant the red maple' and the Play button",
    },
    {
      src: "/apps/sushi-sort/shots/07-worlds.webp",
      alt: "The Worlds page: World 15, Hot Spring Inn, 'Steam over the onsen', with rack depth, lids, spare racks, kinds and its 15 levels",
    },
    {
      src: "/apps/sushi-sort/shots/08-win.webp",
      alt: "Level complete with three stars and a Chef's Score of 1000, Perfect Service: moves 500, tidy 250, speed 250",
    },
    {
      src: "/apps/sushi-sort/shots/09-album.webp",
      alt: "The Sushi Encyclopedia open on the Hokkaido set: Salmon Nigiri and Ikura Gunkan cards with Common, Rare and Gold grades",
    },
    {
      src: "/apps/sushi-sort/shots/10-festival.webp",
      alt: "The weekly Omakase Festival: Sakura Festival with 25 lanterns collected and a reward track of coins, hints and album cards",
    },
  ],
  trust: {
    title: "Our promises",
    body: "No energy, no lives, no time limits. Undo is always free. Restart never reshuffles. Every level is machine-verified solvable. No account, and it plays offline.",
  },
  faqs: [
    {
      q: "Is Sushi Sort free?",
      a: "Yes. All 450 levels, the daily quests, the weekly Omakase Festival and Endless mode are free. There is a banner and an occasional ad between levels, never during a move. Optional purchases: Remove Ads ($3.99), coin packs, a Starter Pack and the Chef Pass.",
    },
    {
      q: "What does Remove Ads remove?",
      a: "The banner and the ads between levels. Optional reward videos stay available, and you choose when to watch one for a bonus. It is a one-time purchase you can restore on a new device.",
    },
    {
      q: "How do the lids work?",
      a: "Only the front piece of each rack, the one you can take, is face up. Move it and the next piece flips over and stays face up. A move stops at the first lid, so you can only lift what you can see. The Lift lids booster shows every piece for a moment.",
    },
    {
      q: "Are there time limits, lives or energy?",
      a: "No. Nothing recharges, expires or locks you out. Chef's Score has an optional clock that only adds to your score: it never ends a level, never costs a star, and one toggle in Settings hides it.",
    },
    {
      q: "How do stars and Chef's Score work?",
      a: "Stars come from moves: finish within the order for one star, near the best line for three. Each level gives two to six free undos; past them the best is two stars. Chef's Score adds up to 1000: 500 for moves, 250 for tidy play, 250 for speed. 950 or more is Perfect Service.",
    },
    {
      q: "What if a level is too hard?",
      a: "Undo is free and gives the move back. Fail twice and the chef quietly adds a few moves. You can add a spare spot, take a hint that points from one rack to the other, or switch on Zen mode and play with no move limit.",
    },
    {
      q: "Can a level be unsolvable?",
      a: "No. Every level is machine-verified solvable within its move goal before it ships, by a solver that plays under the face-down rule. Restart gives you the same board every time.",
    },
    {
      q: "Do I need an account or an internet connection?",
      a: "Neither. There is no sign-up, the game plays offline, and your progress, stars and restaurant stay on your device.",
    },
    {
      q: "Which devices and languages?",
      a: "iPhone and iPad with iOS 15 or later. The game is in English for now.",
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
  storeName: "Sushi Sort: Calm Color Puzzle",
  tagline: "掀开漆盖，排好寿司。",
  subtitle: "球排序与倒水排序玩法，没有倒计时",
  oneLiner:
    "一款安静的日式颜色排序解谜：大多数寿司扣在黑漆盖下，每倒一次就掀开下一件。450 关，撤销免费，没有时间限制。",
  statusNote: "已在 App Store 免费上架（iPhone 与 iPad），游戏目前为英文版。Android 版本筹备中。",
  metaTitle: "Sushi Sort 寿司排序：放松的颜色排序解谜游戏，无时间限制",
  metaDescription:
    "掀开黑漆盖，把寿司排好。一款放松解压的日式颜色排序益智游戏：30 座城市共 450 关，撤销免费，没有体力，没有时间限制。iPhone 与 iPad 免费下载。",
  features: [
    {
      title: "掀开漆盖",
      body: "大多数寿司扣在黑漆盖下，只有最前面一件朝上。每倒一次，下一件就会翻开。",
    },
    {
      title: "450 关，30 座城市",
      body: "每 15 关换一座城市，棋盘分五种，每一关都经机器验证能在步数目标内完成。",
    },
    {
      title: "永远没有时间限制",
      body: "没有体力，没有生命值。撤销永远免费并退还步数，禅模式可关闭步数目标。",
    },
    {
      title: "主厨评分",
      body: "每次过关按步数、整洁度和对比标准时间的速度评分，满分 1000，达到 950 即为「完美服务」。计时永远不会让你失败。",
    },
    {
      title: "重建餐厅",
      body: "用星星逐项翻新一家寿司餐厅的五个区域，开业之后还能按季节布置。",
    },
    {
      title: "寿司图鉴",
      body: "20 种寿司、三个品级、五个地区套组，还有盘子皮肤、每日任务和每周一场新的 Omakase 祭典。",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shots/01-mystery.webp",
      alt: "Sushi Sort 第 15 世界对局中：七条桧木餐架，大多数寿司扣在带金色问号的黑漆盖下，几件已经翻开，上方有两个漆器备用小碟",
    },
    {
      src: "/apps/sushi-sort/shots/02-peek.webp",
      alt: "同一棋盘使用「掀开漆盖」道具：所有寿司短暂朝上显示，餐架里有三文鱼、金枪鱼、太卷和花寿司",
    },
    {
      src: "/apps/sushi-sort/shots/03-master.webp",
      alt: "第 12 世界第 15 关的大师关，摆在金边黑漆盘上：八条餐架，几乎全部盖着漆盖，订单 65 步",
    },
    {
      src: "/apps/sushi-sort/shots/04-ticket.webp",
      alt: "第 15 世界第 2 关「深盘」的主厨订单：52 步内全部出餐，36 步内三星，两个备用小碟，以及主厨挑战开关",
    },
    {
      src: "/apps/sushi-sort/shots/05-promises.webp",
      alt: "排序进行中的棋盘：两条餐架已完成，免费撤销次数显示还剩 3 次",
    },
    {
      src: "/apps/sushi-sort/shots/06-restaurant.webp",
      alt: "餐厅主页：主厨在茶庭里挥手，第 3 / 5 区域，下一项翻新「种下红枫」和开始按钮",
    },
    {
      src: "/apps/sushi-sort/shots/07-worlds.webp",
      alt: "世界页面：第 15 世界「温泉旅馆」，列出餐架深度、漆盖、空餐架、寿司种类和 15 个关卡",
    },
    {
      src: "/apps/sushi-sort/shots/08-win.webp",
      alt: "三星过关，主厨评分 1000 分「完美服务」：步数 500、整洁 250、速度 250",
    },
    {
      src: "/apps/sushi-sort/shots/09-album.webp",
      alt: "寿司图鉴的北海道套组：三文鱼握寿司和鲑鱼子军舰卡片，分普通、稀有、金三个品级",
    },
    {
      src: "/apps/sushi-sort/shots/10-festival.webp",
      alt: "每周的 Omakase 祭典：樱花祭已收集 25 盏灯笼，奖励轨道上有金币、提示和图鉴卡",
    },
  ],
  trust: {
    title: "我们的承诺",
    body: "没有体力，没有生命值，没有时间限制。撤销永远免费，重开不洗牌，每一关都经机器验证可解。无需账号，可离线游玩。",
  },
  faqs: [
    {
      q: "Sushi Sort 免费吗？",
      a: "免费。全部 450 关、每日任务、每周的 Omakase 祭典和无尽模式都免费。游戏有横幅广告，关卡之间偶尔有广告，移动途中绝不插播。可选内购：移除广告（美区 $3.99）、金币包、新手礼包和主厨通行证。",
    },
    {
      q: "「移除广告」会移除哪些广告？",
      a: "横幅广告和关卡之间的广告。可选的激励视频仍然保留，看不看、什么时候看由你决定。这是一次性购买，换新设备可以恢复。",
    },
    {
      q: "漆盖是怎么运作的？",
      a: "每条餐架只有最前面、可以拿走的那一件朝上。移走它，下一件就会翻开并保持朝上。一次移动遇到第一个漆盖就停下，所以你只能拿起看得见的寿司。「掀开漆盖」道具会让所有寿司短暂显示。",
    },
    {
      q: "有时间限制、生命值或体力吗？",
      a: "没有。没有任何东西会充能、过期或把你锁在门外。主厨评分里有一个可选的计时，只会给分数加分：它不会结束关卡，不会扣星，在设置里一键就能隐藏。",
    },
    {
      q: "星星和主厨评分怎么算？",
      a: "星星看步数：在订单步数内完成得一星，接近最佳步数得三星。每关有 2 到 6 次免费撤销，超出后最多两星。主厨评分满分 1000：步数 500、整洁 250、速度 250，950 分以上即为「完美服务」。",
    },
    {
      q: "关卡太难怎么办？",
      a: "撤销免费并退还步数。失败两次，主厨会悄悄加几步。你还可以加一个备用小碟，用提示箭头看从哪条餐架移到哪条，或者开启禅模式，不受步数限制。",
    },
    {
      q: "会不会遇到无解的关卡？",
      a: "不会。每一关上线前都由按真实翻盖规则推演的求解器验证，确保能在步数目标内完成。重开后棋盘完全一样。",
    },
    {
      q: "需要账号或联网吗？",
      a: "都不需要。无需注册，游戏可离线游玩，进度、星星和餐厅都保存在你的设备上。",
    },
    {
      q: "支持哪些设备和语言？",
      a: "支持 iOS 15 及以上的 iPhone 和 iPad。游戏目前只有英文版。中国大陆 App Store 暂未上架。",
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
  storeName: "Sushi Sort: Calm Color Puzzle",
  tagline: "掀開漆蓋，排好壽司。",
  subtitle: "球排序與倒水排序玩法，沒有倒數計時",
  oneLiner:
    "一款安靜的日式顏色排序解謎：大多數壽司蓋在黑漆蓋下，每倒一次就掀開下一件。450 關，復原免費，沒有時間限制。",
  statusNote: "已在 App Store 免費上架（iPhone 與 iPad），遊戲目前為英文版；Android 版本籌備中。",
  metaTitle: "Sushi Sort 壽司排序：療癒的顏色排序解謎遊戲，沒有時間限制",
  metaDescription:
    "掀開黑漆蓋，把壽司排好。一款療癒紓壓的日式顏色排序益智遊戲：30 座城市共 450 關，復原免費，沒有體力，沒有時間限制。iPhone 與 iPad 免費下載。",
  features: [
    {
      title: "掀開漆蓋",
      body: "大多數壽司蓋在黑漆蓋下，只有最前面一件朝上。每倒一次，下一件就會翻開。",
    },
    {
      title: "450 關，30 座城市",
      body: "每 15 關換一座城市，棋盤分五種，每一關都經機器驗證能在步數目標內完成。",
    },
    {
      title: "永遠沒有時間限制",
      body: "沒有體力，沒有生命值。復原永遠免費並退還步數，禪模式可關閉步數目標。",
    },
    {
      title: "主廚評分",
      body: "每次過關依步數、整潔度和對比標準時間的速度評分，滿分 1000，達到 950 即為「完美服務」。計時永遠不會讓你失敗。",
    },
    {
      title: "重建餐廳",
      body: "用星星逐項翻新一家壽司餐廳的五個區域，開幕之後還能依季節布置。",
    },
    {
      title: "壽司圖鑑",
      body: "20 種壽司、三個等級、五個地區套組，還有盤子造型、每日任務和每週一場新的 Omakase 祭典。",
    },
  ],
  screenshots: [
    {
      src: "/apps/sushi-sort/shots/01-mystery.webp",
      alt: "Sushi Sort 第 15 世界對局中：七條檜木餐架，大多數壽司蓋在帶金色問號的黑漆蓋下，幾件已經翻開，上方有兩個漆器備用小碟",
    },
    {
      src: "/apps/sushi-sort/shots/02-peek.webp",
      alt: "同一盤面使用「掀開漆蓋」道具：所有壽司短暫朝上顯示，餐架裡有鮭魚、鮪魚、太卷和花壽司",
    },
    {
      src: "/apps/sushi-sort/shots/03-master.webp",
      alt: "第 12 世界第 15 關的大師關，擺在金邊黑漆盤上：八條餐架，幾乎全部蓋著漆蓋，訂單 65 步",
    },
    {
      src: "/apps/sushi-sort/shots/04-ticket.webp",
      alt: "第 15 世界第 2 關「深盤」的主廚訂單：52 步內全部出餐，36 步內三星，兩個備用小碟，以及主廚挑戰開關",
    },
    {
      src: "/apps/sushi-sort/shots/05-promises.webp",
      alt: "排序進行中的盤面：兩條餐架已完成，免費復原次數顯示還剩 3 次",
    },
    {
      src: "/apps/sushi-sort/shots/06-restaurant.webp",
      alt: "餐廳主頁：主廚在茶庭裡揮手，第 3 / 5 區域，下一項翻新「種下紅楓」和開始按鈕",
    },
    {
      src: "/apps/sushi-sort/shots/07-worlds.webp",
      alt: "世界頁面：第 15 世界「溫泉旅館」，列出餐架深度、漆蓋、空餐架、壽司種類和 15 個關卡",
    },
    {
      src: "/apps/sushi-sort/shots/08-win.webp",
      alt: "三星過關，主廚評分 1000 分「完美服務」：步數 500、整潔 250、速度 250",
    },
    {
      src: "/apps/sushi-sort/shots/09-album.webp",
      alt: "壽司圖鑑的北海道套組：鮭魚握壽司和鮭魚卵軍艦卡片，分普通、稀有、金三個等級",
    },
    {
      src: "/apps/sushi-sort/shots/10-festival.webp",
      alt: "每週的 Omakase 祭典：櫻花祭已收集 25 盞燈籠，獎勵軌道上有金幣、提示和圖鑑卡",
    },
  ],
  trust: {
    title: "我們的承諾",
    body: "沒有體力，沒有生命值，沒有時間限制。復原永遠免費，重來不洗牌，每一關都經機器驗證可解。無需帳號，可離線遊玩。",
  },
  faqs: [
    {
      q: "Sushi Sort 免費嗎？",
      a: "免費。全部 450 關、每日任務、每週的 Omakase 祭典和無盡模式都免費。遊戲有橫幅廣告，關卡之間偶爾有廣告，移動途中絕不插播。可選購買：移除廣告（美國區 US$3.99）、金幣包、新手禮包和主廚通行證。",
    },
    {
      q: "「移除廣告」會移除哪些廣告？",
      a: "橫幅廣告和關卡之間的廣告。可選的獎勵影片仍然保留，看不看、什麼時候看由你決定。這是一次性購買，換新裝置可以回復。",
    },
    {
      q: "漆蓋是怎麼運作的？",
      a: "每條餐架只有最前面、可以拿走的那一件朝上。移走它，下一件就會翻開並保持朝上。一次移動遇到第一個漆蓋就停下，所以你只能拿起看得見的壽司。「掀開漆蓋」道具會讓所有壽司短暫顯示。",
    },
    {
      q: "有時間限制、生命值或體力嗎？",
      a: "沒有。沒有任何東西會充能、過期或把你鎖在門外。主廚評分裡有一個可選的計時，只會替分數加分：它不會結束關卡，不會扣星，在設定裡一鍵就能隱藏。",
    },
    {
      q: "星星和主廚評分怎麼算？",
      a: "星星看步數：在訂單步數內完成得一星，接近最佳步數得三星。每關有 2 到 6 次免費復原，超過後最多兩星。主廚評分滿分 1000：步數 500、整潔 250、速度 250，950 分以上即為「完美服務」。",
    },
    {
      q: "關卡太難怎麼辦？",
      a: "復原免費並退還步數。失敗兩次，主廚會悄悄加幾步。你還可以加一個備用小碟，用提示箭頭看從哪條餐架移到哪條，或者開啟禪模式，不受步數限制。",
    },
    {
      q: "會不會遇到無解的關卡？",
      a: "不會。每一關上線前都由依真實翻蓋規則推演的求解器驗證，確保能在步數目標內完成。重來後盤面完全一樣。",
    },
    {
      q: "需要帳號或連網嗎？",
      a: "都不需要。無需註冊，遊戲可離線遊玩，進度、星星和餐廳都保存在你的裝置上。",
    },
    {
      q: "支援哪些裝置和語言？",
      a: "支援 iOS 15 以上的 iPhone 和 iPad。遊戲目前只有英文版。",
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
  category: "game",
  buildNumber: 7,
  version: "2.4.0",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/us/app/sushi-sort-calm-color-puzzle/id6792529319",
  appStoreId: "6792529319",
  // Google Play: no live listing yet (sg.appfactory.calmsort returns 404).
  platforms: ["iOS"],
  icon: "/apps/sushi-sort/icon.png",
  ogImage: "/apps/sushi-sort/og-2-2.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// The copy deck for the bespoke site only (not part of the generic registry).

interface Row {
  name: string;
  value: string;
  note?: string;
}

export interface SushiSortCopy {
  /** The h1, as two printed lines on the order slip. */
  titleLines: [string, string];
  lead: string;
  details: string[];
  storeCta: string;
  /** The live tray on the slip. */
  tray: {
    title: string;
    note: string;
    order: string; // "Order: {n} moves"
    moves: string;
    undo: string;
    restart: string;
    lift: string;
    rack: string; // "Rack {n}"
    lidded: string; // "{n} under lids"
    empty: string;
    picked: string; // "{piece} lifted from rack {n}"
    blocked: string;
    served: string; // "Served in {n} moves"
    stars: [string, string, string];
    over: string;
    pieces: Record<"S" | "T" | "C", string>;
    foot: string;
  };
  how: {
    title: string;
    body: string;
    slipTitle: string;
    groups: { name: string; rows: Row[] }[];
    result: Row;
    captions: [string, string];
  };
  restaurant: {
    title: string;
    body: string;
    areas: string[];
    alt: string;
    cta: string;
    secondary: string;
  };
  order: {
    title: string;
    note: string;
    groups: { name: string; rows: Row[] }[];
    captions: [string, string];
  };
  album: {
    title: string;
    body: string;
    grades: string;
    sets: Record<string, string>;
    sushi: Record<string, string>;
  };
  cities: {
    title: string;
    note: string;
    groups: string[];
    names: [string, string][];
    close: [string, string];
    levels: string; // "Levels"
  };
  promises: {
    title: string;
    items: string[];
    alt: string;
    caption: string;
  };
  faqTitle: string;
  credits: {
    title: string;
    intro: string;
    music: string;
    sfx: string;
    by: string;
    original: string;
  };
  footer: {
    menu: string;
    credits: string;
    contact: string;
    languages: string;
    alt: string;
    legal: string;
  };
}

const copyEn: SushiSortCopy = {
  titleLines: ["Sushi", "Sort"],
  lead: "Lift the lacquer lids and sort the sushi. A calm color puzzle for iPhone and iPad, with no time limits, no energy and no lives.",
  details: ["Free on the App Store", "450 levels in 30 cities", "Version 2.4"],
  storeCta: "Get it on the App Store",
  tray: {
    title: "Try a tray",
    note: "Tap a rack, then tap where its front piece goes: onto the same kind or an empty rack. Each pour lifts the next lid.",
    order: "Order: {n} moves",
    moves: "Moves",
    undo: "Undo",
    restart: "Restart",
    lift: "Lift lids",
    rack: "Rack {n}",
    lidded: "{n} under lids",
    empty: "empty",
    picked: "{piece} lifted from rack {n}",
    blocked: "That rack can't take it",
    served: "Served in {n} moves",
    stars: ["One star", "Two stars", "Three stars"],
    over: "Past the order. In the game the chef would quietly add a few moves.",
    pieces: { S: "Salmon nigiri", T: "Tamago", C: "Cucumber maki" },
    foot: "Three kinds, five racks, the game's own pieces. Real boards run to ten racks, ten deep.",
  },
  how: {
    title: "Every pour lifts a lid",
    body: "Sushi Sort is a color sort puzzle with one rule that changes it: you can only lift what you can see. Watch the racks, remember what turns up, and plan a few pours ahead.",
    slipTitle: "How a pour works",
    groups: [
      {
        name: "Before you pour",
        rows: [
          { name: "Front piece of each rack", value: "face up" },
          { name: "Every piece behind it", value: "under a lid" },
        ],
      },
      {
        name: "The pour",
        rows: [
          { name: "Onto the same kind or an empty rack", value: "1 move" },
          { name: "Matching face-up pieces", value: "go together" },
          { name: "The next lid", value: "lifts" },
        ],
      },
      {
        name: "When it gets tight",
        rows: [
          { name: "Spare spot on the counter", value: "holds 1" },
          { name: "Undo", value: "always free" },
          { name: "Lift lids booster", value: "shows all" },
        ],
      },
    ],
    result: { name: "Every rack one kind", value: "served" },
    captions: [
      "World 15: a few pieces revealed, the rest still lidded.",
      "A Master board, the tightest of its city.",
    ],
  },
  restaurant: {
    title: "Rebuild a sushi restaurant",
    body: "Stars from every clear renovate a warmly lit restaurant, one task at a time: lay the stepping-stone path, fill the koi pond, plant the red maple. Five areas, then seasonal dressing after the grand opening.",
    areas: ["Sushi Counter", "Kitchen", "Tea Garden", "Izakaya Rooftop", "Festival Street"],
    alt: "The restored sushi counter in Sushi Sort: lanterns, a red noren curtain, the glass fish case and three stools on a wooden floor",
    cta: "Get Sushi Sort",
    secondary: "See the twenty sushi",
  },
  order: {
    title: "The Chef's Order",
    note: "Every level arrives as an order ticket. This is what it asks, and what it gives back.",
    groups: [
      {
        name: "On the ticket",
        rows: [
          { name: "Move goal", value: "every level", note: "Serve every plate within it. No clock ends a level." },
          { name: "Stars", value: "1 to 3", note: "Near the best line for three, within the order for one." },
          { name: "Free undos", value: "2 to 6", note: "Undo never runs out; past the free ones the best is two stars." },
        ],
      },
      {
        name: "Chef's Score",
        rows: [
          { name: "Moves", value: "500", note: "Full marks at the best line." },
          { name: "Tidy play", value: "250", note: "Fewer extra undos, hints and boosters." },
          { name: "Speed against par", value: "250", note: "An optional clock you can hide in Settings." },
          { name: "Perfect Service", value: "950+", note: "A gold crown on the map." },
        ],
      },
      {
        name: "When it is hard",
        rows: [
          { name: "Spare spot", value: "+1", note: "Holds one piece of any kind for the attempt." },
          { name: "Chef's help", value: "after 2 fails", note: "The chef quietly adds a few moves." },
          { name: "Hint", value: "rack to rack", note: "An arrow shows where to move from and where it lands." },
          { name: "Zen mode", value: "no limit", note: "Switch move goals off and just sort." },
          { name: "Chef's Challenge", value: "1 spot fewer", note: "Extra coins and a red seal on the level." },
        ],
      },
    ],
    captions: [
      "The ticket for World 15, Level 2: a Deep Tray in 52 moves.",
      "A Chef's Score of 1000: Perfect Service.",
    ],
  },
  album: {
    title: "Twenty sushi to collect",
    body: "The Sushi Encyclopedia keeps one card per sushi in three grades, gathered in five regional sets. Finish a set and its plate skin is yours.",
    grades: "Common · Rare · Gold",
    sets: { tokyo: "Tokyo", osaka: "Osaka", hokkaido: "Hokkaido", kyushu: "Kyushu", festival: "Festival" },
    sushi: {
      tuna_nigiri: "Tuna Nigiri",
      shrimp_nigiri: "Shrimp Nigiri",
      tamago_nigiri: "Tamago Nigiri",
      cucumber_maki: "Cucumber Maki",
      mackerel_oshizushi: "Mackerel Oshizushi",
      futomaki: "Futomaki",
      inari: "Inari",
      octopus_nigiri: "Octopus Nigiri",
      salmon_nigiri: "Salmon Nigiri",
      ikura_gunkan: "Ikura Gunkan",
      uni_gunkan: "Uni Gunkan",
      squid_nigiri: "Squid Nigiri",
      unagi_nigiri: "Unagi Nigiri",
      salmon_maki: "Salmon Maki",
      avocado_uramaki: "Avocado Uramaki",
      california_cube: "California Cube",
      flower_sushi: "Flower Sushi",
      radish_temari: "Radish Temari",
      temaki: "Temaki",
      dragon_roll: "Dragon Roll",
    },
  },
  cities: {
    title: "Thirty cities, 450 levels",
    note: "A new city every 15 levels. Level 5 is Hard; levels 10 and 15 are Master boards, the tightest of their city.",
    groups: ["Levels 1 to 150", "Levels 151 to 300", "Levels 301 to 450"],
    levels: "Levels",
    names: [
      ["Morning Market", "Dawn at the fish market"],
      ["Tamago Corner", "Sweet omelette and first orders"],
      ["Nigiri Lane", "The counter fills up"],
      ["Harbour Stalls", "Boats in, crates stacked high"],
      ["Lantern Alley", "Paper lanterns after dark"],
      ["Kappa Bridge", "Cucumber rolls by the river"],
      ["Sakura Terrace", "Blossom season service"],
      ["Bamboo Grove", "Quiet paths, tall racks"],
      ["Tea House Row", "Matcha between courses"],
      ["Koi Garden", "Still water, busy kitchen"],
      ["Misty Wharf", "Lids on every tray"],
      ["Daikon Fields", "Harvest-day bento"],
      ["Pine Pass", "Mountain inn, narrow counter"],
      ["Snow Village", "Warm miso, deep trays"],
      ["Hot Spring Inn", "Steam over the onsen"],
      ["Temple Steps", "A hundred stone stairs"],
      ["Cedar Forest", "Old trees, older recipes"],
      ["Moon Pavilion", "Tsukimi by lantern light"],
      ["Rice Terraces", "Green steps to the sky"],
      ["Castle Kitchen", "The lord's banquet"],
      ["Festival Street", "Yatai stalls and crowds"],
      ["Taiko Square", "Drums and fast hands"],
      ["Firefly River", "Summer night, soft light"],
      ["Maple Valley", "Momiji red, trays full"],
      ["Crane Lake", "Patience on the water"],
      ["Plum Shrine", "First blossoms of the year"],
      ["Night Market", "Every stall a mystery"],
      ["Lacquer Workshop", "Black and gold trays"],
      ["Golden Pagoda", "The master's last test"],
      ["Grand Kaiseki", "The chef's final course"],
    ],
    close: ["No time limits, no closing hour.", "Open whenever you are."],
  },
  promises: {
    title: "Our promises",
    items: [
      "No energy",
      "No lives",
      "No time limits",
      "No forced ad every level",
      "Undo always free",
      "Restart never reshuffles",
      "Every level solvable",
      "Zen mode",
      "No account",
      "Plays offline",
    ],
    alt: "The Tea Garden fully restored: a koi pond, stone lanterns, raked gravel and cherry blossom in front of the restaurant",
    caption: "Printed in the game too, under Settings, Our promises.",
  },
  faqTitle: "Questions, answered",
  credits: {
    title: "Music and sound credits",
    intro: "The music and sounds in Sushi Sort come from these composers and libraries. Thank you. Every track links to its page.",
    music: "Music",
    sfx: "Sound effects",
    by: "by",
    original: "Everything else, the procedural koto, shamisen, shakuhachi and taiko score and the chimes, was made for Sushi Sort.",
  },
  footer: {
    menu: "Sushi Sort",
    credits: "Credits",
    contact: "Write to us",
    languages: "Read in",
    alt: "Festival Street in Sushi Sort at dusk: lantern-lit food stalls, a red torii gate and fireworks over the rooftops",
    legal: "© 2026 Lei Cao. Sushi Sort is made by App Factory in Singapore.",
  },
};

const copyZhCn: SushiSortCopy = {
  titleLines: ["Sushi Sort", "寿司排序"],
  lead: "掀开黑漆盖，把寿司排好。一款安静的颜色排序解谜，支持 iPhone 和 iPad：没有时间限制，没有体力，没有生命值。",
  details: ["App Store 免费下载", "30 座城市，450 关", "2.4 版"],
  storeCta: "前往 App Store 下载",
  tray: {
    title: "试玩一盘",
    note: "先点一条餐架，再点它最前面那件寿司要去的地方：同一种寿司上面，或者空餐架。每倒一次，下一个漆盖就会掀开。",
    order: "订单：{n} 步",
    moves: "步数",
    undo: "撤销",
    restart: "重开",
    lift: "掀开漆盖",
    rack: "第 {n} 条餐架",
    lidded: "{n} 件在漆盖下",
    empty: "空",
    picked: "从第 {n} 条餐架拿起{piece}",
    blocked: "这条餐架放不下",
    served: "{n} 步完成出餐",
    stars: ["一星", "两星", "三星"],
    over: "已超出订单步数。在游戏里，主厨会悄悄帮你加几步。",
    pieces: { S: "三文鱼握寿司", T: "玉子烧握寿司", C: "黄瓜细卷" },
    foot: "三种寿司、五条餐架，用的是游戏里的原画。正式关卡最多十条餐架、每条十格。",
  },
  how: {
    title: "每倒一次，掀开一个漆盖",
    body: "Sushi Sort 是一款颜色排序解谜，只多了一条规则，却完全不同：看得见的才能拿。盯住餐架，记住翻出来的寿司，提前想好几步。",
    slipTitle: "一次倾倒的过程",
    groups: [
      {
        name: "倒之前",
        rows: [
          { name: "每条餐架最前面一件", value: "朝上" },
          { name: "后面的每一件", value: "盖着漆盖" },
        ],
      },
      {
        name: "倒的时候",
        rows: [
          { name: "倒到同种寿司上或空餐架", value: "1 步" },
          { name: "相连的同种朝上寿司", value: "一起移动" },
          { name: "下一个漆盖", value: "掀开" },
        ],
      },
      {
        name: "棋盘变紧时",
        rows: [
          { name: "柜台上的备用小碟", value: "可放 1 件" },
          { name: "撤销", value: "永远免费" },
          { name: "「掀开漆盖」道具", value: "全部显示" },
        ],
      },
    ],
    result: { name: "每条餐架只剩一种寿司", value: "出餐" },
    captions: [
      "第 15 世界：几件寿司已经翻开，其余仍盖着漆盖。",
      "大师关，每座城市里最紧的棋盘。",
    ],
  },
  restaurant: {
    title: "重建一家寿司餐厅",
    body: "每次过关得到的星星，用来一项一项翻新一家灯火温暖的餐厅：铺好踏脚石小路、给锦鲤池注水、种下红枫。五个区域，开业之后还能按季节布置。",
    areas: ["寿司吧台", "厨房", "茶庭", "居酒屋露台", "祭典街"],
    alt: "Sushi Sort 里翻新完成的寿司吧台：灯笼、红色暖帘、玻璃鱼柜和木地板上的三张高凳",
    cta: "下载 Sushi Sort",
    secondary: "看看二十种寿司",
  },
  order: {
    title: "主厨订单",
    note: "每一关都以一张订单开始。它要求什么，又给你什么，都写在这里。",
    groups: [
      {
        name: "订单上写着",
        rows: [
          { name: "步数目标", value: "每一关", note: "在步数内送出所有餐盘。没有计时会结束关卡。" },
          { name: "星星", value: "1 到 3 颗", note: "接近最佳步数得三星，在订单内完成得一星。" },
          { name: "免费撤销", value: "2 到 6 次", note: "撤销不限次数；超出免费次数后最多两星。" },
        ],
      },
      {
        name: "主厨评分",
        rows: [
          { name: "步数", value: "500", note: "达到最佳步数即满分。" },
          { name: "整洁度", value: "250", note: "少用额外撤销、提示和道具。" },
          { name: "对比标准时间的速度", value: "250", note: "可选的计时，在设置里可以隐藏。" },
          { name: "完美服务", value: "950+", note: "地图上会多一顶金色王冠。" },
        ],
      },
      {
        name: "太难的时候",
        rows: [
          { name: "备用小碟", value: "+1", note: "本局可暂放任意一件寿司。" },
          { name: "主厨帮忙", value: "失败两次后", note: "主厨会悄悄加几步。" },
          { name: "提示", value: "从哪到哪", note: "箭头标出从哪条餐架移出、落到哪里。" },
          { name: "禅模式", value: "不限步数", note: "关闭步数目标，安心排序。" },
          { name: "主厨挑战", value: "少 1 个小碟", note: "额外金币，关卡上还会盖一枚红印。" },
        ],
      },
    ],
    captions: [
      "第 15 世界第 2 关的订单：深盘，52 步。",
      "主厨评分 1000 分：完美服务。",
    ],
  },
  album: {
    title: "收集二十种寿司",
    body: "寿司图鉴为每种寿司准备一张卡，分普通、稀有、金三个品级，归入五个地区套组。集齐一套，就能得到对应的盘子皮肤。",
    grades: "普通 · 稀有 · 金",
    sets: { tokyo: "东京", osaka: "大阪", hokkaido: "北海道", kyushu: "九州", festival: "祭典" },
    sushi: {
      tuna_nigiri: "金枪鱼握寿司",
      shrimp_nigiri: "甜虾握寿司",
      tamago_nigiri: "玉子烧握寿司",
      cucumber_maki: "黄瓜细卷",
      mackerel_oshizushi: "青花鱼押寿司",
      futomaki: "太卷",
      inari: "稻荷寿司",
      octopus_nigiri: "章鱼握寿司",
      salmon_nigiri: "三文鱼握寿司",
      ikura_gunkan: "鲑鱼子军舰",
      uni_gunkan: "海胆军舰",
      squid_nigiri: "鱿鱼握寿司",
      unagi_nigiri: "鳗鱼握寿司",
      salmon_maki: "三文鱼细卷",
      avocado_uramaki: "牛油果里卷",
      california_cube: "加州卷方块",
      flower_sushi: "花寿司",
      radish_temari: "萝卜手鞠寿司",
      temaki: "手卷",
      dragon_roll: "龙卷",
    },
  },
  cities: {
    title: "30 座城市，450 关",
    note: "每 15 关换一座城市。第 5 关是困难关；第 10 关和第 15 关是大师关，是这座城市里最紧的棋盘。",
    groups: ["第 1 至 150 关", "第 151 至 300 关", "第 301 至 450 关"],
    levels: "关卡",
    names: [
      ["早市", "鱼市的黎明"],
      ["玉子小铺", "甜玉子烧和第一张订单"],
      ["握寿司小巷", "吧台渐渐坐满"],
      ["港口摊位", "渔船靠岸，箱子堆得高高"],
      ["灯笼巷", "入夜后的纸灯笼"],
      ["河童桥", "河边的黄瓜卷"],
      ["樱花露台", "樱花季的出餐"],
      ["竹林", "安静的小径，高高的餐架"],
      ["茶屋街", "上菜间隙的一杯抹茶"],
      ["锦鲤庭园", "池水平静，厨房忙碌"],
      ["雾中码头", "每个盘子都盖着漆盖"],
      ["萝卜田", "丰收日的便当"],
      ["松林山口", "山间旅店，窄窄的吧台"],
      ["雪村", "热味噌汤，深深的餐盘"],
      ["温泉旅馆", "温泉上的热气"],
      ["神社石阶", "一百级石阶"],
      ["杉林", "古老的树，更古老的食谱"],
      ["赏月亭", "灯笼下的赏月"],
      ["梯田", "通往天空的绿色台阶"],
      ["城中厨房", "城主的宴席"],
      ["祭典街", "屋台小摊和人群"],
      ["太鼓广场", "鼓声与快手"],
      ["萤火虫河", "夏夜柔光"],
      ["红叶谷", "红叶正红，餐盘满满"],
      ["鹤湖", "水边的耐心"],
      ["梅花神社", "一年最早的花"],
      ["夜市", "每个摊位都是谜"],
      ["漆器工坊", "黑与金的餐盘"],
      ["金色宝塔", "大师的最后考验"],
      ["怀石盛宴", "主厨的最后一道菜"],
    ],
    close: ["没有时间限制，也没有打烊时间。", "你什么时候来，都开着门。"],
  },
  promises: {
    title: "我们的承诺",
    items: [
      "没有体力",
      "没有生命值",
      "没有时间限制",
      "不会每关强制看广告",
      "撤销永远免费",
      "重开不洗牌",
      "每一关都可解",
      "禅模式",
      "无需账号",
      "可离线游玩",
    ],
    alt: "翻新完成的茶庭：锦鲤池、石灯笼、耙过的白砂和餐厅前的樱花",
    caption: "游戏里也印着这些承诺：设置 › 我们的承诺。",
  },
  faqTitle: "常见问题",
  credits: {
    title: "音乐与音效致谢",
    intro: "Sushi Sort 的音乐与音效来自以下作曲者与素材库，衷心感谢。每首曲目都附有原始页面链接。",
    music: "音乐",
    sfx: "音效",
    by: "作者",
    original: "其余部分，包括程序生成的筝、三味线、尺八、太鼓配乐与铃声，都是为 Sushi Sort 原创的。",
  },
  footer: {
    menu: "Sushi Sort",
    credits: "致谢",
    contact: "联系我们",
    languages: "语言",
    alt: "Sushi Sort 里黄昏时的祭典街：灯笼照亮的小吃摊、红色鸟居和屋顶上的烟花",
    legal: "© 2026 Lei Cao。Sushi Sort 由新加坡的 App Factory 制作。",
  },
};

const copyZhTw: SushiSortCopy = {
  titleLines: ["Sushi Sort", "壽司排序"],
  lead: "掀開黑漆蓋，把壽司排好。一款安靜的顏色排序解謎，支援 iPhone 和 iPad：沒有時間限制，沒有體力，沒有生命值。",
  details: ["App Store 免費下載", "30 座城市，450 關", "2.4 版"],
  storeCta: "前往 App Store 下載",
  tray: {
    title: "試玩一盤",
    note: "先點一條餐架，再點它最前面那件壽司要去的地方：同一種壽司上面，或是空餐架。每倒一次，下一個漆蓋就會掀開。",
    order: "訂單：{n} 步",
    moves: "步數",
    undo: "復原",
    restart: "重來",
    lift: "掀開漆蓋",
    rack: "第 {n} 條餐架",
    lidded: "{n} 件在漆蓋下",
    empty: "空",
    picked: "從第 {n} 條餐架拿起{piece}",
    blocked: "這條餐架放不下",
    served: "{n} 步完成出餐",
    stars: ["一星", "兩星", "三星"],
    over: "已超過訂單步數。在遊戲裡，主廚會悄悄幫你加幾步。",
    pieces: { S: "鮭魚握壽司", T: "玉子燒握壽司", C: "小黃瓜細捲" },
    foot: "三種壽司、五條餐架，用的是遊戲裡的原畫。正式關卡最多十條餐架、每條十格。",
  },
  how: {
    title: "每倒一次，掀開一個漆蓋",
    body: "Sushi Sort 是一款顏色排序解謎，只多了一條規則，卻完全不同：看得見的才能拿。盯住餐架，記住翻出來的壽司，提前想好幾步。",
    slipTitle: "一次傾倒的過程",
    groups: [
      {
        name: "倒之前",
        rows: [
          { name: "每條餐架最前面一件", value: "朝上" },
          { name: "後面的每一件", value: "蓋著漆蓋" },
        ],
      },
      {
        name: "倒的時候",
        rows: [
          { name: "倒到同種壽司上或空餐架", value: "1 步" },
          { name: "相連的同種朝上壽司", value: "一起移動" },
          { name: "下一個漆蓋", value: "掀開" },
        ],
      },
      {
        name: "盤面變緊時",
        rows: [
          { name: "櫃檯上的備用小碟", value: "可放 1 件" },
          { name: "復原", value: "永遠免費" },
          { name: "「掀開漆蓋」道具", value: "全部顯示" },
        ],
      },
    ],
    result: { name: "每條餐架只剩一種壽司", value: "出餐" },
    captions: [
      "第 15 世界：幾件壽司已經翻開，其餘仍蓋著漆蓋。",
      "大師關，每座城市裡最緊的盤面。",
    ],
  },
  restaurant: {
    title: "重建一家壽司餐廳",
    body: "每次過關得到的星星，用來一項一項翻新一家燈火溫暖的餐廳：鋪好踏腳石小路、替錦鯉池注水、種下紅楓。五個區域，開幕之後還能依季節布置。",
    areas: ["壽司吧台", "廚房", "茶庭", "居酒屋露台", "祭典街"],
    alt: "Sushi Sort 裡翻新完成的壽司吧台：燈籠、紅色暖簾、玻璃魚櫃和木地板上的三張高腳椅",
    cta: "下載 Sushi Sort",
    secondary: "看看二十種壽司",
  },
  order: {
    title: "主廚訂單",
    note: "每一關都以一張訂單開始。它要求什麼，又給你什麼，都寫在這裡。",
    groups: [
      {
        name: "訂單上寫著",
        rows: [
          { name: "步數目標", value: "每一關", note: "在步數內送出所有餐盤。沒有計時會結束關卡。" },
          { name: "星星", value: "1 到 3 顆", note: "接近最佳步數得三星，在訂單內完成得一星。" },
          { name: "免費復原", value: "2 到 6 次", note: "復原不限次數；超過免費次數後最多兩星。" },
        ],
      },
      {
        name: "主廚評分",
        rows: [
          { name: "步數", value: "500", note: "達到最佳步數即滿分。" },
          { name: "整潔度", value: "250", note: "少用額外復原、提示和道具。" },
          { name: "對比標準時間的速度", value: "250", note: "可選的計時，在設定裡可以隱藏。" },
          { name: "完美服務", value: "950+", note: "地圖上會多一頂金色王冠。" },
        ],
      },
      {
        name: "太難的時候",
        rows: [
          { name: "備用小碟", value: "+1", note: "本局可暫放任意一件壽司。" },
          { name: "主廚幫忙", value: "失敗兩次後", note: "主廚會悄悄加幾步。" },
          { name: "提示", value: "從哪到哪", note: "箭頭標出從哪條餐架移出、落到哪裡。" },
          { name: "禪模式", value: "不限步數", note: "關閉步數目標，安心排序。" },
          { name: "主廚挑戰", value: "少 1 個小碟", note: "額外金幣，關卡上還會蓋一枚紅印。" },
        ],
      },
    ],
    captions: [
      "第 15 世界第 2 關的訂單：深盤，52 步。",
      "主廚評分 1000 分：完美服務。",
    ],
  },
  album: {
    title: "收集二十種壽司",
    body: "壽司圖鑑為每種壽司準備一張卡，分普通、稀有、金三個等級，歸入五個地區套組。集滿一套，就能得到對應的盤子造型。",
    grades: "普通 · 稀有 · 金",
    sets: { tokyo: "東京", osaka: "大阪", hokkaido: "北海道", kyushu: "九州", festival: "祭典" },
    sushi: {
      tuna_nigiri: "鮪魚握壽司",
      shrimp_nigiri: "甜蝦握壽司",
      tamago_nigiri: "玉子燒握壽司",
      cucumber_maki: "小黃瓜細捲",
      mackerel_oshizushi: "鯖魚押壽司",
      futomaki: "太捲",
      inari: "豆皮壽司",
      octopus_nigiri: "章魚握壽司",
      salmon_nigiri: "鮭魚握壽司",
      ikura_gunkan: "鮭魚卵軍艦",
      uni_gunkan: "海膽軍艦",
      squid_nigiri: "花枝握壽司",
      unagi_nigiri: "鰻魚握壽司",
      salmon_maki: "鮭魚細捲",
      avocado_uramaki: "酪梨裏捲",
      california_cube: "加州捲方塊",
      flower_sushi: "花壽司",
      radish_temari: "蘿蔔手鞠壽司",
      temaki: "手捲",
      dragon_roll: "龍捲",
    },
  },
  cities: {
    title: "30 座城市，450 關",
    note: "每 15 關換一座城市。第 5 關是困難關；第 10 關和第 15 關是大師關，是這座城市裡最緊的盤面。",
    groups: ["第 1 至 150 關", "第 151 至 300 關", "第 301 至 450 關"],
    levels: "關卡",
    names: [
      ["早市", "魚市的黎明"],
      ["玉子小舖", "甜玉子燒和第一張訂單"],
      ["握壽司小巷", "吧台漸漸坐滿"],
      ["港口攤位", "漁船靠岸，箱子堆得高高"],
      ["燈籠巷", "入夜後的紙燈籠"],
      ["河童橋", "河邊的小黃瓜捲"],
      ["櫻花露台", "櫻花季的出餐"],
      ["竹林", "安靜的小徑，高高的餐架"],
      ["茶屋街", "上菜空檔的一杯抹茶"],
      ["錦鯉庭園", "池水平靜，廚房忙碌"],
      ["霧中碼頭", "每個盤子都蓋著漆蓋"],
      ["蘿蔔田", "豐收日的便當"],
      ["松林山口", "山間旅店，窄窄的吧台"],
      ["雪村", "熱味噌湯，深深的餐盤"],
      ["溫泉旅館", "溫泉上的熱氣"],
      ["神社石階", "一百級石階"],
      ["杉林", "古老的樹，更古老的食譜"],
      ["賞月亭", "燈籠下的賞月"],
      ["梯田", "通往天空的綠色台階"],
      ["城中廚房", "城主的宴席"],
      ["祭典街", "屋台小攤和人群"],
      ["太鼓廣場", "鼓聲與快手"],
      ["螢火蟲河", "夏夜柔光"],
      ["紅葉谷", "紅葉正紅，餐盤滿滿"],
      ["鶴湖", "水邊的耐心"],
      ["梅花神社", "一年最早的花"],
      ["夜市", "每個攤位都是謎"],
      ["漆器工坊", "黑與金的餐盤"],
      ["金色寶塔", "大師的最後考驗"],
      ["懷石盛宴", "主廚的最後一道菜"],
    ],
    close: ["沒有時間限制，也沒有打烊時間。", "你什麼時候來，都開著門。"],
  },
  promises: {
    title: "我們的承諾",
    items: [
      "沒有體力",
      "沒有生命值",
      "沒有時間限制",
      "不會每關強制看廣告",
      "復原永遠免費",
      "重來不洗牌",
      "每一關都可解",
      "禪模式",
      "無需帳號",
      "可離線遊玩",
    ],
    alt: "翻新完成的茶庭：錦鯉池、石燈籠、耙過的白砂和餐廳前的櫻花",
    caption: "遊戲裡也印著這些承諾：設定 › 我們的承諾。",
  },
  faqTitle: "常見問題",
  credits: {
    title: "音樂與音效致謝",
    intro: "Sushi Sort 的音樂與音效來自以下作曲者與素材庫，衷心感謝。每首曲目都附有原始頁面連結。",
    music: "音樂",
    sfx: "音效",
    by: "作者",
    original: "其餘部分，包括程式生成的箏、三味線、尺八、太鼓配樂與鈴聲，都是為 Sushi Sort 原創的。",
  },
  footer: {
    menu: "Sushi Sort",
    credits: "致謝",
    contact: "聯絡我們",
    languages: "語言",
    alt: "Sushi Sort 裡黃昏時的祭典街：燈籠照亮的小吃攤、紅色鳥居和屋頂上的煙火",
    legal: "© 2026 Lei Cao。Sushi Sort 由新加坡的 App Factory 製作。",
  },
};

export const sushiSortCopy: Record<Locale, SushiSortCopy> = {
  en: copyEn,
  "zh-cn": copyZhCn,
  "zh-tw": copyZhTw,
};

/** The Sushi Encyclopedia's five sets, in the game's order (album.dart). */
export const SUSHI_SETS: { id: string; pieces: string[] }[] = [
  { id: "tokyo", pieces: ["tuna_nigiri", "shrimp_nigiri", "tamago_nigiri", "cucumber_maki"] },
  { id: "osaka", pieces: ["mackerel_oshizushi", "futomaki", "inari", "octopus_nigiri"] },
  { id: "hokkaido", pieces: ["salmon_nigiri", "ikura_gunkan", "uni_gunkan", "squid_nigiri"] },
  { id: "kyushu", pieces: ["unagi_nigiri", "salmon_maki", "avocado_uramaki", "california_cube"] },
  { id: "festival", pieces: ["flower_sushi", "radish_temari", "temaki", "dragon_roll"] },
];

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
