import { defineArrayMember, defineField, defineType } from "sanity";

const entity = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    validation: (rule) => rule.required(),
    fields: [
      defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
    ],
  });

export const organisation = defineType({
  name: "organisation",
  title: "Organisation",
  type: "document",
  fields: [
    defineField({
      name: "corporateStructure",
      title: "Corporate structure",
      type: "object",
      description: "Shown on /about/corporate-structure, top to bottom.",
      validation: (rule) => rule.required(),
      fields: [
        entity("sponsor", "Sponsor"),
        entity("issuer", "Issuer"),
        entity("corporateManager", "Corporate Manager"),
      ],
    }),
    defineField({
      name: "programmeParties",
      title: "Programme parties",
      type: "array",
      description:
        "Only list organisations that have been finally confirmed. The first three groups are shown on the home page.",
      of: [
        defineArrayMember({
          name: "programmeParty",
          type: "object",
          fields: [
            defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "organisations",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: { title: "role", organisations: "organisations" },
            prepare: ({ title, organisations }) => ({
              title,
              subtitle: Array.isArray(organisations) ? organisations.join(", ") : "",
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Organisation" }) },
});
