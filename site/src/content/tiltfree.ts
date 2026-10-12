import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "TiltFree",
  storeName: "TiltFree: Poker Hand Tracker",
  tagline: "Record a live hand with one hand, right at the table.",
  subtitle: "Poker hand tracker & AI coach",
  oneLiner:
    "Record every hand at the table with one-thumb input, then ask the AI coach for a second opinion. Built for live players by the thinking.poker team.",
  statusNote: "Live now on the App Store — free to start, Pro plan available.",
  features: [
    {
      title: "One-Handed Recording",
      body: "Set stacks on a built-in number pad with shortcuts, fold/check/call/bet/raise buttons at the edge for one-thumb use, and landscape mode that keeps every input beside the table. No system keyboard covering the action.",
    },
    {
      title: "AI Coach That Knows Your Game",
      body: "Ask for a street-by-street review of any hand. The coach reads the hand together with your stats, your notes and the villain's file, then gives you one takeaway. It's a second opinion, not a verdict.",
    },
    {
      title: "Opponent Profiles",
      body: "Build files on the regulars you face with exploit notes, style labels and optional photos. Stats built from your recorded hands: VPIP, PFR, 3-bet and c-bet.",
    },
    {
      title: "Session Insights",
      body: "Profit trends, win rate, BB per hour, and results by stakes, venue and day. See how mood and tilt line up with your results. Import past sessions from CSV exports.",
    },
    {
      title: "Chart Trainer & Drills",
      body: "Chart trainer with instant feedback, built-in thinking.poker 6-max charts or import your own. Whole-hand drills against AI opponents (TAG, LAG, nit, calling station, maniac) graded against your preflop chart.",
    },
    {
      title: "Equity Calculator",
      body: "Hold'em (cards or ranges), PLO and ESG, with up to three boards for double-board and bomb-pot spots. Free and unlimited.",
    },
    {
      title: "Mental Game Tools",
      body: "A 60-second reset for when a hand gets under your skin. Warm-up before you sit down and cool-down after. Guided meditations in natural English and Chinese voices.",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "One-handed hand recording interface at the poker table",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "Stack entry with built-in number pad and shortcuts",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "Hand replay showing street-by-street action",
    },
    {
      src: "/apps/tiltfree/shot-04.jpg",
      alt: "Chart trainer with instant feedback",
    },
  ],
  trust: {
    title: "Made by the thinking.poker team",
    body: "TiltFree is built for live players who want to get better. Record hands between deals, ask the AI coach for a second opinion, and train the spots you get wrong most. One app, built for live play.",
  },
  faqs: [
    {
      q: "What's included in the free version?",
      a: "Free includes 30 recorded hands a day, 3 AI hand reviews (plus 1 more for every 25 hands you record), 50 practice reps a day (drills and chart trainer combined), 1 custom chart pack, 3 saved equity scenarios, the full equity calculator, the learning library and the mental-game tools.",
    },
    {
      q: "What does Pro unlock?",
      a: "Pro removes the daily limits and unlocks unlimited chart packs and saved scenarios. Pro also gives you 20 AI hand reviews every month, on both the monthly and the yearly plan.",
    },
    {
      q: "Where is my data stored?",
      a: "On your device. All hands, opponent profiles, and session history stay on your iPhone or iPad. When you request an AI hand review, that hand is sent to our servers to generate the review.",
    },
    {
      q: "Can I import past sessions?",
      a: "Yes. You can import past sessions from a CSV export from other tracking apps.",
    },
    {
      q: "Does TiltFree involve real money?",
      a: "No. TiltFree is a tracking and study tool. There is no real-money gambling.",
    },
  ],
  privacy: {
    updated: "2026-10-11",
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
          "No contacts, no location. Your hand history, opponent profiles, and session data are stored only on your device. When you request an AI hand review, that hand is sent to our servers to generate the review.",
        ],
      },
      {
        heading: "Subscriptions",
        body: [
          "Pro subscriptions (monthly or yearly) are processed entirely by Apple. We never see your payment details. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the period. Manage or cancel any time in your Apple ID account settings.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the app works identically.",
            "Delete any hand, opponent, or session in the app to remove it from your device.",
            "Import or export your data at any time.",
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
  storeName: "TiltFree：德州扑克记录与AI教练",
  tagline: "在牌桌上用一只手记完一手牌。",
  subtitle: "扑克手牌记录与 AI 教练",
  oneLiner:
    "在牌桌上用单手输入记录每一手牌，再请 AI 教练给你第二意见。由 thinking.poker 团队为现场牌手打造。",
  statusNote: "已在 App Store 上线 — 免费开始，Pro 方案可选。",
  features: [
    {
      title: "单手记牌",
      body: "籌码用内建数字键盘输入，带快捷键；棄牌、过牌、跟注、下注、加注、全下按钮贴在边缘，一只拇指就按得到；横向记牌时，所有输入面板都在牌桌旁边。系统键盘不会挡住牌桌。",
    },
    {
      title: "读得懂你打法的 AI 教练",
      body: "任何一手牌都能请它逐街复盘。教练会结合这手牌、你的统计、你的笔记和对手档案，给出一个重点。它是第二意见，不是裁决。",
    },
    {
      title: "对手档案",
      body: "为常遇到的对手建立档案，包含剥削笔记、风格标签和可选照片。用你记下的手牌统计对手的入池率、翻前加注率、三次加注率和持续下注率。",
    },
    {
      title: "牌局洞察",
      body: "盈亏走势、胜率、每小时 BB 数，以及按盲注、场地和星期拆开的成绩。看情绪、上头和成绩之间的关系。可从其他应用的表格文件导入以前的牌局。",
    },
    {
      title: "图表训练与对练",
      body: "图表训练提供即时反馈，内建 thinking.poker 的 6 人桌图表或导入自己的。与 AI 对手（紧凶、松凶、岩石、跟注站、疯子）打整手牌训练，翻前决策依你的图表评分。",
    },
    {
      title: "胜率计算器",
      body: "德州（指定手牌或范围）、底池限注奥马哈和 ESG，最多三组公共牌，算双板和炸弹底池。免费，不限次数。",
    },
    {
      title: "心态工具",
      body: "被一手牌搞到上头时，先做 60 秒重置。上桌前热身、下桌后冷却。引导冥想，配有自然的中文和英文语音。",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "在牌桌上单手记录手牌的界面",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "带快捷键的内建数字键盘输入籌码",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "逐街回放手牌动作",
    },
    {
      src: "/apps/tiltfree/shot-04.jpg",
      alt: "图表训练提供即时反馈",
    },
  ],
  trust: {
    title: "由 thinking.poker 团队制作",
    body: "TiltFree 为想进步的现场牌手打造。在发牌间隙记牌、请 AI 教练给第二意见、针对最常犯错的情况训练。专为现场扑克打造的一个应用。",
  },
  faqs: [
    {
      q: "免费版包含什么？",
      a: "免费版每天可记 30 手牌、可用 3 次 AI 复盘（每记满 25 手牌再多 1 次）、练习 50 次（训练和图表训练合计），可建立 1 个自定义图表包、保存 3 个胜率情境；胜率计算器、学习文章和心态工具全部可用。",
    },
    {
      q: "Pro 解锁什么？",
      a: "Pro 取消每日上限，图表包和胜率情境不限数量；Pro 同时每月含 20 次 AI 复盘，月费和年费方案都一样。",
    },
    {
      q: "我的数据存储在哪里？",
      a: "在你的设备上。所有手牌、对手档案和对局历史都保存在你的 iPhone 或 iPad 上。请求 AI 复盘时，该手牌会发送到我们的服务器以生成复盘。",
    },
    {
      q: "可以导入以前的对局吗？",
      a: "可以。你可以从其他记账应用导出的表格文件导入以前的对局。",
    },
    {
      q: "TiltFree 涉及真钱吗？",
      a: "不涉及。TiltFree 是记录和学习工具，不涉及真钱游戏。",
    },
  ],
  privacy: {
    updated: "2026-10-11",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用分析：匿名使用事件，如记录的手牌数、创建的对局数、请求的 AI 复盘数和页面浏览。用于了解应用的使用情况并加以改进。",
            "崩溃报告：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有通讯录、位置。你的手牌历史、对手档案和对局数据只保存在你的设备上。请求 AI 复盘时，该手牌会发送到我们的服务器以生成复盘。",
        ],
      },
      {
        heading: "订阅",
        body: [
          "Pro 订阅（月费或年费）完全由 Apple 处理，我们不会接触你的付款信息。订阅会自动续订，除非在当前周期结束前至少 24 小时取消。你可以随时在 Apple ID 账号设置中管理或取消订阅。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 权限弹窗中拒绝跟踪 — 应用功能完全不受影响。",
            "在应用内删除任意手牌、对手或对局，即从设备上移除。",
            "随时导入或导出你的数据。",
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
  storeName: "TiltFree：德州撲克記錄與AI教練",
  tagline: "在牌桌上用一隻手記完一手牌。",
  subtitle: "撲克手牌記錄與 AI 教練",
  oneLiner:
    "在牌桌上用單手輸入記錄每一手牌，再請 AI 教練給你第二意見。由 thinking.poker 團隊為現場牌手打造。",
  statusNote: "已在 App Store 上線 — 免費開始，Pro 方案可選。",
  features: [
    {
      title: "單手記牌",
      body: "籌碼用內建數字鍵盤輸入，帶快捷鍵；棄牌、過牌、跟注、下注、加注、全下按鈕貼在邊緣，一隻拇指就按得到；橫向記牌時，所有輸入面板都在牌桌旁邊。系統鍵盤不會擋住牌桌。",
    },
    {
      title: "讀得懂你打法的 AI 教練",
      body: "任何一手牌都能請它逐街複盤。教練會結合這手牌、你的統計、你的筆記和對手檔案，給出一個重點。它是第二意見，不是裁決。",
    },
    {
      title: "對手檔案",
      body: "為常遇到的對手建立檔案，包含剝削筆記、風格標籤和可選照片。用你記下的手牌統計對手的入池率、翻前加注率、三次加注率和持續下注率。",
    },
    {
      title: "牌局洞察",
      body: "盈虧走勢、勝率、每小時 BB 數，以及按盲注、場地和星期拆開的成績。看情緒、上頭和成績之間的關係。可從其他應用的表格檔匯入以前的牌局。",
    },
    {
      title: "圖表訓練與對練",
      body: "圖表訓練提供即時回饋，內建 thinking.poker 的 6 人桌圖表或匯入自己的。與 AI 對手（緊凶、鬆凶、岩石、跟注站、瘋子）打整手牌訓練，翻前決策依你的圖表評分。",
    },
    {
      title: "勝率計算器",
      body: "德州（指定手牌或範圍）、底池限注奧馬哈和 ESG，最多三組公共牌，算雙板和炸彈底池。免費，不限次數。",
    },
    {
      title: "心態工具",
      body: "被一手牌搞到上頭時，先做 60 秒重置。上桌前熱身、下桌後冷卻。引導冥想，配有自然的中文和英文語音。",
    },
  ],
  screenshots: [
    {
      src: "/apps/tiltfree/shot-01.jpg",
      alt: "在牌桌上單手記錄手牌的介面",
    },
    {
      src: "/apps/tiltfree/shot-02.jpg",
      alt: "帶快捷鍵的內建數字鍵盤輸入籌碼",
    },
    {
      src: "/apps/tiltfree/shot-03.jpg",
      alt: "逐街回放手牌動作",
    },
    {
      src: "/apps/tiltfree/shot-04.jpg",
      alt: "圖表訓練提供即時回饋",
    },
  ],
  trust: {
    title: "由 thinking.poker 團隊製作",
    body: "TiltFree 為想進步的現場牌手打造。在發牌間隙記牌、請 AI 教練給第二意見、針對最常犯錯的情況訓練。專為現場撲克打造的一個 App。",
  },
  faqs: [
    {
      q: "免費版包含什麼？",
      a: "免費版每天可記 30 手牌、可用 3 次 AI 複盤（每記滿 25 手牌再多 1 次）、練習 50 次（訓練和圖表訓練合計），可建立 1 個自訂圖表包、儲存 3 個勝率情境；勝率計算器、學習文章和心態工具全部可用。",
    },
    {
      q: "Pro 解鎖什麼？",
      a: "Pro 取消每日上限，圖表包和勝率情境不限數量；Pro 同時每月含 20 次 AI 複盤，月費和年費方案都一樣。",
    },
    {
      q: "我的資料儲存在哪裡？",
      a: "在你的裝置上。所有手牌、對手檔案和對局歷史都儲存在你的 iPhone 或 iPad 上。請求 AI 複盤時，該手牌會傳送到我們的伺服器以產生複盤。",
    },
    {
      q: "可以匯入以前的對局嗎？",
      a: "可以。你可以從其他記帳應用匯出的表格檔匯入以前的對局。",
    },
    {
      q: "TiltFree 涉及真錢嗎？",
      a: "不涉及。TiltFree 是記錄和學習工具，不涉及真錢遊戲。",
    },
  ],
  privacy: {
    updated: "2026-10-11",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用分析：匿名使用事件，如記錄的手牌數、建立的對局數、請求的 AI 複盤數和頁面瀏覽。用於了解應用的使用情況並加以改進。",
            "當機回報：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分連結。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有通訊錄、位置。你的手牌歷史、對手檔案和對局資料只儲存在你的裝置上。請求 AI 複盤時，該手牌會傳送到我們的伺服器以產生複盤。",
        ],
      },
      {
        heading: "訂閱",
        body: [
          "Pro 訂閱（月費或年費）完全由 Apple 處理，我們不會接觸你的付款資訊。訂閱會自動續訂，除非在目前週期結束前至少 24 小時取消。你可以隨時在 Apple ID 帳號設定中管理或取消訂閱。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 權限視窗中拒絕追蹤 — 應用功能完全不受影響。",
            "在應用內刪除任意手牌、對手或對局，即從裝置上移除。",
            "隨時匯入或匯出你的資料。",
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
        body: ["政策變更時我們會更新本頁面；重大變更會在 App 的更新說明中註明。"],
      },
    ],
  },
};

export const tiltfree: AppContent = {
  slug: "tiltfree",
  // TODO: Assign proper sequential build number in the factory
  buildNumber: 0,
  version: "4.15",
  status: "live",
  appStoreUrl:
    "https://apps.apple.com/app/apple-store/id6758140114?pt=119559267&ct=site&mt=8",
  appStoreId: "6758140114",
  platforms: ["iOS"],
  icon: "/apps/tiltfree/icon.jpg",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
