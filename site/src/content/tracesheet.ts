// LingoWonders (formerly TraceSheet; renamed for version 2.1 on 2026-10-18):
// registry content in all three locales, plus the copy for its own landing
// page (src/components/sites/tracesheet/landing.tsx). The site's look lives
// in src/components/sites/tracesheet/site.css; the guides in
// ./tracesheet-guides.ts.
//
// The slug stays "tracesheet" (routes, asset paths, /go links, analytics);
// the public host is lingowonders.appfactory.sg (`host` below).
//
// Facts come from the 2.1 store copy in the app repo:
// apps/tracesheet/fastlane/metadata/ios/{en-US,zh-Hans,zh-Hant}/
// {name,subtitle,description,promotional_text,release_notes}.txt, and in-app
// labels from apps/tracesheet/lib/l10n/app_*.arb. Keep them in step. The
// 2.1 description gives no Pro price, so the pages quote none.
//
// The privacy and terms sections are frozen legal text (privacy rewritten
// 2026-10-20 to match the App Privacy label); change them only with the
// owner.

import type { Locale } from "@/lib/i18n";
import type { AppContent, AppLocalized, Screenshot } from "./apps";
import { LW_SCREENS, type LwGuideId, type LwScreen } from "./tracesheet-guides";

const ASSETS = "/apps/tracesheet";

type AssetLocale = "en" | "zh-cn" | "zh-tw";

/** Full App Store iPhone shots (caption + screen), 720×1564, in store order. */
function shots(dir: AssetLocale, alts: string[]): Screenshot[] {
  return LW_SCREENS.map((f, i) => ({
    src: `${ASSETS}/shots21/${dir}/${f}.webp`,
    alt: alts[i],
  }));
}

