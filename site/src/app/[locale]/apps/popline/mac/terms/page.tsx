import { MacDocPage } from "@/components/sites/popline/mac/doc";
import { macMetadata } from "@/components/sites/popline/mac/meta";
import { TERMS } from "@/content/popline-mac";

export const metadata = macMetadata("/terms", TERMS.title, TERMS.description);

export default function Page() {
  return <MacDocPage doc={TERMS} path="/terms" crumb="Terms" eyebrow="Legal" />;
}
