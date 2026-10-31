import type { AboutIntroProps } from "@/components/sections/about-intro"
import type { PageBannerProps } from "@/components/sections/page-banner"
import type { ServiceCardsProps } from "@/components/sections/service-cards"
import type { WhoWeAreProps } from "@/components/sections/who-we-are"

export const banner: PageBannerProps = {
  title: "Tentang Kami",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }],
  image: { src: "/images/about/tt-slice.png", width: 222, height: 245 },
}

export const intro: AboutIntroProps = {
  eyebrow: "Mengapa Kami",
  title: "Membawa hasil bumi terbaik ke meja Anda",
  description:
    "AgriHub berawal dari kelompok tani kecil di Lembang. Kini kami mendampingi petani dan pelaku usaha tani dari pemilihan benih, perawatan lahan, hingga panen dan penjualan.",
  progress: [
    { label: "Murni dan Organik", value: 70 },
    { label: "Pangan Sehat", value: 80 },
  ],
  cta: { label: "Selengkapnya", href: "/layanan" },
  image: { src: "/images/about/choose-man.png", alt: "Petani membawa hasil panen segar", width: 546, height: 546 },
  decorations: {
    side: { src: "/images/about/f-food.png", width: 162, height: 162 },
    top: { src: "/images/about/l-food.png", width: 130, height: 130 },
    bottom: { src: "/images/about/t-food.png", width: 130, height: 130 },
  },
}

export const services: ServiceCardsProps = {
  eyebrow: "Layanan Terbaru",
  title: "Menuai impian, satu panen demi satu panen",
  readMore: "Selengkapnya",
  items: [
    {
      icon: "/images/icon/count1.svg",
      title: "Tanam Hijau",
      text: "Pendampingan budidaya ramah lingkungan sesuai musim dan kondisi lahan.",
      href: "/layanan",
    },
    {
      icon: "/images/icon/wheat-sesh.svg",
      title: "Konsultasi Tani",
      text: "Konsultan lapangan membantu merencanakan tanam, pupuk, dan pengendalian hama.",
      href: "/layanan",
    },
    {
      icon: "/images/icon/smart-flower.svg",
      title: "Tani Cerdas",
      text: "Teknologi tepat guna untuk memantau lahan dan meningkatkan hasil panen.",
      href: "/layanan",
    },
  ],
}

export const who: WhoWeAreProps = {
  eyebrow: "Siapa Kami",
  title: "Menyuburkan negeri dari benih hingga meja makan",
  description:
    "Kami bekerja bersama petani lokal agar hasil panen meningkat tanpa merusak tanah, dan sampai ke konsumen dengan harga yang adil.",
  values: [
    { icon: "/images/icon/hand-planp900.svg", title: "Tumbuh Kuat dan Menghidupi", href: "/layanan" },
    { icon: "/images/icon/wheath-p900.svg", title: "Merawat Bumi", href: "/layanan" },
  ],
  image: { src: "/images/about/feature-thumb-2.png", alt: "Petani merawat tanaman di ladang", width: 1254, height: 1254 },
  decoration: { src: "/images/element/who-element.png", width: 681, height: 510 },
}
