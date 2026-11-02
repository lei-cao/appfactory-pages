// Popline (apps/popline in the appfactory repo, bundle id com.appfactory.popline):
// registry content in all three locales. Popline has its own landing
// (components/sites/popline/landing.tsx) inside the shared plain shell; support
// and privacy are the shared pages.
//
// Copy is cut down from App Marketing's ASC-ready listing,
// ~/projects/personal/marketing/popline/store-listing-v1.md (en-US, zh-Hans,
// zh-Hant), the same text Apple review sees. Rules for every string here,
// alt text and meta included (HQ-104; scripts/copy-guard.test.mts checks them):
// 9 caption styles (Karaoke and Pill are not in 1.0), 10 fonts, and never
// free / 免费 / 免費 / 無料.
// Privacy: apps/popline/docs/privacy.md. The zh versions translate the English.
// Screenshots: the HQ-101 store set, 660px webp, one set per locale.

import type { AppContent, AppLocalized } from "./apps";

const IMG = "/apps/popline";

/**
 * App Store record (ASC app id 6829481152). The link 404s until Apple releases
 * the app, so the site shows "Coming soon on the App Store" while this is
 * false. The day Popline is live: set it true (the badge links, the Smart App
 * Banner appears, the status turns live) and add popline to
 * scripts/go-link.test.mts.
 */
export const POPLINE_ON_APP_STORE: boolean = false;
const APP_STORE_ID = "6829481152";
// ct=web-site: the landing page's own campaign token (App Marketing tracking.md).
const APP_STORE_URL = `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt=119559267&ct=web-site&mt=8`;

