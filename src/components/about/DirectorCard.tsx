import Image from "next/image";
import type { Director } from "@/data/types";
import { PublicationNotice } from "@/components/ui/publication-notice";

const HONORIFICS = new Set(["mr", "mrs", "ms", "dr", "prof"]);

function initials(name: string) {
  const parts = name
    .split(/\s+/)
    .map((part) => part.replace(/\./g, ""))
    .filter((part) => part && !HONORIFICS.has(part.toLowerCase()));

  if (!parts.length) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

function DirectorFacts({ director }: { director: Director }) {
  const facts = [
    director.appointmentDate
      ? { label: "Appointed", value: director.appointmentDate }
      : null,
    director.nominatingParty
      ? { label: "Nominated by", value: director.nominatingParty }
      : null,
  ].filter((fact) => fact != null);

  if (!facts.length && !director.otherRoles?.length) return null;

  return (
    <dl className="mt-5 space-y-3 text-sm">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="label text-forest">{fact.label}</dt>
          <dd className="mt-1 text-cocoa">{fact.value}</dd>
        </div>
      ))}
      {director.otherRoles?.length ? (
        <div>
          <dt className="label text-forest">Other roles</dt>
          <dd className="mt-1 text-cocoa">
            <ul className="space-y-1">
              {director.otherRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </dd>
        </div>
      ) : null}
    </dl>
  );
}

export function DirectorCard({ director }: { director: Director }) {
  return (
    <article className="border border-border bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="grid gap-6 md:grid-cols-[16rem_1fr] md:gap-10">
        <div>
          {director.image ? (
            <Image
              src={director.image}
              alt=""
              width={362}
              height={422}
              className="mb-5 h-auto w-44 bg-soft-grey object-cover sm:w-48"
            />
          ) : (
            <div className="mb-4 flex h-16 w-16 items-center justify-center bg-soft-grey font-serif text-xl text-cocoa">
              {initials(director.name)}
            </div>
          )}
          <h3 className="font-serif text-xl text-cocoa">{director.name}</h3>
          <p className="mt-1 text-sm font-medium text-forest">{director.role}</p>
          <DirectorFacts director={director} />
        </div>
        {director.biography?.length ? (
          <div className="space-y-4 text-sm leading-relaxed text-muted md:pt-1">
            {director.biography.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
      {director.committees?.length ? (
        <p className="mt-5 text-xs text-muted">
          Committees: {director.committees.join(", ")}
        </p>
      ) : null}
    </article>
  );
}

function DirectorRoster({ directors }: { directors: Director[] }) {
  return (
    <div className="overflow-x-auto border border-border bg-white">
      <table className="w-full min-w-[880px] text-left text-sm">
        <caption className="sr-only">
          Board of Directors of Cocoa Capital PLC
        </caption>
        <thead className="bg-soft-grey">
          <tr className="border-b border-border">
            <th scope="col" className="px-4 py-3 font-medium text-cocoa">
              Director
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-cocoa">
              Position
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-cocoa">
              Appointment date
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-cocoa">
              Nominating party
            </th>
            <th scope="col" className="px-4 py-3 font-medium text-cocoa">
              Other role / directorships
            </th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr
              key={director.id}
              className="border-b border-border align-top last:border-0"
            >
              <th
                scope="row"
                className="px-4 py-4 font-serif text-base font-normal text-cocoa"
              >
                {director.name}
              </th>
              <td className="px-4 py-4 text-forest">{director.role}</td>
              <td className="px-4 py-4 text-cocoa">
                {director.appointmentDate ?? "—"}
              </td>
              <td className="px-4 py-4 text-cocoa">
                {director.nominatingParty ?? "—"}
              </td>
              <td className="px-4 py-4 text-muted">
                {director.otherRoles?.length ? (
                  <ul className="space-y-1">
                    {director.otherRoles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DirectorGrid({ directors }: { directors: Director[] }) {
  if (!directors.length) {
    return (
      <PublicationNotice
        title="Board details will be published when available."
        description="Director names and biographies will appear here once confirmed in official disclosures."
      />
    );
  }

  return (
    <div className="space-y-16">
      <div>
        <h2 className="font-serif text-2xl text-cocoa md:text-3xl">
          Board composition
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Appointment dates are statutory appointment dates.
        </p>
        <div className="mt-6">
          <DirectorRoster directors={directors} />
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-cocoa md:text-3xl">
          Profiles of the Directors
        </h2>
        <div className="mt-6 space-y-5">
          {directors.map((director) => (
            <DirectorCard key={director.id} director={director} />
          ))}
        </div>
      </div>
    </div>
  );
}
