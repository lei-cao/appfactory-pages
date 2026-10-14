import Image from "next/image";
import type { CSSProperties } from "react";
import { getApp, localized } from "@/content/apps";
import type { Locale } from "@/lib/i18n";
import { JsonLd, organizationLd, softwareApplicationLd } from "@/lib/seo";
import { AGES } from "./codex";
import { CodexDial } from "./codex-dial";
import { copyFor, HEROES, type Run } from "./copy";

const SLUG = "crowd-siege";
const IMG = "/apps/crowd-siege";

const rise = (i: number) => ({ "data-rise": "", style: { "--i": i } as CSSProperties });

const HERO_ALT: Record<Locale, (name: string, title: string) => string> = {
  en: (n, t) => `Portrait of ${n}, ${t}, one of the six Crowd Siege heroes`,
  "zh-cn": (n, t) => `Crowd Siege 英雄 ${n}（${t}）的肖像`,
  "zh-tw": (n, t) => `Crowd Siege 英雄 ${n}（${t}）的肖像`,
};

export function CrowdSiegeLanding({ locale }: { locale: Locale }) {
  const app = getApp(SLUG)!;
  const loc = localized(app, locale);
  const t = copyFor(locale);
  const pic = (name: string) => loc.screenshots.find((x) => x.src === `${IMG}/${name}.webp`)!;
  const hilde = HEROES[0];

  const slot = (name: "battle" | "hilde" | "shop" | "icon") => {
    const src =
      name === "hilde" ? `${IMG}/hero-hilde.webp` : pic(name).src;
    const alt =
      name === "hilde" ? HERO_ALT[locale](hilde.name, hilde.title[locale]) : pic(name).alt;
    const pos = { battle: "50% 55%", hilde: "50% 25%", shop: "50% 8%", icon: "50% 45%" }[name];
    return (
      <span className="sg-slot" key={name}>
        <Image
          src={src}
          alt={alt}
          width={name === "battle" ? 430 : name === "shop" ? 900 : name === "icon" ? 1024 : 512}
          height={name === "battle" ? 690 : name === "shop" ? 1207 : name === "icon" ? 1024 : 512}
          loading="lazy"
          sizes="160px"
          style={{ objectPosition: pos }}
        />
      </span>
    );
  };

  return (
    <main className="sg-main">
      <JsonLd data={[softwareApplicationLd(app, loc, locale), organizationLd()]} />

      {/* Hero: the name is the sentence; the six heroes stand in its gap. */}
      <section className="sg-hero">
        <h1 className="sg-hero__line">
          <span className="sg-hero__word">Crowd</span>
          <span className="sg-hero__strip" aria-hidden>
            {HEROES.map((h, i) => (
              <Image
                key={h.id}
                src={`${IMG}/hero-${h.id}.webp`}
                alt=""
                width={512}
                height={512}
                priority={i < 3}
                sizes="(min-width: 768px) 9vw, 30vw"
              />
            ))}
          </span>
          <span className="sg-hero__word">Siege</span>
        </h1>
        <div className="sg-hero__foot">
          <a href="#codex" className="sg-button">
            {t.act}
          </a>
          <p className="sg-hero__sentence">{loc.tagline}</p>
          <p className="sg-hero__status">{t.status}</p>
        </div>
      </section>

      {/* The Codex: a battle number you can type, its age and its card. */}
      <section id="codex" className="sg-codex" aria-labelledby="sg-codex-title">
        <h2 id="sg-codex-title" className="sg-visually-hidden">
          {t.codexTitle}
        </h2>
        <CodexDial locale={locale} start={23} />
      </section>

      {/* The campaign: a statement, the table of ages pushed right. */}
      <section className="sg-ages" aria-labelledby="sg-ages-title">
        <h2 id="sg-ages-title" className="sg-ages__title" {...rise(0)}>
          <span>{t.agesTitle[0]}</span> <span>{t.agesTitle[1]}</span>
        </h2>
        <div className="sg-ages__body">
          <figure className="sg-ages__pic" {...rise(2)}>
            <Image
              src={pic("battle").src}
              alt={pic("battle").alt}
              width={430}
              height={690}
              loading="lazy"
              sizes="(min-width: 768px) 24vw, 60vw"
            />
          </figure>
          <p className="sg-ages__word" {...rise(1)}>
            {t.agesWord}
          </p>
          <table className="sg-table" {...rise(1)}>
            <thead>
              <tr>
                {t.agesCols.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AGES.map((a) => (
                <tr key={a.first}>
                  <th scope="row">{a.name[locale]}</th>
                  <td>
                    {a.first}–{a.last}
                  </td>
                  <td>{a.boss[locale]}</td>
                </tr>
              ))}
              <tr className="sg-table__gap">
                <th scope="row">{t.frontier[1]}</th>
                <td>{t.frontier[0]}</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What you do: one paragraph with picture words. */}
      <section className="sg-features" aria-labelledby="sg-features-title">
        <h2 id="sg-features-title" className="sg-visually-hidden">
          {t.featuresTitle}
        </h2>
        <p className="sg-features__para" {...rise(0)}>
          {t.paragraph.map((run: Run, i) => {
            if (typeof run !== "string") return null;
            // A slot travels with the punctuation after it, so a comma
            // never starts a line.
            const prev = t.paragraph[i - 1];
            const punct = /^[，。、,.]/.test(run) ? run[0] : "";
            return (
              <span key={i}>
                {prev && typeof prev !== "string" && (
                  <span className="sg-nowrap">
                    {slot(prev.slot)}
                    {punct}
                  </span>
                )}
                {punct ? run.slice(1) : run}
              </span>
            );
          })}
        </p>
        <div className="sg-features__more">
          <p className="sg-features__lede" {...rise(1)}>
            {loc.oneLiner}
          </p>
          <dl className="sg-features__list">
            {loc.features.map((f, i) => (
              <div key={f.title} {...rise(i + 2)}>
                <dt>{f.title}</dt>
                <dd>{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The heroes, edge to edge. */}
      <section className="sg-heroes" aria-labelledby="sg-heroes-title">
        <h2 id="sg-heroes-title" className="sg-heroes__title" {...rise(0)}>
          {t.heroesTitle}
        </h2>
        <ul className="sg-heroes__row">
          {HEROES.map((h, i) => (
            <li key={h.id} className="sg-hero-card" {...rise(i + 1)}>
              <div className="sg-hero-card__pic">
                <Image
                  src={`${IMG}/hero-${h.id}.webp`}
                  alt={HERO_ALT[locale](h.name, h.title[locale])}
                  width={512}
                  height={512}
                  loading="lazy"
                  sizes="(min-width: 768px) 16vw, 50vw"
                />
              </div>
              <h3>{h.name}</h3>
              <p className="sg-hero-card__title">{h.title[locale]}</p>
              <p className="sg-hero-card__blurb">{h.blurb[locale]}</p>
              <p className="sg-hero-card__skill">
                {h.passive ? t.passive : t.skill} · {h.skill[locale]}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Questions, large; answers beside, all open. */}
      <section className="sg-faq" aria-labelledby="sg-faq-title">
        <div className="sg-faq__row">
          <h2 id="sg-faq-title" className="sg-faq__q sg-faq__head" {...rise(0)}>
            {t.faqTitle}
          </h2>
        </div>
        {loc.trust && (
          <div className="sg-faq__row">
            <h3 className="sg-faq__q" {...rise(0)}>
              {loc.trust.title}
            </h3>
            <p className="sg-faq__a" {...rise(1)}>
              {loc.trust.body}
            </p>
          </div>
        )}
        {loc.faqs.map((f) => (
          <div key={f.q} className="sg-faq__row">
            <h3 className="sg-faq__q" {...rise(0)}>
              {f.q}
            </h3>
            <p className="sg-faq__a" {...rise(1)}>
              {f.a}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
