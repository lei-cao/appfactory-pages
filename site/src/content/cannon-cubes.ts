// Cannon Cubes (apps/game-hall in the appfactory repo, bundle id
// sg.appfactory.gameHall, HALL-1): registry content in all three locales for
// cannon-cubes.appfactory.sg, rendered by the shared plain shell and landing
// (components/sites/cannon-cubes/site.tsx) with the shared privacy and support
// pages. Unreleased: status "building", no store links until the App Store
// record exists. Claims are limited to what version 1.0.0 contains: Classic
// Daily Harbour and Cargo Run, aim-and-fire input, Big Shot, powder kegs, physics cubes,
// no purchases, no accounts. HALL-8 (Harbour 1.0.0 build): Google AdMob ads (rewarded
// and interstitial, UMP consent, ATT), Firebase Analytics + Crashlytics, local
// notifications; the privacy policy and the ads/data claims below say so.
// Names and mode labels follow the in-app strings (translations/strings.csv).
// Listing text: apps/game-hall/fastlane/metadata/ios/<locale>/.

import type { AppContent, AppLocalized } from "./apps";

/** The App Store seller of the studio account (same as Popline's privacy page). */
const DEVELOPER = "APPFACTORY STUDIO PTE. LTD.";
const UPDATED = "2026-11-21";

const en: AppLocalized = {
  name: "Cannon Cubes",
  storeName: "Cannon Cubes: Block Puzzle",
  tagline: "You never drag a piece. The cannon delivers it.",
  subtitle: "Aim, fire, clear the grid",
  oneLiner:
    "A 3D block puzzle on an 8x8 board: aim, and a brass cannon fires every piece into place. Full rows and columns break apart into physics cubes that splash into the sea.",
  statusNote: "In development. Coming to the App Store for iPhone.",
  metaTitle: "Cannon Cubes: Block Puzzle. Aim, fire, clear the grid",
  metaDescription:
    "A 3D block puzzle where a cannon fires every piece onto the board and cleared lines break into physics cubes. Classic, Daily Harbour and 40 Cargo Run levels. No purchases, no account.",
  features: [
    {
      title: "Aim, never drag",
      body: "Touch the board and a ghost shows where the piece will land. Slide to adjust and lift to fire, or tap a glowing target and let the cannon do the rest.",
    },
    {
      title: "Lines break apart",
      body: "A full row or column bursts into small physics cubes that tumble off the raft and splash into the harbour.",
    },
    {
      title: "Charge a Big Shot",
      body: "Every cleared line charges the cannon. A full charge gives you a cannonball that knocks out a 3x3 area.",
    },
    {
      title: "Powder keg chains",
      body: "A keg cube takes out the eight cubes around it when its line clears, and kegs next to kegs set each other off.",
    },
    {
      title: "Classic, Daily Harbour, Cargo Run",
      body: "Play an endless run for your best score, a new seeded board each day with a daily best and a streak, or 40 Cargo Run levels where you clear every crate within a shot limit.",
    },
    {
      title: "No account, progress on your device",
      body: "No sign-up. Scores and settings stay on your device. English, Simplified Chinese and Traditional Chinese.",
    },
  ],
  screenshots: [],
  trust: {
    title: "No purchases, no account, ads you choose",
    body: "There is nothing to buy and no account. The game shows ads from Google AdMob: videos you choose to watch for bonus tokens, and short ads between rounds, never during play. It uses Firebase for anonymous game statistics and crash reports. The privacy policy lists what is collected.",
  },
  faqs: [
    {
      q: "Do I need an internet connection?",
      a: "No. The game plays offline; ads, game statistics and crash reports need a connection and simply wait when there is none.",
    },
    {
      q: "Are there ads or in-app purchases?",
      a: "There is nothing to buy. There are ads: optional reward videos and short ads between rounds, never during play.",
    },
    {
      q: "Where are my scores and my unfinished run kept?",
      a: "Only on your device. We never receive them, so deleting the app removes them.",
    },
    {
      q: "How do I aim?",
      a: "Touch the board, slide to move the ghost to a spot that fits, and lift your finger to fire. You can also tap a glowing target, or tap the cannon to fire at the best spot.",
    },
    {
      q: "What is Daily Harbour?",
      a: "A new seeded board every day, with a scatter of cubes to play around, a best score for the day and a streak of the days you have played.",
    },
    {
      q: "Which languages does it support?",
      a: "English, Simplified Chinese and Traditional Chinese. Set the language in the menu, or follow the system language.",
    },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "Overview",
        body: [
          "Cannon Cubes is a game that works on your device. It has no accounts and never asks for your name, email or contacts. To show ads and to keep the game working well, it uses two Google services, described below. We do not sell your data.",
        ],
      },
      {
        heading: "Ads: Google AdMob",
        body: [
          "The game shows ads from Google AdMob: videos you choose to watch for bonus tokens, and short full-screen ads between rounds, never during play. There are no banners.",
          "To choose and measure ads, AdMob receives information about your device (model, system version, language), the ads you see and tap, and an approximate location derived from your IP address. It receives your device's advertising identifier only if you allow tracking when the app asks (App Tracking Transparency, asked once, after your first round). If you decline, the game and its ads work the same; the ads are just not personalised. You can change this any time in the iPhone's Settings > Privacy & Security > Tracking.",
          "In the European Economic Area, the UK and Switzerland, Google's consent form asks for your choice before any ad is requested, and you can change it later in the game's Settings > Privacy choices.",
          "Google's own policy explains how it uses this data: https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "Game statistics and crash reports: Firebase",
        body: [
          "The game sends game events to Firebase Analytics (for example a level started or finished, how long it took, which place was opened, whether an ad was shown) and crash reports to Firebase Crashlytics, so we can fix problems and balance the levels. These are tied to a random app-instance identifier, not to your name, and we use them only in aggregate. Google processes them for us: https://firebase.google.com/support/privacy",
          "If the game was installed from an Apple Search Ads campaign, Apple's attribution service tells us which campaign (no personal data).",
        ],
      },
      {
        heading: "What stays on your device",
        body: [
          "Your progress, scores, tokens, projects and settings (sound, music, haptics, language, reminders) are saved in the app's own storage on your device. We cannot see them, and they are removed when you delete the app.",
        ],
      },
      {
        heading: "Notifications and permissions",
        body: [
          "The game may ask once to send local reminders (for example that the daily challenge is ready). They are scheduled on your device; there is no push server. At most one a day, never at night, and you can turn them off in the game's settings or in the iPhone's Settings.",
          "It asks for no other permissions: no camera, microphone, photos, contacts or precise location. There are no in-app purchases.",
          "If you open this page from the app's menu, your browser loads it. That visit is between your browser and this website, not the game.",
        ],
      },
      {
        heading: "Children",
        body: [
          "The game is not directed at children under 13 and we do not knowingly collect personal information from them. If you believe a child has used the game and want data removed, contact us below.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If this changes, we will update this page and the date above, and the app's store listing will show the change.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about this policy: lei@appfactory.sg."],
      },
    ],
  },
};

