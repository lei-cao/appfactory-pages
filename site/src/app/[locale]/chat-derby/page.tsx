import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import {
  canonicalUrl,
  isLocale,
  LANG_TAG,
  languageAlternates,
  localePrefix,
  type Locale,
} from "@/lib/i18n";
import { JsonLd, OG_LOCALE } from "@/lib/seo";
import { hubOrigin, SITE_NAME } from "@/lib/site";
import "../hub.css";
import "./chat-derby.css";

/** Chat Arcade on YouTube. The channel id link works before the @ChatArcadeTV handle is claimed. */
const CHANNEL_URL = "https://www.youtube.com/channel/UCzexc-BBYdlxibsic_7naLA";
const PAGE = "/chat-derby";

interface Copy {
  title: string;
  description: string;
  kicker: string;
  headline: string;
  lead: string;
  watch: string;
  heroAlt: string;
  howTitle: string;
  howIntro: string;
  commands: { say: string; does: string }[];
  rulesTitle: string;
  rules: string[];
  weeklyTitle: string;
  weekly: string;
  liveTitle: string;
  live: string;
  more: string;
  home: string;
}

const COPY: Record<Locale, Copy> = {
  en: {
    title: "Chat Derby: type in chat, become a marble",
    description:
      "Chat Derby is a live game you play from YouTube chat. Your name becomes a marble racing a course built new every race. Cheer to heal, back a winner, climb the weekly board. Points only.",
    kicker: "Chat Arcade · live on YouTube",
    headline: "Type in chat. Become a marble.",
    lead: "Every name in the live chat drops in as a marble and races down a course built new every race. Hidden hazards take health away, and the crowd can give it back.",
    watch: "Watch on YouTube",
    heroAlt: "Chat Derby: a viewer's name wins a race, marbles on a candy course",
    howTitle: "How to play",
    howIntro: "No app, no sign-up. Type in the live chat:",
    commands: [
      { say: "anything", does: "join the next race, or drop in mid-race" },
      { say: "heavy · bouncy · tiny", does: "pick your marble type for the next race" },
      { say: "1 or 2", does: "vote for the track" },
      { say: "cheer NAME", does: "heal that marble +12 HP. “cheer me” heals yours" },
      { say: "back NAME", does: "back a marble: points if it wins or lands on the podium" },
      { say: "chaos", does: "spend a chaos coin (earned by finishing a race) on an earthquake, gravity flip or portal" },
      { say: "me", does: "a picture-in-picture view follows your marble" },
    ],
    rulesTitle: "Fair play",
    rules: [
      "Points only. No money, no purchases, and Super Chats change nothing in the race.",
      "Your name comes from your YouTube display name. Names that are blocked are replaced.",
      "CPU marbles fill small races and are clearly labelled. They never score.",
    ],
    weeklyTitle: "Weekly board",
    weekly:
      "Your weekly score is the average of your best 10 races, and you need 5 races to qualify. It resets every Monday.",
    liveTitle: "Upcoming live",
    live: "Streams are scheduled on the channel. Open its Live tab to see the next one and set a reminder.",
    more: "More games from the studio",
    home: "All games",
  },
  "zh-cn": {
    title: "Chat Derby：在聊天里打字，变成一颗弹珠",
    description:
      "Chat Derby 是在 YouTube 直播聊天里玩的游戏。你的名字会变成一颗弹珠，在每局都重新生成的赛道上竞速。助威回血、押注冠军、冲击每周榜。只有积分。",
    kicker: "Chat Arcade · YouTube 直播",
    headline: "在聊天里打字，变成一颗弹珠。",
    lead: "直播聊天里的每个名字都会变成一颗弹珠，冲下每局重新生成的赛道。隐藏的陷阱会扣血，观众可以助威把血补回来。",
    watch: "在 YouTube 观看",
    heroAlt: "Chat Derby：观众的名字赢下一局，糖果赛道上的弹珠",
    howTitle: "怎么玩",
    howIntro: "不用装 App，不用注册。在直播聊天里发：",
    commands: [
      { say: "任意文字", does: "加入下一局，比赛中途也能加入" },
      { say: "heavy · bouncy · tiny", does: "为下一局选弹珠类型" },
      { say: "1 或 2", does: "为赛道投票" },
      { say: "cheer 名字", does: "给那颗弹珠回 12 点血。“cheer me”给自己回血" },
      { say: "back 名字", does: "押注一颗弹珠：它夺冠或进前三就得分" },
      { say: "chaos", does: "用一枚混乱币（跑完一局获得）触发地震、重力反转或传送门" },
      { say: "me", does: "画中画镜头跟随你的弹珠" },
    ],
    rulesTitle: "公平规则",
    rules: [
      "只有积分，没有金钱和购买。Super Chat 不会影响比赛。",
      "名字来自你的 YouTube 显示名，被屏蔽的名字会被替换。",
      "人数少时由电脑弹珠补位，会清楚标注，并且不计分。",
    ],
    weeklyTitle: "每周榜",
    weekly: "每周成绩是你最好 10 局的平均分，至少跑 5 局才有资格上榜。每周一重置。",
    liveTitle: "直播预告",
    live: "直播会在频道里提前预约。打开频道的“直播”标签页查看下一场并设置提醒。",
    more: "工作室的更多游戏",
    home: "全部游戏",
  },
  "zh-tw": {
    title: "Chat Derby：在聊天室打字，變成一顆彈珠",
    description:
      "Chat Derby 是在 YouTube 直播聊天室玩的遊戲。你的名字會變成一顆彈珠，在每局都重新生成的賽道上競速。助威回血、押注冠軍、挑戰每週榜。只有積分。",
    kicker: "Chat Arcade · YouTube 直播",
    headline: "在聊天室打字，變成一顆彈珠。",
    lead: "直播聊天室裡的每個名字都會變成一顆彈珠，衝下每局重新生成的賽道。隱藏的陷阱會扣血，觀眾可以助威把血補回來。",
    watch: "在 YouTube 觀看",
    heroAlt: "Chat Derby：觀眾的名字贏下一局，糖果賽道上的彈珠",
    howTitle: "怎麼玩",
    howIntro: "不用裝 App，不用註冊。在直播聊天室輸入：",
    commands: [
      { say: "任意文字", does: "加入下一局，比賽中途也能加入" },
      { say: "heavy · bouncy · tiny", does: "為下一局選彈珠類型" },
      { say: "1 或 2", does: "為賽道投票" },
      { say: "cheer 名字", does: "替那顆彈珠回 12 點血。「cheer me」替自己回血" },
      { say: "back 名字", does: "押注一顆彈珠：它奪冠或進前三就得分" },
      { say: "chaos", does: "用一枚混亂幣（跑完一局獲得）觸發地震、重力反轉或傳送門" },
      { say: "me", does: "子母畫面鏡頭跟隨你的彈珠" },
    ],
    rulesTitle: "公平規則",
    rules: [
      "只有積分，沒有金錢與購買。Super Chat 不會影響比賽。",
      "名字來自你的 YouTube 顯示名稱，被封鎖的名字會被替換。",
      "人數少時由電腦彈珠補位，會清楚標示，而且不計分。",
    ],
    weeklyTitle: "每週榜",
    weekly: "每週成績是你最好 10 局的平均分，至少跑 5 局才有資格上榜。每週一重置。",
    liveTitle: "直播預告",
    live: "直播會在頻道裡事先預約。打開頻道的「直播」分頁查看下一場並設定提醒。",
    more: "工作室的更多遊戲",
    home: "全部遊戲",
  },
};

