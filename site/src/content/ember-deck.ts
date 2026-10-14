// Ember Deck — content in all three locales, plus the copy for its bespoke
// landing page (src/components/sites/ember-deck/landing.tsx). The site's look
// lives in src/components/sites/ember-deck/site.css. Game facts come from the
// app repo (apps/roguelite-deckbuilder): fastlane store metadata (names,
// subtitles, description), assets/content/*.json (card, enemy, relic counts,
// hero HP, card costs) and app_privacy_details.json.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

// ---------------------------------------------------------------------------
// RELEASE SWITCH — the one line to change on launch day. Flipping a platform
// to true shows the real store button for it and swaps the availability lines
// for the released wording. Until then the site says the game is launching on
// both stores and shows no store link.
const RELEASED = { ios: false, android: false };

const APP_STORE_URL = "https://apps.apple.com/app/id6794833643";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.appfactory.roguelite_deckbuilder";

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
  // Store name and subtitle as filed in fastlane/metadata/ios/en-US.
  storeName: "Ember Deck: Roguelike Cards",
  tagline: "Every card feeds the fire.",
  subtitle: "Deckbuilder RPG · Play Offline",
  oneLiner:
    "A five-minute dark-fantasy roguelike deckbuilder. Every card you play stokes the Heat: sequence your hand, light the Blaze and climb three acts to the Hollow King.",
  statusNote: availability({
    soon: "Launching on the App Store and Google Play.",
    both: "Out now on the App Store and Google Play.",
    iosOnly: "Out now on the App Store. Google Play is next.",
    androidOnly: "Out now on Google Play. The App Store is next.",
  }),
  metaTitle: "Ember Deck: Roguelike Deckbuilder Card Game, Offline",
  metaDescription:
    "Ember Deck is a dark-fantasy roguelike deckbuilder for iPhone and Android. Stack Heat, fire Blaze finishers, 3 heroes, 120+ cards. Free, offline, no gacha.",
  features: [
    {
      title: "Every card stokes the Heat",
      body: "Each card you play adds one Heat. Play them in the right order and your Blaze cards erupt: one perfect turn can wipe the board.",
    },
    {
      title: "Three heroes, three acts",
      body: "Emberknight, Venomblade and Ashen Seer each burn Heat their own way. Climb The Ascent, The Drowned Vaults and The Cinder Throne to the Hollow King.",
    },
    {
      title: "Death is progress",
      body: "Every fight you clear pays shards and hero Mastery. Spend them on 20 permanent Sanctum upgrades, then climb again stronger.",
    },
    {
      title: "No energy timers",
      body: "The only energy is the three you spend each turn. Nothing recharges on a clock: play one run a week or ten in a night.",
    },
    {
      title: "Plays fully offline",
      body: "No account and no sign-up. The game autosaves after every room, so a tunnel or a flight never costs you a run.",
    },
    {
      title: "No gacha, no card packs",
      body: "Every card is earned by playing. Optional one-time purchases remove the between-run ads or unlock a hero early, and every hero can be earned for free.",
    },
  ],
  screenshots: [
    { src: `${SHOT}/v2/shots/en/combat-inferno.webp`, alt: "Ember Deck combat at Heat 9: a 26-damage hit lands on the Cinder Ogre while the flame meter roars beside the hand" },
    { src: `${SHOT}/v2/shots/en/sanctum.webp`, alt: "Run summary after a fall in Ember Deck: floors cleared, shards earned and a Mastery level-up" },
    { src: `${SHOT}/v2/shots/en/hero-select.webp`, alt: "Hero select screen with Emberknight, Venomblade and Ashen Seer" },
    { src: `${SHOT}/v2/shots/en/map-act2.webp`, alt: "Act II map: branching paths through the Drowned Vaults up to the Sunken Bell" },
    { src: `${SHOT}/v2/shots/en/shop.webp`, alt: "In-run shop: buy cards, relics and potions, or pay to remove a card" },
    { src: `${SHOT}/v2/shots/en/hollow-king.webp`, alt: "Final boss fight against the Hollow King on the Cinder Throne" },
    { src: `${SHOT}/v2/shots/en/reward-rare.webp`, alt: "Victory over the Ashen Warden: choose a boss relic and a rare card" },
    { src: `${SHOT}/v2/shots/en/hub.webp`, alt: "The camp between runs: Embark, Daily Run, Sanctum and quests" },
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
  // Store name and subtitle as filed in fastlane/metadata/ios/zh-Hans.
  storeName: "余烬牌组：肉鸽爬塔卡牌构筑",
  tagline: "每一张牌，都在为火添柴。",
  subtitle: "单机离线·回合制策略卡牌冒险",
  oneLiner:
    "五分钟一局的暗黑奇幻肉鸽卡牌构筑。每打出一张牌，热度就涨一分：排好出牌顺序，点燃烈焰，穿过三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "正在上架 App Store 和 Google Play。",
    both: "现已登陆 App Store 和 Google Play。",
    iosOnly: "现已登陆 App Store，Google Play 版紧随其后。",
    androidOnly: "现已登陆 Google Play，App Store 版紧随其后。",
  }),
  metaTitle: "余烬牌组：单机离线肉鸽爬塔卡牌构筑手游",
  metaDescription:
    "《余烬牌组》是一款暗黑奇幻肉鸽卡牌构筑手游：每打出一张牌叠一层热度，烈焰牌在临界点爆发。三位英雄、三幕爬塔、120 余张卡牌。免费、单机离线、没有体力、没有抽卡。",
  features: [
    {
      title: "每一张牌都在添火",
      body: "每打出一张牌，热度 +1。出牌顺序对了，烈焰牌便轰然爆发，一个完美的回合就能清空全场。",
    },
    {
      title: "三位英雄，三幕冒险",
      body: "余烬骑士、毒刃客、灰烬先知，各有各的燃法。踏上攀登之路，潜入溺亡地窖，杀上余烬王座，直面空洞之王。",
    },
    {
      title: "死亡即成长",
      body: "每打赢一场战斗都能获得碎晶和英雄专精经验。带回圣所换取 20 项永久强化，再次出发时更强。",
    },
    {
      title: "没有体力",
      body: "唯一的能量是你每回合要花掉的那三点。没有任何东西按时间恢复，一周打一局或一晚打十局都随你。",
    },
    {
      title: "完全离线可玩",
      body: "无需账号，无需注册。每个房间结束都会自动存档，钻进隧道或坐飞机断网，这一局也不会白打。",
    },
    {
      title: "没有抽卡，没有卡包",
      body: "每一张卡都靠游玩获得。可选的一次性内购能移除局间广告或提前解锁英雄，而每位英雄也都能免费解锁。",
    },
  ],
  screenshots: [
    { src: `${SHOT}/v2/shots/zh/combat-inferno.webp`, alt: "《余烬牌组》热度 9 的战斗：一击 26 点伤害落在炭烬巨魔身上，手牌旁的火焰计量表熊熊燃烧" },
    { src: `${SHOT}/v2/shots/zh/sanctum.webp`, alt: "倒下后的结算画面：通过的层数、获得的碎晶和专精升级" },
    { src: `${SHOT}/v2/shots/zh/hero-select.webp`, alt: "英雄选择画面：余烬骑士、毒刃客与灰烬先知" },
    { src: `${SHOT}/v2/shots/zh/map-act2.webp`, alt: "第二幕地图：穿过溺亡地窖、通往沉没之钟的分支路线" },
    { src: `${SHOT}/v2/shots/zh/shop.webp`, alt: "局内商店：购买卡牌、遗物和药水，或花钱移除一张牌" },
    { src: `${SHOT}/v2/shots/zh/hollow-king.webp`, alt: "在余烬王座迎战最终首领空洞之王" },
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
  // No zh-Hant store listing exists; this is the zh-Hans listing written for
  // Taiwan (Roguelike rather than the mainland 肉鸽).
  storeName: "餘燼牌組：Roguelike 爬塔卡牌構築",
  tagline: "每一張牌，都在為火添柴。",
  subtitle: "單機離線·回合制策略卡牌冒險",
  oneLiner:
    "五分鐘一局的暗黑奇幻 Roguelike 牌組構築。每打出一張牌，熱度就漲一格：排好出牌順序，點燃烈焰，穿越三幕，直抵空洞之王。",
  statusNote: availability({
    soon: "正在上架 App Store 與 Google Play。",
    both: "現已登上 App Store 與 Google Play。",
    iosOnly: "現已登上 App Store，Google Play 版緊接在後。",
    androidOnly: "現已登上 Google Play，App Store 版緊接在後。",
  }),
  metaTitle: "餘燼牌組：單機離線 Roguelike 爬塔卡牌手遊",
  metaDescription:
    "《餘燼牌組》是一款暗黑奇幻 Roguelike 牌組構築手遊：每打出一張牌疊一層熱度，烈焰牌在臨界點爆發。三位英雄、三幕爬塔、120 多張卡牌。免費、單機離線、沒有體力、沒有轉蛋。",
  features: [
    {
      title: "每一張牌都在添火",
      body: "每打出一張牌，熱度 +1。出牌順序對了，烈焰牌便轟然爆發，一個完美的回合就能清空全場。",
    },
    {
      title: "三位英雄，三幕冒險",
      body: "餘燼騎士、毒刃客、灰燼先知，各有各的燃法。踏上攀登之路，潛入溺亡地窖，殺上餘燼王座，直面空洞之王。",
    },
    {
      title: "倒下也是成長",
      body: "每打贏一場戰鬥都能拿到碎晶和英雄專精經驗。帶回聖所換取 20 項永久強化，再出發時更強。",
    },
    {
      title: "沒有體力",
      body: "唯一的能量是你每回合要花掉的那三點。沒有任何東西按時間回復，一週玩一局或一晚玩十局都隨你。",
    },
    {
      title: "完全離線可玩",
      body: "不用帳號，不用註冊。每個房間結束都會自動存檔，鑽進隧道或搭飛機斷網，這一局也不會白打。",
    },
    {
      title: "沒有轉蛋，沒有卡包",
      body: "每一張卡都靠遊玩取得。可選的一次性內購能移除局間廣告或提前解鎖英雄，而每位英雄也都能免費解鎖。",
    },
  ],
  // The game ships English + Simplified Chinese; zh-TW visitors see the
  // Simplified Chinese captures.
  screenshots: [
    { src: `${SHOT}/v2/shots/zh/combat-inferno.webp`, alt: "《餘燼牌組》熱度 9 的戰鬥：一擊 26 點傷害落在炭燼巨魔身上，手牌旁的火焰計量表熊熊燃燒" },
    { src: `${SHOT}/v2/shots/zh/sanctum.webp`, alt: "倒下後的結算畫面：通過的層數、獲得的碎晶和專精升級" },
    { src: `${SHOT}/v2/shots/zh/hero-select.webp`, alt: "英雄選擇畫面：餘燼騎士、毒刃客與灰燼先知" },
    { src: `${SHOT}/v2/shots/zh/map-act2.webp`, alt: "第二幕地圖：穿過溺亡地窖、通往沉沒之鐘的分支路線" },
    { src: `${SHOT}/v2/shots/zh/shop.webp`, alt: "局內商店：購買卡牌、遺物和藥水，或花錢移除一張牌" },
    { src: `${SHOT}/v2/shots/zh/hollow-king.webp`, alt: "在餘燼王座迎戰最終首領空洞之王" },
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
  category: "game",
  buildNumber: 9,
  version: "2.0.0",
  // Treated as released ahead of store approval (owner call, 2026-10-14).
  status: "live",
  appStoreUrl: RELEASED.ios ? APP_STORE_URL : undefined,
  playStoreUrl: RELEASED.android ? PLAY_STORE_URL : undefined,
  platforms: ["iOS", "Android"],
  icon: "/apps/ember-deck/icon.png",
  ogImage: "/apps/ember-deck/og.jpg",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).
// Game numbers are the shipped ones (app repo assets/content/*.json): hero HP
// 70/58/66, card costs, Forge Brand 2 Block, Serpent Fang 1 Poison, Hollow
// King 440 HP, 120+ cards (122), 30 enemies, 7 bosses, 42 relics, 12 potions,
// 18 events, 20 Sanctum nodes, Mastery 1–10, Ascension 1–15, 40 achievements.
// Chinese game terms follow the store listing (fastlane zh-Hans).

const anyReleased = RELEASED.ios || RELEASED.android;

/** The five cards of the playable turn; ids are fixed by the demo engine. */
export type TurnCardId = "hammer" | "slice" | "strike" | "jab" | "blade";

export interface TurnCopy {
  enemy: string;
  heat: string;
  energy: string;
  hint: string;
  blaze: string;
  /** "{dmg} dmg" style suffix after a damage preview. */
  dmgSuffix: string;
  playLabel: string;
  reset: string;
  again: string;
  perfect: string;
  short: string;
  bestOrder: string;
  /** Accessible name of the whole table. */
  label: string;
  cards: Record<TurnCardId, { name: string; text: string }>;
}

export interface HeroEntry {
  /** Art stem under v2/heroes/. */
  art: "emberknight" | "venomblade" | "ashen_seer";
  name: string;
  line: string;
  style: string;
  hp: string;
  relic: { name: string; text: string };
  cards: { name: string; text: string; cost: string }[];
  unlock: string;
}

export interface ProgressRow {
  /** Picture path under /apps/ember-deck/v2/. */
  img: string;
  name: string;
  value: string;
}

export interface EmberDeckLanding {
  nav: {
    turn: string;
    heroes: string;
    acts: string;
    progress: string;
    faq: string;
    press: string;
    write: string;
    pages: string;
  };
  hero: { line: string; sub: string; cta: string; price: string };
  turnTitle: string;
  rules: { title: string; body: string }[];
  turn: TurnCopy;
  heroesTitle: string;
  heroesIntro: string;
  heroLabels: { hp: string; relic: string; unlock: string };
  heroes: HeroEntry[];
  actsTitle: string;
  actsIntro: string;
  acts: {
    name: string;
    minutes: string;
    body: string;
    bosses: string;
    foes: [string, string, string, string];
  }[];
  bossesLabel: string;
  foesLabel: string;
  king: { name: string; hp: string; body: string };
  progressTitle: string;
  progressBody: string;
  progressGroups: { name: string; rows: ProgressRow[] }[];
  galleryTitle: string;
  galleryCount: string;
  videoLabel: string;
  free: { name: string; for: string; body: string; price: string; unit: string; cta: string };
  bundle: { name: string; for: string; body: string; price: string; unit: string; cta: string };
  faqTitle: string;
  faqs: { q: string; a: string }[];
  supportLink: string;
  pressTitle: string;
  pressBody: string[];
  pressFacts: { label: string; value: string }[];
  pressItems: { file: string; label: string; meta: string }[];
  pressZip: string;
  creditsMusic: string;
  creditsMusicBy: string;
  creditsSfx: string;
  /** MOMIZizm MUSiC's terms ask for the composer's name plus this link. */
  creditsMusicUrl: string;
  signoff: string;
  closing: string;
}

const PRESS = "/apps/ember-deck/press";
const MUSIC_URL = "https://music.storyinvention.com/en/";

const landingEn: EmberDeckLanding = {
  nav: {
    turn: "Play a turn",
    heroes: "Heroes",
    acts: "The three acts",
    progress: "Between runs",
    faq: "Questions",
    press: "Press kit",
    write: "Write to us",
    pages: "Help and policies",
  },
  hero: {
    line: "Every card feeds the fire.",
    sub: "A five-minute roguelike deckbuilder in a painted dark-fantasy world. Each card you play adds Heat. Play them in the right order and the Blaze cards erupt.",
    cta: "Play a turn",
    price: "Free to play. Offline, no energy timers, no gacha.",
  },
  turnTitle: "How a turn burns",
  rules: [
    { title: "Every card you play adds one Heat.", body: "Heat climbs card by card and resets when your next turn begins." },
    { title: "Blaze cards wait for their number.", body: "A card marked Blaze 3 fires its bonus once Heat has reached three." },
    { title: "So the order is the skill.", body: "Lead with the cheap cards, bank the Heat, land the finisher last. The Cinder Ogre on this table falls only to a perfect turn." },
  ],
  turn: {
    enemy: "Cinder Ogre",
    heat: "Heat",
    energy: "Energy",
    hint: "Tap a card to play it. You have 3 energy, and the order matters.",
    blaze: "Blaze!",
    dmgSuffix: " dmg",
    playLabel: "Play {name}, costs {cost}, deals {dmg} now",
    reset: "Reset turn",
    again: "Play the turn again",
    perfect: "Perfect turn: {dmg} damage. The Ogre falls.",
    short: "{dmg} damage. The Ogre survives. The best order deals {best}.",
    bestOrder: "Best order:",
    label: "A playable Ember Deck turn against the Cinder Ogre",
    cards: {
      hammer: { name: "Hammerfall", text: "Deal 10, +2 per Heat." },
      slice: { name: "Slice", text: "Deal 4. Blaze 2: deal 4 more." },
      strike: { name: "Strike", text: "Deal 6." },
      jab: { name: "Quick Jab", text: "Deal 5." },
      blade: { name: "Heated Blade", text: "Deal 6. Blaze 3: deal 4 more." },
    },
  },
  heroesTitle: "Three ways to burn",
  heroesIntro:
    "Every hero plays by the same Heat rules and spends the Heat differently. Emberknight is free from the first run; the other two unlock by playing.",
  heroLabels: { hp: "HP", relic: "Starter relic", unlock: "Unlock" },
  heroes: [
    {
      art: "emberknight",
      name: "Emberknight",
      line: "Every blow tempers the blade.",
      style: "A wall that hits back: Heat turns into Block and Strength.",
      hp: "70",
      relic: { name: "Forge Brand", text: "The first time Heat reaches 3 each turn, gain 2 Block." },
      cards: [
        { name: "Heated Blade", text: "Deal 6. Blaze 3: deal 4 more.", cost: "1 energy" },
        { name: "Whirlwind", text: "Deal 8 to all. Blaze 3: 4 more to all.", cost: "2 energy" },
        { name: "Hammerfall", text: "Deal 10, +2 per Heat.", cost: "2 energy" },
      ],
      unlock: "Free",
    },
    {
      art: "venomblade",
      name: "Venomblade",
      line: "A hundred small cuts. Each one burns.",
      style: "The fastest Heat in the game: zero-cost chains, Needles and Poison.",
      hp: "58",
      relic: { name: "Serpent Fang", text: "The first time Heat reaches 4 each turn, apply 1 Poison to all." },
      cards: [
        { name: "Fan of Needles", text: "Add 2 Needles to your hand.", cost: "1 energy" },
        { name: "Venom Cascade", text: "Apply 1 Poison per Heat.", cost: "1 energy" },
        { name: "Venom Surge", text: "Apply 2 Poison. Blaze 4: 7 more.", cost: "1 energy" },
      ],
      unlock: "Beat an act boss",
    },
    {
      art: "ashen_seer",
      name: "Ashen Seer",
      line: "She sees the fire before it's lit.",
      style: "Starts every turn burning, controls the fight, then takes one enormous Blaze turn.",
      hp: "66",
      relic: { name: "Kindling Eye", text: "Gain 1 Heat at the start of every turn." },
      cards: [
        { name: "Starfall", text: "Deal 12 to all. Blaze 5: 12 more.", cost: "3 energy" },
        { name: "Pillar of Ash", text: "Deal 20. Blaze 5: 20 more.", cost: "2 energy" },
        { name: "Supernova", text: "Deal 5 per Heat to all.", cost: "3 energy" },
      ],
      unlock: "Act 2 boss or Mastery 5",
    },
  ],
  actsTitle: "A run is a climb",
  actsIntro:
    "Pick your path up a branching map of fights, elites, shops, events, campfires and treasure. Each act takes six to eight minutes and the game saves after every room.",
  acts: [
    {
      name: "Act I: The Ascent",
      minutes: "6–8 min",
      body: "Rat-infested ruins and rust-lit halls. Learn the rules on the way up.",
      bosses: "The Ashen Warden or the Rotmother",
      foes: ["Grave Hound", "Mire Serpent", "Bone Archer", "Cinder Ogre"],
    },
    {
      name: "Act II: The Drowned Vaults",
      minutes: "6–8 min",
      body: "Flooded crypts under a teal glow, where Soaked raises every Blaze number by one.",
      bosses: "The Tide Matron or the Sunken Bell",
      foes: ["Drowned Rower", "Ink Wraith", "Vault Hydra", "Brine Knight"],
    },
    {
      name: "Act III: The Cinder Throne",
      minutes: "6–8 min",
      body: "Magma halls where the enemies feed you fire. Manage your Heat or burn with it.",
      bosses: "The Ashen Pyre or the Molten Herald",
      foes: ["Ember Zealot", "Magma Golem", "Cinder Harpy", "Pyre Knight"],
    },
  ],
  bossesLabel: "Boss",
  foesLabel: "On the way",
  king: {
    name: "The Hollow King",
    hp: "440 HP",
    body: "He waits at the top of every run. Most runs end before you meet him. That is the point.",
  },
  progressTitle: "Fall, then climb stronger",
  progressBody:
    "Every fight you clear pays shards and hero Mastery, whether the run ends on the throne or on the floor of Act II. No run is wasted.",
  progressGroups: [
    {
      name: "Between runs",
      rows: [
        { img: "misc/shopkeeper.webp", name: "Sanctum upgrades, bought with shards", value: "20" },
        { img: "heroes/emberknight-bust.webp", name: "Hero Mastery: new cards, card backs, skins", value: "Levels 1–10" },
        { img: "bosses/b03.webp", name: "Ascension, for when the climb should fight back", value: "15 per hero" },
        { img: "misc/cardback-ember.webp", name: "Daily Run with seeded modifiers", value: "Every day" },
        { img: "misc/cardback-founder.webp", name: "Weekly Challenge", value: "Every week" },
        { img: "misc/phoenix-brew.webp", name: "Daily quests and a 7-day calendar", value: "Daily" },
        { img: "heroes/ashen_seer-bust.webp", name: "Achievements", value: "40" },
      ],
    },
    {
      name: "In every run",
      rows: [
        { img: "art/hammerfall.webp", name: "Cards across three heroes and a neutral pool", value: "120+" },
        { img: "enemies/e10.webp", name: "Enemies, each showing its next move in numbers", value: "30" },
        { img: "bosses/b01.webp", name: "Act bosses, then the Hollow King", value: "7" },
        { img: "misc/seers-ink.webp", name: "Relics", value: "42" },
        { img: "misc/fire-flask.webp", name: "Potions", value: "12" },
        { img: "misc/venom-phial.webp", name: "Events with real trade-offs", value: "18" },
      ],
    },
  ],
  galleryTitle: "From the table",
  galleryCount: "8 screens, 26 seconds of play",
  videoLabel: "Ember Deck gameplay, 26 seconds, no sound",
  free: {
    name: "The whole game",
    for: "For everyone: every act, every hero, the Daily Run.",
    body: "No energy timers and no gacha. No card packs, no loot boxes, nothing random for money. A short ad may play between acts or runs, never in your first two runs and never in a fight, on the map or during a decision. Optional ads revive you once a run, reroll a reward, double shards or open a daily chest; they are always labelled and never required. The whole game plays offline with no account.",
    price: "Free",
    unit: "to play",
    cta: "Play a turn",
  },
  bundle: {
    name: "Founder's Bundle",
    for: "For players who want it all now.",
    body: "No forced ads, both locked heroes, the Founder card back and 300 shards. Also sold on their own: Remove forced ads ($4.99), a hero unlock ($2.99), card backs and boards ($1.99). One-time purchases, no subscriptions; US prices, your store shows local pricing. Nothing sold makes a run easier to win.",
    price: "$7.99",
    unit: "once",
    cta: "Purchase help",
  },
  faqTitle: "Straight answers",
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
      a: "About six to eight minutes an act, and three acts plus the final boss for a full run. The game autosaves after every room, so you can close it mid-fight and pick up exactly where you left off.",
    },
    {
      q: "Do I need an internet connection or an account?",
      a: "Neither. Ember Deck plays fully offline and has no account. Leaderboards and achievements through Game Center or Google Play Games are optional.",
    },
    {
      q: "When do ads appear?",
      a: "Only between acts or runs, never during a fight, and never in your first two runs. Reward ads play only when you tap them.",
    },
    {
      q: "Where is my progress saved?",
      a: "On your device. There is no cloud save, so deleting the app deletes your progress. Purchases can be restored from Settings on a new phone.",
    },
    ...(anyReleased
      ? []
      : [
          {
            q: "Where can I get it?",
            a: "Ember Deck 2.0 is launching on the App Store and Google Play. This page links straight to each store as soon as its listing is live.",
          },
        ]),
    {
      q: "Which languages are supported?",
      a: "English and Simplified Chinese.",
    },
  ],
  supportLink: "More help on the support page",
  pressTitle: "For press and creators",
  pressBody: [
    "Ember Deck is made by App Factory in Singapore. Use anything on this page in coverage, videos and streams: the icon, the logo, the key art and the Hollow King are below as files.",
    "For codes, questions or higher-resolution art, write to lei@appfactory.sg. A real person reads every message, usually within two days.",
  ],
  pressFacts: [
    { label: "Developer", value: "App Factory (Lei Cao), Singapore" },
    { label: "Genre", value: "Roguelike deckbuilder" },
    { label: "Platforms", value: "iPhone and Android" },
    { label: "Price", value: "Free, optional one-time purchases" },
    { label: "Languages", value: "English, 简体中文" },
    { label: "Release", value: anyReleased ? "Out now" : "Launching now (version 2.0)" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "App icon", meta: "PNG, 1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "Logo", meta: "PNG, transparent" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "Key art", meta: "JPG, 1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "The Hollow King", meta: "PNG, transparent" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "Social card", meta: "JPG, 1200 × 630" },
  ],
  pressZip: "Download everything (.zip)",
  creditsMusic: "Music by",
  creditsMusicBy: "もみじば (Momijiba), MOMIZizm MUSiC",
  creditsSfx: "Sound effects are original, made for Ember Deck.",
  creditsMusicUrl: MUSIC_URL,
  signoff: "App Factory, Singapore",
  closing: "One more run. Always one more run.",
};

