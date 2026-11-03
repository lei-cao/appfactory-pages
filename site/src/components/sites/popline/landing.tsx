import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { getApp, localized } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";
import { localePrefix, type Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { appStoreAt } from "@/lib/store-links";
import { COPY } from "./copy";

const SLUG = "popline";
const VIDEO = "/apps/popline/video";

/** App Store button: a link once Popline is on the store, a dashed "coming soon" tile until then. */
function StoreButton({ href, eyebrow, label }: { href?: string; eyebrow: string; label: string }) {
  const inner = (
    <>
      <svg aria-hidden viewBox="0 0 384 512" className="h-6 w-6 shrink-0 fill-current">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.7rem] tracking-wide">{eyebrow}</span>
        <span className="font-display text-lg font-semibold">{label}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        className="pop-store inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
      >
        {inner}
      </a>
    );
  }
  return (
    <span className="border-line text-paper inline-flex items-center gap-3 rounded-2xl border border-dashed px-5 py-3">
      {inner}
    </span>
  );
}

const store_ = (url: string | undefined, ct: string) => (url ? appStoreAt(url, ct) : undefined);

export function PoplineLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const dict = getDict(locale);
  const t = COPY[locale];
  const store = app.appStoreUrl ? t.storeLive : t.storeComing;
  const lang = locale === "en" ? "en" : "zh";
  const base = `${localePrefix(locale)}/apps/${SLUG}`;

  return (
    <main className="pop-landing">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the pitch on the left, the App Store preview playing on the right. */}
      <section className="grid items-center gap-14 pt-16 pb-20 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="spec-label">{t.eyebrow}</p>
          <h1 className="font-display mt-5 text-[2.6rem] leading-[1.06] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {loc.tagline}
          </h1>
          <p className="text-slate mt-7 max-w-xl text-lg leading-relaxed">{loc.oneLiner}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <StoreButton href={store_(app.appStoreUrl, "site-hero")} eyebrow={store.eyebrow} label={store.label} />
            <p className="spec-label max-w-52">{loc.statusNote}</p>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[19rem]">
          <div className="pop-phone relative">
            <video
              className="block aspect-[592/1284] w-full rounded-[2rem] bg-black object-cover"
              src={`${VIDEO}/preview-${lang}.mp4`}
              poster={`${VIDEO}/preview-${lang}.webp`}
              aria-label={t.previewAlt}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption className="text-slate mt-4 text-sm leading-relaxed">
            <span className="pop-ai-chip mr-2 align-[1px]">{t.aiPresenter}</span>
            {t.previewCaption}
          </figcaption>
        </figure>
      </section>

      {/* The eight store screenshots, as they appear on the listing. */}
      <section aria-labelledby="pop-screens" className="pb-24">
        <h2 id="pop-screens" className="spec-label border-line border-b pb-3">
          {t.screensTitle}
        </h2>
        <div className="pop-rail -mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
          {loc.screenshots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={660}
              height={1434}
              priority={i < 2}
              className="border-line w-52 shrink-0 snap-start rounded-2xl border sm:w-60"
            />
          ))}
        </div>
      </section>

      {/* Features: a numbered spec list, not cards. */}
      <section aria-labelledby="pop-features" className="pb-24">
        <h2 id="pop-features" className="spec-label border-line border-b pb-3">
          {t.featuresTitle}
        </h2>
        <ol className="grid gap-x-14 sm:grid-cols-2">
          {loc.features.map((f, i) => (
            <li key={f.title} className="border-line grid grid-cols-[3rem_1fr] border-b py-7">
              <span className="pop-index font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="text-slate mt-2 leading-relaxed">{f.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {loc.trust && (
        <section className="pb-24">
          <p className="font-display max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
            <span className="pop-mark">{loc.trust.title}</span>
          </p>
          <p className="text-slate mt-5 max-w-xl text-lg leading-relaxed">{loc.trust.body}</p>
        </section>
      )}

      <section aria-labelledby="pop-faq" className="pb-24">
        <h2 id="pop-faq" className="spec-label border-line border-b pb-3">
          {t.faqTitle}
        </h2>
        <div>
          {loc.faqs.map((f) => (
            <details key={f.q} className="pop-faq border-line group border-b py-5">
              <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                {f.q}
                <span aria-hidden className="pop-index text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-slate mt-3 max-w-2xl leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-slate mt-8 text-sm">
          <Link href={`${base}/support`} className="underline decoration-line underline-offset-4 hover:text-paper">
            {dict.app.navSupport}
          </Link>
          {" · "}
          {t.supportLine}
        </p>
      </section>

      <section className="border-line flex flex-col items-start gap-8 border-t py-20 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <AppIcon icon={app.icon} name={loc.name} size={64} className="rounded-2xl" />
          <p className="font-display max-w-md text-2xl leading-snug font-semibold">{t.closing}</p>
        </div>
        <StoreButton href={store_(app.appStoreUrl, "site-closing")} eyebrow={store.eyebrow} label={store.label} />
      </section>
    </main>
  );
}
