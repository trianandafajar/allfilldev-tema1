import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";
import { GalleryList } from "@/components/sections/gallery-list";
import { PageBanner } from "@/components/sections/page-banner";
import { sitePages } from "@/config/site";
import { contact } from "@/content/beranda";
import { galleryCards, listBanner } from "@/content/galeri";

const page = sitePages[4];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

export default function GaleriPage() {
  return (
    <>
      <PageBanner {...listBanner} />
      <GalleryList items={galleryCards} />
      <Contact {...contact} />
    </>
  );
}
