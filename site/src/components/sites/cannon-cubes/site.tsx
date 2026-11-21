import { DefaultShell } from "../shared/default-shell";
import { GenericLanding } from "../shared/generic-landing";
import type { SiteModule } from "../types";

// Otter Harbor (slug cannon-cubes until the new domain): the plain shell and landing every app site starts from, until
// the game has its own art and store screenshots.
export const site: SiteModule = {
  Landing: ({ locale }) => <GenericLanding locale={locale} slug="cannon-cubes" />,
  Shell: (props) => <DefaultShell {...props} />,
};
