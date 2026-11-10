import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PROGRAMME } from "@/data/programme";

export const metadata: Metadata = {
  title: "About Cocoa Capital PLC",
  description:
    "Cocoa Capital PLC is a Ghanaian public company established as a financing special-purpose vehicle by COCOBOD.",
};

const RESPONSIBILITIES = [
  "Issues debt securities under the Note Issuance Programme",
  "Administers issue proceeds in accordance with the programme",
  "Holds and administers programme assets",
  "Manages relevant controlled accounts",
  "Pays amounts due under issued securities",
  "Meets related reporting and compliance obligations",
];

/**
 * Stated in the negative and in full, using the regulated terms. An SPV issuer
 * has to be unambiguous about the licensed activities it does not carry on.
 */
const EXCLUSIONS = [
  "Cocoa trader, buyer, exporter, processor or farmer",
  "Licensed Buying Company",
  "Investment adviser",
  "Fund manager or asset manager",
  "Deposit-taking institution",
  "Retail investment platform",
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Us"
        title="About Cocoa Capital PLC"
        description="A special-purpose vehicle established to raise financing for approved cocoa-sector funding requirements and to administer the related payment, reporting and compliance obligations."
        image="/images/warehouse-cocoa.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              Cocoa Capital PLC is a special-purpose vehicle (SPV) incorporated
              as a public limited company in Ghana. It was established by the
              Ghana Cocoa Board (COCOBOD), which is its sole shareholder and
              sponsor.
            </p>
            <p>
              Its principal object is to raise financing through the issuance of
              Commercial Paper and Bonds for approved cocoa-sector financing and
              refinancing purposes, and to administer the payment, reporting and
              compliance obligations arising under those securities. It carries
              on no other business.
            </p>
            <p>{PROGRAMME.summary}</p>
            <p>
              Governance authority rests with the Board of Directors. Day-to-day
              administration is performed by the Corporate Manager, and the
              programme is supported by advisers, agents and trustees.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="What Cocoa Capital does"
            title="Issuer responsibilities"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESPONSIBILITIES.map((item) => (
              <li
                key={item}
                className="border border-border bg-cream px-5 py-5 text-sm leading-relaxed text-cocoa"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="What Cocoa Capital is not"
            title="Issuer distinction"
            description="Cocoa Capital PLC is a securities issuer. It does not carry on any of the following activities, and holds no licence or authorisation to do so."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXCLUSIONS.map((item) => (
              <li
                key={item}
                className="border-l-2 border-gold bg-white px-5 py-4 text-sm text-cocoa"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl leading-relaxed text-muted">
            Cocoa Capital PLC does not accept deposits, manage personal
            investments, provide investment advice or funding solutions,
            guarantee investment returns, or offer securities other than through
            approved offer documentation. It does not solicit investment outside
            approved securities offerings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="default">
              <Link href="/about/mandate">Our Mandate</Link>
            </Button>
            <Button asChild variant="outline-cocoa">
              <Link href="/investor-relations/programme">The Programme</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
