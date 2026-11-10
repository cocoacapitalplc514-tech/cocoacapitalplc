import { defineArrayMember, defineField, defineType } from "sanity";

export const director = defineType({
  name: "director",
  title: "Director",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers are shown first. The Chairman should be first.",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "imagePath",
      title: "Site image path",
      type: "string",
      description: "Used when no photo is uploaded, e.g. /images/directors/name.png.",
    }),
    defineField({
      name: "appointmentDate",
      type: "string",
      description: "As stated in the directors disclosure, e.g. 28 July 2026.",
    }),
    defineField({ name: "nominatingParty", type: "string" }),
    defineField({
      name: "otherRoles",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "biography",
      type: "array",
      description: "One entry per paragraph.",
      of: [defineArrayMember({ type: "text", rows: 6 })],
    }),
    defineField({
      name: "committees",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
