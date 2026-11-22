// Otter Harbor: Cozy Arcade (apps/game-hall in the appfactory repo, bundle id
// sg.appfactory.gameHall). Registry content in all three locales for
// cannon-cubes.appfactory.sg, rendered by the shared plain shell and landing
// (components/sites/cannon-cubes/site.tsx) with the shared privacy and support
// pages. The slug, route and host stay "cannon-cubes" until a new domain is set
// up. Unreleased: status "building", no store links until the App Store record
// is live. The game is a toy harbor island with eleven places, harbor tokens and
// a daily challenge per place; it has no purchases and no accounts. It shows
// Google AdMob ads, asks for tracking permission once, uses Firebase Analytics
// and Crashlytics, and can send local reminders; the privacy policy and the
// claims below say so. Listing text: apps/game-hall/fastlane/metadata/ios/<locale>/.

import type { AppContent, AppLocalized } from "./apps";

const DEVELOPER = "APPFACTORY STUDIO PTE. LTD.";
const UPDATED = "2026-11-22";
const IMG = "/apps/cannon-cubes";

const en: AppLocalized = {
  name: "Otter Harbor",
  storeName: "Otter Harbor: Cozy Arcade",
  tagline: "A small harbor island where every pier is a little game.",
  subtitle: "Block Puzzle, Cannon & Physics",
  oneLiner:
    "A toy harbor island with eleven places to play: block puzzles with a cargo cannon, physics demolition, fireworks, a crane and more. Win to earn harbor tokens and restore the island.",
  statusNote: "In development. Coming to the App Store for iPhone.",
  metaTitle: "Otter Harbor: Cozy Arcade. Block Puzzle, Cannon & Physics",
  metaDescription:
    "A cozy harbor island where each pier is a small game: block puzzle with a cargo cannon, physics demolition, fireworks and more. Win harbor tokens to restore the island. No purchases, no account.",
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
      body: "Winning earns harbor tokens. Spend them to repair and bring back the places around the harbor.",
    },
    {
      title: "A daily challenge per place",
      body: "Each place has a new challenge every day, so there is always a reason to visit a pier.",
    },
    {
      title: "No account, progress on your device",
      body: "No sign-up and no purchases. Progress and settings stay on your device. English, Simplified Chinese and Traditional Chinese.",
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
    title: "No purchases, no account, no ads during play",
    body: "There is nothing to buy and no account. The game shows ads from Google AdMob: videos you choose to watch, and short ads between rounds, never during play and never right after a loss. There are no banners. It uses Firebase for anonymous game statistics and crash reports. The privacy policy lists what is collected.",
  },
  faqs: [
    {
      q: "Do I need an internet connection?",
      a: "No. The game plays offline; ads, game statistics and crash reports need a connection and simply wait when there is none.",
    },
    {
      q: "Are there ads or in-app purchases?",
      a: "There is nothing to buy. There are ads: reward videos you choose to watch, and short ads between rounds, never during play and never right after a loss.",
    },
    {
      q: "Where is my progress kept?",
      a: "Only on your device. We never receive it, so deleting the app removes it.",
    },
    {
      q: "What are harbor tokens?",
      a: "You earn them by winning at the places around the harbor. They are spent in the game to restore the island, and they cannot be bought.",
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
          "Otter Harbor: Cozy Arcade is a collection of small games that works on your device. It has no accounts and never asks for your name, email or contacts. To show ads and to keep the game working well, it uses two Google services, described below. We do not sell your data.",
        ],
      },
      {
        heading: "Ads: Google AdMob",
        body: [
          "The game shows ads from Google AdMob. Rewarded videos are always your choice: one more try after a near miss, or double tokens on a win. Short full-screen ads appear only between rounds, never during play and never right after a loss. There are no banners.",
          "To choose and measure ads, AdMob receives information about your device (model, system version, language), the ads you see and tap, and an approximate location derived from your IP address. It receives your device's advertising identifier only if you allow tracking when the app asks (App Tracking Transparency, asked once, after your first win, at a break between rounds, never at launch). If you decline, the game and its ads work the same; the ads are just not personalised. You can change this any time in the iPhone's Settings > Privacy & Security > Tracking.",
          "Where the law requires it (the European Economic Area, the UK, Switzerland and US states with privacy laws), Google's consent form asks for your choice before any ad is requested. You can reopen it any time in the game's Settings > Privacy choices.",
          "Google's own policy explains how it uses this data: https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "Game statistics and crash reports: Firebase",
        body: [
          "The game sends game events to Firebase Analytics (for example a level started or finished, how long it took, which place was opened, whether an ad was shown) and crash reports to Firebase Crashlytics, so we can fix problems and balance the levels. These are tied to a random app-instance identifier, not to your name, and we use them only in aggregate. Google processes them for us: https://firebase.google.com/support/privacy",
          "If the game was installed from an Apple Ads campaign, Apple's attribution service tells us which campaign (no personal data).",
        ],
      },
      {
        heading: "What stays on your device",
        body: [
          "Your best scores, your harbor tokens and island progress, your daily challenge results, your settings (sound, music, haptics, language, reminders) and any unfinished game are saved in the app's own storage on your device. We cannot see them, and they are removed when you delete the app.",
        ],
      },
      {
        heading: "Notifications and permissions",
        body: [
          "The game may ask once, after a win and some play, to send local reminders (for example that the daily challenge is ready). They are scheduled on your device; there is no push server. At most one a day, never at night, and they stop after a few days if you do not open the game. You can turn them off in the game's settings or in the iPhone's Settings.",
          "It asks for no other permissions: no camera, microphone, photos, contacts or precise location. There are no in-app purchases.",
          "This privacy policy is linked in the game's Settings. When you open it, your browser loads it. That visit is between your browser and this website, not the game.",
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
  name: "水獭港",
  storeName: "水獭港：治愈街机",
  tagline: "一座小小的港口岛，每个码头都是一个小游戏。",
  subtitle: "方块益智、大炮和物理玩法",
  oneLiner:
    "一座玩具般的港口岛，有十一个地方可玩：带货运大炮的方块益智、物理拆除、烟花、吊车等等。获胜可赚取港口代币，修复这座岛。",
  statusNote: "开发中，即将登陆 iPhone 版 App Store。",
  metaTitle: "水獭港：治愈街机，方块益智、大炮和物理玩法",
  metaDescription:
    "一座治愈的港口岛，每个码头都是一个小游戏：带货运大炮的方块益智、物理拆除、烟花等等。获胜赚取港口代币，修复小岛。无内购，无需账号。",
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
      title: "无需账号，进度留在设备上",
      body: "无需注册，也没有内购。进度和设置只保存在你的设备上。支持英文、简体中文和繁体中文。",
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
    title: "无内购，无需账号，游戏中不插广告",
    body: "没有需要购买的内容，也没有账号。游戏会展示 Google AdMob 广告：可自愿观看的视频，以及回合之间的短广告，游戏进行中和失败后立刻都不会出现。没有横幅广告。游戏使用 Firebase 收集匿名的游戏统计和崩溃报告。具体收集内容见隐私政策。",
  },
  faqs: [
    { q: "需要联网吗？", a: "不需要，游戏可以离线玩；广告、游戏统计和崩溃报告需要网络，没网时会等待。" },
    { q: "有广告或内购吗？", a: "没有需要购买的内容。有广告：可自愿观看的奖励视频，以及回合之间的短广告，游戏进行中不会出现，失败后也不会立刻出现。" },
    { q: "我的进度存在哪里？", a: "只在你的设备上。我们不会收到这些数据，删除应用即会一并清除。" },
    { q: "港口代币是什么？", a: "在港口各处获胜即可赚取，在游戏里用来修复小岛，无法用钱购买。" },
    { q: "支持哪些语言？", a: "英文、简体中文和繁体中文。可以在菜单里设置语言，也可以跟随系统语言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: [
          "水獭港：治愈街机是一组在你的设备上运行的小游戏。它没有账号，也不会索取你的姓名、邮箱或通讯录。为了展示广告并让游戏稳定运行，它使用下面说明的两项 Google 服务。我们不会出售你的数据。",
        ],
      },
      {
        heading: "广告：Google AdMob",
        body: [
          "游戏会展示 Google AdMob 的广告。奖励视频永远由你选择：失误后再试一次，或在获胜时让代币翻倍。回合之间才会出现全屏短广告，游戏进行中绝不出现，失败后也不会立刻出现。没有横幅广告。",
          "为了选择和衡量广告，AdMob 会收到你设备的信息（型号、系统版本、语言）、你看到和点击的广告，以及根据 IP 地址推算的大致位置。只有当你在应用询问时允许跟踪（App 跟踪透明度，只在你首次获胜后、回合之间的间隙询问一次，绝不在启动时询问），它才会收到设备的广告标识符。若你拒绝，游戏和广告照常运行，只是广告不会个性化。你可以随时在 iPhone 的“设置 > 隐私与安全性 > 跟踪”中更改。",
          "在法律要求的地区（欧洲经济区、英国、瑞士，以及设有隐私法的美国各州），请求任何广告之前会先由 Google 的同意表单询问你的选择，之后可随时在游戏的“设置 > 隐私选项”中重新打开。",
          "Google 的政策说明了它如何使用这些数据：https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "游戏统计与崩溃报告：Firebase",
        body: [
          "游戏会把游戏事件发送到 Firebase Analytics（例如开始或完成一关、用时、打开了哪个地点、是否展示了广告），并把崩溃报告发送到 Firebase Crashlytics，以便我们修复问题、调整关卡难度。这些数据关联的是随机的应用实例标识符，而不是你的姓名，我们只做汇总使用。由 Google 代为处理：https://firebase.google.com/support/privacy",
          "如果游戏是通过 Apple 广告安装的，Apple 的归因服务会告诉我们来自哪个广告活动（不含个人数据）。",
        ],
      },
      {
        heading: "留在你设备上的内容",
        body: [
          "你的最高分、港口代币和小岛进度、每日挑战结果、设置（音效、音乐、震动、语言、提醒）以及未完成的游戏，都保存在应用在你设备上的专属存储里。我们看不到这些内容，删除应用时它们会一并清除。",
        ],
      },
      {
        heading: "通知与权限",
        body: [
          "游戏可能会在你获胜并玩了一阵之后询问一次是否允许发送本地提醒（例如每日挑战已就绪）。提醒在你的设备上安排，没有推送服务器；每天最多一条，夜间不发，如果你几天没有打开游戏就会停止。可在游戏设置或 iPhone 设置中关闭。",
          "游戏不索取其他权限：不使用相机、麦克风、照片、通讯录或精确位置。游戏没有内购。",
          "本隐私政策链接在游戏的“设置”中。打开时将由你的浏览器加载它。这次访问发生在你的浏览器与本网站之间，与游戏本身无关。",
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
  name: "水獺港",
  storeName: "水獺港：療癒街機",
  tagline: "一座小小的港口島，每個碼頭都是一個小遊戲。",
  subtitle: "方塊益智、大砲和物理玩法",
  oneLiner:
    "一座玩具般的港口島，有十一個地方可玩：帶貨運大砲的方塊益智、物理拆除、煙花、吊車等等。獲勝可賺取港口代幣，修復這座島。",
  statusNote: "開發中，即將登陸 iPhone 版 App Store。",
  metaTitle: "水獺港：療癒街機，方塊益智、大砲和物理玩法",
  metaDescription:
    "一座療癒的港口島，每個碼頭都是一個小遊戲：帶貨運大砲的方塊益智、物理拆除、煙花等等。獲勝賺取港口代幣，修復小島。無內購，無需帳號。",
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
      title: "無需帳號，進度留在裝置上",
      body: "無需註冊，也沒有內購。進度和設定只保存在你的裝置上。支援英文、簡體中文和繁體中文。",
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
    title: "無內購，無需帳號，遊戲中不插廣告",
    body: "沒有需要購買的內容，也沒有帳號。遊戲會顯示 Google AdMob 廣告：可自願觀看的影片，以及回合之間的短廣告，遊戲進行中和失敗後立刻都不會出現。沒有橫幅廣告。遊戲使用 Firebase 蒐集匿名的遊戲統計和當機回報。具體蒐集內容見隱私權政策。",
  },
  faqs: [
    { q: "需要連線嗎？", a: "不需要，遊戲可以離線玩；廣告、遊戲統計和當機回報需要網路，沒網路時會等待。" },
    { q: "有廣告或內購嗎？", a: "沒有需要購買的內容。有廣告：可自願觀看的獎勵影片，以及回合之間的短廣告，遊戲進行中不會出現，失敗後也不會立刻出現。" },
    { q: "我的進度存在哪裡？", a: "只在你的裝置上。我們不會收到這些資料，刪除應用程式即會一併清除。" },
    { q: "港口代幣是什麼？", a: "在港口各處獲勝即可賺取，在遊戲裡用來修復小島，無法用錢購買。" },
    { q: "支援哪些語言？", a: "英文、簡體中文和繁體中文。可以在選單裡設定語言，也可以跟隨系統語言。" },
  ],
  privacy: {
    updated: UPDATED,
    sections: [
      {
        heading: "概述",
        body: [
          "水獺港：療癒街機是一組在你的裝置上執行的小遊戲。它沒有帳號，也不會索取你的姓名、電子郵件或通訊錄。為了顯示廣告並讓遊戲穩定執行，它使用下方說明的兩項 Google 服務。我們不會出售你的資料。",
        ],
      },
      {
        heading: "廣告：Google AdMob",
        body: [
          "遊戲會顯示 Google AdMob 的廣告。獎勵影片永遠由你選擇：失誤後再試一次，或在獲勝時讓代幣加倍。回合之間才會出現全螢幕短廣告，遊戲進行中絕不出現，失敗後也不會立刻出現。沒有橫幅廣告。",
          "為了選擇和衡量廣告，AdMob 會收到你裝置的資訊（型號、系統版本、語言）、你看到和點擊的廣告，以及依 IP 位址推算的大致位置。只有當你在 App 詢問時允許追蹤（App 追蹤透明度，只在你首次獲勝後、回合之間的空檔詢問一次，絕不在啟動時詢問），它才會收到裝置的廣告識別碼。若你拒絕，遊戲和廣告照常運作，只是廣告不會個人化。你可以隨時在 iPhone 的「設定 > 隱私權與安全性 > 追蹤」中變更。",
          "在法律要求的地區（歐洲經濟區、英國、瑞士，以及設有隱私法的美國各州），要求任何廣告之前會先由 Google 的同意表單詢問你的選擇，之後可隨時在遊戲的「設定 > 隱私選項」中重新開啟。",
          "Google 的政策說明了它如何使用這些資料：https://policies.google.com/technologies/ads",
        ],
      },
      {
        heading: "遊戲統計與當機回報：Firebase",
        body: [
          "遊戲會把遊戲事件傳送到 Firebase Analytics（例如開始或完成一關、用時、開啟了哪個地點、是否顯示了廣告），並把當機回報傳送到 Firebase Crashlytics，以便我們修正問題、調整關卡難度。這些資料關聯的是隨機的 App 實例識別碼，而不是你的姓名，我們只做彙總使用。由 Google 代為處理：https://firebase.google.com/support/privacy",
          "如果遊戲是透過 Apple 廣告安裝的，Apple 的歸因服務會告訴我們來自哪個廣告活動（不含個人資料）。",
        ],
      },
      {
        heading: "留在你裝置上的內容",
        body: [
          "你的最高分、港口代幣和小島進度、每日挑戰結果、設定（音效、音樂、震動、語言、提醒）以及未完成的遊戲，都保存在應用程式在你裝置上的專屬儲存空間裡。我們看不到這些內容，刪除應用程式時它們會一併清除。",
        ],
      },
      {
        heading: "通知與權限",
        body: [
          "遊戲可能會在你獲勝並玩了一陣之後詢問一次是否允許傳送本機提醒（例如每日挑戰已就緒）。提醒在你的裝置上排程，沒有推播伺服器；每天最多一則，夜間不傳，如果你幾天沒有開啟遊戲就會停止。可在遊戲設定或 iPhone 設定中關閉。",
          "遊戲不索取其他權限：不使用相機、麥克風、照片、通訊錄或精確位置。遊戲沒有內購。",
          "本隱私權政策連結在遊戲的「設定」中。開啟時將由你的瀏覽器載入它。這次造訪發生在你的瀏覽器與本網站之間，與遊戲本身無關。",
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
  icon: `${IMG}/icon.png`,
  ogImage: `${IMG}/og.png`,
  buildNumber: 17,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  schemaCategory: "GameApplication",
  developer: DEVELOPER,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
