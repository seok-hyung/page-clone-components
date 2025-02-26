import Link from 'next/link'
import ImageCarousel from './ImageCarousel'
import { HiStar } from 'react-icons/hi2'
import { useState } from 'react'
import Image from 'next/image'

interface PopularServicesItems {
  id: number
  title: string
  rating: number
  reviewCount: number
  price: number
  expertName: string
  src: string[]
  link: string
  prime?: boolean
  master?: boolean
  award?: boolean
}

export default function CarouselCard({ service }: { service: PopularServicesItems }) {
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
      <ImageCarousel title={service.title} src={service.src} isHovered={isHovered} />
      {service.prime && (
        <Image src={'/yeo/icons/prime_icon.svg'} className="mb-1" width={50} height={20} alt="프라임 아이콘" />
      )}
      <h3 className="mb-2 text-sm font-bold text-[#212224] break-all">{service.title}</h3>
      <div className="flex items-center gap-[2px]">
        <HiStar className="w-3 h-3 text-[#ffd400]" />
        <span className="text-xs text-[#212224]">{service.rating}</span>
        <span className="text-xs text-[#9a9ba7]">({service.reviewCount.toLocaleString()})</span>
      </div>
      <span className="mb-2 text-sm text-[#212224]">{service.price.toLocaleString()}원~</span>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-[#727585] break-all overflow-hidden">{service.expertName}</span>
        {service.master || service.award ? (
          <div className="flex">
            {service.master && <Image src={'/yeo/icons/master_icon.svg'} width={16} height={16} alt="마스터 아이콘" />}
            {service.award && <Image src={'/yeo/icons/award_icon.svg'} width={16} height={16} alt="어워즈 아이콘" />}
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  )
}