const en: AppLocalized = {
  name: "LingoWonders",
  storeName: "LingoWonders: Language Reader",
  tagline: "Read anything. Say it. Write it by hand.",
  subtitle: "Chinese, Japanese & Korean",
  oneLiner:
    "Turn a photo, a web page or a YouTube video into a lesson: listen sentence by sentence, record yourself, then learn the week's words stroke by stroke, run dictation and print real practice sheets. Chinese, Japanese, Korean and English.",
  statusNote:
    "Free on the App Store for iPhone and iPad. Version 2.1, the first under the LingoWonders name, is in App Review.",
  metaTitle: "LingoWonders: Language Reader, Stroke Order & Dictation",
  metaDescription:
    "Language reader for Chinese, Japanese, Korean and English: read aloud, stroke order, dictation and printable 田字格 practice sheets. iPhone and iPad.",
  features: [
    {
      title: "Read anything",
      body: "Photograph a page, paste text, open a web page or a YouTube video with captions, or share from Safari, YouTube, Photos and Files. Readings in pinyin, zhuyin, Jyutping, kana and romaji, with on-device translation.",
    },
    {
      title: "Listen and say it",
      body: "Listen sentence by sentence, tap a word to look it up, and record yourself beside the app voice. The check on your phone says “Sounds right” or asks for once more.",
    },
    {
      title: "Week Pack",
      body: "One tap turns this week's list into example sentences, a short reader and question cards, with readings and translations. Made by AI on our server, so it can have mistakes.",
    },
    {
      title: "Write stroke by stroke",
      body: "Stroke-order animation and a free on-screen writing check with a finger or Apple Pencil, for Chinese, kana and hangul. China, Singapore, Malaysia, Taiwan or Japanese kanji stroke order.",
    },
    {
      title: "Dictation and Paper Check",
      body: "The app reads each word aloud for your child to write on paper. Print a test sheet, then Paper Check (beta) shows what it read and you mark each answer.",
    },
    {
      title: "Print real practice sheets",
      body: "田字格 sheets with 描红 tracing and pinyin over the characters. Print with AirPrint, share a PDF or save an image; free exports contain page 1 of each sheet.",
    },
  ],
  screenshots: shots("en", [
    "Read along, sentence by sentence: the story 司马光砸缸 with pinyin over the words and a translation below",
    "Read it aloud and get a tick: the Read aloud sheet marks the sentence Sounds right, with the app voice and your voice side by side",
    "This week's list in sentences: a Week Pack with example sentences for 花开, 小鸟 and 春天, readings and translations",
    "Tap a word to look it up: 桃 in a Japanese story, with kana, romaji, the meaning peach and its stroke order",
    "Read the whole story and check every sentence: 15 of 16 sentences sound right, with your take beside the app voice (Pro)",
    "Write it on screen, stroke by stroke: tracing 花 with a finger, following the red stroke",
    "Hear it, write it, check it: dictation reveals 春天 in 田字格 boxes with pinyin after it was written on paper",
    "Print 田字格 practice sheets: 描红 tracing and pinyin on A4 or Letter",
    "Thousands of words, ready to learn: Library decks by language and level, with HSK decks and school word lists",
    "No account, no ads, no subscription: a printed 田字格 sheet preview; Pro is a one-time purchase",
  ]),
  trust: {
    title: "On your device by default",
    body: "No ads, no account, no subscription. Your words, lists and practice stay on your device, and LingoWonders works offline. The exceptions are the AI features, which ask first: Paper Check, reading words from a photo in the cloud, example sentences and the Week Pack send the photo or the words to our server and Google's Gemini model, and nothing is stored on our server.",
  },
  faqs: [
    {
      q: "TraceSheet is now LingoWonders. Is it the same app?",
      a: "Yes. LingoWonders is the new name of TraceSheet, from version 2.1. It is the same app on the App Store, updated in place, so your lists, readings and progress stay on your device as they were. Pro carries over too.",
    },
    {
      q: "Is there a subscription or an account?",
      a: "No. There is no subscription, no account and no ads. Most of LingoWonders is free. Pro is a one-time purchase, and one Pro covers the whole family through Family Sharing. The App Store shows the price in your currency.",
    },
    {
      q: "What can I do for free?",
      a: "Every practice mode, stroke order and the writing check, the read-aloud score, photo word lists, the HSK 1–3 decks (about 2,200 words), all built-in stories and a daily allowance of your own readings. Practice sheets print page 1 of each sheet, as many as you like; test sheets print every page. The Week Pack gives 3 packs and 60 sentence words in total, and Paper Check 3 checks.",
    },
    {
      q: "Which languages does it support?",
      a: "Lists and readings work in Chinese (Simplified and Traditional), Japanese, Korean and English. Readings show pinyin, zhuyin, Jyutping, kana and romaji, Korean romanization or US IPA for English. Stroke order follows China, Singapore, Malaysia, Taiwan or Japanese kanji, chosen per list.",
    },
    {
      q: "What does the AI do, and what is sent?",
      a: "AI writes example sentences, makes the Week Pack, reads list photos for underlined words and reads Paper Check sheets. Before the first one, the app asks you. The words, or the photo, go to our server and Google's Gemini model; our server keeps no photos or text. You can turn AI features off in Settings › AI features. AI output can have mistakes.",
    },
    {
      q: "Does Paper Check mark my child's test?",
      a: "No. Paper Check (beta) shows what it read for every answer, and you mark each one. 3 checks are free, then it is part of Pro.",
    },
    {
      q: "Which YouTube videos work?",
      a: "Videos with captions. Your phone fetches the captions itself, so nothing goes through our servers. If a video has no captions, paste the text and the video still plays as the audio.",
    },
    {
      q: "Does it work offline?",
      a: "Yes, apart from the AI features and fetching a web page or video. Your lists, practice, writing, dictation, the speech check and printing work without a connection. Translation is Apple's on-device translation and needs iOS 18 or later.",
    },
    {
      q: "The voice sounds robotic. Can I fix that?",
      a: "LingoWonders uses the voices on your phone. Download an Enhanced or Premium voice: iPhone Settings → Accessibility → Read & Speak → Voices → your language.",
    },
    {
      q: "How do I restore Pro or move to a new phone?",
      a: "Pro: Settings › Restore purchases, signed in with the Apple ID that bought it. Your data: Settings › Move to a new phone saves one backup file to open on the new phone. There is no automatic sync.",
    },
  ],
  privacy: {
    updated: "2026-10-20",
    sections: [
      {
        heading: "About this app",
        body: [
          "LingoWonders (formerly TraceSheet) is made by AppFactory. This policy covers the LingoWonders app on iPhone and iPad.",
        ],
      },
      {
        heading: "What stays on your device",
        body: [
          "Your lists, readings, progress, children's profiles and recordings stay on your device. There is no account and no sign-up. The speech check, translations and reading text from photos run on the device. A backup is a file you save yourself; there is no cloud sync.",
        ],
      },
      {
        heading: "What is sent when you use an AI feature",
        body: [
          "Nothing is sent until you allow AI features on the permission sheet the app shows before the first one. You can turn them off any time in Settings › AI features.",
          [
            "Week Pack: the list's words, their level and school year, your app language, the words already learned and the number of sentences per word. Remaking part of a pack also sends that pack's existing sentences and reading.",
            "Get sentences: the words, their level and your app language.",
            "Paper Check: the photo of the practice sheet.",
            "List photo: a list photo scanned while online is also sent, at a smaller size, to find underlined words.",
          ],
          "Each request carries a random install id, and a Pro purchase receipt if you have one, so fair-use limits can be counted. Our server passes the request to Google's Gemini API to make the answer. Our server does not store the photos or the words; its logs hold only counts, timings and error codes. To keep usage fair it keeps the random install id (not linked to you) with a request count and, for Pro, the App Store transaction id of the purchase. Google may keep requests for a short time to detect abuse, under its Gemini API terms, and does not use them to train its models. A Paper Check photo stays on your device for 30 days for the check history; list photos stay on your device with the list.",
        ],
      },
      {
        heading: "Analytics and crash reports",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous app-usage events, for example that a sheet was made or the Pro page was shown. Analytics never carry words, text or images.",
            "Crash reports (Firebase Crashlytics): technical crash and diagnostic data, used only to fix bugs.",
          ],
        ],
      },
      {
        heading: "Web pages and videos",
        body: [
          "When you add a web page or a video to Read, your device fetches it from that site itself. It does not go through our server.",
        ],
      },
      {
        heading: "Advertising & tracking",
        body: [
          "LingoWonders shows no ads and does not track you across apps or websites: there is no App Tracking Transparency prompt and no advertising identifier is used. The QR code printed on sheets opens a short link on appfactory.sg that forwards to the App Store page (or this site on other devices). The link says only that it came from a printed sheet; it carries no identifier and nothing about you or your child. Our web host keeps standard request logs (such as IP address and browser type) for security, as any website does.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "LingoWonders Pro is a one-time purchase with Family Sharing, processed entirely by the App Store. We never see your payment details.",
        ],
      },
      {
        heading: "Children",
        body: [
          "LingoWonders is designed for a parent to use together with their child. It has no chat and no social features. AI features are off until a parent allows them. Sheets and lists leave the device only when you print or share them yourself through the system share sheet.",
        ],
      },
      {
        heading: "Data deletion",
        body: [
          "Deleting the app removes all local data (lists, profiles, readings, recordings and progress) from your device. To have your install id and its count removed from our server, email us.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions: email lei@appfactory.sg.",
        ],
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
          "We grant you a personal, non-exclusive, non-transferable license to install and use LingoWonders on devices you own or control, for your own non-commercial use, subject to the App Store terms under which you obtained it.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "LingoWonders Pro is a one-time purchase processed by the App Store under its payment terms, with Family Sharing support. Restore it anytime via Settings → Restore purchase. Refunds are handled by the App Store, not by us.",
        ],
      },
      {
        heading: "Your content",
        body: [
          "Word lists, names, and photos you enter or scan are yours. LingoWonders processes them on your device to generate pinyin, stroke order, and practice sheets; we do not receive or store this content ourselves.",
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
          'LingoWonders is provided "as is", without warranties of any kind to the fullest extent permitted by law. To the same extent, our total liability for any claim relating to the app is limited to the amount you paid for it in the twelve months before the claim.',
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
  name: "LingoWonders",
  storeName: "LingoWonders：听写·默写·生词本",
  tagline: "想读什么就读什么，读出来，再用手写下来。",
  subtitle: "中文、日语、韩语，笔顺与跟读",
  oneLiner:
    "拍照、粘贴文字、打开网页或 YouTube 视频，都能变成一堂课：逐句听、录下自己的声音，再按笔顺写这周的生词、做听写，最后打印成真正的字帖。支持中文、日文、韩文和英文。",
  statusNote: "iPhone 和 iPad 免费下载。2.1 是改名 LingoWonders 后的第一个版本，正在 App Store 审核中。",
  metaTitle: "LingoWonders：听写、默写、笔顺与跟读｜田字格字帖",
  metaDescription:
    "外语阅读与跟读：拍照、网页、YouTube 字幕变读物，逐句朗读、按笔顺书写、在家听写，免费打印田字格字帖。中日韩英，iPhone 和 iPad。",
  features: [
    {
      title: "什么都能读",
      body: "拍下一页书、粘贴文字、打开网页或带字幕的 YouTube 视频，也能从 Safari、YouTube、照片和“文件”直接分享进来。支持拼音、注音、粤拼、假名和罗马字，翻译在手机本地完成。",
    },
    {
      title: "听一听，读出来",
      body: "逐句收听，点任何一个词查释义，在应用语音旁边录下自己的声音。手机本地判断“读对了”或“再试一次”。",
    },
    {
      title: "每周练习包",
      body: "一键把本周词语变成例句、一篇短文和给家长的提问卡，附注音和翻译。内容由我们服务器上的 AI 生成，可能有错误。",
    },
    {
      title: "一笔一笔写",
      body: "笔顺动画，屏幕上用手指或 Apple Pencil 逐笔书写检查，汉字、假名、韩文都免费。笔顺可选中国、新加坡、马来西亚、台湾或日本汉字。",
    },
    {
      title: "听写和 Paper Check",
      body: "应用把词逐个读出来，孩子写在纸上。打印测验纸，写完拍照，Paper Check（测试版）显示它读到了什么，由你来批改。",
    },
    {
      title: "印成真正的字帖",
      body: "田字格描红字帖，汉字上方可加拼音；还有拼音四线格、英文书写线、横线纸和方格纸。隔空打印、分享 PDF 或存成图片，免费导出每张字帖的第 1 页。",
    },
  ],
  screenshots: shots("zh-cn", [
    "逐句跟读：《司马光砸缸》，词上标拼音",
    "大声读一句，得到一个勾：“大声读”面板显示“读对了”，应用的声音和我的声音并排",
    "本周词表变成句子：每周练习包里花开、小鸟、春天的例句，带拼音",
    "点一个词就能查：日文故事里的“桃”，显示假名、罗马字、意思和笔顺",
    "整篇读完，逐句检查：16 句中有 15 句读得对，每句都能和应用的声音对比（Pro）",
    "在屏幕上按笔顺写：用手指描写“花”，跟着红色笔画写",
    "听、写、对答案：在纸上写完后，翻开田字格里的“春天”和拼音",
    "打印田字格字帖：描红加拼音，A4 或 Letter",
    "成千上万个现成的词：词库按语言和级别分组，含 HSK 词组和学校听写词表",
    "不用注册，没有广告，没有订阅：田字格字帖的打印预览；Pro 是一次性购买",
  ]),
  trust: {
    title: "默认只留在你的设备上",
    body: "没有广告，不用账号，没有订阅。词、词表和练习都在你的设备上，离线也能用。例外是会先征求你同意的 AI 功能：Paper Check、云端拍照识词、例句和每周练习包会把照片或词语发送到我们的服务器和 Google 的 Gemini 模型，服务器不保存任何内容。",
  },
  faqs: [
    {
      q: "TraceSheet 改名叫 LingoWonders 了，还是同一个应用吗？",
      a: "是的。从 2.1 版起，TraceSheet 改名为 LingoWonders。它是 App Store 上的同一个应用，直接更新即可，你的词表、读物和进度都照旧留在设备上，Pro 也会保留。",
    },
    {
      q: "要订阅或注册账号吗？",
      a: "都不用。没有订阅，不用注册，没有广告。大部分功能免费。Pro 是一次性购买，一份 Pro 通过家人共享全家都能用，价格以 App Store 显示的当地价格为准。",
    },
    {
      q: "免费能用哪些功能？",
      a: "所有练习模式、笔顺和书写检查、朗读评分、拍照建词表、HSK 一至三级词库（约 2,200 个词）、所有内置故事，以及每天一定额度的自己的读物。练习纸每张免费打印第 1 页，想印几张都行；测验纸每一页都免费。每周练习包累计 3 个包和 60 个例句词，Paper Check 3 次。",
    },
    {
      q: "支持哪些语言？",
      a: "词表和读物支持中文（简体和繁体）、日文、韩文和英文。读音可显示拼音、注音、粤拼、假名和罗马字，韩文显示罗马音，英文显示美式音标。笔顺可按词表选择中国、新加坡、马来西亚、台湾或日本汉字。",
    },
    {
      q: "AI 用来做什么？会发送什么？",
      a: "AI 用来写例句、生成每周练习包、识别清单照片里画线的词，以及读取 Paper Check 的答题纸。第一次使用前，应用会先征求你的同意。词语或照片会发送到我们的服务器和 Google 的 Gemini 模型，服务器不保存照片或文字。可以随时在“设置 › AI 功能”里关闭。AI 生成的内容可能有错误。",
    },
    {
      q: "Paper Check 会帮孩子批改吗？",
      a: "不会。Paper Check（测试版）会显示每一题它读到了什么，由你来批改每一题。免费 3 次，之后需要 Pro。",
    },
    {
      q: "哪些 YouTube 视频能用？",
      a: "带字幕的视频。字幕由你的手机直接获取，不经过我们的服务器。视频没有字幕的话，粘贴文字进去，视频的声音仍然可以当作朗读。",
    },
    {
      q: "可以离线使用吗？",
      a: "可以，除了 AI 功能和获取网页、视频。词表、练习、书写、听写、语音检查和打印都不需要联网。翻译使用苹果的设备端翻译，需要 iOS 18 或更高版本。",
    },
    {
      q: "朗读声音听起来很机械，怎么办？",
      a: "LingoWonders 用的是手机自带的语音。下载“增强”或“高品质”语音即可：iPhone 设置 → 无障碍 → 阅读与朗读 → 声音 → 选择语言。",
    },
    {
      q: "怎么恢复 Pro，换手机怎么办？",
      a: "Pro：用购买时的 Apple ID 登录，点“设置 › 恢复购买”。数据：在“设置 › 换新手机”里存一个备份文件，到新手机上打开即可。没有自动同步。",
    },
  ],
  privacy: {
    updated: "2026-10-20",
    sections: [
      {
        heading: "关于本应用",
        body: [
          "LingoWonders（原名 TraceSheet）由 AppFactory 开发。本政策适用于 iPhone 和 iPad 上的 LingoWonders 应用。",
        ],
      },
      {
        heading: "留在你设备上的数据",
        body: [
          "清单、阅读内容、进度、孩子的档案和录音都只保存在你的设备上。没有账号，无需注册。语音检查、翻译以及从照片识别文字都在设备上完成。备份是你自己保存的文件，没有云同步。",
        ],
      },
      {
        heading: "使用 AI 功能时发送的内容",
        body: [
          "在你于应用首次使用 AI 功能前显示的授权页上选择允许之前，不会发送任何内容。你可以随时在“设置 › AI 功能”中关闭。",
          [
            "每周包：清单中的词语、级别和学年、应用语言、已学会的词语和每词句数；只重做包的一部分时，还会发送该包里已有的例句和读物。",
            "生成例句：词语、级别和应用语言。",
            "纸面检查：答题纸的照片。",
            "清单照片：联网时扫描的清单照片也会缩小后发送，用来找出画线的词语。",
          ],
          "每个请求都带有随机的安装编号，若有 Pro 购买凭证也会带上，用于计算合理使用额度。我们的服务器会把请求转交给 Google 的 Gemini API 来生成结果。服务器不保存照片或词语，日志里只有次数、耗时和错误代码。为了计算合理使用额度，服务器会保留随机安装编号（与你本人无关联）及其请求次数；Pro 用户还会保留该购买的 App Store 交易编号。Google 可能会按其 Gemini API 条款短暂保留请求以防滥用，且不会用于训练模型。纸面检查的照片会在你的设备上保留 30 天，用于检查记录；清单照片随清单保存在你的设备上。",
        ],
      },
      {
        heading: "统计与崩溃报告",
        body: [
          [
            "使用统计（Google Firebase Analytics）：匿名的应用使用事件，例如生成了一份字帖，或展示了 Pro 页面。统计数据不包含词语、文字或图片。",
            "崩溃报告（Firebase Crashlytics）：技术性崩溃与诊断数据，仅用于修复问题。",
          ],
        ],
      },
      {
        heading: "网页与视频",
        body: [
          "在“阅读”中添加网页或视频时，由你的设备直接从该网站获取，不经过我们的服务器。",
        ],
      },
      {
        heading: "广告与追踪",
        body: [
          "LingoWonders 不展示广告，也不会跨应用或网站追踪你——没有 App 跟踪透明度弹窗，也不使用广告标识符。字帖上印的二维码是 appfactory.sg 上的一个短链接，会转到应用的 App Store 页面（其他设备则转到本网站）。链接只表明它来自打印的字帖，不带任何标识，也不包含你或孩子的任何信息。和所有网站一样，我们的网站托管方会出于安全原因保留常规访问日志（如 IP 地址和浏览器类型）。",
        ],
      },
      {
        heading: "购买",
        body: [
          "LingoWonders Pro 是支持家人共享的一次性购买，完全由 App Store 处理，我们不会接触你的付款信息。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "LingoWonders 是设计给家长陪孩子一起使用的应用。没有聊天和社交功能。AI 功能在家长允许之前保持关闭。字帖和词表只有在你自己打印或通过系统分享面板分享时才会离开设备。",
        ],
      },
      {
        heading: "数据删除",
        body: [
          "删除应用会移除设备上的所有本地数据（清单、档案、阅读内容、录音和进度）。如需删除我们服务器上的安装编号及其次数，请来信。",
        ],
      },
      {
        heading: "联系方式",
        body: [
          "如有疑问：来信 lei@appfactory.sg。",
        ],
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
          "我们授予你一项个人的、非独占、不可转让的许可：在你拥有或控制的设备上安装并使用 LingoWonders，仅限个人非商业用途，并受你获取本应用时所适用的 App Store 条款约束。",
        ],
      },
      {
        heading: "内购",
        body: [
          "LingoWonders Pro 是一次性内购，由 App Store 按其支付条款处理，支持家人共享。可随时通过“设置”→“恢复购买”找回。退款由 App Store 处理，而非我们。",
        ],
      },
      {
        heading: "你的内容",
        body: [
          "你输入或扫描的听写清单、姓名和照片归你所有。LingoWonders 在你的设备上本机处理它们，用于生成拼音、笔顺和练习字帖；我们自己不会接收或保存这些内容。",
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
          "LingoWonders 按“现状”提供，在法律允许的最大范围内不附带任何形式的保证。在同等范围内，我们就与本应用相关的任何索赔所承担的全部责任，以你在索赔前十二个月内为本应用支付的金额为限。",
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
  name: "LingoWonders",
  storeName: "LingoWonders：聽寫・默書・單字本",
  tagline: "想讀什麼就讀什麼，唸出來，再用手寫下來。",
  subtitle: "中文、日語、韓語，筆順與跟讀",
  oneLiner:
    "拍照、貼上文字、開啟網頁或 YouTube 影片，都能變成一堂課：逐句聽、錄下自己的聲音，再按筆順寫這週的生詞、做聽寫，最後列印成真正的字帖。支援中文、日文、韓文和英文。",
  statusNote: "iPhone 和 iPad 免費下載。2.1 是改名 LingoWonders 後的第一個版本，正在 App Store 審查中。",
  metaTitle: "LingoWonders：聽寫、默書、筆順與跟讀｜田字格字帖",
  metaDescription:
    "外語閱讀與跟讀：拍照、網頁、YouTube 字幕變讀物，逐句朗讀、按筆順書寫、在家聽寫，免費列印田字格字帖。中日韓英，iPhone 和 iPad。",
  features: [
    {
      title: "什麼都能讀",
      body: "拍下一頁書、貼上文字、開啟網頁或有字幕的 YouTube 影片，也能從 Safari、YouTube、照片和「檔案」直接分享進來。支援拼音、注音、粵拼、假名和羅馬字，翻譯在手機本機完成。",
    },
    {
      title: "聽一聽，唸出來",
      body: "逐句聆聽，點任一個詞查釋義，在 App 語音旁邊錄下自己的聲音。手機本機判斷「讀對了」或「再試一次」。",
    },
    {
      title: "每週練習包",
      body: "一鍵把本週詞語變成例句、一篇短文和給家長的提問卡，附注音和翻譯。內容由我們伺服器上的 AI 產生，可能有錯誤。",
    },
    {
      title: "一筆一筆寫",
      body: "筆順動畫，螢幕上用手指或 Apple Pencil 逐筆書寫檢查，漢字、假名、韓文都免費。筆順可選中國、新加坡、馬來西亞、台灣或日本漢字。",
    },
    {
      title: "聽寫和 Paper Check",
      body: "App 把詞逐個唸出來，孩子寫在紙上。列印測驗紙，寫完拍照，Paper Check（測試版）顯示它讀到了什麼，由你來批改。",
    },
    {
      title: "印成真正的字帖",
      body: "田字格描紅字帖，國字上方可加拼音；還有拼音四線格、英文書寫線、橫線紙和方格紙。AirPrint 列印、分享 PDF 或存成圖片，免費匯出每張字帖的第 1 頁。",
    },
  ],
  screenshots: shots("zh-tw", [
    "逐句跟讀：《司马光砸缸》，詞上標拼音",
    "大聲讀一句，得到一個勾：「大聲讀」面板顯示「讀對了」，應用的聲音和我的聲音並排",
    "本週詞表變成句子：每週練習包裡花开、小鸟、春天的例句，附拼音",
    "點一個詞就能查：日文故事裡的「桃」，顯示假名、羅馬字、意思和筆順",
    "整篇讀完，逐句檢查：16 句中有 15 句讀得對，每句都能和應用的聲音比較（Pro）",
    "在螢幕上按筆順寫：用手指描寫「花」，跟著紅色筆畫寫",
    "聽、寫、對答案：在紙上寫完後，翻開田字格裡的「春天」和拼音",
    "列印田字格字帖：描紅加拼音，A4 或 Letter",
    "成千上萬個現成的詞：詞庫按語言和級別分組，含 HSK 詞組和學校聽寫詞表",
    "不用註冊，沒有廣告，沒有訂閱：田字格字帖的列印預覽；Pro 是一次性購買",
  ]),
  trust: {
    title: "預設只留在你的裝置上",
    body: "沒有廣告，不用帳號，沒有訂閱。詞、詞表和練習都在你的裝置上，離線也能用。例外是會先徵求你同意的 AI 功能：Paper Check、雲端拍照識詞、例句和每週練習包會把照片或詞語傳送到我們的伺服器和 Google 的 Gemini 模型，伺服器不保存任何內容。",
  },
  faqs: [
    {
      q: "TraceSheet 改名叫 LingoWonders 了，還是同一個 App 嗎？",
      a: "是的。從 2.1 版起，TraceSheet 改名為 LingoWonders。它是 App Store 上的同一個 App，直接更新即可，你的詞表、讀物和進度都照舊留在裝置上，Pro 也會保留。",
    },
    {
      q: "需要訂閱或註冊帳號嗎？",
      a: "都不用。沒有訂閱，不用註冊，沒有廣告。大部分功能免費。Pro 是一次性購買，一份 Pro 透過家人共享全家都能用，價格以 App Store 顯示的當地價格為準。",
    },
    {
      q: "免費能用哪些功能？",
      a: "所有練習模式、筆順和書寫檢查、朗讀評分、拍照建詞表、HSK 一至三級詞庫（約 2,200 個詞）、所有內建故事，以及每天一定額度的自己的讀物。練習紙每張免費列印第 1 頁，想印幾張都行；測驗紙每一頁都免費。每週練習包累計 3 個包和 60 個例句詞，Paper Check 3 次。",
    },
    {
      q: "支援哪些語言？",
      a: "詞表和讀物支援中文（簡體和繁體）、日文、韓文和英文。讀音可顯示拼音、注音、粵拼、假名和羅馬字，韓文顯示羅馬拼音，英文顯示美式音標。筆順可依詞表選擇中國、新加坡、馬來西亞、台灣或日本漢字。",
    },
    {
      q: "AI 用來做什麼？會傳送什麼？",
      a: "AI 用來寫例句、產生每週練習包、辨識清單照片裡畫線的詞，以及讀取 Paper Check 的答題紙。第一次使用前，App 會先徵求你的同意。詞語或照片會傳送到我們的伺服器和 Google 的 Gemini 模型，伺服器不保存照片或文字。可以隨時在「設定 › AI 功能」裡關閉。AI 產生的內容可能有錯誤。",
    },
    {
      q: "Paper Check 會幫孩子批改嗎？",
      a: "不會。Paper Check（測試版）會顯示每一題它讀到了什麼，由你來批改每一題。免費 3 次，之後需要 Pro。",
    },
    {
      q: "哪些 YouTube 影片能用？",
      a: "有字幕的影片。字幕由你的手機直接取得，不經過我們的伺服器。影片沒有字幕的話，貼上文字，影片的聲音仍然可以當作朗讀。",
    },
    {
      q: "可以離線使用嗎？",
      a: "可以，除了 AI 功能和取得網頁、影片。詞表、練習、書寫、聽寫、語音檢查和列印都不需要連網。翻譯使用 Apple 的裝置端翻譯，需要 iOS 18 或以上版本。",
    },
    {
      q: "朗讀聲音聽起來很機械，怎麼辦？",
      a: "LingoWonders 用的是手機內建的語音。下載「增強」或「高品質」語音即可：iPhone 設定 → 輔助使用 → 閱讀與朗讀 → 聲音 → 選擇語言。",
    },
    {
      q: "怎麼恢復 Pro？換手機怎麼辦？",
      a: "Pro：用購買時的 Apple ID 登入，點「設定 › 恢復購買」。資料：在「設定 › 換新手機」裡存一個備份檔案，到新手機上開啟即可。沒有自動同步。",
    },
  ],
  privacy: {
    updated: "2026-10-20",
    sections: [
      {
        heading: "關於本應用程式",
        body: [
          "LingoWonders（原名 TraceSheet）由 AppFactory 開發。本政策適用於 iPhone 和 iPad 上的 LingoWonders 應用程式。",
        ],
      },
      {
        heading: "留在你裝置上的資料",
        body: [
          "清單、閱讀內容、進度、孩子的檔案和錄音都只儲存在你的裝置上。沒有帳號，無需註冊。語音檢查、翻譯以及從照片辨識文字都在裝置上完成。備份是你自己儲存的檔案，沒有雲端同步。",
        ],
      },
      {
        heading: "使用 AI 功能時傳送的內容",
        body: [
          "在你於應用程式首次使用 AI 功能前顯示的授權頁上選擇允許之前，不會傳送任何內容。你可以隨時在「設定 › AI 功能」中關閉。",
          [
            "每週包：清單中的詞語、級別和學年、應用程式語言、已學會的詞語和每詞句數；只重做包的一部分時，還會傳送該包裡已有的例句和讀物。",
            "產生例句：詞語、級別和應用程式語言。",
            "紙本檢查：答題紙的照片。",
            "清單照片：連線時掃描的清單照片也會縮小後傳送，用來找出畫線的詞語。",
          ],
          "每個請求都帶有隨機的安裝編號，若有 Pro 購買憑證也會帶上，用於計算合理使用額度。我們的伺服器會把請求轉交給 Google 的 Gemini API 來產生結果。伺服器不儲存照片或詞語，紀錄裡只有次數、耗時和錯誤代碼。為了計算合理使用額度，伺服器會保留隨機安裝編號（與你本人無關聯）及其請求次數；Pro 使用者還會保留該購買的 App Store 交易編號。Google 可能會依其 Gemini API 條款短暫保留請求以防濫用，且不會用於訓練模型。紙本檢查的照片會在你的裝置上保留 30 天，用於檢查紀錄；清單照片隨清單儲存在你的裝置上。",
        ],
      },
      {
        heading: "統計與當機報告",
        body: [
          [
            "使用統計（Google Firebase Analytics）：匿名的應用程式使用事件，例如產生了一份字帖，或顯示了 Pro 頁面。統計資料不包含詞語、文字或圖片。",
            "當機報告（Firebase Crashlytics）：技術性當機與診斷資料，僅用於修正問題。",
          ],
        ],
      },
      {
        heading: "網頁與影片",
        body: [
          "在「閱讀」中加入網頁或影片時，由你的裝置直接從該網站取得，不經過我們的伺服器。",
        ],
      },
      {
        heading: "廣告與追蹤",
        body: [
          "LingoWonders 不顯示廣告，也不會跨應用程式或網站追蹤你——沒有 App 追蹤透明度提示，也不使用廣告識別碼。字帖上印的 QR 碼是 appfactory.sg 上的一個短連結，會轉到應用程式的 App Store 頁面（其他裝置則轉到本網站）。連結只表明它來自列印的字帖，不帶任何識別資訊，也不包含你或孩子的任何資料。和所有網站一樣，我們的網站託管方會基於安全原因保留一般存取紀錄（如 IP 位址和瀏覽器類型）。",
        ],
      },
      {
        heading: "購買",
        body: [
          "LingoWonders Pro 是支援家人共享的一次性購買，完全由 App Store 處理，我們不會接觸你的付款資訊。",
        ],
      },
      {
        heading: "兒童",
        body: [
          "LingoWonders 是設計給家長陪孩子一起使用的應用程式。沒有聊天和社交功能。AI 功能在家長允許之前保持關閉。字帖和詞表只有在你自己列印或透過系統分享面板分享時才會離開裝置。",
        ],
      },
      {
        heading: "資料刪除",
        body: [
          "刪除應用程式會移除裝置上的所有本機資料（清單、檔案、閱讀內容、錄音和進度）。如需刪除我們伺服器上的安裝編號及其次數，請來信。",
        ],
      },
      {
        heading: "聯絡方式",
        body: [
          "如有疑問：來信 lei@appfactory.sg。",
        ],
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
          "我們授予你一項個人的、非專屬、不可轉讓的授權：在你擁有或控制的裝置上安裝並使用 LingoWonders，僅限個人非商業用途，並受你取得本應用程式時所適用的 App Store 條款約束。",
        ],
      },
      {
        heading: "內購",
        body: [
          "LingoWonders Pro 是一次性內購，由 App Store 按其付款條款處理，支援家人共享。可隨時透過「設定」→「恢復購買」找回。退款由 App Store 處理，而非我們。",
        ],
      },
      {
        heading: "你的內容",
        body: [
          "你輸入或掃描的聽寫清單、姓名和照片歸你所有。LingoWonders 在你的裝置上本機處理它們，用於產生拼音、筆順和練習字帖；我們自己不會接收或保存這些內容。",
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
          "LingoWonders 按「現況」提供，在法律允許的最大範圍內不附帶任何形式的保證。在同等範圍內，我們就與本應用程式相關的任何索賠所承擔的全部責任，以你在索賠前十二個月內為本應用程式支付的金額為限。",
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
  host: "lingowonders",
  category: "app",
  schemaCategory: "EducationalApplication",
  buildNumber: 8,
  version: "2.1.0",
  // 2.1 is in App Review; the version on the store is live.
  status: "live",
  platforms: ["iOS"],
  // ct=site attributes site downloads in App Store Connect analytics.
  appStoreUrl: "https://apps.apple.com/app/id6816287607?pt=119559267&ct=site&mt=8",
  appStoreId: "6816287607",
  // JSON-LD Offer only; no page quotes a price (the 2.1 store copy gives none).
  proOffer: { name: "LingoWonders Pro", price: "14.99" },
  icon: `${ASSETS}/icon.png`,
  ogImage: `${ASSETS}/og.png`,
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};

// ---------------------------------------------------------------------------
// Copy for the landing page and the site shell (not part of the registry).

/** A muted promo clip (H.264 + VP9) with its poster frame. */
export interface LwClip {
  mp4: string;
  webm: string;
  poster: string;
  width: number;
  height: number;
}

/** The 9:16 promo clips "Read", "Say it" and "Week" (720×1280, ~24 s), and
 * the 16:9 "Read" cut. Only en and zh-cn were cut; zh-tw plays zh-cn. */
export function lwClip(name: "read" | "say" | "week" | "wide-read", locale: Locale): LwClip {
  const lang = locale === "en" ? "en" : "zh-cn";
  const base = `${ASSETS}/video/lw-${name}-${lang}`;
  const wide = name === "wide-read";
  return {
    mp4: `${base}.mp4`,
    webm: `${base}.webm`,
    poster: `${base}.jpg`,
    width: wide ? 1280 : 720,
    height: wide ? 720 : 1280,
  };
}

export function lwScreenSrc(screen: LwScreen, locale: Locale, device: "phone" | "ipad" = "phone"): string {
  return `${ASSETS}/${device === "ipad" ? "ipad" : "screens"}/${locale}/${screen}.webp`;
}

export const LW_SCREEN_SIZE = {
  phone: { width: 600, height: 1171 },
  ipad: { width: 1000, height: 1333 },
} as const;

/** The owner's YouTube channel (Lei Live). Linked, never embedded. */
export const LW_YOUTUBE = "https://www.youtube.com/@LeiPlaysBuilds";

export interface LwChapter {
  /** The step's character, written in the 田 cell (decorative). */
  glyph: string;
  kicker: string;
  title: string;
  body: string;
  /** Extra line in a smaller face (an honest caveat). */
  note?: string;
  /** In-app labels, verbatim from the app. */
  labels: string[];
  media:
    | { kind: "screen"; screen: LwScreen; alt: string }
    /** `poster`: the app screen shown before the clip plays (the clips open
     * on a bare title card). */
    | { kind: "clip"; clip: "say" | "week"; poster: LwScreen; alt: string };
  guide: LwGuideId;
  guideLabel: string;
}

export interface TracesheetLanding {
  /** The h1, one entry per line. */
  heroTitle: string[];
  heroSub: string;
  heroNote: string;
  /** "Formerly TraceSheet" line under the hero. */
  renameNote: string;
  heroClipLabel: string;
  loopKicker: string;
  loopTitle: string;
  loopIntro: string;
  inApp: string;
  chapters: LwChapter[];
  langKicker: string;
  langTitle: string;
  langIntro: string;
  specimens: { text: string; reading: string; label: string; lang: string }[];
  langFacts: string[];
  plansKicker: string;
  plansTitle: string;
  freeTitle: string;
  freeLead: string;
  freeItems: string[];
  proTitle: string;
  proLead: string;
  proItems: string[];
  plansNote: string;
  trustKicker: string;
  onDeviceTitle: string;
  onDevice: string[];
  sentTitle: string;
  sent: string[];
  trustLink: string;
  guidesKicker: string;
  guidesTitle: string;
  guidesIntro: string;
  liveKicker: string;
  liveTitle: string;
  liveBody: string;
  liveCta: string;
  liveNote: string;
  liveAlt: string;
  faqKicker: string;
  faqTitle: string;
  /** Shell labels. */
  nav: { guides: string; live: string; menu: string; appStore: string; youtube: string; contact: string };
  footLine: string;
}

const landingEn: TracesheetLanding = {
  heroTitle: ["Read anything.", "Say it out loud.", "Write it by hand."],
  heroSub:
    "LingoWonders turns a photo, a web page or a YouTube video into a lesson in Chinese, Japanese, Korean or English. Listen sentence by sentence, say it back, then learn the week's words stroke by stroke and print real practice sheets.",
  heroNote: "Free on iPhone and iPad. No account, no ads, no subscription.",
  renameNote: "Formerly TraceSheet. Same app, new name from version 2.1.",
  heroClipLabel:
    "LingoWonders in 24 seconds: a story read aloud sentence by sentence, with pinyin over the words and a translation below.",
  loopKicker: "The week",
  loopTitle: "One week, six steps",
  loopIntro:
    "A week in LingoWonders runs in this order, from a text you want to read to a sheet on the fridge. The Week tab keeps your place and shows the next step as one button.",
  inApp: "In the app",
  chapters: [
    {
      glyph: "读",
      kicker: "Read",
      title: "Read anything you want to learn from",
      body: "Photograph a page of a book, paste a text, open a web page or a YouTube video with captions, or share from Safari, YouTube, Photos or Files. LingoWonders splits it into sentences, puts pinyin, zhuyin, Jyutping, kana or romaji over the words and a translation below.",
      note: "Web pages and captions are fetched by your phone, not by our server.",
      labels: ["New reading", "Photos", "Paste text", "Web link", "YouTube link", "File"],
      media: {
        kind: "screen",
        screen: "01-read",
        alt: "A reading of 司马光砸缸 with pinyin over every word and an English translation under each sentence",
      },
      guide: "read-anything",
      guideLabel: "Guide: read anything",
    },
    {
      glyph: "说",
      kicker: "Say",
      title: "Listen sentence by sentence, then say it",
      body: "Play reads aloud while the page follows, at 0.5× to 2×, even with the screen off. Tap a word to look it up and save it. Record a sentence beside the app voice, and the check on your phone says “Sounds right” or asks for once more.",
      labels: ["Play", "Read aloud", "Listen first", "Sounds right"],
      media: {
        kind: "clip",
        clip: "say",
        poster: "02-read-aloud",
        alt: "Promo clip: recording a sentence in the Read aloud sheet and getting the mark Sounds right",
      },
      guide: "listen-and-say",
      guideLabel: "Guide: listen and say",
    },
    {
      glyph: "周",
      kicker: "Week",
      title: "This week's list, in sentences",
      body: "One tap turns the week's word list into a Week Pack: example sentences with readings and translations, a short reader made of words the learner knows, and question cards for a parent.",
      note: "Written by AI on our server, so it can have mistakes. The app asks before anything is sent.",
      labels: ["Make this week's pack", "Sentences", "Reader", "Questions to ask"],
      media: {
        kind: "clip",
        clip: "week",
        poster: "03-week-pack",
        alt: "Promo clip: a word list becomes a Week Pack with sentences, a reader and question cards",
      },
      guide: "week-pack",
      guideLabel: "Guide: the Week Pack",
    },
    {
      glyph: "写",
      kicker: "Write",
      title: "Write it stroke by stroke",
      body: "Trace, then write from memory, with a finger or Apple Pencil. Chinese characters, kana and hangul are checked stroke by stroke, in the right order, for free. Each list can follow the stroke order of China, Singapore, Malaysia, Taiwan or Japanese kanji.",
      labels: ["Write on screen", "Trace", "From memory", "Hint"],
      media: {
        kind: "screen",
        screen: "06-write",
        alt: "Tracing 花 in a 田字格 box for the Japanese word はなび (fireworks), with the next stroke in red",
      },
      guide: "write-stroke-by-stroke",
      guideLabel: "Guide: stroke order",
    },
    {
      glyph: "听",
      kicker: "Check",
      title: "Dictation on real paper, then Paper Check",
      body: "The app reads each word aloud for your child to write on paper. Reveal the answer, mark it, and missed words come back for review. Print a test sheet, photograph the finished test, and Paper Check (beta) shows what it read. You decide every mark.",
      labels: ["Dictation", "Hear it again", "Got it", "Not yet", "Paper Check"],
      media: {
        kind: "screen",
        screen: "07-dictation",
        alt: "Dictation answer: 春天 in two 田字格 boxes with pinyin chūn tiān, and Not yet and Got it buttons",
      },
      guide: "dictation-and-paper-check",
      guideLabel: "Guide: dictation and Paper Check",
    },
    {
      glyph: "印",
      kicker: "Print",
      title: "Print real practice sheets",
      body: "田字格 with 描红 tracing and pinyin over the characters, pinyin lines, lines and square grid, on A4 or US Letter. Print with AirPrint, share a PDF or save an image. Page 1 of every sheet is free, as many sheets as you like.",
      labels: ["Print sheets", "Tian grid", "Pinyin lines", "Preview & print"],
      media: {
        kind: "screen",
        screen: "08-tian-sheet",
        alt: "Print sheets: a 田字格 sheet preview for 花, 开, 小, 鸟, 春, 天 with pinyin, and the sheet types and trace colours",
      },
      guide: "print-practice-sheets",
      guideLabel: "Guide: printing sheets",
    },
  ],
  langKicker: "Languages",
  langTitle: "Four languages, each with its own reading",
  langIntro:
    "A list or a reading can be Chinese, Japanese, Korean or English, and each line shows the reading of its own language.",
  specimens: [
    { text: "语言", reading: "yǔ yán", label: "Simplified · pinyin", lang: "zh-CN" },
    { text: "語言", reading: "ㄩˇ ㄧㄢˊ", label: "Traditional · zhuyin", lang: "zh-TW" },
    { text: "語言", reading: "jyu5 jin4", label: "Cantonese · Jyutping", lang: "zh-HK" },
    { text: "ことば", reading: "kotoba", label: "Japanese · kana, romaji", lang: "ja" },
    { text: "언어", reading: "eoneo", label: "Korean · romanization", lang: "ko" },
    { text: "word", reading: "/wɝd/", label: "English · US IPA", lang: "en" },
  ],
  langFacts: [
    "About 7,200 Chinese words in the Library, including HSK 1–6. Levels 1–3 are free.",
    "Tao Nan School P1 spelling and 听写 lists, and thousands more words from preschool to A level.",
    "Stroke order for China, Singapore, Malaysia, Taiwan or Japanese kanji, chosen per list.",
    "English dictation in US, UK, Australian and Singapore voices.",
  ],
  plansKicker: "Free and Pro",
  plansTitle: "Most of it is free. Pro is bought once.",
  freeTitle: "Free",
  freeLead: "For every learner, family and class.",
  freeItems: [
    "Every practice mode, stroke order and the writing check",
    "The read-aloud score and the speech check",
    "Photo word lists, unlimited",
    "HSK 3.0 levels 1–3, about 2,200 words",
    "All built-in stories and a daily allowance of your own readings",
    "Page 1 of every practice sheet, as often as you like; every page of a test sheet",
    "Week Pack: 3 packs and 60 sentence words in total",
    "Paper Check: 3 checks",
    "Sharing a list by link, QR code or file",
  ],
  proTitle: "Pro",
  proLead: "One-time purchase. No subscription. Family Sharing.",
  proItems: [
    "Every page of every sheet, stroke-order sheets and strips, Combined PDF",
    "标准楷书 textbook kai, School print and Sloped print fonts; coloured trace ink and trace fade",
    "Keep the small QR on your sheets or print clean pages",
    "Unlimited readings, longer texts, more recordings, whole-piece recording",
    "Week Pack: 10 packs and 200 sentence words a week",
    "Paper Check beyond the 3 free ones",
    "HSK 4–6 decks and more profiles",
  ],
  plansNote:
    "The App Store shows the Pro price in your currency. AI features run on our servers and cost us per use, so they have a fair-use limit that may change over time. Everything else works offline.",
  trustKicker: "Privacy",
  onDeviceTitle: "Stays on your device",
  onDevice: [
    "Your words, lists, readings, progress, profiles and recordings",
    "The speech check, translation and reading text from photos",
    "No account, no ads, no tracking. A backup is a file you save yourself.",
  ],
  sentTitle: "Sent only when you use AI, after you allow it",
  sent: [
    "Week Pack and example sentences: the words, their level and your app language",
    "Paper Check: the photo of the sheet",
    "A list photo scanned while online: a smaller copy, to find underlined words",
    "These go to our server and Google's Gemini model. Our server keeps no photos or text. Turn AI off in Settings › AI features.",
  ],
  trustLink: "Read the privacy policy",
  guidesKicker: "Guides",
  guidesTitle: "How to do each step",
  guidesIntro: "Short guides with the real screens, naming every button the way the app does.",
  liveKicker: "Live on YouTube",
  liveTitle: "Watch LingoWonders being built",
  liveBody:
    "Lei, who makes LingoWonders and the other App Factory apps, streams on YouTube as Lei Live: building the apps, testing them and using them, mistakes included. There is no fixed schedule; past streams stay on the channel.",
  liveCta: "Open Lei Live on YouTube",
  liveNote: "Opens youtube.com. Nothing from YouTube loads on this page until you click.",
  liveAlt: "A frame from the LingoWonders promo: a story read with pinyin over the words",
  faqKicker: "Questions",
  faqTitle: "Short answers",
  nav: {
    guides: "Guides",
    live: "Live",
    menu: "Site",
    appStore: "App Store",
    youtube: "Lei Live on YouTube",
    contact: "Email",
  },
  footLine: "A language reader and copybook, made by App Factory in Singapore.",
};

const landingZhCn: TracesheetLanding = {
  heroTitle: ["想读什么就读什么，", "大声读出来，", "再一笔一笔写下来。"],
  heroSub:
    "LingoWonders 把一张照片、一个网页或一段 YouTube 视频变成一堂中文、日文、韩文或英文课。逐句听、跟着读，再按笔顺写这周的生词，最后打印成真正的字帖。",
  heroNote: "iPhone 和 iPad 免费下载。不用注册，没有广告，没有订阅。",
  renameNote: "原名 TraceSheet。从 2.1 版起改名，还是同一个应用。",
  heroClipLabel: "24 秒看 LingoWonders：一篇故事逐句朗读，词上标拼音。",
  loopKicker: "一周",
  loopTitle: "一周六步",
  loopIntro:
    "在 LingoWonders 里，一周按这个顺序走：从一篇想读的文字，到贴在冰箱上的一张字帖。“本周”页会记住你走到哪一步，下一步只有一个按钮。",
  inApp: "应用里的按钮",
  chapters: [
    {
      glyph: "读",
      kicker: "读",
      title: "想读什么，就拿来读",
      body: "拍下一页书、粘贴文字、打开网页或带字幕的 YouTube 视频，也可以从 Safari、YouTube、照片或“文件”直接分享进来。LingoWonders 会把它分成句子，词上标拼音、注音、粤拼、假名或罗马字，句下加翻译。",
      note: "网页和字幕由你的手机直接获取，不经过我们的服务器。",
      labels: ["新建阅读", "照片", "粘贴文字", "网页链接", "YouTube 链接", "文件"],
      media: {
        kind: "screen",
        screen: "01-read",
        alt: "《司马光砸缸》读物：每个词上方标着拼音，正在朗读的句子被高亮",
      },
      guide: "read-anything",
      guideLabel: "指南：什么都能读",
    },
    {
      glyph: "说",
      kicker: "说",
      title: "逐句听，再自己读出来",
      body: "点播放，页面跟着朗读走，语速 0.5 倍到 2 倍，熄屏也能听。点一个词就能查、能存。在应用的声音旁边录下自己读的这一句，手机本地判断“读对了”，或者请你再读一次。",
      labels: ["播放", "朗读", "先听再读", "读对了"],
      media: {
        kind: "clip",
        clip: "say",
        poster: "02-read-aloud",
        alt: "宣传短片：在“大声读”面板录下一句，得到“读对了”",
      },
      guide: "listen-and-say",
      guideLabel: "指南：听、查词、大声读",
    },
    {
      glyph: "周",
      kicker: "本周",
      title: "这周的词表，变成句子",
      body: "一键把本周词表做成每周练习包：每个词的例句（附读音和翻译）、一篇用已会的词写成的小短文，还有给家长的提问卡。",
      note: "由我们服务器上的 AI 生成，可能有错误。发送任何内容之前，应用都会先问你。",
      labels: ["制作本周练习包", "例句", "小短文", "可以问的问题"],
      media: {
        kind: "clip",
        clip: "week",
        poster: "03-week-pack",
        alt: "宣传短片：一份词表变成带例句、小短文和提问卡的每周练习包",
      },
      guide: "week-pack",
      guideLabel: "指南：每周练习包",
    },
    {
      glyph: "写",
      kicker: "写",
      title: "一笔一笔写",
      body: "先描红，再默写，用手指或 Apple Pencil 都行。汉字、假名和韩文都按正确笔顺逐笔检查，而且免费。每份词表可以选中国、新加坡、马来西亚、台湾或日本汉字的笔顺。",
      labels: ["手指写字", "描红", "默写", "提示"],
      media: {
        kind: "screen",
        screen: "06-write",
        alt: "为日文 はなび（烟花）在田字格里描写“花”，下一笔显示为红色",
      },
      guide: "write-stroke-by-stroke",
      guideLabel: "指南：一笔一笔写",
    },
    {
      glyph: "听",
      kicker: "听写",
      title: "在纸上听写，再用 Paper Check 检查",
      body: "应用把词逐个读出来，孩子写在纸上。翻开答案、标记对错，没写对的词会回来复习。打印测验纸，写完拍照，Paper Check（测试版）会显示它读到了什么，每一题都由你来判。",
      labels: ["听写", "再听一遍", "写对了", "还没写对", "Paper Check"],
      media: {
        kind: "screen",
        screen: "07-dictation",
        alt: "听写答案：田字格里的“春天”和拼音 chūn tiān，下方是还没写对和写对了",
      },
      guide: "dictation-and-paper-check",
      guideLabel: "指南：听写和 Paper Check",
    },
    {
      glyph: "印",
      kicker: "打印",
      title: "印成真正的字帖",
      body: "田字格描红，汉字上方可加拼音；还有拼音四线格、横线格和方格，A4 或 Letter 纸都行。隔空打印、分享 PDF 或存成图片。每张字帖的第 1 页免费，想印几张就印几张。",
      labels: ["打印字帖", "田字格", "拼音四线格", "预览并打印"],
      media: {
        kind: "screen",
        screen: "08-tian-sheet",
        alt: "制作字帖：花、开、小、鸟、春、天的田字格预览，带拼音，下方是字帖类型和描红颜色",
      },
      guide: "print-practice-sheets",
      guideLabel: "指南：打印字帖",
    },
  ],
  langKicker: "语言",
  langTitle: "四种语言，各有各的读音",
  langIntro: "词表和读物可以是中文、日文、韩文或英文，每一行都显示它自己那门语言的读音。",
  specimens: [
    { text: "语言", reading: "yǔ yán", label: "简体 · 拼音", lang: "zh-CN" },
    { text: "語言", reading: "ㄩˇ ㄧㄢˊ", label: "繁体 · 注音", lang: "zh-TW" },
    { text: "語言", reading: "jyu5 jin4", label: "粤语 · 粤拼", lang: "zh-HK" },
    { text: "ことば", reading: "kotoba", label: "日文 · 假名、罗马字", lang: "ja" },
    { text: "언어", reading: "eoneo", label: "韩文 · 罗马音", lang: "ko" },
    { text: "word", reading: "/wɝd/", label: "英文 · 美式音标", lang: "en" },
  ],
  langFacts: [
    "中文词库约有 7,200 个词，含 HSK 1–6，一至三级免费。",
    "新加坡道南学校 P1 听写词表，另有从学前到 A level 的数千个词。",
    "笔顺可按词表选择中国、新加坡、马来西亚、台湾或日本汉字。",
    "英语听写有美、英、澳、新加坡语音；香港默书配粤语朗读和原稿纸。",
  ],
  plansKicker: "免费版与 Pro",
  plansTitle: "大部分功能免费，Pro 买一次就好。",
  freeTitle: "免费",
  freeLead: "给每个学习者、每个家庭、每个班级。",
  freeItems: [
    "所有练习模式、笔顺和书写检查",
    "朗读评分和语音检查",
    "拍照建词表，不限次数",
    "HSK 3.0 一至三级，约 2,200 个词",
    "所有内置故事，以及每天一定额度的自己的读物",
    "每张练习纸第 1 页，想印几次都行；测验纸每一页都免费",
    "每周练习包：累计 3 个包和 60 个例句词",
    "Paper Check：3 次",
    "用链接、二维码或文件分享词表",
  ],
  proTitle: "Pro",
  proLead: "一次性购买，不是订阅，支持家人共享。",
  proItems: [
    "每张字帖的每一页、笔顺字帖和笔顺条、合订本 PDF",
    "标准楷书、School print、Sloped print 字体；彩色描红和越描越淡",
    "字帖上的小二维码可保留，也可打印干净的页面",
    "读物不限篇数、更长的文本、更多录音、录整篇",
    "每周练习包：每周 10 个包和 200 个例句词",
    "超出免费 3 次的 Paper Check",
    "HSK 四至六级词库和更多档案",
  ],
  plansNote:
    "Pro 的价格以 App Store 显示的当地价格为准。AI 功能在我们的服务器上运行，每次使用都有成本，所以设有合理使用上限，上限可能随时间调整。其余功能离线即可使用。",
  trustKicker: "隐私",
  onDeviceTitle: "留在你的设备上",
  onDevice: [
    "你的词、词表、读物、进度、档案和录音",
    "语音检查、翻译，以及从照片识别文字",
    "不用账号，没有广告，没有跟踪。备份是你自己保存的文件。",
  ],
  sentTitle: "只在你允许并使用 AI 功能时才发送",
  sent: [
    "每周练习包和例句：词语、级别和应用语言",
    "Paper Check：答题纸的照片",
    "联网时扫描的清单照片：缩小后发送，用来找出画线的词",
    "这些内容会发送到我们的服务器和 Google 的 Gemini 模型，服务器不保存照片或文字。可在“设置 › AI 功能”里关闭。",
  ],
  trustLink: "阅读隐私政策",
  guidesKicker: "使用指南",
  guidesTitle: "每一步怎么做",
  guidesIntro: "配真实界面的短指南，按钮名称和应用里一模一样。",
  liveKicker: "YouTube 直播",
  liveTitle: "看 LingoWonders 是怎么做出来的",
  liveBody:
    "LingoWonders 和 App Factory 其他应用的作者 Lei，在 YouTube 上以 Lei Live 的名字直播：做应用、测应用、用应用，出错的地方也照播。没有固定时间表，以往的直播都留在频道里。",
  liveCta: "打开 YouTube 上的 Lei Live",
  liveNote: "会打开 youtube.com。点之前，这个页面不会加载任何 YouTube 内容。",
  liveAlt: "LingoWonders 宣传片的一帧：一篇故事，词上标着拼音",
  faqKicker: "常见问题",
  faqTitle: "简单回答",
  nav: {
    guides: "指南",
    live: "直播",
    menu: "网站",
    appStore: "App Store",
    youtube: "YouTube 上的 Lei Live",
    contact: "邮箱",
  },
  footLine: "外语阅读器和字帖，由新加坡的 App Factory 制作。",
};

const landingZhTw: TracesheetLanding = {
  heroTitle: ["想讀什麼就讀什麼，", "大聲唸出來，", "再一筆一筆寫下來。"],
  heroSub:
    "LingoWonders 把一張照片、一個網頁或一段 YouTube 影片變成一堂中文、日文、韓文或英文課。逐句聽、跟著讀，再按筆順寫這週的生詞，最後列印成真正的字帖。",
  heroNote: "iPhone 和 iPad 免費下載。不用註冊，沒有廣告，沒有訂閱。",
  renameNote: "原名 TraceSheet。從 2.1 版起改名，還是同一個 App。",
  heroClipLabel: "24 秒看 LingoWonders：一篇故事逐句朗讀，詞上標拼音。",
  loopKicker: "一週",
  loopTitle: "一週六步",
  loopIntro:
    "在 LingoWonders 裡，一週按這個順序走：從一篇想讀的文字，到貼在冰箱上的一張字帖。「本週」頁會記住你走到哪一步，下一步只有一個按鈕。",
  inApp: "App 裡的按鈕",
  chapters: [
    {
      glyph: "讀",
      kicker: "讀",
      title: "想讀什麼，就拿來讀",
      body: "拍下一頁書、貼上文字、開啟網頁或有字幕的 YouTube 影片，也可以從 Safari、YouTube、照片或「檔案」直接分享進來。LingoWonders 會把它分成句子，詞上標拼音、注音、粵拼、假名或羅馬字，句下加翻譯。",
      note: "網頁和字幕由你的手機直接取得，不經過我們的伺服器。",
      labels: ["新增閱讀", "照片", "貼上文字", "網頁連結", "YouTube 連結", "檔案"],
      media: {
        kind: "screen",
        screen: "01-read",
        alt: "《司马光砸缸》讀物：每個詞上方標著拼音，正在朗讀的句子被標示出來",
      },
      guide: "read-anything",
      guideLabel: "指南：什麼都能讀",
    },
    {
      glyph: "說",
      kicker: "說",
      title: "逐句聽，再自己唸出來",
      body: "點播放，頁面跟著朗讀走，語速 0.5 倍到 2 倍，關掉螢幕也能聽。點一個詞就能查、能存。在 App 的聲音旁邊錄下自己唸的這一句，手機本機判斷「讀對了」，或請你再讀一次。",
      labels: ["播放", "朗讀", "先聽再讀", "讀對了"],
      media: {
        kind: "clip",
        clip: "say",
        poster: "02-read-aloud",
        alt: "宣傳短片：在「大聲讀」面板錄下一句，得到「讀對了」",
      },
      guide: "listen-and-say",
      guideLabel: "指南：聽、查詞、大聲唸",
    },
    {
      glyph: "週",
      kicker: "本週",
      title: "這週的詞表，變成句子",
      body: "一鍵把本週詞表做成每週練習包：每個詞的例句（附讀音和翻譯）、一篇用已會的詞寫成的小短文，還有給家長的提問卡。",
      note: "由我們伺服器上的 AI 產生，可能有錯誤。傳送任何內容之前，App 都會先問你。",
      labels: ["製作本週練習包", "例句", "小短文", "可以問的問題"],
      media: {
        kind: "clip",
        clip: "week",
        poster: "03-week-pack",
        alt: "宣傳短片：一份詞表變成有例句、小短文和提問卡的每週練習包",
      },
      guide: "week-pack",
      guideLabel: "指南：每週練習包",
    },
    {
      glyph: "寫",
      kicker: "寫",
      title: "一筆一筆寫",
      body: "先描紅，再默寫，用手指或 Apple Pencil 都可以。漢字、假名和韓文都按正確筆順逐筆檢查，而且免費。每份詞表可以選中國、新加坡、馬來西亞、台灣或日本漢字的筆順。",
      labels: ["手指寫字", "描紅", "默寫", "提示"],
      media: {
        kind: "screen",
        screen: "06-write",
        alt: "為日文 はなび（煙火）在田字格裡描寫「花」，下一筆顯示為紅色",
      },
      guide: "write-stroke-by-stroke",
      guideLabel: "指南：一筆一筆寫",
    },
    {
      glyph: "聽",
      kicker: "聽寫",
      title: "在紙上聽寫，再用 Paper Check 檢查",
      body: "App 把詞逐個唸出來，孩子寫在紙上。翻開答案、標記對錯，沒寫對的詞會回來複習。列印測驗紙，寫完拍照，Paper Check（測試版）會顯示它讀到了什麼，每一題都由你來判斷。",
      labels: ["聽寫", "再聽一遍", "寫對了", "還沒寫對", "Paper Check"],
      media: {
        kind: "screen",
        screen: "07-dictation",
        alt: "聽寫答案：田字格裡的「春天」和拼音 chūn tiān，下方是還沒寫對和寫對了",
      },
      guide: "dictation-and-paper-check",
      guideLabel: "指南：聽寫和 Paper Check",
    },
    {
      glyph: "印",
      kicker: "列印",
      title: "印成真正的字帖",
      body: "田字格描紅，國字上方可加拼音；還有拼音四線格、橫線格和方格，A4 或 Letter 紙都行。AirPrint 列印、分享 PDF 或存成圖片。每張字帖的第 1 頁免費，想印幾張就印幾張。",
      labels: ["列印字帖", "田字格", "拼音四線格", "預覽並列印"],
      media: {
        kind: "screen",
        screen: "08-tian-sheet",
        alt: "製作字帖：花、开、小、鸟、春、天的田字格預覽，附拼音，下方是字帖類型和描紅顏色",
      },
      guide: "print-practice-sheets",
      guideLabel: "指南：列印字帖",
    },
  ],
  langKicker: "語言",
  langTitle: "四種語言，各有各的讀音",
  langIntro: "詞表和讀物可以是中文、日文、韓文或英文，每一行都顯示它自己那種語言的讀音。",
  specimens: [
    { text: "语言", reading: "yǔ yán", label: "簡體 · 拼音", lang: "zh-CN" },
    { text: "語言", reading: "ㄩˇ ㄧㄢˊ", label: "繁體 · 注音", lang: "zh-TW" },
    { text: "語言", reading: "jyu5 jin4", label: "粵語 · 粵拼", lang: "zh-HK" },
    { text: "ことば", reading: "kotoba", label: "日文 · 假名、羅馬字", lang: "ja" },
    { text: "언어", reading: "eoneo", label: "韓文 · 羅馬拼音", lang: "ko" },
    { text: "word", reading: "/wɝd/", label: "英文 · 美式音標", lang: "en" },
  ],
  langFacts: [
    "中文詞庫約有 7,200 個詞，含 HSK 1–6，一至三級免費。",
    "新加坡道南學校 P1 聽寫詞表，另有從學前到 A level 的數千個詞。",
    "筆順可依詞表選擇中國、新加坡、馬來西亞、台灣或日本漢字。",
    "英語聽寫有美、英、澳、新加坡語音；香港默書配粵語朗讀和原稿紙。",
  ],
  plansKicker: "免費版與 Pro",
  plansTitle: "大部分功能免費，Pro 買一次就好。",
  freeTitle: "免費",
  freeLead: "給每個學習者、每個家庭、每個班級。",
  freeItems: [
    "所有練習模式、筆順和書寫檢查",
    "朗讀評分和語音檢查",
    "拍照建詞表，不限次數",
    "HSK 3.0 一至三級，約 2,200 個詞",
    "所有內建故事，以及每天一定額度的自己的讀物",
    "每張練習紙第 1 頁，想印幾次都行；測驗紙每一頁都免費",
    "每週練習包：累計 3 個包和 60 個例句詞",
    "Paper Check：3 次",
    "用連結、QR Code 或檔案分享詞表",
  ],
  proTitle: "Pro",
  proLead: "一次性購買，不是訂閱，支援家人共享。",
  proItems: [
    "每張字帖的每一頁、筆順字帖和筆順條、合訂本 PDF",
    "標準楷書、School print、Sloped print 字體；彩色描紅和越描越淡",
    "字帖上的小 QR Code 可保留，也可列印乾淨的頁面",
    "讀物不限篇數、更長的文本、更多錄音、錄整篇",
    "每週練習包：每週 10 個包和 200 個例句詞",
    "超出免費 3 次的 Paper Check",
    "HSK 四至六級詞庫和更多檔案",
  ],
  plansNote:
    "Pro 的價格以 App Store 顯示的當地價格為準。AI 功能在我們的伺服器上執行，每次使用都有成本，所以設有合理使用上限，上限可能隨時間調整。其餘功能離線即可使用。",
  trustKicker: "隱私",
  onDeviceTitle: "留在你的裝置上",
  onDevice: [
    "你的詞、詞表、讀物、進度、檔案和錄音",
    "語音檢查、翻譯，以及從照片辨識文字",
    "不用帳號，沒有廣告，沒有追蹤。備份是你自己儲存的檔案。",
  ],
  sentTitle: "只在你允許並使用 AI 功能時才傳送",
  sent: [
    "每週練習包和例句：詞語、級別和 App 語言",
    "Paper Check：答題紙的照片",
    "連網時掃描的清單照片：縮小後傳送，用來找出畫線的詞",
    "這些內容會傳送到我們的伺服器和 Google 的 Gemini 模型，伺服器不保存照片或文字。可在「設定 › AI 功能」裡關閉。",
  ],
  trustLink: "閱讀隱私權政策",
  guidesKicker: "使用指南",
  guidesTitle: "每一步怎麼做",
  guidesIntro: "附真實畫面的短指南，按鈕名稱和 App 裡一模一樣。",
  liveKicker: "YouTube 直播",
  liveTitle: "看 LingoWonders 是怎麼做出來的",
  liveBody:
    "LingoWonders 和 App Factory 其他 App 的作者 Lei，在 YouTube 上以 Lei Live 的名字直播：做 App、測 App、用 App，出錯的地方也照播。沒有固定時間表，以往的直播都留在頻道裡。",
  liveCta: "開啟 YouTube 上的 Lei Live",
  liveNote: "會開啟 youtube.com。點之前，這個頁面不會載入任何 YouTube 內容。",
  liveAlt: "LingoWonders 宣傳片的一格：一篇故事，詞上標著拼音",
  faqKicker: "常見問題",
  faqTitle: "簡單回答",
  nav: {
    guides: "指南",
    live: "直播",
    menu: "網站",
    appStore: "App Store",
    youtube: "YouTube 上的 Lei Live",
    contact: "信箱",
  },
  footLine: "外語閱讀器和字帖，由新加坡的 App Factory 製作。",
};

export const tracesheetLanding: Record<Locale, TracesheetLanding> = {
  en: landingEn,
  "zh-cn": landingZhCn,
  "zh-tw": landingZhTw,
};

/** Copy for the LingoWonders support page (its own route, not the shared one). */
export interface TracesheetSupport {
  metaTitle: string;
  guidesTitle: string;
  guidesBody: string;
  restoreTitle: string;
  restoreBody: string;
  inAppTitle: string;
  inAppBody: string;
  renameTitle: string;
  renameBody: string;
}

export const tracesheetSupport: Record<Locale, TracesheetSupport> = {
  en: {
    metaTitle: "LingoWonders Support: Help, Guides and Restoring Pro",
    guidesTitle: "Start with a guide",
    guidesBody: "Step-by-step guides with the real screens, from your first list to printing sheets.",
    restoreTitle: "Restore Pro on a new device",
    restoreBody:
      "Sign in with the Apple ID that bought Pro, then open Settings › Restore purchases in LingoWonders. Family Sharing shares Pro with your family. To move your lists and readings, use Settings › Move to a new phone.",
    inAppTitle: "Help inside the app",
    inAppBody:
      "Settings › Help & FAQ answers most questions without a connection. Settings › Contact support writes to us from the app.",
    renameTitle: "Coming from TraceSheet?",
    renameBody:
      "TraceSheet is now called LingoWonders, from version 2.1. It is the same app; update it from the App Store.",
  },
  "zh-cn": {
    metaTitle: "LingoWonders 支持：帮助、使用指南和恢复 Pro",
    guidesTitle: "先看使用指南",
    guidesBody: "配真实界面的分步指南，从第一份词表到打印字帖。",
    restoreTitle: "在新设备上恢复 Pro",
    restoreBody:
      "用购买 Pro 的 Apple ID 登录，然后在 LingoWonders 里打开“设置 › 恢复购买”。家人共享可以共享 Pro。要把词表和读物搬过去，用“设置 › 换新手机”。",
    inAppTitle: "应用里的帮助",
    inAppBody: "“设置 › 帮助与常见问题”不联网也能看，大部分问题都有答案。“设置 › 联系我们”可以直接在应用里写信给我们。",
    renameTitle: "以前用的是 TraceSheet？",
    renameBody: "从 2.1 版起，TraceSheet 改名为 LingoWonders。还是同一个应用，在 App Store 更新即可。",
  },
  "zh-tw": {
    metaTitle: "LingoWonders 支援：說明、使用指南和恢復 Pro",
    guidesTitle: "先看使用指南",
    guidesBody: "附真實畫面的分步指南，從第一份詞表到列印字帖。",
    restoreTitle: "在新裝置上恢復 Pro",
    restoreBody:
      "用購買 Pro 的 Apple ID 登入，然後在 LingoWonders 裡開啟「設定 › 恢復購買」。家人共享可以共享 Pro。要把詞表和讀物搬過去，用「設定 › 換新手機」。",
    inAppTitle: "App 裡的說明",
    inAppBody: "「設定 › 說明與常見問題」不連網也能看，大部分問題都有答案。「設定 › 聯絡我們」可以直接在 App 裡寫信給我們。",
    renameTitle: "以前用的是 TraceSheet？",
    renameBody: "從 2.1 版起，TraceSheet 改名為 LingoWonders。還是同一個 App，在 App Store 更新即可。",
  },
};
