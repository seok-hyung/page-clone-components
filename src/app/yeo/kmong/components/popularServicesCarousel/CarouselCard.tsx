import Link from 'next/link'
import ImageCarousel from './ImageCarousel'
import { HiStar } from 'react-icons/hi2'
import { useState } from 'react'

interface PopularServicesItems {
  id: number
  title: string
  rating: number
  reviewCount: number
  price: string
  expertName: string
  src: string[]
  link: string
}

export default function CarouselCard({
  service,
}: {
  service: PopularServicesItems
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)

  const handleMoustLeave = () => setIsHovered(false)

  return (
    <Link
      href={service.link}
      key={service.id}
      className="flex flex-col flex-[0_0_20%] max-w-[214px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMoustLeave}>
      <ImageCarousel
        title={service.title}
        src={service.src}
        isHovered={isHovered}
      />
      <h3 className="mb-2 text-sm font-bold text-[#212224] break-all">
        {service.title}
      </h3>
      <div className="flex items-center gap-[2px]">
        <HiStar className="w-3 h-3 text-[#ffd400]" />
        <span className="text-xs text-[#212224]">{service.rating}</span>
        <span className="text-xs text-[#9a9ba7]">
          ({service.reviewCount.toLocaleString()})
        </span>
      </div>
      <span className="mb-2 text-sm text-[#212224]">{service.price}~</span>
      <span className="text-xs text-[#727585] break-all overflow-hidden">
        {service.expertName}
      </span>
    </Link>
  )
}
