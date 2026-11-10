import { MacDocPage } from "@/components/sites/popline/mac/doc";
import { macMetadata } from "@/components/sites/popline/mac/meta";
import { REFUNDS } from "@/content/popline-mac";

export const metadata = macMetadata("/refunds", REFUNDS.title, REFUNDS.description);

export default function Page() {
  return <MacDocPage doc={REFUNDS} path="/refunds" crumb="Refund policy" eyebrow="Legal" />;
}
