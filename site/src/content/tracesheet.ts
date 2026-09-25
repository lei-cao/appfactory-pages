// TraceSheet — content in all three locales, plus the copy for its bespoke
// landing page (src/components/tracesheet/landing.tsx). The subdomain gets a
// paper-and-ink 田字格 theme via [data-app="tracesheet"] in globals.css.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized } from "./apps";

const en: AppLocalized = {
  name: "TraceSheet",
  storeName: "TraceSheet: 听写 Dictation & 描红",
  tagline: "This week's word list, ready to practice.",
  subtitle: "听写 dictation, flashcards & printable 描红 sheets",
  oneLiner:
    "TraceSheet turns this week's 听写 / spelling list into dictation practice, flashcards, and printable practice sheets — read aloud in Mandarin or English, traced by hand, marked in seconds.",
  statusNote: "In Apple's review queue — launching soon on the App Store.",
  metaTitle:
    "TraceSheet — 听写 dictation & 描红 tracing practice for bilingual kids",
  metaDescription:
    "TraceSheet turns your child's weekly 听写 or spelling list into read-aloud dictation, flashcards, and printable 田字格/米字格 tracing, stroke-order, pinyin, and handwriting sheets. No account, no ads, no tracking.",
  features: [
    {
      title: "Dictation, read aloud",
      body: "TraceSheet reads each word aloud in Mandarin or English (UK or US accent) using the device's built-in voices, while your child writes it on paper.",
    },
    {
      title: "Reveal & mark in seconds",
      body: "Flip the answer to see the hanzi in a practice grid with pinyin, mark it right there, and send missed words back into practice or straight to a printed sheet.",
    },
    {
      title: "Flashcards",
      body: "Flip through this week's list as flashcards for a quick review before or after dictation.",
    },
    {
      title: "Printable practice sheets",
      body: "田字格 or 米字格 grids with full, half, or blank 描红 tracing, 笔顺 stroke-order rows, 拼音 four-line grids, and English handwriting lines — sized for A4 or US Letter.",
    },
    {
      title: "Paste, type, or scan",
      body: "Paste or type the list, or photograph the school handout (Pro) — TraceSheet adds pinyin automatically and flags any 多音字 for you to confirm.",
    },
    {
      title: "Built for bilingual families",
      body: "English, 简体中文, and 繁體中文 in the app itself. iPhone and iPad first, with saved weekly lists and — on Pro — profiles for more than one child.",
    },
  ],
  screenshots: [],
  trust: {
    title: "No account, no ads, no tracking",
    body: "Word lists, children's names, and practice results are stored only on your device. Photos are scanned on-device and never uploaded; speech uses your device's built-in voices, also on-device. We never see your payment details — purchases are handled entirely by Apple.",
  },
  faqs: [
    {
      q: "How do I print a sheet?",
      a: "Tap Print to send it to any AirPrint printer, or share it as a PDF or image to print or save elsewhere.",
    },
    {
      q: "The voice sounds robotic — can I fix that?",
      a: "Install an Enhanced or Premium voice: iPhone Settings → Accessibility → Spoken Content → Voices → choose Chinese or English and download a higher-quality voice.",
    },
    {
      q: "Does TraceSheet work offline?",
      a: "Yes. Dictation, flashcards, and printing all work without an internet connection.",
    },
    {
      q: "Does the app support Traditional characters or zhuyin?",
      a: "The app's interface is available in 繁體中文, but practice sheets currently use mainland stroke-order standards and pinyin — zhuyin isn't supported yet.",
    },
    {
      q: "How do I restore TraceSheet Pro?",
      a: "Settings → Restore purchase. It's a one-time purchase with Family Sharing, so it carries over to a new device automatically once restored.",
    },
    {
      q: "Is my child's data shared with anyone?",
      a: "No. Nothing about your child or their word lists is shared — everything stays on your device.",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous app-usage events — for example, that a sheet was generated or a paywall was shown. We never send list contents or names.",
            "Crash reports (Firebase Crashlytics): technical crash and diagnostic data, used only to fix bugs.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "TraceSheet has no account and no sign-up. Word lists, children's names (profiles), and practice results are stored only on your device. Photos used for scanning are processed on-device with Apple's built-in text recognition and are never uploaded anywhere. Speech uses your device's built-in text-to-speech, entirely on-device.",
        ],
      },
      {
        heading: "Advertising & tracking",
        body: [
          "TraceSheet shows no ads and does not track you across apps or websites — there is no App Tracking Transparency prompt and no advertising identifier is used.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "TraceSheet Pro is a one-time purchase with Family Sharing, processed entirely by the App Store. We never see your payment details.",
        ],
      },
      {
        heading: "Children",
        body: [
          "TraceSheet is designed for a parent to use together with their child. It has no chat, no user-generated sharing, and no external links reachable by a child using the app.",
        ],
      },
      {
        heading: "Data deletion",
        body: [
          "Deleting the app removes all local data — word lists, profiles, and practice results — from your device.",
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
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "License",
        body: [
          "We grant you a personal, non-exclusive, non-transferable license to install and use TraceSheet on devices you own or control, for your own non-commercial use, subject to the App Store terms under which you obtained it.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "TraceSheet Pro is a one-time purchase processed by the App Store under its payment terms, with Family Sharing support. Restore it anytime via Settings → Restore purchase. Refunds are handled by the App Store, not by us.",
        ],
      },
      {
        heading: "Your content",
        body: [
          "Word lists, names, and photos you enter or scan are yours. TraceSheet processes them on your device to generate pinyin, stroke order, and practice sheets; we do not receive or store this content ourselves.",
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
          'TraceSheet is provided "as is", without warranties of any kind to the fullest extent permitted by law. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid for it in the twelve months before the claim.',
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
          "We may update these terms; material changes will be noted in app release notes. Continued use after a change means you accept the new terms. Questions: lei@appfactory.sg.",
        ],
      },
    ],
  },
};

