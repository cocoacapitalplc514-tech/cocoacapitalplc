import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PartnerGroup } from "@/components/partners/PartnerGroup";
import { PROGRAMME_PARTIES } from "@/data/partners";

export const metadata: Metadata = {
  title: "Programme Parties",
  description:
    "Institutional parties to the Cocoa Capital PLC Note Issuance Programme.",
};

export default function ProgrammePartiesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="Programme Parties"
        description="Service providers and advisers to the programme, grouped by responsibility."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Programme Parties" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <PartnerGroup parties={PROGRAMME_PARTIES} />
        </div>
      </section>
    </main>
  );
}
