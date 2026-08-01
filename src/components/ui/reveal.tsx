"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  duration = 0.9,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          // Phones travel a shorter distance, finish faster, and ignore the
          // stagger delays — a 30-instance cascade of long tweens is the main
          // scroll-jank source on low-powered devices.
          const distance = isDesktop ? 1 : 0.4;

          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: y * distance,
              x: x * distance,
              scale: scale === 1 ? 1 : scale,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration: isDesktop ? duration : Math.min(duration, 0.5),
              delay: isDesktop ? delay : 0,
              ease: "power3.out",
              // Drop the transform and the GPU layer hint once we are done so
              // long pages are not left holding dozens of composited layers.
              clearProps: "transform,willChange",
              scrollTrigger: {
                trigger: el,
                start: isDesktop ? "top 88%" : "top 95%",
                once: true,
              },
            }
          );
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, scale, x, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
