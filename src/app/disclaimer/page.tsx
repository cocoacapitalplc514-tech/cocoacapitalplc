import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LEGAL_DISCLAIMER, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Website disclaimer for Cocoa Capital PLC.",
};

export default function DisclaimerPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>{LEGAL_DISCLAIMER}</p>
          <p>
            Securities are offered solely pursuant to the Programme Prospectus
            and the Applicable Pricing Supplement, and only in jurisdictions
            where such offers are lawful. In the event of any inconsistency
            between website content and those documents, the approved offer
            documents prevail.
          </p>
          <p>
            {SITE.name} is a special-purpose vehicle established to issue
            securities for approved cocoa-sector financing purposes. It does not
            accept deposits, manage investments on behalf of any person, act as
            an investment adviser or fund manager, or provide funding solutions
            to customers. It gives no personalised investment advice and no
            assurance as to the performance or returns of any security.
          </p>
          <p>
            Prospective investors should obtain independent professional advice
            appropriate to their own circumstances before making any investment
            decision.
          </p>
          <p>
            Content on this website may be updated or withdrawn without notice.
            Links to external websites are provided for convenience only;{" "}
            {SITE.name} accepts no responsibility for their content.
          </p>
        </div>
      </section>
    </main>
  );
}
