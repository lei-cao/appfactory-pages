import type { AppContent } from "@/content/apps";

function Badge({
  href,
  eyebrow,
  label,
}: {
  href?: string;
  eyebrow: string;
  label: string;
}) {
  const inner = (
    <>
      <span className="spec-label !text-[0.55rem]">{eyebrow}</span>
      <span className="text-sm font-medium">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="border-line bg-panel flex flex-col items-start gap-0.5 rounded-xl border px-5 py-2.5 transition-colors hover:border-indigo"
      >
        {inner}
      </a>
    );
  }
  return (
    <span
      className="border-line flex flex-col items-start gap-0.5 rounded-xl border border-dashed px-5 py-2.5 opacity-80"
      title="Not yet available"
    >
      {inner}
    </span>
  );
}

export function StoreBadges({ app }: { app: AppContent }) {
  return (
    <div className="flex flex-wrap gap-3">
      {app.platforms.includes("iOS") && (
        <Badge
          href={app.appStoreUrl}
          eyebrow={app.appStoreUrl ? "download on the" : "coming soon to the"}
          label="App Store"
        />
      )}
      {app.platforms.includes("Android") && (
        <Badge
          href={app.playStoreUrl}
          eyebrow={app.playStoreUrl ? "get it on" : "coming soon to"}
          label="Google Play"
        />
      )}
    </div>
  );
}
