// Popline (apps/popline in the appfactory repo, bundle id com.appfactory.popline):
// registry content in all three locales. It uses the shared plain shell and
// landing (components/sites/shared), with only the accent colour changed
// (components/sites/popline/site.css).
//
// Unreleased: status "building", no store link, no App Store id.
// TODO(Lei): once the store record exists, add `appStoreId` and `appStoreUrl`
// below, set status "live", and add the app to scripts/go-link.test.mts.
//
// Copy is not written here; it is cut down from App Marketing's drafts:
// - en and zh-tw: artifacts hq/_repo/evidence/2026-11-01_popline-marketing/
//   aso.md (en-US and zh-Hant listing) and BRIEF.md (one-liner, key claims).
// - zh-cn: the zh-Hans store copy in appfactory apps/popline/docs/store-listing.md.
//   That copy leads with on-device wording, so the subtitle and tagline use the
//   zh-Hant wording converted to Simplified (marked below).
// - privacy: apps/popline/docs/privacy.md section 4 (draft policy text). The
//   zh-cn and zh-tw versions are translations of the English draft; no Chinese
//   version exists yet.
// Screenshots: none exist yet, so the lists are empty (the landing copes).

import type { AppContent, AppLocalized } from "./apps";

const IMG = "/apps/popline";

const en: AppLocalized = {
  name: "Popline",
  storeName: "Popline: Auto Captions",
  tagline: "Pick a video. Get styled captions in seconds.",
  subtitle: "Fast captions, no watermark",
  oneLiner:
    "Pick a video, get styled captions in seconds, fix any word right on the video. 11 caption styles, 10 free fonts. No account, no upload, no watermark.",
  statusNote: "Needs iOS 26 or later. iPhone and iPad.",
  metaTitle: "Popline: Auto Captions. Fast captions, no watermark",
  metaDescription:
    "Pick a video, get styled captions in seconds. Tap any line on the video to fix it. 11 caption styles, 10 free fonts. No account, no upload, no watermark.",
  features: [
    {
      title: "Fast",
      body: "Popline writes, times and styles your captions as soon as you pick a clip. Lines break at natural pauses, so they're easy to read at speed.",
    },
    {
      title: "Edit right on the video",
      body: "Tap a caption to change it. Split, merge, or move it a tenth of a second earlier or later. Find and replace across every line. Remove um, uh and other fillers in one tap. Every change can be undone.",
    },
    {
      title: "11 caption styles",
      body: "Punch, Karaoke, Pill, Reveal, Minimal, Editorial, Bold, Highlight, Block, Shadow and Emoji pop. Change the look with one tap.",
    },
    {
      title: "10 free fonts",
      body: "Anton, Bebas Neue, Poppins, Bangers and more. Pick one for every caption, or keep the style's own.",
    },
    {
      title: "Out of the way",
      body: "Captions stay clear of the buttons TikTok, Reels and Shorts put on top of your video, and away from faces where there's room. If there isn't, Popline tells you and you drag them where you want.",
    },
    {
      title: "English, Chinese, Japanese",
      body: "Chinese and Japanese lines never break in the middle of a word.",
    },
  ],
  screenshots: [],
  trust: {
    title: "No watermark",
    body: "Export at full resolution to Photos, or save an SRT file. No account, no upload.",
  },
  faqs: [
    {
      q: "What do I need to run Popline?",
      a: "iOS 26 or later. Popline works on iPhone and iPad.",
    },
    {
      q: "Which languages does Popline caption?",
      a: "English, Chinese and Japanese. Chinese and Japanese lines never break in the middle of a word.",
    },
    {
      q: "How do I fix a word or a timing?",
      a: "Tap a caption on the video to change it. You can split or merge captions, move one a tenth of a second earlier or later, find and replace across every line, and remove fillers like um and uh in one tap. Every change can be undone.",
    },
    {
      q: "Is there a watermark? Do I need an account?",
      a: "No watermark and no account. Export at full resolution to Photos, or save an SRT file. Nothing is uploaded.",
    },
    {
      q: "Will captions cover the buttons on TikTok, Reels or Shorts?",
      a: "Popline keeps captions clear of the buttons those apps put on top of your video, and away from faces where there's room. If there isn't, Popline tells you and you can drag the captions where you want them.",
    },
  ],
  privacy: {
    updated: "2026-11-01",
    sections: [
      {
        heading: "Overview",
        body: [
          "Popline adds captions to videos you choose. It works on your device.",
        ],
      },
      {
        heading: "What Popline does with your data",
        body: [
          "When you pick a video, Popline reads it from your Photos library, turns the speech in it into text on your device, and draws captions on the video on your device. When you export, Popline saves the new video to your Photos library and can save a caption file (SRT). Your videos, audio and captions are not sent to us or to anyone else.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Nothing. Popline has no account, no analytics, no advertising and no tracking. We do not receive your videos, your speech, your text, your photos, your device identifiers or your location.",
        ],
      },
      {
        heading: "Speech models",
        body: [
          "The first time you caption a language, iOS may download that language's speech model from Apple. That download is handled by iOS under Apple's terms and privacy policy; Popline does not see it.",
        ],
      },
      {
        heading: "Children",
        body: [
          "Popline does not collect personal information from anyone, including children.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If this changes, we will update this page and the date above.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about this policy: lei@appfactory.sg.",
        ],
      },
    ],
  },
};

