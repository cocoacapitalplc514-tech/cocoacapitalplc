import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { NEWS_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Announcements, market commentary, and insights from Cocoa Capital PLC.",
};

export default function NewsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Newsroom"
        title="News & Insights"
        description="Announcements, programme updates, and perspectives on Ghana's cocoa economy."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-8 sm:gap-12 md:grid-cols-2 lg:gap-14">
          {NEWS_ITEMS.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08} y={28}>
              <article className="group">
                <Link href={item.href} className="block">
                  <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <time dateTime={item.isoDate} className="label text-muted">
                    {item.date}
                  </time>
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-cocoa transition-colors group-hover:text-forest">
                    {item.title}
                  </h2>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
