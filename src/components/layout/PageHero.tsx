import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  /** Section-level pages carry a contextual image; leaf pages stay plain. */
  image?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cocoa pt-[var(--header-h)] text-white">
      {image ? (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/92 to-cocoa/70" />
        </div>
      ) : (
        <div
          className="adinkra-motif pointer-events-none absolute inset-0 text-gold/[0.04]"
          aria-hidden
        />
      )}
      <div
        className={cn(
          "container-site relative",
          image ? "py-14 md:py-20 lg:py-24" : "py-10 sm:py-12 md:py-14 lg:py-16"
        )}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="heading-xl max-w-3xl text-balance text-white">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:mt-5 md:text-[1.0625rem]">
            {description}
          </p>
        )}
      </div>
      <div className="h-0.5 w-full bg-gold/80" aria-hidden />
    </section>
  );
}
