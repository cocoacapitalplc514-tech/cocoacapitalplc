import { defineArrayMember, defineField, defineType } from "sanity";

const required = (rule: { required: () => unknown }) => rule.required();

/** Title + description card, used for framework items, risks and similar lists. */
const contentItem = (name: string) =>
  defineArrayMember({
    name,
    type: "object",
    fields: [
      defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
      defineField({
        name: "description",
        type: "text",
        rows: 3,
        validation: (rule) => rule.required(),
      }),
    ],
    preview: { select: { title: "title", subtitle: "description" } },
  });

const sectionCopy = (name: string, title: string, extra: ReturnType<typeof defineField>[] = []) =>
  defineField({
    name,
    title,
    type: "object",
    options: { collapsible: true, collapsed: true },
    validation: (rule) => rule.required(),
    fields: [
      defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "description", type: "text", rows: 3 }),
      ...extra,
    ],
  });

export const programme = defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  groups: [
    { name: "facts", title: "Key facts", default: true },
    { name: "lists", title: "Lists" },
    { name: "page", title: "Programme page copy" },
  ],
  fields: [
    defineField({ name: "name", type: "string", group: "facts", validation: (rule) => rule.required() }),
    defineField({
      name: "sizeLabel",
      title: "Size (long)",
      type: "string",
      description: "e.g. GHS 16.3 billion",
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sizeShort",
      title: "Size (short)",
      type: "string",
      description: "e.g. GHS 16.3bn",
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "listing",
      title: "Listing (short)",
      type: "string",
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "listingFull",
      title: "Listing (full)",
      type: "string",
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 4,
      description: "Used on the About page, the programme page hero and SEO description.",
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "purpose",
      type: "text",
      rows: 3,
      group: "facts",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instruments",
      type: "array",
      group: "facts",
      of: [
        defineArrayMember({
          name: "instrument",
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "tenor", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "purpose", type: "text", rows: 3, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "name", subtitle: "tenor" } },
        }),
      ],
    }),
    defineField({
      name: "metrics",
      title: "Headline metrics",
      type: "array",
      group: "lists",
      description: "Shown on the home page and the programme overview.",
      of: [
        defineArrayMember({
          name: "metric",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "value", type: "string" }),
            defineField({ name: "detail", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "purposePanels",
      title: "Purpose panels (home page)",
      type: "array",
      group: "lists",
      of: [
        defineArrayMember({
          name: "purposePanel",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              initialValue: "/investor-relations/programme#use-of-proceeds",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),
    defineField({
      name: "frameworkItems",
      title: "Programme framework (home page)",
      type: "array",
      group: "lists",
      of: [contentItem("frameworkItem")],
    }),
    defineField({
      name: "repaymentConcepts",
      title: "Repayment concepts",
      type: "array",
      group: "lists",
      of: [contentItem("repaymentConcept")],
    }),
    defineField({
      name: "riskCategories",
      title: "Risk categories",
      type: "array",
      group: "lists",
      of: [contentItem("riskCategory")],
    }),
    defineField({
      name: "page",
      title: "Programme page",
      type: "object",
      group: "page",
      validation: (rule) => rule.required(),
      fields: [
        defineField({ name: "heroTitle", type: "string", validation: (rule) => rule.required() }),
        sectionCopy("overview", "Overview section"),
        sectionCopy("instruments", "Instruments section", [
          defineField({
            name: "note",
            type: "text",
            rows: 3,
            description: "Shown below the instruments, before the 'View current issuances' link.",
            validation: (rule) => rule.required(),
          }),
        ]),
        sectionCopy("useOfProceeds", "Use of proceeds section", [
          defineField({
            name: "commercialPaperText",
            title: "Commercial Paper text",
            type: "text",
            rows: 3,
            validation: (rule) => rule.required(),
          }),
          defineField({ name: "bondText", type: "text", rows: 3, validation: (rule) => rule.required() }),
        ]),
        sectionCopy("howItWorks", "How it works section"),
        sectionCopy("repayment", "Repayment section"),
        sectionCopy("risk", "Risk factors section"),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Programme" }) },
});
