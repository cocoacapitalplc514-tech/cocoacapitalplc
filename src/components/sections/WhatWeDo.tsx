"use client";

import Link from "next/link";
import { TrendingUp, Building2, Layers, ArrowRight } from "lucide-react";
import { HOME_PILLARS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const ICONS = {
  "trending-up": TrendingUp,
  building: Building2,
  layers: Layers,
} as const;

export function WhatWeDo() {
  return (
    <section className="section-pad bg-white" aria-labelledby="what-we-do">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="What We Do"
            description="Three ways we serve investors and the cocoa value chain."
          />
        </Reveal>

        <div className="mt-9 grid gap-8 sm:mt-12 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {HOME_PILLARS.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={index * 0.1} y={32}>
                <Link
                  href={item.href}
                  className="group block h-full border-t border-border pt-8 transition-colors hover:border-gold"
                >
                  <Icon
                    className="h-6 w-6 text-gold"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h3 className="mt-6 font-serif text-2xl text-cocoa lg:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="copy mt-3 text-muted">
                    {item.description}
                  </p>
                  <span className="tap-target mt-4 gap-2 text-sm font-medium text-cocoa transition-colors group-hover:text-forest md:mt-6">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
