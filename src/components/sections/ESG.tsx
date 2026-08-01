"use client";

import Image from "next/image";
import { TreePine, Users, Scale } from "lucide-react";
import { ESG_PILLARS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const ICONS = {
  "tree-pine": TreePine,
  users: Users,
  scale: Scale,
} as const;

export function ESG() {
  return (
    <section className="section-pad bg-white" aria-labelledby="esg-heading">
      <div className="container-site">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-24}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/esg-agroforestry.jpg"
                alt="Young cocoa seedlings growing under shade trees on a Ghanaian agroforestry farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-2xl text-white md:text-3xl">
                Shade-grown. Deforestation-free.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                align="left"
                title="ESG & Responsible Finance"
                description="Our ESG framework shapes underwriting, monitoring, and reporting across the entire portfolio."
              />
            </Reveal>

            <div className="mt-10 space-y-5">
              {ESG_PILLARS.map((pillar, index) => {
                const Icon = ICONS[pillar.icon as keyof typeof ICONS];
                return (
                  <Reveal key={pillar.title} delay={index * 0.1} y={28}>
                    <article className="flex gap-5 rounded-xl border border-border bg-cream/50 p-5 transition-shadow duration-300 hover:shadow-soft">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-white">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-cocoa">
                          {pillar.title}
                        </h3>
                        <p className="copy mt-2 text-muted">
                          {pillar.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
