// Bespoke landing page for poker-night.appfactory.sg (v2.0). Rendered by
// app/[locale]/apps/[slug]/page.tsx in place of the generic template; the
// "Midnight Chip" theme (navy, gold, cream, Fraunces) comes from
// [data-app="poker-night"] in globals.css.
//
// Story order: the lead story video ("Settle a home game in seconds") in the
// hero, then the three jobs (host, settle, study), the Study section, every
// approved promo video, the screens, price, trust and FAQ. Each video appears
// once. Copy: content/poker-night-landing.ts (+ FAQ/trust in poker-night.ts).

import Image from "next/image";
import Link from "next/link";
import { getApp, localized } from "@/content/apps";
import { pokerNightLanding, pnVideoFiles, type PnVideoCopy } from "@/content/poker-night-landing";
import { PnVideo } from "@/components/poker-night/video";
import { StoreBadges } from "@/components/store-badges";
import { StatusBadge } from "@/components/status";
import { getDict } from "@/lib/dictionaries";
import { isGuideLocale } from "@/lib/guide";
import type { Locale } from "@/lib/i18n";
import { localePrefix } from "@/lib/i18n";
import { faqPageLd, JsonLd, organizationLd, softwareApplicationLd, videoObjectLd } from "@/lib/seo";

const UPLOAD_DATE = "2026-10-11";
const SLUG = "poker-night";

function clock(s: number) {
  const t = Math.round(s);
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="spec-label">{children}</p>;
}

function VideoCard({
  item,
  locale,
  playLabel,
  layout = "auto",
}: {
  item: PnVideoCopy;
  locale: Locale;
  playLabel: string;
  layout?: "auto" | "tall";
}) {
  const f = pnVideoFiles(item.id, locale);
  const dur = (f.h ?? f.v)!.duration;
  return (
    <figure className="flex flex-col">
      <PnVideo
        v={f.v}
        h={layout === "tall" ? undefined : f.h}
        label={item.title}
        playLabel={playLabel}
        className={layout === "tall" ? "mx-auto max-w-[19rem]" : ""}
      />
      <figcaption className="mt-4">
        <span className="font-display text-lg font-semibold">{item.title}</span>
        <span className="text-slate ml-2 font-mono text-xs">{clock(dur)}</span>
        <p className="text-slate mt-1 leading-relaxed">{item.body}</p>
      </figcaption>
    </figure>
  );
}

