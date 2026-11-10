// Popline for Mac (APPFA2-3): the sales page, support, terms, refund policy
// and privacy policy at popline.appfactory.sg/mac/*.
//
// This file is deliberately NOT walked by scripts/copy-guard.test.mts: the
// Mac product has a free tier and says so, while the iOS pages Apple reads
// must never say "free". scripts/popline-mac.test.mts holds the Mac rules
// instead (one price, $39; the legal pages Paddle reviews; no em dashes).
//
// Facts come from lei-cao/appfactory apps/popline/docs/mac-copy.md,
// mac-launch.md and mac-privacy.md (APPFAC-104), checked against the 0.9.9
// candidate's source. English only: mkt-rules forbids shipping unreviewed
// translations as new pages, so zh-cn / zh-tw return 404 under /mac.

export const MAC_PATH = "/mac";
export const MAC_UPDATED = "2026-11-10";
export const SELLER = "APPFACTORY STUDIO PTE. LTD.";
/** The only price on these pages (Lei, 2026-11-07). Change it here and in Paddle together. */
export const PRICE = "$39";
export const PRICE_NUMBER = "39";
export const PRICE_CURRENCY = "USD";
/** Change-of-mind refund window in days. Paddle accepts 14 to 90. */
export const REFUND_DAYS = 14;
export const MAC_VERSION = "1.0";

/**
 * Where the two buttons go. Both stay undefined until Paddle approves the
 * domain and 1.0 is released: the buttons then render as plain "not open yet"
 * tiles, not links. Set `download` to the public DMG and `buy` to the Paddle
 * checkout and nothing else on the page needs to change.
 */
export const MAC_LINKS: { download?: string; buy?: string } = {
  download: undefined,
  buy: undefined,
};

export const MAC_PAGES = [
  { path: "", label: "Popline for Mac" },
  { path: "/support", label: "Support" },
  { path: "/terms", label: "Terms" },
  { path: "/refunds", label: "Refunds" },
  { path: "/privacy", label: "Privacy" },
] as const;

/** A legal or help page: sections of paragraphs, bullet lists and simple tables. */
export type Block = string | string[] | { head: string[]; rows: string[][] };
export interface DocSection {
  id?: string;
  heading: string;
  body: Block[];
}
export interface MacDoc {
  title: string;
  description: string;
  intro: string;
  sections: DocSection[];
}

