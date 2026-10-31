"use client"

import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { FaIcon } from "@/components/shared/fa-icon"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AUTOPLAY_DELAY, SLIDE_DURATION } from "@/lib/carousel"
import { cn } from "@/lib/utils"

export type TestimonialEntry = {
  name: string
  role: string
  quote: string
  avatar: { src: string; alt: string; width: number; height: number }
}

type TestimonialSliderProps = {
  items: readonly TestimonialEntry[]
  dotLabel: string
}

type CarouselApi = Parameters<NonNullable<React.ComponentProps<typeof Carousel>["setApi"]>>[0]

/**
 * `.testimonial-slidewrap01` template (Swiper): satu kartu per tampilan, loop,
 * autoplay 2 detik tanpa jeda saat disentuh, dot di dalam tiap kartu.
 */
export function TestimonialSlider({ items, dotLabel }: TestimonialSliderProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const sync = () => setSelected(api.selectedScrollSnap())
    api.on("select", sync)
    api.on("reInit", sync)
    return () => {
      api.off("select", sync)
      api.off("reInit", sync)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, duration: SLIDE_DURATION }}
      plugins={[Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false, stopOnMouseEnter: false })]}
      className="-mx-3 -my-[30px] md:-m-[30px]"
    >
      <CarouselContent className="ml-0 md:-ml-0.5">
        {items.map((item) => (
          <CarouselItem key={item.name} className="px-3 py-[30px] md:pr-[30px] md:pl-8">
            <div className="rounded-[10px] bg-white p-5 shadow-brand xl:p-10">
              <div className="grid justify-between lg:flex">
                <div className="mb-6 flex items-center gap-3.5 xl:mb-[30px] xl:gap-5 2xl:gap-11">
                  <Image
                    src={item.avatar.src}
                    alt={item.avatar.alt}
                    width={item.avatar.width}
                    height={item.avatar.height}
                    className="rounded-[10px]"
                  />
                  <div>
                    <h3 className="mb-[5px] text-xl font-normal text-forest xl:mb-0 xl:text-[27px] 2xl:text-[30px]">
                      {item.name}
                    </h3>
                    <span className="block text-base text-muted-foreground">{item.role}</span>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="mb-[18px] flex items-center gap-[7px] xl:mb-5 [&>svg:not(:last-child)]:text-accent"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <FaIcon key={star} name="solid-star" />
                  ))}
                </div>
              </div>
              <p className="text-[15px] leading-[26px] text-muted-foreground xl:text-[19px] xl:leading-[30px]">
                {item.quote}
              </p>
              <div className="mt-5 flex items-center justify-start 2xl:mt-10" role="group" aria-label={dotLabel}>
                {items.map((dot, dotIndex) => (
                  <button
                    key={dot.name}
                    type="button"
                    aria-label={`${dotLabel}: ${dot.name}`}
                    aria-current={dotIndex === selected || undefined}
                    onClick={() => api?.scrollTo(dotIndex)}
                    className={cn(
                      "mx-1 shrink-0 cursor-pointer rounded-[10px] bg-muted",
                      dotIndex === selected ? "size-[18px] border-[5px] border-primary bg-white" : "size-2.5"
                    )}
                  />
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
