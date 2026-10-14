import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Archivo,
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

// The hub's one face.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600"],
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
