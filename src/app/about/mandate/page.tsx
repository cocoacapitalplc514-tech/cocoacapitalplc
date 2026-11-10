import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Our Mandate",
  description:
    "Cocoa Capital PLC raises capital, issues debt securities and supports approved cocoa financing and refinancing.",
};

const STEPS = [
  { title: "Raise capital", detail: "Access domestic capital markets" },
  { title: "Issue debt securities", detail: "Commercial Paper and Bonds" },
  {
    title: "Support approved cocoa financing",
    detail: "Cocoa purchase financing via Commercial Paper proceeds",
  },
  {
    title: "Refinance approved obligations",
    detail: "Bond proceeds for approved COCOBOD legacy refinancing",
  },
];

export default function MandatePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="Our Mandate"
        description="Raise capital through debt securities to support approved cocoa-sector financing and refinancing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Mandate" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <ol className="max-w-2xl space-y-0">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {index < STEPS.length - 1 && (
                  <span
                    className="absolute bottom-0 left-[15px] top-9 w-px bg-border"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cocoa text-sm font-medium text-white">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-serif text-xl text-cocoa">{step.title}</h2>
                  <p className="mt-1 text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
