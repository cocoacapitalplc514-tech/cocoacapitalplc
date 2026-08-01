import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WhyCocoaCapital } from "@/components/sections/WhyCocoaCapital";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cocoa Capital PLC combines deep cocoa-sector expertise with the discipline of a regulated investment institution in Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Us"
        title="An investment house rooted in Ghana."
        description="We combine deep cocoa-sector knowledge with institutional governance, underwriting discipline, and transparent reporting."
      />
      <Stats />
      <WhyCocoaCapital />
      <CTA />
    </main>
  );
}
