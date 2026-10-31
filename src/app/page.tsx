import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { Brands } from "@/components/sections/brands";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { sitePages } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import {
  about,
  blog,
  brands,
  contact,
  faq,
  features,
  gallery,
  hero,
  pricing,
  services,
  stats,
  testimonials,
} from "@/content/beranda";

const page = sitePages[0];

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function Home() {
  return (
    <>
      <Hero {...hero} />
      <Services {...services} />
      <About {...about} />
      <Gallery {...gallery} />
      <Features {...features} />
      <Pricing {...pricing} />
      <Stats {...stats} />
      <Faq {...faq} />
      <Brands {...brands} />
      <Testimonials {...testimonials} />
      <Blog {...blog} />
      <Contact {...contact} />
    </>
  );
}
