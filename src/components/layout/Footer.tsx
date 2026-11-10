import Link from "next/link";
import {
  EXTERNAL_LINKS,
  FOOTER_LINKS,
  LEGAL_DISCLAIMER,
} from "@/lib/constants";
import { Logo } from "@/components/ui/logo";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { FOOTER_INVESTOR_LINKS } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-cocoa text-white">
      <div className="container-site py-12 md:py-14">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              A dedicated financing special-purpose vehicle established by the
              Ghana Cocoa Board, issuing Commercial Paper and Bonds for approved
              cocoa-sector financing and refinancing purposes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3">
            {(
              [
                ["About Us", FOOTER_LINKS.about],
                ["Investor Relations", FOOTER_INVESTOR_LINKS],
                ["Resources", FOOTER_LINKS.resources],
              ] as const
            ).map(([title, links]) => (
              <div key={title}>
                <h2 className="label font-sans text-gold">{title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="tap-target text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="label font-sans text-gold">Contact</h2>
            <ContactDetails variant="dark" className="mt-4" />

            {/*
              Sector and market information is not maintained on this site.
              Visitors are directed to the official sources instead.
            */}
            <h2 className="label mt-8 font-sans text-gold">External links</h2>
            <ul className="mt-3 space-y-2.5">
              {EXTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-target text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
          The standing investment disclaimer lives here and only here. It used to
          be repeated as an in-page block on ten pages; pages that carry
          securities terms still show a document-specific notice of their own.
        */}
        <aside
          className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/60"
          aria-label="Investment disclaimer"
        >
          <p className="max-w-4xl">{LEGAL_DISCLAIMER}</p>
          <p className="mt-2">
            <Link
              href="/disclaimer"
              className="text-white/75 underline-offset-4 hover:text-gold hover:underline"
            >
              Read the full website disclaimer
            </Link>
          </p>
        </aside>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cocoa Capital PLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="tap-target hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
