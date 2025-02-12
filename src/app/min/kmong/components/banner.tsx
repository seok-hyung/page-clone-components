'use client'

import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import Banner1 from '@public/min/mainBanner1.png'
import Banner2 from '@public/min/mainBanner2.png'
import Banner3 from '@public/min/mainBanner3.png'
import Banner4 from '@public/min/mainBanner4.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Banners = [
  { source: Banner1, alt: 'banner1', width: 700, height: 280 },
  { source: Banner2, alt: 'banner2', width: 700, height: 280 },
  { source: Banner3, alt: 'banner3', width: 700, height: 280 },
  { source: Banner4, alt: 'banner4', width: 700, height: 280 },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 4

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentSlide(swiper.realIndex + 1)
  }
  return (
    <div className="relative mx-auto my-8 max-w-[2150px]">
      <Swiper
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={handleSlideChange}
        className="relative mySwiper">
        {Banners.map((item) => (
          <SwiperSlide key={item.alt}>
            {({ isActive }) => (
              <div
                className={`relative transition-opacity duration-300 w-${item.width} h-${item.height}`}>
                {!isActive && (
                  <div className="bg-black opacity-60 w-full absolute h-full rounded-xl" />
                )}
                <Image
                  src={item.source}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={`rounded-xl min-w-[${item.width}] object-cover w-full`}
                />
              </div>
            )}
          </SwiperSlide>
        ))}

        <div className="absolute bottom-4 right-[34%] bg-black/50 text-white px-3 py-1 rounded-full text-sm z-50">
          {String(currentSlide).padStart(2, '0')} /{' '}
          <span className="text-gray-300">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
        <div className="swiper-button-prev absolute bg-white left-[34%] top-[43%] rounded-full p-1 z-50 opacity-60 shadow-md cursor-pointer hover:opacity-90">
          <ChevronLeft className="w-6 pr-1" />
        </div>
        <div className="swiper-button-next absolute bg-white right-[34%] top-[43%] rounded-full p-1 z-50 opacity-60 shadow-md cursor-pointer hover:opacity-90">
          <ChevronRight className="w-6 pl-1" />
        </div>
      </Swiper>
    </div>
  )
}
