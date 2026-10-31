import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageBanner } from "@/components/sections/page-banner";
import { sitePages } from "@/config/site";
import { syarat, syaratBanner } from "@/content/legal";

const page = sitePages[7];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

export default function SyaratDanKetentuanPage() {
  return (
    <>
      <PageBanner {...syaratBanner} />
      <LegalDocument {...syarat} />
    </>
  );
}
