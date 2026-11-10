import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads Centre",
  description:
    "Search and download Cocoa Capital PLC programme documents and notices.",
};

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
