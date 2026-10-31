import type { LegalDocumentProps } from "@/components/sections/legal-document"
import type { PageBannerProps } from "@/components/sections/page-banner"
import { siteConfig } from "@/config/site"
import { contactInfo } from "@/content/situs"

const bannerImage = { src: "/images/about/tt-slice.png", width: 222, height: 245 }
const name = siteConfig.name
const updated = "2026-10-31"

const common = {
  updated,
  updatedLabel: "Terakhir diperbarui",
  tocTitle: "Daftar Isi",
  help: {
    title: "Ada pertanyaan?",
    text: "Jika ada hal yang kurang jelas, hubungi kami lewat email",
    email: contactInfo.email,
    cta: { label: "Buka halaman Kontak", href: "/kontak" },
  },
}

export const syaratBanner: PageBannerProps = {
  title: "Syarat dan Ketentuan",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Syarat dan Ketentuan" }],
  image: bannerImage,
}

export const syarat: LegalDocumentProps = {
  ...common,
  intro: `Dengan mengakses dan memakai situs ${name}, Anda menyetujui syarat dan ketentuan berikut. Mohon dibaca dengan saksama. Jika Anda tidak setuju, silakan berhenti menggunakan situs ini.`,
  sections: [
    {
      id: "penerimaan",
      title: "Penerimaan syarat",
      paragraphs: [
        `Syarat ini berlaku untuk seluruh pengunjung dan pengguna situs ${name}. Dengan terus memakai situs, Anda dianggap telah membaca, memahami, dan menyetujuinya.`,
      ],
    },
    {
      id: "layanan",
      title: "Layanan kami",
      paragraphs: [
        `${name} menyediakan informasi dan layanan pendampingan bagi petani dan pelaku usaha tani. Isi situs bersifat informasi umum dan tidak menggantikan penilaian langsung di lahan Anda.`,
        "Rincian, jadwal, dan biaya setiap program pendampingan disepakati secara terpisah sebelum kerja sama dimulai.",
      ],
    },
    {
      id: "penggunaan",
      title: "Penggunaan situs",
      paragraphs: ["Anda setuju untuk memakai situs ini secara wajar dan sesuai hukum. Anda tidak diperbolehkan untuk:"],
      items: [
        "mengganggu atau merusak kinerja dan keamanan situs;",
        "mengirim data palsu, menyesatkan, atau milik orang lain tanpa izin;",
        "menyalin, menyebarkan, atau memakai isi situs untuk kepentingan komersial tanpa izin tertulis;",
        "memakai situs untuk tujuan yang melanggar hukum.",
      ],
    },
    {
      id: "formulir",
      title: "Formulir dan data yang Anda kirim",
      paragraphs: [
        "Informasi yang Anda kirim lewat formulir kontak atau newsletter harus benar dan dapat dipertanggungjawabkan. Pengelolaan data pribadi tersebut diatur dalam Kebijakan Privasi kami.",
      ],
    },
    {
      id: "kekayaan-intelektual",
      title: "Hak kekayaan intelektual",
      paragraphs: [
        `Teks, gambar, logo, dan materi lain di situs ini dimiliki oleh ${name} atau dipakai dengan izin pemiliknya, dan dilindungi hukum hak cipta yang berlaku di Indonesia. Anda boleh membagikan tautan halaman, tetapi tidak boleh menggandakan isinya tanpa izin.`,
      ],
    },
    {
      id: "tautan-pihak-ketiga",
      title: "Tautan dan layanan pihak ketiga",
      paragraphs: [
        "Situs ini dapat memuat tautan atau konten dari pihak lain, misalnya peta dan video. Kami tidak mengendalikan dan tidak bertanggung jawab atas isi maupun kebijakan situs tersebut.",
      ],
    },
    {
      id: "batasan-tanggung-jawab",
      title: "Batasan tanggung jawab",
      paragraphs: [
        "Kami berupaya menjaga informasi di situs tetap akurat dan terbaru, tetapi tidak menjamin bahwa situs selalu bebas dari kesalahan atau gangguan. Hasil panen dipengaruhi banyak faktor di luar kendali kami, seperti cuaca dan kondisi lahan, sehingga kami tidak menjamin hasil tertentu.",
        "Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs ini.",
      ],
    },
    {
      id: "perubahan",
      title: "Perubahan syarat",
      paragraphs: [
        "Kami dapat memperbarui syarat ini sewaktu-waktu. Versi terbaru selalu ditampilkan di halaman ini beserta tanggal pembaruannya. Dengan terus memakai situs setelah perubahan, Anda dianggap menyetujui syarat yang baru.",
      ],
    },
    {
      id: "hukum",
      title: "Hukum yang berlaku",
      paragraphs: [
        "Syarat ini tunduk pada hukum Republik Indonesia. Perselisihan akan kami upayakan selesai lewat musyawarah terlebih dahulu.",
      ],
    },
    {
      id: "kontak",
      title: "Kontak",
      paragraphs: [`Pertanyaan tentang syarat ini dapat disampaikan kepada ${name}, ${contactInfo.address}.`],
    },
  ],
}

