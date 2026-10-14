"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { copyFor } from "./copy";
import {
  BUILDINGS,
  fairBonus,
  ITEMS,
  orderCoins,
  SOURCES,
  START_ORDERS,
  type ItemId,
  type Order,
} from "./farm";

// The live thing: the game's Order Board with three real orders. Each slip
// shows what it takes (the game's recipes and timings) and what it pays by
// the game's own rule, plus the Weekend Fair when the visitor's today is a
// Saturday or a Sunday. Deliver banks the coins and a new order is dealt.

const ORDERABLE = (Object.keys(ITEMS) as ItemId[]).filter((id) => ITEMS[id].orderable);

function dealOrder(): Order {
  const lines = 1 + Math.floor(Math.random() * 2);
  const pool = [...ORDERABLE];
  const order: Order = [];
  for (let i = 0; i < lines; i++) {
    const item = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    const qty = item === "berryPie" || ITEMS[item].value >= 40 ? 1 : 1 + Math.floor(Math.random() * 3);
    order.push({ item, qty });
  }
  return order;
}

export function OrderBoard({ locale }: { locale: Locale }) {
  const t = copyFor(locale);
  const [orders, setOrders] = useState<Order[]>(START_ORDERS);
  const [active, setActive] = useState(0);
  const [banked, setBanked] = useState(0);
  const [weekend, setWeekend] = useState(false);
  const [pop, setPop] = useState(0);

  useEffect(() => {
    const d = new Date().getDay();
    setWeekend(d === 0 || d === 6);
  }, []);

  const order = orders[active];
  const coins = orderCoins(order);
  const bonus = weekend ? fairBonus(coins) : 0;

  // Every step from the field to this order, de-duplicated, deepest first.
  const steps: string[] = [];
  const seen = new Set<ItemId>();
  const walk = (id: ItemId) => {
    if (seen.has(id)) return;
    seen.add(id);
    const src = SOURCES[id];
    if (!src) return;
    for (const input of Object.keys(src.inputs ?? {}) as ItemId[]) walk(input);
    const at = BUILDINGS[src.at][locale];
    if (src.at === "field") {
      steps.push(`${ITEMS[id].name[locale]}: ${t.grows(at, src.seconds)}`);
    } else {
      const inputs = Object.entries(src.inputs ?? {})
        .map(([k, q]) => `${q} ${ITEMS[k as ItemId].name[locale]}`)
        .join(" + ");
      const out = `${src.out ?? 1} ${ITEMS[id].name[locale]}`;
      steps.push(`${out}: ${t.from(inputs, at, src.seconds)}`);
    }
  };
  for (const l of order) walk(l.item);

  const deliver = () => {
    setBanked((b) => b + coins + bonus);
    setPop((p) => p + 1);
    setOrders((os) => os.map((o, i) => (i === active ? dealOrder() : o)));
  };
  const swap = () => setOrders((os) => os.map((o, i) => (i === active ? dealOrder() : o)));

  return (
    <div className="hh-board">
      <div className="hh-board__tabs" role="tablist" aria-label={t.boardTitle}>
        {orders.map((o, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            id={`hh-order-tab-${i}`}
            aria-selected={i === active}
            aria-controls="hh-order-panel"
            onClick={() => setActive(i)}
          >
            {t.orderTab(i + 1)}
          </button>
        ))}
      </div>

      <div className="hh-board__slip" id="hh-order-panel" role="tabpanel" aria-labelledby={`hh-order-tab-${active}`} data-ui>
        <p className="hh-board__label">{t.wants}</p>
        <ul className="hh-board__wants">
          {order.map((l) => (
            <li key={l.item}>
              <span>{ITEMS[l.item].name[locale]}</span>
              <span className="hh-dots" aria-hidden />
              <span>×{l.qty}</span>
            </li>
          ))}
        </ul>
        <p className="hh-board__label">{t.takes}</p>
        <ol className="hh-board__steps">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="hh-board__pay" aria-live="polite">
          <span>{t.pays}</span>
          <strong>
            {coins + bonus} {t.coins}
          </strong>
        </p>
        <p className="hh-board__fair">{weekend ? t.fairOn(bonus) : t.fairOff}</p>
      </div>

      <div className="hh-board__actions">
        <button type="button" className="hh-cell hh-cell--ink" onClick={deliver}>
          {t.deliver}
        </button>
        <button type="button" className="hh-cell" onClick={swap}>
          {t.another}
        </button>
      </div>
      <p className="hh-board__banked" aria-live="polite">
        <span key={pop} className="hh-board__coin" aria-hidden />
        {t.collected(banked)}
      </p>
    </div>
  );
}
