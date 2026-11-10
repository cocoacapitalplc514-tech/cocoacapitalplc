import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DirectorGrid } from "@/components/about/DirectorCard";
import { DIRECTORS } from "@/data/directors";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Board of Directors of Cocoa Capital PLC, including the Chairman, Non-Executive Directors, nominating parties and director profiles.",
};

export default function BoardPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="Board of Directors"
        description="Governance authority for Cocoa Capital PLC rests with its Board of Directors, comprising the Chairman and four Non-Executive Directors."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Board of Directors" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <DirectorGrid directors={DIRECTORS} />
        </div>
      </section>
    </main>
  );
}
