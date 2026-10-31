import type { ContactInfoProps } from "@/components/sections/contact-info"
import type { PageBannerProps } from "@/components/sections/page-banner"
import { contactInfo } from "@/content/situs"

export const banner: PageBannerProps = {
  title: "Kontak",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Kontak" }],
  image: { src: "/images/about/tt-slice.png", width: 222, height: 245 },
}

export const info: ContactInfoProps = {
  items: [
    { icon: "solid-location-dot", title: "Alamat", lines: [{ text: contactInfo.address }] },
    {
      icon: "solid-phone",
      title: "Hubungi Kami",
      lines: contactInfo.phones.map((phone) => ({ text: phone.label, href: phone.href })),
    },
    {
      icon: "solid-envelope",
      title: "Kirim Email",
      lines: [{ text: contactInfo.email, href: `mailto:${contactInfo.email}` }],
    },
  ],
}

export const map = {
  query: "Indonesia",
  zoom: 5,
  title: "Peta Indonesia",
}
