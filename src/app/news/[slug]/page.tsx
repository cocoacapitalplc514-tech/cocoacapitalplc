import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentViewer } from "@/components/documents/DocumentViewer";
import { NEWS, getNewsBySlug } from "@/data/news";
import { ANNOUNCEMENTS, getAnnouncementBySlug } from "@/data/announcements";
import { formatPublishedDate, statusLabel } from "@/lib/format";
import type { DocumentReference } from "@/data/types";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = [
    ...NEWS.map((n) => n.slug),
    ...ANNOUNCEMENTS.map((a) => a.slug),
  ];
  if (!slugs.length) return [{ slug: "_placeholder" }];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug) ?? getAnnouncementBySlug(slug);
  if (!item) return { title: "News" };
  return { title: item.title, description: item.summary };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_placeholder") notFound();
  const item = getNewsBySlug(slug) ?? getAnnouncementBySlug(slug);
  if (!item) notFound();

  const attachment: DocumentReference | undefined =
    "attachments" in item
      ? item.attachments?.find((doc) => doc.fileUrl)
      : undefined;

  return (
    <main id="main-content">
      <PageHero
        eyebrow={statusLabel(item.category)}
        title={item.title}
        description={formatPublishedDate(item.date)}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: item.title },
        ]}
      />
      <section className="section-pad bg-cream">
        <div
          className={
            attachment?.fileUrl
              ? "container-site max-w-5xl"
              : "container-site max-w-3xl"
          }
        >
          <p className="text-lg leading-relaxed text-muted">{item.summary}</p>
          {attachment?.fileUrl ? (
            <div className="mt-8">
              <DocumentViewer
                title={attachment.title}
                fileUrl={attachment.fileUrl}
              />
            </div>
          ) : (
            <div className="mt-8 whitespace-pre-wrap leading-relaxed text-muted">
              {item.body}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
