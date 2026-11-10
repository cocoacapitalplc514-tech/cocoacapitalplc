import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <article
      className={cn(
        "border border-border border-t-2 border-t-gold/70 bg-white px-6 py-6 md:px-7",
        className
      )}
    >
      <h3 className="font-serif text-xl text-cocoa md:text-[1.375rem]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
        {description}
      </p>
    </article>
  );
}
