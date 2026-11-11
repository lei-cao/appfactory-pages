import { MacDocPage } from "@/components/sites/popline/mac/doc";
import { macMetadata } from "@/components/sites/popline/mac/meta";
import { SUPPORT } from "@/content/popline-mac";

export const metadata = macMetadata("/support", SUPPORT.title, SUPPORT.description);

export default function Page() {
  return <MacDocPage doc={SUPPORT} path="/support" crumb="Support" eyebrow="Popline for Mac" />;
}
