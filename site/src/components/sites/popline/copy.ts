// Landing-page chrome for Popline, per locale. The product copy itself lives
// in src/content/popline.ts. Same rules: 9 styles, 10 fonts, and never
// free / 免费 / 免費 / 無料 (scripts/copy-guard.test.mts).

import type { Locale } from "@/lib/i18n";

export interface PoplineCopy {
  eyebrow: string;
  storeComing: { eyebrow: string; label: string };
  storeLive: { eyebrow: string; label: string };
  /** Label on the hero video: the presenter in the App Store preview is AI-generated. */
  aiPresenter: string;
  previewCaption: string;
  previewAlt: string;
  screensTitle: string;
  featuresTitle: string;
  faqTitle: string;
  closing: string;
  supportLine: string;
}

export const COPY: Record<Locale, PoplineCopy> = {
  en: {
    eyebrow: "Auto captions for iPhone and iPad",
    storeComing: { eyebrow: "Coming soon on the", label: "App Store" },
    storeLive: { eyebrow: "Download on the", label: "App Store" },
    aiPresenter: "AI presenter",
    previewCaption:
      "The App Store preview: a real screen recording on iPhone 16 Pro. The presenter in it is AI-generated.",
    previewAlt: "Popline App Store preview video",
    screensTitle: "From the App Store listing",
    featuresTitle: "What it does",
    faqTitle: "Questions",
    closing: "Pick a video. Get styled captions in seconds.",
    supportLine: "Something not working? Write to us from the support page; a real person reads every message.",
  },
  "zh-cn": {
    eyebrow: "iPhone 和 iPad 上的自动字幕",
    storeComing: { eyebrow: "即将登陆", label: "App Store" },
    storeLive: { eyebrow: "前往下载", label: "App Store" },
    aiPresenter: "AI 主持人",
    previewCaption: "App Store 预览视频：在 iPhone 16 Pro 上实录的屏幕画面。片中主持人由 AI 生成。",
    previewAlt: "Popline App Store 预览视频",
    screensTitle: "App Store 截图",
    featuresTitle: "功能",
    faqTitle: "常见问题",
    closing: "选一段视频，几秒就有字幕。",
    supportLine: "遇到问题？到支持页面写信给我们，每封信都有真人阅读。",
  },
  "zh-tw": {
    eyebrow: "iPhone 與 iPad 上的自動字幕",
    storeComing: { eyebrow: "即將登上", label: "App Store" },
    storeLive: { eyebrow: "前往下載", label: "App Store" },
    aiPresenter: "AI 主持人",
    previewCaption: "App Store 預覽影片：在 iPhone 16 Pro 上實錄的螢幕畫面。片中主持人由 AI 生成。",
    previewAlt: "Popline App Store 預覽影片",
    screensTitle: "App Store 截圖",
    featuresTitle: "功能",
    faqTitle: "常見問題",
    closing: "選一支影片，幾秒就有字幕。",
    supportLine: "遇到問題？到支援頁面寫信給我們，每封信都有真人閱讀。",
  },
};
