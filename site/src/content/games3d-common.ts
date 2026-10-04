// Shared privacy / terms / FAQ / credits copy for the three games3d games
// (Can Swap: Bottle Match, Crowd Siege, Haystack Hollow: Farm Town). They share one services
// facade (games3d/packages/game_services: Google AdMob + UMP + ATT, Firebase
// Analytics / Crashlytics / Remote Config, Apple StoreKit via in_app_purchase,
// on-device saves), so their data practices are identical; the per-app files
// only pass their name and whether the game shows full-screen ads. Wording
// follows ./puzzle-games-common.ts; keep both in sync when a fact changes.
// iOS only for now (no Google Play wording).

import type { Locale } from "@/lib/i18n";
import type { AppCredits, AppLocalized, PrivacySection } from "./apps";

export const GAMES3D_CONTACT = "lei.cao.life@gmail.com";
const UPDATED = "2026-10-04";

const MOMIZIZM_URL = "https://music.storyinvention.com/en/";

/** Music + SFX credits shown on each game's landing page (licence condition). */
export const games3dCredits: AppCredits = {
  musicLine: `Music: もみじば (Momijiba) — MOMIZizm MUSiC ${MOMIZIZM_URL}`,
  musicUrl: MOMIZIZM_URL,
  // Per-track list is added once each game's final soundtrack is locked.
  tracks: [],
  sfx: {
    line: "Sound effects: Kenney (www.kenney.nl), CC0",
    url: "https://kenney.nl/",
    licence: "CC0 1.0 (public domain)",
  },
};

export interface Names {
  /** Short display name, e.g. "Haystack Hollow". */
  name: string;
  /** True when the game shows a full-screen ad after a win. */
  interstitials: boolean;
}

const privacyEn = ({ name, interstitials }: Names): PrivacySection[] => [
  {
    heading: "What we collect",
    body: [
      [
        "Usage analytics (Google Firebase Analytics): anonymous product-interaction events such as level or battle start and finish, features used, shop views and purchases, plus an app-instance identifier used by Firebase. We use this to understand how the game is played and to tune it. It is not linked to your identity.",
        "Crash and performance data (Firebase Crashlytics): technical crash, performance and other diagnostic data (stack traces, device model, OS version) so we can fix bugs. Not linked to your identity.",
        "Tuning values (Firebase Remote Config): the app downloads game-balance and ad-frequency settings from Firebase; this does not send any personal information from your device beyond the standard app-instance identifier.",
        "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier (IDFA) to serve and measure ads. We ask permission first with Apple's App Tracking Transparency prompt, and the identifier is used for ad personalization only if you allow tracking; in regions that require it (such as the EEA and UK) Google's consent form (UMP) is shown before personalised ads load. Device ID and advertising data are the only data used for tracking, and only if you allow it.",
        "Purchase history: Apple's App Store (StoreKit) tells the app which in-app purchases you own so they can be granted and restored. Purchases are also logged as analytics events, without any payment details.",
      ],
    ],
  },
  {
    heading: "What we don't collect",
    body: [
      `${name} has no accounts, no backend of its own and no user-generated content. We never ask for your name, email, contacts, location, photos or messages. Your game progress, coins and settings are stored only on your device.`,
    ],
  },
  {
    heading: "Ads",
    body: [
      interstitials
        ? "Reward videos are always optional: they play only when you tap a button to watch one. A full-screen ad can appear only after you win, never during play. The one-time Remove Ads purchase (or a pass that includes it) turns off full-screen ads; reward videos remain available only if you choose to watch them."
        : "Reward videos are always optional: they play only when you tap a button to watch one. The game does not interrupt play with full-screen ads. Where a purchase removes ads (Remove Ads or a pass that includes it), reward videos remain available only if you choose to watch them.",
    ],
  },
  {
    heading: "Purchases",
    body: [
      "All in-app purchases are processed by the Apple App Store (StoreKit). We never see your payment details. You can restore earlier purchases at any time with Restore Purchases in Settings.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      [
        "Decline tracking in the iOS permission prompt (or turn it off later in iOS Settings → Privacy & Security → Tracking) — the game plays exactly the same.",
        "Change your ad-consent choice anytime in Settings → \"Manage privacy consent\" where it is shown.",
        "Turn off full-screen ads with the one-time Remove Ads purchase where the game offers one.",
      ],
    ],
  },
  {
    heading: "Data deletion",
    body: [
      `Game progress lives only on your device: delete ${name} to delete it. We hold no account or profile that identifies you, and the anonymous analytics and crash data described above cannot be tied back to you. For any question or request about your data, email ${GAMES3D_CONTACT}.`,
    ],
  },
  {
    heading: "Children",
    body: [
      `${name} is not directed at children under 13 and does not knowingly collect personal information from them.`,
    ],
  },
  { heading: "Contact", body: [`Questions: email ${GAMES3D_CONTACT}.`] },
  {
    heading: "Changes",
    body: [
      "We'll update this page when the policy changes; material changes will be noted in the app's release notes.",
    ],
  },
];

