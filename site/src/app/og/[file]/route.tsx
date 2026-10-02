// Static 1200x630 social cards: /og/hub.png and /og/<slug>.png. Lives outside
// [locale]; the middleware skips dotted paths so it is host-independent.
// English only — the default OG font has no CJK glyphs.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { apps, getApp } from "@/content/apps";
import { getDict } from "@/lib/dictionaries";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ file: "hub.png" }, ...apps.map((a) => ({ file: `${a.slug}.png` }))];
}

const INK = "#070b15";
const PANEL = "#0d1424";
const LINE = "#1d2942";
const PAPER = "#e9edf8";
const SLATE = "#93a0c2";
const INDIGO = "#4f5ff6";

async function iconDataUrl(icon: string): Promise<string> {
  const buf = await readFile(path.join(process.cwd(), "public", icon));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;
  const slug = file.replace(/\.png$/, "");
  const en = getDict("en");

  let title: string;
  let subtitle: string;
  let icon: string | null = null;

  if (slug === "hub") {
    title = "appfactory";
    subtitle = `${en.hub.headline[0]} ${en.hub.headline[1]}.`;
  } else {
    const app = getApp(slug);
    if (!app) return new Response("Not found", { status: 404 });
    title = app.i18n.en.name;
    subtitle = app.i18n.en.subtitle;
    icon = await iconDataUrl(app.icon);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          color: PAPER,
          padding: 72,
          borderTop: `8px solid ${INDIGO}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={icon}
              width={220}
              height={220}
              alt=""
              style={{
                borderRadius: 48,
                border: `2px solid ${LINE}`,
                background: PANEL,
              }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: icon ? 92 : 132,
                fontWeight: 700,
                letterSpacing: -2,
                lineHeight: 1.05,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 42,
                color: SLATE,
                lineHeight: 1.25,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            color: SLATE,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{ display: "flex", width: 20, height: 20, background: INDIGO, borderRadius: 4 }}
            />
            <div style={{ display: "flex" }}>appfactory.sg</div>
          </div>
          <div style={{ display: "flex" }}>iOS · Android · made in Singapore</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
