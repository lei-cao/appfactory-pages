# appfactory.sg

The hub site for the app factory, plus one marketing/support/privacy site per
app on its own subdomain — all a single Next.js app deployed to Vercel, with
DNS on Cloudflare.

| URL | Serves |
|---|---|
| `appfactory.sg` | Hub — the build ledger of all apps |
| `www.appfactory.sg` | 308 → apex |
| `poker-night.appfactory.sg` | Poker Night landing page |
| `poker-night.appfactory.sg/support` | Support + FAQs (App Store support URL) |
| `poker-night.appfactory.sg/privacy` | Privacy policy |

## How subdomain routing works

`src/middleware.ts` reads the `Host` header: `<slug>.appfactory.sg/<path>` is
rewritten to `/apps/<slug>/<path>`, which is a statically generated route fed
by the app registry in `src/content/apps.ts`. Unknown slugs 404. No wildcard
DNS is involved (Vercel wildcards would require moving nameservers off
Cloudflare) — each app subdomain is added explicitly by `npm run add-app`.

The same pages are reachable path-style (`/apps/poker-night`) on the apex and
on `*.vercel.app` preview deployments; canonical URLs point at the subdomains.

## Languages

Every page ships in English (unprefixed, canonical), 简体中文 (`/zh-cn`), and
繁體中文 (`/zh-tw`) — e.g. `poker-night.appfactory.sg/zh-cn/support`. The
middleware adds the internal `/en` prefix so all routes render under
`src/app/[locale]/`; an explicit `/en` in a URL 308s to the unprefixed form.
Site chrome strings live in `src/lib/dictionaries.ts`; each app provides its
own copy per locale in its content file (`i18n: { en, "zh-cn", "zh-tw" }`),
including per-locale screenshots. `hreflang` alternates are emitted on every
page; a client-side switcher (EN / 简体 / 繁體) sits in each header.

## Local dev

```sh
npm install
npm run dev
# hub:  http://localhost:3000
# app:  http://poker-night.localhost:3000   (subdomains work on localhost)
```

## One-time setup (already automated)

Requires two tokens in the environment:

- `VERCEL_TOKEN` — vercel.com → Account Settings → Tokens
- `CLOUDFLARE_API_TOKEN` — dash.cloudflare.com → API Tokens →
  custom token with **Zone:Read + DNS:Edit** on the `appfactory.sg` zone
- `VERCEL_TEAM_ID` — only if the project should live in a team scope

```sh
npm run setup-infra
```

Creates the Vercel project (root directory `site/`, linked to this GitHub repo
when the Vercel GitHub App is installed), adds apex + www + per-app domains,
creates the matching DNS-only records in Cloudflare, and writes
`.vercel/project.json` for CLI deploys. Idempotent — re-run any time.

## Deploys

- **Pipeline**: with the GitHub link in place, every push to `main` deploys
  production automatically (previews for branches). If the project was created
  unlinked, connect it once: Vercel dashboard → project → Settings → Git.
- **Manual**: `VERCEL_TOKEN=… npm run deploy` from `site/`.

## Adding app N+1

1. `cp src/content/poker-night.ts src/content/<slug>.ts` and fill in real
   content (registry types are in `src/content/apps.ts`) — all three locales
   are required by the types; reuse the store listing copy where it exists.
2. Register it in `src/content/apps.ts` (`import` + add to the `apps` array).
3. Drop the icon + screenshots in `public/apps/<slug>/` (640px-wide PNGs).
4. `VERCEL_TOKEN=… CLOUDFLARE_API_TOKEN=… npm run add-app -- <slug>`
5. Commit and push — the deploy makes `<slug>.appfactory.sg` live.

## Don't break

The repo root is still served by GitHub Pages at
`lei-cao.github.io/appfactory-pages/…` — those privacy URLs are referenced by
live App Store / Play submissions. Leave `poker-night/privacy.html`,
`orbit-dash/privacy.html`, and `.nojekyll` in place until all store listings
point at the new `*.appfactory.sg` URLs.
