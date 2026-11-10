import { defineField, defineType } from "sanity";
import { DOCUMENT_TYPES, INSTRUMENT_TYPES } from "./options";

export const siteDocument = defineType({
  name: "siteDocument",
  title: "Document",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Document type",
      type: "string",
      options: { list: DOCUMENT_TYPES },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "publicationDate", type: "date" }),
    defineField({
      name: "year",
      type: "number",
      description: "Defaults to the publication date's year when left empty.",
    }),
    defineField({
      name: "instrument",
      type: "string",
      options: { list: INSTRUMENT_TYPES },
    }),
    defineField({ name: "series", type: "string" }),
    defineField({
      name: "file",
      title: "File (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
      description: "Upload the document. Takes priority over 'Site file path'.",
    }),
    defineField({
      name: "filePath",
      title: "Site file path",
      type: "string",
      description:
        "Path of a file already shipped with the website, e.g. /documents/report.pdf.",
    }),
    defineField({
      name: "fileSize",
      title: "File size label",
      type: "string",
      description: "e.g. 115 KB. Calculated automatically for uploaded files.",
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "viewerHref",
      title: "Viewer page path",
      type: "string",
      description: "Optional in-site page that displays this document, e.g. /news/my-slug.",
    }),
  ],
  orderings: [
    {
      title: "Publication date, newest",
      name: "publicationDateDesc",
      by: [{ field: "publicationDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", type: "type", date: "publicationDate" },
    prepare: ({ title, type, date }) => ({
      title,
      subtitle: [type, date].filter(Boolean).join(" · "),
    }),
  },
});
