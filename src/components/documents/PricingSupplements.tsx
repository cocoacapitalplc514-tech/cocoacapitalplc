"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentTable } from "@/components/documents/DocumentTable";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import type { DocumentReference } from "@/data/types";

const SELECT =
  "h-11 border border-border bg-white px-3 text-sm text-cocoa focus:border-gold focus:outline-none";

export function PricingSupplements({ documents: all }: { documents: DocumentReference[] }) {
  const [year, setYear] = useState("all");
  const [instrument, setInstrument] = useState("all");

  const filtered = useMemo(
    () =>
      all.filter((doc) => {
        if (year !== "all" && String(doc.year) !== year) return false;
        if (instrument !== "all" && doc.instrument !== instrument) return false;
        return true;
      }),
    [all, year, instrument]
  );

  const years = Array.from(
    new Set(all.map((d) => d.year).filter(Boolean) as number[])
  ).sort((a, b) => b - a);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Pricing Supplements"
        description="The Applicable Pricing Supplement for each Series and Tranche, setting out its commercial terms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Pricing Supplements" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          {all.length === 0 ? (
            /* Filter controls over an empty library were pure furniture. */
            <PublicationNotice
              className="max-w-3xl"
              title="No Pricing Supplements have been released."
              description="Each Series and Tranche is governed by an Applicable Pricing Supplement. Supplements will be listed here, filterable by year and instrument, as they are issued."
            />
          ) : (
            <>
              <div className="flex flex-wrap gap-3">
                <label className="text-sm">
                  <span className="sr-only">Year</span>
                  <select
                    className={SELECT}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="all">All years</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm">
                  <span className="sr-only">Instrument</span>
                  <select
                    className={SELECT}
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                  >
                    <option value="all">All instruments</option>
                    <option value="commercial-paper">Commercial Paper</option>
                    <option value="bond">Bonds</option>
                  </select>
                </label>
              </div>
              <div className="mt-6">
                <DocumentTable
                  documents={filtered}
                  emptyTitle="No Pricing Supplements match these filters."
                  emptyDescription="Try clearing the year or instrument filter."
                />
              </div>
            </>
          )}

          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
