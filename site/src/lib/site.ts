export const APEX_DOMAIN = "appfactory.sg";
export const SITE_NAME = "App Factory";
export const CONTACT_EMAIL = "lei@appfactory.sg";

/** The part of an app that decides its public host (type-only: no import cycle). */
export interface AppHostRef {
  slug: string;
  host?: string;
  domain?: string;
}

/** Public subdomain label: `host` when the app was rebranded, else its slug. */
export function appHost(app: AppHostRef): string {
  return app.host ?? app.slug;
}

/**
 * Canonical origin of an app's site: its own `domain` when it has one, else
 * `<host ?? slug>.appfactory.sg`. Pass the app (or any `{slug, host, domain}`),
 * or a bare host label string. A slug string is only right for apps without a
 * `host` or `domain`; prefer the app object.
 */
export function appOrigin(app: AppHostRef | string): string {
  if (typeof app !== "string" && app.domain) return `https://${app.domain}`;
  const label = typeof app === "string" ? app : appHost(app);
  return `https://${label}.${APEX_DOMAIN}`;
}

export function hubOrigin(): string {
  return `https://${APEX_DOMAIN}`;
}
