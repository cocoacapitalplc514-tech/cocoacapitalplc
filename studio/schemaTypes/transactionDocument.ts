import { defineField, defineType } from "sanity";

export const transactionDocument = defineType({
  name: "transactionDocument",
  title: "Transaction document",
  type: "document",
  description:
    "View-only programme documents. The PDF is turned into page images at build time and is never linked from the website.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      description: "Used in the URL: /investor-relations/transaction-documents/<slug>",
      validation: (rule) =>
        rule.required().custom((value) =>
          !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)
            ? true
            : "Use lowercase letters, numbers and hyphens only"
        ),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "file",
      title: "Document (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
      description:
        "If empty, the build uses content/transaction-documents/<slug>.pdf from the repository.",
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
