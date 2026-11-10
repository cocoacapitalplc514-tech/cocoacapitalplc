import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { IssuanceTable } from "@/components/issuance/IssuanceTable";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import { ISSUANCES } from "@/data/issuances";

export const metadata: Metadata = {
  title: "Current Issuances",
  description:
    "List of Commercial Paper and Bond issuances under the Cocoa Capital PLC programme.",
};

export default function IssuancesPage() {
  const cp = ISSUANCES.filter((i) => i.instrumentType === "commercial-paper");
  const bonds = ISSUANCES.filter((i) => i.instrumentType === "bond");

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Current Issuances"
        description="Notes issued under the Programme in Series and Tranches, with commercial terms drawn from each Applicable Pricing Supplement."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Current Issuances" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          {ISSUANCES.length === 0 ? (
            /* One notice, not two empty tables under two headings. */
            <PublicationNotice
              className="max-w-3xl"
              title="No Notes have been issued under the Programme."
              description="Commercial Paper and Bond issuances will be listed here — with series, issue and maturity dates, amounts, rates and status — as each Series and Tranche is issued."
            />
          ) : (
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl text-cocoa">
                  Commercial Paper
                </h2>
                <div className="mt-5">
                  <IssuanceTable
                    issuances={cp}
                    emptyTitle="No Commercial Paper issuances are currently published."
                  />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-cocoa">Bonds</h2>
                <div className="mt-5">
                  <IssuanceTable
                    issuances={bonds}
                    emptyTitle="No Bond issuances are currently published."
                  />
                </div>
              </div>
            </div>
          )}

          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
