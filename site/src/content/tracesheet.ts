// TraceSheet — content in all three locales, plus the copy for its own
// landing page (src/components/sites/tracesheet/landing.tsx). The site's look
// lives in src/components/sites/tracesheet/site.css.
//
// Facts checked against the live listing (App Store id 6816287607, v1.0.2,
// 2026-10-05) and apps/tracesheet/fastlane/metadata in the app repo.
//
// v7 launch copy: the positioning and the free/Pro split come from the app
// repo (apps/tracesheet/docs/design/v7-share-free-launch.md §1 and
// fastlane/metadata/ios/<locale>/description.txt). Keep them in step — the
// site must never say "5 free sheets", "3 per day" or "Chinese only".

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized, Screenshot } from "./apps";

const ASSETS = "/apps/tracesheet";

/** Store screenshots (iPhone 6.9" frames from fastlane, 720px WebP), in
 * App Store order. The landing page indexes into this array. */
export const SHOT_FILES = [
  "01-quick-add",
  "02-dictation",
  "03-tian-sheet",
  "04-library",
  "05-reading-meaning",
  "06-write-japanese",
  "07-flashcards",
  "08-english",
  "09-check-words",
  "10-offline",
] as const;

function shots(dir: "en" | "zh-cn" | "zh-tw", alts: string[]): Screenshot[] {
  return SHOT_FILES.map((f, i) => ({
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
    "Collect any word in Chinese, Japanese, Korean or English, learn it with audio, flashcards, stroke-by-stroke writing and dictation, and print practice sheets that look like a copybook.",
  statusNote: "Live on the App Store, free on iPhone and iPad.",
  metaTitle: "TraceSheet: Chinese Worksheets, Stroke Order & Pinyin",
  metaDescription:
    "Print free 田字格 Chinese worksheets with stroke-order tracing and pinyin. Collect words in Chinese, Japanese, Korean or English to learn. iPhone & iPad.",
  features: [
    {
      title: "Collect any word",
      body: "Tap Add a word and it lands in Quick notes. Type or paste several at once, or scan a photo, and sort them into lists later. Mixed-language lists are fine.",
    },
    {
      title: "About 2,000 words per language",
      body: "Chinese (Simplified and Traditional), Japanese, Korean and English topic decks in five levels. Search by word, reading or meaning: “shui” finds 水.",
    },
    {
      title: "Hear it, read it",
      body: "Every word shows its reading (pinyin, kana with romaji, Korean romanization or US IPA), its meaning and a speaker button.",
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
      body: "田字格 with 描红 tracing and pinyin, pinyin four-line sheets, English handwriting lines, notebook lines and square grid, on A4 or US Letter.",
    },
  ],
  screenshots: shots("en", [
    "Adding 学校 to Quick notes: pinyin xué xiào appears as you type, next to butterfly, 사랑 and ありがとう",
    "Dictation: 春天 revealed in 田字格 cells with pinyin, after writing it on paper",
    "Building a 田字格 practice sheet with 描红 tracing, pinyin, sheet types and trace colours",
    "Library of about 2,000 ready-made words: Chinese decks for numbers, colours, family and greetings",
    "A Family deck with 爸爸, 妈妈 and more: pinyin, meanings and a speaker button on every word",
    "Writing 花火 (hanabi, fireworks) stroke by stroke, following the red stroke",
    "Flashcard for 花开 with pinyin and the meaning “flowers bloom”",
    "Building an English sheet: apple, banana, happy on handwriting lines, with spelling and reading modes",
    "Checking a typed list: pinyin added automatically, with a 多音字 flagged to confirm",
    "Print preview of a 田字格 sheet with Print, Share PDF and Save image",
  ]),
  trust: {
    title: "No account, no ads, no tracking",
    body: "Your words, lists and practice results stay on your device, and TraceSheet works offline. Photos are scanned on-device and never uploaded; speech and translation use your device's built-in voices and Apple's on-device translation. Purchases are handled entirely by Apple.",
  },
  faqs: [
    {
      q: "Is TraceSheet only for Chinese?",
      a: "No. It covers Chinese (Simplified and Traditional), Japanese, Korean and English, with about 2,000 words per language. A list can mix languages, and each word keeps its own reading, voice and practice.",
    },
    {
      q: "What can I print for free?",
      a: "Page 1 of any everyday sheet, with no limit on how many sheets you make: 田字格 with 描红 tracing and pinyin, pinyin four-line sheets, English handwriting, notebook lines and square grid, with every layout setting. Print, share a PDF or save an image as often as you like. Free exports contain page 1 of each sheet, with a small App Store QR code in the footer.",
    },
    {
      q: "Is TraceSheet Pro a subscription?",
      a: "No. Pro is a one-time purchase (USD 14.99 in the US store; the App Store shows your local price) with Family Sharing. You can try every Pro sheet option first: the preview shows page 1, and “Use free options” switches back in one tap.",
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
      q: "How many rows can each character have?",
      a: "Up to 10. The first row has the model character and its trace copies; the rows below are empty boxes for writing alone. You can also repeat the whole list, from one to ten times.",
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
      q: "The voice sounds robotic. Can I fix that?",
      a: "Install an Enhanced or Premium voice: iPhone Settings → Accessibility → Spoken Content → Voices → choose the language and download a higher-quality voice.",
    },
    {
      q: "How do I restore TraceSheet Pro?",
      a: "Settings → Restore purchase. It's a one-time purchase with Family Sharing, so it carries over to a new device once restored.",
    },
  ],
  privacy: {
    updated: "2026-09-28",
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
          "TraceSheet shows no ads and does not track you across apps or websites — there is no App Tracking Transparency prompt and no advertising identifier is used. The QR code printed on sheets opens a short link on appfactory.sg that forwards to TraceSheet's App Store page (or this site on other devices). The link says only that it came from a printed sheet; it carries no identifier and nothing about you or your child. Our web host keeps standard request logs (such as IP address and browser type) for security, as any website does.",
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
  statusNote: "已在 App Store 上线，iPhone 和 iPad 均可免费下载。",
  metaTitle: "TraceSheet：田字格字帖与听写｜笔顺描红，免费打印",
  metaDescription:
    "免费打印田字格字帖、拼音四线格和英文书写纸，汉字描红带拼音。中日韩英的词随手收下，听读音、翻闪卡、按笔顺书写、做听写。支持 iPhone 和 iPad，无需账号。",
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
    "随手记里已有 사랑、ありがとう 和“学校”，正在添加 butterfly",
    "听写：在纸上写完后，翻开田字格里的“春天”和拼音对答案",
    "制作田字格字帖：描红、拼音、字帖类型和描红颜色都能选",
    "词库：简体中文的数字、颜色等主题词组，每种语言约 2,000 个现成的词",
    "英文“颜色”词组：red、orange、yellow，带音标、中文释义和朗读按钮",
    "按笔顺书写日文“花火”（hanabi，烟花），跟着红色笔画写",
    "英文单词闪卡：apple，带音标和中文释义“苹果”",
    "英文字帖：书写线、拼写测验和单词表",
    "检查输入的清单：拼音自动标注，多音字会提示确认",
    "田字格字帖的打印预览，可以打印、分享 PDF 或存成图片",
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
      q: "每个字能印几行？",
      a: "最多 10 行。第一行是范字和描红，下面几行是空格，让孩子自己独立书写。还可以把整个词表重复 1 到 10 遍。",
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
    updated: "2026-09-28",
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
          "TraceSheet 不展示广告，也不会跨应用或网站追踪你——没有 App 跟踪透明度弹窗，也不使用广告标识符。字帖上印的二维码是 appfactory.sg 上的一个短链接，会转到 TraceSheet 的 App Store 页面（其他设备则转到本网站）。链接只表明它来自打印的字帖，不带任何标识，也不包含你或孩子的任何信息。和所有网站一样，我们的网站托管方会出于安全原因保留常规访问日志（如 IP 地址和浏览器类型）。",
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
  statusNote: "已在 App Store 上線，iPhone 和 iPad 皆可免費下載。",
  metaTitle: "TraceSheet：田字格字帖與聽寫｜筆順描紅，免費列印",
  metaDescription:
    "免費列印田字格字帖、拼音四線格和英文書寫紙，國字描紅附拼音。中日韓英的詞隨手收下，聽讀音、翻字卡、按筆順書寫、做聽寫。支援 iPhone 和 iPad，無需帳號。",
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
    "隨手記裡已有 사랑、ありがとう 和「学校」，正在新增 butterfly",
    "聽寫：在紙上寫完後，翻開田字格裡的「春天」和拼音對答案",
    "製作田字格字帖：描紅、拼音、字帖類型和描紅顏色都能選",
    "詞庫：繁體中文的數字、顏色等主題詞組，每種語言約 2,000 個現成的詞",
    "英文「顏色」詞組：red、orange、yellow，附音標、中文釋義和朗讀按鈕",
    "按筆順書寫日文「花火」（hanabi，煙火），跟著紅色筆畫寫",
    "英文單字卡：apple，附音標和中文釋義「蘋果」",
    "英文字帖：書寫線、拼寫測驗和單字表",
    "檢查輸入的清單：拼音自動標註，多音字會提示確認",
    "田字格字帖的列印預覽，可以列印、分享 PDF 或存成圖片",
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
      q: "每個字能印幾行？",
      a: "最多 10 行。第一行是範字和描紅，下面幾行是空格，讓孩子自己獨立書寫。還可以把整個詞表重複 1 到 10 遍。",
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
    updated: "2026-09-28",
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
          "TraceSheet 不顯示廣告，也不會跨應用程式或網站追蹤你——沒有 App 追蹤透明度彈窗，也不使用廣告識別碼。字帖上印的 QR 碼是 appfactory.sg 上的一個短連結，會轉到 TraceSheet 的 App Store 頁面（其他裝置則轉到本網站）。連結只表明它來自列印的字帖，不帶任何識別碼，也不包含你或孩子的任何資訊。和所有網站一樣，我們的網站代管商會基於安全原因保留一般存取紀錄（如 IP 位址和瀏覽器類型）。",
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
  category: "app",
  schemaCategory: "EducationalApplication",
  buildNumber: 8,
  version: "1.0.2",
  status: "live",
  platforms: ["iOS"],
  // ct=site attributes site downloads in App Store Connect analytics.
  appStoreUrl: "https://apps.apple.com/app/id6816287607?pt=119559267&ct=site&mt=8",
  appStoreId: "6816287607",
  proOffer: { name: "TraceSheet Pro", price: "14.99" },
  icon: `${ASSETS}/icon.png`,
  ogImage: `${ASSETS}/og.png`,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};


// ---------------------------------------------------------------------------
// Copy for the landing page only (not part of the shared registry).

/** Hero video set for one locale (web encodes of the promo hero cuts:
 * 16:9 and 1:1, H.264 + VP9, no audio). The landing plays the 1:1 cut. */
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
 * shown as-is ("Page 1", "Try: page 1"). */
export interface TracesheetPlanRow {
  label: string;
  free: boolean | string;
  pro: boolean | string;
}

/** Script of a word typed into the try-it sheet; picks the sheet style. */
export type TracesheetScript = "zh" | "ja" | "ko" | "en";

export interface TracesheetPreset {
  text: string;
  /** One reading per cell (pinyin per character, romaji per kana…). */
  reading?: string[];
}

/** A tile in the "made for paper" grid: a crop of a store screenshot. */
export interface TracesheetTile {
  /** File under /apps/tracesheet/ui/<locale>/ (without .webp). */
  ui: string;
  name: string;
  fact: string;
  alt: string;
}

export interface TracesheetPlan {
  name: string;
  /** Who the plan is for, one sentence. */
  forWhom: string;
  price: string;
  unit: string;
  body: string;
  cta: string;
}

export interface TracesheetLanding {
  /** The h1, two lines. */
  heroTitle: [string, string];
  heroSub: string;
  heroNote: string;
  video: TracesheetHeroVideo;
  videoLabel: string;
  tryTitle: string;
  tryBody: string;
  tryLabel: string;
  tryPresetsLabel: string;
  tryPresets: TracesheetPreset[];
  trySheet: Record<TracesheetScript, string>;
  tryPrint: string;
  tryNote: string;
  stagesTitle: string;
  stagesLabel: string;
  /** Each stage pairs with one screenshot crop (a SHOT_FILES name). */
  stages: { name: string; clause: string; body: string; ui: string; alt: string }[];
  sheetsTitle: string;
  sheetsBody: string;
  tiles: TracesheetTile[];
  plansTitle: string;
  free: TracesheetPlan;
  pro: TracesheetPlan;
  compareTitle: string;
  planFeatureHeader: string;
  planRows: TracesheetPlanRow[];
  planYes: string;
  planNo: string;
  planFootnote: string;
  shareTitle: string;
  shareHead: string;
  shareBody: string;
  shareAlt: string;
  shareCta: string;
  faqTitle: string;
}

const landingEn: TracesheetLanding = {
  heroTitle: ["Collect a word.", "Print a worksheet."],
  heroSub:
    "TraceSheet turns any word in Chinese, Japanese, Korean or English into flashcards, stroke-by-stroke writing, dictation and a printable copybook worksheet.",
  heroNote: "Free on iPhone and iPad. No account, no ads.",
  video: heroVideo("en"),
  videoLabel:
    "TraceSheet in 20 seconds: add a word in any language, flip a flashcard, write 花 stroke by stroke, check pinyin and print a 田字格 worksheet.",
  tryTitle: "Try your own word",
  tryBody:
    "Each character gets its own row: the model in ink, copies to trace, then empty boxes to write alone. The app adds pinyin, stroke order and a full A4 or Letter page.",
  tryLabel: "Word to practise",
  tryPresetsLabel: "Or start from",
  tryPresets: [
    { text: "春天", reading: ["chūn", "tiān"] },
    { text: "花开", reading: ["huā", "kāi"] },
    { text: "ありがとう", reading: ["a", "ri", "ga", "to", "u"] },
    { text: "사랑", reading: ["sa", "rang"] },
    { text: "spring" },
  ],
  trySheet: {
    zh: "田字格 sheet · Chinese",
    ja: "Grid sheet · Japanese",
    ko: "Grid sheet · Korean",
    en: "Handwriting lines · English",
  },
  tryPrint: "Print this sample",
  tryNote:
    "A sample drawn in your browser. In the app, pinyin fills in for you and the sheet runs to a full page.",
  stagesTitle: "How a word is learned",
  stagesLabel: "Learning step",
  stages: [
    {
      name: "Listen",
      clause: "Hear it and read it",
      body: "Pinyin, kana with romaji, Korean romanization or US IPA, the meaning and a speaker button on every word.",
      ui: "05-reading-meaning",
      alt: "A Family deck: 爸爸, 妈妈, 哥哥 with pinyin, meanings and a speaker button",
    },
    {
      name: "Flashcards",
      clause: "Flip it until it sticks",
      body: "Word, reading, meaning or sound on the front, or choose from four. Missed words come round again.",
      ui: "07-flashcards",
      alt: "Flashcard for 花开 with the pinyin huā kāi",
    },
    {
      name: "Write",
      clause: "Write it stroke by stroke",
      body: "汉字, kana and 한글 are checked stroke by stroke, in the right order, with a finger or Apple Pencil.",
      ui: "06-write-japanese",
      alt: "Writing 花火 stroke by stroke in Trace mode",
    },
    {
      name: "Dictation",
      clause: "Then write it from memory",
      body: "TraceSheet reads each word aloud. Write it on paper, reveal the answer and mark it.",
      ui: "02-dictation",
      alt: "Dictation answer: 春天 in 田字格 cells with pinyin chūn tiān",
    },
  ],
  sheetsTitle: "Made for paper",
  sheetsBody:
    "Five sheet types, every layout setting, A4 or US Letter. Print with AirPrint, share a PDF or save an image.",
  tiles: [
    {
      ui: "01-quick-add",
      name: "Collect any word",
      fact: "Type it, paste a whole list or scan a photo. One list can mix languages.",
      alt: "Quick notes holding butterfly, 사랑 and ありがとう while 学校 is added",
    },
    {
      ui: "ipad-tian-sheet",
      name: "田字格 sheets",
      fact: "描红 tracing, pinyin over every character, up to 10 rows per character.",
      alt: "TraceSheet on iPad building a 田字格 sheet for 花, 开, 小, 鸟, 春, 天 with pinyin",
    },
    {
      ui: "08-english",
      name: "English handwriting",
      fact: "Writing lines, spelling tests and reading lists for English words.",
      alt: "English sheet preview with apple, banana and happy on handwriting lines",
    },
    {
      ui: "09-check-words",
      name: "Pinyin fills in",
      fact: "Any 多音字 is flagged, so nothing reaches the sheet unchecked.",
      alt: "Word check for 春天, 花开, 小鸟 and 长 with pinyin above each character",
    },
    {
      ui: "04-library",
      name: "About 2,000 words per language",
      fact: "Topic decks in five levels. Type “shui” and you find 水.",
      alt: "Library with Chinese decks for numbers, colours and family",
    },
  ],
  plansTitle: "Free and Pro",
  free: {
    name: "Free",
    forWhom: "For every family and every class.",
    price: "0",
    unit: "USD, no time limit",
    body: "Collecting, listening, flashcards, writing and dictation. Page 1 of every 田字格, pinyin, English, lined and grid sheet, with every layout setting, printed as often as you like. Free pages carry a small App Store QR code.",
    cta: "Download free",
  },
  pro: {
    name: "Pro",
    forWhom: "For the whole copybook.",
    price: "14.99",
    unit: "USD, once",
    body: "Every page of every sheet, stroke-order sheets and strips, combined PDFs, textbook kai and print fonts, coloured trace ink and trace fade. Keep or drop the QR, unlimited photo scans, more profiles and Family Sharing. No subscription.",
    cta: "Try Pro in the app",
  },
  compareTitle: "Free and Pro, side by side",
  planFeatureHeader: "What you get",
  planRows: [
    { label: "Learn: collect, listen, flashcards, write, dictation", free: true, pro: true },
    { label: "田字格 sheets with 描红 tracing and pinyin", free: true, pro: true },
    { label: "Pinyin four-line, English lines, notebook lines, square grid", free: true, pro: true },
    { label: "Every layout setting, A4 or US Letter", free: true, pro: true },
    { label: "Pages per sheet", free: "Page 1", pro: "All pages" },
    { label: "Print, share PDF, save image", free: "Unlimited", pro: "Unlimited" },
    { label: "App Store QR code in the page footer", free: "Small QR", pro: "Keep or turn off" },
    { label: "笔顺 stroke-order sheets and strips", free: "Try: page 1", pro: true },
    { label: "Combined PDF: several sheet types in one file", free: "Try: page 1", pro: true },
    { label: "Fonts: 标准楷书 textbook kai, School print, Sloped print", free: "Try: page 1", pro: true },
    { label: "Blue, red, green and purple trace ink; trace fade", free: "Try: page 1", pro: true },
    { label: "Photo scans", free: "3", pro: "Unlimited" },
    { label: "More profiles", free: false, pro: true },
    { label: "Family Sharing", free: false, pro: true },
  ],
  planYes: "Included",
  planNo: "Not included",
  planFootnote:
    "Prices are the US App Store prices; your App Store shows the price in your currency.",
  shareTitle: "Print one for the whole class.",
  shareHead: "Free to share",
  shareBody:
    "Make the week's list once, then AirPrint it, send the PDF to the teacher or pass it to other parents. A class list usually fits on page 1, and the small QR code in the footer lets anyone holding a copy find the app.",
  shareAlt: "Print preview of a 田字格 sheet for 花, 开, 小, 鸟, 春, 天 with pinyin",
  shareCta: "Get TraceSheet free",
  faqTitle: "Short answers",
};

const landingZhCn: TracesheetLanding = {
  heroTitle: ["随手收词，", "印成田字格字帖"],
  heroSub:
    "中文、日文、韩文、英文的词都能随手收下，再听读音、翻闪卡、按笔顺一笔一笔写、做听写，最后打印成像字帖一样的练习纸。",
  heroNote: "iPhone 和 iPad 免费下载。无需账号，没有广告。",
  video: heroVideo("zh-cn"),
  videoLabel:
    "20 秒看 TraceSheet：添加任何语言的词、翻闪卡、按笔顺写“花”、自动标拼音，再打印一张田字格字帖。",
  tryTitle: "写写你自己的词",
  tryBody:
    "每个字一行：第一格是范字，后面几格描红，再留空格自己写。App 里还会自动标拼音、加笔顺，排满一整页 A4 或 Letter。",
  tryLabel: "要练的词",
  tryPresetsLabel: "或者从这些开始",
  tryPresets: [
    { text: "春天", reading: ["chūn", "tiān"] },
    { text: "花开", reading: ["huā", "kāi"] },
    { text: "ありがとう", reading: ["a", "ri", "ga", "to", "u"] },
    { text: "사랑", reading: ["sa", "rang"] },
    { text: "spring" },
  ],
  trySheet: {
    zh: "田字格字帖 · 中文",
    ja: "方格字帖 · 日文",
    ko: "方格字帖 · 韩文",
    en: "英文书写线 · 英文",
  },
  tryPrint: "打印这份样张",
  tryNote: "这是在浏览器里画出的样张。App 会自动标好拼音，排成完整的一页。",
  stagesTitle: "一个词怎么学会",
  stagesLabel: "学习步骤",
  stages: [
    {
      name: "听读音",
      clause: "听一听，读一读",
      body: "拼音、假名和罗马字、韩文罗马字或美式音标，加上释义，每个词都有朗读按钮。",
      ui: "05-reading-meaning",
      alt: "英文“颜色”词组：red、orange、yellow，带音标、中文释义和朗读按钮",
    },
    {
      name: "闪卡",
      clause: "翻闪卡，直到记住",
      body: "正面可以是词语、读音、意思或声音，也可以四选一。没记住的词会再出现。",
      ui: "07-flashcards",
      alt: "英文单词闪卡：apple，带音标和中文释义",
    },
    {
      name: "书写",
      clause: "一笔一笔写下来",
      body: "用手指或 Apple Pencil 书写，汉字、假名、韩文都按正确笔顺逐笔检查。",
      ui: "06-write-japanese",
      alt: "描红模式下按笔顺书写“花火”",
    },
    {
      name: "听写",
      clause: "再凭记忆听写",
      body: "TraceSheet 把词读出来，写在纸上，再翻开答案批改。",
      ui: "02-dictation",
      alt: "听写答案：田字格里的“春天”和拼音 chūn tiān",
    },
  ],
  sheetsTitle: "印在纸上",
  sheetsBody: "五种字帖，所有排版都能调，A4 或 Letter 纸型。隔空打印、分享 PDF 或存成图片。",
  tiles: [
    {
      ui: "01-quick-add",
      name: "随手收词",
      fact: "输入、粘贴整份清单或拍照识别，一个词表可以混着几种语言。",
      alt: "随手记里有 사랑、ありがとう 和“学校”，正在添加 butterfly",
    },
    {
      ui: "ipad-tian-sheet",
      name: "田字格字帖",
      fact: "描红，汉字上方加拼音，每个字最多印 10 行。",
      alt: "在 iPad 上制作田字格字帖：花、开、小、鸟、春、天，带拼音",
    },
    {
      ui: "08-english",
      name: "英文书写",
      fact: "书写线、拼写测验和单词表，英文单词也能练。",
      alt: "英文字帖预览：apple、banana、happy 写在书写线上",
    },
    {
      ui: "09-check-words",
      name: "拼音自动标注",
      fact: "多音字会提示确认，上纸之前都检查过。",
      alt: "检查词语：春天、花开、小鸟、长，每个字上方都有拼音",
    },
    {
      ui: "04-library",
      name: "每种语言约 2,000 词",
      fact: "按主题分五个级别，输入“shui”就能找到“水”。",
      alt: "词库：简体中文的数字、颜色等主题词组",
    },
  ],
  plansTitle: "免费版与 Pro",
  free: {
    name: "免费",
    forWhom: "给每个家庭、每个班级。",
    price: "0",
    unit: "美元，不限时间",
    body: "收词、听读音、闪卡、书写和听写都免费。田字格、拼音格、英文书写、横线纸和方格纸，每张都能免费打印第 1 页，所有排版都能调，想印几次就印几次。免费页面的页脚有一个小小的 App Store 二维码。",
    cta: "免费下载",
  },
  pro: {
    name: "Pro",
    forWhom: "想印完整字帖的人。",
    price: "14.99",
    unit: "美元，一次买断",
    body: "每张字帖的所有页、笔顺字帖和笔顺条、合订本 PDF、标准楷书和印刷体字体、彩色描红和描红渐淡。二维码可留可去，拍照识别不限次数，更多档案，支持家人共享。不是订阅。",
    cta: "在 App 里试用 Pro",
  },
  compareTitle: "免费版与 Pro 对照",
  planFeatureHeader: "功能",
  planRows: [
    { label: "学习：收词、听读音、闪卡、书写、听写", free: true, pro: true },
    { label: "田字格描红字帖，可加拼音", free: true, pro: true },
    { label: "拼音四线格、英文书写线、横线纸、方格纸", free: true, pro: true },
    { label: "所有排版设置，A4 或 Letter", free: true, pro: true },
    { label: "每张字帖打印页数", free: "第 1 页", pro: "全部页" },
    { label: "打印、分享 PDF、存成图片", free: "不限", pro: "不限" },
    { label: "页脚的 App Store 二维码", free: "小二维码", pro: "保留或去掉" },
    { label: "笔顺字帖和笔顺条", free: "可试：第 1 页", pro: true },
    { label: "合订本 PDF：几种字帖合成一个文件", free: "可试：第 1 页", pro: true },
    { label: "字体：标准楷书、School print、Sloped print", free: "可试：第 1 页", pro: true },
    { label: "蓝、红、绿、紫色描红，描红渐淡", free: "可试：第 1 页", pro: true },
    { label: "拍照识别", free: "3 次", pro: "不限" },
    { label: "更多档案", free: false, pro: true },
    { label: "家人共享", free: false, pro: true },
  ],
  planYes: "包含",
  planNo: "不包含",
  planFootnote: "价格为美区 App Store 价格；你的 App Store 会显示当地货币的价格。",
  shareTitle: "给全班每人印一份。",
  shareHead: "免费分享",
  shareBody:
    "这周的听写清单做一次，就能隔空打印、把 PDF 发给老师，或者转到家长群。一份清单通常第 1 页就印得下；页脚的小二维码让拿到字帖的人也能找到这个应用。",
  shareAlt: "田字格字帖打印预览：花、开、小、鸟、春、天，带拼音",
  shareCta: "免费下载 TraceSheet",
  faqTitle: "简单回答",
};

const landingZhTw: TracesheetLanding = {
  heroTitle: ["隨手收詞，", "印成田字格字帖"],
  heroSub:
    "中文、日文、韓文、英文的詞都能隨手收下，再聽讀音、翻字卡、按筆順一筆一筆寫、做聽寫，最後列印成像字帖一樣的練習紙。",
  heroNote: "iPhone 和 iPad 免費下載。無需帳號，沒有廣告。",
  // No Traditional-Chinese cut of the hero exists; the English one carries
  // no Simplified captions a zh-TW reader would trip over.
  video: heroVideo("en"),
  videoLabel:
    "20 秒看 TraceSheet：新增任何語言的詞、翻字卡、按筆順寫「花」、自動標拼音，再列印一張田字格字帖。",
  tryTitle: "寫寫你自己的詞",
  tryBody:
    "每個字一行：第一格是範字，後面幾格描紅，再留空格自己寫。App 裡還會自動標拼音、加筆順，排滿一整頁 A4 或 Letter。",
  tryLabel: "要練的詞",
  tryPresetsLabel: "或者從這些開始",
  tryPresets: [
    { text: "春天", reading: ["chūn", "tiān"] },
    { text: "花開", reading: ["huā", "kāi"] },
    { text: "ありがとう", reading: ["a", "ri", "ga", "to", "u"] },
    { text: "사랑", reading: ["sa", "rang"] },
    { text: "spring" },
  ],
  trySheet: {
    zh: "田字格字帖 · 中文",
    ja: "方格字帖 · 日文",
    ko: "方格字帖 · 韓文",
    en: "英文書寫線 · 英文",
  },
  tryPrint: "列印這份樣張",
  tryNote: "這是在瀏覽器裡畫出的樣張。App 會自動標好拼音，排成完整的一頁。",
  stagesTitle: "一個詞怎麼學會",
  stagesLabel: "學習步驟",
  stages: [
    {
      name: "聽讀音",
      clause: "聽一聽，讀一讀",
      body: "拼音、假名和羅馬字、韓文羅馬字或美式音標，加上釋義，每個詞都有朗讀按鈕。",
      ui: "05-reading-meaning",
      alt: "英文「顏色」詞組：red、orange、yellow，附音標、中文釋義和朗讀按鈕",
    },
    {
      name: "字卡",
      clause: "翻字卡，直到記住",
      body: "正面可以是詞語、讀音、意思或聲音，也可以四選一。沒記住的詞會再出現。",
      ui: "07-flashcards",
      alt: "英文單字卡：apple，附音標和中文釋義",
    },
    {
      name: "書寫",
      clause: "一筆一筆寫下來",
      body: "用手指或 Apple Pencil 書寫，國字、假名、韓文都按正確筆順逐筆檢查。",
      ui: "06-write-japanese",
      alt: "描紅模式下按筆順書寫「花火」",
    },
    {
      name: "聽寫",
      clause: "再憑記憶聽寫",
      body: "TraceSheet 把詞唸出來，寫在紙上，再翻開答案批改。",
      ui: "02-dictation",
      alt: "聽寫答案：田字格裡的「春天」和拼音 chūn tiān",
    },
  ],
  sheetsTitle: "印在紙上",
  sheetsBody: "五種字帖，所有排版都能調，A4 或 Letter 紙張。AirPrint 列印、分享 PDF 或存成圖片。",
  tiles: [
    {
      ui: "01-quick-add",
      name: "隨手收詞",
      fact: "輸入、貼上整份清單或拍照辨識，一個詞表可以混著幾種語言。",
      alt: "隨手記裡有 사랑、ありがとう 和「学校」，正在新增 butterfly",
    },
    {
      ui: "ipad-tian-sheet",
      name: "田字格字帖",
      fact: "描紅，國字上方加拼音，每個字最多印 10 行。",
      alt: "在 iPad 上製作田字格字帖：花、开、小、鸟、春、天，附拼音",
    },
    {
      ui: "08-english",
      name: "英文書寫",
      fact: "書寫線、拼寫測驗和單字表，英文單字也能練。",
      alt: "英文字帖預覽：apple、banana、happy 寫在書寫線上",
    },
    {
      ui: "09-check-words",
      name: "拼音自動標註",
      fact: "多音字會提示確認，上紙之前都檢查過。",
      alt: "檢查詞語：春天、花开、小鸟、长，每個字上方都有拼音",
    },
    {
      ui: "04-library",
      name: "每種語言約 2,000 詞",
      fact: "按主題分五個級別，輸入「shui」就能找到「水」。",
      alt: "詞庫：繁體中文的數字、顏色等主題詞組",
    },
  ],
  plansTitle: "免費版與 Pro",
  free: {
    name: "免費",
    forWhom: "給每個家庭、每個班級。",
    price: "0",
    unit: "美元，不限時間",
    body: "收詞、聽讀音、字卡、書寫和聽寫都免費。田字格、拼音格、英文書寫、橫線紙和方格紙，每張都能免費列印第 1 頁，所有排版都能調，想印幾次就印幾次。免費頁面的頁尾有一個小小的 App Store QR 碼。",
    cta: "免費下載",
  },
  pro: {
    name: "Pro",
    forWhom: "想印完整字帖的人。",
    price: "14.99",
    unit: "美元，一次買斷",
    body: "每張字帖的所有頁、筆順字帖和筆順條、合訂本 PDF、標準楷書和印刷體字體、彩色描紅和描紅漸淡。QR 碼可留可去，拍照辨識不限次數，更多檔案，支援家人共享。不是訂閱。",
    cta: "在 App 裡試用 Pro",
  },
  compareTitle: "免費版與 Pro 對照",
  planFeatureHeader: "功能",
  planRows: [
    { label: "學習：收詞、聽讀音、字卡、書寫、聽寫", free: true, pro: true },
    { label: "田字格描紅字帖，可加拼音", free: true, pro: true },
    { label: "拼音四線格、英文書寫線、橫線紙、方格紙", free: true, pro: true },
    { label: "所有排版設定，A4 或 Letter", free: true, pro: true },
    { label: "每張字帖列印頁數", free: "第 1 頁", pro: "全部頁" },
    { label: "列印、分享 PDF、存成圖片", free: "不限", pro: "不限" },
    { label: "頁尾的 App Store QR 碼", free: "小 QR 碼", pro: "保留或去掉" },
    { label: "筆順字帖和筆順條", free: "可試：第 1 頁", pro: true },
    { label: "合訂本 PDF：幾種字帖合成一個檔案", free: "可試：第 1 頁", pro: true },
    { label: "字體：標準楷書、School print、Sloped print", free: "可試：第 1 頁", pro: true },
    { label: "藍、紅、綠、紫色描紅，描紅漸淡", free: "可試：第 1 頁", pro: true },
    { label: "拍照辨識", free: "3 次", pro: "不限" },
    { label: "更多檔案", free: false, pro: true },
    { label: "家人共享", free: false, pro: true },
  ],
  planYes: "包含",
  planNo: "不包含",
  planFootnote: "價格為美區 App Store 價格；你的 App Store 會顯示當地貨幣的價格。",
  shareTitle: "給全班每人印一份。",
  shareHead: "免費分享",
  shareBody:
    "這週的聽寫清單做一次，就能 AirPrint 列印、把 PDF 傳給老師，或者轉到家長群組。一份清單通常第 1 頁就印得下；頁尾的小 QR 碼讓拿到字帖的人也能找到這個 App。",
  shareAlt: "田字格字帖列印預覽：花、开、小、鸟、春、天，附拼音",
  shareCta: "免費下載 TraceSheet",
  faqTitle: "簡單回答",
};

export const tracesheetLanding: Record<Locale, TracesheetLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};
