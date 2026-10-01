// Ember Deck — content in all three locales, plus the copy for its bespoke
// landing page (src/components/ember-deck/landing.tsx). The subdomain gets
// the "lit hearth in a dark book" theme via [data-app="ember-deck"] in
// globals.css. Game facts come from the app repo: docs/v2/MASTER-PLAN.md,
// docs/v2/design-v2.md, fastlane metadata and app_privacy_details.json.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

// ---------------------------------------------------------------------------
// RELEASE SWITCH — the one line to change on launch day. Flipping a platform
// to true turns the status to "live", shows the real store button for it and
// swaps every "coming soon" line for the released wording.
const RELEASED = { ios: false, android: false };

const APP_STORE_URL = "https://apps.apple.com/app/id6794833643";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.appfactory.roguelite_deckbuilder";

const anyReleased = RELEASED.ios || RELEASED.android;

/** Pick the right availability line for the current release state. */
function availability(c: {
  soon: string;
  both: string;
  iosOnly: string;
  androidOnly: string;
}): string {
  if (RELEASED.ios && RELEASED.android) return c.both;
  if (RELEASED.ios) return c.iosOnly;
  if (RELEASED.android) return c.androidOnly;
  return c.soon;
}

const SHOT = "/apps/ember-deck";

const en: AppLocalized = {
  name: "Ember Deck",
  storeName: "Ember Deck: Roguelite Cards",
  tagline: "Five-minute runs. Die. Grow stronger.",
  subtitle: "5-Min Runs. Die. Grow Stronger",
  oneLiner:
    "A painted dark-fantasy deckbuilder sized for a commute. Every card you play stokes the Heat — sequence your hand, light the Blaze, and climb three acts to the Hollow King.",
  statusNote: availability({
    soon: "Coming soon to iPhone & Android.",
    both: "Out now on iPhone & Android.",
    iosOnly: "Out now on iPhone. Android is on the way.",
    androidOnly: "Out now on Android. iPhone is on the way.",
  }),
  metaTitle: "Ember Deck: Roguelite Cards — a five-minute dark-fantasy deckbuilder",
  metaDescription:
    "Ember Deck is a roguelite deckbuilder for your phone: build Heat with every card, fire Blaze finishers, and climb three acts with three heroes and 120+ cards. No energy timers, no gacha, fully offline.",
  features: [
    {
      title: "Three acts, one throne",
      body: "Climb The Ascent, sink into The Drowned Vaults and storm The Cinder Throne. Each act has its own enemies, two possible bosses and a camp to rest at in between.",
    },
    {
      title: "120+ cards, all earned",
      body: "Over a hundred and twenty cards across three heroes and a neutral pool. Every card is unlocked by playing. None come in packs and none are sold for currency.",
    },
    {
      title: "No energy timers",
      body: "The only energy in Ember Deck is the three you spend each turn. Nothing recharges on a clock, so play one run a week or ten in a night.",
    },
    {
      title: "Plays fully offline",
      body: "No account and no sign-up. The game autosaves after every node, so a tunnel or a flight never costs you a run.",
    },
    {
      title: "Fair monetization, no gacha",
      body: "No loot boxes and nothing random for sale. Optional one-time purchases remove the between-run ads or unlock a hero early, and every hero can also be earned by playing.",
    },
    {
      title: "Death is progress",
      body: "Every node you clear banks shards and mastery. Spend them in the Sanctum on permanent upgrades, then push into fifteen Ascension levels when the run needs to fight back.",
    },
  ],
  // PRE-RELEASE placeholders: v1 TestFlight captures from
  // docs/evidence/listing/, cropped under the status bar. Replace with the
  // v2 captioned store shots before launch (same file names).
  screenshots: [
    { src: `${SHOT}/shot-map.webp`, alt: "The Ascent: a branching map of fights, elites, campfires and treasure leading up to the boss" },
    { src: `${SHOT}/shot-combat.webp`, alt: "Combat: the Mire Serpent telegraphs Attack 5 and Poison 3 above a hand of cards" },
    { src: `${SHOT}/shot-reward.webp`, alt: "Card reward: choose one of three cards to add to your deck after a fight" },
    { src: `${SHOT}/shot-sanctum.webp`, alt: "The Sanctum: a track of permanent unlocks bought with shards" },
    { src: `${SHOT}/shot-title.webp`, alt: "Ember Deck title screen with Play, Daily Run, Settings and Help" },
  ],
  faqs: [
    {
      q: "Where is my progress saved?",
      a: "On your device only. Ember Deck has no account and no server save. The game autosaves after every map node and when you leave mid-fight, so you can close it at any time and pick up where you were. Deleting the app deletes your progress.",
    },
    {
      q: "I got a new phone. How do I restore my purchases?",
      a: "Open Settings → Restore purchases while signed in to the same Apple ID or Google account you bought with. Remove Ads, hero unlocks and the Founder's Bundle come back straight away. Run progress and shards stay on the old device because they are saved locally.",
    },
    {
      q: "When do ads appear?",
      a: "Only between runs or acts, never during a fight, and never in your first two runs. There are also optional ads you can choose to watch for a revive, a card reroll or double shards. Every one of those is skippable, and none is needed to finish a run or unlock anything.",
    },
    {
      q: "What does Remove Ads do?",
      a: "It is a one-time purchase that permanently removes the between-run ads. The optional watch-an-ad rewards stay available, because they only play when you tap them. The Founder's Bundle includes Remove Ads too.",
    },
    {
      q: "I bought something and it didn't unlock.",
      a: "First try Settings → Restore purchases. If it still doesn't appear, email us with your device model and the date of purchase. Refunds are handled by Apple or Google under their store policies.",
    },
    {
      q: "How do I change my ad and tracking choices?",
      a: "On iPhone you can allow or deny tracking in the system prompt, or later in iOS Settings → Privacy & Security → Tracking. Where the consent form applies, you can reopen it anytime from Settings → Manage privacy consent. The game plays exactly the same whatever you choose.",
    },
    {
      q: "Do I need Game Center or Google Play Games?",
      a: "No. Signing in only adds leaderboards and achievements. Everything else, including the Daily Run, works without it.",
    },
    {
      q: "How do I contact you?",
      a: "Email lei@appfactory.sg. A real person reads every message, usually within two days.",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "The short version",
        body: [
          "Ember Deck has no accounts, no sign-up and no server of its own. Your runs, deck unlocks, shards and settings are stored only on your device. The app uses a few Google and platform services for analytics, crash reports, remote tuning, ads and purchases. The data they handle is not linked to your name, email or any other identity.",
        ],
      },
      {
        heading: "What is collected, and by whom",
        body: [
          [
            "Gameplay analytics (Google Firebase Analytics): anonymous events such as run started or finished, act reached, tutorial steps, cards picked, ads watched and purchases made, along with device model, OS version, language, country and an app-instance identifier. We use this to balance the game and see where players get stuck.",
            "Crash and performance data (Firebase Crashlytics and Firebase performance monitoring): stack traces, device state at the time of a crash, and timing data such as load times. We use it to fix bugs and keep the game smooth.",
            "Remote configuration (Firebase Remote Config and A/B Testing): on launch the app fetches settings such as balance numbers, ad frequency caps and store offers, using a Firebase installation identifier. You may be placed in a test group that sees a different value; this never changes the rules of a run in progress.",
            "Advertising (Google AdMob): when an ad is shown, Google's SDK may use your device's advertising identifier (IDFA on iOS, Advertising ID on Android), your IP address and ad-interaction data to serve, measure and cap ads. On iPhone we ask your permission first through App Tracking Transparency. If you decline, the identifier is not shared. In the EEA, UK and Switzerland, Google's consent form (UMP) is shown before any ad loads.",
          ],
          "This matches the app's App Store privacy label: device ID, advertising data, product interaction, crash data, performance data and other diagnostics, all marked as not linked to you. Only the device ID and advertising data may be used for tracking, and only with your permission.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "Remove Ads, hero unlocks, the Founder's Bundle and cosmetic packs are processed entirely by the Apple App Store or Google Play. We never see your name, email or payment details. The app only receives a confirmation of what was bought so it can unlock it, and a purchase event (product and price) is logged in analytics.",
        ],
      },
      {
        heading: "Game Center and Google Play Games",
        body: [
          "If you choose to sign in, Apple Game Center or Google Play Games receives your scores and achievements so it can show leaderboards. Your player profile is handled by Apple or Google under their own privacy policies. We don't receive your email or contacts. Signing in is optional.",
        ],
      },
      {
        heading: "Notifications",
        body: [
          "Ember Deck only asks for notification permission after you have played a while, and it sends at most one reminder a day (for example, when a new Daily Run is ready). These are local notifications scheduled on your device. No push token or server is involved. You can turn them off anytime in your device settings.",
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, names, emails, phone numbers, contacts, photos, precise location, messages or payment details. We don't sell personal data, and we don't build profiles of you.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS prompt, or change it later in iOS Settings → Privacy & Security → Tracking. The game plays identically either way.",
            "Change your ad-consent choices anytime in Settings → Manage privacy consent.",
            "Reset or limit your advertising identifier in your iOS or Android settings.",
            "Remove the between-run ads permanently with the Remove Ads purchase.",
            "Delete the app to remove all locally stored progress.",
          ],
        ],
      },
      {
        heading: "Where data goes and how long it stays",
        body: [
          "Data collected by Google services is processed by Google LLC in the United States and other countries, and kept under Google's retention settings for Firebase and AdMob. Google's policies: policies.google.com/privacy and firebase.google.com/support/privacy. Because none of this data is linked to your identity, we usually can't find records for one person, but email us and we'll help where we can.",
        ],
      },
      {
        heading: "Children",
        body: [
          "Ember Deck is not directed at children under 13 and does not knowingly collect personal information from them.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about this policy: email lei@appfactory.sg."],
      },
      {
        heading: "Changes",
        body: [
          "We'll update this page when the policy changes and note material changes in the app's release notes.",
        ],
      },
    ],
  },
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "License",
        body: [
          "We grant you a personal, non-exclusive, non-transferable license to install and play Ember Deck on devices you own or control, for your own non-commercial use, subject to the App Store or Google Play terms under which you got it.",
        ],
      },
      {
        heading: "Purchases and in-game items",
        body: [
          "Remove Ads, hero unlocks, the Founder's Bundle and cosmetic packs are one-time purchases processed by the Apple App Store or Google Play under their payment terms. Restore them on a new device via Settings → Restore purchases. Shards, gold and other in-game currencies are earned by playing, have no cash value and can't be exchanged or transferred. Refunds are handled by the store, not by us.",
        ],
      },
      {
        heading: "Fair play, honestly kept",
        body: [
          "We publish design promises: no energy timers, no gacha or loot boxes, no card packs, and nothing sold that trivializes a run. We intend to keep them. They are product commitments, not additional legal warranties.",
        ],
      },
      {
        heading: "What you may not do",
        body: [
          [
            "Reverse-engineer, decompile or modify the app except where the law expressly allows it.",
            "Resell, rent or redistribute the app or its art, music or other assets.",
            "Manipulate leaderboards or achievements, or use the app in any unlawful way.",
          ],
        ],
      },
      {
        heading: "Disclaimer & liability",
        body: [
          "Ember Deck is provided \"as is\", without warranties of any kind, to the fullest extent the law allows. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid for it in the twelve months before the claim.",
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
          "We may update these terms and will note material changes in the app's release notes. If you keep using the app after a change, you accept the new terms. Questions: lei@appfactory.sg.",
        ],
      },
    ],
  },
};