const privacyZhCn = ({ name, interstitials }: Names): PrivacySection[] => [
  {
    heading: "我们收集的信息",
    body: [
      [
        "使用分析（Google Firebase Analytics）：匿名的产品交互事件，如关卡或战斗的开始与结束、使用的功能、商店浏览与购买，以及 Firebase 使用的应用实例标识符。用于了解游戏玩法并加以调整，不与你的身份关联。",
        "崩溃与性能数据（Firebase Crashlytics）：技术性崩溃、性能与诊断数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
        "调参数值（Firebase Remote Config）：应用会从 Firebase 下载游戏平衡与广告频率设置；除标准的应用实例标识符外，不会从你的设备发送任何个人信息。",
        "广告数据（Google AdMob）：展示广告时，Google 的 SDK 可能使用设备的广告标识符（IDFA）来投放和衡量广告。我们会先通过 Apple 的「App 跟踪透明度」弹窗征求许可，只有在你允许跟踪时，该标识符才会用于个性化广告；在需要的地区（如欧洲经济区和英国）会在加载个性化广告前显示 Google 的同意表单（UMP）。设备 ID 和广告数据是仅有的用于跟踪的数据，且仅在你允许时使用。",
        "购买记录：Apple App Store（StoreKit）会告知应用你拥有哪些内购项目，以便发放和恢复。购买也会作为分析事件记录，但不含任何支付信息。",
      ],
    ],
  },
  {
    heading: "我们不收集的信息",
    body: [
      `${name} 没有账号，没有自建服务器后端，也没有用户生成内容。我们从不索取你的姓名、邮箱、通讯录、位置、照片或消息。游戏进度、金币和设置只保存在你的设备上。`,
    ],
  },
  {
    heading: "广告",
    body: [
      interstitials
        ? "奖励视频始终由你自愿选择：只有你点按按钮后才会播放。全屏广告只会在你获胜之后出现，绝不在游玩过程中出现。一次性「去除广告」内购（或包含它的通行证）会关闭全屏广告；奖励视频仅在你主动选择时才会播放。"
        : "奖励视频始终由你自愿选择：只有你点按按钮后才会播放。游戏不会用全屏广告打断游玩。若某项购买可去除广告（「去除广告」或包含它的通行证），奖励视频仍仅在你主动选择时才会播放。",
    ],
  },
  {
    heading: "购买",
    body: [
      "所有内购均由 Apple App Store（StoreKit）处理，我们看不到你的支付信息。你可以随时在设置中使用「恢复购买」找回以前的购买。",
    ],
  },
  {
    heading: "你的选择",
    body: [
      [
        "在 iOS 权限弹窗中拒绝跟踪（或之后在 iOS「设置 → 隐私与安全性 → 跟踪」中关闭）——游戏体验完全相同。",
        "在显示该选项的位置，随时通过「设置 → Manage privacy consent」更改广告同意选项。",
        "在游戏提供时，通过一次性「去除广告」内购关闭全屏广告。",
      ],
    ],
  },
  {
    heading: "数据删除",
    body: [
      `游戏进度只保存在你的设备上：删除 ${name} 即可删除。我们没有任何能识别你的账号或档案，上述匿名分析与崩溃数据也无法追溯到你。如对你的数据有任何疑问或请求，请来信 ${GAMES3D_CONTACT}。`,
    ],
  },
  {
    heading: "儿童",
    body: [`${name} 不面向 13 岁以下儿童，也不会刻意收集他们的个人信息。`],
  },
  { heading: "联系方式", body: [`如有疑问：来信 ${GAMES3D_CONTACT}。`] },
  {
    heading: "政策变更",
    body: ["政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。"],
  },
];

