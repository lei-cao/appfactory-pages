"use client";

import { useState } from "react";

/**
 * Questions on the left, the chosen answer large on the right (desktop); on a
 * phone the answer opens under its question. Every answer is in the HTML.
 */
export function Faq({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  const [at, setAt] = useState(0);
  return (
    <section className="ao-faq" id="faq" aria-labelledby="ao-faq-h2">
      <h2 id="ao-faq-h2" className="ao-faq__h2" data-reveal>
        {title}
      </h2>
      <div className="ao-faq__grid">
        {faqs.map((f, i) => (
          <div key={f.q} className="ao-faq__item" data-on={i === at || undefined}>
            <h3 className="ao-faq__q">
              <button
                type="button"
                id={`ao-faq-q${i}`}
                aria-expanded={i === at}
                aria-controls={`ao-faq-a${i}`}
                onClick={() => setAt(i)}
                onMouseEnter={() => setAt(i)}
                onFocus={() => setAt(i)}
              >
                <span className="ao-faq__dot" aria-hidden />
                {f.q}
              </button>
            </h3>
            <p id={`ao-faq-a${i}`} className="ao-faq__a" role="region" aria-labelledby={`ao-faq-q${i}`}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
