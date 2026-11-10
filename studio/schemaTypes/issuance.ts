import { defineArrayMember, defineField, defineType } from "sanity";
import { INSTRUMENT_TYPES, ISSUANCE_STATUSES, PAYMENT_STATUSES } from "./options";

export const issuance = defineType({
  name: "issuance",
  title: "Issuance",
  type: "document",
  fields: [
    defineField({
      name: "series",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tranche", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: (doc) => [doc.series, doc.tranche].filter(Boolean).join(" ") },
      description: "Used in the URL: /investor-relations/issuances/<slug>",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instrumentType",
      type: "string",
      options: { list: INSTRUMENT_TYPES },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ISSUANCE_STATUSES },
      initialValue: "upcoming",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "issueDate", type: "date" }),
    defineField({ name: "maturityDate", type: "date" }),
    defineField({ name: "tenor", type: "string", description: "e.g. 270 days" }),
    defineField({ name: "issueAmount", type: "number" }),
    defineField({ name: "currency", type: "string", initialValue: "GHS" }),
    defineField({ name: "couponRate", title: "Coupon rate (%)", type: "number" }),
    defineField({ name: "interestFrequency", type: "string" }),
    defineField({ name: "issuePrice", type: "string" }),
    defineField({ name: "listing", type: "string" }),
    defineField({
      name: "documents",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "siteDocument" }] })],
    }),
    defineField({
      name: "paymentSchedule",
      type: "array",
      of: [
        defineArrayMember({
          name: "payment",
          type: "object",
          fields: [
            defineField({ name: "paymentDate", type: "date" }),
            defineField({
              name: "type",
              type: "string",
              description: "e.g. Coupon, Principal",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "amountOrRate", type: "string" }),
            defineField({ name: "status", type: "string", options: { list: PAYMENT_STATUSES } }),
          ],
          preview: { select: { title: "type", subtitle: "paymentDate" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { series: "series", tranche: "tranche", status: "status" },
    prepare: ({ series, tranche, status }) => ({
      title: [series, tranche].filter(Boolean).join(" — "),
      subtitle: status,
    }),
  },
});