const zhCn: AppLocalized = {
  name: "余烬牌组",
  storeName: "余烬牌组 — 卡牌肉鸽",
  tagline: "五分钟一局。死去，然后变得更强。",
  subtitle: "五分钟一局的地牢闯关。死去，然后变得更强。",
  oneLiner:
    "手绘暗黑奇幻卡牌构筑，一局刚好一段通勤。每打出一张牌，热度就往上窜一格——排好出牌顺序，点燃炽燃，穿过三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "即将登陆 iPhone 与 Android。",
    both: "现已登陆 iPhone 与 Android。",
    iosOnly: "现已登陆 iPhone，Android 版即将推出。",
    androidOnly: "现已登陆 Android，iPhone 版即将推出。",
  }),
  metaTitle: "余烬牌组 — 五分钟一局的暗黑奇幻卡牌肉鸽",
  metaDescription:
    "《余烬牌组》是一款手机卡牌肉鸽：每张牌都在累积热度，炽燃牌在临界点爆发。三位英雄、三幕冒险、120 多张卡牌。没有体力计时，没有抽卡付费，完全离线可玩。",
  features: [
    {
      title: "三幕冒险，一座王座",
      body: "登上攀登之路，潜入沉没地窖，杀向余烬王座。每一幕都有自己的敌人、两位可能出现的首领，幕与幕之间还有营地可以歇脚。",
    },
    {
      title: "120 多张卡，全靠打出来",
      body: "三位英雄加中立卡池，共 120 多张卡牌。每一张都靠游玩解锁——没有卡包，也不能用货币买卡。",
    },
    {
      title: "没有体力计时",
      body: "游戏里唯一的「能量」，是你每回合要花掉的那三点。没有任何东西按时间回满——一周打一局，或一晚打十局，都随你。",
    },
    {
      title: "完全离线可玩",
      body: "无需账号，无需注册。每过一个节点自动存档，钻进隧道或飞机上断网，这一局也不会白打。",
    },
    {
      title: "良心付费，没有抽卡",
      body: "没有宝箱，也不卖任何随机奖励。可选的一次性内购能移除局间广告、提前解锁英雄——而每位英雄也都能靠游玩免费解锁。",
    },
    {
      title: "每次倒下都是进步",
      body: "每通过一个节点都会存下碎晶和精通经验。拿去圣所换永久强化，觉得不够刺激时，再挑战十五级晋升难度。",
    },
  ],
  screenshots: [
    { src: `${SHOT}/zh/shot-map.webp`, alt: "攀登之路：由普通战斗、精英、营火与宝藏组成的分支地图，通往首领" },
    { src: `${SHOT}/zh/shot-combat.webp`, alt: "战斗画面：泥沼巨蛇预示攻击 5 与中毒 3，下方是手牌" },
    { src: `${SHOT}/zh/shot-reward.webp`, alt: "卡牌奖励：战斗胜利后从三张卡中选一张收入卡组" },
    { src: `${SHOT}/zh/shot-sanctum.webp`, alt: "圣所：用碎晶换取永久强化的成长路线" },
    { src: `${SHOT}/zh/shot-title.webp`, alt: "余烬牌组标题画面，带开始、每日挑战、设置与帮助按钮" },
  ],
  faqs: [
    {
      q: "我的进度保存在哪里？",
      a: "只保存在你的设备上。《余烬牌组》没有账号，也没有云端存档。每过一个地图节点、或在战斗中途切出游戏时都会自动存档，随时关掉都能从原处继续。删除应用会同时删除进度。",
    },
    {
      q: "换了新手机，怎么恢复购买？",
      a: "登录购买时使用的同一个 Apple ID 或 Google 账号，打开「设置 → 恢复购买」即可。移除广告、英雄解锁和创始者礼包会立即恢复。局内进度和碎晶保存在本机，不会随之迁移。",
    },
    {
      q: "广告会在什么时候出现？",
      a: "只在局与局、幕与幕之间出现，绝不会在战斗中打断你，前两局也完全没有。另有几处可选的看广告奖励：复活、重抽卡牌奖励、碎晶翻倍——全部可以跳过，通关和解锁都不需要它们。",
    },
    {
      q: "「移除广告」包含什么？",
      a: "一次性购买，永久移除局间广告。可选的看广告奖励会保留，因为只有你主动点按时才会播放。创始者礼包也包含移除广告。",
    },
    {
      q: "付款成功了，但内容没有解锁？",
      a: "请先试试「设置 → 恢复购买」。如果仍未出现，请发邮件告诉我们设备型号和购买日期。退款由 Apple 或 Google 按其商店政策处理。",
    },
    {
      q: "怎样更改广告和追踪设置？",
      a: "在 iPhone 上，可以在系统弹窗中允许或拒绝追踪，之后也可以在「设置 → 隐私与安全性 → 跟踪」中更改。需要征得同意的地区，可随时在游戏的「设置 → 管理隐私授权」中重新打开授权表单。无论怎么选，游戏体验完全一样。",
    },
    {
      q: "必须登录 Game Center 或 Google Play 游戏吗？",
      a: "不必。登录只是多了排行榜和成就，其余内容——包括每日挑战——不登录也都能玩。",
    },
    {
      q: "怎么联系你们？",
      a: "发邮件到 lei@appfactory.sg。每一封都有真人阅读，通常两天内回复。",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "简要说明",
        body: [
          "《余烬牌组》没有账号、无需注册，也没有自己的服务器。你的每一局进度、卡牌解锁、碎晶和设置都只保存在你的设备上。应用使用了少量 Google 与平台服务来做数据分析、崩溃报告、远程调参、广告和内购；这些服务处理的数据不会与你的姓名、邮箱或任何身份信息关联。",
        ],
      },
      {
        heading: "收集哪些数据，由谁收集",
        body: [
          [
            "游戏数据分析（Google Firebase Analytics）：匿名事件，例如开始或结束一局、到达第几幕、新手引导步骤、选择的卡牌、观看的广告和完成的购买，以及设备型号、系统版本、语言、国家/地区和应用实例标识符。我们用这些数据平衡游戏难度，找出玩家卡关的地方。",
            "崩溃与性能数据（Firebase Crashlytics 与 Firebase 性能监控）：崩溃时的堆栈信息与设备状态，以及加载时间等性能数据，用于修复问题、保持游戏流畅。",
            "远程配置（Firebase Remote Config 与 A/B 测试）：启动时，应用会凭 Firebase 安装标识符获取数值平衡、广告频率上限和商店优惠等配置。你可能被分入某个测试组、看到不同的数值；这绝不会改变正在进行中的那一局的规则。",
            "广告（Google AdMob）：展示广告时，Google 的 SDK 可能使用你设备的广告标识符（iOS 上为 IDFA，Android 上为广告 ID）、IP 地址以及广告互动数据，用于投放、衡量广告效果和控制展示频率。在 iPhone 上，我们会先通过「App 跟踪透明度」征求你的许可；如果你拒绝，广告标识符不会被共享。在欧洲经济区、英国和瑞士，任何广告加载前都会先显示 Google 的授权表单（UMP）。",
          ],
          "以上内容与本应用在 App Store 上的隐私标签一致：设备 ID、广告数据、产品交互、崩溃数据、性能数据及其他诊断数据，均标注为「不与你关联」。其中只有设备 ID 和广告数据可能被用于追踪，而且仅在你许可的前提下。",
        ],
      },
      {
        heading: "内购",
        body: [
          "移除广告、英雄解锁、创始者礼包和外观礼包均完全由 Apple App Store 或 Google Play 处理。我们看不到你的姓名、邮箱或付款信息；应用只会收到购买确认以便解锁内容，并在数据分析中记录一条购买事件（商品与价格）。",
        ],
      },
      {
        heading: "Game Center 与 Google Play 游戏",
        body: [
          "如果你选择登录，Apple Game Center 或 Google Play 游戏会收到你的分数和成就，用于显示排行榜。你的玩家资料由 Apple 或 Google 依据其各自的隐私政策处理，我们不会获得你的邮箱或通讯录。登录完全可选。",
        ],
      },
      {
        heading: "通知",
        body: [
          "《余烬牌组》只会在你玩过一段时间之后才请求通知权限，且每天最多提醒一次（例如新的每日挑战已开放）。这些都是在你设备上排定的本地通知，不涉及推送令牌或服务器。你可以随时在系统设置中关闭。",
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "不收集账号、姓名、邮箱、电话号码、通讯录、照片、精确位置、消息或付款信息。我们不出售个人数据，也不会为你建立用户画像。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 弹窗中拒绝追踪，或之后在「设置 → 隐私与安全性 → 跟踪」中更改——两种选择下游戏体验完全相同。",
            "随时在游戏的「设置 → 管理隐私授权」中更改广告授权选择。",
            "在 iOS 或 Android 系统设置中重置或限制广告标识符。",
            "购买「移除广告」，永久去掉局间广告。",
            "删除应用即可清除所有保存在本机的进度。",
          ],
        ],
      },
      {
        heading: "数据去向与保存期限",
        body: [
          "Google 服务收集的数据由 Google LLC 在美国及其他国家/地区处理，并按 Google 为 Firebase 和 AdMob 设定的保留期限保存。Google 的相关政策见 policies.google.com/privacy 与 firebase.google.com/support/privacy。由于这些数据都不与你的身份关联，我们通常无法定位某一个人的记录，但欢迎来信，我们会尽力协助。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "《余烬牌组》并非面向 13 岁以下儿童设计，也不会在知情的情况下收集他们的个人信息。",
        ],
      },
      {
        heading: "联系方式",
        body: ["对本政策有疑问，请发邮件至 lei@appfactory.sg。"],
      },
      {
        heading: "政策变更",
        body: ["政策变更时我们会更新本页面，重大变更会在应用的版本说明中注明。"],
      },
    ],
  },
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "许可",
        body: [
          "我们授予你个人的、非独占、不可转让的许可，允许你在自己拥有或控制的设备上安装并游玩《余烬牌组》，仅限个人非商业用途，并受你获取本应用时所适用的 App Store 或 Google Play 条款约束。",
        ],
      },
      {
        heading: "内购与游戏内物品",
        body: [
          "移除广告、英雄解锁、创始者礼包和外观礼包均为一次性购买，由 Apple App Store 或 Google Play 依其付款条款处理。换设备后可通过「设置 → 恢复购买」恢复。碎晶、金币等游戏内货币只能通过游玩获得，不具有现金价值，不可兑换或转让。退款由商店处理，而非由我们处理。",
        ],
      },
      {
        heading: "诚实经营的承诺",
        body: [
          "我们公开了设计承诺：没有体力计时、没有抽卡或宝箱、没有卡包，也不出售任何让一局变得轻而易举的东西。我们会努力信守这些承诺；它们是产品承诺，而非额外的法律担保。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "除法律明确允许外，对本应用进行逆向工程、反编译或修改。",
            "转售、出租或再分发本应用及其美术、音乐等素材。",
            "操纵排行榜或成就，或以任何违法方式使用本应用。",
          ],
        ],
      },
      {
        heading: "免责声明与责任限制",
        body: [
          "在法律允许的最大范围内，《余烬牌组》按「现状」提供，不附带任何形式的担保。在同等范围内，我们就本应用相关的任何索赔所承担的全部责任，以你在索赔前十二个月内为本应用支付的金额为限。",
        ],
      },
      {
        heading: "适用法律",
        body: [
          "本条款受新加坡法律管辖。本条款中的任何内容均不限制你在居住国依法享有、不可放弃的消费者权利。",
        ],
      },
      {
        heading: "变更与联系",
        body: [
          "我们可能会更新本条款，重大变更会在应用的版本说明中注明。变更后继续使用本应用，即表示你接受新条款。如有疑问：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "餘燼牌組",
  storeName: "餘燼牌組 — Roguelite 卡牌冒險",
  tagline: "五分鐘一局。倒下，然後變得更強。",
  subtitle: "五分鐘一局的地城冒險。倒下，然後變得更強。",
  oneLiner:
    "手繪暗黑奇幻牌組構築，一局剛好一段通勤。每打出一張牌，熱度就往上竄一格——排好出牌順序，點燃熾燃，穿越三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "即將登陸 iPhone 與 Android。",
    both: "現已登陸 iPhone 與 Android。",
    iosOnly: "現已登陸 iPhone，Android 版即將推出。",
    androidOnly: "現已登陸 Android，iPhone 版即將推出。",
  }),
  metaTitle: "餘燼牌組 — 五分鐘一局的暗黑奇幻 Roguelite 卡牌遊戲",
  metaDescription:
    "《餘燼牌組》是一款手機 Roguelite 牌組構築遊戲：每張牌都在累積熱度，熾燃牌在臨界點爆發。三位英雄、三幕冒險、120 多張卡牌。沒有體力計時，沒有轉蛋，完全離線可玩。",
  features: [
    {
      title: "三幕冒險，一座王座",
      body: "登上攀登之路，潛入沉沒地窖，殺向餘燼王座。每一幕都有自己的敵人、兩位可能出現的首領，幕與幕之間還有營地可以歇腳。",
    },
    {
      title: "120 多張卡，全靠玩出來",
      body: "三位英雄加中立卡池，共 120 多張卡牌。每一張都靠遊玩解鎖——沒有卡包，也不能用貨幣買卡。",
    },
    {
      title: "沒有體力計時",
      body: "遊戲裡唯一的「能量」，是你每回合要花掉的那三點。沒有任何東西按時間回滿——一週玩一局，或一晚玩十局，都隨你。",
    },
    {
      title: "完全離線可玩",
      body: "不用帳號，不用註冊。每過一個節點自動存檔，鑽進隧道或在飛機上斷網，這一局也不會白打。",
    },
    {
      title: "良心收費，沒有轉蛋",
      body: "沒有寶箱，也不賣任何隨機獎勵。可選的一次性內購能移除局間廣告、提前解鎖英雄——而每位英雄也都能靠遊玩免費解鎖。",
    },
    {
      title: "每次倒下都是進步",
      body: "每通過一個節點都會存下碎晶與精通經驗。拿去聖所換永久強化，覺得不夠刺激時，再挑戰十五級晉升難度。",
    },
  ],
  // The game ships English + Simplified Chinese; zh-TW visitors see the
  // Simplified Chinese captures.
  screenshots: [
    { src: `${SHOT}/zh/shot-map.webp`, alt: "攀登之路：由一般戰鬥、菁英、營火與寶藏組成的分支地圖，通往首領" },
    { src: `${SHOT}/zh/shot-combat.webp`, alt: "戰鬥畫面：泥沼巨蛇預告攻擊 5 與中毒 3，下方是手牌" },
    { src: `${SHOT}/zh/shot-reward.webp`, alt: "卡牌獎勵：戰鬥勝利後從三張卡中選一張加入牌組" },
    { src: `${SHOT}/zh/shot-sanctum.webp`, alt: "聖所：用碎晶換取永久強化的成長路線" },
    { src: `${SHOT}/zh/shot-title.webp`, alt: "餘燼牌組標題畫面，帶開始、每日挑戰、設定與說明按鈕" },
  ],
  faqs: [
    {
      q: "我的進度存在哪裡？",
      a: "只存在你的裝置上。《餘燼牌組》沒有帳號，也沒有雲端存檔。每過一個地圖節點、或在戰鬥中途切出遊戲時都會自動存檔，隨時關掉都能從原處繼續。刪除 App 會一併刪除進度。",
    },
    {
      q: "換了新手機，要怎麼恢復購買？",
      a: "登入購買時使用的同一個 Apple ID 或 Google 帳號，打開「設定 → 恢復購買」即可。移除廣告、英雄解鎖和創始者禮包會立即恢復。局內進度和碎晶存在原本的裝置上，不會跟著轉移。",
    },
    {
      q: "廣告會在什麼時候出現？",
      a: "只在局與局、幕與幕之間出現，絕不會在戰鬥中打斷你，前兩局也完全沒有。另有幾處可選的看廣告獎勵：復活、重抽卡牌獎勵、碎晶加倍——全部可以略過，破關和解鎖都不需要它們。",
    },
    {
      q: "「移除廣告」包含什麼？",
      a: "一次性購買，永久移除局間廣告。可選的看廣告獎勵會保留，因為只有你主動點按時才會播放。創始者禮包也包含移除廣告。",
    },
    {
      q: "付款成功了，但內容沒有解鎖？",
      a: "請先試試「設定 → 恢復購買」。如果還是沒有出現，請寄信告訴我們裝置型號和購買日期。退款由 Apple 或 Google 依其商店政策處理。",
    },
    {
      q: "要怎麼更改廣告和追蹤設定？",
      a: "在 iPhone 上，可以在系統提示中允許或拒絕追蹤，之後也能在「設定 → 隱私權與安全性 → 追蹤」中更改。需要取得同意的地區，可隨時在遊戲的「設定 → 管理隱私授權」中重新打開授權表單。無論怎麼選，遊戲體驗都完全一樣。",
    },
    {
      q: "一定要登入 Game Center 或 Google Play 遊戲嗎？",
      a: "不用。登入只是多了排行榜和成就，其他內容——包括每日挑戰——不登入也都能玩。",
    },
    {
      q: "要怎麼聯絡你們？",
      a: "寄信到 lei@appfactory.sg。每一封都有真人閱讀，通常兩天內回覆。",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "簡要說明",
        body: [
          "《餘燼牌組》沒有帳號、不用註冊，也沒有自己的伺服器。你的每一局進度、卡牌解鎖、碎晶和設定都只存在你的裝置上。App 使用了少量 Google 與平台服務來做數據分析、當機報告、遠端調整、廣告和內購；這些服務處理的資料不會與你的姓名、電子郵件或任何身分資訊連結。",
        ],
      },
      {
        heading: "收集哪些資料，由誰收集",
        body: [
          [
            "遊戲數據分析（Google Firebase Analytics）：匿名事件，例如開始或結束一局、抵達第幾幕、新手教學步驟、選擇的卡牌、觀看的廣告和完成的購買，以及裝置型號、系統版本、語言、國家/地區和 App 執行個體識別碼。我們用這些資料平衡遊戲難度，找出玩家卡關的地方。",
            "當機與效能資料（Firebase Crashlytics 與 Firebase 效能監控）：當機時的堆疊資訊與裝置狀態，以及載入時間等效能資料，用於修正問題、維持遊戲流暢。",
            "遠端設定（Firebase Remote Config 與 A/B 測試）：啟動時，App 會憑 Firebase 安裝識別碼取得數值平衡、廣告頻率上限和商店優惠等設定。你可能被分到某個測試組、看到不同的數值；這絕不會改變正在進行中那一局的規則。",
            "廣告（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用你裝置的廣告識別碼（iOS 為 IDFA，Android 為廣告 ID）、IP 位址以及廣告互動資料，用於投放、衡量成效和控制顯示頻率。在 iPhone 上，我們會先透過「App 追蹤透明度」徵求你的許可；如果你拒絕，廣告識別碼不會被分享。在歐洲經濟區、英國和瑞士，任何廣告載入前都會先顯示 Google 的同意表單（UMP）。",
          ],
          "以上內容與本 App 在 App Store 上的隱私權標籤一致：裝置 ID、廣告資料、產品互動、當機資料、效能資料及其他診斷資料，皆標示為「不會與你連結」。其中只有裝置 ID 和廣告資料可能被用於追蹤，而且僅在你許可的前提下。",
        ],
      },
      {
        heading: "內購",
        body: [
          "移除廣告、英雄解鎖、創始者禮包和外觀禮包都完全由 Apple App Store 或 Google Play 處理。我們看不到你的姓名、電子郵件或付款資訊；App 只會收到購買確認以便解鎖內容，並在數據分析中記錄一筆購買事件（商品與價格）。",
        ],
      },
      {
        heading: "Game Center 與 Google Play 遊戲",
        body: [
          "如果你選擇登入，Apple Game Center 或 Google Play 遊戲會收到你的分數和成就，用來顯示排行榜。你的玩家資料由 Apple 或 Google 依其各自的隱私權政策處理，我們不會取得你的電子郵件或聯絡人。登入完全可選。",
        ],
      },
      {
        heading: "通知",
        body: [
          "《餘燼牌組》只會在你玩過一段時間後才請求通知權限，而且每天最多提醒一次（例如新的每日挑戰已開放）。這些都是在你裝置上排定的本機通知，不涉及推播權杖或伺服器。你可以隨時在系統設定中關閉。",
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "不收集帳號、姓名、電子郵件、電話號碼、聯絡人、照片、精確位置、訊息或付款資訊。我們不販售個人資料，也不會為你建立使用者輪廓。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 提示中拒絕追蹤，或之後在「設定 → 隱私權與安全性 → 追蹤」中更改——兩種選擇下遊戲體驗完全相同。",
            "隨時在遊戲的「設定 → 管理隱私授權」中更改廣告同意選項。",
            "在 iOS 或 Android 系統設定中重設或限制廣告識別碼。",
            "購買「移除廣告」，永久拿掉局間廣告。",
            "刪除 App 即可清除所有存在本機的進度。",
          ],
        ],
      },
      {
        heading: "資料去向與保存期限",
        body: [
          "Google 服務收集的資料由 Google LLC 在美國及其他國家/地區處理，並依 Google 為 Firebase 和 AdMob 設定的保存期限保存。Google 的相關政策見 policies.google.com/privacy 與 firebase.google.com/support/privacy。由於這些資料都不與你的身分連結，我們通常無法找出特定個人的紀錄，但歡迎來信，我們會盡力協助。",
        ],
      },
      {
        heading: "兒童",
        body: [
          "《餘燼牌組》並非以 13 歲以下兒童為對象，也不會在知情的情況下收集他們的個人資料。",
        ],
      },
      {
        heading: "聯絡方式",
        body: ["對本政策有疑問，請寄信至 lei@appfactory.sg。"],
      },
      {
        heading: "政策變更",
        body: ["政策變更時我們會更新本頁面，重大變更會在 App 的版本說明中註明。"],
      },
    ],
  },
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "授權",
        body: [
          "我們授予你個人的、非專屬、不可轉讓的授權，允許你在自己擁有或控制的裝置上安裝並遊玩《餘燼牌組》，僅限個人非商業用途，並受你取得本 App 時所適用的 App Store 或 Google Play 條款約束。",
        ],
      },
      {
        heading: "內購與遊戲內物品",
        body: [
          "移除廣告、英雄解鎖、創始者禮包和外觀禮包均為一次性購買，由 Apple App Store 或 Google Play 依其付款條款處理。換裝置後可透過「設定 → 恢復購買」恢復。碎晶、金幣等遊戲內貨幣只能透過遊玩取得，不具現金價值，不可兌換或轉讓。退款由商店處理，而非由我們處理。",
        ],
      },
      {
        heading: "誠實經營的承諾",
        body: [
          "我們公開了設計承諾：沒有體力計時、沒有轉蛋或寶箱、沒有卡包，也不販售任何讓一局變得輕而易舉的東西。我們會盡力信守這些承諾；它們是產品承諾，而非額外的法律擔保。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "除法律明確允許外，對本 App 進行逆向工程、反編譯或修改。",
            "轉售、出租或再散布本 App 及其美術、音樂等素材。",
            "操縱排行榜或成就，或以任何違法方式使用本 App。",
          ],
        ],
      },
      {
        heading: "免責聲明與責任限制",
        body: [
          "在法律允許的最大範圍內，《餘燼牌組》依「現狀」提供，不附帶任何形式的擔保。在同等範圍內，我們就本 App 相關的任何求償所負的全部責任，以你在求償前十二個月內為本 App 支付的金額為限。",
        ],
      },
      {
        heading: "準據法",
        body: [
          "本條款以新加坡法律為準據法。本條款中的任何內容均不限制你在居住國依法享有、不可拋棄的消費者權利。",
        ],
      },
      {
        heading: "變更與聯絡",
        body: [
          "我們可能會更新本條款，重大變更會在 App 的版本說明中註明。變更後繼續使用本 App，即表示你接受新條款。如有疑問：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

export const emberDeck: AppContent = {
  slug: "ember-deck",
  buildNumber: 9,
  version: "2.0.0",
  status: anyReleased ? "live" : "testflight",
  appStoreUrl: RELEASED.ios ? APP_STORE_URL : undefined,
  playStoreUrl: RELEASED.android ? PLAY_STORE_URL : undefined,
  platforms: ["iOS", "Android"],
  icon: "/apps/ember-deck/icon.png",
  ogImage: "/apps/ember-deck/og.jpg",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).

export interface EmberDeckLanding {
  kicker: string;
  heroLines: [string, string, string];
  heroSub: string;
  priceNote: string;
  heatEyebrow: string;
  heatTitle: string;
  heatIntro: string;
  heatBeats: { title: string; body: string; tag: string }[];
  heroesEyebrow: string;
  heroesTitle: string;
  heroesIntro: string;
  heroes: { name: string; line: string; style: string; unlock: string }[];
  heroesNote: string;
  actsEyebrow: string;
  actsTitle: string;
  acts: { label: string; name: string; body: string }[];
  finalBoss: string;
  featuresEyebrow: string;
  featuresTitle: string;
  screensEyebrow: string;
  screensTitle: string;
  screensNote: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  supportLink: string;
  pressEyebrow: string;
  pressTitle: string;
  pressBody: string;
  pressFacts: { label: string; value: string }[];
  pressItems: { file: string; label: string; meta: string }[];
  pressZip: string;
  creditsEyebrow: string;
  creditsTitle: string;
  creditsMusicLabel: string;
  creditsMusicBy: string;
  creditsMusicNote: string;
  creditsSfxLabel: string;
  creditsSfxBody: string;
  /** MOMIZizm MUSiC's terms ask for the composer's name plus this link. */
  creditsMusicUrl: string;
  closingTitle: string;
  closingBody: string;
}

const PRESS = "/apps/ember-deck/press";

const landingEn: EmberDeckLanding = {
  kicker: "Roguelite deckbuilder · iPhone & Android",
  heroLines: ["Every card", "feeds the", "fire."],
  heroSub:
    "Five-minute dungeon runs in a painted dark-fantasy world. Each card you play stokes the Heat. Sequence your hand, light the Blaze, and when you fall, the next run starts stronger.",
  priceNote: "Free to play. No energy timers, no gacha, fully offline.",
  heatEyebrow: "the heat hook",
  heatTitle: "Order is the skill. Heat is the reward.",
  heatIntro:
    "One rule sits under every turn in Ember Deck, and you can read it in three seconds.",
  heatBeats: [
    {
      tag: "Heat 1 · 2 · 3",
      title: "Every card heats the turn",
      body: "Each card you play adds one Heat. It climbs all turn and resets to zero at the start of the next.",
    },
    {
      tag: "Blaze 3",
      title: "Blaze cards pay it off",
      body: "A Blaze card fires a bonus effect once your Heat reaches its number: extra damage, block, poison or draw.",
    },
    {
      tag: "Inferno",
      title: "Sequence for the big turn",
      body: "Lead with cheap cards, bank the Heat, then land the finisher. When a turn goes right, the numbers get very large.",
    },
  ],
  heroesEyebrow: "three heroes",
  heroesTitle: "Three ways to burn",
  heroesIntro:
    "Every hero follows the same Heat rules and spends them differently. Emberknight is free. The other two unlock by playing, or early with a one-time purchase.",
  heroes: [
    {
      name: "Emberknight",
      line: "Every blow tempers the blade. Heat becomes steel.",
      style: "Block, Strength and steady Blaze 2–3 finishers.",
      unlock: "Available from the first run",
    },
    {
      name: "Venomblade",
      line: "A hundred small cuts. Each one burns.",
      style: "Zero-cost chains, needles and poison that scales with Heat. The fastest Heat in the game.",
      unlock: "Unlock: defeat any Act 1 boss",
    },
    {
      name: "Ashen Seer",
      line: "She sees the fire before it's lit.",
      style: "Starts every turn at Heat 1, controls the fight with Weak and Vulnerable, then takes one enormous Blaze turn.",
      unlock: "Unlock: defeat any Act 2 boss",
    },
  ],
  heroesNote: "Hero portraits are still being painted. These silhouettes stand in until then.",
  actsEyebrow: "three acts",
  actsTitle: "A run is a climb",
  acts: [
    {
      label: "Act I",
      name: "The Ascent",
      body: "Rat-infested ruins and rust-lit halls. Learn the rules against the Ashen Warden or the Rotmother.",
    },
    {
      label: "Act II",
      name: "The Drowned Vaults",
      body: "Flooded crypts under a teal glow. The Tide Matron and the Sunken Bell drown careless decks.",
    },
    {
      label: "Act III",
      name: "The Cinder Throne",
      body: "Magma halls where the enemies feed you fire. Manage your Heat or burn with it.",
    },
  ],
  finalBoss: "At the top of every run: the Hollow King on the Cinder Throne.",
  featuresEyebrow: "what's inside",
  featuresTitle: "A full game, sized for your pocket",
  screensEyebrow: "screens",
  screensTitle: "From the table",
  screensNote:
    "Pre-release captures from the current test build. They will be replaced with the new v2 screens before launch.",
  faqEyebrow: "questions",
  faqTitle: "Fair questions, straight answers",
  faqs: [
    {
      q: "Is Ember Deck free?",
      a: "Yes. The whole game, all three acts, the Daily Run and every hero can be played for free. Optional one-time purchases remove the between-run ads or unlock heroes early. Nothing sold makes a run easier to win.",
    },
    {
      q: "Is there gacha, or card packs?",
      a: "No. There are no loot boxes, no packs and no random rewards for money. Every card is earned by playing.",
    },
    {
      q: "How long is a run?",
      a: "About six to eight minutes an act, and three acts plus the final boss for a full run. The game autosaves after every node, so you can stop at any point.",
    },
    {
      q: "Do I need an internet connection or an account?",
      a: "Neither. Ember Deck plays fully offline and has no account. Leaderboards and achievements through Game Center or Google Play Games are optional.",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "When is it out?",
            a: "Soon, on iPhone first and then Android. This page will link straight to the stores on launch day.",
          },
        ]),
    {
      q: "Which languages are supported?",
      a: "English and Simplified Chinese at launch, with more languages planned for the first update.",
    },
  ],
  supportLink: "More help on the support page",
  pressEyebrow: "press kit",
  pressTitle: "For press and creators",
  pressBody:
    "You're welcome to use these assets in coverage, videos and streams. For codes, questions or higher-resolution art, email lei@appfactory.sg.",
  pressFacts: [
    { label: "Developer", value: "appfactory (Lei Cao), Singapore" },
    { label: "Genre", value: "Roguelite deckbuilder" },
    { label: "Platforms", value: "iPhone, Android" },
    { label: "Price", value: "Free, optional one-time purchases" },
    { label: "Languages", value: "English, 简体中文" },
    { label: "Release", value: anyReleased ? "Out now" : "Coming soon" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "App icon", meta: "PNG · 1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "Logo", meta: "PNG · transparent" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "Key art", meta: "JPG · 1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "The Hollow King", meta: "PNG · transparent" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "Social card", meta: "JPG · 1200 × 630" },
  ],
  pressZip: "Download everything (.zip)",
  creditsEyebrow: "credits",
  creditsTitle: "Music & sound credits",
  creditsMusicLabel: "Music",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "Used with credit under the composer's licence.",
  creditsSfxLabel: "Sound effects",
  creditsSfxBody: "Sound effects: original, made for Ember Deck.",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "One more run. Always one more run." : "One more run is coming.",
  closingBody: anyReleased
    ? "Free to play, fully offline, no energy timers. Pick a hero and start climbing."
    : "Ember Deck is in final testing. Check back soon, or bookmark this page. It will link straight to the stores on launch day.",
};

