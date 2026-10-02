// Ember Deck — content in all three locales, plus the copy for its bespoke
// landing page (src/components/ember-deck/landing.tsx). The subdomain gets
// the "lit hearth in a dark book" theme via [data-app="ember-deck"] in
// globals.css. Game facts come from the app repo: docs/v2/MASTER-PLAN.md,
// docs/v2/design-v2.md, fastlane metadata and app_privacy_details.json.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";
import type { HeatDemoCopy } from "@/components/ember-deck/heat-demo";
import type { HeroCopy, HeroLabels } from "@/components/ember-deck/hero-showcase";

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
  screenshots: [
    { src: `${SHOT}/v2/shots/en/combat-inferno.webp`, alt: "Combat at Heat 9: a 26-damage hit lands on the Cinder Ogre while the flame meter roars beside the hand" },
    { src: `${SHOT}/v2/shots/en/sanctum.webp`, alt: "Run summary after a fall: floors cleared, shards earned and a Mastery level-up" },
    { src: `${SHOT}/v2/shots/en/hero-select.webp`, alt: "Hero select: Emberknight, Venomblade and Ashen Seer" },
    { src: `${SHOT}/v2/shots/en/map-act2.webp`, alt: "Act II map: branching paths through the Drowned Vaults up to the Sunken Bell" },
    { src: `${SHOT}/v2/shots/en/shop.webp`, alt: "In-run shop: buy cards, relics and potions, or remove a card" },
    { src: `${SHOT}/v2/shots/en/hollow-king.webp`, alt: "Fighting the Hollow King on the Cinder Throne" },
    { src: `${SHOT}/v2/shots/en/reward-rare.webp`, alt: "Victory over the Ashen Warden: choose a boss relic and a rare card" },
    { src: `${SHOT}/v2/shots/en/hub.webp`, alt: "The hub between runs: Embark, Daily Run, Sanctum and quests" },
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
    "手绘暗黑奇幻卡牌构筑，一局刚好一段通勤。每打出一张牌，热度就往上窜一格——排好出牌顺序，点燃烈焰，穿过三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "即将登陆 iPhone 与 Android。",
    both: "现已登陆 iPhone 与 Android。",
    iosOnly: "现已登陆 iPhone，Android 版即将推出。",
    androidOnly: "现已登陆 Android，iPhone 版即将推出。",
  }),
  metaTitle: "余烬牌组 — 五分钟一局的暗黑奇幻卡牌肉鸽",
  metaDescription:
    "《余烬牌组》是一款手机卡牌肉鸽：每张牌都在累积热度，烈焰牌在临界点爆发。三位英雄、三幕冒险、120 多张卡牌。没有体力计时，没有抽卡付费，完全离线可玩。",
  features: [
    {
      title: "三幕冒险，一座王座",
      body: "登上攀登之路，潜入溺亡地窖，杀向余烬王座。每一幕都有自己的敌人、两位可能出现的首领，幕与幕之间还有营地可以歇脚。",
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
    { src: `${SHOT}/v2/shots/zh/combat-inferno.webp`, alt: "热度 9 的战斗：一击 26 点伤害落在炭烬巨魔身上，手牌旁的火焰计量表熊熊燃烧" },
    { src: `${SHOT}/v2/shots/zh/sanctum.webp`, alt: "倒下后的结算：通过的层数、获得的碎晶和精通升级" },
    { src: `${SHOT}/v2/shots/zh/hero-select.webp`, alt: "英雄选择：余烬骑士、毒刃客与灰烬先知" },
    { src: `${SHOT}/v2/shots/zh/map-act2.webp`, alt: "第二幕地图：穿过溺亡地窖、通往沉没之钟的分支路线" },
    { src: `${SHOT}/v2/shots/zh/shop.webp`, alt: "局内商店：购买卡牌、遗物和药水，或移除一张牌" },
    { src: `${SHOT}/v2/shots/zh/hollow-king.webp`, alt: "在余烬王座迎战空洞之王" },
    { src: `${SHOT}/v2/shots/zh/reward-rare.webp`, alt: "击败灰烬守望者：挑选首领遗物和一张稀有卡" },
    { src: `${SHOT}/v2/shots/zh/hub.webp`, alt: "局与局之间的营地：启程、每日挑战、圣所与任务" },
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
    "手繪暗黑奇幻牌組構築，一局剛好一段通勤。每打出一張牌，熱度就往上竄一格——排好出牌順序，點燃烈焰，穿越三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "即將登陸 iPhone 與 Android。",
    both: "現已登陸 iPhone 與 Android。",
    iosOnly: "現已登陸 iPhone，Android 版即將推出。",
    androidOnly: "現已登陸 Android，iPhone 版即將推出。",
  }),
  metaTitle: "餘燼牌組 — 五分鐘一局的暗黑奇幻 Roguelite 卡牌遊戲",
  metaDescription:
    "《餘燼牌組》是一款手機 Roguelite 牌組構築遊戲：每張牌都在累積熱度，烈焰牌在臨界點爆發。三位英雄、三幕冒險、120 多張卡牌。沒有體力計時，沒有轉蛋，完全離線可玩。",
  features: [
    {
      title: "三幕冒險，一座王座",
      body: "登上攀登之路，潛入溺亡地窖，殺向餘燼王座。每一幕都有自己的敵人、兩位可能出現的首領，幕與幕之間還有營地可以歇腳。",
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
    { src: `${SHOT}/v2/shots/zh/combat-inferno.webp`, alt: "熱度 9 的戰鬥：一擊 26 點傷害落在炭燼巨魔身上，手牌旁的火焰計量表熊熊燃燒" },
    { src: `${SHOT}/v2/shots/zh/sanctum.webp`, alt: "倒下後的結算：透過的層數、獲得的碎晶和精通升級" },
    { src: `${SHOT}/v2/shots/zh/hero-select.webp`, alt: "英雄選擇：餘燼騎士、毒刃客與灰燼先知" },
    { src: `${SHOT}/v2/shots/zh/map-act2.webp`, alt: "第二幕地圖：穿過溺亡地窖、通往沉沒之鐘的分支路線" },
    { src: `${SHOT}/v2/shots/zh/shop.webp`, alt: "局內商店：購買卡牌、遺物和藥水，或移除一張牌" },
    { src: `${SHOT}/v2/shots/zh/hollow-king.webp`, alt: "在餘燼王座迎戰空洞之王" },
    { src: `${SHOT}/v2/shots/zh/reward-rare.webp`, alt: "擊敗灰燼守望者：挑選首領遺物和一張稀有卡" },
    { src: `${SHOT}/v2/shots/zh/hub.webp`, alt: "局與局之間的營地：啟程、每日挑戰、聖所與任務" },
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
// Game numbers are the shipped ones (app repo assets/content/*.json), not the
// design doc's: hero HP 70/58/66, Forge Brand 2 Block, Serpent Fang 1 Poison.
// Chinese game terms follow the app's own glossary (assets/i18n/zh.json).

export interface EmberDeckLanding {
  kicker: string;
  heroLines: [string, string, string];
  heroSub: string;
  priceNote: string;
  heroStats: { n: string; label: string }[];
  videoLabel: string;
  heatEyebrow: string;
  heatTitle: string;
  heatIntro: string;
  heatRules: { k: string; body: string }[];
  demo: HeatDemoCopy;
  heroesEyebrow: string;
  heroesTitle: string;
  heroesIntro: string;
  heroes: HeroCopy[];
  heroLabels: HeroLabels;
  actsEyebrow: string;
  actsTitle: string;
  actsIntro: string;
  acts: {
    label: string;
    name: string;
    body: string;
    minutes: string;
    bosses: [string, string];
    foes: [string, string, string, string];
  }[];
  bossesLabel: string;
  foesLabel: string;
  finalEyebrow: string;
  finalName: string;
  finalBody: string;
  progressEyebrow: string;
  progressTitle: string;
  progressBody: string;
  progress: { n: string; title: string; body: string }[];
  counts: { n: string; label: string }[];
  screensEyebrow: string;
  screensTitle: string;
  /** One short caption per loc.screenshots entry, same order. */
  screenCaptions: string[];
  pactEyebrow: string;
  pactTitle: string;
  pact: { title: string; body: string }[];
  shopTitle: string;
  shop: { name: string; price: string; body: string }[];
  shopNote: string;
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
  heroStats: [
    { n: "3", label: "heroes" },
    { n: "3", label: "acts" },
    { n: "120+", label: "cards" },
    { n: "6–8", label: "min an act" },
  ],
  videoLabel: "Ember Deck gameplay, 26 seconds, no sound",
  heatEyebrow: "the heat hook",
  heatTitle: "Order is the skill. Heat is the reward.",
  heatIntro:
    "One rule sits under every turn, and you can learn it in three seconds. Then try it: the Cinder Ogre below falls only to a perfect turn.",
  heatRules: [
    { k: "+1", body: "Every card you play adds one Heat. It resets when your next turn starts." },
    { k: "Blaze", body: "A Blaze card fires a bonus once Heat has reached its number." },
    { k: "Order", body: "Lead with cheap cards, bank the Heat, land the finisher last." },
  ],
  demo: {
    enemy: "Cinder Ogre",
    heat: "Heat",
    energy: "Energy",
    hint: "Tap cards to play them. You have 3 energy, and order matters.",
    blaze: "BLAZE!",
    dmgSuffix: " dmg",
    playLabel: "Play {name}, costs {cost}, deals {dmg} now",
    reset: "Reset turn",
    again: "Play the turn again",
    perfect: "Perfect turn: {dmg} damage. The Ogre falls.",
    short: "{dmg} damage. The Ogre survives. The best order deals {best}.",
    bestOrder: "Best order:",
    cards: {
      hammer: { name: "Hammerfall", text: "Deal 10, +2 per Heat." },
      slice: { name: "Slice", text: "Deal 4. Blaze 2: deal 4 more." },
      strike: { name: "Strike", text: "Deal 6." },
      jab: { name: "Quick Jab", text: "Deal 5." },
      blade: { name: "Heated Blade", text: "Deal 6. Blaze 3: deal 4 more." },
    },
  },
  heroesEyebrow: "three heroes",
  heroesTitle: "Three ways to burn",
  heroesIntro:
    "Every hero plays by the same Heat rules and spends the Heat differently. Emberknight is free from the first run. The other two unlock by playing, or early with a one-time purchase.",
  heroes: [
    {
      name: "Emberknight",
      line: "Every blow tempers the blade. Heat becomes steel.",
      style: "A wall that hits back. Heat turns into Block and Strength, and steady Blaze 2–3 cards finish the job.",
      unlock: "Free from the first run",
      hp: "70",
      relic: "Forge Brand",
      relicBody: "the first time Heat reaches 3 each turn, gain 2 Block",
      cards: [
        { name: "Heated Blade", text: "Deal 6. Blaze 3: deal 4 more." },
        { name: "Whirlwind", text: "Deal 8 to all. Blaze 3: 4 more to all." },
        { name: "Hammerfall", text: "Deal 10, +2 per Heat." },
      ],
    },
    {
      name: "Venomblade",
      line: "A hundred small cuts. Each one burns.",
      style: "Zero-cost chains, fans of Needles and Poison that scales with Heat. The fastest Heat in the game.",
      unlock: "Defeat any Act 1 boss",
      hp: "58",
      relic: "Serpent Fang",
      relicBody: "the first time Heat reaches 4 each turn, apply 1 Poison to all",
      cards: [
        { name: "Fan of Needles", text: "Add 2 Needles to your hand." },
        { name: "Venom Cascade", text: "Apply 1 Poison per Heat." },
        { name: "Venom Surge", text: "Apply 2 Poison. Blaze 4: 7 more." },
      ],
    },
    {
      name: "Ashen Seer",
      line: "She sees the fire before it's lit.",
      style: "Starts every turn already burning, controls the fight with Weak and Vulnerable, then takes one enormous Blaze turn.",
      unlock: "Defeat any Act 2 boss, or reach Emberknight Mastery 5",
      hp: "66",
      relic: "Kindling Eye",
      relicBody: "gain 1 Heat at the start of every turn",
      cards: [
        { name: "Starfall", text: "Deal 12 to all. Blaze 5: 12 more." },
        { name: "Pillar of Ash", text: "Deal 20. Blaze 5: 20 more." },
        { name: "Supernova", text: "Deal 5 per Heat to all." },
      ],
    },
  ],
  heroLabels: { hp: "Max HP", relic: "Starter relic", signature: "Signature cards", unlock: "Unlock" },
  actsEyebrow: "three acts",
  actsTitle: "A run is a climb",
  actsIntro:
    "Pick your path up a branching map of fights, elites, shops, events, campfires and treasure. Every act ends at one of two bosses, and the game saves after every room.",
  acts: [
    {
      label: "Act I",
      name: "The Ascent",
      body: "Rat-infested ruins and rust-lit halls. Learn the rules, then face the Ashen Warden or the Rotmother.",
      minutes: "6–8 min",
      bosses: ["The Ashen Warden", "The Rotmother"],
      foes: ["Grave Hound", "Mire Serpent", "Bone Archer", "Cinder Ogre"],
    },
    {
      label: "Act II",
      name: "The Drowned Vaults",
      body: "Flooded crypts under a teal glow, where Soaked raises every Blaze number. The Tide Matron and the Sunken Bell drown careless decks.",
      minutes: "6–8 min",
      bosses: ["Tide Matron", "Sunken Bell"],
      foes: ["Drowned Rower", "Ink Wraith", "Vault Hydra", "Brine Knight"],
    },
    {
      label: "Act III",
      name: "The Cinder Throne",
      body: "Magma halls where the enemies feed you fire. Manage your Heat or burn with it.",
      minutes: "6–8 min",
      bosses: ["Ashen Pyre", "Molten Herald"],
      foes: ["Ember Zealot", "Magma Golem", "Cinder Harpy", "Pyre Knight"],
    },
  ],
  bossesLabel: "Act bosses",
  foesLabel: "On the way up",
  finalEyebrow: "the final boss",
  finalName: "The Hollow King",
  finalBody:
    "440 HP on the Cinder Throne, waiting at the top of every run. Most runs end before you meet him. That's the point.",
  progressEyebrow: "death is progress",
  progressTitle: "Fall, and the next climb starts stronger",
  progressBody:
    "Every fight you clear pays shards and hero Mastery, whether the run ends in victory or on the floor of Act II. Nothing is wasted.",
  progress: [
    { n: "20", title: "Sanctum upgrades", body: "Permanent unlocks bought with shards: relics, card tiers, a second pick." },
    { n: "1–10", title: "Hero Mastery", body: "Each hero levels up on their own and earns new cards, card backs and skins." },
    { n: "1–15", title: "Ascension", body: "Per hero, for when the climb needs to fight back." },
    { n: "Daily", title: "Daily Run & Weekly Challenge", body: "Seeded runs with modifiers, plus daily quests and a 7-day calendar." },
  ],
  counts: [
    { n: "120+", label: "cards" },
    { n: "30", label: "enemies" },
    { n: "7", label: "bosses" },
    { n: "42", label: "relics" },
    { n: "12", label: "potions" },
    { n: "18", label: "events" },
    { n: "40", label: "achievements" },
  ],
  screensEyebrow: "screens",
  screensTitle: "From the table",
  screenCaptions: [
    "Heat 9. The hand catches fire.",
    "You fell. You still earned shards.",
    "Choose your hero",
    "Act II, the Drowned Vaults",
    "In-run shop: cards, relics, potions",
    "The Hollow King",
    "Boss down: pick a relic and a rare",
    "The hub between runs",
  ],
  pactEyebrow: "fair play",
  pactTitle: "The pact",
  pact: [
    { title: "No energy timers", body: "The only energy is the three you spend each turn. Play one run a week or ten in a night." },
    { title: "No gacha, no card packs", body: "No loot boxes and nothing random for money. Every card is earned by playing." },
    { title: "Ads stay out of the fight", body: "A short ad may play between acts or runs, never in your first two runs, never in a fight, on the map or during a decision." },
    { title: "Rewards you choose", body: "Optional ads revive once per run, reroll a reward, double shards or open a daily chest. Always labelled, never required." },
    { title: "Offline, no account", body: "The whole game works offline and saves on your device after every room." },
  ],
  shopTitle: "What's for sale",
  shop: [
    { name: "Founder's Bundle", price: "$7.99", body: "No forced ads, both heroes, the Founder card back and 300 shards." },
    { name: "Remove forced ads", price: "$4.99", body: "Optional reward ads stay, because they only play when you tap them." },
    { name: "Hero unlock", price: "$2.99", body: "Venomblade or Ashen Seer now, if you'd rather not wait." },
    { name: "Card backs & boards", price: "$1.99", body: "Cosmetic only." },
  ],
  shopNote: "One-time purchases, no subscriptions. US prices; your store shows local pricing.",
  faqEyebrow: "questions",
  faqTitle: "Fair questions, straight answers",
  faqs: [
    {
      q: "Is Ember Deck free?",
      a: "Yes. The whole game, all three acts, the Daily Run and every hero can be played for free. Optional one-time purchases remove the forced ads or unlock heroes early.",
    },
    {
      q: "Is there gacha, or card packs?",
      a: "No. There are no loot boxes, no packs and no random rewards for money. Every card is earned by playing.",
    },
    {
      q: "How long is a run?",
      a: "About six to eight minutes an act, and three acts plus the final boss for a full run. The game autosaves after every room, so close it mid-fight and pick up exactly where you left off.",
    },
    {
      q: "Do I need an internet connection or an account?",
      a: "Neither. Ember Deck plays fully offline and has no account. Leaderboards and achievements through Game Center are optional.",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "When is it out?",
            a: "Soon. Version 2.0 is headed to the App Store first, with Android after. This page will link straight to the store on launch day.",
          },
        ]),
    {
      q: "Which languages are supported?",
      a: "English and Simplified Chinese.",
    },
  ],
  supportLink: "More help on the support page",
  pressEyebrow: "press kit",
  pressTitle: "For press and creators",
  pressBody:
    "Use these in coverage, videos and streams. For codes, questions or higher-resolution art, email lei@appfactory.sg.",
  pressFacts: [
    { label: "Developer", value: "appfactory (Lei Cao), Singapore" },
    { label: "Genre", value: "Roguelite deckbuilder" },
    { label: "Platforms", value: "iPhone first, then Android" },
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
  creditsTitle: "Music & sound",
  creditsMusicLabel: "Music",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "Used with credit under the composer's licence.",
  creditsSfxLabel: "Sound effects",
  creditsSfxBody: "Sound effects: original, made for Ember Deck.",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "One more run. Always one more run." : "One more run is coming.",
  closingBody: anyReleased
    ? "Free to play, fully offline, no energy timers. Pick a hero and start climbing."
    : "Ember Deck 2.0 is in final testing. Bookmark this page: it will link straight to the store on launch day.",
};

const landingZhCn: EmberDeckLanding = {
  kicker: "卡牌肉鸽 · iPhone 与 Android",
  heroLines: ["每一张牌，", "都在", "为火添柴。"],
  heroSub:
    "手绘暗黑奇幻世界里，五分钟一局的地牢闯关。每打出一张牌，热度就升高一格。排好出牌顺序，点燃烈焰；就算倒下，下一局也会更强。",
  priceNote: "免费游玩。没有体力计时，没有抽卡，完全离线。",
  heroStats: [
    { n: "3", label: "位英雄" },
    { n: "3", label: "幕冒险" },
    { n: "120+", label: "张卡牌" },
    { n: "6–8", label: "分钟一幕" },
  ],
  videoLabel: "《余烬牌组》实机画面，26 秒，无声",
  heatEyebrow: "核心玩法：热度",
  heatTitle: "出牌顺序是技术，热度是奖赏。",
  heatIntro: "每一个回合都建立在同一条规则上，三秒就能看懂。不如直接试试：下面这只炭烬巨魔，只有完美的一回合才能打倒。",
  heatRules: [
    { k: "+1", body: "每打出一张牌，热度 +1。在你的下个回合开始时归零。" },
    { k: "烈焰", body: "热度达到烈焰牌上的数值后再打出，就会额外触发烈焰效果。" },
    { k: "顺序", body: "先出便宜的牌攒热度，最后再打出终结技。" },
  ],
  demo: {
    enemy: "炭烬巨魔",
    heat: "热度",
    energy: "能量",
    hint: "点按卡牌即可打出。你有 3 点能量——顺序很重要。",
    blaze: "烈焰！",
    dmgSuffix: " 伤害",
    playLabel: "打出{name}，消耗 {cost}，现在造成 {dmg} 点伤害",
    reset: "重置回合",
    again: "再打一次",
    perfect: "完美回合：{dmg} 点伤害，巨魔倒下了。",
    short: "{dmg} 点伤害，巨魔还站着。最佳顺序能打出 {best} 点。",
    bestOrder: "最佳顺序：",
    cards: {
      hammer: { name: "重锤落", text: "造成 10 点伤害，每点热度 +2。" },
      slice: { name: "切割", text: "造成 4 点伤害。烈焰 2：再造成 4 点。" },
      strike: { name: "挥砍", text: "造成 6 点伤害。" },
      jab: { name: "快拳", text: "造成 5 点伤害。" },
      blade: { name: "炽热之刃", text: "造成 6 点伤害。烈焰 3：再造成 4 点。" },
    },
  },
  heroesEyebrow: "三位英雄",
  heroesTitle: "三种燃烧的方式",
  heroesIntro:
    "三位英雄遵循同一套热度规则，用法却各不相同。余烬骑士第一局即可使用，另外两位靠游玩解锁，也可以用一次性内购提前解锁。",
  heroes: [
    {
      name: "余烬骑士",
      line: "每一击都在淬炼刀锋，热度化为钢铁。",
      style: "一堵会还手的墙。热度化为格挡与力量，再用稳定的烈焰 2–3 牌收尾。",
      unlock: "第一局即可使用",
      hp: "70",
      relic: "锻炉烙印",
      relicBody: "每回合热度首次达到 3 时，获得 2 点格挡",
      cards: [
        { name: "炽热之刃", text: "造成 6 点伤害。烈焰 3：再造成 4 点。" },
        { name: "旋风斩", text: "对所有敌人造成 8 点伤害。烈焰 3：再造成 4 点。" },
        { name: "重锤落", text: "造成 10 点伤害，每点热度 +2。" },
      ],
    },
    {
      name: "毒刃客",
      line: "千百道细小的伤口，每一道都在灼烧。",
      style: "零费连击、成把的飞针，以及随热度增长的中毒。全游戏升温最快的英雄。",
      unlock: "击败任意第一幕首领",
      hp: "58",
      relic: "蛇牙",
      relicBody: "每回合热度首次达到 4 时，对所有敌人施加 1 层中毒",
      cards: [
        { name: "飞针扇", text: "将 2 张飞针加入手牌。" },
        { name: "毒液倾泻", text: "每点热度施加 1 层中毒。" },
        { name: "毒液涌动", text: "施加 2 层中毒。烈焰 4：再施加 7 层。" },
      ],
    },
    {
      name: "灰烬先知",
      line: "火焰未起，她已先见。",
      style: "每回合一开始就带着热度，用虚弱和易伤控场，然后打出一个惊天动地的烈焰回合。",
      unlock: "击败任意第二幕首领，或余烬骑士精通达到 5 级",
      hp: "66",
      relic: "引火之眼",
      relicBody: "每回合开始时获得 1 点热度",
      cards: [
        { name: "星陨", text: "对所有敌人造成 12 点伤害。烈焰 5：再造成 12 点。" },
        { name: "灰烬之柱", text: "造成 20 点伤害。烈焰 5：再造成 20 点。" },
        { name: "超新星", text: "每点热度对所有敌人造成 5 点伤害。" },
      ],
    },
  ],
  heroLabels: { hp: "生命上限", relic: "初始遗物", signature: "招牌卡牌", unlock: "解锁" },
  actsEyebrow: "三幕冒险",
  actsTitle: "每一局都是一次攀登",
  actsIntro:
    "在分支地图上选择你的路线：普通战斗、精英、商店、事件、营火与宝藏。每一幕的尽头都是两位首领之一，每过一个房间都会自动存档。",
  acts: [
    {
      label: "第一幕",
      name: "攀登之路",
      body: "鼠群出没的废墟与锈光笼罩的大厅。先学会规则，再去挑战灰烬守望者或腐化之母。",
      minutes: "6–8 分钟",
      bosses: ["灰烬守望者", "腐化之母"],
      foes: ["墓穴猎犬", "泥沼巨蛇", "骸骨弓手", "炭烬巨魔"],
    },
    {
      label: "第二幕",
      name: "溺亡地窖",
      body: "青光幽幽的水下墓穴，浸湿会让所有烈焰门槛 +1。潮汐主母与沉没之钟会把粗心的卡组拖进水底。",
      minutes: "6–8 分钟",
      bosses: ["潮汐主母", "沉没之钟"],
      foes: ["溺亡桨手", "墨影幽魂", "地窖九头蛇", "盐水骑士"],
    },
    {
      label: "第三幕",
      name: "余烬王座",
      body: "熔岩大厅里，敌人会往你手里塞火。控制好热度，否则引火烧身。",
      minutes: "6–8 分钟",
      bosses: ["灰烬火葬堆", "熔岩先驱"],
      foes: ["余烬狂信徒", "岩浆魔像", "余烬鸟妖", "火葬骑士"],
    },
  ],
  bossesLabel: "本幕首领",
  foesLabel: "沿途敌人",
  finalEyebrow: "最终首领",
  finalName: "空洞之王",
  finalBody: "440 点生命，端坐余烬王座，在每一局的顶端等着你。大多数时候，你还没见到他就倒下了——这正是乐趣所在。",
  progressEyebrow: "每次倒下都是进步",
  progressTitle: "倒下了，下一次攀登会更强",
  progressBody: "每通过一场战斗都会获得碎晶和英雄精通经验，无论这一局是胜利，还是倒在第二幕。没有一局是白打的。",
  progress: [
    { n: "20", title: "项圣所强化", body: "用碎晶换取永久解锁：遗物、卡牌层级、二次挑选。" },
    { n: "1–10", title: "英雄精通", body: "每位英雄各自升级，解锁新卡牌、卡背和皮肤。" },
    { n: "1–15", title: "晋升难度", body: "每位英雄独立计算，觉得不够刺激时再往上爬。" },
    { n: "每日", title: "每日挑战与每周挑战", body: "带修正规则的固定种子关卡，外加每日任务和七日签到。" },
  ],
  counts: [
    { n: "120+", label: "张卡牌" },
    { n: "30", label: "种敌人" },
    { n: "7", label: "位首领" },
    { n: "42", label: "件遗物" },
    { n: "12", label: "种药水" },
    { n: "18", label: "个事件" },
    { n: "40", label: "项成就" },
  ],
  screensEyebrow: "截图",
  screensTitle: "牌桌实况",
  screenCaptions: [
    "热度 9，整手牌都烧起来了",
    "倒下了，碎晶照样到手",
    "选择你的英雄",
    "第二幕：溺亡地窖",
    "局内商店：卡牌、遗物、药水",
    "空洞之王",
    "首领倒下：挑选遗物和稀有卡",
    "局与局之间的营地",
  ],
  pactEyebrow: "公平游戏",
  pactTitle: "我们的约定",
  pact: [
    { title: "没有体力计时", body: "唯一的能量是你每回合花掉的那三点。一周打一局，或一晚打十局，都随你。" },
    { title: "没有抽卡，没有卡包", body: "没有宝箱，也不卖任何随机奖励。每一张卡都是打出来的。" },
    { title: "广告不进战斗", body: "短广告只会在幕与幕、局与局之间出现；前两局完全没有，战斗、地图和做决定时也绝不打扰。" },
    { title: "奖励由你决定", body: "可选的看广告奖励：每局复活一次、重抽奖励、碎晶翻倍、打开每日宝箱。都有清楚标注，从不强制。" },
    { title: "离线可玩，无需账号", body: "整个游戏都能离线运行，每过一个房间就在本机自动存档。" },
  ],
  shopTitle: "出售的内容",
  shop: [
    { name: "创始者礼包", price: "$7.99", body: "移除强制广告、解锁两位英雄、创始者卡背和 300 碎晶。" },
    { name: "移除强制广告", price: "$4.99", body: "可选的奖励广告仍然保留，因为只有你主动点按时才会播放。" },
    { name: "英雄解锁", price: "$2.99", body: "不想等的话，立即解锁毒刃客或灰烬先知。" },
    { name: "卡背与牌桌", price: "$1.99", body: "纯外观。" },
  ],
  shopNote: "全部为一次性购买，没有订阅。以上为美区价格，实际以你所在商店显示的本地价格为准。",
  faqEyebrow: "常见问题",
  faqTitle: "坦率的问题，直接的回答",
  faqs: [
    {
      q: "《余烬牌组》免费吗？",
      a: "免费。完整游戏、全部三幕、每日挑战和每一位英雄都能免费玩。可选的一次性内购可以移除强制广告或提前解锁英雄。",
    },
    {
      q: "有抽卡或卡包吗？",
      a: "没有。没有宝箱、没有卡包，也没有花钱买的随机奖励。每一张卡都是打出来的。",
    },
    {
      q: "一局要玩多久？",
      a: "每一幕大约六到八分钟，一整局是三幕加最终首领。每过一个房间都会自动存档，战斗中途关掉游戏，下次也能从原处继续。",
    },
    {
      q: "需要联网或注册账号吗？",
      a: "都不需要。《余烬牌组》完全离线可玩，也没有账号系统。Game Center 的排行榜和成就是可选的。",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "什么时候上线？",
            a: "很快。2.0 版本会先登陆 App Store，随后是 Android。上线当天，本页面会直接链接到应用商店。",
          },
        ]),
    {
      q: "支持哪些语言？",
      a: "英文和简体中文。",
    },
  ],
  supportLink: "更多帮助请见支持页面",
  pressEyebrow: "媒体资料",
  pressTitle: "给媒体与创作者",
  pressBody:
    "欢迎在报道、视频和直播中使用以下素材。如需兑换码、有任何问题或需要更高分辨率的美术，请发邮件至 lei@appfactory.sg。",
  pressFacts: [
    { label: "开发者", value: "appfactory（Lei Cao），新加坡" },
    { label: "类型", value: "卡牌肉鸽" },
    { label: "平台", value: "先登陆 iPhone，随后 Android" },
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
  creditsTitle: "音乐与音效",
  creditsMusicLabel: "音乐",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "依据作曲者的授权条款，注明出处使用。",
  creditsSfxLabel: "音效",
  creditsSfxBody: "音效：为《余烬牌组》原创制作。",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "还想再来一局。永远还想再来一局。" : "下一局，就快来了。",
  closingBody: anyReleased
    ? "免费游玩，完全离线，没有体力计时。选一位英雄，开始攀登吧。"
    : "《余烬牌组》2.0 正在进行最后的测试。把本页加入书签吧，上线当天这里会直接链接到应用商店。",
};

