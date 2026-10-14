"use client";

// The page's live thing: type a word (or pick one) and see the copybook row
// TraceSheet would give it — the model in ink, copies to trace, then empty
// cells — on the grid its script uses. The field behind it swaps to the
// exercise-book cover colour of that script. "Print this sample" prints just
// the sheet. The server render shows the first preset, so the section reads
// complete without script.

import { useId, useRef, useState } from "react";
import type { TracesheetPreset, TracesheetScript } from "@/content/tracesheet";

const TRACE_CELLS = 4;
const ROW_CELLS = 10;
const MAX_CHARS = 6;

function scriptOf(text: string): TracesheetScript {
  for (const ch of text) {
    if (/[가-힯ᄀ-ᇿ㄰-㆏]/.test(ch)) return "ko";
    if (/[぀-ヿ]/.test(ch)) return "ja";
    if (/[㐀-鿿豈-﫿]/.test(ch)) return "zh";
    if (/[A-Za-z]/.test(ch)) return "en";
  }
  return "zh";
}

function Cell({ ch, kind }: { ch?: string; kind: "model" | "trace" | "blank" }) {
  return (
    <span className={`ts-c ts-c-${kind}`}>
      {ch && kind !== "blank" ? <span>{ch}</span> : null}
    </span>
  );
}

export function TrySheet({
  title,
  body,
  label,
  presetsLabel,
  presets,
  sheetNames,
  printLabel,
  note,
}: {
  title: string;
  body: string;
  label: string;
  presetsLabel: string;
  presets: TracesheetPreset[];
  sheetNames: Record<TracesheetScript, string>;
  printLabel: string;
  note: string;
}) {
  const [text, setText] = useState(presets[0].text);
  const sheetRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  const word = text.trim();
  const script = scriptOf(word);
  const reading = presets.find((p) => p.text === word)?.reading;
  const chars = Array.from(word.replace(/\s+/g, "")).slice(0, MAX_CHARS);
  const words = word.split(/\s+/).filter(Boolean).slice(0, 3);

  function print() {
    const sheet = sheetRef.current;
    if (!sheet) return;
    sheet.dataset.printing = "1";
    const done = () => {
      delete sheet.dataset.printing;
      window.removeEventListener("afterprint", done);
    };
    window.addEventListener("afterprint", done);
    window.print();
  }

  return (
    <section className="ts-try" data-script={script} aria-labelledby={`${inputId}-h`}>
      <div className="ts-try-text">
        <h2 id={`${inputId}-h`} className="ts-h2 ts-rise">
          {title}
        </h2>
        <p className="ts-lead ts-rise" style={{ ["--d" as string]: 1 }}>
          {body}
        </p>
        <p className="ts-small ts-try-from ts-rise" style={{ ["--d" as string]: 2 }}>
          {presetsLabel}
        </p>
        <div className="ts-chips ts-rise" style={{ ["--d" as string]: 2 }}>
          {presets.map((p) => (
            <button
              key={p.text}
              type="button"
              className="ts-chip"
              aria-pressed={p.text === word}
              onClick={() => setText(p.text)}
            >
              {p.text}
            </button>
          ))}
        </div>
        <div className="ts-try-actions ts-rise" style={{ ["--d" as string]: 3 }}>
          <button type="button" className="ts-btn" onClick={print}>
            {printLabel}
          </button>
          <p className="ts-small">{note}</p>
        </div>
      </div>

      <div className="ts-sheet" data-ui ref={sheetRef}>
        <label htmlFor={inputId} className="ts-sheet-label">
          {label}
        </label>
        <div className="ts-field">
          <span className="ts-field-plus" aria-hidden>
            +
          </span>
          <input
            id={inputId}
            value={text}
            maxLength={24}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <p className="ts-sheet-kind" aria-live="polite">
          {sheetNames[script]}
        </p>

        {script === "en" ? (
          <div className="ts-lines-sheet" aria-hidden>
            {(words.length ? words : [""]).map((w, i) => (
              <div key={`${w}-${i}`} className="ts-line-pair">
                <div className="ts-lines">
                  <span className="ts-l-model">{w}</span>
                  <span className="ts-l-trace">{w}</span>
                  <span className="ts-l-trace">{w}</span>
                  <span className="ts-l-trace">{w}</span>
                </div>
                <div className="ts-lines" />
              </div>
            ))}
          </div>
        ) : (
          <div className="ts-rows" aria-hidden>
            {(chars.length ? chars : [""]).map((ch, i) => (
              <div key={`${ch}-${i}`} className="ts-row">
                <span className="ts-reading">{reading?.[i] ?? " "}</span>
                <div className="ts-cells">
                  <Cell ch={ch} kind="model" />
                  {Array.from({ length: ROW_CELLS - 1 }, (_, k) => (
                    <Cell key={k} ch={ch} kind={k < TRACE_CELLS ? "trace" : "blank"} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
