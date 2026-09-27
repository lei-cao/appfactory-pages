// TraceSheet — content in all three locales, plus the copy for its bespoke
// landing page (src/components/tracesheet/landing.tsx). The subdomain gets a
// paper-and-ink 田字格 theme via [data-app="tracesheet"] in globals.css.
//
// v7 launch copy: the positioning and the free/Pro split come from the app
// repo (apps/tracesheet/docs/design/v7-share-free-launch.md §1 and
// fastlane/metadata/ios/<locale>/description.txt). Keep them in step — the
// site must never say "5 free sheets", "3 per day" or "Chinese only".

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized, Screenshot } from "./apps";

const ASSETS = "/apps/tracesheet";

/** Store screenshots (iPhone 6.9" frames, 720px WebP) in one locale's
 * captions. The array order is what the landing page indexes into. */
function shots(dir: "en" | "zh-cn" | "zh-tw", alts: string[]): Screenshot[] {
  const files = [
    "02-library",
    "03-reading-meaning",
    "05-flashcards",
    "04-write-japanese",
    "01-dictation",
    "07-write-korean",
    "09-check-words",
    "06-tian-sheet",
    "08-english",
  ];
  return files.map((f, i) => ({
    src: `${ASSETS}/shots/${dir}/${f}.webp`,
    alt: alts[i],
  }));
}

