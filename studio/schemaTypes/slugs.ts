import type { SlugValidationContext } from "sanity";

/**
 * News articles and announcements share the /news/<slug> route, so a slug must
 * be unique across both types (Sanity's default check is per type only).
 */
export async function isUniqueNewsSlug(slug: string, context: SlugValidationContext) {
  const { document, getClient } = context;
  const id = document?._id.replace(/^drafts\./, "");
  const params = { slug, draft: `drafts.${id}`, published: id };
  const query = `!defined(*[
    _type in ["newsArticle", "announcement"] &&
    slug.current == $slug &&
    !(_id in [$draft, $published])
  ][0]._id)`;
  return getClient({ apiVersion: "2025-01-01" }).fetch<boolean>(query, params);
}