const zhCn: AppLocalized = {
  name: "Popline",
  storeName: "Popline：自动字幕",
  // Converted to Simplified from the zh-Hant tagline: the zh-Hans promo text
  // leads with speed and privacy wording.
  tagline: "选一段视频，几秒就有字幕。",
  // Simplified form of the zh-Hant subtitle (zh-Hans one reads "本机生成字幕，无水印").
  subtitle: "快速上字幕，无水印",
  oneLiner:
    "Popline 为你的视频加上简短、有样式的字幕。从相册选一段视频，几秒生成字幕。无需账号，不上传，无水印。",
  statusNote: "需要 iOS 26 或更高版本，适用于 iPhone 和 iPad。",
  metaTitle: "Popline：自动字幕｜快速上字幕，无水印",
  metaDescription:
    "选一段视频，几秒生成简短、有样式的字幕。十一种字幕样式，10 种免费字体。无需账号，不上传，无水印，按原分辨率导出。",
  features: [
    {
      title: "几秒就有字幕",
      body: "从相册选一段视频，字幕按停顿和语句切成短句，快速浏览也好读，并自动套用一种样式。",
    },
    {
      title: "改字、调时间",
      body: "需要时可改字，或微调某句字幕的时间。",
    },
    {
      title: "十一种字幕样式",
      body: "Punch、Karaoke、Pill、Reveal、Minimal、Editorial、Bold、Highlight、Block、Shadow 和 Emoji pop。一键即可更换。",
    },
    {
      title: "10 种免费字体",
      body: "可为所有字幕选一种字体，也可保留样式自带的字体。中文和日文字幕使用系统字体。",
    },
    {
      title: "不挡画面的字幕",
      body: "Popline 会避开 TikTok、Reels 和 Shorts 用按钮和文字覆盖的区域；画面有空间时，也会避开人脸。如果无法让每张脸都不被挡住，它会提示你，你可以把字幕拖到想要的位置。",
    },
    {
      title: "中文、英文、日文",
      body: "支持中文、英文和日文语音。中文和日文按词断行，不会把一个词拆成两行。",
    },
  ],
  screenshots: [],
  trust: {
    title: "无水印",
    body: "导出带字幕的视频，按原分辨率存入相册；也可导出 SRT 字幕文件。无需账号，不上传。",
  },
  faqs: [
    {
      q: "运行 Popline 需要什么？",
      a: "需要 iOS 26 或更高版本，适用于 iPhone 和 iPad。",
    },
    {
      q: "Popline 支持哪些语言？",
      a: "支持中文、英文和日文。中文和日文按词断行，不会把一个词拆成两行。",
    },
    {
      q: "怎么改字或调整时间？",
      a: "需要时可改字，或微调某句字幕的时间。",
    },
    {
      q: "有水印吗？需要账号吗？",
      a: "无水印，也无需账号。导出带字幕的视频，按原分辨率存入相册；也可导出 SRT 字幕文件。不上传。",
    },
    {
      q: "字幕会挡住 TikTok、Reels 或 Shorts 的按钮吗？",
      a: "Popline 会避开这些应用用按钮和文字覆盖的区域；画面有空间时，也会避开人脸。如果无法让每张脸都不被挡住，它会提示你，你可以把字幕拖到想要的位置。",
    },
  ],
  // Translation of the English draft policy (no Chinese version exists yet).
  privacy: {
    updated: "2026-11-01",
    sections: [
      {
        heading: "概述",
        body: ["Popline 为你选择的视频添加字幕，在你的设备上运行。"],
      },
      {
        heading: "Popline 如何处理你的数据",
        body: [
          "当你选择一段视频时，Popline 会从你的照片图库读取它，在你的设备上把其中的语音转成文字，并在你的设备上把字幕绘制到视频上。导出时，Popline 会把新视频存入你的照片图库，也可以保存字幕文件（SRT）。你的视频、音频和字幕不会发送给我们或任何其他方。",
        ],
      },
      {
        heading: "我们收集什么",
        body: [
          "什么都不收集。Popline 没有账号，没有分析，没有广告，也没有跟踪。我们不会收到你的视频、语音、文字、照片、设备标识符或位置。",
        ],
      },
      {
        heading: "语音模型",
        body: [
          "首次为某种语言生成字幕时，iOS 可能会从 Apple 下载该语言的语音模型。该下载由 iOS 按照 Apple 的条款和隐私政策处理，Popline 看不到。",
        ],
      },
      {
        heading: "儿童",
        body: ["Popline 不会收集任何人的个人信息，包括儿童。"],
      },
      {
        heading: "变更",
        body: ["如有变化，我们会更新本页面及上方日期。"],
      },
      {
        heading: "联系我们",
        body: ["对本政策有疑问：lei@appfactory.sg。"],
      },
    ],
  },
};