export const LANDING = {
  title: "Popline for Mac: captions for long videos, made on your Mac",
  description:
    "Drop in a video of any length and get captions made on your Mac. Fix them in an editor built for long videos. Export SRT, VTT or a burned-in MP4 with no watermark. Pro is $39, one time.",
  eyebrow: "Popline for Mac",
  headline: ["Captions for ", "long", " videos, made on your Mac."],
  lede: "Drop in a video of any length and get captions without uploading anything. Fix them in an editor built for an hour of speech, then export SRT, VTT or a burned-in MP4. No account, no watermark.",
  requires: "macOS 26 on an Apple silicon Mac. Speech in English, Chinese and Japanese.",
  notOpen:
    "Popline for Mac 1.0 is not on sale yet. The download and checkout open here at launch.",
  shot: {
    src: "/apps/popline/mac/editor.webp",
    width: 2000,
    height: 1093,
    alt: "Popline for Mac with a 72-minute recording open: 1,044 captions in a list on the left, the video with its caption in the middle, a waveform timeline below and the style controls on the right",
    caption:
      "A real 72-minute recording with 1,044 captions. It transcribed in 77 seconds on a Mac Studio; other Macs will differ.",
  },
  blocks: [
    {
      heading: "One mistake, fixed everywhere.",
      body: [
        "Speech recognition gets a product name wrong the same way a hundred times. Find it once and replace it everywhere, as one undo.",
        "The timeline shows the waveform and every caption. Drag an edge to re-time it. The preview draws each frame exactly as the export will.",
      ],
    },
    {
      heading: "Your script knows what you meant to say.",
      tag: "Pro",
      body: [
        "Load your script and Popline finds each mishear with the fix ready. Apply them all at once.",
        "Or use your script's own wording, timed by your speech.",
      ],
    },
  ],
  agent: {
    heading: "Your agent does the first pass. You do the last look.",
    tag: "Pro",
    body: "Claude Code, Codex or any MCP client runs Popline on your Mac, with a skill that knows the steps. It works on the project the app has open, so you watch its edits appear and fine-tune them. Popline sends nothing to any AI service: the agent is the one you already use.",
    // The tool calls from one recorded agent run in APPFAC-104 (agent-loop/).
    log: [
      ["transcribe", "launch.mp4 --lang zh-CN"],
      ["align", "script coverage 0.69"],
      ["conform", "69 captions, 68 timed from speech"],
      ["frame", "28 s, 150 s, 300 s checked"],
      ["issues", "0 errors, 5 warnings, each with a reason"],
      ["export", "launch.srt"],
      ["open", "in Popline for Mac"],
    ],
  },
  plans: {
    heading: "Free stays free. Pro is one payment.",
    rows: [
      ["Any video length, transcribed on your Mac", true, true],
      ["Caption list, timeline with waveform, find and replace, style controls", true, true],
      ["Reading speed, long line and weak ending checks", true, true],
      ["Export SRT, VTT and burned-in MP4, with no watermark", true, true],
      ["Your agent can read a project, list issues and look at frames", true, true],
      ["Check against your script, fix every mishear, use its wording", false, true],
      ["Your agent can edit, re-time and export", false, true],
      ["The Pro caption looks", false, true],
    ] as [string, boolean, boolean][],
    free: { name: "Free", price: "$0", note: "No time limit, no account." },
    pro: {
      name: "Pro",
      price: PRICE,
      note: "One time, for one person. Includes every 1.x update.",
    },
    fine: "Prices in US dollars. Paddle, our reseller, shows any sales tax or VAT at checkout. Popline for Mac is sold separately from Popline on iPhone and iPad.",
  },
  faqs: [
    {
      q: "Does my video leave my Mac?",
      a: "No. Speech recognition runs on your Mac with Apple's on-device speech models, and Popline has no account and no analytics. The only thing it asks the internet for is whether there is an update, and you can turn that off.",
      link: { href: "/privacy", label: "What the app sends" },
    },
    {
      q: "Is there a limit on length?",
      a: "No, in Free or Pro. The longest real recording we have run is 72 minutes.",
    },
    {
      q: "Where do my captions go?",
      a: "Into one .popline project file next to your video. Move them together and it still opens.",
    },
    {
      q: "How does the licence work?",
      a: "After you buy, you get a licence key to paste into the app. The app checks it on your Mac: no sign-in, and no connection needed.",
    },
    {
      q: "Can I get a refund?",
      a: `Yes. Ask within ${REFUND_DAYS} days of buying, for any reason.`,
      link: { href: "/refunds", label: "Refund policy" },
    },
    {
      q: "I bought Popline on iPhone. Do I get the Mac version?",
      a: "No. They are separate products, bought separately.",
    },
  ],
};

const CONTACT = "lei@appfactory.sg";

