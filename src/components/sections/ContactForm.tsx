"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  organisation: z.string().optional(),
  interest: z.enum(["invest", "funding", "media", "other"]),
  message: z.string().min(10, "Please tell us a little more"),
});

type Values = z.infer<typeof schema>;

const FIELD =
  "h-11 w-full rounded-md border border-border bg-white px-4 text-sm text-cocoa placeholder:text-muted/50 focus:border-gold focus:outline-none";
const LABEL =
  "text-[11px] font-medium uppercase tracking-[0.16em] text-muted";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "invest" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-white p-6 text-center sm:p-10">
        <h3 className="font-serif text-2xl text-cocoa">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your enquiry has been received. A member of our Accra team will
          respond within two business days.
        </p>
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
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
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
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
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
            I am interested in
          </label>
          <select
            id="interest"
            className={`mt-2 ${FIELD}`}
            {...register("interest")}
          >
            <option value="invest">Investing</option>
            <option value="funding">Funding</option>
            <option value="media">Media</option>
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
          className="mt-2 w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-cocoa placeholder:text-muted/50 focus:border-gold focus:outline-none"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="forest" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending" : "Send Enquiry"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
