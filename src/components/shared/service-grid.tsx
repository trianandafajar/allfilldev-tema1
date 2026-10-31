import { ServiceCard, type ServiceCardData } from "@/components/shared/service-card"

export function ServiceGrid({ items }: { items: readonly ServiceCardData[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
      {items.map((item) => (
        <ServiceCard key={item.href} {...item} />
      ))}
    </div>
  )
}
