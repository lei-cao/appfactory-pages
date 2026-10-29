# /go short links

Every QR code, share image and share text for a factory app points at one URL:

```
https://appfactory.sg/go/<slug>/<source>
```

- `<slug>` is the app's registry slug (`src/content/<file>.ts`, `slug:`), case-insensitive.
  It stays the internal id after a rebrand (LingoWonders is still `tracesheet`).
- `<source>` names the surface the link came from, e.g. `share-hand`, `wrapped`,
  `qr`, `ig-reels`. Use `[a-z0-9-]`, up to 40 characters. Anything else, or
  no source at all, is recorded as `go`.
- The link works on every host (`appfactory.sg`, any `*.appfactory.sg`, own
  domains). Responses are `Cache-Control: no-store`, so a destination can be
  changed later without reprinting anything.

Code: `src/lib/go-link.ts` (pure resolver), `src/middleware.ts` (wiring;
its matcher sends every `/go/*` path through, dots included). Tests:
`scripts/go-link.test.mts` (resolver), `scripts/middleware-matcher.test.mts`
(which paths reach the middleware), both in `npm test`; and
`scripts/go-http.e2e.mts`, real HTTP against `next start`
(`npm run build && npm run test:http`).

## Where a visitor lands

| Visitor | Destination |
|---|---|
| iPhone / iPad (UA has `iPhone`, `iPad` or `iPod`) | App Store: `https://apps.apple.com/app/apple-store/id<appStoreId>?pt=119559267&ct=<source>&mt=8`. No App Store id yet → landing page. |
| Mac or iPadOS Safari in desktop mode (UA has `Macintosh`) | A tiny no-store HTML page that checks `navigator.maxTouchPoints > 1`: touch screen (an iPad) → App Store as above, otherwise → landing page. Without JavaScript the `<noscript>` refresh goes to the landing page. Apps without an App Store id skip this and 302 straight to the landing page. |
| Android (UA has `Android`) | Google Play `playStoreUrl` with `&referrer=utm_source%3D<source>%26utm_medium%3Dgo%26utm_campaign%3D<slug>` when the app has one; otherwise the landing page. |
| Everything else (Windows, Linux, unknown) | Landing page. |
| Link-preview bots and crawlers (iMessage, Slack, WhatsApp, Facebook, …) | Landing page, so the preview shows the app's OG card, never the detect page. |
| Unknown slug | `https://appfactory.sg/` |

The **landing page** is, in order: the app's `externalUrls.en` (TiltFree →
pokertools.ai), its own `domain` (LingoWonders → lingowonders.com), else
`https://<host or slug>.appfactory.sg/`. The resolver sets
`utm_source=<source>&utm_medium=go&utm_campaign=<slug>` on it, replacing any
utm params already in the URL, so GA4 sees the same source the App Store sees
as `ct=`.

Checking with curl: an iPhone, Android or Windows UA gets a `302` with a
`Location`; a Mac UA gets `200` with the detect page (`var I=` is the App Store
URL, `var O=` the landing page).

## Adding an app or a store

Fill in `appStoreId` and `playStoreUrl` in the app's registry file; `/go`
picks them up. Add or update the app's row in `REGISTRY` in
`scripts/go-link.test.mts` (a test fails until you do).
