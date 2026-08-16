import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { defaultMetadata } from "@/lib/seo";
import SiteLayoutClient from "./SiteLayoutClient";
import "../css/zodiak-font.css";
import "../css/style.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body className="min-h-screen bg-gray-1" suppressHydrationWarning>
        <SiteLayoutClient>{children}</SiteLayoutClient>
      </body>
    </html>
  );
}
