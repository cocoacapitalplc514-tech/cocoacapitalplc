import Link from "next/link";
import { SECURITIES_NOTICE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Securities notice for pages carrying issuance or offer terms. The standing
 * site-wide disclaimer lives in the footer — this is not a second copy of it.
 */
export function LegalDisclaimer({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "border-l-2 border-gold bg-soft-grey px-6 py-6 md:px-7",
        className
      )}
      aria-label="Important notice to investors"
    >
      <h2 className="label font-sans text-forest">Important notice</h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">
        {SECURITIES_NOTICE}
      </p>
      <p className="mt-3 text-xs">
        <Link
          href="/disclaimer"
          className="text-forest underline-offset-2 hover:underline"
        >
          Read the full website disclaimer
        </Link>
      </p>
    </aside>
  );
}
