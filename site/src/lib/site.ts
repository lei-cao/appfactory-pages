export const APEX_DOMAIN = "appfactory.sg";
export const SITE_NAME = "App Factory";
export const CONTACT_EMAIL = "lei@appfactory.sg";

/** The part of an app that decides its public host (type-only: no import cycle). */
export interface AppHostRef {
  slug: string;
  host?: string;
}

/** Public subdomain label: `host` when the app was rebranded, else its slug. */
export function appHost(app: AppHostRef): string {
  return app.host ?? app.slug;
}

/**
 * Canonical origin of an app's site. Pass the app (or any `{slug, host}`), or
 * a bare host label string. A slug string is only right for apps without a
 * `host`; prefer the app object.
 */
export function appOrigin(app: AppHostRef | string): string {
  const label = typeof app === "string" ? app : appHost(app);
  return `https://${label}.${APEX_DOMAIN}`;
}

export function hubOrigin(): string {
  return `https://${APEX_DOMAIN}`;
}