const en: AppLocalized = {
  name: "Popline",
  storeName: "Popline: Auto Captions",
  tagline: "Pick a video. Get styled captions in seconds.",
  subtitle: "Fast captions, no watermark",
  oneLiner: "Pick a video, get styled captions in seconds, and fix any word by tapping it on the video. 9 caption styles, 10 fonts. No account, no upload, no watermark.",
  statusNote: "Needs iOS 26 or later. iPhone and iPad.",
  metaTitle: "Popline: Auto Captions. Fast captions, no watermark",
  metaDescription: "Pick a video, get styled captions in seconds. Tap any line on the video to fix it. 9 caption styles, 10 fonts. No account, no upload, no watermark.",
  features: [
    {
      title: "Fast",
      body: "Popline writes, times and styles your captions as soon as you pick a clip. Lines break at natural pauses, so they're easy to read at speed.",
    },
    {
      title: "Edit right on the video",
      body: "Tap a caption to change it. Split, merge, or move it a tenth of a second earlier or later. Find and replace across every line. Every change can be undone.",
    },
    {
      title: "Um and uh, gone",
      body: "Remove um and uh from your captions in one tap.",
    },
    {
      title: "9 caption styles",
      body: "Punch, Reveal, Minimal, Editorial, Bold, Highlight, Block, Shadow and Emoji pop. Change the look with one tap.",
    },
    {
      title: "10 fonts",
      body: "Anton, Bebas Neue, Poppins, Bangers and more. Pick one for every caption, or keep the style's own.",
    },
    {
      title: "Out of the way",
      body: "Captions stay clear of the buttons that short-video apps put on top of a vertical video, and away from faces where there's room. If there isn't, Popline tells you and you drag them where you want.",
    },
    {
      title: "English, Chinese, Japanese",
      body: "English, Mandarin Chinese (shown in Simplified) and Japanese speech. Chinese and Japanese lines never break in the middle of a word.",
    },
    {
      title: "Private",
      body: "Speech recognition runs on your device and your video is never uploaded. No account needed.",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/01-captions-en.webp`, alt: "Popline screen with captions written on a video: captions in seconds" },
    { src: `${IMG}/shots/02-auto-en.webp`, alt: "Picking a video in Popline: the captions are made for you" },
    { src: `${IMG}/shots/03-styles-en.webp`, alt: "The caption style picker with 9 styles" },
    { src: `${IMG}/shots/04-tap-to-fix-en.webp`, alt: "Tapping a caption on the video to fix a word" },
    { src: `${IMG}/shots/05-fillers-en.webp`, alt: "Removing um and uh from captions in one tap" },
    { src: `${IMG}/shots/06-fonts-en.webp`, alt: "The font picker with 10 fonts" },
    { src: `${IMG}/shots/07-export-en.webp`, alt: "Export screen: full quality, no watermark, no account, no upload" },
    { src: `${IMG}/shots/08-languages-en.webp`, alt: "Language picker: English, Chinese and Japanese" },
  ],
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
      a: "English, Mandarin Chinese (shown in Simplified) and Japanese. Chinese and Japanese lines never break in the middle of a word.",
    },
    {
      q: "How do I fix a word or a timing?",
      a: "Tap a caption on the video to change it. You can split or merge captions, move one a tenth of a second earlier or later, find and replace across every line, and remove um and uh in one tap. Every change can be undone.",
    },
    {
      q: "Is there a watermark? Do I need an account?",
      a: "No watermark and no account. Export at full resolution to Photos, or save an SRT file. Nothing is uploaded.",
    },
    {
      q: "Will captions cover the buttons on short-video apps?",
      a: "Popline keeps captions clear of the buttons short-video apps put on top of a vertical video, and away from faces where there's room. If there isn't, Popline tells you and you can drag the captions where you want them.",
    },
  ],
  privacy: {
    updated: "2026-11-02",
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
  tagline: "选一段视频，几秒就有字幕。",
  subtitle: "快速上字幕，无水印",
  oneLiner: "选一段视频，几秒就有带样式的短句字幕。画面上的字点一下就能改。9 种字幕样式，10 款字体。无需账号，不上传，无水印。",
  statusNote: "需要 iOS 26 或更高版本，支持 iPhone 和 iPad。",
  metaTitle: "Popline：自动字幕｜快速上字幕，无水印",
  metaDescription: "选一段视频，几秒就有字幕。点画面上的字就能改。9 种字幕样式，10 款字体。无需账号，不上传，无水印。",
  features: [
    {
      title: "快",
      body: "选好视频，字幕马上自动生成、对好时间、套好样式。",
    },
    {
      title: "直接在视频上改",
      body: "点字幕就能改字。拆开、合并、提早或延后 0.1 秒。全部字幕一起查找替换。每一步都能撤销。",
    },
    {
      title: "“嗯”“呃”一键删掉",
      body: "字幕里的“嗯”“呃”一键删掉。",
    },
    {
      title: "9 种字幕样式",
      body: "Punch、Reveal、Minimal、Editorial、Bold、Highlight、Block、Shadow、Emoji pop，点一下就换。",
    },
    {
      title: "10 款字体",
      body: "Anton、Bebas Neue、Poppins、Bangers 等。可为所有字幕选一种字体，也可保留样式自带的字体。",
    },
    {
      title: "不挡画面",
      body: "竖屏视频上，字幕会避开短视频平台的按钮；画面有空间时也会避开人脸。挡不开时会提示你，你可以把字幕拖到想要的位置。",
    },
    {
      title: "中文、英文、日文",
      body: "支持中文普通话（以简体中文显示）、英文和日文语音。中文和日文按词断行，不会把一个词拆成两行。",
    },
    {
      title: "隐私",
      body: "语音识别在本机完成，视频不上传，不用账号；每种语言首次使用时下载一次，之后离线可用。",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/01-captions-zh-cn.webp`, alt: "Popline 在视频上生成的字幕：几秒就有字幕" },
    { src: `${IMG}/shots/02-auto-zh-cn.webp`, alt: "在 Popline 里选一段视频，字幕自动生成" },
    { src: `${IMG}/shots/03-styles-zh-cn.webp`, alt: "字幕样式选择，共 9 种样式" },
    { src: `${IMG}/shots/04-tap-to-fix-zh-cn.webp`, alt: "点一下画面上的字幕就能改字" },
    { src: `${IMG}/shots/05-fillers-zh-cn.webp`, alt: "一键删掉字幕里的“嗯”“呃”" },
    { src: `${IMG}/shots/06-fonts-zh-cn.webp`, alt: "字体选择，共 10 款字体" },
    { src: `${IMG}/shots/07-export-zh-cn.webp`, alt: "导出画面：原画质，无水印，不用账号，不上传" },
    { src: `${IMG}/shots/08-languages-zh-cn.webp`, alt: "语言选择：中文、英文、日文" },
  ],
  trust: {
    title: "原画质，无水印",
    body: "按原分辨率存入相册，也能导出 SRT 字幕文件。无需账号，不上传。",
  },
  faqs: [
    {
      q: "运行 Popline 需要什么？",
      a: "需要 iOS 26 或更高版本，支持 iPhone 和 iPad。",
    },
    {
      q: "Popline 支持哪些语言？",
      a: "支持中文普通话（以简体中文显示）、英文和日文。中文和日文按词断行，不会把一个词拆成两行。",
    },
    {
      q: "怎么改字或调整时间？",
      a: "点画面上的字幕就能改字。可以拆开、合并、提早或延后 0.1 秒，全部字幕一起查找替换，一键删掉“嗯”“呃”。每一步都能撤销。",
    },
    {
      q: "有水印吗？需要账号吗？",
      a: "无水印，也无需账号。按原分辨率存入相册，也能导出 SRT 字幕文件。不上传。",
    },
    {
      q: "字幕会挡住短视频平台的按钮吗？",
      a: "竖屏视频上，字幕会避开短视频平台的按钮；画面有空间时也会避开人脸。挡不开时会提示你，你可以把字幕拖到想要的位置。",
    },
  ],
  // Translation of the English draft policy (no Chinese version exists yet).
  privacy: {
    updated: "2026-11-02",
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
  oneLiner: "選一支影片，幾秒就有字幕。畫面上的字點一下就能改。9 種字幕樣式，10 款字型。不用帳號、不用上傳、沒有浮水印。",
  statusNote: "需要 iOS 26 以上，支援 iPhone 與 iPad。",
  metaTitle: "Popline：自動字幕｜快速上字幕，無浮水印",
  metaDescription: "選一支影片，幾秒就有字幕。點畫面上的字就能改。9 種字幕樣式，10 款字型。不用帳號、不用上傳、沒有浮水印。",
  features: [
    {
      title: "快",
      body: "選好影片，字幕馬上自動生成、對好時間、套好樣式。",
    },
    {
      title: "直接在影片上改",
      body: "點字幕就能改字。拖曳移動、兩指縮放大小。拆開、合併、提早或延後 0.1 秒。全部字幕一起尋找取代。每一步都能復原。",
    },
    {
      title: "「嗯」「呃」一鍵刪掉",
      body: "字幕裡的「嗯」「呃」一鍵刪掉。",
    },
    {
      title: "9 種字幕樣式",
      body: "Punch、Reveal、Minimal、Editorial、Bold、Highlight、Block、Shadow、Emoji pop，點一下就換。",
    },
    {
      title: "10 款字型",
      body: "Anton、Bebas Neue、Archivo Black、Poppins、Bangers、Luckiest Guy、Lilita One、Permanent Marker、Pacifico、DM Serif Display。",
    },
    {
      title: "不擋畫面",
      body: "直式影片上，字幕會避開短影音平台的按鈕，也會避開人臉。",
    },
    {
      title: "中文、英文、日文",
      body: "支援英文、中文普通話（以簡體中文顯示）和日文語音。",
    },
    {
      title: "隱私",
      body: "語音辨識在本機完成，影片不上傳，不用帳號；每種語言下載一次，之後離線也能用。",
    },
  ],
  screenshots: [
    { src: `${IMG}/shots/01-captions-zh-tw.webp`, alt: "Popline 在影片上產生的字幕：幾秒就有字幕" },
    { src: `${IMG}/shots/02-auto-zh-tw.webp`, alt: "選影片，字幕自己出來" },
    { src: `${IMG}/shots/03-styles-zh-tw.webp`, alt: "字幕樣式選擇，共 9 種樣式" },
    { src: `${IMG}/shots/04-tap-to-fix-zh-tw.webp`, alt: "點一下畫面上的字幕就能改" },
    { src: `${IMG}/shots/05-fillers-zh-tw.webp`, alt: "一鍵刪掉字幕裡的「嗯」「呃」" },
    { src: `${IMG}/shots/06-fonts-zh-tw.webp`, alt: "字型選擇，共 10 款字型" },
    { src: `${IMG}/shots/07-export-zh-tw.webp`, alt: "匯出畫面：原畫質，無浮水印，不用帳號，不用上傳" },
    { src: `${IMG}/shots/08-languages-zh-tw.webp`, alt: "語言選擇：英文、中文、日文" },
  ],
  trust: {
    title: "原畫質，沒有浮水印",
    body: "以原解析度和影格率存回相簿，保留 HDR。也能匯出 SRT。不用帳號，不用上傳。",
  },
  faqs: [
    {
      q: "執行 Popline 需要什麼？",
      a: "需要 iOS 26 以上，支援 iPhone 與 iPad。",
    },
    {
      q: "Popline 支援哪些語言？",
      a: "英文、中文普通話（以簡體中文顯示）和日文。",
    },
    {
      q: "怎麼改字或調整時間？",
      a: "點畫面上的字幕就能改字。可以拆開、合併、提早或延後 0.1 秒，全部字幕一起尋找取代，一鍵刪掉「嗯」「呃」。每一步都能復原。",
    },
    {
      q: "有浮水印嗎？需要帳號嗎？",
      a: "沒有浮水印，也不用帳號。原解析度存回相簿，也能匯出 SRT。不用上傳。",
    },
    {
      q: "字幕會擋住短影音平台的按鈕嗎？",
      a: "直式影片上，字幕會避開短影音平台的按鈕，也會避開人臉。",
    },
  ],
  // Translation of the English draft policy (no Chinese version exists yet).
  privacy: {
    updated: "2026-11-02",
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
  ogImage: `${IMG}/og.png`,
  buildNumber: 16,
  version: "1.0.0",
  status: POPLINE_ON_APP_STORE ? "live" : "building",
  platforms: ["iOS"],
  ...(POPLINE_ON_APP_STORE ? { appStoreUrl: APP_STORE_URL, appStoreId: APP_STORE_ID } : {}),
  schemaCategory: "PhotoAndVideoApplication",
  // The App Store seller; the privacy policy names it as the developer.
  developer: "APPFACTORY STUDIO PTE. LTD.",
  i18n: { en, "zh-cn": zhCn, "zh-tw": zhTw },
};
