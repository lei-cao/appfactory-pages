#!/usr/bin/env node
// One-time infrastructure setup for appfactory.sg.
//
//   VERCEL_TOKEN=… CLOUDFLARE_API_TOKEN=… npm run setup-infra
//
// Idempotent — safe to re-run. It:
//   1. creates the Vercel project (Next.js, root directory `site/`),
//      linked to the GitHub repo when the Vercel GitHub App is installed;
//   2. adds the apex, www-redirect, and one domain per registered app;
//   3. creates matching DNS-only records in the Cloudflare zone;
//   4. writes site/.vercel/project.json so `npx vercel deploy --prod` works.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  APEX,
  GITHUB_REPO,
  PROJECT_NAME,
  SITE_DIR,
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

const auth = {
  token: requireEnv("VERCEL_TOKEN"),
  teamId: process.env.VERCEL_TEAM_ID,
};
const cfToken = requireEnv("CLOUDFLARE_API_TOKEN");
const slugs = registeredSlugs();

step(`Vercel project "${PROJECT_NAME}"`);
let project;
{
  const existing = await vercel(`/v9/projects/${PROJECT_NAME}`, auth);
  if (existing.ok) {
    project = existing.json;
    log(`exists (id ${project.id})`);
  } else {
    const withGit = await vercel(`/v11/projects`, {
      ...auth,
      method: "POST",
      body: {
        name: PROJECT_NAME,
        framework: "nextjs",
        rootDirectory: "site",
        gitRepository: { type: "github", repo: GITHUB_REPO },
      },
    });
    if (withGit.ok) {
      project = withGit.json;
      log(`created and linked to github.com/${GITHUB_REPO} (id ${project.id})`);
    } else {
      log(`could not link GitHub repo (${withGit.json?.error?.code ?? withGit.status}); creating unlinked project`);
      const bare = await vercel(`/v11/projects`, {
        ...auth,
        method: "POST",
        body: { name: PROJECT_NAME, framework: "nextjs", rootDirectory: "site" },
      });
      if (!bare.ok) {
        console.error(`✗ Project creation failed: ${JSON.stringify(bare.json?.error)}`);
        process.exit(1);
      }
      project = bare.json;
      log(`created (id ${project.id})`);
      log(`→ To enable deploy-on-push, connect the repo once in the dashboard:`);
      log(`  https://vercel.com/${project.accountId ?? "dashboard"}/${PROJECT_NAME}/settings/git`);
    }
  }
}

step("Vercel domains");
await addProjectDomain(project.id, APEX, auth);
await addProjectDomain(project.id, `www.${APEX}`, auth, {
  redirect: APEX,
  redirectStatusCode: 308,
});
for (const slug of slugs) {
  await addProjectDomain(project.id, `${slug}.${APEX}`, auth);
}

step("Cloudflare DNS");
const zoneId = await cfZoneId(cfToken);
const targets = await vercelDnsTargets(APEX, auth);
await ensureDnsRecord(zoneId, cfToken, { type: "A", name: "@", content: targets.ipv4 });
await ensureDnsRecord(zoneId, cfToken, { type: "CNAME", name: "www", content: targets.cname });
for (const slug of slugs) {
  await ensureDnsRecord(zoneId, cfToken, { type: "CNAME", name: slug, content: targets.cname });
}

step("Local deploy link (site/.vercel/project.json)");
mkdirSync(join(SITE_DIR, ".vercel"), { recursive: true });
writeFileSync(
  join(SITE_DIR, ".vercel", "project.json"),
  JSON.stringify(
    { projectId: project.id, orgId: project.accountId, projectName: PROJECT_NAME },
    null,
    2,
  ),
);
log("written — `npx vercel deploy --prod` now targets this project");

step("Done");
log(`Certificates are issued by Vercel after DNS propagates (usually minutes).`);
log(`Check: https://${APEX} and ${slugs.map((s) => `https://${s}.${APEX}`).join(", ")}`);
