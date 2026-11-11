import { MacDocPage } from "@/components/sites/popline/mac/doc";
import { macMetadata } from "@/components/sites/popline/mac/meta";
import { PRIVACY } from "@/content/popline-mac";

export const metadata = macMetadata("/privacy", PRIVACY.title, PRIVACY.description);

export default function Page() {
  return <MacDocPage doc={PRIVACY} path="/privacy" crumb="Privacy policy" eyebrow="Legal" />;
}
