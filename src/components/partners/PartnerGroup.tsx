import type { ProgrammeParty } from "@/data/types";

export function PartnerGroup({ parties }: { parties: ProgrammeParty[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {parties.map((group) => (
        <div key={group.role} className="border border-border bg-white px-6 py-6 md:px-7 md:py-7">
          <p className="label text-forest">{group.role}</p>
          <ul className="mt-4 space-y-2">
            {group.organisations.map((org) => (
              <li key={org} className="font-serif text-lg text-cocoa md:text-xl">
                {org}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
