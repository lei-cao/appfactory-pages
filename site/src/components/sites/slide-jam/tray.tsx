// The wooden tray, its arches and the glossy blocks, drawn as one SVG in the
// game's own flat colours (no gradients: the gloss is a flat highlight bar,
// the depth a darker lip). Presentational only, so the server renders the
// static trays and the live tray reuses it with drag offsets.

import type { ReactNode, SVGProps } from "react";
import { PAINT, type Arch, type Block, type Colour, type Level } from "./level";

export const U = 100; // one cell, in viewBox units
export const RIM = 46;

const SYMBOL: Record<Colour, ReactNode> = {
  navy: <path d="M-0.5-16A16 16 0 1 0 15.7 2.95 12.5 12.5 0 1 1-0.5-16Z" />,
  sky: <path d="M0-19C8-8 13-1 13 6A13 13 0 0 1-13 6C-13-1-8-8 0-19Z" />,
  red: (
    <path d="M0 15C-19 3-17-15-8-15-3-15 0-11 0-8 0-11 3-15 8-15 17-15 19 3 0 15Z" />
  ),
  mint: <path d="M-14 14C-14-6 0-15 15-15 15 4 4 14-14 14Z" />,
  pink: <path d="M0-14A14 14 0 1 1 0 14 14 14 0 1 1 0-14ZM0-7A7 7 0 1 0 0 7 7 7 0 1 0 0-7Z" fillRule="evenodd" />,
  yellow: <rect x={-10} y={-10} width={20} height={20} rx={4} />,
  orange: <path d="M0-16 4.7-6.5 15.2-4.9 7.6 2.4 9.4 12.9 0 8 -9.4 12.9-7.6 2.4-15.2-4.9-4.7-6.5Z" />,
};

export function Mark({ colour, x, y, scale = 1, fill }: { colour: Colour; x: number; y: number; scale?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill ?? PAINT[colour].mark}>
      {SYMBOL[colour]}
    </g>
  );
}

/** One block at its own origin (0,0); the caller positions it. */
export function BlockShape({ block }: { block: Block }) {
  const p = PAINT[block.colour];
  const set = new Set(block.shape.map(([r, c]) => `${r},${c}`));
  const pad = 5;
  const bridges: ReactNode[] = [];
  for (const [r, c] of block.shape) {
    if (set.has(`${r},${c + 1}`))
      bridges.push(<rect key={`h${r},${c}`} x={c * U + U / 2} y={r * U + pad} width={U} height={U - pad * 2} />);
    if (set.has(`${r + 1},${c}`))
      bridges.push(<rect key={`v${r},${c}`} x={c * U + pad} y={r * U + U / 2} width={U - pad * 2} height={U} />);
    if (set.has(`${r},${c + 1}`) && set.has(`${r + 1},${c}`) && set.has(`${r + 1},${c + 1}`))
      bridges.push(<rect key={`q${r},${c}`} x={c * U + U / 2} y={r * U + U / 2} width={U} height={U} />);
  }
  const quads = block.shape.filter(
    ([r, c]) => set.has(`${r},${c + 1}`) && set.has(`${r + 1},${c}`) && set.has(`${r + 1},${c + 1}`),
  );
  const [r0, c0] = block.shape[0];
  return (
    <>
      <g fill={p.lip}>
        {block.shape.map(([r, c]) => (
          <rect key={`${r},${c}`} x={c * U + pad} y={r * U + pad} width={U - pad * 2} height={U - pad * 2} rx={20} />
        ))}
        {bridges}
      </g>
      <g fill={p.face}>
        {block.shape.map(([r, c]) => (
          <rect key={`${r},${c}`} x={c * U + pad} y={r * U + pad} width={U - pad * 2} height={U - pad * 2 - 12} rx={20} />
        ))}
        {block.shape.map(([r, c]) =>
          set.has(`${r},${c + 1}`) ? (
            <rect key={`h${r},${c}`} x={c * U + U / 2} y={r * U + pad} width={U} height={U - pad * 2 - 12} />
          ) : null,
        )}
        {block.shape.map(([r, c]) =>
          set.has(`${r + 1},${c}`) ? (
            <rect key={`v${r},${c}`} x={c * U + pad} y={r * U + U / 2} width={U - pad * 2} height={U} />
          ) : null,
        )}
        {quads.map(([r, c]) => (
          <rect key={`q${r},${c}`} x={c * U + U / 2} y={r * U + U / 2} width={U} height={U - 12} />
        ))}
      </g>
      <g fill="#ffffff" opacity={0.5}>
        {block.shape.map(([r, c]) => (
          <rect key={`${r},${c}`} x={c * U + 18} y={r * U + 13} width={34} height={11} rx={5.5} />
        ))}
      </g>
      <Mark colour={block.colour} x={c0 * U + U / 2} y={r0 * U + U / 2 - 4} scale={1.25} />
    </>
  );
}

function ArchShape({ arch, level }: { arch: Arch; level: Level }) {
  const p = PAINT[arch.colour];
  const W = level.cols * U + RIM * 2;
  const H = level.rows * U + RIM * 2;
  const along = arch.span * U - 16;
  const depth = RIM - 12;
  let x = 0;
  let y = 0;
  let w = 0;
  let h = 0;
  if (arch.side === "top" || arch.side === "bottom") {
    x = RIM + arch.from * U + 8;
    w = along;
    h = depth;
    y = arch.side === "top" ? 4 : H - depth - 4;
  } else {
    y = RIM + arch.from * U + 8;
    h = along;
    w = depth;
    x = arch.side === "left" ? 4 : W - depth - 4;
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={p.lip} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx={11} fill={p.face} />
      <Mark colour={arch.colour} x={x + w / 2} y={y + h / 2} scale={0.62} />
    </g>
  );
}

export interface TrayProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  level: Level;
  blocks: Block[];
  /** Extra per-block props (handlers, aria, style) for the live tray. */
  blockProps?: (b: Block) => SVGProps<SVGGElement>;
  label: string;
  children?: ReactNode;
}

export function Tray({ level, blocks, blockProps, label, children, ...svg }: TrayProps) {
  const W = level.cols * U + RIM * 2;
  const H = level.rows * U + RIM * 2;
  const cells: ReactNode[] = [];
  for (let r = 0; r < level.rows; r++)
    for (let c = 0; c < level.cols; c++)
      cells.push(
        <rect key={`${r},${c}`} x={RIM + c * U + 3} y={RIM + r * U + 3} width={U - 6} height={U - 6} rx={10} />,
      );
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} data-ui {...svg}>
      <rect x={0} y={0} width={W} height={H} rx={40} fill="#c98b45" />
      <rect x={6} y={6} width={W - 12} height={H - 18} rx={36} fill="#dfa95f" />
      <rect x={RIM - 6} y={RIM - 6} width={level.cols * U + 12} height={level.rows * U + 12} rx={16} fill="#b87a37" />
      <rect x={RIM} y={RIM} width={level.cols * U} height={level.rows * U} rx={12} fill="#f6e5bf" />
      <g fill="#eed49f">{cells}</g>
      {level.arches.map((a) => (
        <ArchShape key={`${a.side}${a.from}`} arch={a} level={level} />
      ))}
      <g transform={`translate(${RIM} ${RIM})`}>
        {blocks.map((b) => {
          const extra = blockProps?.(b) ?? {};
          return (
            <g key={b.id} transform={`translate(${b.col * U} ${b.row * U})`} {...extra}>
              <BlockShape block={b} />
            </g>
          );
        })}
      </g>
      {children}
    </svg>
  );
}
