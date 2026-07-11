import type { AppStatus } from "@/content/apps";

const STATUS_COLOR: Record<AppStatus, string> = {
  building: "text-indigo-soft",
  testflight: "text-indigo-soft",
  "in-review": "text-review",
  live: "text-live",
};

// Statuses still moving through the line get a breathing light.
const STATUS_PULSE: Record<AppStatus, boolean> = {
  building: true,
  testflight: true,
  "in-review": true,
  live: false,
};

export function StatusBadge({
  status,
  label,
}: {
  status: AppStatus;
  label: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${STATUS_COLOR[status]}`}>
      <span
        className="status-light bg-current"
        data-pulse={STATUS_PULSE[status]}
        aria-hidden
      />
      <span className="spec-label !text-current">{label}</span>
    </span>
  );
}
