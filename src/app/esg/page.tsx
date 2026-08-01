import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ESG } from "@/components/sections/ESG";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "ESG & Responsible Finance",
  description:
    "How Cocoa Capital PLC assesses environmental, social, and governance factors across every capital deployment.",
};

export default function ESGPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Sustainability"
        title="Capital with conscience."
        description="Every deployment is assessed through an environmental, social, and governance lens—because enduring value requires responsible stewardship."
      />
      <ESG />
      <CTA />
    </main>
  );
}