const zhTw: AppLocalized = {
  name: "Popline",
  storeName: "Popline：自動字幕",
  tagline: "選一支影片，幾秒就有字幕。",
  subtitle: "快速上字幕，無浮水印",
  oneLiner:
    "選一支影片，幾秒就有字幕。畫面上的字點一下就能改。11 種字幕樣式、10 款免費字型。不用帳號、不用上傳、沒有浮水印。",
  statusNote: "需要 iOS 26 以上，支援 iPhone 與 iPad。",
  metaTitle: "Popline：自動字幕｜快速上字幕，無浮水印",
  metaDescription:
    "選一支影片，幾秒就有字幕。直接點畫面上的字就能改。11 種字幕樣式、10 款免費字型。不用帳號、不用上傳、沒有浮水印。",
  features: [
    {
      title: "快",
      body: "選好影片，字幕馬上自動生成、對好時間、套好樣式。斷句跟著說話的停頓走，看起來不累。",
    },
    {
      title: "直接在影片上改",
      body: "點字幕就能改字。拆開、合併、提早或延後 0.1 秒。全部字幕一起尋找取代。「嗯」「呃」這類贅字一鍵刪掉。每一步都能復原。",
    },
    {
      title: "11 種字幕樣式",
      body: "Punch、Karaoke、Pill、Reveal、Minimal、Editorial、Bold、Highlight、Block、Shadow、Emoji pop，點一下就換。",
    },
    {
      // The zh-Hant listing has no body for this section; converted from the zh-Hans one.
      title: "10 款免費字型",
      body: "可為所有字幕選一種字型，也可保留樣式自帶的字型。中文和日文字幕使用系統字型。",
    },
    {
      title: "不擋畫面",
      body: "字幕會避開 TikTok、Reels、Shorts 的按鈕，也盡量避開人臉；避不開時會提醒你，自己拖到想要的位置。",
    },
    {
      title: "中文、英文、日文",
      body: "中文和日文不會把一個詞從中間斷開。",
    },
  ],
  screenshots: [],
  trust: {
    title: "沒有浮水印",
    body: "原解析度存回相簿，也能匯出 SRT。不用帳號，不用上傳。",
  },
  faqs: [
    {
      q: "執行 Popline 需要什麼？",
      a: "需要 iOS 26 以上，支援 iPhone 與 iPad。",
    },
    {
      q: "Popline 支援哪些語言？",
      a: "中文、英文、日文。中文和日文不會把一個詞從中間斷開。",
    },
    {
      q: "怎麼改字或調整時間？",
      a: "點字幕就能改字。可以拆開、合併、提早或延後 0.1 秒，全部字幕一起尋找取代，「嗯」「呃」這類贅字一鍵刪掉。每一步都能復原。",
    },
    {
      q: "有浮水印嗎？需要帳號嗎？",
      a: "沒有浮水印，也不用帳號。原解析度存回相簿，也能匯出 SRT。不用上傳。",
    },
    {
      q: "字幕會擋住 TikTok、Reels 或 Shorts 的按鈕嗎？",
      a: "字幕會避開這些 App 的按鈕，也盡量避開人臉；避不開時會提醒你，自己拖到想要的位置。",
    },
  ],
  // Translation of the English draft policy (no Chinese version exists yet).
  privacy: {
    updated: "2026-11-01",
    sections: [
      {
        heading: "概述",
        body: ["Popline 為你選擇的影片加上字幕，在你的裝置上執行。"],
      },
      {
        heading: "Popline 如何處理你的資料",
        body: [
          "當你選擇一支影片時，Popline 會從你的照片圖庫讀取它，在你的裝置上把其中的語音轉成文字，並在你的裝置上把字幕繪製到影片上。匯出時，Popline 會把新影片存入你的照片圖庫，也可以儲存字幕檔（SRT）。你的影片、音訊和字幕不會傳送給我們或任何其他人。",
        ],
      },
      {
        heading: "我們收集什麼",
        body: [
          "什麼都不收集。Popline 沒有帳號、沒有分析、沒有廣告，也沒有追蹤。我們不會收到你的影片、語音、文字、照片、裝置識別碼或位置。",
        ],
      },
      {
        heading: "語音模型",
        body: [
          "第一次為某種語言產生字幕時，iOS 可能會從 Apple 下載該語言的語音模型。該下載由 iOS 依照 Apple 的條款與隱私權政策處理，Popline 看不到。",
        ],
      },
      {
        heading: "兒童",
        body: ["Popline 不會收集任何人的個人資訊，包括兒童。"],
      },
      {
        heading: "變更",
        body: ["如有變動，我們會更新本頁面及上方日期。"],
      },
      {
        heading: "聯絡我們",
        body: ["對本政策有疑問：lei@appfactory.sg。"],
      },
    ],
  },
};

export const popline: AppContent = {
  slug: "popline",
  category: "app",
  icon: `${IMG}/icon.png`,
  buildNumber: 16,
  version: "1.0.0",
  status: "building",
  platforms: ["iOS"],
  schemaCategory: "PhotoAndVideoApplication",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
