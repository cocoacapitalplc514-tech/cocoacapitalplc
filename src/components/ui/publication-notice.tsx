import { cn } from "@/lib/utils";

type PublicationNoticeProps = {
  title: string;
  description?: string;
  className?: string;
};

/**
 * The single, canonical way this site says "not published yet".
 *
 * Most programme data (issuances, ratings, statements, announcements) is
 * unpublished until the issuer releases it. Rendering an empty table, a grid of
 * "TBD" tiles and a placeholder card for the same fact made pages read as
 * broken. One notice per absent dataset, in a consistent institutional voice.
 */
export function PublicationNotice({
  title,
  description,
  className,
}: PublicationNoticeProps) {
  return (
    <div
      className={cn(
        "border-l-2 border-gold bg-soft-grey px-6 py-6 md:px-7 md:py-7",
        className
      )}
      role="status"
    >
      <p className="label text-forest">Not yet published</p>
      <p className="mt-3 font-serif text-lg text-cocoa md:text-xl">{title}</p>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
