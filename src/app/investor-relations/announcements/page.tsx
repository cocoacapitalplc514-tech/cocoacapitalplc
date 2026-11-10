import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeList } from "@/components/news/NoticeList";
import { ANNOUNCEMENTS } from "@/data/announcements";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Investor and corporate announcements from Cocoa Capital PLC.",
};

export default function AnnouncementsPage() {
  const items = [...ANNOUNCEMENTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Announcements"
        description="Issuance notices, payment notices and corporate announcements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Announcements" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <NoticeList
            items={items}
            emptyTitle="No investor announcements have been released."
            emptyDescription="Issuance notices, payment notices and corporate announcements will appear here when published."
          />
        </div>
      </section>
    </main>
  );
}