const privacyZhTw = ({ name, interstitials }: Names): PrivacySection[] => [
  {
    heading: "我們收集的資訊",
    body: [
      [
        "使用分析（Google Firebase Analytics）：匿名的產品互動事件，如關卡或戰鬥的開始與結束、使用的功能、商店瀏覽與購買，以及 Firebase 使用的應用程式實例識別碼。用於了解遊戲玩法並加以調整，不與你的身分連結。",
        "當機與效能資料（Firebase Crashlytics）：技術性當機、效能與診斷資料（堆疊、裝置型號、系統版本），用於修正問題，不與你的身分連結。",
        "調參數值（Firebase Remote Config）：應用程式會從 Firebase 下載遊戲平衡與廣告頻率設定；除標準的應用程式實例識別碼外，不會從你的裝置傳送任何個人資訊。",
        "廣告資料（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用裝置的廣告識別碼（IDFA）來投放與衡量廣告。我們會先透過 Apple 的「App 追蹤透明度」提示徵求許可，只有在你允許追蹤時，該識別碼才會用於個人化廣告；在需要的地區（如歐洲經濟區和英國）會在載入個人化廣告前顯示 Google 的同意表單（UMP）。裝置 ID 和廣告資料是僅有的用於追蹤的資料，且僅在你允許時使用。",
        "購買紀錄：Apple App Store（StoreKit）會告知應用程式你擁有哪些內購項目，以便發放和恢復。購買也會作為分析事件記錄，但不含任何付款資訊。",
      ],
    ],
  },
  {
    heading: "我們不收集的資訊",
    body: [
      `${name} 沒有帳號，沒有自建伺服器後端，也沒有使用者生成內容。我們從不索取你的姓名、電子郵件、聯絡人、位置、照片或訊息。遊戲進度、金幣和設定只儲存在你的裝置上。`,
    ],
  },
  {
    heading: "廣告",
    body: [
      interstitials
        ? "獎勵影片始終由你自願選擇：只有你點按按鈕後才會播放。全螢幕廣告只會在你獲勝之後出現，絕不在遊玩過程中出現。一次性「移除廣告」內購（或包含它的通行證）會關閉全螢幕廣告；獎勵影片僅在你主動選擇時才會播放。"
        : "獎勵影片始終由你自願選擇：只有你點按按鈕後才會播放。遊戲不會用全螢幕廣告打斷遊玩。若某項購買可移除廣告（「移除廣告」或包含它的通行證），獎勵影片仍僅在你主動選擇時才會播放。",
    ],
  },
  {
    heading: "購買",
    body: [
      "所有內購均由 Apple App Store（StoreKit）處理，我們看不到你的付款資訊。你可以隨時在設定中使用「恢復購買」找回以前的購買。",
    ],
  },
  {
    heading: "你的選擇",
    body: [
      [
        "在 iOS 權限提示中拒絕追蹤（或之後在 iOS「設定 → 隱私權與安全性 → 追蹤」中關閉）——遊戲體驗完全相同。",
        "在顯示該選項的位置，隨時透過「設定 → Manage privacy consent」變更廣告同意選項。",
        "在遊戲提供時，透過一次性「移除廣告」內購關閉全螢幕廣告。",
      ],
    ],
  },
  {
    heading: "資料刪除",
    body: [
      `遊戲進度只儲存在你的裝置上：刪除 ${name} 即可刪除。我們沒有任何能識別你的帳號或檔案，上述匿名分析與當機資料也無法追溯到你。如對你的資料有任何疑問或請求，請來信 ${GAMES3D_CONTACT}。`,
    ],
  },
  {
    heading: "兒童",
    body: [`${name} 不以 13 歲以下兒童為對象，也不會刻意收集他們的個人資訊。`],
  },
  { heading: "聯絡方式", body: [`如有疑問：來信 ${GAMES3D_CONTACT}。`] },
  {
    heading: "政策變更",
    body: ["政策變更時我們會更新本頁面；重大變更會在應用程式的更新說明中註明。"],
  },
];