const en: AppLocalized = {
  name: "TraceSheet",
  storeName: "TraceSheet: Chinese Worksheets",
  tagline: "Collect any word. Learn it. Print real practice.",
  subtitle: "Stroke order, kanji & hangul",
  oneLiner:
    "Collect any word in Chinese, Japanese, Korean or English, learn it — listen, flashcards, stroke-by-stroke writing, dictation — and print practice sheets that look like a copybook.",
  statusNote:
    "Version 1.0 is in App Store review — free on iPhone and iPad once approved.",
  metaTitle:
    "TraceSheet — collect words, learn them, print 田字格 practice sheets free",
  metaDescription:
    "Collect any word in Chinese, Japanese, Korean or English. Hear it, flip flashcards, write it stroke by stroke and take dictation — then print 田字格, pinyin and English practice sheets free: page 1 of every sheet, with no limit on sheets. iPhone and iPad. No account, no ads.",
  features: [
    {
      title: "Collect any word",
      body: "Tap Add a word and it lands in Quick notes. Type or paste several at once, or scan a photo, and sort them into lists later. Mixed-language lists are fine.",
    },
    {
      title: "About 2,000 words per language",
      body: "Chinese (Simplified and Traditional), Japanese, Korean and English topic decks in five levels. Search by word, reading or meaning — “shui” finds 水.",
    },
    {
      title: "Hear it, read it",
      body: "Every word shows its reading — pinyin, kana with romaji, Korean romanization or US IPA — plus its meaning and a speaker button.",
    },
    {
      title: "Write it, stroke by stroke",
      body: "Trace or write from memory with a finger or Apple Pencil. 汉字, kana and 한글 are checked stroke by stroke, in the right order.",
    },
    {
      title: "Flashcards and dictation",
      body: "Flip cards by word, reading, meaning or sound. Dictation reads each word aloud for you to write on paper, then you mark it.",
    },
    {
      title: "Print real practice",
      body: "田字格 with 描红 tracing and pinyin, pinyin four-line sheets, English handwriting lines, notebook lines and square grid — A4 or US Letter.",
    },
  ],
  screenshots: shots("en", [
    "Library: about 2,000 ready-made words in Chinese, English, Japanese and Korean decks",
    "A Chinese deck with pinyin, meanings and a speaker button on every word",
    "Flashcards for 花开 with pinyin and the meaning “flowers bloom”",
    "Writing a Japanese word on screen, stroke by stroke, following the red stroke",
    "Dictation: 春天 revealed in a 田字格 grid with pinyin, after writing it on paper",
    "Writing the Korean 사랑 stroke by stroke",
    "Checking a typed list: pinyin fills in automatically and 多音字 are flagged",
    "Building a 田字格 practice sheet with tracing, shade and cell-size options",
    "An English spelling sheet with handwriting lines",
  ]),
  trust: {
    title: "No account, no ads, no tracking",
    body: "Your words, lists and practice results stay on your device, and TraceSheet works offline. Photos are scanned on-device and never uploaded; speech and translation use your device's built-in voices and Apple's on-device translation. Purchases are handled entirely by Apple.",
  },
  faqs: [
    {
      q: "Is TraceSheet only for Chinese?",
      a: "No. It covers Chinese (Simplified and Traditional), Japanese, Korean and English, with about 2,000 words per language. A list can mix languages — each word keeps its own reading, voice and practice.",
    },
    {
      q: "What can I print for free?",
      a: "Page 1 of any everyday sheet, with no limit on how many sheets you make: 田字格 with 描红 tracing and pinyin, pinyin four-line sheets, English handwriting, notebook lines and square grid, with every layout setting. Print, share a PDF or save an image as often as you like — free exports contain page 1 of each sheet, with a small App Store QR code in the footer.",
    },
    {
      q: "Is TraceSheet Pro a subscription?",
      a: "No. Pro is a one-time purchase (USD 14.99 in the US store; the App Store shows your local price) with Family Sharing. You can try every Pro sheet option first — the preview shows page 1, and “Use free options” switches back in one tap.",
    },
    {
      q: "Can I share sheets with a class?",
      a: "Yes, and it's free. Share the PDF with a teacher or other parents, or print a stack for the whole class. The QR code on each free page lets anyone who gets a copy find the app.",
    },
    {
      q: "How do I print a sheet?",
      a: "Tap Print to send it to any AirPrint printer, or share it as a PDF or image to print or save elsewhere. Sheets come in A4 or US Letter.",
    },
    {
      q: "Does TraceSheet work offline?",
      a: "Yes. Your words, flashcards, writing, dictation and printing all work without an internet connection.",
    },
    {
      q: "Does it support zhuyin?",
      a: "Not yet. Traditional characters are in the word library, but readings and sheets use pinyin.",
    },
    {
      q: "The voice sounds robotic — can I fix that?",
      a: "Install an Enhanced or Premium voice: iPhone Settings → Accessibility → Spoken Content → Voices → choose the language and download a higher-quality voice.",
    },
    {
      q: "How do I restore TraceSheet Pro?",
      a: "Settings → Restore purchase. It's a one-time purchase with Family Sharing, so it carries over to a new device once restored.",
    },
  ],
  privacy: {
    updated: "2026-09-27",
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
          "TraceSheet has no account and no sign-up. Word lists, children's names (profiles), and practice results are stored only on your device. Photos used for scanning are processed on-device with Apple's built-in text recognition and are never uploaded anywhere. Speech uses your device's built-in text-to-speech, entirely on-device. On iOS 18 or later, missing word meanings can be translated with Apple's on-device Translation; the words are not sent to us.",
        ],
      },
      {
        heading: "Advertising & tracking",
        body: [
          "TraceSheet shows no ads and does not track you across apps or websites — there is no App Tracking Transparency prompt and no advertising identifier is used. The QR code printed on free sheets is a plain link to TraceSheet's App Store page; it carries no identifier and nothing about you or your child.",
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
          "TraceSheet is designed for a parent to use together with their child. It has no chat and no social features, and no external links reachable by a child using the app. Sheets and lists leave the device only when you print or share them yourself through the system share sheet.",
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
  storeName: "TraceSheet：田字格字帖与听写",
  tagline: "随手收词，学会它，印成真正的字帖。",
  subtitle: "笔顺描红，中日韩英都能练",
  oneLiner:
    "中文、日文、韩文、英文的词都能随手收下，再听读音、翻闪卡、一笔一笔写、做听写，最后打印成像字帖一样的练习纸。",
  statusNote: "1.0 版正在 App Store 审核中，通过后即可在 iPhone 和 iPad 上免费下载。",
  metaTitle: "TraceSheet — 随手收词，田字格字帖免费打印",
  metaDescription:
    "中文、日文、韩文、英文的词随手收下：听读音、翻闪卡、按笔顺一笔一笔写、听写，再免费打印田字格、拼音四线格和英文书写字帖——每张字帖免费打印第 1 页，不限张数。支持 iPhone 和 iPad，无需账号，没有广告。",
  features: [
    {
      title: "随手收词",
      body: "点“添加词语”，词就直接存进随手记。一次输入或粘贴好几个，或者拍照识别，以后再整理进词表。一个词表里可以混着几种语言。",
    },
    {
      title: "每种语言约 2,000 词",
      body: "中文（简体、繁体）、日文、韩文、英文，按主题分组，共五个级别。按词语、读音或意思搜索——输入“shui”就能找到“水”。",
    },
    {
      title: "会读、会听",
      body: "每个词都显示读音——拼音、假名和罗马字、韩文罗马字或美式音标——还有释义和朗读按钮。",
    },
    {
      title: "一笔一笔写",
      body: "用手指或 Apple Pencil 描红或默写。汉字、假名、韩文都会按正确笔顺逐笔检查。",
    },
    {
      title: "闪卡和听写",
      body: "闪卡正面可以是词语、读音、意思或声音。听写会把词读出来，你写在纸上再对答案。",
    },
    {
      title: "印成真正的字帖",
      body: "田字格描红（汉字上方可加拼音）、拼音四线格、英文书写线、横线纸、方格纸——A4 或 Letter 纸型。",
    },
  ],
  screenshots: shots("zh-cn", [
    "词库：中文、英文、日文、韩文，约 2,000 个现成的词",
    "中文词组：每个词都有拼音、释义和朗读按钮",
    "“花开”闪卡，带拼音和释义",
    "在屏幕上按笔顺书写日文，跟着红色笔画写",
    "听写：写在纸上后，翻开田字格里的“春天”和拼音对答案",
    "按笔顺书写韩文“사랑”",
    "检查输入的清单：拼音自动标注，多音字会提示确认",
    "制作田字格字帖：描红方式、深浅、格子大小都能调",
    "英文书写字帖，带书写线",
  ]),
  trust: {
    title: "无需账号，没有广告，不追踪",
    body: "你的词、词表和练习结果只保存在你的设备上，离线也能用。拍照识别在本机完成，从不上传；朗读和翻译使用设备自带的语音和 Apple 本机翻译。购买完全由 Apple 处理。",
  },
  faqs: [
    {
      q: "TraceSheet 只能练中文吗？",
      a: "不是。支持中文（简体、繁体）、日文、韩文和英文，每种语言约 2,000 词。一个词表可以混着几种语言，每个词都按自己的语言显示读音、朗读和练习。",
    },
    {
      q: "免费能打印什么？",
      a: "每张日常字帖都能免费打印第 1 页，字帖数量不限：田字格描红（可加拼音）、拼音四线格、英文书写、横线纸和方格纸，每一项排版都能调。打印、分享 PDF、存成图片，想印几次就印几次——免费导出的都是每张字帖的第 1 页，底部有一个小小的 App Store 二维码。",
    },
    {
      q: "TraceSheet Pro 是订阅吗？",
      a: "不是。Pro 是一次性购买（美区 14.99 美元，App Store 会显示你所在地区的价格），支持家人共享。所有 Pro 字帖选项都可以先试：预览显示第 1 页，点“改用免费选项”就能一键换回。",
    },
    {
      q: "可以把字帖分享给全班吗？",
      a: "可以，而且免费。把 PDF 发给老师或其他家长，或者给全班每人印一份。免费页面上的二维码能让拿到字帖的人找到这个应用。",
    },
    {
      q: "怎么打印字帖？",
      a: "点击“打印”，通过任意 AirPrint 打印机打印，或者分享为 PDF 或图片，在其他地方打印或保存。支持 A4 或 Letter 纸型。",
    },
    {
      q: "可以离线使用吗？",
      a: "可以。你的词、闪卡、书写、听写和打印都不需要联网。",
    },
    {
      q: "支持注音吗？",
      a: "暂不支持。词库里有繁体字，但读音和字帖使用拼音。",
    },
    {
      q: "朗读声音听起来很机械，怎么办？",
      a: "安装增强版或高级语音：iPhone“设置”→“辅助功能”→“朗读内容”→“语音”，选择对应语言，下载更高音质的语音。",
    },
    {
      q: "怎么恢复 TraceSheet Pro？",
      a: "“设置”→“恢复购买”。这是支持家人共享的一次性购买，恢复后会同步到新设备。",
    },
  ],
  privacy: {
    updated: "2026-09-27",
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
          "TraceSheet 没有账号，无需注册。听写清单、孩子的姓名（档案）和练习结果只保存在你的设备上。用于识别的照片在设备本机通过 Apple 内置文字识别处理，从不会上传到任何地方。朗读使用设备自带的文字转语音功能，同样完全在本机完成。iOS 18 及以上，缺少的释义可以通过 Apple 本机翻译补全，词语不会发送给我们。",
        ],
      },
      {
        heading: "广告与追踪",
        body: [
          "TraceSheet 不展示广告，也不会跨应用或网站追踪你——没有 App 跟踪透明度弹窗，也不使用广告标识符。免费字帖上印的二维码只是指向 TraceSheet App Store 页面的普通链接，不带任何标识，也不包含你或孩子的任何信息。",
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
          "TraceSheet 是设计给家长陪孩子一起使用的应用。没有聊天和社交功能，也没有孩子在使用时能点到的外部链接。字帖和词表只有在你自己打印或通过系统分享面板分享时才会离开设备。",
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
  storeName: "TraceSheet：田字格字帖與聽寫",
  tagline: "隨手收詞，學會它，印成真正的字帖。",
  subtitle: "筆順描紅，中日韓英都能練",
  oneLiner:
    "中文、日文、韓文、英文的詞都能隨手收下，再聽讀音、翻字卡、一筆一筆寫、做聽寫，最後列印成像字帖一樣的練習紙。",
  statusNote: "1.0 版正在 App Store 審核中，通過後即可在 iPhone 和 iPad 上免費下載。",
  metaTitle: "TraceSheet — 隨手收詞，田字格字帖免費列印",
  metaDescription:
    "中文、日文、韓文、英文的詞隨手收下：聽讀音、翻字卡、按筆順一筆一筆寫、聽寫，再免費列印田字格、拼音四線格和英文書寫字帖——每張字帖免費列印第 1 頁，不限張數。支援 iPhone 和 iPad，無需帳號，沒有廣告。",
  features: [
    {
      title: "隨手收詞",
      body: "點「新增詞語」，詞就直接存進隨手記。一次輸入或貼上好幾個，或者拍照辨識，以後再整理進詞表。一個詞表裡可以混著幾種語言。",
    },
    {
      title: "每種語言約 2,000 詞",
      body: "中文（簡體、繁體）、日文、韓文、英文，按主題分組，共五個級別。按詞語、讀音或意思搜尋——輸入「shui」就能找到「水」。",
    },
    {
      title: "會讀、會聽",
      body: "每個詞都顯示讀音——拼音、假名和羅馬字、韓文羅馬字或美式音標——還有釋義和朗讀按鈕。",
    },
    {
      title: "一筆一筆寫",
      body: "用手指或 Apple Pencil 描紅或默寫。漢字、假名、韓文都會按正確筆順逐筆檢查。",
    },
    {
      title: "字卡和聽寫",
      body: "字卡正面可以是詞語、讀音、意思或聲音。聽寫會把詞唸出來，你寫在紙上再對答案。",
    },
    {
      title: "印成真正的字帖",
      body: "田字格描紅（國字上方可加拼音）、拼音四線格、英文書寫線、橫線紙、方格紙——A4 或 Letter 紙型。",
    },
  ],
  screenshots: shots("zh-tw", [
    "詞庫：中文、英文、日文、韓文，約 2,000 個現成的詞",
    "中文詞組：每個詞都有拼音、釋義和朗讀按鈕",
    "「花開」字卡，附拼音和釋義",
    "在螢幕上按筆順書寫日文，跟著紅色筆畫寫",
    "聽寫：寫在紙上後，翻開田字格裡的「春天」和拼音對答案",
    "按筆順書寫韓文「사랑」",
    "檢查輸入的清單：拼音自動標註，多音字會提示確認",
    "製作田字格字帖：描紅方式、深淺、格子大小都能調",
    "英文書寫字帖，附書寫線",
  ]),
  trust: {
    title: "無需帳號，沒有廣告，不追蹤",
    body: "你的詞、詞表和練習結果只保存在你的裝置上，離線也能用。拍照辨識在本機完成，從不上傳；朗讀和翻譯使用裝置內建的語音和 Apple 本機翻譯。購買完全由 Apple 處理。",
  },
  faqs: [
    {
      q: "TraceSheet 只能練中文嗎？",
      a: "不是。支援中文（簡體、繁體）、日文、韓文和英文，每種語言約 2,000 詞。一個詞表可以混著幾種語言，每個詞都按自己的語言顯示讀音、朗讀和練習。",
    },
    {
      q: "免費能列印什麼？",
      a: "每張日常字帖都能免費列印第 1 頁，字帖數量不限：田字格描紅（可加拼音）、拼音四線格、英文書寫、橫線紙和方格紙，每一項排版都能調。列印、分享 PDF、存成圖片，想印幾次就印幾次——免費匯出的都是每張字帖的第 1 頁，底部有一個小小的 App Store QR 碼。",
    },
    {
      q: "TraceSheet Pro 是訂閱嗎？",
      a: "不是。Pro 是一次性購買（美區 14.99 美元，App Store 會顯示你所在地區的價格），支援家人共享。所有 Pro 字帖選項都可以先試：預覽顯示第 1 頁，點「改用免費選項」就能一鍵換回。",
    },
    {
      q: "可以把字帖分享給全班嗎？",
      a: "可以，而且免費。把 PDF 傳給老師或其他家長，或者給全班每人印一份。免費頁面上的 QR 碼能讓拿到字帖的人找到這個 App。",
    },
    {
      q: "怎麼列印字帖？",
      a: "點擊「列印」，透過任意 AirPrint 印表機列印，或分享為 PDF 或圖片，在其他地方列印或保存。支援 A4 或 Letter 紙型。",
    },
    {
      q: "可以離線使用嗎？",
      a: "可以。你的詞、字卡、書寫、聽寫和列印都不需要連網。",
    },
    {
      q: "支援注音嗎？",
      a: "暫不支援。詞庫裡有繁體字，但讀音和字帖使用拼音。",
    },
    {
      q: "朗讀聲音聽起來很機械，怎麼辦？",
      a: "安裝加強版或高級語音：iPhone「設定」→「輔助使用」→「朗讀內容」→「語音」，選擇對應語言，下載音質更好的語音。",
    },
    {
      q: "怎麼恢復 TraceSheet Pro？",
      a: "「設定」→「恢復購買」。這是支援家人共享的一次性購買，恢復後會同步到新裝置。",
    },
  ],
  privacy: {
    updated: "2026-09-27",
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
          "TraceSheet 沒有帳號，無需註冊。聽寫清單、孩子的姓名（檔案）和練習結果只保存在你的裝置上。用於辨識的照片在裝置本機透過 Apple 內建文字辨識處理，從不會上傳到任何地方。朗讀使用裝置內建的文字轉語音功能，同樣完全在本機完成。iOS 18 及以上，缺少的釋義可以透過 Apple 本機翻譯補全，詞語不會傳送給我們。",
        ],
      },
      {
        heading: "廣告與追蹤",
        body: [
          "TraceSheet 不顯示廣告，也不會跨應用程式或網站追蹤你——沒有 App 追蹤透明度彈窗，也不使用廣告識別碼。免費字帖上印的 QR 碼只是指向 TraceSheet App Store 頁面的一般連結，不帶任何識別碼，也不包含你或孩子的任何資訊。",
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
          "TraceSheet 是設計給家長陪孩子一起使用的應用程式。沒有聊天和社群功能，也沒有孩子在使用時能點到的外部連結。字帖和詞表只有在你自己列印或透過系統分享面板分享時才會離開裝置。",
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
  appStoreUrl: "https://apps.apple.com/app/id6816287607",
  appStoreId: "6816287607",
  icon: `${ASSETS}/icon.png`,
  ogImage: `${ASSETS}/og.png`,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the bespoke landing page only (not part of the generic registry).

/** Hero video set for one locale (web encodes of the promo hero cuts:
 * 16:9 for wide screens, 1:1 below 640px; H.264 + VP9, no audio). */
export interface TracesheetHeroVideo {
  wide: { mp4: string; webm: string; poster: string };
  square: { mp4: string; webm: string; poster: string };
}

function heroVideo(lang: "en" | "zh-cn"): TracesheetHeroVideo {
  const v = `${ASSETS}/video`;
  return {
    wide: {
      mp4: `${v}/hero-16x9-${lang}.mp4`,
      webm: `${v}/hero-16x9-${lang}.webm`,
      poster: `${v}/poster-16x9-${lang}.jpg`,
    },
    square: {
      mp4: `${v}/hero-1x1-${lang}.mp4`,
      webm: `${v}/hero-1x1-${lang}.webm`,
      poster: `${v}/poster-1x1-${lang}.jpg`,
    },
  };
}

/** A Free vs Pro row. `true` renders a check, `false` a dash, a string is
 * shown as-is ("3", "Try it: page 1 preview"). */
export interface TracesheetPlanRow {
  label: string;
  free: boolean | string;
  pro: boolean | string;
}

export interface TracesheetLanding {
  kicker: string;
  /** Three beats of the hero headline; the last renders in vermilion. */
  heroLines: [string, string, string];
  heroSub: string;
  /** Short facts under the download button. */
  heroFacts: string[];
  video: TracesheetHeroVideo;
  videoLabel: string;
  cta: { eyebrow: string; label: string };
  learnEyebrow: string;
  learnTitle: string;
  learnIntro: string;
  /** Each step pairs with one screenshot (index into `screenshots`). */
  learnSteps: { title: string; body: string; shot: number }[];
  printEyebrow: string;
  printTitle: string;
  printIntro: string;
  printPoints: string[];
  printShots: [number, number];
  planEyebrow: string;
  planTitle: string;
  planIntro: string;
  planFree: { name: string; price: string; note: string };
  planPro: { name: string; price: string; note: string };
  planFeatureHeader: string;
  planRows: TracesheetPlanRow[];
  planFootnote: string;
  shareEyebrow: string;
  shareTitle: string;
  shareBody: string;
  shareSteps: { title: string; body: string }[];
  trustEyebrow: string;
  trustChips: string[];
  faqEyebrow: string;
  faqTitle: string;
  closingTitle: string;
  closingBody: string;
}

const landingEn: TracesheetLanding = {
  kicker: "Chinese · Japanese · Korean · English",
  heroLines: ["Collect any word.", "Learn it.", "Print real practice."],
  heroSub:
    "Save a word the moment you meet it, in any of four languages. Hear it, flip flashcards, write it stroke by stroke, take dictation — then print sheets that look like a copybook.",
  heroFacts: ["Free one-page sheets, no limit", "iPhone & iPad", "No account, no ads"],
  video: heroVideo("en"),
  videoLabel:
    "TraceSheet in 40 seconds: add a word, browse 2,000-word decks, flip flashcards, write 花 stroke by stroke, take dictation and print a 田字格 worksheet.",
  cta: { eyebrow: "Download on the", label: "App Store" },
  learnEyebrow: "learn it",
  learnTitle: "From a word you just met to a word you can write",
  learnIntro:
    "Every word keeps its own language, so a list can hold 水, ありがとう, 사랑 and “spring” side by side.",
  learnSteps: [
    {
      title: "Collect",
      body: "Add a word in a tap, paste a whole list, or start from about 2,000 ready-made words per language.",
      shot: 0,
    },
    {
      title: "Listen",
      body: "Pinyin, kana with romaji, Korean romanization or IPA, the meaning, and a speaker button on every word.",
      shot: 1,
    },
    {
      title: "Flashcards",
      body: "Word, reading, meaning or sound on the front — or choose from four. Missed words come round again.",
      shot: 2,
    },
    {
      title: "Write it, stroke by stroke",
      body: "汉字, kana and 한글 are checked stroke by stroke, in order, with a finger or Apple Pencil.",
      shot: 3,
    },
    {
      title: "Dictation",
      body: "TraceSheet reads each word aloud; you write on paper, reveal the answer and mark it.",
      shot: 4,
    },
  ],
  printEyebrow: "print it",
  printTitle: "Practice sheets that look like a copybook",
  printIntro:
    "Type this week's list and pinyin fills in, with any 多音字 flagged for you to confirm. Then pick a sheet and print.",
  printPoints: [
    "田字格 with 描红 tracing, pinyin over the characters",
    "Pinyin four-line sheets",
    "English handwriting lines and spelling lists",
    "Notebook lines and square grid",
    "A4 or US Letter; margins, cell size, spacing, guides, trace cells and shade",
    "AirPrint, share a PDF or save an image",
  ],
  printShots: [7, 8],
  planEyebrow: "free vs pro",
  planTitle: "Everyday sheets are free. Pro is yours for good.",
  planIntro:
    "No sheet count, no trial clock. Every Pro sheet option can be tried free: the preview shows page 1, and “Use free options” switches back in one tap.",
  planFree: { name: "Free", price: "USD 0", note: "Unlimited one-page sheets" },
  planPro: {
    name: "Pro",
    price: "USD 14.99",
    note: "One-time purchase · no subscription",
  },
  planFeatureHeader: "What you get",
  planRows: [
    { label: "Learn: collect, listen, flashcards, write, dictation", free: true, pro: true },
    { label: "田字格 tian-grid sheets with 描红 tracing and pinyin", free: true, pro: true },
    { label: "Pinyin four-line, English lines, notebook lines, square grid", free: true, pro: true },
    { label: "Every layout setting, A4 or US Letter", free: true, pro: true },
    { label: "Pages per sheet", free: "Page 1", pro: "All pages" },
    { label: "Print, share PDF, save image", free: "Unlimited", pro: "Unlimited" },
    { label: "App Store QR code in the page footer", free: "Small QR", pro: "No QR" },
    { label: "笔顺 stroke-order sheets and strips", free: "Try: page 1", pro: true },
    { label: "Combined PDF — several sheet types in one file", free: "Try: page 1", pro: true },
    { label: "Fonts: 标准楷书 textbook kai, School print, Sloped print", free: "Try: page 1", pro: true },
    { label: "Blue, red, green and purple trace ink; trace fade", free: "Try: page 1", pro: true },
    { label: "Photo scans", free: "3", pro: "Unlimited" },
    { label: "More profiles", free: false, pro: true },
    { label: "Family Sharing", free: false, pro: true },
  ],
  planFootnote:
    "Price shown is the US App Store price; your App Store shows the price in your currency.",
  shareEyebrow: "for teachers & parents",
  shareTitle: "Share sheets free — with the class, the teacher, the group chat",
  shareBody:
    "Free sheets aren't a trial — they print page 1 of each sheet, and a class list usually fits on one page anyway. Print a stack for the whole class, send the PDF to the teacher, or pass it on to other parents — as often as you like. Each free page carries a small App Store QR code in the footer, so anyone holding a copy can find the app that made it.",
  shareSteps: [
    {
      title: "Make it once",
      body: "Type or paste the week's list. Pinyin fills in; choose the sheet and the layout.",
    },
    {
      title: "Share the PDF",
      body: "AirPrint, or send the PDF or an image through any app on the share sheet.",
    },
    {
      title: "Print for everyone",
      body: "No per-copy limit and no account for anyone who receives it.",
    },
  ],
  trustEyebrow: "privacy",
  trustChips: ["No account", "No ads", "No tracking", "Works offline"],
  faqEyebrow: "questions",
  faqTitle: "Short answers",
  closingTitle: "Collect a word today. Print it tonight.",
  closingBody:
    "TraceSheet is free on the App Store for iPhone and iPad, in 12 languages.",
};

const landingZhCn: TracesheetLanding = {
  kicker: "中文 · 日文 · 韩文 · 英文",
  heroLines: ["随手收词，", "学会它，", "印成真正的字帖。"],
  heroSub:
    "遇到一个词，随手收下，四种语言都行。听读音、翻闪卡、一笔一笔写、做听写——最后打印成像字帖一样的练习纸。",
  heroFacts: ["免费打印第 1 页，不限张数", "iPhone 和 iPad", "无需账号，没有广告"],
  video: heroVideo("zh-cn"),
  videoLabel:
    "40 秒看 TraceSheet：添加一个词、浏览 2,000 词词库、翻闪卡、按笔顺写“花”、做听写，再打印一张田字格字帖。",
  cta: { eyebrow: "前往下载", label: "App Store" },
  learnEyebrow: "学会它",
  learnTitle: "从刚遇到的词，到会写的词",
  learnIntro:
    "每个词都保留自己的语言，所以“水”“ありがとう”“사랑”和“spring”可以放在同一个词表里。",
  learnSteps: [
    {
      title: "收词",
      body: "一点就能加词，也可以粘贴一整份清单，或者从每种语言约 2,000 个现成的词开始。",
      shot: 0,
    },
    {
      title: "听读音",
      body: "拼音、假名和罗马字、韩文罗马字或音标，加上释义，每个词都有朗读按钮。",
      shot: 1,
    },
    {
      title: "闪卡",
      body: "正面可以是词语、读音、意思或声音，也可以四选一。没记住的词会再出现。",
      shot: 2,
    },
    {
      title: "一笔一笔写",
      body: "用手指或 Apple Pencil 书写，汉字、假名、韩文都按正确笔顺逐笔检查。",
      shot: 3,
    },
    {
      title: "听写",
      body: "TraceSheet 把词读出来，孩子写在纸上，再翻开答案批改。",
      shot: 4,
    },
  ],
  printEyebrow: "打印",
  printTitle: "像字帖一样的练习纸",
  printIntro: "输入这周的听写清单，拼音自动标注，多音字会提示你确认。选好字帖样式，就能打印。",
  printPoints: [
    "田字格描红，汉字上方可加拼音",
    "拼音四线格",
    "英文书写线和 spelling 单词表",
    "横线纸和方格纸",
    "A4 或 Letter；页边距、格子大小、行距、辅助线、描红格数、深浅都能调",
    "隔空打印、分享 PDF 或存成图片",
  ],
  printShots: [7, 8],
  planEyebrow: "免费版与 Pro",
  planTitle: "日常字帖免费印，Pro 买一次用到底。",
  planIntro:
    "不限张数，也没有试用期。所有 Pro 字帖选项都能免费试：预览显示第 1 页，点“改用免费选项”一键换回。",
  planFree: { name: "免费", price: "0 美元", note: "单页字帖不限张数" },
  planPro: { name: "Pro", price: "14.99 美元", note: "一次性购买，不是订阅" },
  planFeatureHeader: "功能",
  planRows: [
    { label: "学习：收词、听读音、闪卡、书写、听写", free: true, pro: true },
    { label: "田字格描红字帖，可加拼音", free: true, pro: true },
    { label: "拼音四线格、英文书写线、横线纸、方格纸", free: true, pro: true },
    { label: "所有排版设置，A4 或 Letter", free: true, pro: true },
    { label: "每张字帖打印页数", free: "第 1 页", pro: "全部页" },
    { label: "打印、分享 PDF、存成图片", free: "不限", pro: "不限" },
    { label: "页脚的 App Store 二维码", free: "小二维码", pro: "无二维码" },
    { label: "笔顺字帖和笔顺条", free: "可试：第 1 页", pro: true },
    { label: "合订本 PDF：几种字帖合成一个文件", free: "可试：第 1 页", pro: true },
    { label: "字体：标准楷书、School print、Sloped print", free: "可试：第 1 页", pro: true },
    { label: "蓝、红、绿、紫色描红，描红渐淡", free: "可试：第 1 页", pro: true },
    { label: "拍照识别", free: "3 次", pro: "不限" },
    { label: "更多档案", free: false, pro: true },
    { label: "家人共享", free: false, pro: true },
  ],
  planFootnote: "价格为美区 App Store 价格；你的 App Store 会显示当地货币的价格。",
  shareEyebrow: "给老师和家长",
  shareTitle: "字帖免费分享——发给全班、发给老师、发到家长群",
  shareBody:
    "免费字帖不是试用——每张只是印第 1 页，而一份听写清单通常一页就够。给全班每人印一份、把 PDF 发给老师、转给其他家长，想分享几次都行。每张免费页面的页脚都有一个小小的 App Store 二维码，拿到字帖的人扫一下就能找到这个应用。",
  shareSteps: [
    {
      title: "做一次",
      body: "输入或粘贴这周的清单，拼音自动标注；选好字帖和排版。",
    },
    {
      title: "分享 PDF",
      body: "隔空打印，或者通过分享面板里的任意应用发送 PDF 或图片。",
    },
    {
      title: "人人都能印",
      body: "不限份数，收到的人也不需要注册账号。",
    },
  ],
  trustEyebrow: "隐私",
  trustChips: ["无需账号", "没有广告", "不追踪", "离线可用"],
  faqEyebrow: "常见问题",
  faqTitle: "简单回答",
  closingTitle: "今天收下一个词，今晚印成字帖。",
  closingBody: "TraceSheet 在 App Store 免费下载，支持 iPhone 和 iPad，界面有 12 种语言。",
};

const landingZhTw: TracesheetLanding = {
  kicker: "中文 · 日文 · 韓文 · 英文",
  heroLines: ["隨手收詞，", "學會它，", "印成真正的字帖。"],
  heroSub:
    "遇到一個詞，隨手收下，四種語言都行。聽讀音、翻字卡、一筆一筆寫、做聽寫——最後列印成像字帖一樣的練習紙。",
  heroFacts: ["免費列印第 1 頁，不限張數", "iPhone 和 iPad", "無需帳號，沒有廣告"],
  // No Traditional-Chinese cut of the hero exists; the English one carries
  // no Simplified captions a zh-TW reader would trip over.
  video: heroVideo("en"),
  videoLabel:
    "40 秒看 TraceSheet：新增一個詞、瀏覽 2,000 詞詞庫、翻字卡、按筆順寫「花」、做聽寫，再列印一張田字格字帖。",
  cta: { eyebrow: "前往下載", label: "App Store" },
  learnEyebrow: "學會它",
  learnTitle: "從剛遇到的詞，到會寫的詞",
  learnIntro:
    "每個詞都保留自己的語言，所以「水」「ありがとう」「사랑」和「spring」可以放在同一個詞表裡。",
  learnSteps: [
    {
      title: "收詞",
      body: "一點就能加詞，也可以貼上一整份清單，或者從每種語言約 2,000 個現成的詞開始。",
      shot: 0,
    },
    {
      title: "聽讀音",
      body: "拼音、假名和羅馬字、韓文羅馬字或音標，加上釋義，每個詞都有朗讀按鈕。",
      shot: 1,
    },
    {
      title: "字卡",
      body: "正面可以是詞語、讀音、意思或聲音，也可以四選一。沒記住的詞會再出現。",
      shot: 2,
    },
    {
      title: "一筆一筆寫",
      body: "用手指或 Apple Pencil 書寫，漢字、假名、韓文都按正確筆順逐筆檢查。",
      shot: 3,
    },
    {
      title: "聽寫",
      body: "TraceSheet 把詞唸出來，孩子寫在紙上，再翻開答案批改。",
      shot: 4,
    },
  ],
  printEyebrow: "列印",
  printTitle: "像字帖一樣的練習紙",
  printIntro: "輸入這週的聽寫清單，拼音自動標註，多音字會提示你確認。選好字帖樣式，就能列印。",
  printPoints: [
    "田字格描紅，國字上方可加拼音",
    "拼音四線格",
    "英文書寫線和拼寫單字表",
    "橫線紙和方格紙",
    "A4 或 Letter；頁邊距、格子大小、行距、輔助線、描紅格數、深淺都能調",
    "AirPrint 列印、分享 PDF 或存成圖片",
  ],
  printShots: [7, 8],
  planEyebrow: "免費版與 Pro",
  planTitle: "日常字帖免費印，Pro 買一次用到底。",
  planIntro:
    "不限張數，也沒有試用期。所有 Pro 字帖選項都能免費試：預覽顯示第 1 頁，點「改用免費選項」一鍵換回。",
  planFree: { name: "免費", price: "0 美元", note: "單頁字帖不限張數" },
  planPro: { name: "Pro", price: "14.99 美元", note: "一次性購買，不是訂閱" },
  planFeatureHeader: "功能",
  planRows: [
    { label: "學習：收詞、聽讀音、字卡、書寫、聽寫", free: true, pro: true },
    { label: "田字格描紅字帖，可加拼音", free: true, pro: true },
    { label: "拼音四線格、英文書寫線、橫線紙、方格紙", free: true, pro: true },
    { label: "所有排版設定，A4 或 Letter", free: true, pro: true },
    { label: "每張字帖列印頁數", free: "第 1 頁", pro: "全部頁" },
    { label: "列印、分享 PDF、存成圖片", free: "不限", pro: "不限" },
    { label: "頁尾的 App Store QR 碼", free: "小 QR 碼", pro: "無 QR 碼" },
    { label: "筆順字帖和筆順條", free: "可試：第 1 頁", pro: true },
    { label: "合訂本 PDF：幾種字帖合成一個檔案", free: "可試：第 1 頁", pro: true },
    { label: "字體：標準楷書、School print、Sloped print", free: "可試：第 1 頁", pro: true },
    { label: "藍、紅、綠、紫色描紅，描紅漸淡", free: "可試：第 1 頁", pro: true },
    { label: "拍照辨識", free: "3 次", pro: "不限" },
    { label: "更多檔案", free: false, pro: true },
    { label: "家人共享", free: false, pro: true },
  ],
  planFootnote: "價格為美區 App Store 價格；你的 App Store 會顯示當地貨幣的價格。",
  shareEyebrow: "給老師和家長",
  shareTitle: "字帖免費分享——傳給全班、傳給老師、傳到家長群組",
  shareBody:
    "免費字帖不是試用——每張只是列印第 1 頁，而一份聽寫清單通常一頁就夠。給全班每人印一份、把 PDF 傳給老師、轉給其他家長，想分享幾次都行。每張免費頁面的頁尾都有一個小小的 App Store QR 碼，拿到字帖的人掃一下就能找到這個 App。",
  shareSteps: [
    {
      title: "做一次",
      body: "輸入或貼上這週的清單，拼音自動標註；選好字帖和排版。",
    },
    {
      title: "分享 PDF",
      body: "AirPrint 列印，或透過分享面板裡的任意 App 傳送 PDF 或圖片。",
    },
    {
      title: "人人都能印",
      body: "不限份數，收到的人也不需要註冊帳號。",
    },
  ],
  trustEyebrow: "隱私",
  trustChips: ["無需帳號", "沒有廣告", "不追蹤", "離線可用"],
  faqEyebrow: "常見問題",
  faqTitle: "簡單回答",
  closingTitle: "今天收下一個詞，今晚印成字帖。",
  closingBody: "TraceSheet 在 App Store 免費下載，支援 iPhone 和 iPad，介面有 12 種語言。",
};

export const tracesheetLanding: Record<Locale, TracesheetLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};
