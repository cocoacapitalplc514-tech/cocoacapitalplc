import { NAV_ITEMS, FOOTER_LINKS, type NavChild, type NavItem } from "@/lib/constants";
import { PUBLICATION } from "@/data/site-settings";

/**
 * Links to disclosures that editors switch on in the CMS ("Site settings").
 * Server-only: client components receive the resolved links as props, so the
 * CMS snapshot is never bundled into browser JavaScript.
 */
export const PUBLISHED_DISCLOSURE_LINKS: NavChild[] = [
  ...(PUBLICATION.prospectus
    ? [{ label: "Programme Prospectus", href: "/investor-relations/prospectus" }]
    : []),
  ...(PUBLICATION.transactionDocuments
    ? [
        {
          label: "Transaction Documents",
          href: "/investor-relations/transaction-documents",
        },
      ]
    : []),
];

const PROGRAMME_HREF = "/investor-relations/programme";

/** Inserts the published disclosure links right after "The Programme". */
function withDisclosures(links: readonly NavChild[]): NavChild[] {
  const index = links.findIndex((link) => link.href === PROGRAMME_HREF);
  const at = index === -1 ? links.length : index + 1;
  return [...links.slice(0, at), ...PUBLISHED_DISCLOSURE_LINKS, ...links.slice(at)];
}

export const NAV_ITEMS_WITH_DISCLOSURES: NavItem[] = NAV_ITEMS.map((item) =>
  item.href === "/investor-relations" && item.children
    ? { ...item, children: withDisclosures(item.children) }
    : item
);

export const FOOTER_INVESTOR_LINKS: NavChild[] = withDisclosures(FOOTER_LINKS.investor);
