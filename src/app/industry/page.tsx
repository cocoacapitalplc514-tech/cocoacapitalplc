import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Industry",
  description:
    "Ghana's cocoa value chain: production, aggregation, warehousing, processing, and export—and where capital makes the difference.",
};

const CHAIN = [
  {
    title: "Production",
    description:
      "Smallholder farms across the Ashanti, Western, and Eastern regions form the base of the value chain.",
  },
  {
    title: "Aggregation",
    description:
      "Licensed buying companies purchase, grade, and consolidate beans at the farm gate and district level.",
  },
  {
    title: "Warehousing",
    description:
      "Graded stock is stored and insured in approved facilities, becoming financeable collateral.",
  },
  {
    title: "Processing & Export",
    description:
      "Beans move to processors or to Tema and Takoradi ports for export to global markets.",
  },
];

export default function IndustryPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Industry"
        title="Ghana's cocoa value chain."
        description="Cocoa is a strategic national asset. Understanding each link in the chain is how we underwrite with confidence."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal x={-24}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-32">
              <Image
                src="/images/beans-drying.jpg"
                alt="Cocoa beans drying on raffia mats in rural Ghana"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ol className="space-y-12">
            {CHAIN.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} y={24}>
                <li className="border-t border-border pt-7">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    0{index + 1}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl text-cocoa lg:text-3xl">
                    {step.title}
                  </h2>
                  <p className="copy mt-3 text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </main>
  );
}
