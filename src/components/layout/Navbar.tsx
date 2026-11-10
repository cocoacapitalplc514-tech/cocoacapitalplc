"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ACTION, NAV_ITEMS, SITE, type NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

function isActive(
  pathname: string,
  href: string,
  children?: NavItem["children"]
) {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return children?.some(
    (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
  );
}

const LINK_BASE =
  "relative px-2.5 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors xl:px-3";

const RULE =
  "absolute inset-x-2.5 -bottom-px h-[2px] origin-left bg-gold transition-transform duration-200 xl:inset-x-3";

function DesktopDropdown({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const active = isActive(pathname, item.href, item.children);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="inline-flex items-center">
        <Link
          href={item.href}
          className={cn(
            LINK_BASE,
            "pr-1",
            active ? "text-cocoa" : "text-cocoa/70 hover:text-cocoa"
          )}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={id}
        >
          {item.label}
          <span
            className={cn(RULE, active || open ? "scale-x-100" : "scale-x-0")}
            aria-hidden
          />
        </Link>
        <button
          type="button"
          className={cn(
            "-ml-0.5 px-1 py-2 transition-colors",
            open || active ? "text-cocoa" : "text-cocoa/50 hover:text-cocoa"
          )}
          aria-label={`${item.label} submenu`}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </button>
      </div>

      {/*
        This wrapper sits flush against the trigger (`top-full`) and creates the
        visual gap with padding instead of an offset. The padding is inside the
        hover subtree, so the cursor never crosses dead space on its way down to
        the menu. Offsetting with `top-[calc(100%+…)]`, `mt-*` or `translate-y`
        reopens the bug: the strip between belongs to no element, so crossing it
        fires mouseleave and the menu closes before you reach it.
      */}
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-[opacity] duration-200",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div
          id={id}
          role="menu"
          className="min-w-[248px] overflow-hidden border border-border bg-white shadow-elevated"
        >
          <div className="h-0.5 bg-gold" aria-hidden />
          <div className="py-1.5">
            {item.children?.map((child) => {
              const childActive =
                pathname === child.href || pathname.startsWith(`${child.href}/`);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className={cn(
                    "block border-l-2 px-5 py-2.5 text-sm transition-colors",
                    childActive
                      ? "border-gold bg-soft-grey font-medium text-cocoa"
                      : "border-transparent text-cocoa/80 hover:bg-soft-grey hover:text-cocoa"
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const active = isActive(pathname, item.href, item.children);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
        className={cn(
          "flex min-h-[var(--tap)] items-center border-b border-border py-4 text-lg font-medium",
          active ? "text-forest" : "text-cocoa"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className={cn(
          "flex min-h-[var(--tap)] w-full items-center justify-between py-4 text-left text-lg font-medium",
          active ? "text-forest" : "text-cocoa"
        )}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 text-cocoa/50 transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <div id={id} hidden={!open} className="space-y-1 pb-4 pl-1">
        {item.children.map((child) => {
          const childActive =
            pathname === child.href || pathname.startsWith(`${child.href}/`);
          return (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className={cn(
                "flex min-h-[var(--tap)] items-center px-3 py-2 text-base",
                childActive
                  ? "bg-soft-grey font-medium text-forest"
                  : "text-cocoa/75"
              )}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Institutional masthead strip. States the issuer's standing — COCOBOD sponsor,
 * GFIM listing — and routes investor enquiries without spending primary nav room.
 */
function UtilityBar() {
  return (
    <div className="hidden border-b border-white/10 bg-cocoa text-white lg:block">
      <div className="container-site flex h-[var(--util-h)] items-center justify-between gap-6 text-[11px] tracking-[0.04em]">
        <p className="text-white/75">
          A financing special-purpose vehicle established by the Ghana Cocoa
          Board (COCOBOD)
        </p>
        <div className="flex items-center gap-5 text-white/75">
          <span>Listed on the Ghana Fixed Income Market</span>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-gold"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}

/** `items` is resolved on the server (see src/lib/navigation.ts). */
export function Navbar({ items = NAV_ITEMS }: { items?: NavItem[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous;
    };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

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
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

  const actionActive = isActive(pathname, NAV_ACTION.href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white transition-[box-shadow,border-color] duration-300",
          scrolled
            ? "border-border shadow-[0_1px_0_rgba(59,36,24,0.04),0_6px_18px_rgba(59,36,24,0.05)]"
            : "border-border/70 shadow-none"
        )}
      >
        <UtilityBar />
        <div className="container-site flex h-[var(--nav-h)] items-center gap-4">
          <div className="shrink-0">
            <Logo />
          </div>

          <nav
            className="ml-auto hidden items-center lg:flex"
            aria-label="Primary"
          >
            {items.map((item) =>
              item.children?.length ? (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                  className={cn(
                    LINK_BASE,
                    isActive(pathname, item.href)
                      ? "text-cocoa"
                      : "text-cocoa/70 hover:text-cocoa"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      RULE,
                      isActive(pathname, item.href)
                        ? "scale-x-100"
                        : "scale-x-0"
                    )}
                    aria-hidden
                  />
                </Link>
              )
            )}
          </nav>

          <Link
            href={NAV_ACTION.href}
            aria-current={actionActive ? "page" : undefined}
            className={cn(
              "ml-3 hidden shrink-0 items-center px-4 py-2.5 text-[13px] font-medium transition-colors lg:inline-flex",
              actionActive
                ? "bg-cocoa text-white"
                : "border border-cocoa/25 text-cocoa hover:border-cocoa hover:bg-cocoa hover:text-white"
            )}
          >
            {NAV_ACTION.label}
          </Link>

          <div className="ml-auto flex shrink-0 items-center lg:hidden">
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-cocoa transition-colors hover:border-cocoa/30 hover:bg-soft-grey"
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

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto overscroll-contain bg-white pb-[env(safe-area-inset-bottom)] transition-[transform,opacity] duration-300 lg:hidden",
          open
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        )}
      >
        <nav
          className="container-site flex min-h-full flex-col py-6"
          aria-label="Mobile"
        >
          {items.map((item) => (
            <MobileAccordion
              key={item.href}
              item={item}
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <Link
            href={NAV_ACTION.href}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex min-h-[var(--tap)] items-center justify-center bg-cocoa px-6 py-3 text-sm font-medium text-white"
          >
            {NAV_ACTION.label}
          </Link>
          <a href={`mailto:${SITE.email}`} className="mt-4 text-sm text-muted">
            Investor enquiries: {SITE.email}
          </a>
        </nav>
      </div>
    </>
  );
}
