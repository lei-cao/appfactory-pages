import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import { hubOrigin, SITE_NAME } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(hubOrigin()),
  title: {
    default: `${SITE_NAME} — small apps, off the line`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "appfactory is a one-person studio in Singapore where AI agents build, test, and ship small, focused mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Font variables live on <html>: Tailwind's @theme tokens are defined on
    // :root and reference them, so they must be set at :root scope too.
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body className="bg-ink text-paper min-h-dvh antialiased">
        {children}
      </body>
    </html>
  );
}