const landingZhTw: EmberDeckLanding = {
  kicker: "Roguelite 牌組構築 · iPhone 與 Android",
  heroLines: ["每一張牌，", "都在", "為火添柴。"],
  heroSub:
    "手繪暗黑奇幻世界裡，五分鐘一局的地牢闖關。每打出一張牌，熱度就升高一格。排好出牌順序，點燃烈焰；就算倒下，下一局也會更強。",
  priceNote: "免費遊玩。沒有體力計時，沒有轉蛋，完全離線。",
  heroStats: [
    { n: "3", label: "位英雄" },
    { n: "3", label: "幕冒險" },
    { n: "120+", label: "張卡牌" },
    { n: "6–8", label: "分鐘一幕" },
  ],
  videoLabel: "《餘燼牌組》實機畫面，26 秒，無聲",
  heatEyebrow: "核心玩法：熱度",
  heatTitle: "出牌順序是技術，熱度是獎賞。",
  heatIntro: "每一個回合都建立在同一條規則上，三秒就能看懂。不如直接試試：下面這隻炭燼巨魔，只有完美的一回合才能打倒。",
  heatRules: [
    { k: "+1", body: "每打出一張牌，熱度 +1。在你的下個回合開始時歸零。" },
    { k: "烈焰", body: "熱度達到烈焰牌上的數值後再打出，就會額外觸發烈焰效果。" },
    { k: "順序", body: "先出便宜的牌攢熱度，最後再打出終結技。" },
  ],
  demo: {
    enemy: "炭燼巨魔",
    heat: "熱度",
    energy: "能量",
    hint: "點按卡牌即可打出。你有 3 點能量——順序很重要。",
    blaze: "烈焰！",
    dmgSuffix: " 傷害",
    playLabel: "打出{name}，消耗 {cost}，現在造成 {dmg} 點傷害",
    reset: "重置回合",
    again: "再打一次",
    perfect: "完美回合：{dmg} 點傷害，巨魔倒下了。",
    short: "{dmg} 點傷害，巨魔還站著。最佳順序能打出 {best} 點。",
    bestOrder: "最佳順序：",
    cards: {
      hammer: { name: "重錘落", text: "造成 10 點傷害，每點熱度 +2。" },
      slice: { name: "切割", text: "造成 4 點傷害。烈焰 2：再造成 4 點。" },
      strike: { name: "揮砍", text: "造成 6 點傷害。" },
      jab: { name: "快拳", text: "造成 5 點傷害。" },
      blade: { name: "熾熱之刃", text: "造成 6 點傷害。烈焰 3：再造成 4 點。" },
    },
  },
  heroesEyebrow: "三位英雄",
  heroesTitle: "三種燃燒的方式",
  heroesIntro:
    "三位英雄遵循同一套熱度規則，用法卻各不相同。餘燼騎士第一局即可使用，另外兩位靠遊玩解鎖，也可以用一次性內購提前解鎖。",
  heroes: [
    {
      name: "餘燼騎士",
      line: "每一擊都在淬鍊刀鋒，熱度化為鋼鐵。",
      style: "一堵會還手的牆。熱度化為格擋與力量，再用穩定的烈焰 2–3 牌收尾。",
      unlock: "第一局即可使用",
      hp: "70",
      relic: "鍛爐烙印",
      relicBody: "每回合熱度首次達到 3 時，獲得 2 點格擋",
      cards: [
        { name: "熾熱之刃", text: "造成 6 點傷害。烈焰 3：再造成 4 點。" },
        { name: "旋風斬", text: "對所有敵人造成 8 點傷害。烈焰 3：再造成 4 點。" },
        { name: "重錘落", text: "造成 10 點傷害，每點熱度 +2。" },
      ],
    },
    {
      name: "毒刃客",
      line: "千百道細小的傷口，每一道都在灼燒。",
      style: "零費連擊、成把的飛針，以及隨熱度增長的中毒。全遊戲升溫最快的英雄。",
      unlock: "擊敗任意第一幕首領",
      hp: "58",
      relic: "蛇牙",
      relicBody: "每回合熱度首次達到 4 時，對所有敵人施加 1 層中毒",
      cards: [
        { name: "飛針扇", text: "將 2 張飛針加入手牌。" },
        { name: "毒液傾瀉", text: "每點熱度施加 1 層中毒。" },
        { name: "毒液湧動", text: "施加 2 層中毒。烈焰 4：再施加 7 層。" },
      ],
    },
    {
      name: "灰燼先知",
      line: "火焰未起，她已先見。",
      style: "每回合一開始就帶著熱度，用虛弱和易傷控場，然後打出一個驚天動地的烈焰回合。",
      unlock: "擊敗任意第二幕首領，或餘燼騎士精通達到 5 級",
      hp: "66",
      relic: "引火之眼",
      relicBody: "每回合開始時獲得 1 點熱度",
      cards: [
        { name: "星隕", text: "對所有敵人造成 12 點傷害。烈焰 5：再造成 12 點。" },
        { name: "灰燼之柱", text: "造成 20 點傷害。烈焰 5：再造成 20 點。" },
        { name: "超新星", text: "每點熱度對所有敵人造成 5 點傷害。" },
      ],
    },
  ],
  heroLabels: { hp: "生命上限", relic: "初始遺物", signature: "招牌卡牌", unlock: "解鎖" },
  actsEyebrow: "三幕冒險",
  actsTitle: "每一局都是一次攀登",
  actsIntro:
    "在分支地圖上選擇你的路線：普通戰鬥、精英、商店、事件、營火與寶藏。每一幕的盡頭都是兩位首領之一，每過一個房間都會自動存檔。",
  acts: [
    {
      label: "第一幕",
      name: "攀登之路",
      body: "鼠群出沒的廢墟與鏽光籠罩的大廳。先學會規則，再去挑戰灰燼守望者或腐化之母。",
      minutes: "6–8 分鐘",
      bosses: ["灰燼守望者", "腐化之母"],
      foes: ["墓穴獵犬", "泥沼巨蛇", "骸骨弓手", "炭燼巨魔"],
    },
    {
      label: "第二幕",
      name: "溺亡地窖",
      body: "青光幽幽的水下墓穴，浸溼會讓所有烈焰門檻 +1。潮汐主母與沉沒之鐘會把粗心的卡組拖進水底。",
      minutes: "6–8 分鐘",
      bosses: ["潮汐主母", "沉沒之鐘"],
      foes: ["溺亡槳手", "墨影幽魂", "地窖九頭蛇", "鹽水騎士"],
    },
    {
      label: "第三幕",
      name: "餘燼王座",
      body: "熔岩大廳裡，敵人會往你手裡塞火。控制好熱度，否則引火燒身。",
      minutes: "6–8 分鐘",
      bosses: ["灰燼火葬堆", "熔岩先驅"],
      foes: ["餘燼狂信徒", "岩漿魔像", "餘燼鳥妖", "火葬騎士"],
    },
  ],
  bossesLabel: "本幕首領",
  foesLabel: "沿途敵人",
  finalEyebrow: "最終首領",
  finalName: "空洞之王",
  finalBody: "440 點生命，端坐餘燼王座，在每一局的頂端等著你。大多數時候，你還沒見到他就倒下了——這正是樂趣所在。",
  progressEyebrow: "每次倒下都是進步",
  progressTitle: "倒下了，下一次攀登會更強",
  progressBody: "每透過一場戰鬥都會獲得碎晶和英雄精通經驗，無論這一局是勝利，還是倒在第二幕。沒有一局是白打的。",
  progress: [
    { n: "20", title: "項聖所強化", body: "用碎晶換取永久解鎖：遺物、卡牌層級、二次挑選。" },
    { n: "1–10", title: "英雄精通", body: "每位英雄各自升級，解鎖新卡牌、卡背和皮膚。" },
    { n: "1–15", title: "晉升難度", body: "每位英雄獨立計算，覺得不夠刺激時再往上爬。" },
    { n: "每日", title: "每日挑戰與每週挑戰", body: "帶修正規則的固定種子關卡，外加每日任務和七日簽到。" },
  ],
  counts: [
    { n: "120+", label: "張卡牌" },
    { n: "30", label: "種敵人" },
    { n: "7", label: "位首領" },
    { n: "42", label: "件遺物" },
    { n: "12", label: "種藥水" },
    { n: "18", label: "個事件" },
    { n: "40", label: "項成就" },
  ],
  screensEyebrow: "截圖",
  screensTitle: "牌桌實況",
  screenCaptions: [
    "熱度 9，整手牌都燒起來了",
    "倒下了，碎晶照樣到手",
    "選擇你的英雄",
    "第二幕：溺亡地窖",
    "局內商店：卡牌、遺物、藥水",
    "空洞之王",
    "首領倒下：挑選遺物和稀有卡",
    "局與局之間的營地",
  ],
  pactEyebrow: "公平遊戲",
  pactTitle: "我們的約定",
  pact: [
    { title: "沒有體力計時", body: "唯一的能量是你每回合花掉的那三點。一週打一局，或一晚打十局，都隨你。" },
    { title: "沒有轉蛋，沒有卡包", body: "沒有寶箱，也不賣任何隨機獎勵。每一張卡都是打出來的。" },
    { title: "廣告不進戰鬥", body: "短廣告只會在幕與幕、局與局之間出現；前兩局完全沒有，戰鬥、地圖和做決定時也絕不打擾。" },
    { title: "獎勵由你決定", body: "可選的看廣告獎勵：每局復活一次、重抽獎勵、碎晶翻倍、開啟每日寶箱。都有清楚標註，從不強制。" },
    { title: "離線可玩，無需賬號", body: "整個遊戲都能離線執行，每過一個房間就在本機自動存檔。" },
  ],
  shopTitle: "出售的內容",
  shop: [
    { name: "創始者禮包", price: "$7.99", body: "移除強制廣告、解鎖兩位英雄、創始者卡背和 300 碎晶。" },
    { name: "移除強制廣告", price: "$4.99", body: "可選的獎勵廣告仍然保留，因為只有你主動點按時才會播放。" },
    { name: "英雄解鎖", price: "$2.99", body: "不想等的話，立即解鎖毒刃客或灰燼先知。" },
    { name: "卡背與牌桌", price: "$1.99", body: "純外觀。" },
  ],
  shopNote: "全部為一次性購買，沒有訂閱。以上為美區價格，實際以你所在商店顯示的本地價格為準。",
  faqEyebrow: "常見問題",
  faqTitle: "坦率的問題，直接的回答",
  faqs: [
    {
      q: "《餘燼牌組》免費嗎？",
      a: "免費。完整遊戲、全部三幕、每日挑戰和每一位英雄都能免費玩。可選的一次性內購可以移除強制廣告或提前解鎖英雄。",
    },
    {
      q: "有轉蛋或卡包嗎？",
      a: "沒有。沒有寶箱、沒有卡包，也沒有花錢買的隨機獎勵。每一張卡都是打出來的。",
    },
    {
      q: "一局要玩多久？",
      a: "每一幕大約六到八分鐘，一整局是三幕加最終首領。每過一個房間都會自動存檔，戰鬥中途關掉遊戲，下次也能從原處繼續。",
    },
    {
      q: "需要聯網或註冊賬號嗎？",
      a: "都不需要。《餘燼牌組》完全離線可玩，也沒有賬號系統。Game Center 的排行榜和成就是可選的。",
    },
    // Pre-release only; drops out once RELEASED has a platform.
    ...(anyReleased
      ? []
      : [
          {
            q: "什麼時候上線？",
            a: "很快。2.0 版本會先登陸 App Store，隨後是 Android。上線當天，本頁面會直接連結到應用商店。",
          },
        ]),
    {
      q: "支援哪些語言？",
      a: "英文和簡體中文。",
    },
  ],
  supportLink: "更多幫助請見支援頁面",
  pressEyebrow: "媒體資料",
  pressTitle: "給媒體與創作者",
  pressBody:
    "歡迎在報道、影片和直播中使用以下素材。如需兌換碼、有任何問題或需要更高解析度的美術，請發郵件至 lei@appfactory.sg。",
  pressFacts: [
    { label: "開發者", value: "appfactory（Lei Cao），新加坡" },
    { label: "型別", value: "Roguelite 牌組構築" },
    { label: "平臺", value: "先登陸 iPhone，隨後 Android" },
    { label: "價格", value: "免費，含可選一次性內購" },
    { label: "語言", value: "English、簡體中文" },
    { label: "上線時間", value: anyReleased ? "已上線" : "即將推出" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "應用圖示", meta: "PNG · 1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "標誌", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "主視覺", meta: "JPG · 1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "空洞之王", meta: "PNG · 透明背景" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "社交分享圖", meta: "JPG · 1200 × 630" },
  ],
  pressZip: "打包下載全部素材（.zip）",
  creditsTitle: "音樂與音效",
  creditsMusicLabel: "音樂",
  creditsMusicBy: "もみじば (Momijiba) — MOMIZizm MUSiC",
  creditsMusicNote: "依據作曲者的授權條款，註明出處使用。",
  creditsSfxLabel: "音效",
  creditsSfxBody: "音效：為《餘燼牌組》原創制作。",
  creditsMusicUrl: "https://music.storyinvention.com/en/",
  closingTitle: anyReleased ? "還想再來一局。永遠還想再來一局。" : "下一局，就快來了。",
  closingBody: anyReleased
    ? "免費遊玩，完全離線，沒有體力計時。選一位英雄，開始攀登吧。"
    : "《餘燼牌組》2.0 正在進行最後的測試。把本頁加入書籤吧，上線當天這裡會直接連結到應用商店。",
};

export const emberDeckLanding: Record<Locale, EmberDeckLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};

/** True once at least one store build is public — drives release-only copy. */
export const emberDeckReleased = anyReleased;
