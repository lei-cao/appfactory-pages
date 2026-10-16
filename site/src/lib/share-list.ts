// Decoder for TraceSheet shared lists (share format v1). The format is
// specified in the app repo: apps/tracesheet/docs/design/v9-share-format.md.
//
//   bytes    = 0x01 ++ DEFLATE_raw(UTF-8 JSON)
//   fragment = base64url(bytes), no padding
//   link     = https://appfactory.sg/go/tracesheet/l#<fragment>
//
// The list travels in the URL fragment, which browsers never send to a
// server: this runs in the visitor's browser and nothing is uploaded or
// stored. Pure (no Next.js, no DOM), so scripts/share-list.test.mts runs it
// under plain Node against the fixtures the Dart encoder produced.

export const FORMAT_VERSION = 1;
export const MAX_FRAGMENT_CHARS = 4096;
export const MAX_LINK_JSON_BYTES = 256 * 1024;
export const MAX_ITEMS = 500;
export const MAX_NAME_CHARS = 120;
export const MAX_TEXT_CHARS = 400;
const MAX_RECORDING_BYTES = 768 * 1024;

export type ShareErrorKind =
  | "notShare"
  | "unsupportedVersion"
  | "corrupt"
  | "tooLarge"
  | "invalid";

export interface SharedItem {
  text: string;
  kind: "cn" | "en" | "other";
  itemKind: "char" | "word" | "sentence";
  /** UTF-16 [start, end) spans the child writes; empty = the whole item. */
  targets: [number, number][];
  write: boolean;
  pinyin: string | null;
  pinyinOverride: string | null;
  lang: string | null;
  reading: string | null;
  meaning: string | null;
  sentence: string | null;
}

export interface SharedList {
  id: string | null;
  name: string;
  items: SharedItem[];
}

export type DecodeResult =
  | { ok: true; list: SharedList }
  | { ok: false; error: ShareErrorKind };

class ShareError extends Error {
  kind: ShareErrorKind;
  constructor(kind: ShareErrorKind) {
    super(kind);
    this.kind = kind;
  }
}

const ID_RE = /^[A-Za-z0-9_-]{4,40}$/;
const B64URL_RE = /^[A-Za-z0-9_-]*$/;
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\u0000-\u001F\u007F]/;
const SENTENCE_PUNCT = new Set([..."。！？.!?，,"].map((c) => c.codePointAt(0)!));

/** Decodes a link fragment (the text after `#`). Never throws. */
export async function decodeShareFragment(fragment: string): Promise<DecodeResult> {
  try {
    return { ok: true, list: await decode(fragment) };
  } catch (e) {
    return { ok: false, error: e instanceof ShareError ? e.kind : "corrupt" };
  }
}

async function decode(fragment: string): Promise<SharedList> {
  if (!fragment || fragment.length > MAX_FRAGMENT_CHARS || !B64URL_RE.test(fragment)) {
    throw new ShareError("notShare");
  }
  if (fragment.length % 4 === 1) throw new ShareError("corrupt");
  let bytes: Uint8Array;
  try {
    const b64 = fragment.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
    bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  } catch {
    throw new ShareError("corrupt");
  }
  if (bytes.length < 2) throw new ShareError("corrupt");
  if (bytes[0] !== FORMAT_VERSION) throw new ShareError("unsupportedVersion");
  const raw = await inflateRawCapped(bytes.subarray(1), MAX_LINK_JSON_BYTES);
  let json: unknown;
  try {
    json = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(raw));
  } catch {
    throw new ShareError("corrupt");
  }
  return listFromJson(json);
}

/** Inflates raw DEFLATE, stopping once the output passes `cap` bytes. */
async function inflateRawCapped(data: Uint8Array, cap: number): Promise<Uint8Array> {
  if (typeof DecompressionStream === "undefined") throw new ShareError("corrupt");
  const ds = new DecompressionStream("deflate-raw");
  const writer = ds.writable.getWriter();
  const reader = ds.readable.getReader();
  const feed = (async () => {
    try {
      for (let at = 0; at < data.length; at += 512) {
        await writer.write(data.subarray(at, at + 512) as BufferSource);
      }
      await writer.close();
    } catch {
      // The reader sees the error (or was cancelled).
    }
  })();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.length;
      if (total > cap) {
        await reader.cancel().catch(() => {});
        await writer.abort().catch(() => {});
        throw new ShareError("tooLarge");
      }
      chunks.push(value);
    }
  } catch (e) {
    if (e instanceof ShareError) throw e;
    throw new ShareError("corrupt");
  } finally {
    await feed;
  }
  const out = new Uint8Array(total);
  let at = 0;
  for (const c of chunks) {
    out.set(c, at);
    at += c.length;
  }
  return out;
}

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  if (v.length > max || CONTROL_RE.test(v)) throw new ShareError("invalid");
  return v;
}

function field(v: unknown): string | null {
  const s = str(v, MAX_TEXT_CHARS)?.trim();
  return s ? s : null;
}

