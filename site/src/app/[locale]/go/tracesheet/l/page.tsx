import type { Metadata } from "next";
import { getApp } from "@/content/apps";
import { APPLE_PROVIDER_TOKEN, appleIdOf } from "@/lib/go-link";
import { ShareListView } from "@/components/share-list-view";

// A shared TraceSheet list (https://appfactory.sg/go/tracesheet/l#<data>).
// The middleware serves this page for that path on every host. The list is in
// the URL fragment, which the browser never sends, so this page is static and
// the words are decoded client-side; there is no server state.
export const metadata: Metadata = {
  title: "A TraceSheet list",
  description: "Open this word list in TraceSheet.",
  robots: { index: false, follow: false },
};

export default function SharedListPage() {
  const app = getApp("tracesheet");
  const id = app ? appleIdOf(app) : null;
  const appStoreUrl = id
    ? `https://apps.apple.com/app/apple-store/id${id}?pt=${APPLE_PROVIDER_TOKEN}&ct=list&mt=8`
    : null;
  return <ShareListView appStoreUrl={appStoreUrl} playStoreUrl={app?.playStoreUrl ?? null} />;
}