const termsEn = ({ name }: Names): PrivacySection[] => [
  {
    heading: "License",
    body: [
      `We grant you a personal, non-exclusive, non-transferable license to install and play ${name} on devices you own or control, for your own non-commercial use, subject to the App Store terms under which you obtained it.`,
    ],
  },
  {
    heading: "Purchases",
    body: [
      "In-app purchases (such as Remove Ads, passes, starter packs and coin packs) are processed by the Apple App Store under its payment terms. One-time purchases such as Remove Ads can be restored on a new device from Settings → Restore Purchases. Coins, boosters and other in-game items are virtual items licensed to you with no cash value. Refunds are handled by Apple, not by us.",
    ],
  },
  {
    heading: "What you may not do",
    body: [
      [
        "Reverse-engineer, decompile, or modify the app except where law expressly permits.",
        "Resell, rent, or redistribute the app or its assets.",
        "Use the app in any unlawful way.",
      ],
    ],
  },
  {
    heading: "Disclaimer & liability",
    body: [
      `${name} is provided "as is", without warranties of any kind to the fullest extent permitted by law. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid us through the app in the twelve months before the claim.`,
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
      `We may update these terms; material changes will be noted in the app's release notes. Questions: ${GAMES3D_CONTACT}.`,
    ],
  },
];

const termsZh = ({ name }: Names, tw: boolean): PrivacySection[] => {
  const t = (cn: string, zhtw: string) => (tw ? zhtw : cn);
  return [
    {
      heading: t("使用许可", "使用授權"),
      body: [
        t(
          `我们授予你个人的、非独占、不可转让的许可，在你拥有或控制的设备上安装并游玩 ${name}，仅供个人非商业用途，并受你获取应用时所适用的 App Store 条款约束。`,
          `我們授予你個人的、非專屬、不可轉讓的授權，在你擁有或控制的裝置上安裝並遊玩 ${name}，僅供個人非商業用途，並受你取得應用程式時所適用的 App Store 條款約束。`,
        ),
      ],
    },
    {
      heading: t("购买", "購買"),
      body: [
        t(
          "内购项目（如去除广告、通行证、新手礼包和金币包）由 Apple App Store 按其支付条款处理。「去除广告」等一次性购买可在新设备上通过「设置 → Restore Purchases」恢复。金币、道具和其他游戏内物品是授权给你使用的虚拟物品，没有现金价值。退款由 Apple 处理，而不是由我们处理。",
          "內購項目（如移除廣告、通行證、新手禮包和金幣包）由 Apple App Store 依其付款條款處理。「移除廣告」等一次性購買可在新裝置上透過「設定 → Restore Purchases」恢復。金幣、道具和其他遊戲內物品是授權給你使用的虛擬物品，沒有現金價值。退款由 Apple 處理，而不是由我們處理。",
        ),
      ],
    },
    {
      heading: t("禁止行为", "禁止行為"),
      body: [
        [
          t("除法律明确允许外，不得反向工程、反编译或修改本应用。", "除法律明確允許外，不得還原工程、反編譯或修改本應用程式。"),
          t("不得转售、出租或再分发本应用或其素材。", "不得轉售、出租或再散布本應用程式或其素材。"),
          t("不得以任何违法方式使用本应用。", "不得以任何違法方式使用本應用程式。"),
        ],
      ],
    },
    {
      heading: t("免责声明与责任限制", "免責聲明與責任限制"),
      body: [
        t(
          `在法律允许的最大范围内，${name} 按「现状」提供，不附带任何形式的保证；我们对与本应用相关的任何索赔的总责任，以索赔前十二个月内你通过本应用向我们支付的金额为限。`,
          `在法律允許的最大範圍內，${name} 依「現狀」提供，不附帶任何形式的保證；我們對與本應用程式相關的任何索賠的總責任，以索賠前十二個月內你透過本應用程式向我們支付的金額為限。`,
        ),
      ],
    },
    {
      heading: t("适用法律", "準據法"),
      body: [
        t(
          "本条款受新加坡法律管辖，不限制你居住国不可放弃的消费者权利。",
          "本條款受新加坡法律管轄，不限制你居住國不可拋棄的消費者權利。",
        ),
      ],
    },
    {
      heading: t("变更与联系", "變更與聯絡"),
      body: [
        t(
          `我们可能更新本条款；重大变更会在应用的更新说明中注明。如有疑问：${GAMES3D_CONTACT}。`,
          `我們可能更新本條款；重大變更會在應用程式的更新說明中註明。如有疑問：${GAMES3D_CONTACT}。`,
        ),
      ],
    },
  ];
};