export function PokerNightLandingPage({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const c = pokerNightLanding[locale];
  const hero = pnVideoFiles("pn1-settle", locale).v!;
  const guideHref = `${localePrefix(locale)}/apps/${SLUG}/guide`;

  // Every video on the page, once, for VideoObject JSON-LD.
  const heroItem: PnVideoCopy = { id: "pn1-settle", title: c.hero.title, body: c.hero.body };
  const allVideos: PnVideoCopy[] = [heroItem, c.study.video, ...c.watch.cuts, ...c.stories.items, ...c.previews.items];
  const videoLd = allVideos.map((it) => {
    const f = pnVideoFiles(it.id, locale);
    const main = (f.h ?? f.v)!;
    return videoObjectLd(SLUG, locale, {
      name: it.title,
      description: it.body,
      src: main.src,
      poster: main.poster,
      duration: main.duration,
      uploadDate: UPLOAD_DATE,
    });
  });

  return (
    <main>
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd(), faqPageLd(loc, locale), ...videoLd]} />

      {/* Hero: the lead story */}
      <section className="grid items-center gap-12 pt-16 pb-14 sm:grid-cols-[3fr_2fr] sm:pt-24 sm:pb-20">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <StatusBadge status={app.status} label={dict.status[app.status]} />
            <span className="spec-label">v{app.version}</span>
          </div>
          <p className="spec-label mb-4 !normal-case !tracking-normal">{c.hero.kicker}</p>
          <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">{c.hero.title}</h1>
          <p className="text-slate mt-6 max-w-xl text-lg leading-relaxed">{c.hero.body}</p>
          <div className="mt-9">
            <StoreBadges app={app} dict={dict} />
          </div>
          <p className="spec-label mt-4">{loc.statusNote}</p>
        </div>
        <div className="relative mx-auto w-full max-w-[18.5rem]">
          <PnVideo
            v={hero}
            mode="hero"
            label={c.hero.videoLabel}
            soundOn={c.hero.soundOn}
            soundOff={c.hero.soundOff}
            className="pn-glow"
          />
        </div>
      </section>

      {/* Three jobs */}
      <nav aria-label={c.host.kicker} className="border-line grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3">
        {c.jobs.map((j) => (
          <a key={j.title} href={j.href} className="bg-panel hover:bg-panel-2 p-6 transition-colors">
            <span className="font-display text-xl font-semibold">{j.title}</span>
            <span className="text-slate mt-1 block">{j.body}</span>
          </a>
        ))}
      </nav>

      {/* Host the night */}
      <section id="host" aria-labelledby="pn-host" className="scroll-mt-8 pt-24 pb-6">
        <Kicker>{c.host.kicker}</Kicker>
        <h2 id="pn-host" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.host.title}</h2>
        <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">{c.host.intro}</p>
        <div className="grid gap-x-10 gap-y-10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {c.host.items.map((f) => (
            <div key={f.title} className="border-line border-t pt-5">
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Watch: the feature cuts */}
      <section aria-labelledby="pn-watch" className="pt-24">
        <Kicker>{c.watch.kicker}</Kicker>
        <h2 id="pn-watch" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.watch.title}</h2>
        <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">{c.watch.intro}</p>
        <div className="grid gap-x-8 gap-y-14 pt-12 sm:grid-cols-2">
          {c.watch.cuts.map((it, i) => (
            <div key={it.id} className={i === 0 ? "sm:col-span-2" : ""}>
              <VideoCard item={it} locale={locale} playLabel={c.play} />
            </div>
          ))}
        </div>
      </section>

      {/* Study */}
      <section id="study" aria-labelledby="pn-study" className="scroll-mt-8 pt-28">
        <div className="pn-study rounded-3xl p-7 sm:p-12">
          <Kicker>{c.study.kicker}</Kicker>
          <h2 id="pn-study" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.study.title}</h2>
          <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">{c.study.intro}</p>
          <div className="grid gap-12 pt-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid content-start gap-8">
              {c.study.items.map((f) => (
                <div key={f.title}>
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
                </div>
              ))}
              {isGuideLocale(locale) && (
                <Link href={guideHref} className="text-indigo-soft underline underline-offset-4 hover:text-indigo">
                  {c.study.guideLink} →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 gap-5 self-start">
              {c.study.shots.map((s) => (
                <Image key={s.src} src={s.src} alt={s.alt} width={720} height={1564} className="border-line rounded-2xl border" />
              ))}
            </div>
          </div>
          <div className="pt-14">
            <VideoCard item={c.study.video} locale={locale} playLabel={c.play} />
          </div>
        </div>
      </section>

      {/* Narrated stories */}
      <section aria-labelledby="pn-stories" className="pt-28">
        <Kicker>{c.stories.kicker}</Kicker>
        <h2 id="pn-stories" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.stories.title}</h2>
        <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">{c.stories.intro}</p>
        <div className="grid gap-x-8 gap-y-14 pt-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
          {c.stories.items.map((it) => (
            <VideoCard key={it.id} item={it} locale={locale} playLabel={c.play} />
          ))}
        </div>
      </section>

      {/* App Store previews */}
      <section aria-labelledby="pn-previews" className="pt-28">
        <Kicker>{c.previews.kicker}</Kicker>
        <h2 id="pn-previews" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.previews.title}</h2>
        <p className="text-slate mt-4 max-w-2xl text-lg leading-relaxed">{c.previews.intro}</p>
        <div className="grid gap-x-8 gap-y-14 pt-12 sm:grid-cols-3">
          {c.previews.items.map((it) => (
            <VideoCard key={it.id} item={it} locale={locale} playLabel={c.play} layout="tall" />
          ))}
        </div>
      </section>

      {/* Screens */}
      <section aria-labelledby="pn-screens" className="pt-28">
        <Kicker>{c.screens.kicker}</Kicker>
        <h2 id="pn-screens" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.screens.title}</h2>
        <div className="flex gap-5 overflow-x-auto pt-10 pb-3">
          {c.screens.shots.map((s) => (
            <Image key={s.src} src={s.src} alt={s.alt} width={720} height={1564} className="border-line w-52 shrink-0 rounded-2xl border sm:w-60" />
          ))}
        </div>
      </section>

      {/* Price */}
      <section aria-labelledby="pn-plans" className="pt-28">
        <Kicker>{c.plans.kicker}</Kicker>
        <h2 id="pn-plans" className="font-display mt-3 text-4xl font-semibold tracking-tight">{c.plans.title}</h2>
        <div className="grid gap-6 pt-10 sm:grid-cols-2">
          <div className="border-line bg-panel rounded-2xl border p-7">
            <h3 className="font-display text-2xl font-semibold">{c.plans.free.title}</h3>
            <ul className="text-slate mt-5 grid gap-2.5 leading-relaxed">
              {c.plans.free.items.map((x) => <li key={x} className="pn-tick">{x}</li>)}
            </ul>
          </div>
          <div className="pn-pro rounded-2xl p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold">{c.plans.pro.title}</h3>
              <span className="text-indigo-soft font-mono text-sm">{c.plans.pro.price}</span>
            </div>
            <ul className="text-slate mt-5 grid gap-2.5 leading-relaxed">
              {c.plans.pro.items.map((x) => <li key={x} className="pn-tick">{x}</li>)}
            </ul>
          </div>
        </div>
        <p className="text-slate mt-6">{c.plans.note}</p>
      </section>

      {/* Trust */}
      {loc.trust && (
        <section className="pt-24">
          <div className="border-line bg-panel rounded-2xl border p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold">{loc.trust.title}</h2>
            <p className="text-slate mt-3 max-w-2xl leading-relaxed">{loc.trust.body}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="pn-faq" className="pt-24 pb-16">
        <h2 id="pn-faq" className="font-display text-4xl font-semibold tracking-tight">{c.faqTitle}</h2>
        <div className="border-line mt-8 border-t">
          {loc.faqs.map((f) => (
            <details key={f.q} className="border-line group border-b py-5">
              <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                {f.q}
                <span aria-hidden className="text-indigo transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-slate mt-3 max-w-3xl leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Studio cross-promo (Poker Night → TiltFree) */}
      {app.studioLink && (
        <section className="pb-24">
          <p className="spec-label border-line border-t pt-6">
            <a
              href={app.studioLink.urls[locale] ?? app.studioLink.urls.en}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-soft transition-colors"
            >
              {app.studioLink.text[locale]} <span aria-hidden>→</span>
            </a>
          </p>
        </section>
      )}
    </main>
  );
}
