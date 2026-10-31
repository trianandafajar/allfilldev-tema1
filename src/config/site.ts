export const siteConfig = {
  name: "AgriHub",
  description: "AgriHub mendampingi petani dan pelaku usaha tani lewat konsultasi, teknologi panen, dan solusi tanam yang berkelanjutan.",
  language: "id",
  locale: "id_ID",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const sitePages = [
  { path: "/", title: "Beranda", description: siteConfig.description },
  {
    path: "/tentang",
    title: "Tentang Kami",
    description: "Kenali AgriHub: tim, nilai, dan layanan kami dalam mendampingi petani menuju hasil panen yang lebih baik.",
  },
  {
    path: "/kontak",
    title: "Kontak",
    description: "Hubungi AgriHub lewat alamat, telepon, email, atau formulir untuk konsultasi dan pertanyaan seputar layanan kami.",
  },
] as const;
