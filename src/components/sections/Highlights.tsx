"use client";

import Link from "next/link";
import { Wheat, BarChart3, Landmark, HeartHandshake, ArrowRight } from "lucide-react";
import { HIGHLIGHTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const ICONS = {
  wheat: Wheat,
  "bar-chart": BarChart3,
  landmark: Landmark,
  "heart-handshake": HeartHandshake,
} as const;

export function Highlights() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="highlights-heading">
      <div className="container-site grid items-start gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <Reveal x={-24}>
          <div className="lg:sticky lg:top-32">
            <span className="gold-rule mb-6 block" aria-hidden />
            <h2 id="highlights-heading" className="heading-lg text-cocoa">
              Investment Highlights
            </h2>
            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-muted md:text-lg">
              Disciplined exposure to one of West Africa&apos;s most
              strategically important commodities.
            </p>
            <Button asChild variant="forest" size="lg" className="mt-9">
              <Link href="/about">
                Why Invest With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={index * 0.08} y={24}>
                <div className="h-full bg-cream p-5 transition-colors sm:p-7 duration-300 hover:bg-white lg:p-8">
                  <Icon
                    className="h-5 w-5 text-gold"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h3 className="mt-5 font-serif text-xl text-cocoa">
                    {item.title}
                  </h3>
                  <p className="copy mt-2.5 text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
