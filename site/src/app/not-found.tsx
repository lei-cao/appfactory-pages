import Link from "next/link";
import { hubOrigin } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-start justify-center px-6 sm:px-10">
      <span className="spec-label">status 404</span>
      <h1
        className="font-display mt-4 text-4xl font-bold sm:text-5xl"
      >
        Nothing on the line here.
      </h1>
      <p className="text-slate mt-4 max-w-md">
        This page doesn&apos;t exist — the app may not have shipped yet, or the
        address has a typo.
      </p>
      <Link
        href={hubOrigin()}
        className="border-line mt-8 rounded-full border px-5 py-2 text-sm transition-colors hover:border-indigo hover:text-indigo-soft"
      >
        Back to the factory floor
      </Link>
    </main>
  );
}
