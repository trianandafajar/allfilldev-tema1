import Image from "next/image"
import Link from "next/link"

import { FaIcon } from "@/components/shared/fa-icon"
import { Reveal } from "@/components/shared/reveal"
import { SocialLinks } from "@/components/shared/social-links"
import { siteConfig } from "@/config/site"
import { contactInfo, footerContent, footerSocials } from "@/content/situs"

const widgetTitle = "text-[26px] leading-[130%] font-normal text-white lg:text-[30px]"
const widgetHead = "mb-[17px] lg:mb-7"
const listLink =
  "flex items-center gap-2 text-base leading-[28px] font-normal text-white/70 transition-all duration-400 hover:ms-[5px] hover:text-accent lg:gap-[15px]"

export function SiteFooter() {
  return (
    <footer className="relative z-1 overflow-hidden bg-forest">
      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(12,minmax(0,1fr))]">
            <Reveal delay={0.3}>
              <div className="lg:col-span-3 xl:col-span-4">
                <div className={widgetHead}>
                  <Link href="/" aria-label={`${siteConfig.name} - Beranda`} className="inline-block">
                    <Image src="/images/logo/logo-light.png" alt={siteConfig.name} width={186} height={40} />
                  </Link>
                </div>
                <div>
                  <p className="mb-[22px] text-base leading-[30px] font-normal text-white/70 lg:mb-[30px]">
                    {footerContent.description}
                  </p>
                  <SocialLinks links={footerSocials} variant="footer" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="lg:col-span-2">
                <div className={widgetHead}>
                  <h3 className={widgetTitle}>{footerContent.linksTitle}</h3>
                </div>
                <ul className="grid gap-[9px] lg:gap-3.5">
                  {footerContent.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={listLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="lg:col-span-3">
                <div className={widgetHead}>
                  <h3 className={widgetTitle}>{footerContent.contactTitle}</h3>
                </div>
                <ul className="grid gap-2.5 lg:gap-4">
                  <li>
                    <a href={`mailto:${contactInfo.email}`} className={`${listLink} items-start`}>
                      <FaIcon name="solid-envelope" className="text-base leading-loose text-primary" />
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${listLink} items-start`}>
                      <FaIcon name="solid-location-dot" className="text-base leading-loose text-primary" />
                      <span>{contactInfo.address}</span>
                    </a>
                  </li>
                  <li>
                    <a href={contactInfo.phones[0].href} className={`${listLink} items-start`}>
                      <FaIcon name="solid-phone" className="text-base leading-loose text-primary" />
                      <span>
                        {contactInfo.phones.map((phone, index) => (
                          <span key={phone.href}>
                            {index > 0 ? <br /> : null}
                            {phone.label}
                          </span>
                        ))}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="lg:col-span-3">
                <div className={widgetHead}>
                  <h3 className={widgetTitle}>{footerContent.galleryTitle}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {footerContent.gallery.map((photo) => (
                    <Image
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      width={73}
                      height={73}
                      className="rounded-[20px]"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative z-9">
        <div className="container">
          <div className="relative z-9 grid items-center justify-center gap-2 border-t border-white/30 py-[26px] text-center md:flex md:justify-between md:gap-0 md:text-start">
            <Reveal animation="left" delay={0.3}>
              <p className="text-sm leading-[25.6px] font-normal text-white/70 sm:text-base">
                &copy; {siteConfig.copyrightYear} {siteConfig.name}. {footerContent.copyright}
              </p>
            </Reveal>
            <Reveal animation="right" delay={0.5}>
              <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-px sm:gap-[30px]">
                {footerContent.legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-white/70 hover:text-accent sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <Image
        src="/images/footer/footer-shape2.png"
        alt=""
        aria-hidden
        width={1908}
        height={497}
        className="pointer-events-none absolute bottom-0 left-0 -z-1 h-auto w-full"
      />
    </footer>
  )
}