export function generateStaticParams() {
  return (["en", "zh-cn", "zh-tw"] as const).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = COPY[locale];
  const url = canonicalUrl(hubOrigin(), locale, PAGE);
  return {
    title: { absolute: `${c.title} | ${SITE_NAME}` },
    description: c.description,
    alternates: { canonical: url, languages: languageAlternates(hubOrigin(), PAGE) },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      images: [{ url: "/chat-derby/hero.jpg", width: 1280, height: 720, alt: c.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: ["/chat-derby/hero.jpg"],
    },
  };
}

export default async function ChatDerby({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = COPY[locale];
  const home = localePrefix(locale) || "/";
  const url = canonicalUrl(hubOrigin(), locale, PAGE);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: c.title,
      description: c.description,
      url,
      inLanguage: LANG_TAG[locale],
      isPartOf: { "@id": `${hubOrigin()}/#website` },
      primaryImageOfPage: `${hubOrigin()}/chat-derby/hero.jpg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: SITE_NAME, item: canonicalUrl(hubOrigin(), locale) },
        { name: "Chat Derby", item: url },
      ].map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
    },
  ];

  return (
    <main className="hub derby" id="top">
      <JsonLd data={jsonLd} />
      <header className="bar">
        <div className="bar__left">
          <a href={home} className="mark">
            {SITE_NAME}
          </a>
        </div>
        <div className="bar__right">
          <LocaleSwitcher current={locale} separator={false} className="langs" linkClassName="" currentClassName="" />
        </div>
      </header>

      <section className="derby__hero" aria-labelledby="derby-h1">
        <div className="derby__copy">
          <p className="muted t-small">{c.kicker}</p>
          <h1 id="derby-h1">{c.headline}</h1>
          <p className="t-lead">{c.lead}</p>
          <a href={CHANNEL_URL} className="btn" target="_blank" rel="noopener noreferrer">
            {c.watch}
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </a>
        </div>
        <Image
          src="/chat-derby/hero.jpg"
          alt={c.heroAlt}
          width={1280}
          height={720}
          priority
          sizes="(min-width: 900px) 50vw, 100vw"
          className="derby__shot"
        />
      </section>

      <section className="derby__sect" aria-labelledby="derby-how">
        <h2 id="derby-how">{c.howTitle}</h2>
        <p className="muted">{c.howIntro}</p>
        <dl className="derby__cmds">
          {c.commands.map((cmd) => (
            <div key={cmd.say}>
              <dt>
                <code>{cmd.say}</code>
              </dt>
              <dd>{cmd.does}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="derby__cols">
        <div aria-labelledby="derby-rules">
          <h2 id="derby-rules">{c.rulesTitle}</h2>
          <ul>
            {c.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div aria-labelledby="derby-week">
          <h2 id="derby-week">{c.weeklyTitle}</h2>
          <p>{c.weekly}</p>
          <h2 id="derby-live" className="derby__live">
            {c.liveTitle}
          </h2>
          <p>{c.live}</p>
        </div>
      </section>

      <footer className="derby__foot">
        <a href={home} className="link">
          {c.more} →
        </a>
      </footer>
    </main>
  );
}
