"use client";

import Link from "next/link";
import {
  FileText,
  ScrollText,
  Lock,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { INVESTMENT_PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const ICONS = {
  "file-text": FileText,
  "scroll-text": ScrollText,
  lock: Lock,
  briefcase: Briefcase,
} as const;

export function InvestmentCards() {
  return (
    <section
      className="section-pad bg-white"
      aria-labelledby="investment-products"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="Investment Products"
            description="A curated suite of instruments engineered for institutional and qualified investors seeking cocoa-sector exposure."
          />
        </Reveal>

        <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 md:mt-14 md:grid-cols-2">
          {INVESTMENT_PRODUCTS.map((product, index) => {
            const Icon = ICONS[product.icon as keyof typeof ICONS];
            return (
              <Reveal key={product.title} delay={index * 0.08} y={40}>
                <article className="group relative overflow-hidden rounded-2xl border border-border bg-cream/40 p-6 transition-all sm:p-8 duration-300 hover:border-gold/40 hover:shadow-elevated md:p-10">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-white">
                      <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-cocoa md:text-3xl">
                      {product.title}
                    </h3>
                    <p className="copy mt-4 max-w-md text-muted">
                      {product.description}
                    </p>
                    <Link
                      href={product.href}
                      className="tap-target mt-5 gap-2 text-sm font-medium text-gold transition-all group-hover:gap-3 md:mt-8"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
