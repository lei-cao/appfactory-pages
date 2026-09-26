// Shared privacy / terms / FAQ copy for the three puzzle-shell games
// (Courtyard Arrows, Glossy Blocks, Porcelain Trio). They run the same app
// shell, SDKs and IAP catalog, so their data practices are identical; the
// per-app files only pass their name. Keep this in sync with each app's
// apps/<slug>/fastlane/app_privacy_details.json + play_data_safety.csv in
// the appfactory repo.

import type { Locale } from "@/lib/i18n";
import type { AppLocalized, PrivacySection } from "./apps";

export const PUZZLE_GAMES_CONTACT = "lei.cao.life@gmail.com";
const UPDATED = "2026-09-26";

interface Names {
  /** Short display name, e.g. "Courtyard Arrows". */
  name: string;
  /** Shop title of the pass that also removes ads. */
  pass: string;
}

const privacyEn = ({ name }: Names): PrivacySection[] => [
  {
    heading: "What we collect",
    body: [
      [
        "Usage analytics (Google Firebase Analytics): gameplay events such as level start, complete and fail, boosters used, shop views and purchases, plus an app-instance identifier used by Firebase. We use this to understand how the game is played and to tune levels. It is not linked to your identity.",
        "Crash reports (Firebase Crashlytics): technical crash and diagnostic data (stack traces, device model, OS version) so we can fix bugs. Not linked to your identity.",
        "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier to serve and measure ads. On iOS we ask permission first with App Tracking Transparency; in regions that require it (such as the EEA and UK) Google's consent form (UMP) is shown before personalised ads load.",
        "Purchase history: the App Store or Google Play tells the app which in-app purchases you own so they can be granted and restored. Purchases are also logged as analytics events, without any payment details.",
      ],
    ],
  },
  {
    heading: "What we don't collect",
    body: [
      `${name} has no accounts and no backend. We never ask for your name, email, contacts, location, photos or messages. Your levels, stars, coins, boosters and streaks are stored only on your device.`,
    ],
  },
  {
    heading: "Ads",
    body: [
      "Full-screen ads can only appear after you win a level, never during one. A banner shows on the home and map screens only. Reward videos are always optional. The one-time Remove Ads purchase turns off the banner and full-screen ads; reward videos remain available only if you choose to watch them.",
    ],
  },
  {
    heading: "Purchases",
    body: [
      "All in-app purchases are processed by Apple App Store / Google Play. We never see your payment details.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      [
        "Decline tracking in the iOS permission prompt — the game plays exactly the same.",
        "Change your ad-consent choice anytime in Settings → \"Manage privacy consent\".",
        "Turn off the banner and full-screen ads with the one-time Remove Ads purchase.",
        "Delete the app to delete all game data stored on your device.",
      ],
    ],
  },
  {
    heading: "Children",
    body: [
      `${name} is not directed at children under 13 and does not knowingly collect personal information from them.`,
    ],
  },
  { heading: "Contact", body: [`Questions: email ${PUZZLE_GAMES_CONTACT}.`] },
  {
    heading: "Changes",
    body: [
      "We'll update this page when the policy changes; material changes will be noted in the app's release notes.",
    ],
  },
];

const privacyZhCn = ({ name }: Names): PrivacySection[] => [
  {
    heading: "我们收集的信息",
    body: [
      [
        "使用分析（Google Firebase Analytics）：关卡开始、完成与失败、道具使用、商店浏览与购买等游戏事件，以及 Firebase 使用的应用实例标识符。用于了解游戏玩法并调整关卡，不与你的身份关联。",
        "崩溃报告（Firebase Crashlytics）：技术性崩溃与诊断数据（堆栈、设备型号、系统版本），用于修复问题，不与你的身份关联。",
        "广告数据（Google AdMob）：展示广告时，Google 的 SDK 可能使用设备的广告标识符来投放和衡量广告。在 iOS 上我们会先通过「App 跟踪透明度」征求许可；在需要的地区（如欧洲经济区和英国）会在加载个性化广告前显示 Google 的同意表单（UMP）。",
        "购买记录：App Store 或 Google Play 会告知应用你拥有哪些内购项目，以便发放和恢复。购买也会作为分析事件记录，但不含任何支付信息。",
      ],
    ],
  },
  {
    heading: "我们不收集的信息",
    body: [
      `${name} 没有账号，也没有服务器后端。我们从不索取你的姓名、邮箱、通讯录、位置、照片或消息。关卡、星星、金币、道具和连续记录只保存在你的设备上。`,
    ],
  },
  {
    heading: "广告",
    body: [
      "全屏广告只会在你通关之后出现，绝不在关卡进行中出现。横幅广告只显示在主页和地图页面。奖励视频始终由你自愿选择。一次性「去除广告」内购会关闭横幅和全屏广告；奖励视频仅在你主动选择时才会播放。",
    ],
  },
  {
    heading: "购买",
    body: ["所有内购均由 Apple App Store / Google Play 处理，我们看不到你的支付信息。"],
  },
  {
    heading: "你的选择",
    body: [
      [
        "在 iOS 权限弹窗中拒绝跟踪——游戏体验完全相同。",
        "随时在「设置 → Manage privacy consent」中更改广告同意选项。",
        "通过一次性「去除广告」内购关闭横幅和全屏广告。",
        "删除应用即可删除设备上保存的全部游戏数据。",
      ],
    ],
  },
  {
    heading: "儿童",
    body: [`${name} 不面向 13 岁以下儿童，也不会刻意收集他们的个人信息。`],
  },
  { heading: "联系方式", body: [`如有疑问：来信 ${PUZZLE_GAMES_CONTACT}。`] },
  {
    heading: "政策变更",
    body: ["政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。"],
  },
];