const landingZhCn: EmberDeckLanding = {
  nav: {
    turn: "试打一回合",
    heroes: "英雄",
    acts: "三幕冒险",
    progress: "局与局之间",
    faq: "常见问题",
    press: "媒体资料",
    write: "写信给我们",
    pages: "帮助与条款",
  },
  hero: {
    line: "每一张牌，都在为火添柴。",
    sub: "暗黑奇幻手绘世界里，五分钟一局的肉鸽卡牌构筑。每打出一张牌，热度就涨一分；出牌顺序对了，烈焰牌便轰然爆发。",
    cta: "试打一回合",
    price: "免费游玩。单机离线，没有体力，没有抽卡。",
  },
  turnTitle: "一个回合怎样烧起来",
  rules: [
    { title: "每打出一张牌，热度 +1。", body: "热度一张一张往上涨，到你的下个回合开始时归零。" },
    { title: "烈焰牌，在等它的数字。", body: "标着「烈焰 3」的牌，要等热度达到 3 才会额外爆发。" },
    { title: "所以，顺序就是技术。", body: "先出便宜的牌攒热度，最后再打出终结技。这张牌桌上的炭烬巨魔，只有完美的一回合才能打倒。" },
  ],
  turn: {
    enemy: "炭烬巨魔",
    heat: "热度",
    energy: "能量",
    hint: "点按卡牌即可打出。你有 3 点能量，顺序很重要。",
    blaze: "烈焰！",
    dmgSuffix: " 伤害",
    playLabel: "打出{name}，消耗 {cost}，现在造成 {dmg} 点伤害",
    reset: "重置回合",
    again: "再打一次",
    perfect: "完美回合：{dmg} 点伤害，巨魔倒下了。",
    short: "{dmg} 点伤害，巨魔还站着。最佳顺序能打出 {best} 点。",
    bestOrder: "最佳顺序：",
    label: "可以试玩的《余烬牌组》回合：对战炭烬巨魔",
    cards: {
      hammer: { name: "重锤落", text: "造成 10 点伤害，每点热度 +2。" },
      slice: { name: "切割", text: "造成 4 点伤害。烈焰 2：再造成 4 点。" },
      strike: { name: "挥砍", text: "造成 6 点伤害。" },
      jab: { name: "快拳", text: "造成 5 点伤害。" },
      blade: { name: "炽热之刃", text: "造成 6 点伤害。烈焰 3：再造成 4 点。" },
    },
  },
  heroesTitle: "三种燃烧的方式",
  heroesIntro:
    "三位英雄遵循同一套热度规则，用法却各不相同。余烬骑士第一局即可使用，另外两位靠游玩解锁。",
  heroLabels: { hp: "生命", relic: "初始遗物", unlock: "解锁" },
  heroes: [
    {
      art: "emberknight",
      name: "余烬骑士",
      line: "每一击都在淬炼刀锋。",
      style: "攻守一体的铁壁：热度化为格挡与力量。",
      hp: "70",
      relic: { name: "锻炉烙印", text: "每回合热度首次达到 3 时，获得 2 点格挡。" },
      cards: [
        { name: "炽热之刃", text: "造成 6 点伤害。烈焰 3：再造成 4 点。", cost: "1 能量" },
        { name: "旋风斩", text: "对所有敌人造成 8 点伤害。烈焰 3：再造成 4 点。", cost: "2 能量" },
        { name: "重锤落", text: "造成 10 点伤害，每点热度 +2。", cost: "2 能量" },
      ],
      unlock: "免费",
    },
    {
      art: "venomblade",
      name: "毒刃客",
      line: "千百道细小的伤口，每一道都在灼烧。",
      style: "全游戏升温最快：零费连击、漫天飞针与层层中毒。",
      hp: "58",
      relic: { name: "蛇牙", text: "每回合热度首次达到 4 时，对所有敌人施加 1 层中毒。" },
      cards: [
        { name: "飞针扇", text: "将 2 张飞针加入手牌。", cost: "1 能量" },
        { name: "毒液倾泻", text: "每点热度施加 1 层中毒。", cost: "1 能量" },
        { name: "毒液涌动", text: "施加 2 层中毒。烈焰 4：再施加 7 层。", cost: "1 能量" },
      ],
      unlock: "击败一位幕首领",
    },
    {
      art: "ashen_seer",
      name: "灰烬先知",
      line: "火焰未起，她已先见。",
      style: "每回合开局就带着热度，控住战局，再打出一个惊天动地的烈焰回合。",
      hp: "66",
      relic: { name: "引火之眼", text: "每回合开始时获得 1 点热度。" },
      cards: [
        { name: "星陨", text: "对所有敌人造成 12 点伤害。烈焰 5：再造成 12 点。", cost: "3 能量" },
        { name: "灰烬之柱", text: "造成 20 点伤害。烈焰 5：再造成 20 点。", cost: "2 能量" },
        { name: "超新星", text: "每点热度对所有敌人造成 5 点伤害。", cost: "3 能量" },
      ],
      unlock: "第二幕首领或专精 5 级",
    },
  ],
  actsTitle: "每一局都是一次攀登",
  actsIntro:
    "在分支地图上选择路线：普通战斗、精英、商店、事件、营火与宝藏。每一幕约 6～8 分钟，每个房间结束都会自动存档。",
  acts: [
    {
      name: "第一幕：攀登之路",
      minutes: "6～8 分钟",
      body: "鼠群出没的废墟与锈光笼罩的大厅。一边往上爬，一边学会规则。",
      bosses: "灰烬守望者或腐化之母",
      foes: ["墓穴猎犬", "泥沼巨蛇", "骸骨弓手", "炭烬巨魔"],
    },
    {
      name: "第二幕：溺亡地窖",
      minutes: "6～8 分钟",
      body: "青光幽幽的水下墓穴，浸湿会让每一个烈焰门槛 +1。",
      bosses: "潮汐主母或沉没之钟",
      foes: ["溺亡桨手", "墨影幽魂", "地窖九头蛇", "盐水骑士"],
    },
    {
      name: "第三幕：余烬王座",
      minutes: "6～8 分钟",
      body: "熔岩大厅里，敌人会往你手里塞火。控制好热度，否则引火烧身。",
      bosses: "灰烬火葬堆或熔岩先驱",
      foes: ["余烬狂信徒", "岩浆魔像", "余烬鸟妖", "火葬骑士"],
    },
  ],
  bossesLabel: "首领",
  foesLabel: "沿途敌人",
  king: {
    name: "空洞之王",
    hp: "440 生命",
    body: "他在每一局的顶端等你。大多数时候，你还没见到他就倒下了。这正是乐趣所在。",
  },
  progressTitle: "倒下了，再爬时更强",
  progressBody:
    "每打赢一场战斗都会获得碎晶和英雄专精经验，无论这一局是登上王座，还是倒在第二幕。没有一局是白打的。",
  progressGroups: [
    {
      name: "局与局之间",
      rows: [
        { img: "misc/shopkeeper.webp", name: "圣所强化，用碎晶解锁", value: "20 项" },
        { img: "heroes/emberknight-bust.webp", name: "英雄专精：新卡牌、卡背与皮肤", value: "1～10 级" },
        { img: "bosses/b03.webp", name: "晋升难度，给想要更大挑战的你", value: "每位英雄 15 级" },
        { img: "misc/cardback-ember.webp", name: "每日挑战，固定种子与随机词缀", value: "每天" },
        { img: "misc/cardback-founder.webp", name: "每周挑战", value: "每周" },
        { img: "misc/phoenix-brew.webp", name: "每日任务与 7 日签到", value: "每天" },
        { img: "heroes/ashen_seer-bust.webp", name: "成就", value: "40 个" },
      ],
    },
    {
      name: "每一局里",
      rows: [
        { img: "art/hammerfall.webp", name: "卡牌：三位英雄加中立卡池", value: "120 余张" },
        { img: "enemies/e10.webp", name: "敌人，下一步行动都用数字亮出", value: "30 种" },
        { img: "bosses/b01.webp", name: "幕首领，外加空洞之王", value: "7 位" },
        { img: "misc/seers-ink.webp", name: "遗物", value: "42 件" },
        { img: "misc/fire-flask.webp", name: "药水", value: "12 种" },
        { img: "misc/venom-phial.webp", name: "有真实取舍的事件", value: "18 个" },
      ],
    },
  ],
  galleryTitle: "牌桌实况",
  galleryCount: "8 张截图，26 秒实机画面",
  videoLabel: "《余烬牌组》实机画面，26 秒，无声",
  free: {
    name: "完整游戏",
    for: "给每一个人：全部三幕、每一位英雄、每日挑战。",
    body: "没有体力，没有抽卡。没有卡包，没有开箱，不卖任何随机奖励。短广告只会出现在幕与幕、局与局之间，前两局完全没有，战斗、地图和做决定时绝不打扰。可选的激励广告能让你每局复活一次、重抽奖励、碎晶翻倍或打开每日宝箱，都有明确标注，从不强制。整款游戏离线可玩，无需账号。",
    price: "免费",
    unit: "游玩",
    cta: "试打一回合",
  },
  bundle: {
    name: "创始者礼包",
    for: "给想一次拥有全部的玩家。",
    body: "移除强制广告、解锁两位英雄、创始者卡背和 300 碎晶。也可单独购买：移除强制广告（$4.99）、英雄解锁（$2.99）、卡背与牌桌（$1.99）。全部为一次性购买，没有订阅；以上为美区价格，实际以商店显示的本地价格为准。付费内容不会让你更容易通关。",
    price: "$7.99",
    unit: "一次性",
    cta: "购买相关帮助",
  },
  faqTitle: "直接的回答",
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
      a: "每一幕大约六到八分钟，一整局是三幕加最终首领。每个房间结束都会自动存档，战斗中途关掉游戏，下次也能从原处继续。",
    },
    {
      q: "需要联网或注册账号吗？",
      a: "都不需要。《余烬牌组》完全离线可玩，也没有账号系统。Game Center 或 Google Play 游戏的排行榜和成就是可选的。",
    },
    {
      q: "广告什么时候出现？",
      a: "只在幕与幕、局与局之间出现，绝不会在战斗中打断你，前两局也完全没有。激励广告只有你主动点按才会播放。",
    },
    {
      q: "进度保存在哪里？",
      a: "保存在你的设备上，没有云端存档，删除应用会同时删除进度。换新手机后，可以在设置中恢复购买。",
    },
    ...(anyReleased
      ? []
      : [
          {
            q: "在哪里下载？",
            a: "《余烬牌组》2.0 正在上架 App Store 和 Google Play。商店页面一上线，本页就会直接链接过去。",
          },
        ]),
    {
      q: "支持哪些语言？",
      a: "英文和简体中文。",
    },
  ],
  supportLink: "更多帮助请见支持页面",
  pressTitle: "给媒体与创作者",
  pressBody: [
    "《余烬牌组》由新加坡的 App Factory 制作。欢迎在报道、视频和直播中使用本页的任何内容：应用图标、标志、主视觉和空洞之王都在下面，可以直接下载。",
    "如需兑换码、有任何问题或需要更高分辨率的美术，请写信至 lei@appfactory.sg。每一封都有真人阅读，通常两天内回复。",
  ],
  pressFacts: [
    { label: "开发者", value: "App Factory（Lei Cao），新加坡" },
    { label: "类型", value: "肉鸽卡牌构筑" },
    { label: "平台", value: "iPhone 与 Android" },
    { label: "价格", value: "免费，含可选一次性内购" },
    { label: "语言", value: "English、简体中文" },
    { label: "上线", value: anyReleased ? "已上线" : "正在上架（2.0 版）" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "应用图标", meta: "PNG，1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "标志", meta: "PNG，透明背景" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "主视觉", meta: "JPG，1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "空洞之王", meta: "PNG，透明背景" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "社交分享图", meta: "JPG，1200 × 630" },
  ],
  pressZip: "打包下载全部素材（.zip）",
  creditsMusic: "音乐：",
  creditsMusicBy: "もみじば (Momijiba)，MOMIZizm MUSiC",
  creditsSfx: "音效为《余烬牌组》原创制作。",
  creditsMusicUrl: MUSIC_URL,
  signoff: "App Factory，新加坡",
  closing: "再来一局。永远想再来一局。",
};

