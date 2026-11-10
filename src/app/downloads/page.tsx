import { DownloadsCentre } from "@/components/documents/DownloadsCentre";
import { PUBLISHED_DOCUMENTS } from "@/data/documents";

// Server component: only the published documents are sent to the browser.
export default function DownloadsPage() {
  return <DownloadsCentre documents={PUBLISHED_DOCUMENTS} />;
}
