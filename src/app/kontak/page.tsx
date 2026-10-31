import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";
import { ContactInfo } from "@/components/sections/contact-info";
import { PageBanner } from "@/components/sections/page-banner";
import { MapEmbed } from "@/components/shared/map-embed";
import { sitePages } from "@/config/site";
import { contact } from "@/content/beranda";
import { banner, info, map } from "@/content/kontak";
import { pageMetadata } from "@/lib/seo";

const page = sitePages[2];

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function KontakPage() {
  return (
    <>
      <PageBanner {...banner} />
      <Contact
        {...contact}
        className="pb-12 before:hidden before:h-12 before:bg-white before:content-[''] md:before:block xl:pb-20 xl:before:h-20"
        formClassName="py-8 min-[501px]:py-12 xl:py-20"
      />
      <MapEmbed {...map} />
      <ContactInfo {...info} />
    </>
  );
}
