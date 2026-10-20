"use client";

// The words of a shared LingoWonders list, decoded in the browser from the URL
// fragment (it never reaches a server), with "Open in LingoWonders" and the
// store links. Degrades to a plain explanation with no or bad data.

import { useEffect, useState } from "react";
import {
  decodeShareFragment,
  segments,
  type ShareErrorKind,
  type SharedList,
} from "@/lib/share-list";

type Lang = "en" | "zh-cn" | "zh-tw";

const COPY = {
  en: {
    eyebrow: "LingoWonders",
    title: "A word list for LingoWonders",
    words: (n: number) => (n === 1 ? "1 word" : `${n} words`),
    open: "Open in LingoWonders",
    appStore: "Get LingoWonders on the App Store",
    playStore: "Get LingoWonders on Google Play",
    noApp: "Don’t have the app yet? Install it, then open this link again.",
    more: (n: number) => `+${n} more`,
    privacy: "The list is inside this link. Nothing was uploaded to a server.",
    loading: "Reading the list…",
    emptyTitle: "This is a LingoWonders list link",
    emptyBody:
      "Open it on a phone with LingoWonders to add the list. This link has no list in it; ask for it to be sent again.",
    errors: {
      notShare: "This doesn’t look like a LingoWonders list link. Ask for it to be sent again.",
      corrupt: "The link looks incomplete or damaged. Ask for it to be sent again.",
      unsupportedVersion: "This list was made with a newer LingoWonders. Update the app, then open it again.",
      tooLarge: "This list is too big to show here. Open it in the app.",
      invalid: "This list has something LingoWonders can’t read. Ask for it to be sent again.",
    } satisfies Record<ShareErrorKind, string>,
  },
  "zh-cn": {
    eyebrow: "LingoWonders",
    title: "一份 LingoWonders 词表",
    words: (n: number) => `${n} 个词`,
    open: "在 LingoWonders 中打开",
    appStore: "在 App Store 获取 LingoWonders",
    playStore: "在 Google Play 获取 LingoWonders",
    noApp: "还没有安装？先安装，再打开这个链接。",
    more: (n: number) => `还有 ${n} 个`,
    privacy: "词表就在这个链接里，没有上传到任何服务器。",
    loading: "正在读取词表……",
    emptyTitle: "这是一个 LingoWonders 词表链接",
    emptyBody: "在装有 LingoWonders 的手机上打开即可添加词表。这个链接里没有词表，请让对方重新发送。",
    errors: {
      notShare: "这看起来不是 LingoWonders 词表链接，请让对方重新发送。",
      corrupt: "链接似乎不完整或已损坏，请让对方重新发送。",
      unsupportedVersion: "这份词表由更新版本的 LingoWonders 制作。请更新应用后再打开。",
      tooLarge: "这份词表太大，无法在这里显示。请在应用中打开。",
      invalid: "这份词表有 LingoWonders 无法读取的内容，请让对方重新发送。",
    } satisfies Record<ShareErrorKind, string>,
  },
  "zh-tw": {
    eyebrow: "LingoWonders",
    title: "一份 LingoWonders 詞表",
    words: (n: number) => `${n} 個詞`,
    open: "在 LingoWonders 中開啟",
    appStore: "在 App Store 取得 LingoWonders",
    playStore: "在 Google Play 取得 LingoWonders",
    noApp: "還沒有安裝？先安裝，再開啟這個連結。",
    more: (n: number) => `還有 ${n} 個`,
    privacy: "詞表就在這個連結裡，沒有上傳到任何伺服器。",
    loading: "正在讀取詞表……",
    emptyTitle: "這是一個 LingoWonders 詞表連結",
    emptyBody: "在裝有 LingoWonders 的手機上開啟即可加入詞表。這個連結裡沒有詞表，請對方重新傳送。",
    errors: {
      notShare: "這看起來不是 LingoWonders 詞表連結，請對方重新傳送。",
      corrupt: "連結似乎不完整或已損壞，請對方重新傳送。",
      unsupportedVersion: "這份詞表由較新版本的 LingoWonders 製作。請更新 App 後再開啟。",
      tooLarge: "這份詞表太大，無法在這裡顯示。請在 App 中開啟。",
      invalid: "這份詞表有 LingoWonders 無法讀取的內容，請對方重新傳送。",
    } satisfies Record<ShareErrorKind, string>,
  },
} as const;

