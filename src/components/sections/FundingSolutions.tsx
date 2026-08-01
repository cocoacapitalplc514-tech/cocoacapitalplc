"use client";

import { FUNDING_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function FundingSolutions() {
  return (
    <section
      className="section-pad bg-cream"
      aria-labelledby="funding-solutions"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="Funding Solutions"
            description="End-to-end financing facilities designed for the operational realities of Ghana's cocoa trade cycle."
          />
        </Reveal>

        <div className="relative mt-9 max-w-4xl mx-auto sm:mt-12 md:mt-16">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-gold/30 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-14">
            {FUNDING_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal
                  key={step.title}
                  delay={index * 0.1}
                  x={isEven ? -28 : 28}
                >
                  <li className="relative grid gap-4 md:grid-cols-2 md:gap-12">
                    <div
                      className={`pl-12 md:pl-0 ${
                        isEven
                          ? "md:pr-12 md:text-right"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 font-serif text-2xl text-cocoa md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="copy mt-3 text-muted">
                        {step.description}
                      </p>
                    </div>

                    <span
                      className="absolute left-4 top-1 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-cream md:left-1/2"
                      aria-hidden
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
