import type { StructureBuilder, StructureResolver } from "sanity/structure";

const singleton = (S: StructureBuilder, type: string, title: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type).title(title));

const ordered = (S: StructureBuilder, type: string, title: string) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(
      S.documentTypeList(type)
        .title(title)
        .defaultOrdering([{ field: "order", direction: "asc" }])
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings", "Site settings"),
      singleton(S, "programme", "Programme"),
      singleton(S, "organisation", "Organisation & programme parties"),
      S.divider(),
      S.documentTypeListItem("announcement").title("Announcements"),
      S.documentTypeListItem("newsArticle").title("News"),
      S.documentTypeListItem("siteDocument").title("Documents"),
      ordered(S, "transactionDocument", "Transaction documents"),
      S.divider(),
      S.documentTypeListItem("issuance").title("Issuances"),
      S.documentTypeListItem("rating").title("Credit Ratings"),
      S.divider(),
      ordered(S, "director", "Board of Directors"),
      ordered(S, "faqSection", "FAQ Sections"),
    ]);