const PREVIEW_LIMIT = 30;

function pickLang(tag: string | undefined): Lang {
  const t = (tag ?? "").toLowerCase();
  if (t.startsWith("zh")) {
    return t.includes("tw") || t.includes("hk") || t.includes("mo") || t.includes("hant") ? "zh-tw" : "zh-cn";
  }
  return "en";
}

type State =
  | { phase: "loading" }
  | { phase: "empty" }
  | { phase: "error"; error: ShareErrorKind }
  | { phase: "ok"; list: SharedList };

export function ShareListView({
  appStoreUrl,
  playStoreUrl,
}: {
  appStoreUrl: string | null;
  playStoreUrl: string | null;
}) {
  const [fragment, setFragment] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [state, setState] = useState<State>({ phase: "loading" });

  useEffect(() => {
    setLang(pickLang(navigator.language));
    const read = () => setFragment(window.location.hash.replace(/^#/, ""));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  useEffect(() => {
    if (fragment === null) return;
    if (fragment === "") {
      setState({ phase: "empty" });
      return;
    }
    let cancelled = false;
    decodeShareFragment(fragment).then((r) => {
      if (cancelled) return;
      setState(r.ok ? { phase: "ok", list: r.list } : { phase: "error", error: r.error });
    });
    return () => {
      cancelled = true;
    };
  }, [fragment]);

  const t = COPY[lang];
  const openUrl = fragment ? `tracesheet://l#${fragment}` : "tracesheet://l";

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-6 py-12 sm:px-10">
      <span className="spec-label">{t.eyebrow}</span>

      {state.phase === "loading" && <p className="text-slate mt-6">{t.loading}</p>}

      {state.phase === "empty" && (
        <>
          <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl">{t.emptyTitle}</h1>
          <p className="text-slate mt-4">{t.emptyBody}</p>
        </>
      )}

      {state.phase === "error" && (
        <>
          <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl">{t.emptyTitle}</h1>
          <p className="text-slate mt-4" role="alert">
            {t.errors[state.error]}
          </p>
        </>
      )}

      {state.phase === "ok" && (
        <>
          <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl">{state.list.name}</h1>
          <p className="text-slate mt-2 text-sm">{t.words(state.list.items.length)}</p>
          <ul className="border-line mt-6 divide-y divide-[var(--color-line,#ddd)] rounded-2xl border">
            {state.list.items.slice(0, PREVIEW_LIMIT).map((item, i) => (
              <li key={i} className="px-5 py-3">
                <div className="text-lg">
                  {segments(item).map((seg, j) =>
                    seg.isTarget && item.targets.length > 0 ? (
                      <span key={j} className="underline decoration-2 underline-offset-4">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    ),
                  )}
                </div>
                {(item.pinyinOverride ?? item.pinyin) && item.itemKind !== "sentence" && (
                  <div className="text-slate text-sm">{item.pinyinOverride ?? item.pinyin}</div>
                )}
                {item.sentence && item.sentence !== item.text && (
                  <div className="text-slate text-sm">{item.sentence}</div>
                )}
              </li>
            ))}
          </ul>
          {state.list.items.length > PREVIEW_LIMIT && (
            <p className="text-slate mt-2 text-sm">{t.more(state.list.items.length - PREVIEW_LIMIT)}</p>
          )}
        </>
      )}

      {state.phase !== "loading" && (
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
          {state.phase === "ok" && (
            <a
              href={openUrl}
              className="border-line rounded-full border px-5 py-3 text-center text-sm font-semibold transition-colors hover:border-indigo hover:text-indigo-soft"
            >
              {t.open}
            </a>
          )}
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              className="border-line rounded-full border px-5 py-3 text-center text-sm transition-colors hover:border-indigo hover:text-indigo-soft"
            >
              {t.appStore}
            </a>
          )}
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              className="border-line rounded-full border px-5 py-3 text-center text-sm transition-colors hover:border-indigo hover:text-indigo-soft"
            >
              {t.playStore}
            </a>
          )}
        </div>
      )}

      {state.phase === "ok" && <p className="text-slate mt-4 text-sm">{t.noApp}</p>}
      {state.phase !== "loading" && <p className="text-slate mt-6 text-xs">{t.privacy}</p>}
    </main>
  );
}
