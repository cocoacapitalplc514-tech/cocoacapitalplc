import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { getDocumentsByType } from "@/data/documents";

export const metadata: Metadata = {
  title: "Financial Statements",
  description: "Annual and interim financial statements of Cocoa Capital PLC.",
};

export default function FinancialStatementsPage() {
  const statements = getDocumentsByType("financial-statement");
  const byYear = statements.reduce<Record<number, typeof statements>>(
    (acc, doc) => {
      const year = doc.year ?? 0;
      if (!acc[year]) acc[year] = [];
      acc[year].push(doc);
      return acc;
    },
    {}
  );
  const years = Object.keys(byYear)
    .map(Number)
    .filter((y) => y > 0)
    .sort((a, b) => b - a);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Financial Statements"
        description="Audited and interim statements of the issuer, grouped by financial year."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Financial Statements" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          {years.length === 0 ? (
            <PublicationNotice
              className="max-w-3xl"
              title="No financial statements have been released."
              description="Audited and interim statements will be listed here by financial year once published by the issuer."
            />
          ) : (
            <div className="space-y-10">
              {years.map((year) => (
                <div key={year}>
                  <h2 className="font-serif text-2xl text-cocoa">{year}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {byYear[year].map((doc) => (
                      <DocumentCard key={doc.id} document={doc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
