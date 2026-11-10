import type { DocumentReference, DocumentType } from "./types";
import { PUBLICATION } from "./site-settings";
import { fromCms } from "./cms";

/**
 * Public document catalogue. Official PDFs are stored in `public/documents`
 * and referenced by `fileUrl` so they ship with the static export.
 */
export const LOCAL_DOCUMENTS: DocumentReference[] = [
  {
    id: "prog-prospectus",
    title: "Programme Prospectus",
    type: "prospectus",
    publicationDate: "2026-09-25",
    year: 2026,
    fileUrl: "/documents/cocoa-capital-programme-prospectus.pdf",
    fileSize: "11.3 MB",
    viewerHref: "/investor-relations/prospectus",
    description:
      "Prospectus dated 25 September 2026 relating to the offer and listing of Commercial Paper and Bonds under a GHS 16.3 billion Note Issuance Programme on the Ghana Fixed Income Market.",
  },
  {
    id: "doc-issuance-announcement-2026-09-25",
    title: "Issuance Announcement — 25 September 2026",
    type: "announcement",
    publicationDate: "2026-09-25",
    year: 2026,
    instrument: "commercial-paper",
    fileUrl: "/documents/cocoa-capital-issuance-announcement.pdf",
    fileSize: "115 KB",
    viewerHref: "/news/issuance-announcement-25-september-2026",
    description:
      "Commercial Paper issuance announcement under the GHS 16.3 billion Note Programme.",
  },
  {
    id: "doc-press-statement-2026-09-25",
    title: "Press Statement — 25 September 2026",
    type: "announcement",
    publicationDate: "2026-09-25",
    year: 2026,
    fileUrl: "/documents/cocoa-capital-press-statement.pdf",
    fileSize: "83 KB",
    viewerHref: "/news/press-statement-25-september-2026",
    description:
      "Press statement on the GHS 16.3 billion Domestic Cocoa Notes Programme.",
  },
];

export const DOCUMENTS: DocumentReference[] = fromCms("documents", LOCAL_DOCUMENTS);

export { DOCUMENT_TYPE_LABELS, formatDocumentDate } from "./document-format";

/** Documents currently shown on the public site. */
export const PUBLISHED_DOCUMENTS: DocumentReference[] = DOCUMENTS.filter(
  (doc) => doc.type !== "prospectus" || PUBLICATION.prospectus
);

export function getLatestDocuments(limit = 5): DocumentReference[] {
  return [...PUBLISHED_DOCUMENTS]
    .sort((a, b) => {
      const da = a.publicationDate ?? "";
      const db = b.publicationDate ?? "";
      return db.localeCompare(da);
    })
    .slice(0, limit);
}

export function getDocumentsByType(type: DocumentType): DocumentReference[] {
  return PUBLISHED_DOCUMENTS.filter((doc) => doc.type === type);
}

export function getProspectus(): DocumentReference | undefined {
  if (!PUBLICATION.prospectus) return undefined;
  return DOCUMENTS.find((doc) => doc.type === "prospectus");
}
