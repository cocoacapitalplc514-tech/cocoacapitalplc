import { defineArrayMember, defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "slug",
      options: { source: "title" },
      description: "Anchor used on the FAQ page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "faqs",
      title: "Questions",
      type: "array",
      of: [
        defineArrayMember({
          name: "faq",
          type: "object",
          fields: [
            defineField({
              name: "question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              type: "text",
              rows: 5,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "points",
              title: "Supporting points",
              type: "array",
              description: "Optional list shown after the answer.",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", faqs: "faqs" },
    prepare: ({ title, faqs }) => ({
      title,
      subtitle: `${Array.isArray(faqs) ? faqs.length : 0} questions`,
    }),
  },
});
