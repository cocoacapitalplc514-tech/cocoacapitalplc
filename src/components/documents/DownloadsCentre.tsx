"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { DocumentTable } from "@/components/documents/DocumentTable";
import { DOCUMENT_TYPE_LABELS } from "@/data/document-format";
import type { DocumentReference, DocumentType } from "@/data/types";

const TYPE_FILTERS: Array<{ value: "all" | DocumentType; label: string }> = [
  { value: "all", label: "All" },
  ...Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => ({
    value: value as DocumentType,
    label,
  })),
];

/**
 * A search box, nine type chips, two selects and a series field over a catalogue
 * of one unpublished document read as a broken tool. The controls appear once
 * there is enough in the catalogue for filtering to mean anything.
 */
const FILTER_THRESHOLD = 4;

const FIELD =
  "h-11 border border-border bg-white px-3 text-sm text-cocoa placeholder:text-muted/50 focus:border-gold focus:outline-none";

export function DownloadsCentre({ documents }: { documents: DocumentReference[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | DocumentType>("all");
  const [year, setYear] = useState("all");
  const [instrument, setInstrument] = useState("all");

  const showFilters = documents.length >= FILTER_THRESHOLD;

  const years = Array.from(
    new Set(documents.map((d) => d.year).filter(Boolean) as number[])
  ).sort((a, b) => b - a);

  const filtered = useMemo(() => {
    if (!showFilters) return documents;
    const q = query.trim().toLowerCase();
    return documents.filter((doc) => {
      if (type !== "all" && doc.type !== type) return false;
      if (year !== "all" && String(doc.year) !== year) return false;
      if (instrument !== "all" && doc.instrument !== instrument) return false;
      if (!q) return true;
      return (
        doc.title.toLowerCase().includes(q) ||
        DOCUMENT_TYPE_LABELS[doc.type].toLowerCase().includes(q) ||
        (doc.description ?? "").toLowerCase().includes(q) ||
        (doc.series ?? "").toLowerCase().includes(q)
      );
    });
  }, [documents, showFilters, query, type, year, instrument]);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Resources"
        title="Downloads Centre"
        description="Official programme documents in one place — pricing supplements, financial statements and notices. Published documents can be read on the site or downloaded."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          {showFilters && (
            <div className="mb-8 space-y-4">
              <label className="block">
                <span className="label text-forest">Search documents</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, type or series"
                  className={`mt-2 w-full max-w-xl ${FIELD}`}
                />
              </label>

              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Document type"
              >
                {TYPE_FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setType(filter.value)}
                    className={`min-h-[var(--tap)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                      type === filter.value
                        ? "border-cocoa bg-cocoa text-white"
                        : "border-border bg-white text-cocoa hover:border-cocoa/40"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <label className="text-sm">
                  <span className="sr-only">Year</span>
                  <select
                    className={FIELD}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="all">All years</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm">
                  <span className="sr-only">Instrument</span>
                  <select
                    className={FIELD}
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                  >
                    <option value="all">All instruments</option>
                    <option value="commercial-paper">Commercial Paper</option>
                    <option value="bond">Bonds</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          <DocumentTable
            documents={filtered}
            emptyTitle={
              showFilters
                ? "No documents match your filters."
                : "No documents have been released."
            }
            emptyDescription={
              showFilters
                ? "Try clearing the search or type filters."
                : "Official programme documents will be listed here as the issuer publishes them."
            }
          />
        </div>
      </section>
    </main>
  );
}
