// Shared helpers for the Vercel + Cloudflare setup scripts.
// Zero dependencies — requires Node 18+ (global fetch).

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const APEX = "appfactory.sg";
export const PROJECT_NAME = "appfactory-site";
export const GITHUB_REPO = "lei-cao/appfactory-pages";
export const SITE_DIR = dirname(dirname(fileURLToPath(import.meta.url)));

// Tokens can live in an env file instead of the shell: site/.env.local
// (gitignored) or ~/.appfactory/secrets/pages.env. First value wins;
// explicit shell env always beats both files.
for (const file of [
  join(SITE_DIR, ".env.local"),
  join(process.env.HOME ?? "", ".appfactory", "secrets", "pages.env"),
]) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !m[1].startsWith("#") && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2];
    }
  }
}

export function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name}. See site/README.md for the required tokens.`);
    process.exit(1);
  }
  return v;
}

export function log(msg) {
  console.log(`  ${msg}`);
}

export function step(msg) {
  console.log(`\n→ ${msg}`);
}

/** Slugs registered in src/content/apps.ts (via each content file's slug field). */
export function registeredSlugs() {
  const dir = join(SITE_DIR, "src", "content");
  const slugs = new Set();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".ts") || f === "apps.ts") continue;
    const m = readFileSync(join(dir, f), "utf8").match(/slug:\s*"([a-z0-9-]+)"/);
    if (m) slugs.add(m[1]);
  }
  return [...slugs];
}

// ---------------------------------------------------------------- Vercel ---

export async function vercel(path, { method = "GET", body, token, teamId } = {}) {
  const url = new URL(`https://api.vercel.com${path}`);
  if (teamId) url.searchParams.set("teamId", teamId);
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, json };
}

/** Add a domain to the project; treats "already exists" as success. */
export async function addProjectDomain(projectId, domain, auth, extra = {}) {
  const { ok, json } = await vercel(`/v10/projects/${projectId}/domains`, {
    ...auth,
    method: "POST",
    body: { name: domain, ...extra },
  });
  if (ok) {
    log(`Vercel domain added: ${domain}`);
    return true;
  }
  if (json?.error?.code === "domain_already_in_use_by_project" || json?.error?.code === "domain_already_in_use") {
    log(`Vercel domain already present: ${domain}`);
    return true;
  }
  console.error(`  ✗ Failed to add ${domain}: ${json?.error?.message ?? "unknown error"}`);
  return false;
}

/**
 * DNS targets Vercel wants for a domain. Uses the recommended values from the
 * domain-config endpoint when available, falling back to Vercel's stable
 * legacy targets (still supported).
 */
export async function vercelDnsTargets(domain, auth) {
  const { json } = await vercel(`/v6/domains/${domain}/config`, auth);
  return {
    ipv4: json?.recommendedIPv4s?.[0]?.value?.[0] ?? "76.76.21.21",
    cname: json?.recommendedCNAME?.[0]?.value ?? "cname.vercel-dns.com",
    misconfigured: json?.misconfigured,
  };
}

// ------------------------------------------------------------ Cloudflare ---

export async function cloudflare(path, { method = "GET", body, token } = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export async function cfZoneId(token) {
  const json = await cloudflare(`/zones?name=${APEX}`, { token });
  const id = json?.result?.[0]?.id;
  if (!id) {
    console.error(`Cloudflare zone for ${APEX} not found. Is the token scoped to the right zone?`);
    process.exit(1);
  }
  return id;
}

/**
 * Ensure a DNS record exists with the given content. Records are DNS-only
 * (not proxied) so Vercel can issue certificates and serve directly.
 */
export async function ensureDnsRecord(zoneId, token, { type, name, content }) {
  const fqdn = name === "@" ? APEX : `${name}.${APEX}`;
  const existing = await cloudflare(
    `/zones/${zoneId}/dns_records?name=${fqdn}`,
    { token },
  );
  const match = (existing?.result ?? []).find((r) => r.type === type);
  if (match) {
    if (match.content === content && match.proxied === false) {
      log(`DNS ok: ${fqdn} ${type} → ${content}`);
      return true;
    }
    const upd = await cloudflare(`/zones/${zoneId}/dns_records/${match.id}`, {
      token,
      method: "PATCH",
      body: { content, proxied: false },
    });
    if (upd.success) {
      log(`DNS updated: ${fqdn} ${type} → ${content} (was ${match.content}${match.proxied ? ", proxied" : ""})`);
      return true;
    }
    console.error(`  ✗ DNS update failed for ${fqdn}: ${JSON.stringify(upd.errors)}`);
    return false;
  }
  const crt = await cloudflare(`/zones/${zoneId}/dns_records`, {
    token,
    method: "POST",
    body: { type, name: fqdn, content, proxied: false, ttl: 1 },
  });
  if (crt.success) {
    log(`DNS created: ${fqdn} ${type} → ${content}`);
    return true;
  }
  console.error(`  ✗ DNS create failed for ${fqdn}: ${JSON.stringify(crt.errors)}`);
  return false;
}
