import type { Issuance } from "./types";
import { fromCms } from "./cms";

/** Live issuance data — leave empty until official terms are published. */
export const LOCAL_ISSUANCES: Issuance[] = [];

export const ISSUANCES: Issuance[] = fromCms("issuances", LOCAL_ISSUANCES);

export function getIssuanceBySlug(slug: string): Issuance | undefined {
  return ISSUANCES.find((item) => item.slug === slug);
}

export function getIssuancesByInstrument(
  instrumentType: Issuance["instrumentType"]
): Issuance[] {
  return ISSUANCES.filter((item) => item.instrumentType === instrumentType);
}

export function getActiveIssuances(): Issuance[] {
  return ISSUANCES.filter((item) =>
    ["upcoming", "open", "outstanding"].includes(item.status)
  );
}

export function formatIssuanceAmount(issuance: Issuance): string {
  if (issuance.issueAmount == null) return "Not yet published";
  const currency = issuance.currency ?? "GHS";
  return `${currency} ${issuance.issueAmount.toLocaleString("en-GH")}`;
}

export function formatRate(rate?: number): string {
  if (rate == null) return "Not yet published";
  return `${rate}%`;
}
