// Settle-up arithmetic for the landing page's live demo: parse a line of
// "name ±amount" results and find who pays whom in the fewest transfers.
// Pure functions, shared by the server render (the no-script fallback) and
// the client component.
//
// Fewest transfers: with n players whose results sum to zero, the minimum is
// n − k, where k is the largest number of disjoint zero-sum groups the
// players can be split into. A subset DP finds k exactly for the small
// tables a home game has (capped at MAX_PLAYERS), then each group is settled
// greedily (largest debtor to largest creditor), which takes size − 1
// transfers per group.

export const MAX_PLAYERS = 12;

export interface Result {
  name: string;
  /** In cents (or the smallest unit), signed: + won, − lost. */
  cents: number;
}

export interface Transfer {
  from: string;
  to: string;
  cents: number;
}

export interface Parsed {
  results: Result[];
  /** Fragments that could not be read as "name amount". */
  unreadable: string[];
}

const SPLIT = /[,，、;；\n]+/;
// A name, then a signed amount at the end: "Alex +25", "Sam -8.50", "老陈 −180".
const ENTRY = /^(.*?)[\s:：=]*([+\-−–]?)\s*[$¥]?\s*(?:NT\$)?\s*(\d+(?:[.,]\d{1,2})?)$/u;

export function parseResults(line: string): Parsed {
  const results: Result[] = [];
  const unreadable: string[] = [];
  for (const raw of line.split(SPLIT)) {
    const part = raw.trim();
    if (!part) continue;
    const m = part.match(ENTRY);
    const name = m?.[1].trim();
    if (!m || !name) {
      unreadable.push(part);
      continue;
    }
    const sign = m[2] && m[2] !== "+" ? -1 : 1;
    const cents = Math.round(Number(m[3].replace(",", ".")) * 100) * sign;
    results.push({ name, cents });
  }
  return { results: results.slice(0, MAX_PLAYERS), unreadable };
}

/** Total of all results; 0 means the count is balanced. */
export function offBy(results: Result[]): number {
  return results.reduce((s, r) => s + r.cents, 0);
}

function settleGroup(group: Result[]): Transfer[] {
  const cred = group.filter((r) => r.cents > 0).map((r) => ({ ...r }));
  const debt = group.filter((r) => r.cents < 0).map((r) => ({ ...r, cents: -r.cents }));
  const out: Transfer[] = [];
  while (cred.length && debt.length) {
    cred.sort((a, b) => b.cents - a.cents);
    debt.sort((a, b) => b.cents - a.cents);
    const c = cred[0];
    const d = debt[0];
    const amt = Math.min(c.cents, d.cents);
    out.push({ from: d.name, to: c.name, cents: amt });
    c.cents -= amt;
    d.cents -= amt;
    if (!c.cents) cred.shift();
    if (!d.cents) debt.shift();
  }
  return out;
}

/** Who pays whom, fewest transfers. Requires a balanced table. */
export function settle(results: Result[]): Transfer[] {
  const live = results.filter((r) => r.cents !== 0);
  const n = live.length;
  if (n < 2 || offBy(live) !== 0) return [];

  const full = (1 << n) - 1;
  const sum = new Array<number>(1 << n).fill(0);
  for (let m = 1; m <= full; m++) {
    const low = m & -m;
    sum[m] = sum[m ^ low] + live[31 - Math.clz32(low)].cents;
  }
  // best[m] = most zero-sum groups the players in m split into (m sums to 0)
  const best = new Array<number>(1 << n).fill(-1);
  const pick = new Array<number>(1 << n).fill(0);
  best[0] = 0;
  for (let m = 1; m <= full; m++) {
    if (sum[m] !== 0) continue;
    // Enumerate zero-sum submasks containing m's lowest player as one group.
    const low = m & -m;
    const rest = m ^ low;
    for (let s = rest; ; s = (s - 1) & rest) {
      const g = s | low;
      if (sum[g] === 0 && best[m ^ g] >= 0 && best[m ^ g] + 1 > best[m]) {
        best[m] = best[m ^ g] + 1;
        pick[m] = g;
      }
      if (s === 0) break;
    }
  }

  const transfers: Transfer[] = [];
  for (let m = full; m; m ^= pick[m]) {
    const g = pick[m];
    transfers.push(...settleGroup(live.filter((_, i) => g & (1 << i))));
  }
  return transfers.sort((a, b) => b.cents - a.cents);
}
