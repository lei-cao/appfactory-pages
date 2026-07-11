"use client";

// not-found files don't receive route params, so this is a client component
// that reads the locale segment via useParams to localize the 404.

import Link from "next/link";
import { useParams } from "next/navigation";
import { getDict } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, isLocale, localePrefix } from "@/lib/i18n";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = isLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  const dict = getDict(locale);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-start justify-center px-6 sm:px-10">
      <span className="spec-label">{dict.notFound.eyebrow}</span>
      <h1 className="font-display mt-4 text-4xl font-bold sm:text-5xl">
        {dict.notFound.title}
      </h1>
      <p className="text-slate mt-4 max-w-md">{dict.notFound.body}</p>
      <Link
        href={localePrefix(locale) || "/"}
        className="border-line mt-8 rounded-full border px-5 py-2 text-sm transition-colors hover:border-indigo hover:text-indigo-soft"
      >
        {dict.notFound.back}
      </Link>
    </main>
  );
}