function listFromJson(json: unknown): SharedList {
  if (typeof json !== "object" || json === null || Array.isArray(json)) {
    throw new ShareError("invalid");
  }
  const o = json as Record<string, unknown>;
  const name = str(o.n, MAX_NAME_CHARS)?.trim();
  if (!name) throw new ShareError("invalid");
  const x = o.x;
  if (!Array.isArray(x) || x.length === 0) throw new ShareError("invalid");
  if (x.length > MAX_ITEMS) throw new ShareError("tooLarge");
  return {
    id: typeof o.i === "string" && ID_RE.test(o.i) ? o.i : null,
    name,
    items: x.map(itemFromJson),
  };
}

function itemFromJson(raw: unknown): SharedItem {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new ShareError("invalid");
  }
  const o = raw as Record<string, unknown>;
  // Not trimmed: target spans index into the exact text.
  const text = str(o.t, MAX_TEXT_CHARS);
  if (text === null || text.trim() === "") throw new ShareError("invalid");
  if (o.k !== "cn" && o.k !== "en" && o.k !== "other") throw new ShareError("invalid");
  const kind = o.k;
  let itemKind: SharedItem["itemKind"];
  if (o.ik === undefined || o.ik === null) itemKind = detectItemKind(text, kind);
  else if (o.ik === "char" || o.ik === "word" || o.ik === "sentence") itemKind = o.ik;
  else throw new ShareError("invalid");
  if (o.a !== undefined && o.a !== null) {
    // Recordings only travel in files, never in a link.
    if (typeof o.a !== "string" || o.a.length > (MAX_RECORDING_BYTES * 4) / 3 + 8) {
      throw new ShareError("tooLarge");
    }
  }
  const lang = typeof o.l === "string" && /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8}){0,3}$/.test(o.l) ? o.l : null;
  const sentence = field(o.s);
  return {
    text,
    kind,
    itemKind,
    targets: targetsFromJson(o.tg, text),
    write: o.w !== 0,
    pinyin: field(o.p),
    pinyinOverride: field(o.po),
    lang,
    reading: field(o.r),
    meaning: field(o.m),
    sentence,
  };
}

/** Strict: inside the text, sorted, non-overlapping, no split surrogate pair. */
function targetsFromJson(raw: unknown, text: string): [number, number][] {
  if (raw === undefined || raw === null) return [];
  if (!Array.isArray(raw) || raw.length > text.length) throw new ShareError("invalid");
  const spans: [number, number][] = [];
  let prevEnd = 0;
  for (const pair of raw) {
    if (!Array.isArray(pair) || pair.length !== 2) throw new ShareError("invalid");
    const [start, end] = pair;
    if (!Number.isInteger(start) || !Number.isInteger(end)) throw new ShareError("invalid");
    if (start < 0 || end <= start || end > text.length || start < prevEnd) {
      throw new ShareError("invalid");
    }
    if (splitsPair(text, start) || splitsPair(text, end)) throw new ShareError("invalid");
    spans.push([start, end]);
    prevEnd = end;
  }
  return spans;
}

function splitsPair(text: string, i: number): boolean {
  if (i <= 0 || i >= text.length) return false;
  const before = text.charCodeAt(i - 1);
  const at = text.charCodeAt(i);
  return before >= 0xd800 && before <= 0xdbff && at >= 0xdc00 && at <= 0xdfff;
}

function isCjk(cp: number): boolean {
  return (
    (cp >= 0x4e00 && cp <= 0x9fff) ||
    (cp >= 0x3400 && cp <= 0x4dbf) ||
    (cp >= 0x20000 && cp <= 0x2fa1f) ||
    (cp >= 0xf900 && cp <= 0xfaff) ||
    (cp >= 0x3040 && cp <= 0x30ff) ||
    (cp >= 0xac00 && cp <= 0xd7af)
  );
}

/** The shape the app would detect for an item sent without `ik`. */
export function detectItemKind(text: string, kind: SharedItem["kind"]): SharedItem["itemKind"] {
  const trimmed = text.trim();
  if (!trimmed) return "word";
  const cps = [...trimmed].map((c) => c.codePointAt(0)!);
  if (kind === "cn" && cps.length === 1) return "char";
  if (cps.some((c) => SENTENCE_PUNCT.has(c))) return "sentence";
  if (trimmed.split(/\s+/).length >= 5) return "sentence";
  if (cps.filter(isCjk).length > 8) return "sentence";
  return "word";
}

export interface Segment {
  text: string;
  isTarget: boolean;
}

/** An item's text split into context and target runs (for underlining). */
export function segments(item: Pick<SharedItem, "text" | "targets">): Segment[] {
  if (item.targets.length === 0) return [{ text: item.text, isTarget: true }];
  const out: Segment[] = [];
  let at = 0;
  for (const [s, e] of item.targets) {
    if (s > at) out.push({ text: item.text.slice(at, s), isTarget: false });
    out.push({ text: item.text.slice(s, e), isTarget: true });
    at = e;
  }
  if (at < item.text.length) out.push({ text: item.text.slice(at), isTarget: false });
  return out;
}
