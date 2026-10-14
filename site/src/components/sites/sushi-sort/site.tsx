import { SushiSortLandingPage } from "@/components/sushi-sort/landing";
import { sushiSortFontClass } from "@/components/sushi-sort/fonts";
import { JsonLd, organizationLd } from "@/lib/seo";
import { DefaultShell } from "../shared/default-shell";
import type { SiteModule } from "../types";
import "./site.css";

export const site: SiteModule = {
  // The landing emits its own app JSON-LD, which references the studio by
  // @id, so the Organization node is added here.
  Landing: ({ locale }) => (
    <>
      <JsonLd data={[organizationLd()]} />
      <SushiSortLandingPage locale={locale} />
    </>
  ),
  Shell: (props) => <DefaultShell {...props} className={sushiSortFontClass} />,
};