const privacyZhTw = ({ name }: Names): PrivacySection[] => [
  {
    heading: "我們收集的資訊",
    body: [
      [
        "使用分析（Google Firebase Analytics）：關卡開始、完成與失敗、道具使用、商店瀏覽與購買等遊戲事件，以及 Firebase 使用的應用程式實例識別碼。用於了解遊戲玩法並調整關卡，不與你的身分連結。",
        "當機報告（Firebase Crashlytics）：技術性當機與診斷資料（堆疊、裝置型號、系統版本），用於修正問題，不與你的身分連結。",
        "廣告資料（Google AdMob）：顯示廣告時，Google 的 SDK 可能使用裝置的廣告識別碼來投放與衡量廣告。在 iOS 上我們會先透過「App 追蹤透明度」徵求許可；在需要的地區（如歐洲經濟區和英國）會在載入個人化廣告前顯示 Google 的同意表單（UMP）。",
        "購買紀錄：App Store 或 Google Play 會告知應用程式你擁有哪些內購項目，以便發放和恢復。購買也會作為分析事件記錄，但不含任何付款資訊。",
      ],
    ],
  },
  {
    heading: "我們不收集的資訊",
    body: [
      `${name} 沒有帳號，也沒有伺服器後端。我們從不索取你的姓名、電子郵件、聯絡人、位置、照片或訊息。關卡、星星、金幣、道具和連續紀錄只儲存在你的裝置上。`,
    ],
  },
  {
    heading: "廣告",
    body: [
      "全螢幕廣告只會在你過關之後出現，絕不在關卡進行中出現。橫幅廣告只顯示在主頁和地圖頁面。獎勵影片始終由你自願選擇。一次性「移除廣告」內購會關閉橫幅和全螢幕廣告；獎勵影片僅在你主動選擇時才會播放。",
    ],
  },
  {
    heading: "購買",
    body: ["所有內購均由 Apple App Store / Google Play 處理，我們看不到你的付款資訊。"],
  },
  {
    heading: "你的選擇",
    body: [
      [
        "在 iOS 權限提示中拒絕追蹤——遊戲體驗完全相同。",
        "隨時在「設定 → Manage privacy consent」中變更廣告同意選項。",
        "透過一次性「移除廣告」內購關閉橫幅和全螢幕廣告。",
        "刪除應用程式即可刪除裝置上儲存的全部遊戲資料。",
      ],
    ],
  },
  {
    heading: "兒童",
    body: [`${name} 不以 13 歲以下兒童為對象，也不會刻意收集他們的個人資訊。`],
  },
  { heading: "聯絡方式", body: [`如有疑問：來信 ${PUZZLE_GAMES_CONTACT}。`] },
  {
    heading: "政策變更",
    body: ["政策變更時我們會更新本頁面；重大變更會在應用程式的更新說明中註明。"],
  },
];

const termsEn = ({ name, pass }: Names): PrivacySection[] => [
  {
    heading: "License",
    body: [
      `We grant you a personal, non-exclusive, non-transferable license to install and play ${name} on devices you own or control, for your own non-commercial use, subject to the App Store or Google Play terms under which you obtained it.`,
    ],
  },
  {
    heading: "Purchases",
    body: [
      `In-app purchases (Remove Ads, the ${pass}, the starter pack and coin packs) are processed by Apple App Store / Google Play under their payment terms. Remove Ads and the ${pass} are one-time purchases that can be restored on a new device from Settings → Restore purchases or the Shop. Coins and boosters are virtual items with no cash value. Refunds are handled by the store, not by us.`,
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
      `We may update these terms; material changes will be noted in the app's release notes. Questions: ${PUZZLE_GAMES_CONTACT}.`,
    ],
  },
];

