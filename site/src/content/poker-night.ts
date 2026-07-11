import type { AppContent } from "./apps";

export const pokerNight: AppContent = {
  slug: "poker-night",
  name: "Poker Night",
  storeName: "Poker Night: Home Game Ledger",
  tagline: "Poker night, handled.",
  subtitle: "Chip ledger & equity odds",
  oneLiner:
    "The scorekeeper for your home cash game: track every buy-in live, settle the night in one tap, and check hand equity between hands.",
  buildNumber: 1,
  version: "1.4.0",
  status: "in-review",
  statusNote: "iOS build in App Store review. Android release in progress.",
  platforms: ["iOS", "Android"],
  icon: "/apps/poker-night/icon.png",
  features: [
    {
      title: "Live ledger",
      body: "Seat your regulars from a saved roster and track names, buy-ins, end chips, and profit/loss per player — always in sync. Each rebuy is one tap.",
    },
    {
      title: "The table balances itself",
      body: "Total up, total down, and the exact discrepancy if the counts are off — spotted before anyone goes home.",
    },
    {
      title: "One-tap settlement",
      body: "End the game and get who-pays-whom instantly: minimal direct transfers between players, or banker mode where everyone settles with one person.",
    },
    {
      title: "Equity calculator",
      body: "Hold'em and PLO win/tie odds for up to 6 hands, exact or Monte Carlo — checked between hands, not mid-hand.",
    },
    {
      title: "History & roster stats",
      body: "Every settled night saved with a shareable summary image for the group chat, plus lifetime nights played and net result per player.",
    },
    {
      title: "Offline-first, bilingual",
      body: "No account, no sign-up — everything stays on your device. English and 简体中文, with locale-aware profit/loss colors.",
    },
  ],
  screenshots: [
    {
      src: "/apps/poker-night/shot-live.png",
      alt: "Live session screen: five players with buy-ins, chip counts, and profit/loss, plus table balance totals",
    },
    {
      src: "/apps/poker-night/shot-home.png",
      alt: "Home screen: resume a live game night, with equity and history shortcuts",
    },
    {
      src: "/apps/poker-night/shot-settle.png",
      alt: "Settlement screen: who pays whom, in banker mode",
    },
    {
      src: "/apps/poker-night/shot-equity.png",
      alt: "Equity calculator: aces versus kings win odds at 82.8% to 17.2%",
    },
  ],
  trust: {
    title: "No real money, ever",
    body: "Poker Night never moves money and offers no gambling. It is a calculator and scorekeeper: it does the arithmetic and shows who owes whom; settling up happens entirely outside the app, between you and your friends.",
  },
  faqs: [
    {
      q: "Where is my data stored?",
      a: "On your device, and nowhere else. Player names, buy-ins, chip counts, and session history never leave your phone — the app has no backend and no account system.",
    },
    {
      q: "Does the app handle payments between players?",
      a: "No. Poker Night only does the arithmetic and shows who owes whom. Any settling-up happens outside the app, between you and your friends.",
    },
    {
      q: "How do I remove ads?",
      a: "Settings → Remove ads. It's a one-time purchase processed by the App Store or Google Play, and it's permanent.",
    },
    {
      q: "The chip counts don't balance — what now?",
      a: "The live session footer shows total up, total down, and the exact difference, so you can spot the missing chips before ending the game. You can still settle with an off-balance table; the discrepancy is shown on the summary.",
    },
    {
      q: "How do I delete a player or a past session?",
      a: "Swipe or long-press the entry in Roster or History. Deleting removes it from your device immediately — there is no server copy.",
    },
  ],
  privacy: {
    updated: "2026-07-09",
    sections: [
      {
        heading: "What we collect",
        body: [
          [
            "Usage analytics (Google Firebase Analytics): anonymous usage events such as session created/settled, players added, equity calculations run, and screen views, plus device identifiers used by Firebase. We use this to understand how the app is used and improve it.",
            "Crash reports (Firebase Crashlytics): technical crash data (stack traces, device model, OS version) to fix bugs. Not linked to your identity.",
            "Advertising data (Google AdMob): when ads are shown, Google's SDK may use your device's advertising identifier to serve and measure ads. On iOS we ask permission via App Tracking Transparency first; in regions covered by GDPR we show Google's consent form (UMP) before any ads load.",
          ],
        ],
      },
      {
        heading: "What we don't collect",
        body: [
          "No accounts, no emails, no contacts, no location, no photos, no messages. Your game ledger — player names, buy-ins, chip counts, session history — is stored only on your device and never uploaded anywhere. The app has no backend.",
        ],
      },
      {
        heading: "No real money",
        body: [
          "Poker Night never moves money. It is a scorekeeping calculator: it does the arithmetic and shows who owes whom; any settling-up happens entirely outside the app between you and your friends.",
        ],
      },
      {
        heading: "Purchases",
        body: [
          "The one-time \"Remove ads\" purchase is processed entirely by Apple App Store / Google Play. We never see your payment details.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          [
            "Decline tracking in the iOS permission prompt — the app works identically.",
            "Change ad-consent choices anytime in Settings → \"Manage privacy consent\".",
            "Remove ads permanently via the in-app purchase.",
            "Delete any player or session in the app to remove it from your device.",
          ],
        ],
      },
      {
        heading: "Children",
        body: [
          "Poker Night is not directed at children under 13 and does not knowingly collect personal information from them.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions: open an issue at github.com/lei-cao/appfactory or email lei.cao.life@gmail.com.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We'll update this page when the policy changes; material changes will be noted in app release notes.",
        ],
      },
    ],
  },
};
