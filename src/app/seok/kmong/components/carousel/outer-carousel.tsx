'use client'
import React, { useEffect, useCallback, useState, ComponentPropsWithRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
// import { InnerCarousel } from './inner-carousel'

const outerCarousels = [
  [
    ['/webp/1-1.webp', '/webp/1-2.webp', '/webp/1-3.webp', '/webp/1-4.webp'],
    ['/webp/2-1.webp', '/webp/2-2.webp', '/webp/2-3.webp', '/webp/2-4.webp'],
    ['/webp/3-1.webp', '/webp/3-2.webp', '/webp/3-3.webp', '/webp/3-4.webp'],
    ['/webp/4-1.webp', '/webp/4-2.webp', '/webp/4-3.webp', '/webp/4-4.webp'],
    ['/webp/5-1.webp', '/webp/5-2.webp', '/webp/5-3.webp', '/webp/5-4.webp'],
  ],
  [
    ['/webp/6-1.webp', '/webp/6-2.webp', '/webp/6-3.webp', '/webp/6-4.webp'],
    ['/webp/7-1.webp', '/webp/7-2.webp', '/webp/7-3.webp', '/webp/7-4.webp'],
    ['/webp/8-1.webp', '/webp/8-2.webp', '/webp/8-3.webp', '/webp/8-4.webp'],
    ['/webp/9-1.webp', '/webp/9-2.webp', '/webp/9-3.webp', '/webp/9-4.webp'],
    ['/webp/10-1.webp', '/webp/10-2.webp', '/webp/10-3.webp', '/webp/10-4.webp'],
  ],
  [
    ['/webp/11-1.webp', '/webp/11-2.webp', '/webp/11-3.webp', '/webp/11-4.webp'],
    ['/webp/12-1.webp', '/webp/12-2.webp', '/webp/12-3.webp', '/webp/12-4.webp'],
    ['/webp/13-1.webp', '/webp/13-2.webp', '/webp/13-3.webp', '/webp/13-4.webp'],
    ['/webp/14-1.webp', '/webp/14-2.webp', '/webp/14-3.webp', '/webp/14-4.webp'],
    ['/webp/15-1.webp', '/webp/15-2.webp', '/webp/15-3.webp', '/webp/15-4.webp'],
  ],
]

export const OuterCarousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: false, dragFree: false }
  const [embalRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <section className="mt-20">
      <div className="w-[1200px] mx-auto">
        <div className="flex gap-1 mb-4">
          <h2 className="text-xl font-semibold">프리랜서 마켓 No.1 크몽, 인기 서비스</h2>
          <Image src={'/HOT.png'} width={50} height={30} alt="HOT 아이콘"></Image>
        </div>

        <div className="relative">
          <div className="overflow-hidden embla">
            <div className="embla_viewport" ref={embalRef}>
              <div className="flex embla__container">
                {outerCarousels.map((innerCarousels, idx) => (
                  <div key={idx} className="flex flex-shrink-0 w-full min-w-0 gap-4 basis-full">
                    {innerCarousels.map((images, innerIdx) => (
                      <InnerCarousel key={innerIdx} images={images} />
                    ))}
                  </div>
                ))}
              </div>

              <button
                className="absolute z-10 p-4 -translate-y-1/2 bg-white rounded-full shadow-sm -left-16 shadow-gray-300 embla__prev top-1/2"
                onClick={scrollPrev}>
                <ChevronLeft />
              </button>
              <button
                className="absolute p-4 -translate-y-1/2 rounded-full shadow-sm bg-wh top-1/2 -right-16 shadow-gray-300 embla__next"
                onClick={scrollNext}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const InnerCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div
      className="relative overflow-hidden transition-transform duration-300 ease-in-out transform rounded-lg embla"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="embla_viewport" ref={emblaRef}>
        <div className="flex embla_container">
          {images.map((src, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-full min-w-0">
              <Image
                src={src}
                alt="slide"
                width={300}
                height={200}
                className={`rounded-lg transition-transform duration-300 ease-in-out ${
                  isHovered ? 'hover:scale-105' : ''
                }`}
              />
              {isHovered && (
                <div className="absolute flex p-2 rounded-full shadow-md bg-zinc-400 top-2 right-2 ">
                  <Heart className="text-white  justify-items-center w-[20px] h-[20px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isHovered && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2">
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            className="absolute p-1 transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2">
            <ChevronRight />
          </button>

          <div className="absolute flex gap-1 transform -translate-x-1/2 bottom-2 left-1/2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === selectedIndex ? 'bg-orange-300' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
