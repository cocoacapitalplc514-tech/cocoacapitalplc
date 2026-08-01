import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(eyebrow || align === "center") && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="gold-rule" aria-hidden />
          {eyebrow && (
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.2em]",
                light ? "text-gold" : "text-[#9a7528]"
              )}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "heading-lg text-balance",
          light ? "text-white" : "text-cocoa"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base font-medium leading-relaxed md:text-lg",
            light ? "text-white/90" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
