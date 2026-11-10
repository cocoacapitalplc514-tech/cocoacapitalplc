import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CORPORATE_STRUCTURE } from "@/data/partners";

export const metadata: Metadata = {
  title: "Corporate Structure",
  description:
    "COCOBOD is sole shareholder and sponsor of Cocoa Capital PLC, with KPMG as Corporate Manager.",
};

export default function CorporateStructurePage() {
  const { sponsor, issuer, corporateManager } = CORPORATE_STRUCTURE;

  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="Corporate Structure"
        description="Ownership and management relationships under the programme. Service providers are not subsidiaries of the issuer."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Corporate Structure" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-2xl">
          <ol className="space-y-0">
            {[sponsor, issuer, corporateManager].map((node, index, arr) => (
              <li key={node.name} className="relative flex gap-5 pb-8 last:pb-0">
                {index < arr.length - 1 && (
                  <span
                    className="absolute bottom-0 left-[15px] top-9 w-px bg-border"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold bg-white text-xs font-semibold text-cocoa">
                  {index + 1}
                </span>
                <div className="grow border border-border bg-white px-5 py-4">
                  <p className="label text-forest">{node.role}</p>
                  <p className="mt-2 font-serif text-xl text-cocoa">
                    {node.name}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/*
            The full programme-party list lives on one page. This used to repeat
            all seven groups here as well.
          */}
          <p className="mt-10 text-sm text-muted">
            The programme is supported by advisers, agents and managers.{" "}
            <Link
              href="/about/programme-parties"
              className="font-medium text-forest underline-offset-4 hover:underline"
            >
              View programme parties
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
