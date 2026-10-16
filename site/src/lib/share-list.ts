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
  const payload = bytes.subarray(1);
  const raw = await inflateRawCapped(payload, MAX_LINK_JSON_BYTES);
  // Nothing may follow the end of the DEFLATE stream (the Dart decoder agrees).
  if (deflateStreamLength(payload) !== payload.length) throw new ShareError("corrupt");
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
  // Recordings travel in files only, never in a link (the app agrees).
  if (o.a !== undefined && o.a !== null) throw new ShareError("invalid");
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

// ---------------------------------------------------------------------------
// Where a raw DEFLATE stream ends (RFC 1951), so a payload with bytes after it
// is refused the same way in every browser (DecompressionStream
// implementations differ) and in the app's Dart decoder. A port of the block
// walk in zlib's puff.c; it produces no output and only runs on data the real
// decoder has already inflated within its cap.
// ---------------------------------------------------------------------------

const LENGTH_EXTRA = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
const DIST_EXTRA = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
const CL_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

class Bad extends Error {}

interface Huffman {
  count: number[];
  symbol: number[];
}

function huffman(lengths: number[]): Huffman {
  const count = new Array<number>(16).fill(0);
  for (const l of lengths) count[l]++;
  const offs = new Array<number>(16).fill(0);
  for (let l = 1; l < 15; l++) offs[l + 1] = offs[l] + count[l];
  const symbol = new Array<number>(lengths.length).fill(0);
  for (let s = 0; s < lengths.length; s++) {
    if (lengths[s] !== 0) symbol[offs[lengths[s]]++] = s;
  }
  return { count, symbol };
}

class Reader {
  pos = 0;
  buf = 0;
  cnt = 0;
  data: Uint8Array;
  constructor(data: Uint8Array) {
    this.data = data;
  }

  bits(need: number): number {
    let v = this.buf;
    while (this.cnt < need) {
      if (this.pos >= this.data.length) throw new Bad();
      v |= this.data[this.pos++] << this.cnt;
      this.cnt += 8;
    }
    this.buf = v >> need;
    this.cnt -= need;
    return v & ((1 << need) - 1);
  }

  align() {
    this.buf = 0;
    this.cnt = 0;
  }

  decode(h: Huffman): number {
    let code = 0;
    let first = 0;
    let index = 0;
    for (let len = 1; len <= 15; len++) {
      code |= this.bits(1);
      const count = h.count[len];
      if (code - count < first) return h.symbol[index + (code - first)];
      index += count;
      first += count;
      first <<= 1;
      code <<= 1;
    }
    throw new Bad();
  }
}

function walk(r: Reader, lit: Huffman, dist: Huffman) {
  for (;;) {
    const sym = r.decode(lit);
    if (sym < 256) continue;
    if (sym === 256) return;
    const li = sym - 257;
    if (li >= 29) throw new Bad();
    r.bits(LENGTH_EXTRA[li]);
    const ds = r.decode(dist);
    if (ds >= 30) throw new Bad();
    r.bits(DIST_EXTRA[ds]);
  }
}

/** Bytes of `data` the DEFLATE stream occupies, or null if truncated or malformed. */
export function deflateStreamLength(data: Uint8Array): number | null {
  const r = new Reader(data);
  try {
    let last: number;
    do {
      last = r.bits(1);
      switch (r.bits(2)) {
        case 0: {
          r.align();
          if (r.pos + 4 > data.length) return null;
          const len = data[r.pos] | (data[r.pos + 1] << 8);
          const nlen = data[r.pos + 2] | (data[r.pos + 3] << 8);
          if (len !== (~nlen & 0xffff)) return null;
          r.pos += 4 + len;
          if (r.pos > data.length) return null;
          break;
        }
        case 1: {
          const lit = new Array<number>(288).fill(8);
          lit.fill(9, 144, 256);
          lit.fill(7, 256, 280);
          walk(r, huffman(lit), huffman(new Array<number>(30).fill(5)));
          break;
        }
        case 2: {
          const nlen = r.bits(5) + 257;
          const ndist = r.bits(5) + 1;
          const ncode = r.bits(4) + 4;
          if (nlen > 286 || ndist > 30) return null;
          const cl = new Array<number>(19).fill(0);
          for (let k = 0; k < ncode; k++) cl[CL_ORDER[k]] = r.bits(3);
          const clCodes = huffman(cl);
          const lengths = new Array<number>(nlen + ndist).fill(0);
          let i = 0;
          while (i < nlen + ndist) {
            const sym = r.decode(clCodes);
            if (sym < 16) {
              lengths[i++] = sym;
              continue;
            }
            let prev = 0;
            let rep: number;
            if (sym === 16) {
              if (i === 0) return null;
              prev = lengths[i - 1];
              rep = 3 + r.bits(2);
            } else if (sym === 17) rep = 3 + r.bits(3);
            else rep = 11 + r.bits(7);
            if (i + rep > nlen + ndist) return null;
            while (rep-- > 0) lengths[i++] = prev;
          }
          if (lengths[256] === 0) return null;
          walk(r, huffman(lengths.slice(0, nlen)), huffman(lengths.slice(nlen)));
          break;
        }
        default:
          return null;
      }
    } while (last === 0);
    return r.pos;
  } catch (e) {
    if (e instanceof Bad) return null;
    throw e;
  }
}