const zhCn: AppLocalized = {
  name: "TraceSheet",
  storeName: "TraceSheet：听写与描红练习",
  tagline: "这周的听写清单，随时可以练。",
  subtitle: "听写默写、生字卡与描红字帖打印",
  oneLiner:
    "TraceSheet 把这周的听写/spelling 清单变成朗读默写、生字卡和可打印的练习字帖——中文或英文朗读，手写描红，几秒钟批改。",
  statusNote: "已提交 App Store 审核，即将上线。",
  metaTitle: "TraceSheet — 面向双语孩子的听写默写与描红练习",
  metaDescription:
    "TraceSheet 把孩子每周的听写或 spelling 清单变成朗读默写、生字卡，以及田字格/米字格描红、笔顺、拼音和英文书写练习字帖，可直接打印。无需账号，没有广告，不追踪。",
  features: [
    {
      title: "朗读默写",
      body: "TraceSheet 使用设备自带的语音朗读每一个词——中文或英文（英式或美式发音）——孩子在纸上写下来。",
    },
    {
      title: "几秒完成批改",
      body: "翻开答案即可看到练习格里的生字和拼音，当场批改；写错的词会重新进入练习，或者直接进入打印字帖。",
    },
    {
      title: "生字卡",
      body: "把这周的清单当作生字卡快速翻阅，默写前后都能复习。",
    },
    {
      title: "可打印练习字帖",
      body: "田字格或米字格，提供整格、半格或空白描红，还有笔顺练习行、拼音四线格和英文书写练习行——支持 A4 或 US Letter 纸型。",
    },
    {
      title: "粘贴、输入或拍照",
      body: "粘贴或输入清单，也可以拍下老师发的听写单（Pro）——TraceSheet 会自动标注拼音，遇到多音字会提示你确认。",
    },
    {
      title: "为双语家庭而生",
      body: "应用界面支持英文、简体中文和繁體中文。先支持 iPhone 和 iPad，可保存每周清单；Pro 版支持多个孩子的档案。",
    },
  ],
  screenshots: [],
  trust: {
    title: "无需账号，没有广告，不追踪",
    body: "听写清单、孩子的姓名和练习结果只保存在你的设备上。拍照识别在设备本机完成，从不上传；朗读使用设备自带的语音，同样在本机完成。我们不会看到你的付款信息——购买完全由 Apple 处理。",
  },
  faqs: [
    {
      q: "怎么打印字帖？",
      a: "点击“打印”，通过任意 AirPrint 打印机打印，或者分享为 PDF 或图片，在其他地方打印或保存。",
    },
    {
      q: "朗读声音听起来很机械，怎么办？",
      a: "安装增强版或高级语音：iPhone“设置”→“辅助功能”→“朗读内容”→“语音”，选择中文或英文，下载更高音质的语音。",
    },
    {
      q: "TraceSheet 可以离线使用吗？",
      a: "可以。默写、生字卡和打印功能都不需要联网。",
    },
    {
      q: "支持繁體字或注音吗？",
      a: "应用界面支持繁體中文，但练习字帖目前使用大陆笔顺标准和拼音，暂不支持注音。",
    },
    {
      q: "怎么恢复 TraceSheet Pro？",
      a: "“设置”→“恢复购买”。这是支持家人共享的一次性购买，恢复后会自动同步到新设备。",
    },
    {
      q: "孩子的数据会被分享出去吗？",
      a: "不会。关于孩子或他们练习清单的任何信息都不会被分享——一切都只留在你的设备上。",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "我们收集什么",
        body: [
          [
            "使用统计（Google Firebase Analytics）：匿名的应用使用事件，例如生成了一份字帖，或展示了付费墙。我们从不发送清单内容或姓名。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃与诊断数据，仅用于修复问题。",
          ],
        ],
      },
      {
        heading: "我们不收集什么",
        body: [
          "TraceSheet 没有账号，无需注册。听写清单、孩子的姓名（档案）和练习结果只保存在你的设备上。用于识别的照片在设备本机通过 Apple 内置文字识别处理，从不会上传到任何地方。朗读使用设备自带的文字转语音功能，同样完全在本机完成。",
        ],
      },
      {
        heading: "广告与追踪",
        body: [
          "TraceSheet 不展示广告，也不会跨应用或网站追踪你——没有 App 跟踪透明度弹窗，也不使用广告标识符。",
        ],
      },
      {
        heading: "购买",
        body: [
          "TraceSheet Pro 是支持家人共享的一次性购买，完全由 App Store 处理，我们不会接触你的付款信息。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "TraceSheet 是设计给家长陪孩子一起使用的应用。没有聊天功能，没有用户生成内容的分享，也没有孩子在使用时能点到的外部链接。",
        ],
      },
      {
        heading: "数据删除",
        body: [
          "删除应用会移除设备上的所有本地数据——听写清单、档案和练习结果。",
        ],
      },
      {
        heading: "联系方式",
        body: ["如有疑问：来信 lei@appfactory.sg。"],
      },
      {
        heading: "政策变更",
        body: [
          "政策变更时我们会更新本页面；重大变更会在应用的更新说明中注明。",
        ],
      },
    ],
  },
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "许可",
        body: [
          "我们授予你一项个人的、非独占、不可转让的许可：在你拥有或控制的设备上安装并使用 TraceSheet，仅限个人非商业用途，并受你获取本应用时所适用的 App Store 条款约束。",
        ],
      },
      {
        heading: "内购",
        body: [
          "TraceSheet Pro 是一次性内购，由 App Store 按其支付条款处理，支持家人共享。可随时通过“设置”→“恢复购买”找回。退款由 App Store 处理，而非我们。",
        ],
      },
      {
        heading: "你的内容",
        body: [
          "你输入或扫描的听写清单、姓名和照片归你所有。TraceSheet 在你的设备上本机处理它们，用于生成拼音、笔顺和练习字帖；我们自己不会接收或保存这些内容。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "对应用进行逆向工程、反编译或修改（法律明确允许的情形除外）。",
            "转售、出租或再分发应用及其素材。",
            "以任何违法方式使用本应用。",
          ],
        ],
      },
      {
        heading: "免责声明与责任限制",
        body: [
          "TraceSheet 按“现状”提供，在法律允许的最大范围内不附带任何形式的保证。在同等范围内，我们就与本应用相关的任何索赔所承担的全部责任，以你在索赔前十二个月内为本应用支付的金额为限。",
        ],
      },
      {
        heading: "适用法律",
        body: [
          "本条款受新加坡法律管辖。本条款不限制你居住国法律赋予你的任何不可放弃的消费者权利。",
        ],
      },
      {
        heading: "变更与联系",
        body: [
          "我们可能更新本条款；重大变更会在应用的更新说明中注明。变更后继续使用即表示接受新条款。如有疑问：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "TraceSheet",
  storeName: "TraceSheet：聽寫與描紅練習",
  tagline: "這週的聽寫清單，隨時可以練。",
  subtitle: "聽寫默寫、生字卡與描紅字帖列印",
  oneLiner:
    "TraceSheet 把這週的聽寫/spelling 清單變成朗讀默寫、生字卡和可列印的練習字帖——中文或英文朗讀，手寫描紅，幾秒鐘批改。",
  statusNote: "已送出 App Store 審核，即將上架。",
  metaTitle: "TraceSheet — 為雙語孩子打造的聽寫默寫與描紅練習",
  metaDescription:
    "TraceSheet 把孩子每週的聽寫或 spelling 清單變成朗讀默寫、生字卡，以及田字格/米字格描紅、筆順、拼音和英文書寫練習字帖，可直接列印。無需帳號，沒有廣告，不追蹤。",
  features: [
    {
      title: "朗讀默寫",
      body: "TraceSheet 使用裝置內建的語音朗讀每一個詞——中文或英文（英式或美式發音）——孩子在紙上寫下來。",
    },
    {
      title: "幾秒完成批改",
      body: "翻開答案即可看到練習格裡的生字和拼音，當場批改；寫錯的詞會重新進入練習，或直接進入列印字帖。",
    },
    {
      title: "生字卡",
      body: "把這週的清單當作生字卡快速翻閱，默寫前後都能複習。",
    },
    {
      title: "可列印練習字帖",
      body: "田字格或米字格，提供整格、半格或空白描紅，還有筆順練習行、拼音四線格和英文書寫練習行——支援 A4 或 US Letter 紙型。",
    },
    {
      title: "貼上、輸入或拍照",
      body: "貼上或輸入清單，也可以拍下老師發的聽寫單（Pro）——TraceSheet 會自動標註拼音，遇到多音字會提示你確認。",
    },
    {
      title: "為雙語家庭而生",
      body: "應用程式介面支援英文、簡體中文和繁體中文。先支援 iPhone 和 iPad，可儲存每週清單；Pro 版支援多個孩子的檔案。",
    },
  ],
  screenshots: [],
  trust: {
    title: "無需帳號，沒有廣告，不追蹤",
    body: "聽寫清單、孩子的姓名和練習結果只保存在你的裝置上。拍照辨識在裝置本機完成，從不上傳；朗讀使用裝置內建的語音，同樣在本機完成。我們不會看到你的付款資訊——購買完全由 Apple 處理。",
  },
  faqs: [
    {
      q: "怎麼列印字帖？",
      a: "點擊「列印」，透過任意 AirPrint 印表機列印，或分享為 PDF 或圖片，在其他地方列印或保存。",
    },
    {
      q: "朗讀聲音聽起來很機械，怎麼辦？",
      a: "安裝加強版或高級語音：iPhone「設定」→「輔助使用」→「朗讀內容」→「語音」，選擇中文或英文，下載音質更好的語音。",
    },
    {
      q: "TraceSheet 可以離線使用嗎？",
      a: "可以。默寫、生字卡和列印功能都不需要連網。",
    },
    {
      q: "支援繁體字或注音嗎？",
      a: "應用程式介面支援繁體中文，但練習字帖目前使用大陸筆順標準和拼音，暫不支援注音。",
    },
    {
      q: "怎麼恢復 TraceSheet Pro？",
      a: "「設定」→「恢復購買」。這是支援家人共享的一次性購買，恢復後會自動同步到新裝置。",
    },
    {
      q: "孩子的資料會被分享出去嗎？",
      a: "不會。關於孩子或他們練習清單的任何資訊都不會被分享——一切都只留在你的裝置上。",
    },
  ],
  privacy: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "我們收集什麼",
        body: [
          [
            "使用統計（Google Firebase Analytics）：匿名的應用程式使用事件，例如產生了一份字帖，或顯示了付費牆。我們從不傳送清單內容或姓名。",
            "當機報告（Firebase Crashlytics）：技術性當機與診斷資料，僅用於修復問題。",
          ],
        ],
      },
      {
        heading: "我們不收集什麼",
        body: [
          "TraceSheet 沒有帳號，無需註冊。聽寫清單、孩子的姓名（檔案）和練習結果只保存在你的裝置上。用於辨識的照片在裝置本機透過 Apple 內建文字辨識處理，從不會上傳到任何地方。朗讀使用裝置內建的文字轉語音功能，同樣完全在本機完成。",
        ],
      },
      {
        heading: "廣告與追蹤",
        body: [
          "TraceSheet 不顯示廣告，也不會跨應用程式或網站追蹤你——沒有 App 追蹤透明度彈窗，也不使用廣告識別碼。",
        ],
      },
      {
        heading: "內購",
        body: [
          "TraceSheet Pro 是支援家人共享的一次性購買，完全由 App Store 處理，我們不會接觸你的付款資訊。",
        ],
      },
      {
        heading: "兒童",
        body: [
          "TraceSheet 是設計給家長陪孩子一起使用的應用程式。沒有聊天功能，沒有使用者生成內容的分享，也沒有孩子在使用時能點到的外部連結。",
        ],
      },
      {
        heading: "資料刪除",
        body: [
          "刪除應用程式會移除裝置上的所有本機資料——聽寫清單、檔案和練習結果。",
        ],
      },
      {
        heading: "聯絡方式",
        body: ["如有疑問：來信 lei@appfactory.sg。"],
      },
      {
        heading: "政策變更",
        body: [
          "政策變更時我們會更新本頁面；重大變更會在應用程式的更新說明中註明。",
        ],
      },
    ],
  },
  terms: {
    updated: "2026-09-26",
    sections: [
      {
        heading: "授權",
        body: [
          "我們授予你一項個人的、非專屬、不可轉讓的授權：在你擁有或控制的裝置上安裝並使用 TraceSheet，僅限個人非商業用途，並受你取得本應用程式時所適用的 App Store 條款約束。",
        ],
      },
      {
        heading: "內購",
        body: [
          "TraceSheet Pro 是一次性內購，由 App Store 按其付款條款處理，支援家人共享。可隨時透過「設定」→「恢復購買」找回。退款由 App Store 處理，而非我們。",
        ],
      },
      {
        heading: "你的內容",
        body: [
          "你輸入或掃描的聽寫清單、姓名和照片歸你所有。TraceSheet 在你的裝置上本機處理它們，用於產生拼音、筆順和練習字帖；我們自己不會接收或保存這些內容。",
        ],
      },
      {
        heading: "你不可以做的事",
        body: [
          [
            "對應用程式進行逆向工程、反編譯或修改（法律明確允許的情形除外）。",
            "轉售、出租或再散布應用程式及其素材。",
            "以任何違法方式使用本應用程式。",
          ],
        ],
      },
      {
        heading: "免責聲明與責任限制",
        body: [
          "TraceSheet 按「現況」提供，在法律允許的最大範圍內不附帶任何形式的保證。在同等範圍內，我們就與本應用程式相關的任何索賠所承擔的全部責任，以你在索賠前十二個月內為本應用程式支付的金額為限。",
        ],
      },
      {
        heading: "準據法",
        body: [
          "本條款受新加坡法律管轄。本條款不限制你居住地法律賦予你的任何不可拋棄的消費者權利。",
        ],
      },
      {
        heading: "變更與聯絡",
        body: [
          "我們可能更新本條款；重大變更會在應用程式的更新說明中註明。變更後繼續使用即表示接受新條款。如有疑問：lei@appfactory.sg。",
        ],
      },
    ],
  },
};

