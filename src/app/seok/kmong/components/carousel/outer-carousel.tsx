'use client'
import React, { useEffect, useCallback, useState, ComponentPropsWithRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

// const outerCarousels = [
//   [
//     ['/webp/1-1.webp', '/webp/1-2.webp', '/webp/1-3.webp', '/webp/1-4.webp'],
//     ['/webp/2-1.webp', '/webp/2-2.webp', '/webp/2-3.webp', '/webp/2-4.webp'],
//     ['/webp/3-1.webp', '/webp/3-2.webp', '/webp/3-3.webp', '/webp/3-4.webp'],
//     ['/webp/4-1.webp', '/webp/4-2.webp', '/webp/4-3.webp', '/webp/4-4.webp'],
//     ['/webp/5-1.webp', '/webp/5-2.webp', '/webp/5-3.webp', '/webp/5-4.webp'],
//   ],
//   [
//     ['/webp/6-1.webp', '/webp/6-2.webp', '/webp/6-3.webp', '/webp/6-4.webp'],
//     ['/webp/7-1.webp', '/webp/7-2.webp', '/webp/7-3.webp', '/webp/7-4.webp'],
//     ['/webp/8-1.webp', '/webp/8-2.webp', '/webp/8-3.webp', '/webp/8-4.webp'],
//     ['/webp/9-1.webp', '/webp/9-2.webp', '/webp/9-3.webp', '/webp/9-4.webp'],
//     ['/webp/10-1.webp', '/webp/10-2.webp', '/webp/10-3.webp', '/webp/10-4.webp'],
//   ],
//   [
//     ['/webp/11-1.webp', '/webp/11-2.webp', '/webp/11-3.webp', '/webp/11-4.webp'],
//     ['/webp/12-1.webp', '/webp/12-2.webp', '/webp/12-3.webp', '/webp/12-4.webp'],
//     ['/webp/13-1.webp', '/webp/13-2.webp', '/webp/13-3.webp', '/webp/13-4.webp'],
//     ['/webp/14-1.webp', '/webp/14-2.webp', '/webp/14-3.webp', '/webp/14-4.webp'],
//     ['/webp/15-1.webp', '/webp/15-2.webp', '/webp/15-3.webp', '/webp/15-4.webp'],
//   ],
// ]

const outerCarousels = [
  [
    {
      images: ['/webp/1-1.webp', '/webp/1-2.webp', '/webp/1-3.webp', '/webp/1-4.webp'],
      title: '서비스 제목 1',
      rating: 4.8,
      reviews: 120,
      price: '50,000',
      seller: '업체명 A',
    },
    {
      images: ['/webp/2-1.webp', '/webp/2-2.webp', '/webp/2-3.webp', '/webp/2-4.webp'],
      title: '서비스 제목 2',
      rating: 4.5,
      reviews: 90,
      price: '70,000',
      seller: '업체명 B',
    },
    {
      images: ['/webp/3-1.webp', '/webp/3-2.webp', '/webp/3-3.webp', '/webp/3-4.webp'],
      title: '서비스 제목 3',
      rating: 4.9,
      reviews: 150,
      price: '30,000',
      seller: '업체명 C',
    },
    {
      images: ['/webp/4-1.webp', '/webp/4-2.webp', '/webp/4-3.webp', '/webp/4-4.webp'],
      title: '서비스 제목 4',
      rating: 4.7,
      reviews: 110,
      price: '45,000',
      seller: '업체명 D',
    },
    {
      images: ['/webp/5-1.webp', '/webp/5-2.webp', '/webp/5-3.webp', '/webp/5-4.webp'],
      title: '서비스 제목 5',
      rating: 4.6,
      reviews: 80,
      price: '55,000',
      seller: '업체명 E',
    },
  ],
  [
    {
      images: ['/webp/6-1.webp', '/webp/6-2.webp', '/webp/6-3.webp', '/webp/6-4.webp'],
      title: '서비스 제목 6',
      rating: 4.3,
      reviews: 60,
      price: '65,000',
      seller: '업체명 F',
    },
    {
      images: ['/webp/7-1.webp', '/webp/7-2.webp', '/webp/7-3.webp', '/webp/7-4.webp'],
      title: '서비스 제목 7',
      rating: 4.8,
      reviews: 130,
      price: '40,000',
      seller: '업체명 G',
    },
    {
      images: ['/webp/8-1.webp', '/webp/8-2.webp', '/webp/8-3.webp', '/webp/8-4.webp'],
      title: '서비스 제목 8',
      rating: 4.5,
      reviews: 95,
      price: '48,000',
      seller: '업체명 H',
    },
    {
      images: ['/webp/9-1.webp', '/webp/9-2.webp', '/webp/9-3.webp', '/webp/9-4.webp'],
      title: '서비스 제목 9',
      rating: 4.7,
      reviews: 100,
      price: '60,000',
      seller: '업체명 I',
    },
    {
      images: ['/webp/10-1.webp', '/webp/10-2.webp', '/webp/10-3.webp', '/webp/10-4.webp'],
      title: '서비스 제목 10',
      rating: 4.4,
      reviews: 70,
      price: '75,000',
      seller: '업체명 J',
    },
  ],
  [
    {
      images: ['/webp/11-1.webp', '/webp/11-2.webp', '/webp/11-3.webp', '/webp/11-4.webp'],
      title: '서비스 제목 11',
      rating: 4.9,
      reviews: 140,
      price: '35,000',
      seller: '업체명 K',
    },
    {
      images: ['/webp/12-1.webp', '/webp/12-2.webp', '/webp/12-3.webp', '/webp/12-4.webp'],
      title: '서비스 제목 12',
      rating: 4.6,
      reviews: 85,
      price: '50,000',
      seller: '업체명 L',
    },
    {
      images: ['/webp/13-1.webp', '/webp/13-2.webp', '/webp/13-3.webp', '/webp/13-4.webp'],
      title: '서비스 제목 13',
      rating: 4.8,
      reviews: 125,
      price: '58,000',
      seller: '업체명 M',
    },
    {
      images: ['/webp/14-1.webp', '/webp/14-2.webp', '/webp/14-3.webp', '/webp/14-4.webp'],
      title: '서비스 제목 14',
      rating: 4.3,
      reviews: 65,
      price: '68,000',
      seller: '업체명 N',
    },
    {
      images: ['/webp/15-1.webp', '/webp/15-2.webp', '/webp/15-3.webp', '/webp/15-4.webp'],
      title: '서비스 제목 15',
      rating: 4.7,
      reviews: 105,
      price: '42,000',
      seller: '업체명 O',
    },
  ],
]

export const OuterCarousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: false, watchDrag: false }
  const [embalRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [prevBtnsAbled, setPrevBtnAbled] = useState(false)
  const [nextBtnAbled, setNextBtnAbled] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      setPrevBtnAbled(emblaApi.canScrollPrev)
      setNextBtnAbled(emblaApi.canScrollNext)
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      setPrevBtnAbled(emblaApi.canScrollPrev)
      setNextBtnAbled(emblaApi.canScrollNext)
    }
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
                  <div key={idx} className="flex flex-none min-w-0 gap-4 basis-full embla_slide">
                    {innerCarousels.map((service, innerIdx) => (
                      <div
                        key={innerIdx}
                        className="flex flex-none min-w-0 gap-4 basis-[calc(20%-13px)] w-full embla_slide">
                        <div className="flex-col">
                          <InnerCarousel images={service.images} />
                          <>
                            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                            <div className="flex items-center mt-2">
                              <span className="text-yellow-500">
                                ★ <span className="font-semibold text-black">{service.rating}</span>
                              </span>
                              <span className="ml-2 text-gray-600">({service.reviews})</span>
                            </div>
                            <p className="mt-2 text-xl font-bold">{service.price}원 ~</p>
                            <p className="mt-1 text-gray-500">{service.seller}</p>
                          </>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                {/* {outerCarousels.map((innerCarousels, idx) => {
                  console.log('@@@@@@@@@@@@@@', innerCarousels)
                  return (
                    <div key={idx} className="flex flex-shrink-0 w-full min-w-0 gap-4 basis-full">
                      {innerCarousels.map((images, innerIdx) => {
                        // console.log('@@@', images)
                        return <InnerCarousel key={innerIdx} images={images} />
                      })}
                    </div>
                  )
                })} */}
              </div>
            </div>
            {emblaApi?.canScrollPrev() && (
              <button
                className="absolute z-10 p-4 -translate-y-1/2 bg-white rounded-full shadow-sm -left-16 shadow-gray-300 embla__prev top-1/2"
                onClick={scrollPrev}>
                <ChevronLeft />
              </button>
            )}
            {emblaApi?.canScrollNext() && (
              <button
                className="absolute p-4 -translate-y-1/2 rounded-full shadow-sm bg-wh top-1/2 -right-16 shadow-gray-300 embla__next"
                onClick={scrollNext}>
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const InnerCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false })
  const [isHovered, setIsHovered] = useState(false)

  const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(emblaApi)

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
            <div key={idx} className="relative flex-none w-full min-w-0 embla_slide">
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

          <div className="absolute flex gap-1 transform -translate-x-1/2 bottom-2 left-1/2 embla_dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-orange-300' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

type PropType = ComponentPropsWithRef<'button'>

const DotButton = (props: PropType) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
