import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FundingSolutions } from "@/components/sections/FundingSolutions";
import { EditorialBand } from "@/components/sections/EditorialBand";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Funding Solutions",
  description:
    "Working capital, warehouse finance, trade finance, and supply chain facilities for licensed buyers, aggregators, and exporters in Ghana.",
};

export default function FundingPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Funding Solutions"
        title="Capital that moves with the season."
        description="Financing facilities designed for the operational realities of Ghana's cocoa trade cycle—from farm gate to port."
      />
      <FundingSolutions />
      <EditorialBand
        image="/images/port-export.jpg"
        alt="Container vessel loading cocoa consignments at the port of Tema, Ghana"
        label="Farm gate to port"
        statement="From the warehouse floor in Kumasi to the quayside at Tema."
        caption="Facilities structured around the physical movement of cocoa—so capital is available exactly when the season demands it."
      />
      <CTA />
    </main>
  );
}
