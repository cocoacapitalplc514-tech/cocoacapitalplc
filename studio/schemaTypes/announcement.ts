import { defineArrayMember, defineField, defineType } from "sanity";
import { ANNOUNCEMENT_CATEGORIES } from "./options";
import { isUniqueNewsSlug } from "./slugs";

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96, isUnique: isUniqueNewsSlug },
      description: "Used in the URL: /news/<slug>. Must not match any news article or announcement.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ANNOUNCEMENT_CATEGORIES },
      initialValue: "general",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "pinned", type: "boolean", initialValue: false }),
    defineField({
      name: "attachments",
      type: "array",
      description: "The first attachment with a file is shown in the article viewer.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "siteDocument" }] })],
    }),
  ],
  orderings: [
    { title: "Date, newest", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", date: "date", category: "category" },
    prepare: ({ title, date, category }) => ({
      title,
      subtitle: [category, date].filter(Boolean).join(" · "),
    }),
  },
});