/** Privacy + terms blocks for one locale. */
export function legalFor(
  locale: Locale,
  names: Names,
): Pick<AppLocalized, "privacy" | "terms"> {
  switch (locale) {
    case "en":
      return {
        privacy: { updated: UPDATED, sections: privacyEn(names) },
        terms: { updated: UPDATED, sections: termsEn(names) },
      };
    case "zh-cn":
      return {
        privacy: { updated: UPDATED, sections: privacyZhCn(names) },
        terms: { updated: UPDATED, sections: termsZh(names, false) },
      };
    case "zh-tw":
      return {
        privacy: { updated: UPDATED, sections: privacyZhTw(names) },
        terms: { updated: UPDATED, sections: termsZh(names, true) },
      };
  }
}

/** FAQ entries every games3d game shares (ads, purchases, data). */
export function sharedFaqs(
  locale: Locale,
  { name, interstitials }: Names,
): AppLocalized["faqs"] {
  switch (locale) {
    case "en":
      return [
        {
          q: `Is ${name} free?`,
          a: "It is planned to be free to play, supported by optional reward videos and optional in-app purchases.",
        },
        {
          q: "When do ads appear?",
          a: interstitials
            ? "Reward videos only play when you tap a button to watch one. A full-screen ad can appear only after you win, never during play, and never if you own Remove Ads."
            : "Reward videos only play when you tap a button to watch one. The game does not interrupt play with full-screen ads.",
        },
        {
          q: "I got a new phone. How do I get my purchase back?",
          a: "Open Settings → Restore Purchases with the same Apple ID you bought with. Game progress is stored on the device and does not transfer.",
        },
        {
          q: "Do I need an account or an internet connection?",
          a: "No account, no sign-up. The game plays offline; ads and purchases need a connection when they happen.",
        },
      ];
    case "zh-cn":
      return [
        {
          q: `${name} 免费吗？`,
          a: "计划免费游玩，由可选的奖励视频和可选的内购支持。",
        },
        {
          q: "广告什么时候出现？",
          a: interstitials
            ? "奖励视频只有在你点按按钮后才会播放。全屏广告只会在你获胜后出现，绝不在游玩过程中出现；拥有「去除广告」后则完全不会出现。"
            : "奖励视频只有在你点按按钮后才会播放。游戏不会用全屏广告打断游玩。",
        },
        {
          q: "换了新手机，如何恢复购买？",
          a: "使用购买时的 Apple ID，打开设置 → Restore Purchases。游戏进度保存在设备上，不会转移。",
        },
        {
          q: "需要账号或联网吗？",
          a: "无需账号，无需注册。游戏可离线游玩；广告和购买发生时需要联网。",
        },
      ];
    case "zh-tw":
      return [
        {
          q: `${name} 免費嗎？`,
          a: "計畫免費遊玩，由選購的獎勵影片和選購的內購支持。",
        },
        {
          q: "廣告什麼時候出現？",
          a: interstitials
            ? "獎勵影片只有在你點按按鈕後才會播放。全螢幕廣告只會在你獲勝後出現，絕不在遊玩過程中出現；擁有「移除廣告」後則完全不會出現。"
            : "獎勵影片只有在你點按按鈕後才會播放。遊戲不會用全螢幕廣告打斷遊玩。",
        },
        {
          q: "換了新手機，如何恢復購買？",
          a: "使用購買時的 Apple ID，開啟設定 → Restore Purchases。遊戲進度儲存在裝置上，不會轉移。",
        },
        {
          q: "需要帳號或連網嗎？",
          a: "無需帳號，無需註冊。遊戲可離線遊玩；廣告和購買發生時需要連網。",
        },
      ];
  }
}