const termsZh = (
  { name, pass }: Names,
  tw: boolean,
): PrivacySection[] => {
  const t = (cn: string, zhtw: string) => (tw ? zhtw : cn);
  return [
    {
      heading: t("使用许可", "使用授權"),
      body: [
        t(
          `我们授予你个人的、非独占、不可转让的许可，在你拥有或控制的设备上安装并游玩 ${name}，仅供个人非商业用途，并受你获取应用时所适用的 App Store 或 Google Play 条款约束。`,
          `我們授予你個人的、非專屬、不可轉讓的授權，在你擁有或控制的裝置上安裝並遊玩 ${name}，僅供個人非商業用途，並受你取得應用程式時所適用的 App Store 或 Google Play 條款約束。`,
        ),
      ],
    },
    {
      heading: t("购买", "購買"),
      body: [
        t(
          `内购项目（去除广告、${pass}、新手礼包和金币包）由 Apple App Store / Google Play 按其支付条款处理。去除广告与 ${pass} 为一次性购买，可在新设备上通过「设置 → Restore purchases」或商店恢复。金币和道具为虚拟物品，没有现金价值。退款由商店处理。`,
          `內購項目（移除廣告、${pass}、新手禮包和金幣包）由 Apple App Store / Google Play 依其付款條款處理。移除廣告與 ${pass} 為一次性購買，可在新裝置上透過「設定 → Restore purchases」或商店恢復。金幣和道具為虛擬物品，沒有現金價值。退款由商店處理。`,
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
          `我们可能更新本条款；重大变更会在应用的更新说明中注明。如有疑问：${PUZZLE_GAMES_CONTACT}。`,
          `我們可能更新本條款；重大變更會在應用程式的更新說明中註明。如有疑問：${PUZZLE_GAMES_CONTACT}。`,
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

/** FAQ entries every puzzle-shell game shares (ads, purchases, data). */
export function sharedFaqs(
  locale: Locale,
  { name, pass }: Names,
): AppLocalized["faqs"] {
  switch (locale) {
    case "en":
      return [
        {
          q: `Is ${name} free?`,
          a: "Yes. Every level, the daily puzzle and Endless mode are free to play. The game is supported by ads and optional in-app purchases; coins and boosters can all be earned by playing.",
        },
        {
          q: "When do ads appear?",
          a: "A full-screen ad can only appear after you win a level — never during one, never after a daily puzzle or a retry, not before your 9th completed level, and at most once every three wins. A banner shows on the home and map screens only. Reward videos are always optional.",
        },
        {
          q: "What does Remove Ads include?",
          a: `A one-time purchase that turns off the banner and full-screen ads for good. Reward videos stay available only if you choose to watch them, and the win bonus becomes a free x2. The ${pass} includes Remove Ads too.`,
        },
        {
          q: "I got a new phone. How do I get my purchase back?",
          a: "Open Settings (gear icon on the home screen) → Restore purchases, or the Restore purchases link at the bottom of the Shop. Use the same Apple ID or Google account you bought with. Game progress is stored on the device and does not transfer.",
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
          a: "免费。所有关卡、每日谜题和无尽模式都可免费游玩。游戏由广告和可选内购支持；金币和道具都可以通过游玩获得。",
        },
        {
          q: "广告什么时候出现？",
          a: "全屏广告只会在你通关后出现——绝不在关卡中、每日谜题或重试之后出现，完成第 9 关之前不会出现，且最多每通关三次出现一次。横幅广告只显示在主页和地图页面。奖励视频始终可选。",
        },
        {
          q: "「去除广告」包含什么？",
          a: `一次性购买，永久关闭横幅和全屏广告。奖励视频仅在你主动选择时播放，通关奖励可免费翻倍（×2）。${pass} 同样包含去除广告。`,
        },
        {
          q: "换了新手机，如何恢复购买？",
          a: "打开设置（主页齿轮图标）→ Restore purchases，或点商店底部的 Restore purchases。请使用购买时的 Apple ID 或 Google 账号。游戏进度保存在设备上，不会转移。",
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
          a: "免費。所有關卡、每日謎題和無盡模式都可免費遊玩。遊戲由廣告和選購的內購支持；金幣和道具都可以透過遊玩取得。",
        },
        {
          q: "廣告什麼時候出現？",
          a: "全螢幕廣告只會在你過關後出現——絕不在關卡中、每日謎題或重試之後出現，完成第 9 關之前不會出現，且最多每過關三次出現一次。橫幅廣告只顯示在主頁和地圖頁面。獎勵影片始終可選。",
        },
        {
          q: "「移除廣告」包含什麼？",
          a: `一次性購買，永久關閉橫幅和全螢幕廣告。獎勵影片僅在你主動選擇時播放，過關獎勵可免費加倍（×2）。${pass} 同樣包含移除廣告。`,
        },
        {
          q: "換了新手機，如何恢復購買？",
          a: "開啟設定（主頁齒輪圖示）→ Restore purchases，或點商店底部的 Restore purchases。請使用購買時的 Apple ID 或 Google 帳號。遊戲進度儲存在裝置上，不會轉移。",
        },
        {
          q: "需要帳號或連網嗎？",
          a: "無需帳號，無需註冊。遊戲可離線遊玩；廣告和購買發生時需要連網。",
        },
      ];
  }
}
