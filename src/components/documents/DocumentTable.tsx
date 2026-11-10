import Link from "next/link";
import type { DocumentReference } from "@/data/types";
import { DOCUMENT_TYPE_LABELS, formatDocumentDate } from "@/data/document-format";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { Button } from "@/components/ui/button";

type DocumentTableProps = {
  documents: DocumentReference[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function DocumentTable({
  documents,
  emptyTitle = "No documents are currently available.",
  emptyDescription = "Official documents will appear here when published.",
}: DocumentTableProps) {
  if (!documents.length) {
    return <PublicationNotice title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">Investor documents</caption>
        <thead className="bg-soft-grey">
          <tr className="border-b border-border">
            <th scope="col" className="px-4 py-3 font-medium">
              Title
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Type
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Date
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Size
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-border last:border-0 hover:bg-soft-grey/50"
            >
              <td className="px-4 py-3 font-medium text-cocoa">{doc.title}</td>
              <td className="px-4 py-3 text-muted">
                {DOCUMENT_TYPE_LABELS[doc.type]}
              </td>
              <td className="px-4 py-3">
                {formatDocumentDate(doc.publicationDate)}
              </td>
              <td className="px-4 py-3">{doc.fileSize ?? "—"}</td>
              <td className="px-4 py-3">
                {doc.viewerHref || doc.fileUrl ? (
                  <div className="flex flex-wrap items-center gap-3">
                    {doc.viewerHref ? (
                      <Button asChild variant="outline-cocoa" size="sm">
                        <Link href={doc.viewerHref}>Read</Link>
                      </Button>
                    ) : null}
                    {doc.fileUrl ? (
                      <a
                        href={doc.fileUrl}
                        download
                        className="text-sm font-medium text-forest underline-offset-4 hover:underline"
                      >
                        Download
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <span className="text-muted">Not yet published</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