export const tracesheet: AppContent = {
  slug: "tracesheet",
  buildNumber: 8,
  version: "1.0.0",
  status: "in-review",
  platforms: ["iOS"],
  icon: "/apps/tracesheet/icon.png",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).
// There are no screenshots yet, so the landing page composes the 田字格
// practice-grid motif in CSS/SVG instead (see components/tracesheet/landing).

export interface TracesheetSheetStyle {
  label: string;
  sub: string;
}

export interface TracesheetLanding {
  kicker: string;
  /** Three beats of the hero headline; the last renders in the accent color. */
  heroWords: [string, string, string];
  heroSub: string;
  priceNote: string;
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; body: string }[];
  insideEyebrow: string;
  insideTitle: string;
  sheetsEyebrow: string;
  sheetsTitle: string;
  sheetsIntro: string;
  sheets: [
    TracesheetSheetStyle,
    TracesheetSheetStyle,
    TracesheetSheetStyle,
    TracesheetSheetStyle,
  ];
  trustEyebrow: string;
  trustTitle: string;
  trustChips: [string, string, string, string];
  faqEyebrow: string;
  faqTitle: string;
  closingTitle: string;
  closingBody: string;
}

const landingEn: TracesheetLanding = {
  kicker: "dictation · flashcards · printable 描红 sheets",
  heroWords: ["Hear it.", "Write it.", "Mark it."],
  heroSub:
    "Turn this week's 听写 or spelling list into read-aloud dictation, flashcards, and printable practice sheets — traced by hand, marked in seconds.",
  priceNote:
    "Free to practice, always · first 5 printed sheets free · TraceSheet Pro is a one-time purchase, no subscription",
  howEyebrow: "how it works",
  howTitle: "Three steps through this week's list",
  steps: [
    {
      title: "Paste, type, or scan",
      body: "Drop in this week's word list, or photograph the school handout (Pro). TraceSheet adds pinyin automatically and flags any 多音字 for you to confirm.",
    },
    {
      title: "TraceSheet reads it aloud",
      body: "Mandarin or English, your child's choice of voice — they write each word on paper while you listen along.",
    },
    {
      title: "Reveal, mark, re-practice",
      body: "Flip to see the hanzi in a practice grid with pinyin, mark it, and send anything missed back into practice or onto a printed sheet.",
    },
  ],
  insideEyebrow: "what's inside",
  insideTitle: "One small tool for the whole week's list",
  sheetsEyebrow: "sheet styles",
  sheetsTitle: "田字格, stroke order, pinyin, and English lines",
  sheetsIntro:
    "Every practice sheet is print-ready: 田字格 or 米字格 tracing, 笔顺 stroke-order rows, 拼音 four-line grids, and English handwriting lines.",
  sheets: [
    { label: "描红 tracing", sub: "田字格 or 米字格 — full, half, or blank" },
    { label: "笔顺 stroke order", sub: "Numbered stroke-by-stroke rows" },
    { label: "拼音 four-line grids", sub: "Pinyin practice on its own" },
    { label: "English handwriting", sub: "Word lists, spelling tests, copywork" },
  ],
  trustEyebrow: "privacy",
  trustTitle: "No account, no ads, no tracking",
  trustChips: [
    "No account",
    "No ads",
    "No tracking",
    "Scanning & speech stay on-device",
  ],
  faqEyebrow: "questions",
  faqTitle: "Questions parents actually ask",
  closingTitle: "This week's list, ready when you are.",
  closingBody:
    "TraceSheet is heading to the App Store — it's in Apple's review queue right now.",
};

