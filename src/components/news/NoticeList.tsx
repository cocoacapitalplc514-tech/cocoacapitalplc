import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Announcement, NewsArticle } from "@/data/types";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { formatPublishedDate, statusLabel } from "@/lib/format";

type Item = Announcement | NewsArticle;

type NoticeListProps = {
  items: Item[];
  emptyTitle: string;
  emptyDescription?: string;
};

/**
 * Shared renderer for dated notices. The News and Announcements pages had two
 * copies of this markup that had already drifted apart.
 */
export function NoticeList({
  items,
  emptyTitle,
  emptyDescription,
}: NoticeListProps) {
  if (!items.length) {
    return (
      <PublicationNotice title={emptyTitle} description={emptyDescription} />
    );
  }

  return (
    <ul className="divide-y divide-border border border-border bg-white">
      {items.map((item) => (
        <li key={item.id} className="px-5 py-5 md:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <time dateTime={item.date}>{formatPublishedDate(item.date)}</time>
            <span aria-hidden>·</span>
            <span>{statusLabel(item.category)}</span>
            {item.pinned && (
              <span className="bg-gold/15 px-1.5 py-0.5 text-cocoa">Pinned</span>
            )}
          </div>
          <Link
            href={`/news/${item.slug}`}
            className="mt-2 block font-serif text-xl text-cocoa hover:underline"
          >
            {item.title}
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.summary}
          </p>
          <Link
            href={`/news/${item.slug}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-4 hover:underline"
          >
            Read more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}