export const privasiBanner: PageBannerProps = {
  title: "Kebijakan Privasi",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Kebijakan Privasi" }],
  image: bannerImage,
}

export const privasi: LegalDocumentProps = {
  ...common,
  intro: `${name} menghargai privasi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan lewat situs, untuk apa kami memakainya, dan bagaimana kami menjaganya, sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.`,
  sections: [
    {
      id: "data-dikumpulkan",
      title: "Data yang kami kumpulkan",
      paragraphs: ["Kami mengumpulkan data yang Anda berikan sendiri dan data teknis yang tercatat saat Anda memakai situs:"],
      items: [
        "formulir kontak: nama, alamat email, subjek, dan isi pesan;",
        "newsletter: alamat email;",
        "data teknis: jenis perangkat dan peramban, alamat IP, serta halaman yang dikunjungi.",
      ],
    },
    {
      id: "tujuan",
      title: "Tujuan penggunaan data",
      paragraphs: ["Data Anda kami pakai untuk:"],
      items: [
        "menjawab pertanyaan dan permintaan yang Anda kirim;",
        "mengirim newsletter bila Anda berlangganan;",
        "menjaga keamanan serta memperbaiki kinerja dan isi situs;",
        "memenuhi kewajiban hukum yang berlaku.",
      ],
    },
    {
      id: "dasar-hukum",
      title: "Dasar pemrosesan",
      paragraphs: [
        "Kami memproses data pribadi berdasarkan persetujuan yang Anda berikan saat mengirim formulir atau berlangganan, dan berdasarkan kepentingan sah untuk menjaga keamanan situs. Anda dapat menarik persetujuan kapan saja.",
      ],
    },
    {
      id: "berbagi-data",
      title: "Berbagi data",
      paragraphs: [
        "Kami tidak menjual data pribadi Anda. Data hanya dibagikan kepada penyedia layanan yang membantu mengoperasikan situs dan dilindungi kewajiban kerahasiaan, atau kepada pihak berwenang bila diwajibkan hukum.",
      ],
    },
    {
      id: "penyimpanan-keamanan",
      title: "Penyimpanan dan keamanan",
      paragraphs: [
        "Data disimpan selama diperlukan untuk tujuan di atas atau selama diwajibkan hukum, lalu dihapus atau dianonimkan. Kami menerapkan langkah pengamanan yang wajar untuk melindungi data dari akses tanpa izin, tetapi tidak ada sistem yang sepenuhnya bebas risiko.",
      ],
    },
    {
      id: "cookie",
      title: "Cookie dan penyimpanan peramban",
      paragraphs: [
        "Situs dapat memakai cookie atau penyimpanan peramban yang diperlukan agar situs berfungsi. Anda dapat mengatur atau menghapusnya lewat pengaturan peramban, dengan konsekuensi sebagian fitur mungkin tidak berjalan semestinya.",
      ],
    },
    {
      id: "hak-anda",
      title: "Hak Anda",
      paragraphs: ["Sebagai pemilik data pribadi, Anda berhak untuk:"],
      items: [
        "mengetahui dan meminta salinan data Anda yang kami simpan;",
        "meminta perbaikan data yang tidak akurat;",
        "meminta penghapusan data atau menarik persetujuan;",
        "berhenti berlangganan newsletter lewat tautan di email atau dengan menghubungi kami.",
      ],
    },
    {
      id: "anak",
      title: "Anak di bawah umur",
      paragraphs: [
        "Situs ini tidak ditujukan bagi anak di bawah 18 tahun. Jika Anda mengetahui anak mengirim data kepada kami tanpa persetujuan orang tua atau wali, hubungi kami agar data tersebut dapat dihapus.",
      ],
    },
    {
      id: "perubahan",
      title: "Perubahan kebijakan",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini beserta tanggal pembaruannya.",
      ],
    },
    {
      id: "kontak",
      title: "Kontak",
      paragraphs: [
        `Untuk menggunakan hak Anda atau bertanya tentang kebijakan ini, hubungi ${name}, ${contactInfo.address}.`,
      ],
    },
  ],
}
