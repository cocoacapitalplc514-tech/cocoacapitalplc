"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function NewsSection() {
  const items = NEWS_ITEMS.slice(0, 3);

  return (
    <section className="section-pad bg-white" aria-labelledby="news-heading">
      <div className="container-site">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:gap-5 md:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="gold-rule mb-6 block" aria-hidden />
              <h2 id="news-heading" className="heading-lg text-cocoa">
                News &amp; Insights
              </h2>
            </div>
            <Link
              href="/news"
              className="tap-target group gap-2 text-sm font-medium text-cocoa transition-colors hover:text-forest"
            >
              View all
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.1} y={28}>
              <article className="group">
                <Link href={item.href} className="block">
                  <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <time dateTime={item.isoDate} className="label text-muted">
                    {item.date}
                  </time>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-cocoa transition-colors group-hover:text-forest lg:text-2xl">
                    {item.title}
                  </h3>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
