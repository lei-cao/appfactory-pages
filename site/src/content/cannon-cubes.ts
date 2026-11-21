// Otter Harbor: Cozy Arcade (HALL-9; renamed from Cannon Cubes; apps/game-hall in the
// appfactory repo, bundle id sg.appfactory.gameHall). Registry content in all three
// locales for cannon-cubes.appfactory.sg, rendered by the shared plain shell and
// landing (components/sites/cannon-cubes/site.tsx) with the shared privacy and
// support pages. The slug, route and host stay "cannon-cubes" until a new domain
// is set up (follow-up). Unreleased: status "building", no store links until the
// App Store record is live. Claims are limited to what version 1.0 contains: a toy
// harbour island with eleven places (Barge Berth, Breaker's Yard, Fireworks Jetty,
// Crane Arm, Tea Warehouse, Inspection Bench, Channel Watch, Pier Arcade,
// Lighthouse, Tugboat, Maelstrom), harbour tokens that restore the island, a daily
// challenge per place, no ads, no purchases, no accounts, no network use, no data
// collected. Listing text: apps/game-hall/fastlane/metadata/ios/<locale>/.

import type { AppContent, AppLocalized } from "./apps";

/** The App Store seller of the studio account (same as Popline's privacy page). */
const DEVELOPER = "APPFACTORY STUDIO PTE. LTD.";
const UPDATED = "2026-11-21";
const IMG = "/apps/cannon-cubes";

