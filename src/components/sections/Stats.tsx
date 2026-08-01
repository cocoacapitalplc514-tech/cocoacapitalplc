"use client";

import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-forest text-white"
      aria-label="Key performance statistics"
    >
      <div
        className="adinkra-motif pointer-events-none absolute inset-0 text-white/[0.04]"
        aria-hidden
      />
      <div className="container-site relative py-10 sm:py-12 md:py-16">
        {/* Two-up on phones: four stacked stats would be a lot of scrolling for
            what is meant to read as a single glanceable band. */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-0">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} y={20}>
              <div className="relative px-0 lg:px-8">
                {index > 0 && (
                  <span
                    className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/15 lg:block"
                    aria-hidden
                  />
                )}
                <p className="font-serif text-[1.75rem] leading-none text-gold sm:text-4xl md:text-[42px]">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-white/85 sm:mt-3 sm:max-w-[15rem]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
