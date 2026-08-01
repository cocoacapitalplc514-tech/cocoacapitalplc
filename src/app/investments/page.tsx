import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { InvestmentCards } from "@/components/sections/InvestmentCards";
import { Highlights } from "@/components/sections/Highlights";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Cocoa bonds, commercial paper, private placements, and institutional mandates structured around Ghana's cocoa value chain.",
};

export default function InvestmentsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investments"
        title="Instruments built on a national commodity."
        description="A curated suite of products for institutional and qualified investors seeking disciplined exposure to Ghana's cocoa economy."
      />
      <InvestmentCards />
      <EditorialBand
        image="/images/farmers-cocoa.jpg"
        alt="Ghanaian cocoa farmers inspecting freshly harvested pods on their plantation"
        label="Where the yield begins"
        statement="Every instrument we issue traces back to a farm gate in Ghana."
        caption="Returns are underwritten against real production, real collateral, and relationships built across the Ashanti and Western regions."
      />
      <Highlights />
      <CTA />
    </main>
  );
}
