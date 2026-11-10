import type { DocumentReference } from "@/data/types";
import { DOCUMENT_TYPE_LABELS, formatDocumentDate } from "@/data/document-format";
import { Button } from "@/components/ui/button";

export function DocumentCard({ document }: { document: DocumentReference }) {
  return (
    <article className="flex flex-col border border-border bg-white px-5 py-5">
      <p className="label text-forest">{DOCUMENT_TYPE_LABELS[document.type]}</p>
      <h3 className="mt-2 font-serif text-lg text-cocoa">{document.title}</h3>
      {document.publicationDate && (
        <p className="mt-2 text-sm text-muted">
          {formatDocumentDate(document.publicationDate)}
          {document.fileSize ? ` · ${document.fileSize}` : ""}
        </p>
      )}
      <div className="mt-4 grow" />
      {document.fileUrl ? (
        <Button asChild variant="outline-cocoa" size="sm" className="self-start">
          <a
            href={document.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download {document.title}
          </a>
        </Button>
      ) : (
        <p className="text-sm text-muted">PDF not yet published</p>
      )}
    </article>
  );
}
