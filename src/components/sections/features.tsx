import Image from "next/image"
import Link from "next/link"

import { ButtonLabel } from "@/components/shared/button-label"
import { FaIcon } from "@/components/shared/fa-icon"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"
import { Button } from "@/components/ui/button"

export type FeaturesProps = {
  eyebrow: string
  title: string
  description: string
  items: readonly string[]
  cta: { label: string; href: string }
  image: { src: string; alt: string; width: number; height: number }
  decoration: { src: string; width: number; height: number }
}

export function Features({
  eyebrow,
  title,
  description,
  items,
  cta,
  image,
  decoration,
}: FeaturesProps) {
  return (
    <section
      id="fitur"
      className="space-top relative z-1 overflow-hidden bg-forest pb-[70px] before:absolute before:bottom-0 before:left-0 before:-z-1 before:hidden before:h-[107px] before:w-full before:bg-white before:content-[''] xl:pb-0 xl:before:block"
    >
      <div className="container">
        <div className="grid items-center justify-center gap-6 md:grid-cols-2 lg:items-start xl:grid-cols-[calc((5/12)*(100%+24px)-24px)_calc((7/12)*(100%+24px)-24px)]">
          <div className="mx-auto w-full sm:w-[calc((10/12)*(100%+24px)-24px)] md:mx-0 md:w-auto">
            <div className="mb-6 lg:mb-[30px] 2xl:mb-10">
              <SectionTitle
                uppercase
                align="left"
                tone="dark"
                eyebrow={eyebrow}
                title={title}
                titleClassName="mb-4 text-[32px] sm:text-[36px] md:text-[40px] lg:mb-5 2xl:mb-6 2xl:text-[50px]"
                description={description}
                descriptionClassName="mb-4 text-[15px] text-white lg:mb-6 2xl:text-base"
              />
              <ul className="mb-6 grid gap-2 lg:mb-[30px] 2xl:mb-10">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm leading-[30px] text-white lg:text-base"
                  >
                    <FaIcon name="solid-check" className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand-outline-light" size="cta" className="inline-block">
                <Link href={cta.href}>
                  <ButtonLabel iconClassName="text-primary group-hover/button:text-white">{cta.label}</ButtonLabel>
                </Link>
              </Button>
            </div>
          </div>
          <Reveal animation="down" delay={0.3}>
            <div className="relative mx-auto w-full sm:w-[calc((8/12)*(100%+24px)-24px)] md:mx-0 md:w-auto lg:pl-12">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <Image
        src={decoration.src}
        alt=""
        width={decoration.width}
        height={decoration.height}
        aria-hidden
        className="absolute bottom-0 left-0 -z-1 max-w-none xl:bottom-[107px]"
      />
    </section>
  )
}
