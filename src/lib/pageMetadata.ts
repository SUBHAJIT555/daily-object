import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description?: string): Metadata {
  return {
    metadataBase: new URL(siteConfig.brand.url),
    title,
    description,
    applicationName: siteConfig.brand.name,
    openGraph: {
      siteName: siteConfig.brand.name,
      locale: "en_IN",
      type: "website",
    },
  };
}
