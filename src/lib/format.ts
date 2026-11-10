/** Display helper for metrics that may not yet be published. */
export function formatMetric(value: string | number | null | undefined): string {
  if (value == null || value === "") return "To be published";
  return String(value);
}

export function formatPublishedDate(date?: string): string {
  if (!date) return "Not yet published";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function statusLabel(status: string): string {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
