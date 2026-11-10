import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[80svh] items-center overflow-hidden bg-cocoa pt-[var(--header-h)] text-white"
    >
      <div
        className="adinkra-motif pointer-events-none absolute inset-0 text-gold/[0.04]"
        aria-hidden
      />
      <div className="container-site relative py-16 text-center md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          Error 404
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl heading-xl text-balance text-white md:mt-6">
          This page isn&apos;t available.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/85 md:mt-6">
          The page you requested may have moved or is not yet published. Visit
          Investor Relations or return home.
        </p>
        <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4">
          <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
            <Link href="/">
              Return Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Link
            href="/investor-relations"
            className="tap-target group justify-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white sm:justify-start"
          >
            Investor Relations
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
