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
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "label mb-3 font-sans",
            light ? "text-gold" : "text-forest"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "heading-lg text-balance",
          light ? "text-white" : "text-cocoa"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "gold-rule mt-5",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-5 copy max-w-2xl leading-relaxed",
            light ? "text-white/80" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
