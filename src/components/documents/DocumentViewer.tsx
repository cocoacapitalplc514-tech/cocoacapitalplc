import { Download, ExternalLink } from "lucide-react";

type DocumentViewerProps = {
  title: string;
  fileUrl: string;
};

/**
 * In-page PDF viewer. The file is served from `public/` so the browser’s
 * built-in viewer can render it without a third-party script.
 */
export function DocumentViewer({ title, fileUrl }: DocumentViewerProps) {
  return (
    <div className="border border-border bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <p className="text-sm font-medium text-cocoa">Document</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-forest underline-offset-4 hover:underline"
          >
            Open in new tab
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href={fileUrl}
            download
            className="inline-flex items-center gap-1.5 font-medium text-forest underline-offset-4 hover:underline"
          >
            Download
            <Download className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <iframe
        src={`${fileUrl}#navpanes=0&view=FitH`}
        title={title}
        className="h-[75vh] min-h-[28rem] w-full bg-[#525659]"
      />
    </div>
  );
}
