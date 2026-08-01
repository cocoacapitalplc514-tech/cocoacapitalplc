import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

/**
 * Brand lockup: logo_1 mark + typography styled after logo_2
 * — serif "COCOA CAPITAL", small green "PLC" under "CO", underline rule.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-h-[var(--tap)] items-center gap-2.5 sm:gap-3",
        className
      )}
      aria-label="Cocoa Capital PLC Home"
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={40}
        height={64}
        priority
        className={cn(
          "h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11",
          isLight && "brightness-125"
        )}
      />

      <span className="flex flex-col">
        <span
          className={cn(
            "font-serif text-[15px] font-semibold uppercase leading-none tracking-[0.08em] sm:text-[17px] lg:text-[18px]",
            isLight ? "text-white" : "text-[#3D2314]"
          )}
        >
          Cocoa Capital
        </span>

        {/* Matches logo_2: PLC under leading letters + rule under the name */}
        <span className="mt-[5px] flex w-full items-center gap-1.5">
          <span
            className={cn(
              "shrink-0 font-sans text-[9px] font-bold uppercase leading-none tracking-[0.18em]",
              isLight ? "text-gold" : "text-forest"
            )}
          >
            PLC
          </span>
          <span
            className={cn(
              "mt-px h-px w-full",
              isLight ? "bg-white/40" : "bg-[#3D2314]/60"
            )}
            aria-hidden
          />
        </span>
      </span>
    </Link>
  );
}
