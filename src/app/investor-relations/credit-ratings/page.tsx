import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { Button } from "@/components/ui/button";
import { RATINGS } from "@/data/ratings";
import { formatPublishedDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Credit Ratings",
  description:
    "Credit rating information for Cocoa Capital PLC and its Note Issuance Programme.",
};

export default function CreditRatingsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Credit Ratings"
        description="Ratings are published only when confirmed by the appointed rating agency."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Credit Ratings" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          {RATINGS.length === 0 ? (
            <PublicationNotice
              className="max-w-3xl"
              title="No credit rating has been assigned to the Programme."
              description="Beacon Ratings is the credit rating agency for the programme. The rating, outlook and supporting report will be published here once issued."
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {RATINGS.map((rating) => (
                <article
                  key={rating.id}
                  className="border border-border bg-white px-6 py-6"
                >
                  <p className="label text-forest">{rating.agency}</p>
                  <p className="mt-3 font-serif text-3xl text-cocoa">
                    {rating.rating ?? "Not yet published"}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Outlook: {rating.outlook ?? "Not yet published"}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Date: {formatPublishedDate(rating.ratingDate)}
                  </p>
                  {rating.reportUrl && (
                    <Button
                      asChild
                      variant="outline-cocoa"
                      size="sm"
                      className="mt-4"
                    >
                      <a
                        href={rating.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download rating report
                      </a>
                    </Button>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