const en: AppLocalized = {
  name: "Otter Harbor",
  storeName: "Otter Harbor: Cozy Arcade",
  tagline: "A small harbour island where every pier is a little game.",
  subtitle: "Block Puzzle, Cannon & Physics",
  oneLiner:
    "A toy harbour island with eleven places to play: block puzzles with a cargo cannon, physics demolition, fireworks, a crane and more. Win to earn harbour tokens and restore the island.",
  statusNote: "In development. Coming to the App Store for iPhone.",
  metaTitle: "Otter Harbor: Cozy Arcade. Block Puzzle, Cannon & Physics",
  metaDescription:
    "A cozy harbour island where each pier is a small game: block puzzle with a cargo cannon, physics demolition, fireworks and more. Win harbour tokens to restore the island. No ads, no purchases, plays offline.",
  features: [
    {
      title: "One island, eleven places",
      body: "Barge Berth, Breaker's Yard, Fireworks Jetty, Crane Arm, Tea Warehouse, Inspection Bench, Channel Watch, Pier Arcade, Lighthouse, Tugboat and Maelstrom. Each pier is its own small game.",
    },
    {
      title: "Barge Berth: block puzzle with a cannon",
      body: "You never drag a piece. Aim, and a cargo cannon fires it into place. Full rows and columns break into physics cubes that splash into the sea.",
    },
    {
      title: "Breaker's Yard: physics demolition",
      body: "Four demolition jobs where you plan your shots and let physics bring the structure down.",
    },
    {
      title: "Win tokens, restore the island",
      body: "Winning earns harbour tokens. Spend them to repair and bring back the places around the harbour.",
    },
    {
      title: "A daily challenge per place",
      body: "Each place has a new challenge every day, so there is always a reason to visit a pier.",
    },
    {
      title: "Plays offline, keeps to itself",
      body: "No account and no network connection needed. Progress and settings stay on your device. English, Simplified Chinese and Traditional Chinese.",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/breakyard.webp`, alt: "Breaker's Yard in Otter Harbor" },
    { src: `${IMG}/shots/fireworks.webp`, alt: "Fireworks Jetty in Otter Harbor" },
    { src: `${IMG}/shots/lighthouse.webp`, alt: "Lighthouse in Otter Harbor" },
    { src: `${IMG}/shots/tug.webp`, alt: "Tugboat in Otter Harbor" },
    { src: `${IMG}/shots/warehouse.webp`, alt: "Tea Warehouse in Otter Harbor" },
  ],
  trust: {
    title: "No ads, no purchases, no data",
    body: "Version 1.0 has no ads, no in-app purchases, no accounts, no tracking, no analytics and no third-party SDKs. The game makes no network requests and collects nothing.",
  },
  faqs: [
    {
      q: "Do I need an internet connection?",
      a: "No. Otter Harbor runs fully offline, and the game makes no network requests.",
    },
    {
      q: "Are there ads or in-app purchases?",
      a: "Not in version 1.0. There are no ads and nothing to buy.",
    },
    {
      q: "Where is my progress kept?",
      a: "Only on your device. We never receive it, so deleting the app removes it.",
    },
    {
      q: "What are harbour tokens?",
      a: "You earn them by winning at the places around the harbour. They are spent in the game to restore the island, and they cannot be bought.",
    },
    {
      q: "Was this game called Cannon Cubes?",
      a: "Yes. Cannon Cubes, the block puzzle with a cargo cannon, is now Barge Berth, one of the places on the island.",
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
          "Otter Harbor: Cozy Arcade is a collection of small games that works on your device. It collects nothing about you. The app was previously named Cannon Cubes.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Nothing. Otter Harbor has no accounts, no advertising, no tracking, no analytics, no crash reporting and no third-party SDKs. We do not receive your name, email, contacts, photos, location, device identifiers or anything else.",
        ],
      },
      {
        heading: "What stays on your device",
        body: [
          "Your best scores, your harbour tokens and island progress, your daily challenge results, your settings (sound, music, haptics, language) and any unfinished game are saved in the app's own storage on your device. We cannot see them, and they are removed when you delete the app.",
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
  name: "水獭港",
  storeName: "水獭港：治愈街机",
  tagline: "一座小小的港口岛，每个码头都是一个小游戏。",
  subtitle: "方块益智、大炮和物理玩法",
  oneLiner:
    "一座玩具般的港口岛，有十一个地方可玩：带货运大炮的方块益智、物理拆除、烟花、吊车等等。获胜可赚取港口代币，修复这座岛。",
  statusNote: "开发中，即将登陆 iPhone 版 App Store。",
  metaTitle: "水獭港：治愈街机，方块益智、大炮和物理玩法",
  metaDescription:
    "一座治愈的港口岛，每个码头都是一个小游戏：带货运大炮的方块益智、物理拆除、烟花等等。获胜赚取港口代币，修复小岛。无广告、无内购，可离线游玩。",
  features: [
    {
      title: "一座岛，十一个地方",
      body: "驳船泊位、拆解场、烟花栈桥、吊臂、茶叶仓库、检验台、航道瞭望、码头游乐场、灯塔、拖船和大漩涡。每个码头都是一个独立的小游戏。",
    },
    {
      title: "驳船泊位：带大炮的方块益智",
      body: "你从不拖动方块。瞄准之后，货运大炮会把它打到位。填满的整行整列会碎成物理小方块，落进海里。",
    },
    {
      title: "拆解场：物理拆除",
      body: "四个拆除任务，先想好每一炮，再让物理把建筑推倒。",
    },
    {
      title: "获胜赚代币，修复小岛",
      body: "获胜可赚取港口代币，用来修复并唤回港口周围的各个地方。",
    },
    {
      title: "每个地方每天一个挑战",
      body: "每个地方每天都有新的挑战，总有理由去码头逛一逛。",
    },
    {
      title: "可离线，只留在你手里",
      body: "无需账号，也不用联网，进度和设置只保存在你的设备上。支持英文、简体中文和繁体中文。",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/breakyard.webp`, alt: "水獭港里的拆解场" },
    { src: `${IMG}/shots/fireworks.webp`, alt: "水獭港里的烟花栈桥" },
    { src: `${IMG}/shots/lighthouse.webp`, alt: "水獭港里的灯塔" },
    { src: `${IMG}/shots/tug.webp`, alt: "水獭港里的拖船" },
    { src: `${IMG}/shots/warehouse.webp`, alt: "水獭港里的茶叶仓库" },
  ],
  trust: {
    title: "无广告，无内购，不收集数据",
    body: "1.0 版本没有广告、内购、账号、追踪、分析和第三方 SDK。游戏不发出任何网络请求，也不收集任何数据。",
  },
  faqs: [
    { q: "需要联网吗？", a: "不需要。水獭港完全离线运行，游戏不发出任何网络请求。" },
    { q: "有广告或内购吗？", a: "1.0 版本没有。没有广告，也没有需要购买的内容。" },
    { q: "我的进度存在哪里？", a: "只在你的设备上。我们不会收到这些数据，删除应用即会一并清除。" },
    { q: "港口代币是什么？", a: "在港口各处获胜即可赚取，在游戏里用来修复小岛，无法用钱购买。" },
    { q: "这款游戏以前叫 Cannon Cubes 吗？", a: "是的。带货运大炮的方块益智 Cannon Cubes，现在是岛上的一个地方：驳船泊位。" },
    { q: "支持哪些语言？", a: "英文、简体中文和繁体中文。可以在菜单里设置语言，也可以跟随系统语言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: ["水獭港：治愈街机是一组在你的设备上运行的小游戏，不收集任何关于你的信息。本应用此前名为 Cannon Cubes。"],
      },
      {
        heading: "我们收集什么",
        body: [
          "什么都不收集。水獭港没有账号，没有广告，没有追踪，没有分析，没有崩溃报告，也没有第三方 SDK。我们不会收到你的姓名、邮箱、通讯录、照片、位置、设备标识符或其他任何信息。",
        ],
      },
      {
        heading: "留在你设备上的内容",
        body: [
          "你的最高分、港口代币和小岛进度、每日挑战结果、设置（音效、音乐、震动、语言）以及未完成的游戏，都保存在应用在你设备上的专属存储里。我们看不到这些内容，删除应用时它们会一并清除。",
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
  name: "水獺港",
  storeName: "水獺港：療癒街機",
  tagline: "一座小小的港口島，每個碼頭都是一個小遊戲。",
  subtitle: "方塊益智、大砲和物理玩法",
  oneLiner:
    "一座玩具般的港口島，有十一個地方可玩：帶貨運大砲的方塊益智、物理拆除、煙花、吊車等等。獲勝可賺取港口代幣，修復這座島。",
  statusNote: "開發中，即將登陸 iPhone 版 App Store。",
  metaTitle: "水獺港：療癒街機，方塊益智、大砲和物理玩法",
  metaDescription:
    "一座療癒的港口島，每個碼頭都是一個小遊戲：帶貨運大砲的方塊益智、物理拆除、煙花等等。獲勝賺取港口代幣，修復小島。無廣告、無內購，可離線遊玩。",
  features: [
    {
      title: "一座島，十一個地方",
      body: "駁船泊位、拆解場、煙花棧橋、吊臂、茶葉倉庫、檢驗台、航道瞭望、碼頭遊樂場、燈塔、拖船和大漩渦。每個碼頭都是一個獨立的小遊戲。",
    },
    {
      title: "駁船泊位：帶大砲的方塊益智",
      body: "你從不拖動方塊。瞄準之後，貨運大砲會把它打到位。填滿的整行整列會碎成物理小方塊，落進海裡。",
    },
    {
      title: "拆解場：物理拆除",
      body: "四個拆除任務，先想好每一砲，再讓物理把建築推倒。",
    },
    {
      title: "獲勝賺代幣，修復小島",
      body: "獲勝可賺取港口代幣，用來修復並喚回港口周圍的各個地方。",
    },
    {
      title: "每個地方每天一個挑戰",
      body: "每個地方每天都有新的挑戰，總有理由去碼頭逛一逛。",
    },
    {
      title: "可離線，只留在你手裡",
      body: "無需帳號，也不用連線，進度和設定只保存在你的裝置上。支援英文、簡體中文和繁體中文。",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/breakyard.webp`, alt: "水獺港裡的拆解場" },
    { src: `${IMG}/shots/fireworks.webp`, alt: "水獺港裡的煙花棧橋" },
    { src: `${IMG}/shots/lighthouse.webp`, alt: "水獺港裡的燈塔" },
    { src: `${IMG}/shots/tug.webp`, alt: "水獺港裡的拖船" },
    { src: `${IMG}/shots/warehouse.webp`, alt: "水獺港裡的茶葉倉庫" },
  ],
  trust: {
    title: "無廣告，無內購，不蒐集資料",
    body: "1.0 版本沒有廣告、內購、帳號、追蹤、分析和第三方 SDK。遊戲不發出任何網路請求，也不蒐集任何資料。",
  },
  faqs: [
    { q: "需要連線嗎？", a: "不需要。水獺港完全離線執行，遊戲不發出任何網路請求。" },
    { q: "有廣告或內購嗎？", a: "1.0 版本沒有。沒有廣告，也沒有需要購買的內容。" },
    { q: "我的進度存在哪裡？", a: "只在你的裝置上。我們不會收到這些資料，刪除應用程式即會一併清除。" },
    { q: "港口代幣是什麼？", a: "在港口各處獲勝即可賺取，在遊戲裡用來修復小島，無法用錢購買。" },
    { q: "這款遊戲以前叫 Cannon Cubes 嗎？", a: "是的。帶貨運大砲的方塊益智 Cannon Cubes，現在是島上的一個地方：駁船泊位。" },
    { q: "支援哪些語言？", a: "英文、簡體中文和繁體中文。可以在選單裡設定語言，也可以跟隨系統語言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: ["水獺港：療癒街機是一組在你的裝置上執行的小遊戲，不蒐集任何關於你的資訊。本應用程式此前名為 Cannon Cubes。"],
      },
      {
        heading: "我們蒐集什麼",
        body: [
          "什麼都不蒐集。水獺港沒有帳號，沒有廣告，沒有追蹤，沒有分析，沒有當機回報，也沒有第三方 SDK。我們不會收到你的姓名、電子郵件、通訊錄、照片、位置、裝置識別碼或其他任何資訊。",
        ],
      },
      {
        heading: "留在你裝置上的內容",
        body: [
          "你的最高分、港口代幣和小島進度、每日挑戰結果、設定（音效、音樂、震動、語言）以及未完成的遊戲，都保存在應用程式在你裝置上的專屬儲存空間裡。我們看不到這些內容，刪除應用程式時它們會一併清除。",
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
  icon: `${IMG}/icon.png`,
  ogImage: `${IMG}/og.png`,
  buildNumber: 17,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  schemaCategory: "GameApplication",
  // The App Store seller; the privacy policy names it as the developer.
  developer: DEVELOPER,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
