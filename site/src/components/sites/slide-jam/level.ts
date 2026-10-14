// The little tray on the landing page: one hand-made Glossy Blocks level with
// the game's own rules. A block slides in a straight line until something
// stops it; if the rim stops it at an arch of its own colour that is at least
// as wide as the block, it leaves the tray. Six blocks, each one freeing the
// next (navy → mint → pink → sky → yellow; red is free from the start), so
// par is six moves.

export type Colour = "pink" | "orange" | "yellow" | "mint" | "sky" | "navy" | "red";
export type Side = "top" | "right" | "bottom" | "left";

/** Face, lip (the darker lower edge) and symbol colours, sampled from the game. */
export const PAINT: Record<Colour, { face: string; lip: string; mark: string }> = {
  pink: { face: "#f68fbc", lip: "#d8649a", mark: "#c24c84" },
  orange: { face: "#ffa33c", lip: "#dd7d14", mark: "#c06a08" },
  yellow: { face: "#ffd84a", lip: "#dcb21f", mark: "#b38c00" },
  mint: { face: "#76d9a7", lip: "#46b47e", mark: "#2e8b5d" },
  sky: { face: "#5fb4f2", lip: "#3b8ecf", mark: "#2a6fab" },
  navy: { face: "#34449c", lip: "#212d70", mark: "#8090dc" },
  red: { face: "#e9525c", lip: "#c03540", mark: "#a42531" },
};

export interface Block {
  id: string;
  colour: Colour;
  /** Cells as [row, col] offsets from the block's origin. */
  shape: [number, number][];
  row: number;
  col: number;
}

export interface Arch {
  colour: Colour;
  side: Side;
  /** First row (left/right sides) or column (top/bottom) the arch covers. */
  from: number;
  span: number;
}

export interface Level {
  rows: number;
  cols: number;
  par: number;
  blocks: Block[];
  arches: Arch[];
}

export const LEVEL: Level = {
  rows: 6,
  cols: 6,
  par: 6,
  blocks: [
    { id: "pink", colour: "pink", shape: [[0, 0], [1, 0]], row: 0, col: 0 },
    { id: "sky", colour: "sky", shape: [[0, 0], [0, 1], [1, 0], [1, 1]], row: 0, col: 1 },
    { id: "yellow", colour: "yellow", shape: [[0, 0], [0, 1]], row: 2, col: 1 },
    { id: "red", colour: "red", shape: [[0, 0], [0, 1]], row: 3, col: 3 },
    { id: "mint", colour: "mint", shape: [[0, 0], [1, 0], [1, 1]], row: 4, col: 0 },
    { id: "navy", colour: "navy", shape: [[0, 0]], row: 5, col: 4 },
  ],
  arches: [
    { colour: "yellow", side: "top", from: 1, span: 2 },
    { colour: "sky", side: "left", from: 0, span: 2 },
    { colour: "pink", side: "bottom", from: 0, span: 1 },
    { colour: "navy", side: "bottom", from: 4, span: 1 },
    { colour: "red", side: "right", from: 3, span: 1 },
    { colour: "mint", side: "right", from: 4, span: 2 },
  ],
};

export const STEP: Record<Side, [number, number]> = {
  top: [-1, 0],
  right: [0, 1],
  bottom: [1, 0],
  left: [0, -1],
};

export function cellsOf(b: Block, dr = 0, dc = 0): [number, number][] {
  return b.shape.map(([r, c]) => [b.row + r + dr, b.col + c + dc]);
}

/**
 * How far `b` can slide toward `side`, and whether it then leaves through a
 * matching arch. `others` are the blocks still on the tray.
 */
export function reach(level: Level, b: Block, others: Block[], side: Side) {
  const taken = new Set<string>();
  for (const o of others) if (o.id !== b.id) for (const [r, c] of cellsOf(o)) taken.add(`${r},${c}`);
  const [dr, dc] = STEP[side];
  let k = 0;
  let rim = false;
  for (;;) {
    const next = cellsOf(b, dr * (k + 1), dc * (k + 1));
    if (next.some(([r, c]) => r < 0 || c < 0 || r >= level.rows || c >= level.cols)) {
      rim = true;
      break;
    }
    if (next.some(([r, c]) => taken.has(`${r},${c}`))) break;
    k++;
  }
  let exits = false;
  if (rim) {
    const at = cellsOf(b, dr * k, dc * k);
    const across = side === "left" || side === "right" ? at.map(([r]) => r) : at.map(([, c]) => c);
    const lo = Math.min(...across);
    const hi = Math.max(...across);
    exits = level.arches.some(
      (a) => a.side === side && a.colour === b.colour && a.from <= lo && a.from + a.span - 1 >= hi,
    );
  }
  return { steps: k, exits };
}

/** Cells the block spans along a side's axis (how far it must travel to leave). */
export function extent(b: Block, side: Side): number {
  const vertical = side === "top" || side === "bottom";
  const vals = b.shape.map(([r, c]) => (vertical ? r : c));
  return Math.max(...vals) - Math.min(...vals) + 1;
}
