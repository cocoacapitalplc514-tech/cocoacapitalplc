"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-cocoa"
      aria-labelledby="cta-heading"
    >
      <div
        className="adinkra-motif pointer-events-none absolute inset-0 text-gold/[0.05]"
        aria-hidden
      />
      <div className="container-site relative section-pad text-center">
        <Reveal y={24}>
          <h2
            id="cta-heading"
            className="mx-auto max-w-2xl heading-lg text-white text-balance"
          >
            Ready to Invest?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
            Speak with our Accra-based team about investment products or
            structured funding for your operations.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4">
            <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
              <Link href="/investments/how-to-invest">
                Invest With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/contact"
              className="tap-target group justify-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white sm:justify-start"
            >
              Speak to our team
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
