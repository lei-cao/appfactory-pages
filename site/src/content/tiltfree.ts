import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree: Poker Tracker & HUD",
  tagline: "Record every hand. Remember every leak.",
  subtitle: "Poker tracker & HUD for live play",
  oneLiner:
    "The complete kit for winning live poker players: record every hand at the table, build opponent profiles, track real HUD stats, and get AI hand reviews.",
  statusNote: "Live now on the App Store — free for iPhone and iPad.",
  features: [
    {
      title: "Hand Recording",
      body: "Record every hand at the table — hole cards, board, positions, bet sizing, and action on every street. Quick input designed for live play, so you can log a hand between deals.",
    },
    {
      title: "Opponent Memory",
      body: "Build a profile on every player you face. Tag reads and tendencies, add notes and photos, and search them before your next session to prepare for the table.",
    },
    {
      title: "Live HUD",
      body: "TiltFree calculates real HUD stats from the hands you recorded — VPIP, PFR, 3-Bet, Aggression Factor, and more. Know exactly who you are up against, from your own data.",
    },
    {
      title: "AI Hand Review",
      body: "An AI coach walks your hand street by street, names the mistake, and explains the better line. Reviews are pay-per-use credits — no subscription needed to try one.",
    },
    {
      title: "Sessions & Insights",
      body: "Track buy-ins, rebuys, hours and location. See profit trends, hourly rate, and performance broken down by stakes, location and day of week — plus the mistake patterns that keep repeating.",
    },
    {
      title: "Warmup & Tilt SOS",
      body: "A pre-session warmup, breathing exercises and meditations, and a one-tap Tilt SOS for the moment it goes wrong. Bring your A-game to the table and keep it there.",
    },
    {
      title: "Drills",
      body: "Preflop range and decision drills to sharpen the spots you get wrong most.",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "Hand recording interface showing hole cards, board, positions, and action tracking",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "Live HUD stats display with VPIP, PFR, 3-Bet, and Aggression Factor metrics",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "Session tracking with buy-ins, profit trends, and performance insights",
    },
  ],
  trust: {
    title: "Built by a live poker player",
    body: "TiltFree was built by a live poker player, for live poker players. Designed for the realities of live play — record hands between deals, remember every opponent, and track every session.",
  },
  faqs: [
    {
      q: "Does TiltFree work for both cash games and tournaments?",
      a: "Yes. TiltFree supports both cash games and tournaments. Every hand you record becomes evidence you are improving.",
    },
    {
      q: "Is there a subscription?",
      a: "No. The app is free to download and use. AI hand reviews are pay-per-use credits — no subscription needed to try one.",
    },
    {
      q: "Where is my data stored?",
      a: "On your device. All hands, opponent profiles, and session history stay on your iPhone or iPad — nothing is uploaded to the cloud.",
    },
    {
      q: "Can I use TiltFree offline?",
      a: "Yes. TiltFree works completely offline. Record hands, review stats, and prepare for sessions without an internet connection. AI reviews require internet.",
    },
    {
      q: "Can I export my data?",
      a: "Yes. You can export your hand history and session data from the app.",
    },
  ],
  privacy: {
    updated: "2026-10-08",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics: anonymous usage events such as hands recorded, sessions created, AI reviews requested, and screen views. We use this to understand how the app is used and improve it.",
            "Crash reports: technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, no emails, no contacts, no location, no photos (unless you add them to opponent profiles). Your hand history, opponent profiles, and session data are stored only on your device and never uploaded.",
        ],
      },
      {
        heading: "AI hand reviews",
        body: [
          "When you request an AI hand review, the hand data is sent to our servers to generate the review. Reviews are pay-per-use credits.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the app works identically.",
            "Delete any hand, opponent, or session in the app to remove it from your device.",
            "Export your data at any time.",
          ],
        ],
      },
      {
        heading: "Children",
        body: [
          "TiltFree is not directed at children under 13 and does not knowingly collect personal information from them.",
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
};

const zhCn: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree：扑克追踪器与抬头显示",
  tagline: "记录每一手牌。记住每一个漏洞。",
  subtitle: "线下扑克追踪器与抬头显示",
  oneLiner:
    "致胜现场牌手的完整工具包：在牌桌上记录每一手牌，建立对手档案，追踪真实的抬头显示统计数据，并获得 AI 牌局复盘。",
  statusNote: "已在 App Store 上线 — iPhone 和 iPad 免费下载。",
  features: [
    {
      title: "牌局记录",
      body: "在牌桌上记录每一手牌 — 底牌、公共牌、位置、下注大小以及每条街的动作。为现场扑克设计的快速输入，让你在发牌间隙就能记录完一手牌。",
    },
    {
      title: "对手记忆",
      body: "为每一位你遇到的玩家建立档案。标记解读和倾向，添加笔记和照片，在下一次对局前搜索它们，为牌桌做好准备。",
    },
    {
      title: "实时抬头显示",
      body: "TiltFree 从你记录的牌局中计算真实的抬头显示统计数据 — VPIP、PFR、3-Bet、侵略因子等。从你自己的数据中准确了解你的对手。",
    },
    {
      title: "AI 牌局复盘",
      body: "AI 教练逐条街分析你的牌局，指出错误，并解释更好的打法。复盘采用按次付费的积分制 — 无需订阅即可尝试。",
    },
    {
      title: "对局与洞察",
      body: "追踪买入、补码、时长和地点。查看盈利趋势、时薪，以及按注额、地点和星期几细分的表现 — 还有不断重复的错误模式。",
    },
    {
      title: "热身与防上头 SOS",
      body: "对局前热身、呼吸练习和冥想，以及在关键时刻一键启动的防上头 SOS。将你的 A 级状态带到牌桌并保持下去。",
    },
    {
      title: "训练",
      body: "翻牌前范围和决策训练，磨练你最常犯错的情况。",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "牌局记录界面，显示底牌、公共牌、位置和动作追踪",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "实时抬头显示统计数据，包含 VPIP、PFR、3-Bet 和侵略因子指标",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "对局追踪，显示买入、盈利趋势和表现洞察",
    },
  ],
  trust: {
    title: "由现场牌手打造",
    body: "TiltFree 由一位现场扑克玩家为现场扑克玩家打造。专为现场扑克的实际情况设计 — 在发牌间隙记录牌局，记住每一位对手，追踪每一次对局。",
  },
  faqs: [
    {
      q: "TiltFree 支持现金局和锦标赛吗？",
      a: "是的。TiltFree 同时支持现金局和锦标赛。你记录的每一手牌都成为你进步的证据。",
    },
    {
      q: "需要订阅吗？",
      a: "不需要。应用免费下载和使用。AI 牌局复盘采用按次付费的积分制 — 无需订阅即可尝试。",
    },
    {
      q: "我的数据存储在哪里？",
      a: "在你的设备上。所有牌局、对手档案和对局历史都保存在你的 iPhone 或 iPad 上 — 不会上传到云端。",
    },
    {
      q: "TiltFree 可以离线使用吗？",
      a: "可以。TiltFree 完全支持离线使用。记录牌局、查看统计数据和准备对局都无需互联网连接。AI 复盘需要联网。",
    },
    {
      q: "可以导出数据吗？",
      a: "可以。你可以从应用中导出牌局历史和对局数据。",
    },
  ],
  privacy: {
    updated: "2026-10-08",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用分析：匿名使用事件，如记录的牌局数、创建的对局数、请求的 AI 复盘数和页面浏览。用于了解应用的使用情况并加以改进。",
            "崩溃报告：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有账号、邮箱、通讯录、位置、照片（除非你将它们添加到对手档案中）。你的牌局历史、对手档案和对局数据只保存在你的设备上，从不上传。",
        ],
      },
      {
        heading: "AI 牌局复盘",
        body: [
          "当你请求 AI 牌局复盘时，牌局数据会发送到我们的服务器以生成复盘。复盘采用按次付费的积分制。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 权限弹窗中拒绝跟踪 — 应用功能完全不受影响。",
            "在应用内删除任意牌局、对手或对局，即从设备上移除。",
            "随时导出你的数据。",
          ],
        ],
      },
      {
        heading: "儿童",
        body: ["TiltFree 不面向 13 岁以下儿童，也不会有意收集他们的个人信息。"],
      },
      {
        heading: "联系方式",
        body: ["如有疑问：发邮件至 lei@appfactory.sg。"],
      },
      {
        heading: "政策变更",
        body: ["政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。"],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree：撲克追蹤器與抬頭顯示",
  tagline: "記錄每一手牌。記住每一個漏洞。",
  subtitle: "線下撲克追蹤器與抬頭顯示",
  oneLiner:
    "致勝現場牌手的完整工具包：在牌桌上記錄每一手牌，建立對手檔案，追蹤真實的抬頭顯示統計資料，並獲得 AI 牌局複盤。",
  statusNote: "已在 App Store 上線 — iPhone 和 iPad 免費下載。",
  features: [
    {
      title: "牌局記錄",
      body: "在牌桌上記錄每一手牌 — 底牌、公共牌、位置、下注大小以及每條街的動作。為現場撲克設計的快速輸入，讓你在發牌間隙就能記錄完一手牌。",
    },
    {
      title: "對手記憶",
      body: "為每一位你遇到的玩家建立檔案。標記解讀和傾向，新增筆記和照片，在下一次對局前搜尋它們，為牌桌做好準備。",
    },
    {
      title: "即時抬頭顯示",
      body: "TiltFree 從你記錄的牌局中計算真實的抬頭顯示統計資料 — VPIP、PFR、3-Bet、侵略因子等。從你自己的資料中準確了解你的對手。",
    },
    {
      title: "AI 牌局複盤",
      body: "AI 教練逐條街分析你的牌局，指出錯誤，並解釋更好的打法。複盤採用按次付費的積分制 — 無需訂閱即可嘗試。",
    },
    {
      title: "對局與洞察",
      body: "追蹤買入、補碼、時長和地點。檢視盈利趨勢、時薪，以及按注額、地點和星期幾細分的表現 — 還有不斷重複的錯誤模式。",
    },
    {
      title: "熱身與防上頭 SOS",
      body: "對局前熱身、呼吸練習和冥想，以及在關鍵時刻一鍵啟動的防上頭 SOS。將你的 A 級狀態帶到牌桌並保持下去。",
    },
    {
      title: "訓練",
      body: "翻牌前範圍和決策訓練，磨練你最常犯錯的情況。",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "牌局記錄介面，顯示底牌、公共牌、位置和動作追蹤",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "即時抬頭顯示統計資料，包含 VPIP、PFR、3-Bet 和侵略因子指標",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "對局追蹤，顯示買入、盈利趨勢和表現洞察",
    },
  ],
  trust: {
    title: "由現場牌手打造",
    body: "TiltFree 由一位現場撲克玩家為現場撲克玩家打造。專為現場撲克的實際情況設計 — 在發牌間隙記錄牌局，記住每一位對手，追蹤每一次對局。",
  },
  faqs: [
    {
      q: "TiltFree 支援現金局和錦標賽嗎？",
      a: "是的。TiltFree 同時支援現金局和錦標賽。你記錄的每一手牌都成為你進步的證據。",
    },
    {
      q: "需要訂閱嗎？",
      a: "不需要。應用免費下載和使用。AI 牌局複盤採用按次付費的積分制 — 無需訂閱即可嘗試。",
    },
    {
      q: "我的資料儲存在哪裡？",
      a: "在你的裝置上。所有牌局、對手檔案和對局歷史都儲存在你的 iPhone 或 iPad 上 — 不會上傳到雲端。",
    },
    {
      q: "TiltFree 可以離線使用嗎？",
      a: "可以。TiltFree 完全支援離線使用。記錄牌局、檢視統計資料和準備對局都無需網際網路連線。AI 複盤需要聯網。",
    },
    {
      q: "可以匯出資料嗎？",
      a: "可以。你可以從應用中匯出牌局歷史和對局資料。",
    },
  ],
  privacy: {
    updated: "2026-10-08",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用分析：匿名使用事件，如記錄的牌局數、建立的對局數、請求的 AI 複盤數和頁面瀏覽。用於了解應用的使用情況並加以改進。",
            "當機回報：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分連結。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有帳號、Email、通訊錄、位置、照片（除非你將它們新增到對手檔案中）。你的牌局歷史、對手檔案和對局資料只儲存在你的裝置上，從不上傳。",
        ],
      },
      {
        heading: "AI 牌局複盤",
        body: [
          "當你請求 AI 牌局複盤時，牌局資料會傳送到我們的伺服器以產生複盤。複盤採用按次付費的積分制。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 權限視窗中拒絕追蹤 — 應用功能完全不受影響。",
            "在應用內刪除任意牌局、對手或對局，即從裝置上移除。",
            "隨時匯出你的資料。",
          ],
        ],
      },
      {
        heading: "兒童",
        body: ["TiltFree 不面向 13 歲以下兒童，也不會刻意收集他們的個人資訊。"],
      },
      {
        heading: "聯絡方式",
        body: ["如有疑問：來信 lei@appfactory.sg。"],
      },
      {
        heading: "政策變更",
        body: ["政策變更時我們會更新本頁面；重大變更會在應用的更新說明中註明。"],
      },
    ],
  },
};

export const tiltfree: AppContent = {
  slug: "tiltfree",
  // TODO: Assign proper sequential build number in the factory
  buildNumber: 0,
  version: "4.11",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/us/app/tiltfree-poker-tracker-hud/id6758140114?pt=119559267&ct=site&mt=8",
  appStoreId: "6758140114",
  platforms: ["iOS"],
  icon: "/apps/tiltfree/icon.jpg",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
