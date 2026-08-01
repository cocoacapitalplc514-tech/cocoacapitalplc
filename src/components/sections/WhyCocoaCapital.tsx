"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WHY_REASONS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function WhyCocoaCapital() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="why-heading">
      <div className="container-site grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal x={-24}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/boardroom-accra.jpg"
              alt="Cocoa Capital executives reviewing portfolio documents in the Accra boardroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal x={24}>
          <div>
            <span className="gold-rule mb-6 block" aria-hidden />
            <h2 id="why-heading" className="heading-lg text-cocoa">
              Why Cocoa Capital
            </h2>
            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-muted">
              Built for permanence. We pair deep cocoa-sector expertise with the
              discipline of a regulated investment institution.
            </p>
            <ul className="mt-10 space-y-6">
              {WHY_REASONS.map((reason) => (
                <li key={reason.title} className="flex gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-sans text-base font-semibold tracking-normal text-cocoa">
                      {reason.title}
                    </h3>
                    <p className="copy mt-1.5 text-muted">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