const landingZhCn: EmberDeckLanding = {
  kicker: "卡牌肉鸽 · iPhone 与 Android",
  heroLines: ["每一张牌，", "都在", "为火添柴。"],
  heroSub:
    "手绘暗黑奇幻世界里，五分钟一局的地牢闯关。每打出一张牌，热度就升高一格。排好出牌顺序，点燃炽燃；就算倒下，下一局也会更强。",
  priceNote: "免费游玩。没有体力计时，没有抽卡，完全离线。",
  heatEyebrow: "核心玩法：热度",
  heatTitle: "出牌顺序是技术，热度是奖赏。",
  heatIntro: "《余烬牌组》的每一个回合都建立在同一条规则上，三秒就能看懂。",
  heatBeats: [
    {
      tag: "热度 1 · 2 · 3",
      title: "每张牌都在加热",
      body: "每打出一张牌，热度 +1。整个回合持续累积，下回合开始时归零。",
    },
    {
      tag: "炽燃 3",
      title: "炽燃牌负责兑现",
      body: "热度达到炽燃牌上的数值时，就会触发额外效果：更多伤害、格挡、中毒或抽牌。",
    },
    {
      tag: "炼狱",
      title: "排好顺序，打出大回合",
      body: "先出便宜的牌攒热度，再用终结技收尾。一个回合打顺了，数字会大得惊人。",
    },
  ],
  heroesEyebrow: "三位英雄",
  heroesTitle: "三种燃烧的方式",
  heroesIntro:
    "三位英雄遵循同一套热度规则，用法却各不相同。余烬骑士免费可用，另外两位靠游玩解锁，也可以用一次性内购提前解锁。",
  heroes: [
    {
      name: "余烬骑士",
      line: "每一击都在淬炼刀锋，热度化为钢铁。",
      style: "格挡、力量，以及稳定的炽燃 2–3 终结技。",
      unlock: "第一局即可使用",
    },
    {
      name: "毒刃",
      line: "千百道细小的伤口，每一道都在灼烧。",
      style: "零费连击、飞针，以及随热度增长的中毒。全游戏升温最快的英雄。",
      unlock: "解锁条件：击败任意第一幕首领",
    },
    {
      name: "灰烬先知",
      line: "火焰未起，她已先见。",
      style: "每回合从热度 1 开始，用虚弱和易伤控场，然后打出一个惊天动地的炽燃回合。",
      unlock: "解锁条件：击败任意第二幕首领",
    },
  ],
  heroesNote: "英雄立绘仍在绘制中，暂以剪影代替。",
  actsEyebrow: "三幕冒险",
  actsTitle: "每一局都是一次攀登",
  acts: [
    {
      label: "第一幕",
      name: "攀登之路",
      body: "鼠群出没的废墟与锈光笼罩的大厅。在灰烬守望者或腐化之母面前学会规则。",
    },
    {
      label: "第二幕",
      name: "沉没地窖",
      body: "青光幽幽的水下墓穴。潮汐主母与沉钟会把粗心的卡组拖进水底。",
    },
    {
      label: "第三幕",
      name: "余烬王座",
      body: "熔岩大厅里，敌人会往你手里塞火。控制好热度，否则引火烧身。",
    },
  ],
  finalBoss: "每一局的尽头：端坐余烬王座之上的空洞之王。",
  featuresEyebrow: "游戏内容",
  featuresTitle: "完整的游戏，装进口袋",
  screensEyebrow: "截图",
  screensTitle: "牌桌实况",
  screensNote: "以下为当前测试版本的预发布截图，正式上线前将替换为 v2 新画面。",
  faqEyebrow: "常见问题",
  faqTitle: "坦率的问题，直接的回答",
  faqs: [
    {
      q: "《余烬牌组》免费吗？",
      a: "免费。完整游戏、全部三幕、每日挑战和每一位英雄都能免费玩。可选的一次性内购可以移除局间广告或提前解锁英雄——出售的任何东西都不会让一局变得更容易赢。",
    },
    {
      q: "有抽卡或卡包吗？",
      a: "没有。没有宝箱、没有卡包，也没有花钱买的随机奖励。每一张卡都是打出来的。",
    },
    {
      q: "一局要玩多久？",
      a: "每一幕大约六到八分钟，一整局是三幕加最终首领。每过一个节点都会自动存档，随时可以停下。",
    },
    {
      q: "需要联网或注册账号吗？",
      a: "都不需要。《余烬牌组》完全离线可玩，也没有账号系统。Game Center 或 Google Play 游戏的排行榜和成就都是可选的。",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "什么时候上线？",
            a: "很快。先登陆 iPhone，随后是 Android。上线当天，本页面会直接链接到应用商店。",
          },
        ]),
    {
      q: "支持哪些语言？",
      a: "上线时支持英文和简体中文，首次更新计划加入更多语言。",
    },
  ],
  supportLink: "更多帮助请见支持页面",
  pressEyebrow: "媒体资料",
  pressTitle: "给媒体与创作者",
  pressBody:
    "欢迎在报道、视频和直播中使用以下素材。如需兑换码、有任何问题或需要更高分辨率的美术，请发邮件至 lei@appfactory.sg。",
  pressFacts: [
    { label: "开发者", value: "appfactory（Lei Cao），新加坡" },
    { label: "类型", value: "卡牌构筑肉鸽" },
    { label: "平台", value: "iPhone、Android" },
    { label: "价格", value: "免费，含可选一次性内购" },
    { label: "语言", value: "English、简体中文" },
    { label: "上线时间", value: anyReleased ? "已上线" : "即将推出" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "应用图标", meta: "PNG · 1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "标志", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "主视觉", meta: "JPG · 1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "空洞之王", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "社交分享图", meta: "JPG · 1200 × 630" },
  ],
  pressZip: "打包下载全部素材（.zip）",
  creditsEyebrow: "致谢",
  creditsTitle: "音乐与音效致谢",
  creditsMusicLabel: "音乐",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "依据作曲者的授权条款，注明出处使用。",
  creditsSfxLabel: "音效",
  creditsSfxBody: "音效：为《余烬牌组》原创制作。",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "还想再来一局。永远还想再来一局。" : "下一局，就快来了。",
  closingBody: anyReleased
    ? "免费游玩，完全离线，没有体力计时。选一位英雄，开始攀登吧。"
    : "《余烬牌组》正在进行最后的测试。欢迎收藏本页，上线当天这里会直接链接到应用商店。",
};

