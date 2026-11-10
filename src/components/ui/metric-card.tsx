import { cn } from "@/lib/utils";
import { formatMetric } from "@/lib/format";

type MetricCardProps = {
  label: string;
  value: string | null;
  detail?: string;
  className?: string;
};

export function MetricCard({ label, value, detail, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "border border-border border-t-2 border-t-gold/70 bg-white px-6 py-6 md:px-7",
        className
      )}
    >
      <p className="label text-forest">{label}</p>
      <p className="mt-3 font-serif text-2xl text-cocoa md:text-[1.75rem]">
        {formatMetric(value)}
      </p>
      {detail && <p className="mt-2 text-sm text-muted">{detail}</p>}
    </div>
  );
}
