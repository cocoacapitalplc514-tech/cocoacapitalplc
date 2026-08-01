"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasDarkHero, setHasDarkHero] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setHasDarkHero(!!document.querySelector("[data-dark-hero]"));
  }, [pathname]);

  // Any navigation dismisses the panel, including browser back/forward, which
  // an onClick handler on the links alone would miss.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape to dismiss, and keep Tab inside the panel while it covers the page.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Light treatment only while sitting over an unscrolled dark hero.
  const onDark = hasDarkHero && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-border bg-cream/90 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container-site flex h-[var(--nav-h)] items-center justify-between gap-4">
          <Logo variant={onDark ? "light" : "default"} />

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-2.5 py-2 text-[13px] font-medium transition-colors",
                    onDark
                      ? "text-white/90 hover:text-white"
                      : "text-cocoa/85 hover:text-cocoa",
                    active &&
                      (onDark
                        ? "text-white after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:bg-gold"
                        : "text-cocoa after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:bg-gold")
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton className="hidden sm:inline-block">
              <Button asChild variant="gold" size="default">
                <Link href="/investments/how-to-invest">Invest Now</Link>
              </Button>
            </MagneticButton>

            <button
              ref={toggleRef}
              type="button"
              className={cn(
                "-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors xl:hidden",
                onDark
                  ? "border-white/25 text-white"
                  : "border-cocoa/10 text-cocoa"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => (open ? close() : setOpen(true))}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Kept outside <header>: its backdrop-blur would otherwise become the
          containing block for this fixed panel and collapse it to zero height. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto overscroll-contain bg-cream pb-[env(safe-area-inset-bottom)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
          open
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        )}
      >
        <nav
          className="container-site flex min-h-full flex-col py-6"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-[var(--tap)] items-center border-b border-border py-3.5 text-lg font-medium transition-colors",
                  active ? "text-forest" : "text-cocoa"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild variant="gold" size="lg" className="mt-8 w-full">
            <Link
              href="/investments/how-to-invest"
              onClick={() => setOpen(false)}
            >
              Invest Now
            </Link>
          </Button>
        </nav>
      </div>
    </>
  );
}
