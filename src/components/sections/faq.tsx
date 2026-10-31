import Image from "next/image"

import { FaqAccordion, type FaqEntry } from "@/components/shared/faq-accordion"
import { PlayButton } from "@/components/shared/play-button"
import { SectionTitle } from "@/components/shared/section-title"
import { VideoDialog } from "@/components/shared/video-dialog"

export type FaqProps = {
  eyebrow: string
  title: string
  description: string
  video: { label: string; title: string; videoId: string }
  items: readonly FaqEntry[]
  decoration: { src: string; width: number; height: number }
}

export function Faq({ eyebrow, title, description, video, items, decoration }: FaqProps) {
  return (
    <section id="faq" className="section-padding relative z-1 bg-secondary">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-2 md:gap-6">
          <div className="w-full md:w-[calc((6/12)*(100%+24px)-24px)] lg:w-[calc((5/12)*(100%+24px)-24px)]">
            <div className="mb-6 lg:mb-[30px] 2xl:mb-10">
              <SectionTitle
                uppercase
                align="left"
                eyebrow={eyebrow}
                title={title}
                titleClassName="mb-3.5 max-w-[462px] xl:mb-5"
                description={description}
                descriptionClassName="mb-6 text-muted-foreground xl:mb-[30px]"
              />
              <div className="ml-11 inline-flex items-center gap-3 rounded-[20px] bg-white px-5 py-2.5 lg:ml-5 xl:gap-[15px] xl:px-10">
                <VideoDialog videoId={video.videoId} title={video.title}>
                  <PlayButton label={video.label} className="-ml-[61px] bg-primary text-white" />
                </VideoDialog>
                <h5 className="text-base leading-[19px] font-medium text-forest xl:text-xl xl:leading-[30px]">
                  {video.label}
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc((6/12)*(100%+24px)-24px)]">
            <FaqAccordion items={items} />
          </div>
        </div>
      </div>
      <Image
        src={decoration.src}
        alt=""
        width={decoration.width}
        height={decoration.height}
        aria-hidden
        className="absolute bottom-0 left-0 -z-1 hidden w-[190px] max-w-none min-[1601px]:w-auto lg:block"
      />
    </section>
  )
}
