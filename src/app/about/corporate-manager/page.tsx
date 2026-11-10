import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Corporate Manager",
  description:
    "KPMG acts as Corporate Manager of Cocoa Capital PLC, providing administrative services under the programme.",
};

const RESPONSIBILITIES = [
  "Corporate administration support",
  "Coordination with programme parties",
  "Support for reporting and compliance processes",
  "Administrative correspondence handling",
];

export default function CorporateManagerPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="Corporate Manager"
        description="KPMG is the Corporate Manager of Cocoa Capital PLC, providing administrative support to the issuer."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Corporate Manager" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              KPMG acts as Corporate Manager for Cocoa Capital PLC. In that
              capacity, it supports day-to-day administration of the issuer in
              accordance with the programme and applicable corporate
              requirements.
            </p>
            <p>
              The Corporate Manager is not the owner, sponsor or investor in
              Cocoa Capital PLC. COCOBOD remains the sole shareholder and
              sponsor. Governance authority rests with the Board of Directors of
              the issuer.
            </p>
          </div>
          <h2 className="mt-10 font-serif text-xl text-cocoa">
            Administrative responsibilities
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {RESPONSIBILITIES.map((item) => (
              <li
                key={item}
                className="border border-border bg-white px-5 py-4 text-sm text-cocoa"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
