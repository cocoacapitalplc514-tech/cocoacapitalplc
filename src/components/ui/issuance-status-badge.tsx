import { cn } from "@/lib/utils";
import { statusLabel } from "@/lib/format";
import type { IssuanceStatus } from "@/data/types";

const STATUS_STYLES: Record<IssuanceStatus, string> = {
  upcoming: "bg-soft-grey text-cocoa",
  open: "bg-forest/10 text-forest",
  closed: "bg-border/60 text-muted",
  outstanding: "bg-cocoa/10 text-cocoa",
  matured: "bg-soft-grey text-muted",
  redeemed: "bg-soft-grey text-muted",
};

export function IssuanceStatusBadge({ status }: { status: IssuanceStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium",
        STATUS_STYLES[status]
      )}
    >
      {statusLabel(status)}
    </span>
  );
}
