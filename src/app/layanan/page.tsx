import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";
import { PageBanner } from "@/components/sections/page-banner";
import { ServiceList } from "@/components/sections/service-list";
import { sitePages } from "@/config/site";
import { contact } from "@/content/beranda";
import { listBanner, serviceCards } from "@/content/layanan";

const page = sitePages[3];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

export default function LayananPage() {
  return (
    <>
      <PageBanner {...listBanner} />
      <ServiceList items={serviceCards} />
      <Contact {...contact} />
    </>
  );
}
