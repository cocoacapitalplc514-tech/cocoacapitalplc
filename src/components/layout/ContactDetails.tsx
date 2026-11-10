import { MAPS_URL, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ContactDetailsProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * The published correspondence address. Footer and the contact page share this
 * so the two cannot drift.
 */
export function ContactDetails({
  variant = "light",
  className,
}: ContactDetailsProps) {
  const dark = variant === "dark";
  const label = dark ? "text-gold" : "text-forest";
  const body = dark ? "text-white/85" : "text-muted";
  const name = dark ? "text-white" : "text-cocoa";
  const link = dark
    ? "text-white/85 underline-offset-4 hover:text-white hover:underline"
    : "text-forest underline-offset-4 hover:underline";

  return (
    <address className={cn("not-italic", className)}>
      <p className={cn("font-medium", name)}>{SITE.address.organisation}</p>
      <p className={cn("mt-2 text-sm leading-relaxed", body)}>
        {SITE.address.street}
        <br />
        {SITE.address.poBox}
        <br />
        {SITE.address.city}, {SITE.address.country}
      </p>
      <dl className={cn("mt-4 space-y-3 text-sm", body)}>
        <div>
          <dt className={cn("text-xs font-medium uppercase tracking-[0.14em]", label)}>
            Phone
          </dt>
          <dd className="mt-1">
            {SITE.phones.map((phone, index) => (
              <span key={phone.tel}>
                {index > 0 ? " / " : null}
                <a href={`tel:${phone.tel}`} className={cn("tap-target", link)}>
                  {phone.label}
                </a>
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className={cn("text-xs font-medium uppercase tracking-[0.14em]", label)}>
            Hours
          </dt>
          <dd className="mt-1">{SITE.hours}</dd>
        </div>
        <div>
          <dt className={cn("text-xs font-medium uppercase tracking-[0.14em]", label)}>
            Digital address
          </dt>
          <dd className="mt-1">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("tap-target", link)}
            >
              {SITE.address.digitalAddress}
            </a>
          </dd>
        </div>
        <div>
          <dt className={cn("text-xs font-medium uppercase tracking-[0.14em]", label)}>
            GPS coordinates
          </dt>
          <dd className="mt-1">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("tap-target", link)}
            >
              {SITE.address.coordinates}
            </a>
          </dd>
        </div>
        <div>
          <dt className={cn("text-xs font-medium uppercase tracking-[0.14em]", label)}>
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${SITE.email}`}
              className={cn("tap-target", link)}
            >
              {SITE.email}
            </a>
          </dd>
        </div>
      </dl>
    </address>
  );
}
