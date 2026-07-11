#!/usr/bin/env node
// Wire up <slug>.appfactory.sg for a new app (Vercel domain + Cloudflare DNS).
//
//   VERCEL_TOKEN=… CLOUDFLARE_API_TOKEN=… npm run add-app -- <slug>
//
// Idempotent. Content still ships via git: add src/content/<slug>.ts, register
// it in src/content/apps.ts, drop images in public/apps/<slug>/, push.

import {
  APEX,
  PROJECT_NAME,
  addProjectDomain,
  cfZoneId,
  ensureDnsRecord,
  log,
  registeredSlugs,
  requireEnv,
  step,
  vercel,
  vercelDnsTargets,
} from "./lib.mjs";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error("Usage: npm run add-app -- <slug>   (lowercase letters, digits, hyphens)");
  process.exit(1);
}

const auth = {
  token: requireEnv("VERCEL_TOKEN"),
  teamId: process.env.VERCEL_TEAM_ID,
};
const cfToken = requireEnv("CLOUDFLARE_API_TOKEN");

const project = await vercel(`/v9/projects/${PROJECT_NAME}`, auth);
if (!project.ok) {
  console.error(`Project ${PROJECT_NAME} not found — run \`npm run setup-infra\` first.`);
  process.exit(1);
}

step(`${slug}.${APEX}`);
await addProjectDomain(project.json.id, `${slug}.${APEX}`, auth);
const zoneId = await cfZoneId(cfToken);
const targets = await vercelDnsTargets(APEX, auth);
await ensureDnsRecord(zoneId, cfToken, { type: "CNAME", name: slug, content: targets.cname });

if (!registeredSlugs().includes(slug)) {
  step("Content still missing");
  log(`src/content/${slug}.ts doesn't exist yet — the subdomain will 404 until`);
  log(`the app is added to src/content/apps.ts and deployed. Copy`);
  log(`src/content/poker-night.ts as a starting point.`);
}
