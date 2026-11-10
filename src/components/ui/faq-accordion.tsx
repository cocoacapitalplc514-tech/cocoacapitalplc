"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  faqs,
  defaultOpenId,
}: {
  faqs: FAQ[];
  /** Pass null to start collapsed. Omit to open the first item. */
  defaultOpenId?: string | null;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId === undefined ? (faqs[0]?.id ?? null) : defaultOpenId
  );

  return (
    <div className="divide-y divide-border border border-border bg-white">
      {faqs.map((faq) => {
        const open = openId === faq.id;
        const paragraphs = faq.answer.split(/\n\n+/);
        return (
          <div key={faq.id}>
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-medium text-cocoa md:px-6 md:py-5"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform",
                    open && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              hidden={!open}
              className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:pb-6"
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {faq.points && faq.points.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5">
                  {faq.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
