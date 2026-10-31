import { SectionTitle } from "@/components/shared/section-title"
import type { ServiceCardData } from "@/components/shared/service-card"
import { ServiceGrid } from "@/components/shared/service-grid"

export type ServicesProps = {
  eyebrow: string
  title: string
  items: readonly ServiceCardData[]
}

export function Services({ eyebrow, title, items }: ServicesProps) {
  return (
    <section id="layanan" className="section-padding overflow-hidden bg-white">
      <div className="container">
        <div className="title-col-6">
          <SectionTitle uppercase eyebrow={eyebrow} title={title} className="mb-10 lg:mb-[50px] 2xl:mb-[60px]" />
        </div>
        <ServiceGrid items={items} />
      </div>
    </section>
  )
}
