import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "Poker Night",
  storeName: "Poker Night: Home Game Ledger",
  tagline: "Poker night, handled.",
  subtitle: "Chip ledger & equity odds",
  oneLiner:
    "The scorekeeper for your home cash game: track every buy-in live, settle the night in one tap, and check hand equity between hands.",
  statusNote: "iOS build in App Store review. Android release in progress.",
  features: [
    {
      title: "Live ledger",
      body: "Seat your regulars from a saved roster and track names, buy-ins, end chips, and profit/loss per player — always in sync. Each rebuy is one tap.",
    },
    {
      title: "The table balances itself",
      body: "Total up, total down, and the exact discrepancy if the counts are off — spotted before anyone goes home.",
    },
    {
      title: "One-tap settlement",
      body: "End the game and get who-pays-whom instantly: minimal direct transfers between players, or banker mode where everyone settles with one person.",
    },
    {
      title: "Equity calculator",
      body: "Hold'em and PLO win/tie odds for up to 6 hands, exact or Monte Carlo — checked between hands, not mid-hand.",
    },
    {
      title: "History & roster stats",
      body: "Every settled night saved with a shareable summary image for the group chat, plus lifetime nights played and net result per player.",
    },
    {
      title: "Offline-first, bilingual",
      body: "No account, no sign-up — everything stays on your device. English and 简体中文, with locale-aware profit/loss colors.",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/shot-live.png",
      alt: "Live session screen: five players with buy-ins, chip counts, and profit/loss, plus table balance totals",
    },
    {
      src: "/apps/poker-night/shot-home.png",
      alt: "Home screen: resume a live game night, with equity and history shortcuts",
    },
    {
      src: "/apps/poker-night/shot-settle.png",
      alt: "Settlement screen: who pays whom, in banker mode",
    },
    {
      src: "/apps/poker-night/shot-equity.png",
      alt: "Equity calculator: aces versus kings win odds at 82.8% to 17.2%",
    },
  ],
  trust: {
    title: "No real money, ever",
    body: "Poker Night never moves money and offers no gambling. It is a calculator and scorekeeper: it does the arithmetic and shows who owes whom; settling up happens entirely outside the app, between you and your friends.",
  },
  faqs: [
    {
      q: "Where is my data stored?",
      a: "On your device, and nowhere else. Player names, buy-ins, chip counts, and session history never leave your phone — the app has no backend and no account system.",
    },
    {
      q: "Does the app handle payments between players?",
      a: "No. Poker Night only does the arithmetic and shows who owes whom. Any settling-up happens outside the app, between you and your friends.",
    },
    {
      q: "How do I remove ads?",
      a: "Settings → Remove ads. It's a one-time purchase processed by the App Store or Google Play, and it's permanent.",
    },
    {
      q: "The chip counts don't balance — what now?",
      a: "The live session footer shows total up, total down, and the exact difference, so you can spot the missing chips before ending the game. You can still settle with an off-balance table; the discrepancy is shown on the summary.",
    },
    {
      q: "How do I delete a player or a past session?",
      a: "Swipe or long-press the entry in Roster or History. Deleting removes it from your device immediately — there is no server copy.",
    },
  ],
  privacy: {
    updated: "2026-07-09",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous usage events such as session created/settled, players added, equity calculations run, and screen views, plus device identifiers used by Firebase. We use this to understand how the app is used and improve it.",
            "Crash reports (Firebase Crashlytics): technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
            "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier to serve and measure ads. On iOS we ask permission via App Tracking Transparency first; in regions covered by GDPR we show Google's consent form (UMP) before any ads load.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, no emails, no contacts, no location, no photos, no messages. Your game ledger — player names, buy-ins, chip counts, session history — is stored only on your device and never uploaded anywhere. The app has no backend.",
        ],
      },
      {
        heading: "No real money",
        body: [
          "Poker Night never moves money. It is a scorekeeping calculator: it does the arithmetic and shows who owes whom; any settling-up happens entirely outside the app between you and your friends.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "The one-time \"Remove ads\" purchase is processed entirely by Apple App Store / Google Play. We never see your payment details.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the app works identically.",
            "Change ad-consent choices anytime in Settings → \"Manage privacy consent\".",
            "Remove ads permanently via the in-app purchase.",
            "Delete any player or session in the app to remove it from your device.",
          ],
        ],
      },
      {
        heading: "Children",
        body: [
          "Poker Night is not directed at children under 13 and does not knowingly collect personal information from them.",
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

// Copy sourced from the app's own zh-Hans App Store listing where it exists.
const zhCn: AppLocalized = {
  name: "扑克之夜",
  storeName: "扑克之夜 — 牌局记账",
  tagline: "牌局，一手搞定。",
  subtitle: "记账结算 · 胜率计算",
  oneLiner:
    "家庭现金局的记账管家：实时记录每一次买入和码量，散场一键算清谁转谁多少，局间还能顺手算一把胜率。",
  statusNote: "iOS 版本正在 App Store 审核中，Android 版本即将推出。",
  features: [
    {
      title: "实时账本",
      body: "常用玩家一键上桌，新朋友输入一次名字即可。姓名、手数、码量与盈亏实时同步，每次补码只需点一下。",
    },
    {
      title: "账目自动核对",
      body: "总水上、总水下、差额一目了然，帐不平立刻提醒——散场前就能找到少掉的码。",
    },
    {
      title: "一键结算",
      body: "结束游戏即刻出结算方案：玩家间最少笔数直接互转，或银行家模式——指定一人，所有人与其结算。",
    },
    {
      title: "胜率计算器",
      body: "德州与奥马哈（PLO），最多 6 手牌，精确枚举或蒙特卡洛，局间顺手算一把。",
    },
    {
      title: "历史与战绩",
      body: "每一局都存入历史，可生成清爽的战报图片分享到群里；名单页显示每位玩家的场次与净盈亏。",
    },
    {
      title: "完全离线 · 中英双语",
      body: "无需账号注册，所有数据只存在你的设备上。中英双语，盈亏颜色随语言习惯自动调整。",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/zh/shot-live.png",
      alt: "进行中界面：五位玩家的手数、码量与盈亏，底部是总水上、总水下与差额",
    },
    {
      src: "/apps/poker-night/zh/shot-home.png",
      alt: "主页：继续进行中的牌局，下方是胜率与历史入口",
    },
    {
      src: "/apps/poker-night/zh/shot-settle.png",
      alt: "结算界面：银行家模式下谁转谁多少",
    },
    {
      src: "/apps/poker-night/zh/shot-equity.png",
      alt: "胜率计算器：AA 对 KK，胜率 82.8% 对 17.2%",
    },
  ],
  trust: {
    title: "不涉及真钱",
    body: "扑克之夜不转账、不涉赌。它只是一个计算器和记分器：帮你算清谁欠谁多少；实际结算完全在应用之外、由你和朋友们自行完成。",
  },
  faqs: [
    {
      q: "我的数据存在哪里？",
      a: "只存在你的设备上，别处都没有。玩家姓名、买入、码量与历史记录都不会离开你的手机——应用没有后端，也没有账号系统。",
    },
    {
      q: "应用会帮玩家之间转账吗？",
      a: "不会。扑克之夜只做算术，算清谁欠谁多少；实际结算在应用之外，由你和朋友们自行完成。",
    },
    {
      q: "如何移除广告？",
      a: "设置 → 移除广告。一次性内购，由 App Store 或 Google Play 处理，永久有效。",
    },
    {
      q: "码量对不上怎么办？",
      a: "进行中页面底部实时显示总水上、总水下和差额，散场前就能发现问题。帐不平也可以照常结算，差额会标注在战报里。",
    },
    {
      q: "如何删除玩家或历史牌局？",
      a: "在名单或历史页面滑动或长按对应条目即可删除。删除立即从设备上移除——没有服务器副本。",
    },
  ],
  privacy: {
    updated: "2026-07-09",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如创建/结算牌局、添加玩家、运行胜率计算、页面浏览，以及 Firebase 使用的设备标识符。用于了解应用的使用情况并加以改进。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
            "广告数据（Google AdMob）：展示广告时，Google 的 SDK 可能使用设备的广告标识符来投放和衡量广告。iOS 上会先通过 App 跟踪透明度（ATT）征求许可；在 GDPR 适用地区，加载任何广告前会先显示 Google 的同意表单（UMP）。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "没有账号、邮箱、通讯录、位置、照片或消息。你的牌局账本——玩家姓名、买入、码量、历史记录——只保存在你的设备上，从不上传。应用没有后端。",
        ],
      },
      {
        heading: "不涉及真钱",
        body: [
          "扑克之夜从不转账。它只是一个记分计算器：帮你算清谁欠谁多少；实际结算完全在应用之外、由你和朋友们自行完成。",
        ],
      },
      {
        heading: "内购",
        body: [
          "一次性的“移除广告”内购完全由 Apple App Store / Google Play 处理，我们不会接触你的付款信息。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          [
            "在 iOS 权限弹窗中拒绝跟踪——应用功能完全不受影响。",
            "随时在 设置 →“管理隐私许可”中更改广告同意选项。",
            "通过内购永久移除广告。",
            "在应用内删除任意玩家或牌局，即从设备上移除。",
          ],
        ],
      },
      {
        heading: "儿童",
        body: ["扑克之夜不面向 13 岁以下儿童，也不会有意收集他们的个人信息。"],
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

// Traditional Chinese, Taiwan conventions (裝置/設定/內購/當機).
const zhTw: AppLocalized = {
  name: "撲克之夜",
  storeName: "撲克之夜 — 牌局記帳",
  tagline: "牌局，一手搞定。",
  subtitle: "記帳結算 · 勝率計算",
  oneLiner:
    "家庭現金局的記帳管家：即時記錄每一次買入和碼量，散場一鍵算清誰轉誰多少，局間還能順手算一把勝率。",
  statusNote: "iOS 版本正在 App Store 審核中，Android 版本即將推出。",
  features: [
    {
      title: "即時帳本",
      body: "常用玩家一鍵上桌，新朋友輸入一次名字即可。姓名、手數、碼量與盈虧即時同步，每次補碼只需點一下。",
    },
    {
      title: "帳目自動核對",
      body: "總水上、總水下、差額一目瞭然，帳不平立刻提醒——散場前就能找到少掉的碼。",
    },
    {
      title: "一鍵結算",
      body: "結束遊戲立即產生結算方案：玩家間最少筆數直接互轉，或銀行家模式——指定一人，所有人與其結算。",
    },
    {
      title: "勝率計算器",
      body: "德州與奧馬哈（PLO），最多 6 手牌，精確枚舉或蒙地卡羅，局間順手算一把。",
    },
    {
      title: "歷史與戰績",
      body: "每一局都存入歷史，可產生清爽的戰報圖片分享到群組；名單頁顯示每位玩家的場次與淨盈虧。",
    },
    {
      title: "完全離線 · 中英雙語",
      body: "無需帳號註冊，所有資料只存在你的裝置上。中英雙語，盈虧顏色隨語言習慣自動調整。",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/zh/shot-live.png",
      alt: "進行中畫面：五位玩家的手數、碼量與盈虧，底部是總水上、總水下與差額",
    },
    {
      src: "/apps/poker-night/zh/shot-home.png",
      alt: "主頁：繼續進行中的牌局，下方是勝率與歷史入口",
    },
    {
      src: "/apps/poker-night/zh/shot-settle.png",
      alt: "結算畫面：銀行家模式下誰轉誰多少",
    },
    {
      src: "/apps/poker-night/zh/shot-equity.png",
      alt: "勝率計算器：AA 對 KK，勝率 82.8% 對 17.2%",
    },
  ],
  trust: {
    title: "不涉及真錢",
    body: "撲克之夜不轉帳、不涉賭。它只是一個計算器和記分器：幫你算清誰欠誰多少；實際結算完全在 App 之外、由你和朋友們自行完成。",
  },
  faqs: [
    {
      q: "我的資料存在哪裡？",
      a: "只存在你的裝置上，別處都沒有。玩家姓名、買入、碼量與歷史記錄都不會離開你的手機——App 沒有後端，也沒有帳號系統。",
    },
    {
      q: "App 會幫玩家之間轉帳嗎？",
      a: "不會。撲克之夜只做算術，算清誰欠誰多少；實際結算在 App 之外，由你和朋友們自行完成。",
    },
    {
      q: "如何移除廣告？",
      a: "設定 → 移除廣告。一次性內購，由 App Store 或 Google Play 處理，永久有效。",
    },
    {
      q: "碼量對不上怎麼辦？",
      a: "進行中頁面底部即時顯示總水上、總水下和差額，散場前就能發現問題。帳不平也可以照常結算，差額會標註在戰報裡。",
    },
    {
      q: "如何刪除玩家或歷史牌局？",
      a: "在名單或歷史頁面滑動或長按對應條目即可刪除。刪除後立即從裝置上移除——沒有伺服器副本。",
    },
  ],
  privacy: {
    updated: "2026-07-09",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用分析（Google Firebase Analytics）：匿名使用事件，如建立/結算牌局、新增玩家、執行勝率計算、頁面瀏覽，以及 Firebase 使用的裝置識別碼。用於瞭解 App 的使用情況並加以改進。",
            "當機回報（Firebase Crashlytics）：技術性當機資料（堆疊、裝置型號、系統版本），用於修復問題，不與你的身分連結。",
            "廣告資料（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用裝置的廣告識別碼來投放和衡量廣告。iOS 上會先透過 App 追蹤透明度（ATT）徵求許可；在 GDPR 適用地區，載入任何廣告前會先顯示 Google 的同意表單（UMP）。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "沒有帳號、Email、通訊錄、位置、照片或訊息。你的牌局帳本——玩家姓名、買入、碼量、歷史記錄——只保存在你的裝置上，從不上傳。App 沒有後端。",
        ],
      },
      {
        heading: "不涉及真錢",
        body: [
          "撲克之夜從不轉帳。它只是一個記分計算器：幫你算清誰欠誰多少；實際結算完全在 App 之外、由你和朋友們自行完成。",
        ],
      },
      {
        heading: "內購",
        body: [
          "一次性的「移除廣告」內購完全由 Apple App Store / Google Play 處理，我們不會接觸你的付款資訊。",
        ],
      },
      {
        heading: "你的選擇",
        body: [
          [
            "在 iOS 權限視窗中拒絕追蹤——App 功能完全不受影響。",
            "隨時在 設定 →「管理隱私許可」中更改廣告同意選項。",
            "透過內購永久移除廣告。",
            "在 App 內刪除任意玩家或牌局，即從裝置上移除。",
          ],
        ],
      },
      {
        heading: "兒童",
        body: ["撲克之夜不面向 13 歲以下兒童，也不會刻意收集他們的個人資訊。"],
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

export const pokerNight: AppContent = {
  slug: "poker-night",
  buildNumber: 1,
  version: "1.4.0",
  status: "in-review",
  platforms: ["iOS", "Android"],
  icon: "/apps/poker-night/icon.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
