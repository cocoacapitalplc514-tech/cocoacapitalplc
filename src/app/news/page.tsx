import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeList } from "@/components/news/NoticeList";
import { NEWS } from "@/data/news";
import { ANNOUNCEMENTS } from "@/data/announcements";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Issuance announcements, investor notices and corporate news from Cocoa Capital PLC.",
};

export default function NewsPage() {
  const items = [...NEWS, ...ANNOUNCEMENTS].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <main id="main-content">
      <PageHero
        eyebrow="News"
        title="News & Announcements"
        description="Issuance announcements, investor notices, payment notices and corporate communications."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <NoticeList
            items={items}
            emptyTitle="No news or announcements have been released."
            emptyDescription="Official communications from Cocoa Capital PLC will appear here when published."
          />
        </div>
      </section>
    </main>
  );
}
