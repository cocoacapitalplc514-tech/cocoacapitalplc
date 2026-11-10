import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentTable } from "@/components/documents/DocumentTable";
import { getDocumentsByType } from "@/data/documents";

export const metadata: Metadata = {
  title: "Investor Presentations",
  description: "Investor presentations for Cocoa Capital PLC.",
};

export default function PresentationsPage() {
  const docs = getDocumentsByType("investor-presentation");

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Investor Presentations"
        description="Materials prepared for investors and market participants."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Presentations" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <DocumentTable
            documents={docs}
            emptyTitle="No investor presentations have been released."
            emptyDescription="Presentations will be listed here once published by the issuer."
          />
        </div>
      </section>
    </main>
  );
}
