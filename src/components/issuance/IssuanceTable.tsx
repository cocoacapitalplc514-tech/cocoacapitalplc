import Link from "next/link";
import type { Issuance } from "@/data/types";
import { formatIssuanceAmount, formatRate } from "@/data/issuances";
import { formatPublishedDate, statusLabel } from "@/lib/format";
import { IssuanceStatusBadge } from "@/components/ui/issuance-status-badge";
import { PublicationNotice } from "@/components/ui/publication-notice";

type IssuanceTableProps = {
  issuances: Issuance[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function IssuanceTable({
  issuances,
  emptyTitle = "No current issuance information has been published.",
  emptyDescription = "Issuance details will appear here when officially released.",
}: IssuanceTableProps) {
  if (!issuances.length) {
    return <PublicationNotice title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full min-w-[720px] text-left text-sm">
        <caption className="sr-only">Current issuances</caption>
        <thead className="bg-soft-grey">
          <tr className="border-b border-border">
            <th scope="col" className="px-4 py-3 font-medium">
              Instrument
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Series
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Issue Date
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Maturity
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Amount
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Rate
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {issuances.map((item) => (
            <tr
              key={item.id}
              className="border-b border-border last:border-0 hover:bg-soft-grey/50"
            >
              <td className="px-4 py-3">
                <Link
                  href={`/investor-relations/issuances/${item.slug}`}
                  className="font-medium text-cocoa underline-offset-2 hover:underline"
                >
                  {item.instrumentType === "bond"
                    ? "Bond"
                    : "Commercial Paper"}
                </Link>
              </td>
              <td className="px-4 py-3">{item.series}</td>
              <td className="px-4 py-3">
                {formatPublishedDate(item.issueDate)}
              </td>
              <td className="px-4 py-3">
                {formatPublishedDate(item.maturityDate)}
              </td>
              <td className="px-4 py-3">{formatIssuanceAmount(item)}</td>
              <td className="px-4 py-3">{formatRate(item.couponRate)}</td>
              <td className="px-4 py-3">
                <IssuanceStatusBadge status={item.status} />
                <span className="sr-only">{statusLabel(item.status)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