const zhCn: AppLocalized = {
  name: "Cannon Cubes",
  storeName: "Cannon Cubes：方块大炮解谜",
  tagline: "你从不拖动方块，大炮替你送到位。",
  subtitle: "瞄准、开炮、消除整行整列",
  oneLiner:
    "一款 8x8 棋盘上的 3D 方块解谜游戏：你来瞄准，黄铜大炮把每一块打到位。整行整列会碎成物理小方块，落进海里。",
  statusNote: "开发中，即将登陆 iPhone 版 App Store。",
  metaTitle: "Cannon Cubes：方块大炮解谜，瞄准、开炮、消除整行整列",
  metaDescription:
    "一款 3D 方块解谜游戏：大炮把每一块打上棋盘，消除的行列碎成物理小方块。经典模式、每日港湾和 40 关货箱关卡。无内购，无需账号。",
  features: [
    {
      title: "只瞄准，不拖动",
      body: "按住棋盘，虚影会显示方块将落在哪里。滑动调整、松手开炮；也可以点一个发光目标，剩下的交给大炮。",
    },
    {
      title: "整行整列碎开",
      body: "填满一整行或一整列，它会炸成许多小物理方块，从木筏上滚落，扑通掉进港湾。",
    },
    {
      title: "攒一发重炮",
      body: "每消除一行都会给大炮充能，充满后得到一颗能打掉 3x3 范围的炮弹。",
    },
    {
      title: "火药桶连锁",
      body: "火药桶所在的行列消除时，会炸掉周围八格；紧挨着的火药桶还会接连引爆。",
    },
    {
      title: "经典模式、每日港湾、货箱关卡",
      body: "经典模式是刷最高分的无尽挑战；每日港湾每天一个新棋盘，有当日最高分和连续天数；货箱关卡共 40 关，要在限定的炮弹数内清掉所有木箱。",
    },
    {
      title: "无需账号，进度留在设备上",
      body: "无需注册，分数和设置只保存在你的设备上。支持英文、简体中文和繁体中文。",
    },
  ],
  screenshots: [],
  trust: {
    title: "无内购，无需账号，广告由你选择",
    body: "没有需要购买的内容，也没有账号。游戏会展示 Google AdMob 广告：可自愿观看以获得奖励代币的视频，以及回合之间的短广告，游戏进行中绝不出现。游戏使用 Firebase 收集匿名的游戏统计和崩溃报告。具体收集内容见隐私政策。",
  },
  faqs: [
    { q: "需要联网吗？", a: "不需要，游戏可以离线玩；广告、游戏统计和崩溃报告需要网络，没网时会等待。" },
    { q: "有广告或内购吗？", a: "没有需要购买的内容。有广告：可自愿观看的奖励视频，以及回合之间的短广告，游戏进行中不会出现。" },
    { q: "我的分数和未完成的一局存在哪里？", a: "只在你的设备上。我们不会收到这些数据，删除应用即会一并清除。" },
    {
      q: "怎么瞄准？",
      a: "按住棋盘，滑动让虚影移到能放下的位置，松开手指开炮。也可以点一个发光目标，或点大炮直接打向最佳位置。",
    },
    { q: "每日港湾是什么？", a: "每天一个新的棋盘，开局散落着一些方块；有当日最高分，以及记录你玩了多少天的连续天数。" },
    { q: "支持哪些语言？", a: "英文、简体中文和繁体中文。可以在菜单里设置语言，也可以跟随系统语言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: [
          "Cannon Cubes 是一款在你的设备上运行的游戏。它没有账号，也不会索取你的姓名、邮箱或通讯录。为了展示广告并让游戏稳定运行，它使用下面说明的两项 Google 服务。我们不会出售你的数据。",
        ],
      },
      {
        heading: "广告：Google AdMob",
        body: [
          "游戏会展示 Google AdMob 的广告：你可以自愿观看以获得奖励代币的视频，以及回合之间的全屏短广告，游戏进行中绝不出现。没有横幅广告。",
          "为了选择和衡量广告，AdMob 会收到你设备的信息（型号、系统版本、语言）、你看到和点击的广告，以及根据 IP 地址推算的大致位置。只有当你在应用询问时允许跟踪（App 跟踪透明度，在你完成第一局后询问一次），它才会收到设备的广告标识符。若你拒绝，游戏和广告照常运行，只是广告不会个性化。你可以随时在 iPhone 的“设置 > 隐私与安全性 > 跟踪”中更改。",
          "在欧洲经济区、英国和瑞士，请求任何广告之前会先由 Google 的同意表单询问你的选择，之后可在游戏的“设置 > 隐私选项”中更改。",
          "Google 的政策说明了它如何使用这些数据：https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "游戏统计与崩溃报告：Firebase",
        body: [
          "游戏会把游戏事件发送到 Firebase Analytics（例如开始或完成一关、用时、打开了哪个地点、是否展示了广告），并把崩溃报告发送到 Firebase Crashlytics，以便我们修复问题、调整关卡难度。这些数据关联的是随机的应用实例标识符，而不是你的姓名，我们只做汇总使用。由 Google 代为处理：https://firebase.google.com/support/privacy",
          "如果游戏是通过 Apple 搜索广告安装的，Apple 的归因服务会告诉我们来自哪个广告活动（不含个人数据）。",
        ],
      },
      {
        heading: "留在你设备上的内容",
        body: [
          "你的进度、分数、代币、工程和设置（音效、音乐、震动、语言、提醒）都保存在应用在你设备上的专属存储里。我们看不到这些内容，删除应用时它们会一并清除。",
        ],
      },
      {
        heading: "通知与权限",
        body: [
          "游戏可能会询问一次是否允许发送本地提醒（例如每日挑战已就绪）。提醒在你的设备上安排，没有推送服务器；每天最多一条，夜间不发，可在游戏设置或 iPhone 设置中关闭。",
          "游戏不索取其他权限：不使用相机、麦克风、照片、通讯录或精确位置。游戏没有内购。",
          "如果你从应用菜单打开本页面，将由你的浏览器加载它。这次访问发生在你的浏览器与本网站之间，与游戏本身无关。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "本游戏并非面向 13 岁以下儿童，我们不会有意收集儿童的个人信息。如果你认为有儿童使用了本游戏并希望删除数据，请通过下方方式联系我们。",
        ],
      },
      {
        heading: "变更",
        body: ["如有变化，我们会更新本页面和上方日期，应用的商店页面也会说明变更。"],
      },
      {
        heading: "联系我们",
        body: ["对本政策有疑问：lei@appfactory.sg。"],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "Cannon Cubes",
  storeName: "Cannon Cubes：方塊大砲解謎",
  tagline: "你從不拖動方塊，大砲替你送到位。",
  subtitle: "瞄準、開炮、消除整行整列",
  oneLiner:
    "一款 8x8 棋盤上的 3D 方塊解謎遊戲：你來瞄準，黃銅大砲把每一塊打到位。整行整列會碎成物理小方塊，落進海裡。",
  statusNote: "開發中，即將登陸 iPhone 版 App Store。",
  metaTitle: "Cannon Cubes：方塊大砲解謎，瞄準、開炮、消除整行整列",
  metaDescription:
    "一款 3D 方塊解謎遊戲：大砲把每一塊打上棋盤，消除的行列碎成物理小方塊。經典模式、每日港灣和 40 關貨箱關卡。無內購，無需帳號。",
  features: [
    {
      title: "只瞄準，不拖動",
      body: "按住棋盤，虛影會顯示方塊將落在哪裡。滑動調整、放手開炮；也可以點一個發光目標，剩下的交給大砲。",
    },
    {
      title: "整行整列碎開",
      body: "填滿一整行或一整列，它會炸成許多小物理方塊，從木筏上滾落，噗通掉進港灣。",
    },
    {
      title: "攢一發重砲",
      body: "每消除一行都會替大砲充能，充滿後得到一顆能打掉 3x3 範圍的砲彈。",
    },
    {
      title: "火藥桶連鎖",
      body: "火藥桶所在的行列消除時，會炸掉周圍八格；緊挨著的火藥桶還會接連引爆。",
    },
    {
      title: "經典模式、每日港灣、貨箱關卡",
      body: "經典模式是刷最高分的無盡挑戰；每日港灣每天一個新棋盤，有當日最高分和連續天數；貨箱關卡共 40 關，要在限定的砲彈數內清掉所有木箱。",
    },
    {
      title: "無需帳號，進度留在裝置上",
      body: "無需註冊，分數和設定只保存在你的裝置上。支援英文、簡體中文和繁體中文。",
    },
  ],
  screenshots: [],
  trust: {
    title: "無內購，無需帳號，廣告由你選擇",
    body: "沒有需要購買的內容，也沒有帳號。遊戲會顯示 Google AdMob 廣告：可自願觀看以獲得獎勵代幣的影片，以及回合之間的短廣告，遊戲進行中絕不出現。遊戲使用 Firebase 蒐集匿名的遊戲統計和當機回報。具體蒐集內容見隱私權政策。",
  },
  faqs: [
    { q: "需要連線嗎？", a: "不需要，遊戲可以離線玩；廣告、遊戲統計和當機回報需要網路，沒網路時會等待。" },
    { q: "有廣告或內購嗎？", a: "沒有需要購買的內容。有廣告：可自願觀看的獎勵影片，以及回合之間的短廣告，遊戲進行中不會出現。" },
    { q: "我的分數和未完成的一局存在哪裡？", a: "只在你的裝置上。我們不會收到這些資料，刪除應用程式即會一併清除。" },
    {
      q: "怎麼瞄準？",
      a: "按住棋盤，滑動讓虛影移到能放下的位置，放開手指開炮。也可以點一個發光目標，或點大砲直接打向最佳位置。",
    },
    { q: "每日港灣是什麼？", a: "每天一個新的棋盤，開局散落著一些方塊；有當日最高分，以及記錄你玩了多少天的連續天數。" },
    { q: "支援哪些語言？", a: "英文、簡體中文和繁體中文。可以在選單裡設定語言，也可以跟隨系統語言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: [
          "Cannon Cubes 是一款在你的裝置上執行的遊戲。它沒有帳號，也不會索取你的姓名、電子郵件或通訊錄。為了顯示廣告並讓遊戲穩定執行，它使用下方說明的兩項 Google 服務。我們不會出售你的資料。",
        ],
      },
      {
        heading: "廣告：Google AdMob",
        body: [
          "遊戲會顯示 Google AdMob 的廣告：你可以自願觀看以獲得獎勵代幣的影片，以及回合之間的全螢幕短廣告，遊戲進行中絕不出現。沒有橫幅廣告。",
          "為了選擇和衡量廣告，AdMob 會收到你裝置的資訊（型號、系統版本、語言）、你看到和點擊的廣告，以及依 IP 位址推算的大致位置。只有當你在 App 詢問時允許追蹤（App 追蹤透明度，在你完成第一局後詢問一次），它才會收到裝置的廣告識別碼。若你拒絕，遊戲和廣告照常運作，只是廣告不會個人化。你可以隨時在 iPhone 的「設定 > 隱私權與安全性 > 追蹤」中變更。",
          "在歐洲經濟區、英國和瑞士，要求任何廣告之前會先由 Google 的同意表單詢問你的選擇，之後可在遊戲的「設定 > 隱私選項」中變更。",
          "Google 的政策說明了它如何使用這些資料：https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "遊戲統計與當機回報：Firebase",
        body: [
          "遊戲會把遊戲事件傳送到 Firebase Analytics（例如開始或完成一關、用時、開啟了哪個地點、是否顯示了廣告），並把當機回報傳送到 Firebase Crashlytics，以便我們修正問題、調整關卡難度。這些資料關聯的是隨機的 App 實例識別碼，而不是你的姓名，我們只做彙總使用。由 Google 代為處理：https://firebase.google.com/support/privacy",
          "如果遊戲是透過 Apple 搜尋廣告安裝的，Apple 的歸因服務會告訴我們來自哪個廣告活動（不含個人資料）。",
        ],
      },
      {
        heading: "留在你裝置上的內容",
        body: [
          "你的進度、分數、代幣、工程和設定（音效、音樂、震動、語言、提醒）都保存在應用程式在你裝置上的專屬儲存空間裡。我們看不到這些內容，刪除應用程式時它們會一併清除。",
        ],
      },
      {
        heading: "通知與權限",
        body: [
          "遊戲可能會詢問一次是否允許傳送本機提醒（例如每日挑戰已就緒）。提醒在你的裝置上排程，沒有推播伺服器；每天最多一則，夜間不傳，可在遊戲設定或 iPhone 設定中關閉。",
          "遊戲不索取其他權限：不使用相機、麥克風、照片、通訊錄或精確位置。遊戲沒有內購。",
          "如果你從應用程式選單開啟本頁面，將由你的瀏覽器載入它。這次造訪發生在你的瀏覽器與本網站之間，與遊戲本身無關。",
        ],
      },
      {
        heading: "兒童",
        body: [
          "本遊戲並非以 13 歲以下兒童為對象，我們不會有意蒐集兒童的個人資訊。如果你認為有兒童使用了本遊戲並希望刪除資料，請透過下方方式聯絡我們。",
        ],
      },
      {
        heading: "變更",
        body: ["如有變化，我們會更新本頁面和上方日期，應用程式的商店頁面也會說明變更。"],
      },
      {
        heading: "聯絡我們",
        body: ["對本政策有疑問：lei@appfactory.sg。"],
      },
    ],
  },
};

export const cannonCubes: AppContent = {
  slug: "cannon-cubes",
  category: "game",
  buildNumber: 17,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  schemaCategory: "GameApplication",
  // The App Store seller; the privacy policy names it as the developer.
  developer: DEVELOPER,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
