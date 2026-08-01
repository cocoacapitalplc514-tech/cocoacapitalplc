import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Highlights } from "@/components/sections/Highlights";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { NewsSection } from "@/components/sections/NewsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTA } from "@/components/sections/CTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Financing Ghana's Cocoa Future`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <WhatWeDo />
      <Highlights />
      <EditorialBand
        image="/images/warehouse-cocoa.jpg"
        alt="Jute sacks of graded cocoa stacked in an approved Ghanaian warehouse"
        label="Collateral you can stand in"
        statement="Real beans. Real warehouses. Real cash flows."
        caption="Our facilities are secured against graded, insured cocoa stocks—not abstractions."
      />
      <NewsSection />
      <TrustStrip />
      <CTA />
    </main>
  );
}
