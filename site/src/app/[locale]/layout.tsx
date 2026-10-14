import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { getDict } from "@/lib/dictionaries";
import {
  LANG_TAG,
  LOCALES,
  isLocale,
  languageAlternates,
} from "@/lib/i18n";
import { hubOrigin, SITE_NAME } from "@/lib/site";
import { Analytics } from "@/components/analytics";
import "../globals.css";

// Self-hosted (Latin subsets in src/app/fonts, fetched with
// scripts/self-host-font.mjs): builds never download fonts from Google.
const bricolage = localFont({
  src: [{ path: "../fonts/bricolage-grotesque-var-latin.woff2", weight: "400 800" }],
  variable: "--font-bricolage",
});

const instrument = localFont({
  src: [{ path: "../fonts/instrument-sans-var-latin.woff2", weight: "400 700" }],
  variable: "--font-instrument",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400-latin.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-mono-500-latin.woff2", weight: "500" },
  ],
  variable: "--font-plex-mono",
});

// The hub's one face.
const archivo = localFont({
  src: [
    { path: "../fonts/archivo-400-latin.woff2", weight: "400" },
    { path: "../fonts/archivo-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-archivo",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return {
    metadataBase: new URL(hubOrigin()),
    title: {
      default: dict.meta.title,
      template: `%s · ${SITE_NAME}`,
    },
    description: dict.meta.description,
    alternates: { languages: languageAlternates(hubOrigin(), "/") },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    // Font variables live on <html>: Tailwind's @theme tokens are defined on
    // :root and reference them, so they must be set at :root scope too.
    // suppressHydrationWarning: the hub adds a `js` class to <html> before
    // hydration so its entrance states only apply when script runs.
    <html
      suppressHydrationWarning
      lang={LANG_TAG[locale]}
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} ${archivo.variable}`}
    >
      <body className="bg-ink text-paper min-h-dvh antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
