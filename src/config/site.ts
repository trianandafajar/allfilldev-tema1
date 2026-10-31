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
] as const;