const landingZhCn: TracesheetLanding = {
  kicker: "听写默写 · 生字卡 · 可打印描红字帖",
  heroWords: ["听一遍。", "写下来。", "对答案。"],
  heroSub:
    "把这周的听写或 spelling 清单变成朗读默写、生字卡和可打印的练习字帖——手写描红，几秒批改。",
  priceNote:
    "练习功能永久免费 · 前 5 张打印字帖免费 · TraceSheet Pro 一次性购买，无需订阅",
  howEyebrow: "使用流程",
  howTitle: "三步，练完这周的清单",
  steps: [
    {
      title: "粘贴、输入或拍照",
      body: "放入这周的听写清单，或拍下老师发的听写单（Pro）。TraceSheet 会自动标注拼音，遇到多音字会提示你确认。",
    },
    {
      title: "TraceSheet 朗读",
      body: "中文或英文，孩子自选语音——你陪着听，孩子在纸上写下每一个词。",
    },
    {
      title: "对答案、批改、再练",
      body: "翻开练习格里的生字和拼音，当场批改；写错的词重新进入练习，或直接生成打印字帖。",
    },
  ],
  insideEyebrow: "应用功能",
  insideTitle: "小工具，管好一整周的听写",
  sheetsEyebrow: "字帖样式",
  sheetsTitle: "田字格、笔顺、拼音、英文书写",
  sheetsIntro:
    "每种练习字帖都可以直接打印——田字格/米字格描红、笔顺练习、拼音四线格，以及英文书写练习。",
  sheets: [
    { label: "描红练习", sub: "田字格或米字格，整格/半格/空白" },
    { label: "笔顺练习", sub: "逐笔编号练习行" },
    { label: "拼音四线格", sub: "单独练习拼音书写" },
    { label: "英文书写", sub: "单词表、spelling 测试与抄写" },
  ],
  trustEyebrow: "隐私",
  trustTitle: "无需账号，没有广告，不追踪",
  trustChips: ["无需账号", "没有广告", "不追踪", "拍照与朗读都在本机完成"],
  faqEyebrow: "常见问题",
  faqTitle: "家长常问的问题",
  closingTitle: "这周的清单，随时可以开练。",
  closingBody: "TraceSheet 即将登陆 App Store——目前正在 Apple 审核队列中。",
};

