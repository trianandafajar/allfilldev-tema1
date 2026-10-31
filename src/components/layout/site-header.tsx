import Image from "next/image"
import Link from "next/link"

import { HeaderShell } from "@/components/layout/header-shell"
import { MainMenu } from "@/components/layout/main-menu"
import { Offcanvas } from "@/components/layout/offcanvas"
import { FaIcon } from "@/components/shared/fa-icon"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { headerCta, navItems } from "@/content/situs"

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} - Beranda`} className="block">
              <Image
                src="/images/logo/logo.png"
                alt={siteConfig.name}
                width={186}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4 xl:gap-2.5 2xl:gap-10">
            <MainMenu items={navItems} />
            <div className="flex items-center gap-2.5 max-[500px]:hidden 2xl:gap-[18px]">
              <div className="hidden sm:block">
                <Button
                  asChild
                  variant="brand"
                  size="cta"
                  className="inline-flex h-[42px] items-center justify-center gap-2 px-3.5 py-3 text-xs font-medium md:h-[49px] md:px-4 md:py-2 md:text-[13px] md:font-normal 2xl:h-[60px] 2xl:px-[30px] 2xl:py-[18px] 2xl:text-[15px]"
                >
                  <Link href={headerCta.href}>
                    {headerCta.label}
                    <FaIcon name="solid-chevron-right" />
                  </Link>
                </Button>
              </div>
            </div>
            <Offcanvas />
          </div>
        </div>
      </div>
    </HeaderShell>
  )
}
