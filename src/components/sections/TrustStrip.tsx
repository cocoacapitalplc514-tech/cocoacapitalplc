"use client";

import { TRUST_SIGNALS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function TrustStrip() {
  return (
    <section className="bg-cream pb-4" aria-label="Corporate credentials">
      <div className="container-site">
        <div className="chapter-rule" aria-hidden />
        <Reveal y={16}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-10 md:gap-x-14">
            {TRUST_SIGNALS.map((signal) => (
              <li
                key={signal}
                className="label text-cocoa/75"
              >
                {signal}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="chapter-rule" aria-hidden />
      </div>
    </section>
  );
}