export const SUPPORT: MacDoc = {
  title: "Popline for Mac support",
  description:
    "Help with Popline for Mac: installing, first transcription, adding a licence key, connecting an AI agent, refunds and contact.",
  intro: `Write to ${CONTACT} with your question. Include your Popline version (Popline for Mac > About) and, for a licence question, your order number. A person reads every message.`,
  sections: [
    {
      id: "install",
      heading: "Install",
      body: [
        [
          "You need macOS 26 on an Apple silicon Mac. Intel Macs are not supported.",
          "Open the downloaded .dmg and drag Popline for Mac to Applications.",
          "The app is signed with our Developer ID and notarized by Apple, so it opens normally the first time.",
        ],
      ],
    },
    {
      id: "first-video",
      heading: "Your first video",
      body: [
        "Drop a video on the window, pick the spoken language (English, Chinese or Japanese) and choose Transcribe. The captions are saved next to the video as a .popline project.",
        "The first time you use a language, macOS downloads Apple's speech model for it. That needs an internet connection once.",
        "If the video is on an external drive or in Desktop or Documents, macOS may ask whether Popline can open that folder. Allow it, or change it later in System Settings > Privacy & Security > Files and Folders.",
      ],
    },
    {
      id: "licence",
      heading: "Add your Pro licence",
      body: [
        [
          "Copy the licence key from your order page or receipt email. It starts with POPLINE1.",
          "In the app, open Popline for Mac > Settings, then the Licence tab.",
          "Paste the key and choose Add Licence. Pro turns on straight away, with no sign-in.",
        ],
        "The key is stored on your Mac and checked there. You can use it on any Mac you use yourself. Lost it? Write to us with your order number or the email you bought with and we will send it again.",
      ],
    },
    {
      id: "agent",
      heading: "Connect your AI agent",
      body: [
        "Open Settings > AI agent. For Claude Code, add the skill and the MCP server from there. For any other MCP client, copy the MCP config shown and add it to your client. Settings > Command line installs the popline command for scripts.",
        "Reading a project, listing issues and looking at frames work in Free. Editing, re-timing and exporting through the agent need Pro.",
      ],
    },
    {
      id: "updates",
      heading: "Updates",
      body: [
        "Popline checks for updates once a day and asks before installing one. To turn the daily check off, see the privacy policy. Use Popline for Mac > Check for Updates to check now. Every 1.x update is included with Pro.",
      ],
    },
    {
      id: "refunds",
      heading: "Refunds and orders",
      body: [
        `Orders are handled by Paddle, our reseller. You can ask for a refund within ${REFUND_DAYS} days of buying, for any reason. See the refund policy for how.`,
      ],
    },
  ],
};

export const TERMS: MacDoc = {
  title: "Popline for Mac terms",
  description: `The terms for using and buying Popline for Mac, sold by ${SELLER} through Paddle.com.`,
  intro: `These terms are an agreement between you and ${SELLER} ("we", "us"), a company registered in Singapore that makes Popline for Mac under the App Factory name. By downloading, installing or using Popline for Mac, or buying a Pro licence, you agree to them. If you do not agree, do not use the app.`,
  sections: [
    {
      heading: "Ordering and payment",
      body: [
        "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders.",
        `Popline for Mac Pro costs ${PRICE} (US dollars), paid once. It is not a subscription and does not renew. Paddle collects payment and any sales tax or VAT, and its buyer terms also apply to your purchase.`,
      ],
    },
    {
      heading: "What a Pro licence gives you",
      body: [
        [
          "A licence key for one person. You can use it on any Mac you use yourself.",
          "Every Pro feature in Popline for Mac 1.x, and every 1.x update, for as long as we publish them.",
          "A future major version (2.0) may be sold separately. Your 1.x key keeps working with 1.x.",
        ],
        "You may not share, publish, resell or transfer your key, or use one key for several people or for a team.",
      ],
    },
    {
      heading: "Free features",
      body: [
        "The features marked Free on the Popline for Mac page work without a licence and without a time limit. We may change or improve them in updates.",
      ],
    },
    {
      heading: "Your videos and captions",
      body: [
        "Your videos, scripts and captions stay yours. Popline processes them on your Mac and we never receive them.",
        "You are responsible for having the rights to the videos you caption and to what you publish with Popline, including music, footage and other people's words and likeness.",
        "Automatic transcription makes mistakes. Check captions before you publish them, especially names, numbers and anything legal, medical or safety related.",
        "If you connect an AI agent, you choose what it may read and change, and your agent provider's terms cover what it does with that text.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "Do not use Popline for Mac:",
        [
          "for anything unlawful, fraudulent or to send spam;",
          "to infringe anyone's copyright, trademark, privacy or other rights;",
          "to bypass, remove or forge the licence check, or to make keys;",
          "to distribute malware, or to probe, attack or interfere with our update service or website.",
        ],
      ],
    },
    {
      heading: "Ownership",
      body: [
        "We own Popline for Mac, its code, design and name. A licence lets you use the app; it does not sell you the app or its code. Do not copy, modify, reverse engineer or redistribute it, except where the law allows this anyway. The fonts and open-source components inside the app keep their own licences, listed in the app under Help.",
      ],
    },
    {
      heading: "No guarantee",
      body: [
        'We work to make Popline reliable, but we provide it "as is". We do not promise that it will be uninterrupted or error-free, that every caption will be accurate, or that it will keep working on future versions of macOS.',
      ],
    },
    {
      heading: "Liability",
      body: [
        "To the extent the law allows, we are not liable for indirect or consequential loss, lost profits or lost data, and our total liability to you is limited to the amount you paid for your licence. Nothing in these terms limits rights you have as a consumer that the law says cannot be limited.",
      ],
    },
    {
      heading: "Suspension and termination",
      body: [
        "We may refuse updates to, or revoke, a licence that was obtained by fraud, a chargeback or a payment that did not go through, or that is shared or resold against these terms. We may also do so for repeated or serious breaches of these terms. You can stop using Popline at any time by deleting it.",
      ],
    },
    {
      heading: "Refunds",
      body: [
        `You can ask for a refund within ${REFUND_DAYS} days of buying. The refund policy explains how.`,
      ],
    },
    {
      heading: "Changes and law",
      body: [
        "We may update these terms; the date at the top shows the latest version, and continued use after a change means you accept it. Changes do not take away what you already paid for. These terms are governed by the laws of Singapore.",
      ],
    },
    {
      heading: "Contact",
      body: [`${SELLER}, ${CONTACT}`],
    },
  ],
};

