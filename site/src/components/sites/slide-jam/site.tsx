import { DefaultShell } from "../shared/default-shell";
import { GenericLanding } from "../shared/generic-landing";
import type { SiteModule } from "../types";

const SLUG = "slide-jam";

export const site: SiteModule = {
  Landing: ({ locale }) => <GenericLanding locale={locale} slug={SLUG} />,
  Shell: (props) => <DefaultShell {...props} />,
};
