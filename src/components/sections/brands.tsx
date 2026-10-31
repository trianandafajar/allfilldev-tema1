import { BrandSlider } from "@/components/shared/brand-slider"

export type BrandsProps = {
  label: string
  items: readonly { src: string; alt: string; width: number; height: number }[]
}

export function Brands({ label, items }: BrandsProps) {
  return (
    <section aria-label={label} className="section-padding bg-white">
      <div className="container">
        <BrandSlider items={items} />
      </div>
    </section>
  )
}
