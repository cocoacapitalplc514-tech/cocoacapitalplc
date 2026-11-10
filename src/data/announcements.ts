import type { Announcement } from "./types";
import { fromCms } from "./cms";

/**
 * Official announcements. PDFs live in `public/documents` so they ship with
 * the static export.
 */
export const LOCAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-issuance-2026-09-25",
    slug: "issuance-announcement-25-september-2026",
    title: "Issuance Announcement",
    date: "2026-09-25",
    category: "issuance",
    summary:
      "Cocoa Capital PLC is issuing Commercial Paper under its GHS 16.3 billion Note Programme, sponsored by the Ghana Cocoa Board. The paper has a tenor of 270 days, matures in June 2027, and carries a minimum bid of GHS 50 thousand. The bookbuild opens at 9:00am on Monday 28 September 2026.",
    body: "The full issuance announcement is published in the document below.",
    attachments: [
      {
        id: "doc-issuance-announcement-2026-09-25",
        title: "Issuance Announcement — 25 September 2026",
        type: "announcement",
        publicationDate: "2026-09-25",
        year: 2026,
        instrument: "commercial-paper",
        fileUrl: "/documents/cocoa-capital-issuance-announcement.pdf",
        fileSize: "115 KB",
        description:
          "Commercial Paper issuance announcement under the GHS 16.3 billion Note Programme.",
      },
    ],
  },
  {
    id: "ann-press-2026-09-25",
    slug: "press-statement-25-september-2026",
    title: "Press Statement",
    date: "2026-09-25",
    category: "press-release",
    summary:
      "Cocoa Capital PLC, a wholly owned subsidiary of the Ghana Cocoa Board, is raising up to GHS 16.3 billion through the Domestic Cocoa Notes Programme to support cocoa purchases. GHS 14 billion will be issued as Commercial Paper for the 2026/27 crop season, and GHS 2.3 billion through medium-to-long-term bonds to refinance existing legacy debt.",
    body: "The full press statement is published in the document below.",
    attachments: [
      {
        id: "doc-press-statement-2026-09-25",
        title: "Press Statement — 25 September 2026",
        type: "announcement",
        publicationDate: "2026-09-25",
        year: 2026,
        fileUrl: "/documents/cocoa-capital-press-statement.pdf",
        fileSize: "83 KB",
        description:
          "Press statement on the GHS 16.3 billion Domestic Cocoa Notes Programme.",
      },
    ],
  },
];

export const ANNOUNCEMENTS: Announcement[] = fromCms(
  "announcements",
  LOCAL_ANNOUNCEMENTS
);

export function getAnnouncementBySlug(slug: string): Announcement | undefined {
  return ANNOUNCEMENTS.find((item) => item.slug === slug);
}

export function getPinnedAnnouncements(): Announcement[] {
  return ANNOUNCEMENTS.filter((item) => item.pinned);
}
