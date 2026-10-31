import Image from "next/image"
import Link from "next/link"

import { ButtonLabel } from "@/components/shared/button-label"
import { FaIcon } from "@/components/shared/fa-icon"
import { ProgressBar } from "@/components/shared/progress-bar"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"
import { VideoDialog } from "@/components/shared/video-dialog"
import { Button } from "@/components/ui/button"

export type AboutProps = {
  eyebrow: string
  title: string
  description: string
  progress: readonly { label: string; value: number }[]
  cta: { label: string; href: string }
  image: { src: string; alt: string; width: number; height: number }
  badge: { icon: string; title: string; text: string }
  video: { label: string; title: string; videoId: string }
}

export function About({
  eyebrow,
  title,
  description,
  progress,
  cta,
  image,
  badge,
  video,
}: AboutProps) {
  return (
    <section id="tentang" className="overflow-hidden bg-white">
      <div className="container">
        <div className="grid items-center justify-center gap-6 md:grid-cols-2">
          <Reveal animation="down" delay={0.3}>
            <div className="relative order-1 mx-auto w-full sm:w-[calc((2/3)*(100%+24px)-24px)] md:order-0 md:w-full xl:pr-6">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
              />
              <div className="absolute right-2.5 bottom-5 flex items-center gap-2.5 rounded-[100px] bg-white p-2.5 lg:right-[90px] lg:bottom-[26px] lg:gap-[17px] lg:py-3.5 lg:pr-5 lg:pl-3.5">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-primary lg:size-[72px]">
                  <Image
                    src={badge.icon}
                    alt=""
                    width={43}
                    height={43}
                    aria-hidden
                    className="w-[21px] lg:w-[43px]"
                  />
                </div>
                <div className="max-w-[140px] lg:max-w-none">
                  <h5 className="mb-0.5 text-base leading-[22px] font-normal text-forest lg:text-xl lg:leading-[30px]">
                    {badge.title}
                  </h5>
                  <span className="text-xs leading-[160%] font-normal text-muted-foreground lg:text-sm">
                    {badge.text}
                  </span>
                </div>
              </div>
              <VideoDialog videoId={video.videoId} title={video.title}>
                <button
                  type="button"
                  aria-label={video.label}
                  className="absolute top-[32%] right-[30%] animate-zoom-pulse cursor-pointer text-[39px] text-primary md:text-5xl xl:right-[34%]"
                >
                  <FaIcon name="solid-play" />
                </button>
              </VideoDialog>
            </div>
          </Reveal>

          <div>
            <div className="mb-6 lg:mb-[30px] 2xl:mb-10">
              <SectionTitle
                uppercase
                align="left"
                eyebrow={eyebrow}
                title={title}
                titleClassName="mb-5 text-[34px] xl:text-[40px] 2xl:text-[50px]"
                description={description}
                descriptionClassName="mb-[30px] text-muted-foreground"
              />
              <div className="mb-10 grid gap-6">
                {progress.map((item) => (
                  <ProgressBar key={item.label} {...item} />
                ))}
              </div>
              <Button asChild variant="brand" size="cta" className="inline-block">
                <Link href={cta.href}>
                  <ButtonLabel>{cta.label}</ButtonLabel>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
