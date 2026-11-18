// Cannon Cubes (apps/game-hall in the appfactory repo, bundle id
// sg.appfactory.gameHall, HALL-1): registry content in all three locales for
// cannon-cubes.appfactory.sg, rendered by the shared plain shell and landing
// (components/sites/cannon-cubes/site.tsx) with the shared privacy and support
// pages. Unreleased: status "building", no store links until the App Store
// record exists. Claims are limited to what version 1.0.0 contains: Classic
// Daily Harbour and Cargo Run, aim-and-fire input, Big Shot, powder kegs, physics cubes,
// no ads, no purchases, no accounts, no network use, no data collected.
// Names and mode labels follow the in-app strings (translations/strings.csv).
// Listing text: apps/game-hall/fastlane/metadata/ios/<locale>/.

import type { AppContent, AppLocalized } from "./apps";

/** The App Store seller of the studio account (same as Popline's privacy page). */
const DEVELOPER = "APPFACTORY STUDIO PTE. LTD.";
const UPDATED = "2026-11-19";

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
    "A 3D block puzzle where a cannon fires every piece onto the board and cleared lines break into physics cubes. Classic, Daily Harbour and 40 Cargo Run levels. No ads, no purchases, plays offline.",
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
      title: "Plays offline, keeps to itself",
      body: "No account and no network connection needed. Scores and settings stay on your device. English, Simplified Chinese and Traditional Chinese.",
    },
  ],
  screenshots: [],
  trust: {
    title: "No ads, no purchases, no data",
    body: "Version 1.0 has no ads, no in-app purchases, no accounts, no analytics and no third-party SDKs. The game makes no network requests and collects nothing.",
  },
  faqs: [
    {
      q: "Do I need an internet connection?",
      a: "No. Cannon Cubes runs fully offline, and the game makes no network requests.",
    },
    {
      q: "Are there ads or in-app purchases?",
      a: "Not in version 1.0. There are no ads and nothing to buy.",
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
          "Cannon Cubes is a puzzle game that works on your device. It collects nothing about you.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Nothing. Cannon Cubes has no accounts, no advertising, no analytics, no crash reporting and no third-party SDKs. We do not receive your name, email, contacts, photos, location, device identifiers or anything else.",
        ],
      },
      {
        heading: "What stays on your device",
        body: [
          "Your best scores, your daily streak, your settings (sound, music, haptics, language) and an unfinished run are saved in the app's own storage on your device. We cannot see them, and they are removed when you delete the app.",
        ],
      },
      {
        heading: "Network and permissions",
        body: [
          "Version 1.0 does not connect to the internet and asks for no permissions: no camera, microphone, photos, location or notifications. There are no in-app purchases, and no purchase data reaches us.",
          "If you open this page from the app's menu, your browser loads it. That visit is between your browser and this website, not the game.",
        ],
      },
      {
        heading: "Children",
        body: [
          "Because the game collects no personal information from anyone, it collects none from children.",
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
    "一款 3D 方块解谜游戏：大炮把每一块打上棋盘，消除的行列碎成物理小方块。经典模式、每日港湾和 40 关货箱关卡。无广告、无内购，可离线游玩。",
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
      title: "可离线，只留在你手里",
      body: "无需账号，也不用联网，分数和设置只保存在你的设备上。支持英文、简体中文和繁体中文。",
    },
  ],
  screenshots: [],
  trust: {
    title: "无广告，无内购，不收集数据",
    body: "1.0 版本没有广告、内购、账号、分析和第三方 SDK。游戏不发出任何网络请求，也不收集任何数据。",
  },
  faqs: [
    { q: "需要联网吗？", a: "不需要。Cannon Cubes 完全离线运行，游戏不发出任何网络请求。" },
    { q: "有广告或内购吗？", a: "1.0 版本没有。没有广告，也没有需要购买的内容。" },
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
        body: ["Cannon Cubes 是一款在你的设备上运行的解谜游戏，不收集任何关于你的信息。"],
      },
      {
        heading: "我们收集什么",
        body: [
          "什么都不收集。Cannon Cubes 没有账号，没有广告，没有分析，没有崩溃报告，也没有第三方 SDK。我们不会收到你的姓名、邮箱、通讯录、照片、位置、设备标识符或其他任何信息。",
        ],
      },
      {
        heading: "留在你设备上的内容",
        body: [
          "你的最高分、每日连续天数、设置（音效、音乐、震动、语言）以及未完成的一局，都保存在应用在你设备上的专属存储里。我们看不到这些内容，删除应用时它们会一并清除。",
        ],
      },
      {
        heading: "网络与权限",
        body: [
          "1.0 版本不会连接互联网，也不索取任何权限：不使用相机、麦克风、照片、位置或通知。游戏没有内购，也不会有任何购买数据发送给我们。",
          "如果你从应用菜单打开本页面，将由你的浏览器加载它。这次访问发生在你的浏览器与本网站之间，与游戏本身无关。",
        ],
      },
      {
        heading: "儿童",
        body: ["游戏不会收集任何人的个人信息，因此也不会收集儿童的个人信息。"],
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
    "一款 3D 方塊解謎遊戲：大砲把每一塊打上棋盤，消除的行列碎成物理小方塊。經典模式、每日港灣和 40 關貨箱關卡。無廣告、無內購，可離線遊玩。",
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
      title: "可離線，只留在你手裡",
      body: "無需帳號，也不用連線，分數和設定只保存在你的裝置上。支援英文、簡體中文和繁體中文。",
    },
  ],
  screenshots: [],
  trust: {
    title: "無廣告，無內購，不蒐集資料",
    body: "1.0 版本沒有廣告、內購、帳號、分析和第三方 SDK。遊戲不發出任何網路請求，也不蒐集任何資料。",
  },
  faqs: [
    { q: "需要連線嗎？", a: "不需要。Cannon Cubes 完全離線執行，遊戲不發出任何網路請求。" },
    { q: "有廣告或內購嗎？", a: "1.0 版本沒有。沒有廣告，也沒有需要購買的內容。" },
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
        body: ["Cannon Cubes 是一款在你的裝置上執行的解謎遊戲，不蒐集任何關於你的資訊。"],
      },
      {
        heading: "我們蒐集什麼",
        body: [
          "什麼都不蒐集。Cannon Cubes 沒有帳號，沒有廣告，沒有分析，沒有當機回報，也沒有第三方 SDK。我們不會收到你的姓名、電子郵件、通訊錄、照片、位置、裝置識別碼或其他任何資訊。",
        ],
      },
      {
        heading: "留在你裝置上的內容",
        body: [
          "你的最高分、每日連續天數、設定（音效、音樂、震動、語言）以及未完成的一局，都保存在應用程式在你裝置上的專屬儲存空間裡。我們看不到這些內容，刪除應用程式時它們會一併清除。",
        ],
      },
      {
        heading: "網路與權限",
        body: [
          "1.0 版本不會連上網際網路，也不索取任何權限：不使用相機、麥克風、照片、位置或通知。遊戲沒有內購，也不會有任何購買資料傳送給我們。",
          "如果你從應用程式選單開啟本頁面，將由你的瀏覽器載入它。這次造訪發生在你的瀏覽器與本網站之間，與遊戲本身無關。",
        ],
      },
      {
        heading: "兒童",
        body: ["遊戲不會蒐集任何人的個人資訊，因此也不會蒐集兒童的個人資訊。"],
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
