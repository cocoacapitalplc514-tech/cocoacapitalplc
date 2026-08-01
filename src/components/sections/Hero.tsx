"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Phones get a shorter, quicker entrance — long staggers just delay
      // the headline on the device most likely to be on a slow connection.
      mm.add(
        {
          isMobile: "(max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          gsap.fromTo(
            "[data-hero-animate]",
            { opacity: 0, y: isDesktop ? 24 : 12 },
            {
              opacity: 1,
              y: 0,
              duration: isDesktop ? 1.1 : 0.6,
              stagger: isDesktop ? 0.1 : 0.05,
              ease: "power3.out",
              delay: 0.1,
              clearProps: "transform",
            }
          );
        }
      );

      // Scroll-scrubbed parallax is expensive; reserve it for pointer devices.
      mm.add("(min-width: 1024px)", () => {
        gsap.to(image, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-[var(--nav-h)]"
      aria-labelledby="hero-heading"
    >
      <div className="container-site grid items-center gap-9 py-10 sm:py-14 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-32">
        <div className="relative z-10 max-w-xl">
          <p
            data-hero-animate
            className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7528] md:mb-6"
          >
            Accra, Ghana
          </p>
          <h1
            id="hero-heading"
            data-hero-animate
            className="heading-xl text-cocoa text-balance"
          >
            Financing Ghana&apos;s{" "}
            <span className="text-gold">Cocoa</span> Future.
          </h1>
          <p
            data-hero-animate
            className="mt-5 max-w-md text-base font-medium leading-relaxed text-muted md:mt-7 md:text-[1.0625rem]"
          >
            An investment house built around Ghana&apos;s cocoa value chain—
            mobilising institutional capital with discipline and transparency.
          </p>

          <div
            data-hero-animate
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 md:mt-10"
          >
            <Button asChild variant="forest" size="lg" className="w-full sm:w-auto">
              <Link href="/investments/how-to-invest">
                Invest With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/funding/apply"
              className="tap-target group justify-center gap-2 text-sm font-semibold text-cocoa transition-colors hover:text-forest sm:justify-start"
            >
              Apply for funding
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div data-hero-animate className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10] md:aspect-[4/5] lg:aspect-[5/6]">
            <div
              ref={imageRef}
              className="absolute inset-0 lg:scale-105 lg:will-change-transform"
            >
              <Image
                src="/images/hero-cocoa.jpg"
                alt="Ripe cocoa pod on a branch in a Ghanaian plantation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cocoa/25 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
