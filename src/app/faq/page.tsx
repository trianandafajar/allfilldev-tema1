import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";
import { FaqList } from "@/components/sections/faq-list";
import { PageBanner } from "@/components/sections/page-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { sitePages } from "@/config/site";
import { contact } from "@/content/beranda";
import { banner, list, schema } from "@/content/faq";

const page = sitePages[6];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
};

export default function FaqPage() {
  return (
    <>
      <PageBanner {...banner} />
      <FaqList {...list} />
      <Contact {...contact} />
      <JsonLd data={schema} />
    </>
  );
}
