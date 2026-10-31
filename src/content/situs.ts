import type { SocialLink } from "@/components/shared/social-links"

export type NavLink = { label: string; href: string }

export type NavItem = NavLink & {
  children?: readonly NavLink[]
  /** Mega-menu pratinjau (dropdown "Beranda" di template). */
  previews?: readonly { label: string; title: string; href: string; image: string }[]
}

export const navItems: readonly NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proyek", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
]

export const headerCta: NavLink = { label: "Minta Penawaran", href: "/kontak" }

export const contactInfo = {
  address: "Jl. Raya Tani Makmur No. 45, Lembang, Bandung Barat, Jawa Barat 40391",
  email: "halo@example.com",
  phones: [
    { label: "+62 812-3456-7890", href: "tel:+6281234567890" },
    { label: "+62 22 1234 5678", href: "tel:+622212345678" },
  ],
  hours: "Senin–Jumat, 06.00–14.00 WIB",
}

export const offcanvasSocials: readonly SocialLink[] = [
  { network: "facebook", label: "Facebook AgriHub", href: "#" },
  { network: "twitter", label: "Twitter AgriHub", href: "#" },
  { network: "youtube", label: "YouTube AgriHub", href: "#" },
  { network: "linkedin", label: "LinkedIn AgriHub", href: "#" },
]

export const footerSocials: readonly SocialLink[] = [
  { network: "facebook", label: "Facebook AgriHub", href: "#" },
  { network: "x", label: "X AgriHub", href: "#" },
  { network: "linkedin", label: "LinkedIn AgriHub", href: "#" },
  { network: "pinterest", label: "Pinterest AgriHub", href: "#" },
]

export const offcanvasContent = {
  contactTitle: "Info Kontak",
  socialTitle: "Media Sosial",
  closeLabel: "Tutup menu",
  openLabel: "Buka menu",
}

export const footerContent = {
  description:
    "AgriHub mendampingi petani dan pelaku usaha tani menuju hasil panen yang lebih baik dan berkelanjutan.",
  linksTitle: "Layanan",
  links: [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Layanan", href: "/layanan" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog & Berita", href: "/blog" },
  ] satisfies NavLink[],
  contactTitle: "Kontak",
  galleryTitle: "Buletin",
  gallery: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/images/footer/ln${n}.png`,
    alt: `Foto kegiatan lapangan ${n}`,
  })),
  copyright: "Hak cipta dilindungi.",
  legalLinks: [
    { label: "Syarat & Ketentuan", href: "/kontak" },
    { label: "Kebijakan Privasi", href: "/kontak" },
    { label: "Hubungi Kami", href: "/kontak" },
  ] satisfies NavLink[],
}
