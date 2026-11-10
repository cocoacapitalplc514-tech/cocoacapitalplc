import type { NewsArticle } from "./types";
import { fromCms } from "./cms";

/** News items — empty until official communications are published. */
export const LOCAL_NEWS: NewsArticle[] = [];

export const NEWS: NewsArticle[] = fromCms("news", LOCAL_NEWS);

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS.find((item) => item.slug === slug);
}

export function getLatestNews(limit = 3): NewsArticle[] {
  return [...NEWS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
