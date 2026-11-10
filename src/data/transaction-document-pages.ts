/** Page-image path for the view-only viewer. Free of CMS data for client components. */
export function transactionDocumentPageSrc(slug: string, page: number): string {
  const index = String(page).padStart(3, "0");
  return `/documents/view-only/${slug}/page-${index}.webp`;
}