const landingZhTw: EmberDeckLanding = {
  nav: {
    turn: "試打一回合",
    heroes: "英雄",
    acts: "三幕冒險",
    progress: "局與局之間",
    faq: "常見問題",
    press: "媒體資料",
    write: "寫信給我們",
    pages: "說明與條款",
  },
  hero: {
    line: "每一張牌，都在為火添柴。",
    sub: "暗黑奇幻手繪世界裡，五分鐘一局的 Roguelike 牌組構築。每打出一張牌，熱度就漲一格；出牌順序對了，烈焰牌便轟然爆發。",
    cta: "試打一回合",
    price: "免費遊玩。單機離線，沒有體力，沒有轉蛋。",
  },
  turnTitle: "一個回合怎麼燒起來",
  rules: [
    { title: "每打出一張牌，熱度 +1。", body: "熱度一張一張往上漲，到你的下個回合開始時歸零。" },
    { title: "烈焰牌，在等它的數字。", body: "標著「烈焰 3」的牌，要等熱度到 3 才會額外爆發。" },
    { title: "所以，順序就是技術。", body: "先出便宜的牌累積熱度，最後再打出終結技。這張牌桌上的炭燼巨魔，只有完美的一回合才打得倒。" },
  ],
  turn: {
    enemy: "炭燼巨魔",
    heat: "熱度",
    energy: "能量",
    hint: "點一下卡牌就能打出。你有 3 點能量，順序很重要。",
    blaze: "烈焰！",
    dmgSuffix: " 傷害",
    playLabel: "打出{name}，消耗 {cost}，現在造成 {dmg} 點傷害",
    reset: "重來這回合",
    again: "再打一次",
    perfect: "完美回合：{dmg} 點傷害，巨魔倒下了。",
    short: "{dmg} 點傷害，巨魔還站著。最佳順序能打出 {best} 點。",
    bestOrder: "最佳順序：",
    label: "可以試玩的《餘燼牌組》回合：對戰炭燼巨魔",
    cards: {
      hammer: { name: "重錘落", text: "造成 10 點傷害，每點熱度 +2。" },
      slice: { name: "切割", text: "造成 4 點傷害。烈焰 2：再造成 4 點。" },
      strike: { name: "揮砍", text: "造成 6 點傷害。" },
      jab: { name: "快拳", text: "造成 5 點傷害。" },
      blade: { name: "熾熱之刃", text: "造成 6 點傷害。烈焰 3：再造成 4 點。" },
    },
  },
  heroesTitle: "三種燃燒的方式",
  heroesIntro:
    "三位英雄遵循同一套熱度規則，用法卻各不相同。餘燼騎士第一局就能使用，另外兩位靠遊玩解鎖。",
  heroLabels: { hp: "生命", relic: "初始遺物", unlock: "解鎖" },
  heroes: [
    {
      art: "emberknight",
      name: "餘燼騎士",
      line: "每一擊都在淬鍊刀鋒。",
      style: "攻守一體的鐵壁：熱度化為格擋與力量。",
      hp: "70",
      relic: { name: "鍛爐烙印", text: "每回合熱度首次達到 3 時，獲得 2 點格擋。" },
      cards: [
        { name: "熾熱之刃", text: "造成 6 點傷害。烈焰 3：再造成 4 點。", cost: "1 能量" },
        { name: "旋風斬", text: "對所有敵人造成 8 點傷害。烈焰 3：再造成 4 點。", cost: "2 能量" },
        { name: "重錘落", text: "造成 10 點傷害，每點熱度 +2。", cost: "2 能量" },
      ],
      unlock: "免費",
    },
    {
      art: "venomblade",
      name: "毒刃客",
      line: "千百道細小的傷口，每一道都在灼燒。",
      style: "全遊戲升溫最快：零費連擊、漫天飛針與層層中毒。",
      hp: "58",
      relic: { name: "蛇牙", text: "每回合熱度首次達到 4 時，對所有敵人施加 1 層中毒。" },
      cards: [
        { name: "飛針扇", text: "將 2 張飛針加入手牌。", cost: "1 能量" },
        { name: "毒液傾瀉", text: "每點熱度施加 1 層中毒。", cost: "1 能量" },
        { name: "毒液湧動", text: "施加 2 層中毒。烈焰 4：再施加 7 層。", cost: "1 能量" },
      ],
      unlock: "擊敗一位幕首領",
    },
    {
      art: "ashen_seer",
      name: "灰燼先知",
      line: "火焰未起，她已先見。",
      style: "每回合開局就帶著熱度，控住戰局，再打出一個驚天動地的烈焰回合。",
      hp: "66",
      relic: { name: "引火之眼", text: "每回合開始時獲得 1 點熱度。" },
      cards: [
        { name: "星隕", text: "對所有敵人造成 12 點傷害。烈焰 5：再造成 12 點。", cost: "3 能量" },
        { name: "灰燼之柱", text: "造成 20 點傷害。烈焰 5：再造成 20 點。", cost: "2 能量" },
        { name: "超新星", text: "每點熱度對所有敵人造成 5 點傷害。", cost: "3 能量" },
      ],
      unlock: "第二幕首領或專精 5 級",
    },
  ],
  actsTitle: "每一局都是一次攀登",
  actsIntro:
    "在分支地圖上選擇路線：一般戰鬥、菁英、商店、事件、營火與寶藏。每一幕約 6～8 分鐘，每個房間結束都會自動存檔。",
  acts: [
    {
      name: "第一幕：攀登之路",
      minutes: "6～8 分鐘",
      body: "鼠群出沒的廢墟與鏽光籠罩的大廳。一邊往上爬，一邊學會規則。",
      bosses: "灰燼守望者或腐化之母",
      foes: ["墓穴獵犬", "泥沼巨蛇", "骸骨弓手", "炭燼巨魔"],
    },
    {
      name: "第二幕：溺亡地窖",
      minutes: "6～8 分鐘",
      body: "青光幽幽的水下墓穴，浸濕會讓每一個烈焰門檻 +1。",
      bosses: "潮汐主母或沉沒之鐘",
      foes: ["溺亡槳手", "墨影幽魂", "地窖九頭蛇", "鹽水騎士"],
    },
    {
      name: "第三幕：餘燼王座",
      minutes: "6～8 分鐘",
      body: "熔岩大廳裡，敵人會往你手裡塞火。控制好熱度，否則引火自焚。",
      bosses: "灰燼火葬堆或熔岩先驅",
      foes: ["餘燼狂信徒", "岩漿魔像", "餘燼鳥妖", "火葬騎士"],
    },
  ],
  bossesLabel: "首領",
  foesLabel: "沿途敵人",
  king: {
    name: "空洞之王",
    hp: "440 生命",
    body: "他在每一局的頂端等你。大多數時候，你還沒見到他就倒下了。這正是樂趣所在。",
  },
  progressTitle: "倒下了，再爬時更強",
  progressBody:
    "每打贏一場戰鬥都會拿到碎晶和英雄專精經驗，不論這一局是登上王座，還是倒在第二幕。沒有一局是白打的。",
  progressGroups: [
    {
      name: "局與局之間",
      rows: [
        { img: "misc/shopkeeper.webp", name: "聖所強化，用碎晶解鎖", value: "20 項" },
        { img: "heroes/emberknight-bust.webp", name: "英雄專精：新卡牌、卡背與造型", value: "1～10 級" },
        { img: "bosses/b03.webp", name: "晉升難度，給想要更大挑戰的你", value: "每位英雄 15 級" },
        { img: "misc/cardback-ember.webp", name: "每日挑戰，固定種子與隨機詞綴", value: "每天" },
        { img: "misc/cardback-founder.webp", name: "每週挑戰", value: "每週" },
        { img: "misc/phoenix-brew.webp", name: "每日任務與 7 日簽到", value: "每天" },
        { img: "heroes/ashen_seer-bust.webp", name: "成就", value: "40 個" },
      ],
    },
    {
      name: "每一局裡",
      rows: [
        { img: "art/hammerfall.webp", name: "卡牌：三位英雄加中立卡池", value: "120 多張" },
        { img: "enemies/e10.webp", name: "敵人，下一步行動都用數字亮出", value: "30 種" },
        { img: "bosses/b01.webp", name: "幕首領，外加空洞之王", value: "7 位" },
        { img: "misc/seers-ink.webp", name: "遺物", value: "42 件" },
        { img: "misc/fire-flask.webp", name: "藥水", value: "12 種" },
        { img: "misc/venom-phial.webp", name: "有真實取捨的事件", value: "18 個" },
      ],
    },
  ],
  galleryTitle: "牌桌實況",
  galleryCount: "8 張截圖，26 秒實機畫面",
  videoLabel: "《餘燼牌組》實機畫面，26 秒，無聲",
  free: {
    name: "完整遊戲",
    for: "給每一個人：全部三幕、每一位英雄、每日挑戰。",
    body: "沒有體力，沒有轉蛋。沒有卡包，沒有開箱，不賣任何隨機獎勵。短廣告只會出現在幕與幕、局與局之間，前兩局完全沒有，戰鬥、地圖和做決定時絕不打擾。可選的獎勵廣告能讓你每局復活一次、重抽獎勵、碎晶加倍或打開每日寶箱，都有清楚標示，從不強制。整款遊戲離線可玩，不用帳號。",
    price: "免費",
    unit: "遊玩",
    cta: "試打一回合",
  },
  bundle: {
    name: "創始者禮包",
    for: "給想一次擁有全部的玩家。",
    body: "移除強制廣告、解鎖兩位英雄、創始者卡背和 300 碎晶。也可以單獨購買：移除強制廣告（US$4.99）、英雄解鎖（US$2.99）、卡背與牌桌（US$1.99）。全部是一次性購買，沒有訂閱；以上為美國區價格，實際以商店顯示的當地價格為準。付費內容不會讓你更容易破關。",
    price: "US$7.99",
    unit: "一次性",
    cta: "購買相關說明",
  },
  faqTitle: "直接的回答",
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
      a: "每一幕大約六到八分鐘，一整局是三幕加最終首領。每個房間結束都會自動存檔，戰鬥中途關掉遊戲，下次也能從原處繼續。",
    },
    {
      q: "需要連網或註冊帳號嗎？",
      a: "都不需要。《餘燼牌組》完全離線可玩，也沒有帳號系統。Game Center 或 Google Play 遊戲的排行榜和成就是可選的。",
    },
    {
      q: "廣告什麼時候出現？",
      a: "只在幕與幕、局與局之間出現，絕不會在戰鬥中打斷你，前兩局也完全沒有。獎勵廣告只有你主動點按才會播放。",
    },
    {
      q: "進度存在哪裡？",
      a: "存在你的裝置上，沒有雲端存檔，刪除 App 會一併刪除進度。換新手機後，可以在設定中恢復購買。",
    },
    ...(anyReleased
      ? []
      : [
          {
            q: "在哪裡下載？",
            a: "《餘燼牌組》2.0 正在上架 App Store 與 Google Play。商店頁面一上線，本頁就會直接連過去。",
          },
        ]),
    {
      q: "支援哪些語言？",
      a: "英文和簡體中文。",
    },
  ],
  supportLink: "更多說明請見支援頁面",
  pressTitle: "給媒體與創作者",
  pressBody: [
    "《餘燼牌組》由新加坡的 App Factory 製作。歡迎在報導、影片和直播中使用本頁的任何內容：App 圖示、標誌、主視覺和空洞之王都在下方，可以直接下載。",
    "如需兌換碼、有任何問題或需要更高解析度的美術，請寫信至 lei@appfactory.sg。每一封都有真人閱讀，通常兩天內回覆。",
  ],
  pressFacts: [
    { label: "開發者", value: "App Factory（Lei Cao），新加坡" },
    { label: "類型", value: "Roguelike 牌組構築" },
    { label: "平台", value: "iPhone 與 Android" },
    { label: "價格", value: "免費，含可選一次性內購" },
    { label: "語言", value: "English、簡體中文" },
    { label: "上線", value: anyReleased ? "已上線" : "正在上架（2.0 版）" },
  ],
  pressItems: [
    { file: `${PRESS}/ember-deck-icon-1024.png`, label: "App 圖示", meta: "PNG，1024 × 1024" },
    { file: `${PRESS}/ember-deck-logo.png`, label: "標誌", meta: "PNG，透明背景" },
    { file: `${PRESS}/ember-deck-key-art.jpg`, label: "主視覺", meta: "JPG，1080 × 1920" },
    { file: `${PRESS}/ember-deck-hollow-king.png`, label: "空洞之王", meta: "PNG，透明背景" },
    { file: `${PRESS}/ember-deck-social-card.jpg`, label: "社群分享圖", meta: "JPG，1200 × 630" },
  ],
  pressZip: "打包下載全部素材（.zip）",
  creditsMusic: "音樂：",
  creditsMusicBy: "もみじば (Momijiba)，MOMIZizm MUSiC",
  creditsSfx: "音效為《餘燼牌組》原創製作。",
  creditsMusicUrl: MUSIC_URL,
  signoff: "App Factory，新加坡",
  closing: "再來一局。永遠還想再來一局。",
};

export const emberDeckLanding: Record<Locale, EmberDeckLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};

/** True once at least one store build is public — drives release-only copy. */
export const emberDeckReleased = anyReleased;
