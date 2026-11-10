"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { transactionDocumentPageSrc } from "@/data/transaction-document-pages";

type ViewOnlyDocumentProps = {
  title: string;
  slug: string;
  pages: number;
};

const MIN_ZOOM = 100;
const MAX_ZOOM = 175;
const ZOOM_STEP = 25;

/**
 * On-screen reader for a transaction document.
 * Pages are images, so the original PDF is not on the site. Download and
 * print controls are omitted, and printing this view yields a notice only.
 */
export function ViewOnlyDocument({ title, slug, pages }: ViewOnlyDocumentProps) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [draft, setDraft] = useState("1");

  useEffect(() => {
    document.body.classList.add("view-only-active");

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === "p" || key === "s")) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (key === "arrowright" || key === "pagedown") {
        event.preventDefault();
        setPage((current) => Math.min(pages, current + 1));
      } else if (key === "arrowleft" || key === "pageup") {
        event.preventDefault();
        setPage((current) => Math.max(1, current - 1));
      }
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.body.classList.remove("view-only-active");
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [pages]);

  useEffect(() => {
    setDraft(String(page));
  }, [page]);

  useEffect(() => {
    for (const next of [page - 1, page + 1]) {
      if (next < 1 || next > pages) continue;
      const image = new Image();
      image.src = transactionDocumentPageSrc(slug, next);
    }
  }, [page, pages, slug]);

  const goToDraft = () => {
    const next = Number(draft);
    if (!Number.isInteger(next) || next < 1 || next > pages) {
      setDraft(String(page));
      return;
    }
    setPage(next);
  };

  return (
    <div className="view-only-shell border border-border bg-white">
      <p className="print-block-message">
        Printing is not permitted. This document is available for on-screen
        viewing only.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <p className="text-sm font-medium text-cocoa">View only</p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-cocoa hover:border-cocoa/40 disabled:opacity-40"
            onClick={() => setZoom((value) => Math.max(MIN_ZOOM, value - ZOOM_STEP))}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <span className="min-w-12 text-center text-sm tabular-nums text-muted">
            {zoom}%
          </span>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-cocoa hover:border-cocoa/40 disabled:opacity-40"
            onClick={() => setZoom((value) => Math.min(MAX_ZOOM, value + ZOOM_STEP))}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div
        className="view-only-pages max-h-[75vh] min-h-[28rem] overflow-auto bg-[#525659] p-3 sm:p-6"
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="relative mx-auto" style={{ width: `${zoom}%` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={transactionDocumentPageSrc(slug, page)}
            alt={`${title}, page ${page} of ${pages}`}
            draggable={false}
            className="pointer-events-none block h-auto w-full select-none bg-white shadow"
          />
          <div className="absolute inset-0" aria-hidden />
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-border px-4 py-3 sm:px-5">
        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 border border-border px-3 text-sm font-medium text-cocoa hover:border-cocoa/40 disabled:opacity-40"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page <= 1}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Previous
        </button>

        <form
          className="flex items-center justify-center gap-2 text-sm text-muted"
          onSubmit={(event) => {
            event.preventDefault();
            goToDraft();
          }}
        >
          <label htmlFor={`${slug}-page`} className="sr-only">
            Page number
          </label>
          <span>Page</span>
          <input
            id={`${slug}-page`}
            inputMode="numeric"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={goToDraft}
            className="h-9 w-14 border border-border bg-white text-center text-cocoa focus:border-gold focus:outline-none"
            aria-describedby={`${slug}-page-count`}
          />
          <span id={`${slug}-page-count`}>of {pages}</span>
        </form>

        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 border border-border px-3 text-sm font-medium text-cocoa hover:border-cocoa/40 disabled:opacity-40"
          onClick={() => setPage((current) => Math.min(pages, current + 1))}
          disabled={page >= pages}
        >
          Next
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