const landingZhTw: EmberDeckLanding = {
  kicker: "Roguelite 牌組構築 · iPhone 與 Android",
  heroLines: ["每一張牌，", "都在", "為火添柴。"],
  heroSub:
    "手繪暗黑奇幻世界裡，五分鐘一局的地城冒險。每打出一張牌，熱度就升高一格。排好出牌順序，點燃熾燃；就算倒下，下一局也會更強。",
  priceNote: "免費遊玩。沒有體力計時，沒有轉蛋，完全離線。",
  heatEyebrow: "核心玩法：熱度",
  heatTitle: "出牌順序是技術，熱度是獎賞。",
  heatIntro: "《餘燼牌組》的每一個回合都建立在同一條規則上，三秒就能看懂。",
  heatBeats: [
    {
      tag: "熱度 1 · 2 · 3",
      title: "每張牌都在加熱",
      body: "每打出一張牌，熱度 +1。整個回合持續累積，下回合開始時歸零。",
    },
    {
      tag: "熾燃 3",
      title: "熾燃牌負責兌現",
      body: "熱度達到熾燃牌上的數值時，就會觸發額外效果：更多傷害、格擋、中毒或抽牌。",
    },
    {
      tag: "煉獄",
      title: "排好順序，打出大回合",
      body: "先出便宜的牌累積熱度，再用終結技收尾。一個回合打順了，數字會大得驚人。",
    },
  ],
  heroesEyebrow: "三位英雄",
  heroesTitle: "三種燃燒的方式",
  heroesIntro:
    "三位英雄遵循同一套熱度規則，玩法卻各不相同。餘燼騎士免費可用，另外兩位靠遊玩解鎖，也可以用一次性內購提前解鎖。",
  heroes: [
    {
      name: "餘燼騎士",
      line: "每一擊都在淬鍊刀鋒，熱度化為鋼鐵。",
      style: "格擋、力量，以及穩定的熾燃 2–3 終結技。",
      unlock: "第一局即可使用",
    },
    {
      name: "毒刃",
      line: "千百道細小的傷口，每一道都在灼燒。",
      style: "零費連擊、飛針，以及隨熱度成長的中毒。全遊戲升溫最快的英雄。",
      unlock: "解鎖條件：擊敗任一第一幕首領",
    },
    {
      name: "灰燼先知",
      line: "火焰未起，她已先見。",
      style: "每回合從熱度 1 開始，用虛弱和易傷控場，然後打出一個驚天動地的熾燃回合。",
      unlock: "解鎖條件：擊敗任一第二幕首領",
    },
  ],
  heroesNote: "英雄立繪仍在繪製中，暫以剪影代替。",
  actsEyebrow: "三幕冒險",
  actsTitle: "每一局都是一次攀登",
  acts: [
    {
      label: "第一幕",
      name: "攀登之路",
      body: "鼠群出沒的廢墟與鏽光籠罩的大廳。在灰燼守望者或腐化之母面前學會規則。",
    },
    {
      label: "第二幕",
      name: "沉沒地窖",
      body: "青光幽幽的水下墓穴。潮汐主母與沉鐘會把粗心的牌組拖進水底。",
    },
    {
      label: "第三幕",
      name: "餘燼王座",
      body: "熔岩大廳裡，敵人會往你手裡塞火。控制好熱度，否則引火自焚。",
    },
  ],
  finalBoss: "每一局的盡頭：端坐餘燼王座之上的空洞之王。",
  featuresEyebrow: "遊戲內容",
  featuresTitle: "完整的遊戲，裝進口袋",
  screensEyebrow: "截圖",
  screensTitle: "牌桌實況",
  screensNote: "以下為目前測試版本的預覽截圖（簡體中文介面），正式上架前將替換為 v2 新畫面。",
  faqEyebrow: "常見問題",
  faqTitle: "坦率的問題，直接的回答",
  faqs: [
    {
      q: "《餘燼牌組》免費嗎？",
      a: "免費。完整遊戲、全部三幕、每日挑戰和每一位英雄都能免費玩。可選的一次性內購可以移除局間廣告或提前解鎖英雄——販售的任何東西都不會讓一局變得更容易贏。",
    },
    {
      q: "有轉蛋或卡包嗎？",
      a: "沒有。沒有寶箱、沒有卡包，也沒有花錢買的隨機獎勵。每一張卡都是玩出來的。",
    },
    {
      q: "一局要玩多久？",
      a: "每一幕大約六到八分鐘，一整局是三幕加最終首領。每過一個節點都會自動存檔，隨時可以停下。",
    },
    {
      q: "需要連網或註冊帳號嗎？",
      a: "都不需要。《餘燼牌組》完全離線可玩，也沒有帳號系統。Game Center 或 Google Play 遊戲的排行榜和成就都是可選的。",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "什麼時候上架？",
            a: "很快。先登陸 iPhone，接著是 Android。上架當天，本頁面會直接連結到應用程式商店。",
          },
        ]),
    {
      q: "支援哪些語言？",
      a: "上架時支援英文和簡體中文，首次更新預計加入更多語言。",
    },
  ],
  supportLink: "更多協助請見支援頁面",
  pressEyebrow: "媒體資料",
  pressTitle: "給媒體與創作者",
  pressBody:
    "歡迎在報導、影片和直播中使用以下素材。如需序號、有任何問題或需要更高解析度的美術，請寄信至 lei@appfactory.sg。",
  pressFacts: [
    { label: "開發者", value: "appfactory（Lei Cao），新加坡" },
    { label: "類型", value: "Roguelite 牌組構築" },
    { label: "平台", value: "iPhone、Android" },
    { label: "價格", value: "免費，含可選一次性內購" },
    { label: "語言", value: "English、简体中文" },
    { label: "上架時間", value: anyReleased ? "已上架" : "即將推出" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "App 圖示", meta: "PNG · 1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "標誌", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "主視覺", meta: "JPG · 1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "空洞之王", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "社群分享圖", meta: "JPG · 1200 × 630" },
  ],
  pressZip: "打包下載全部素材（.zip）",
  creditsEyebrow: "致謝",
  creditsTitle: "音樂與音效致謝",
  creditsMusicLabel: "音樂",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "依據作曲者的授權條款，註明出處使用。",
  creditsSfxLabel: "音效",
  creditsSfxBody: "音效：為《餘燼牌組》原創製作。",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "還想再來一局。永遠還想再來一局。" : "下一局，就快來了。",
  closingBody: anyReleased
    ? "免費遊玩，完全離線，沒有體力計時。選一位英雄，開始攀登吧。"
    : "《餘燼牌組》正在進行最後的測試。歡迎將本頁加入書籤，上架當天這裡會直接連結到應用程式商店。",
};

export const emberDeckLanding: Record<Locale, EmberDeckLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};

/** True once at least one store build is public — drives release-only copy. */
export const emberDeckReleased = anyReleased;
