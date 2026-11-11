import { MacLanding } from "@/components/sites/popline/mac/landing";
import { macMetadata } from "@/components/sites/popline/mac/meta";
import { LANDING } from "@/content/popline-mac";

export const metadata = macMetadata("", LANDING.title, LANDING.description);

export default function Page() {
  return <MacLanding />;
}
