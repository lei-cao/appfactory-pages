export const APEX_DOMAIN = "appfactory.sg";
export const SITE_NAME = "appfactory";
export const CONTACT_EMAIL = "lei.cao.life@gmail.com";

/** Canonical origin for an app's subdomain site. */
export function appOrigin(slug: string): string {
  return `https://${slug}.${APEX_DOMAIN}`;
}

export function hubOrigin(): string {
  return `https://${APEX_DOMAIN}`;
}
