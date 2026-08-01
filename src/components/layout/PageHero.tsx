type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section
      data-dark-hero
      className="relative overflow-hidden bg-cocoa pt-[var(--nav-h)] text-white"
    >
      <div
        className="adinkra-motif pointer-events-none absolute inset-0 text-gold/[0.05]"
        aria-hidden
      />
      <div className="container-site relative py-12 sm:py-16 md:py-28 lg:py-32">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gold md:mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="heading-xl max-w-3xl text-white text-balance">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:mt-7 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
