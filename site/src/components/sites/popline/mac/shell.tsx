import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { StudioLink } from "@/components/sites/shared/studio-link";
import { MAC_PAGES, SELLER } from "@/content/popline-mac";
import { CONTACT_EMAIL } from "@/lib/site";
import { macHref } from "./meta";
import "../site.css";
import "./mac.css";

/**
 * The shell for popline.appfactory.sg/mac/*. Not the iOS DefaultShell: its
 * Support and Privacy links go to the iPhone pages, and Paddle's review needs
 * the Mac terms, refund policy and privacy policy in this site's navigation.
 * Same tokens and type as the rest of the Popline site (data-app="popline").
 */
export function MacShell({ children }: { children: ReactNode }) {
  const nav = MAC_PAGES.filter((p) => p.path !== "");
  return (
    <div data-app="popline" className="mac-site">
      <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 sm:px-10">
        <header className="relative z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8">
          <div className="flex items-center gap-5">
            <Link
              href={macHref()}
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
            >
              <Image src="/apps/popline/mac/icon.png" alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-lg font-semibold">Popline for Mac</span>
            </Link>
            <StudioLink locale="en" className="text-slate hidden text-sm transition-colors hover:text-paper md:inline" />
          </div>
          <nav aria-label="Popline for Mac" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href={`${macHref()}#pricing`} className="text-slate text-sm transition-colors hover:text-paper">
              Pricing
            </Link>
            {nav.map((p) => (
              <Link key={p.path} href={macHref(p.path)} className="text-slate text-sm transition-colors hover:text-paper">
                {p.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer className="border-line mt-auto border-t py-10">
          <div className="text-slate flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="flex flex-col gap-2">
              <StudioLink
                locale="en"
                variant="long"
                className="text-sm underline decoration-line underline-offset-4 transition-colors hover:text-indigo-soft"
              />
              <span className="text-xs">
                Popline for Mac is made and sold by {SELLER}, Singapore. Orders are processed by Paddle.com, our
                Merchant of Record.
              </span>
            </div>
            <span className="flex flex-wrap gap-x-5 gap-y-2">
              {nav.map((p) => (
                <Link key={p.path} href={macHref(p.path)} className="spec-label transition-colors hover:text-indigo-soft">
                  {p.label}
                </Link>
              ))}
              <a href={`mailto:${CONTACT_EMAIL}`} className="spec-label transition-colors hover:text-indigo-soft">
                Contact
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
