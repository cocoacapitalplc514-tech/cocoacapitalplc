import { defineField, defineType } from "sanity";

export const rating = defineType({
  name: "rating",
  title: "Credit rating",
  type: "document",
  fields: [
    defineField({
      name: "agency",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "rating", type: "string" }),
    defineField({ name: "outlook", type: "string" }),
    defineField({ name: "ratingDate", type: "date" }),
    defineField({
      name: "report",
      title: "Rating report (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "reportUrl",
      title: "Report URL",
      type: "string",
      description: "Used when no report is uploaded.",
    }),
  ],
  preview: {
    select: { title: "agency", rating: "rating", date: "ratingDate" },
    prepare: ({ title, rating, date }) => ({
      title,
      subtitle: [rating, date].filter(Boolean).join(" · "),
    }),
  },
});
