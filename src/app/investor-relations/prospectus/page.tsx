import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentViewer } from "@/components/documents/DocumentViewer";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import { getProspectus, formatDocumentDate } from "@/data/documents";
import { PUBLICATION } from "@/data/site-settings";

export async function generateMetadata(): Promise<Metadata> {
  if (!PUBLICATION.prospectus) notFound();
  return {
    title: "Programme Prospectus",
    description:
      "Programme Prospectus for the Cocoa Capital PLC Note Issuance Programme.",
  };
}

export default function ProspectusPage() {
  if (!PUBLICATION.prospectus) notFound();
  const prospectus = getProspectus();

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Programme Prospectus"
        description="The primary disclosure document for the Note Issuance Programme. It sets out the terms of the Programme and prevails over website content."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Prospectus" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div
          className={
            prospectus?.fileUrl
              ? "container-site max-w-5xl"
              : "container-site max-w-3xl"
          }
        >
          {prospectus?.fileUrl ? (
            <div>
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="label text-forest">Date</dt>
                  <dd className="mt-1 text-cocoa">
                    {formatDocumentDate(prospectus.publicationDate)}
                  </dd>
                </div>
                <div>
                  <dt className="label text-forest">File size</dt>
                  <dd className="mt-1 text-cocoa">
                    {prospectus.fileSize ?? "—"}
                  </dd>
                </div>
              </dl>
              {prospectus.description && (
                <p className="mt-6 leading-relaxed text-muted">
                  {prospectus.description}
                </p>
              )}
              <div className="mt-8">
                <DocumentViewer
                  title={prospectus.title}
                  fileUrl={prospectus.fileUrl}
                />
              </div>
            </div>
          ) : (
            <PublicationNotice
              title="The Programme Prospectus has not been released."
              description="The official PDF, its issue date and download links will appear on this page once the issuer publishes the document."
            />
          )}

          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
