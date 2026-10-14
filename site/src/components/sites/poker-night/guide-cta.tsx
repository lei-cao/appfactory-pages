// The close of every home-game guide page: back to the Poker Night landing
// (internal link for readers who arrive from search) and the App Store.

import Link from "next/link";
import { localePrefix, type Locale } from "@/lib/i18n";

const COPY: Record<Locale, { title: string; body: string; home: string; store: string }> = {
  en: {
    title: "Hosting tonight?",
    body: "Poker Night keeps the ledger, runs the blinds clock and settles the night in the fewest transfers. Free on iPhone and iPad, no ads.",
    home: "See how Poker Night works",
    store: "Get it on the App Store",
  },
  "zh-cn": {
    title: "今晚要组局？",
    body: "扑克之夜帮你记账、跑盲注计时，散场用最少笔数算清谁付谁。iPhone 与 iPad 免费下载，无广告。",
    home: "看看扑克之夜怎么用",
    store: "在 App Store 下载",
  },
  "zh-tw": {
    title: "今晚要組局？",
    body: "撲克之夜幫你記帳、跑盲注計時，散場用最少筆數算清誰付誰。iPhone 與 iPad 免費下載，無廣告。",
    home: "看看撲克之夜怎麼用",
    store: "在 App Store 下載",
  },
};

export function GuideCta({
  locale,
  slug,
  name,
  storeUrl,
}: {
  locale: Locale;
  slug: string;
  name: string;
  storeUrl?: string;
}) {
  const c = COPY[locale];
  return (
    <aside className="pn-guide__cta" aria-label={name}>
      <h2 className="pn-title">{c.title}</h2>
      <p>{c.body}</p>
      <Link href={`${localePrefix(locale)}/apps/${slug}`} className="pn-textlink">
        {c.home}
      </Link>
      {storeUrl && (
        <a href={storeUrl} data-app={slug} className="pn-button">
          {c.store}
        </a>
      )}
    </aside>
  );
}