export const REFUNDS: MacDoc = {
  title: "Popline for Mac refund policy",
  description: `Refunds for Popline for Mac Pro: ask within ${REFUND_DAYS} days of buying, for any reason.`,
  intro: `If Popline for Mac Pro is not right for you, ask for a refund within ${REFUND_DAYS} days of buying and you get your money back, for any reason. You do not have to explain.`,
  sections: [
    {
      heading: "How to ask",
      body: [
        [
          "Go to paddle.net, find your order with the email you bought with, and request a refund there. Paddle, our reseller and Merchant of Record, processes it.",
          `Or write to ${CONTACT} with your order number and we will arrange it with Paddle.`,
        ],
        "The refund goes back to the card or payment method you used. Your bank decides how long it takes to appear, usually a few working days.",
      ],
    },
    {
      heading: "After a refund",
      body: [
        "Please remove the licence from the app (Settings > Licence > Remove This Licence) and stop using Pro. The free features keep working.",
      ],
    },
    {
      heading: "After the refund window",
      body: [
        `After ${REFUND_DAYS} days we can still help if something is wrong, for example a key that will not add or a feature that does not work on your Mac. Write to us. Any rights you have under the consumer law where you live also still apply.`,
      ],
    },
  ],
};

export const PRIVACY: MacDoc = {
  title: "Popline for Mac privacy policy",
  description:
    "Popline for Mac has no account and no analytics and uploads nothing. This page lists everything the app sends, and what happens when you buy or visit this site.",
  intro: `${SELLER} ("we") makes Popline for Mac and runs this website. We are the controller of the personal data described here. Questions and requests: ${CONTACT}.`,
  sections: [
    {
      id: "app",
      heading: "Your videos and captions stay on your Mac",
      body: [
        "Popline for Mac has no account, no analytics and no advertising, and it uploads nothing. Speech recognition runs on your Mac with Apple's on-device speech models. We never receive your videos, audio, scripts or captions.",
      ],
    },
    {
      id: "connections",
      heading: "Everything the app sends",
      body: [
        {
          head: ["When", "What is sent", "Who receives it"],
          rows: [
            [
              "Checking for updates: once a day, or when you choose Check for Updates. You can turn the daily check off (see below).",
              "A request for the update list at popline.appfactory.sg, and the update itself if you install it. The request carries standard web headers, which include the app's name and version and your IP address. No system profile is sent.",
              "Our website host",
            ],
            [
              "The first time you use a spoken language",
              "macOS downloads Apple's speech model for that language",
              "Apple, under Apple's privacy policy",
            ],
            [
              "Opening Help or support links",
              "Your browser opens a page on this website",
              "Our website host (see below)",
            ],
          ],
        },
        "Nothing else. The licence check happens on your Mac and never contacts a server.",
        "To turn off the daily update check, quit Popline and run this in Terminal: defaults write sg.appfactory.popline.mac SUEnableAutomaticChecks -bool NO. Check for Updates in the menu still works when you choose it.",
      ],
    },
    {
      id: "on-your-mac",
      heading: "What the app stores on your Mac",
      body: [
        [
          "A .popline project next to each video: captions, word timings, your style, and the position and size of faces in the frame, used to keep captions clear of them. No face is identified or stored as an image.",
          "Your licence key, in ~/Library/Application Support/Popline/license.txt. It contains the email and order number it was issued to.",
          "Your settings and a list of recent projects.",
        ],
        "Deleting the app and these files removes everything. We hold no copy.",
      ],
    },
    {
      id: "agent",
      heading: "Your AI agent",
      body: [
        "If you connect an agent such as Claude Code or Codex, it reads what you let it read through the popline tool on your Mac. What it then sends to its provider is between you and that provider. Popline itself sends nothing to any AI service.",
      ],
    },
    {
      id: "purchases",
      heading: "When you buy Pro",
      body: [
        "Checkout runs in your browser on Paddle.com, our reseller and Merchant of Record. Paddle collects your payment details, billing country and email under its own privacy policy, and we never see your card details.",
        "Paddle shares your name, email, country and order details with us. We use them to issue and resend your licence key, answer your questions, handle refunds and keep the records tax law requires. Legal basis: performing our contract with you, and our legal obligations.",
      ],
    },
    {
      id: "website",
      heading: "This website",
      body: [
        "Our host, Vercel, keeps standard server logs (IP address, page requested, browser) to run and protect the site.",
        "The site uses Google Analytics 4 to count visits and see which pages people use. It sets cookies on appfactory.sg, and it does not load at all if your browser sends a Global Privacy Control signal. Legal basis: our legitimate interest in understanding how the site is used, or your consent where the law requires it.",
      ],
    },
    {
      id: "email",
      heading: "When you write to us",
      body: [
        "We keep your email and our reply so we can help you, for as long as it is useful for that support conversation.",
      ],
    },
    {
      id: "sharing",
      heading: "Who else sees your data",
      body: [
        "Paddle (orders and payments), Vercel (website hosting), Google (website analytics) and our email provider. We share data with professional advisers or authorities only where the law requires it. We do not sell personal data. Some of these providers process data outside your country, under their own safeguards such as standard contractual clauses.",
      ],
    },
    {
      id: "retention",
      heading: "How long we keep it",
      body: [
        "Order records: for as long as tax and accounting law requires, and so we can resend your key. Support email: while the conversation is useful. Analytics: under Google Analytics' retention setting.",
      ],
    },
    {
      id: "rights",
      heading: "Your rights",
      body: [
        `You can ask to see, correct or delete the personal data we hold about you, object to its use, or ask for a copy. Write to ${CONTACT} and we will answer within one month. If you are in the EU or UK you can also complain to your data protection authority; in Singapore, to the Personal Data Protection Commission.`,
        "We protect the data we hold with access controls and the security of our providers.",
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      body: [
        "If the app ever starts sending anything new, we will update this page before that version ships, and the date at the top will change.",
      ],
    },
  ],
};
