import type { Metadata } from "next";
import { Mali, Montserrat, Noto_Serif } from "next/font/google";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { Preloader } from "@/components/shared/preloader";
import { siteConfig } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const mali = Mali({
  variable: "--font-mali",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${montserrat.variable} ${notoSerif.variable} ${mali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader
          name={siteConfig.name}
          image={{ src: "/images/banner/preloader.png", width: 200, height: 200 }}
        />
        <JsonLd data={organizationJsonLd} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
