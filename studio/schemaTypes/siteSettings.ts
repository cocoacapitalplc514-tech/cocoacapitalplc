import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "showProspectus",
      title: "Publish the Programme Prospectus",
      type: "boolean",
      initialValue: false,
      description:
        "Shows /investor-relations/prospectus and lists the prospectus with the other documents.",
    }),
    defineField({
      name: "showTransactionDocuments",
      title: "Publish the transaction documents",
      type: "boolean",
      initialValue: false,
      description:
        "Shows /investor-relations/transaction-documents (on-screen viewing only).",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