const landingZhTw: TracesheetLanding = {
  kicker: "聽寫默寫 · 生字卡 · 可列印描紅字帖",
  heroWords: ["聽一遍。", "寫下來。", "對答案。"],
  heroSub:
    "把這週的聽寫或 spelling 清單變成朗讀默寫、生字卡和可列印的練習字帖——手寫描紅，幾秒批改。",
  priceNote:
    "練習功能永久免費 · 前 5 張列印字帖免費 · TraceSheet Pro 一次性購買，無需訂閱",
  howEyebrow: "使用流程",
  howTitle: "三步，練完這週的清單",
  steps: [
    {
      title: "貼上、輸入或拍照",
      body: "放入這週的聽寫清單，或拍下老師發的聽寫單（Pro）。TraceSheet 會自動標註拼音，遇到多音字會提示你確認。",
    },
    {
      title: "TraceSheet 朗讀",
      body: "中文或英文，孩子自選語音——你陪著聽，孩子在紙上寫下每一個詞。",
    },
    {
      title: "對答案、批改、再練",
      body: "翻開練習格裡的生字和拼音，當場批改；寫錯的詞重新進入練習，或直接產生列印字帖。",
    },
  ],
  insideEyebrow: "應用程式功能",
  insideTitle: "小工具，管好一整週的聽寫",
  sheetsEyebrow: "字帖樣式",
  sheetsTitle: "田字格、筆順、拼音、英文書寫",
  sheetsIntro:
    "每種練習字帖都可以直接列印——田字格/米字格描紅、筆順練習、拼音四線格，以及英文書寫練習。",
  sheets: [
    { label: "描紅練習", sub: "田字格或米字格，整格/半格/空白" },
    { label: "筆順練習", sub: "逐筆編號練習行" },
    { label: "拼音四線格", sub: "單獨練習拼音書寫" },
    { label: "英文書寫", sub: "單字表、拼寫測驗與抄寫" },
  ],
  trustEyebrow: "隱私",
  trustTitle: "無需帳號，沒有廣告，不追蹤",
  trustChips: ["無需帳號", "沒有廣告", "不追蹤", "拍照與朗讀都在本機完成"],
  faqEyebrow: "常見問題",
  faqTitle: "家長常問的問題",
  closingTitle: "這週的清單，隨時可以開練。",
  closingBody: "TraceSheet 即將登陸 App Store——目前正在 Apple 審核佇列中。",
};

export const tracesheetLanding: Record<Locale, TracesheetLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};
