import type { SiteModule } from "../types";
import { emberDeckFontClass } from "./fonts";
import { EmberDeckPage } from "./landing";
import { EmberDeckShell } from "./shell";
import "./site.css";

// ember-deck.appfactory.sg: its own Shell (ash bar, Hollow King footer) and
// landing. The landing emits one SoftwareApplication and one Organization
// JSON-LD node.
export const site: SiteModule = {
  Landing: ({ locale }) => <EmberDeckPage locale={locale} />,
  Shell: (props) => <EmberDeckShell {...props} className={emberDeckFontClass} />,
};
