"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  organisation: z.string().optional(),
  interest: z.enum(["investor-relations", "media", "general", "other"]),
  message: z.string().min(10, "Please tell us a little more"),
});

type Values = z.infer<typeof schema>;

/**
 * All enquiries go to the one published address; the label rides along in the
 * subject line so the recipient can triage.
 */
const ENQUIRY_LABELS: Record<Values["interest"], string> = {
  "investor-relations": "Investor Relations",
  media: "Media",
  general: "General enquiry",
  other: "Other",
};

const FIELD =
  "h-11 w-full border border-border bg-white px-4 text-sm text-cocoa placeholder:text-muted/50 focus:border-gold focus:outline-none";
const LABEL = "label text-forest";

export function ContactForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "general" },
  });

  /*
   * This site is a static export with no form endpoint. The previous version
   * waited 700ms and told the visitor their enquiry "has been received" — on an
   * issuer site that is a claim the site cannot honour. The form now composes
   * the enquiry and hands it to the visitor's mail client, and says so.
   */
  const onSubmit = (values: Values) => {
    const label = ENQUIRY_LABELS[values.interest];
    const subject = `${label} enquiry — ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.organisation ? `Organisation: ${values.organisation}` : null,
      `Nature of enquiry: ${label}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSentTo(SITE.email);
  };

  if (sentTo) {
    return (
      <div className="border-l-2 border-gold bg-soft-grey px-6 py-7">
        <h3 className="font-serif text-2xl text-cocoa">
          Your enquiry is ready to send.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We have opened a pre-filled message in your email application,
          addressed to{" "}
          <a
            href={`mailto:${sentTo}`}
            className="font-medium text-forest underline-offset-2 hover:underline"
          >
            {sentTo}
          </a>
          . Send it from there and the team will respond directly. If nothing
          opened, email that address yourself.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="mt-5 text-sm font-medium text-forest underline-offset-4 hover:underline"
        >
          Write another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Full name
          </label>
          <input
            id="name"
            className={`mt-2 ${FIELD}`}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`mt-2 ${FIELD}`}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-700">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="organisation" className={LABEL}>
            Organisation (optional)
          </label>
          <input
            id="organisation"
            className={`mt-2 ${FIELD}`}
            {...register("organisation")}
          />
        </div>
        <div>
          <label htmlFor="interest" className={LABEL}>
            Nature of enquiry
          </label>
          <select
            id="interest"
            className={`mt-2 ${FIELD}`}
            {...register("interest")}
          >
            <option value="investor-relations">Investor Relations</option>
            <option value="media">Media</option>
            <option value="general">General enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full border border-border bg-white px-4 py-3 text-sm text-cocoa placeholder:text-muted/50 focus:border-gold focus:outline-none"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-700">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="forest" size="lg">
        Compose enquiry
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
