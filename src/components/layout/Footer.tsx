"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <footer className="bg-cocoa text-white">
      <div className="container-site section-pad !pb-10 !pt-12 md:!pb-12 md:!pt-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 md:mt-6">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-3 md:mt-8">
              {[
                { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SITE.social.twitter, icon: Twitter, label: "Twitter" },
                { href: SITE.social.youtube, icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gold transition-colors hover:border-gold hover:bg-gold/10 md:h-10 md:w-10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 max-w-sm"
              noValidate
            >
              <label
                htmlFor="newsletter-email"
                className="label text-gold"
              >
                Newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  aria-invalid={!!errors.email}
                  className="h-11 flex-1 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
                  {...register("email")}
                />
                <Button
                  type="submit"
                  variant="gold"
                  size="default"
                  disabled={isSubmitting}
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {errors.email && (
                <p className="mt-2 text-xs text-red-300">{errors.email.message}</p>
              )}
              {submitted && !errors.email && (
                <p className="mt-2 text-xs text-gold">
                  Thank you for subscribing.
                </p>
              )}
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-4 lg:gap-6 xl:gap-8">
            {(
              [
                ["Company", FOOTER_LINKS.company],
                ["Investments", FOOTER_LINKS.investments],
                ["Funding Solutions", FOOTER_LINKS.funding],
                ["Investor Centre", FOOTER_LINKS.investor],
              ] as const
            ).map(([title, links]) => (
              <div key={title}>
                <h3 className="label font-sans text-gold">
                  {title}
                </h3>
                <ul className="mt-2 md:mt-5 md:space-y-3">
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
            <h3 className="label font-sans text-gold">Contact Us</h3>
            <ul className="mt-5 space-y-5 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="tap-target hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="tap-target hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:mt-16 md:pt-8">
          <p className="order-2 sm:order-1">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="order-1 flex flex-wrap gap-x-6 sm:order-2">
            <Link href="/privacy" className="tap-target hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="tap-target hover:text-white">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="tap-target hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
