'use client'

import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'

import a1 from '@public/webp/1-1.webp'
import a2 from '@public/webp/1-2.webp'
import a3 from '@public/webp/1-3.webp'
import a4 from '@public/webp/1-4.webp'
import b1 from '@public/webp/2-1.webp'
import b2 from '@public/webp/2-2.webp'
import b3 from '@public/webp/2-3.webp'
import b4 from '@public/webp/2-4.webp'
import c1 from '@public/webp/3-1.webp'
import c2 from '@public/webp/3-2.webp'
import c3 from '@public/webp/3-3.webp'
import c4 from '@public/webp/3-4.webp'
import d1 from '@public/webp/4-1.webp'
import d2 from '@public/webp/4-2.webp'
import d3 from '@public/webp/4-3.webp'
import e1 from '@public/webp/5-1.webp'
import e2 from '@public/webp/5-2.webp'
import e3 from '@public/webp/5-3.webp'

import f1 from '@public/webp/6-1.webp'
import f2 from '@public/webp/6-2.webp'
import f3 from '@public/webp/6-3.webp'
import f4 from '@public/webp/6-4.webp'
import g1 from '@public/webp/7-1.webp'
import g2 from '@public/webp/7-2.webp'
import g3 from '@public/webp/7-3.webp'
import g4 from '@public/webp/7-4.webp'
import h1 from '@public/webp/8-1.webp'
import h2 from '@public/webp/8-2.webp'
import h3 from '@public/webp/8-3.webp'
import h4 from '@public/webp/8-4.webp'
import i1 from '@public/webp/9-1.webp'
import i2 from '@public/webp/9-2.webp'
import i3 from '@public/webp/9-3.webp'
import i4 from '@public/webp/9-4.webp'
import j1 from '@public/webp/10-1.webp'
import j2 from '@public/webp/10-2.webp'
import j3 from '@public/webp/10-3.webp'
import j4 from '@public/webp/10-4.webp'

import k1 from '@public/webp/11-1.webp'
import k2 from '@public/webp/11-2.webp'
import k3 from '@public/webp/11-3.webp'
import k4 from '@public/webp/11-4.webp'
import l1 from '@public/webp/12-1.webp'
import l2 from '@public/webp/12-2.webp'
import l3 from '@public/webp/12-3.webp'
import l4 from '@public/webp/12-4.webp'
import m1 from '@public/webp/13-1.webp'
import m2 from '@public/webp/13-2.webp'
import m3 from '@public/webp/13-3.webp'
import m4 from '@public/webp/13-4.webp'
import n1 from '@public/webp/14-1.webp'
import n2 from '@public/webp/14-2.webp'
import n3 from '@public/webp/14-3.webp'
import n4 from '@public/webp/14-4.webp'
import o1 from '@public/webp/15-1.webp'
import o2 from '@public/webp/15-2.webp'
import o3 from '@public/webp/15-3.webp'
import o4 from '@public/webp/15-4.webp'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// 첫번째 슬라이드
// const webp1 = [a1, a2, a3, a4]
// const webp2 = [b1, b2, b3, b4]
// const webp3 = [c1, c2, c3, c4]
// const webp4 = [d1, d2, d3]
// const webp5 = [e1, e2, e3]

// // 두번째 슬라이드
// const webp6 = [f1, f2, f3, f4]
// const webp7 = [g1, g2, g3, g4]
// const webp8 = [h1, h2, h3, h4]
// const webp9 = [i1, i2, i3, i4]
// const webp10 = [j1, j2, j3, j4]

// // 두번째 슬라이드
// const webp11 = [k1, k2, k3, k4]
// const webp12 = [l1, l2, l3, l4]
// const webp13 = [m1, m2, m3, m4]
// const webp14 = [n1, n2, n3, n4]
// const webp15 = [o1, o2, o3, o4]

const allWebps = [
  a1,
  a2,
  a3,
  a4,
  b1,
  b2,
  b3,
  b4,
  c1,
  c2,
  c3,
  c4,
  d1,
  d2,
  d3,
  e1,
  e2,
  e3,
  f1,
  f2,
  f3,
  f4,
  g1,
  g2,
  g3,
  g4,
  h1,
  h2,
  h3,
  h4,
  i1,
  i2,
  i3,
  i4,
  j1,
  j2,
  j3,
  j4,
  k1,
  k2,
  k3,
  k4,
  l1,
  l2,
  l3,
  l4,
  m1,
  m2,
  m3,
  m4,
  n1,
  n2,
  n3,
  n4,
  o1,
  o2,
  o3,
  o4,
]

console.log('allWebps.length()', allWebps.length)

const OPTIONS: EmblaOptionsType = {
  // slidesToScroll: 'auto',
  // loop: true,
  slidesToScroll: 5,
  // active: false,
  // containScroll: 'keepSnaps',
  // containScroll: 'trimSnaps',
}

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    console.log('allWebps.length()', allWebps.length)
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-[1200px] mx-auto relative">
      <div className="rounded-xl overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8 basis-1/5">
          <CarouselDetail imageCount={allWebps.slice(0, 4)} />
          <CarouselDetail imageCount={allWebps.slice(4, 8)} />
          <CarouselDetail imageCount={allWebps.slice(8, 12)} />
          <CarouselDetail imageCount={allWebps.slice(12, 15)} />
          <CarouselDetail imageCount={allWebps.slice(15, 18)} />

          <CarouselDetail imageCount={allWebps.slice(18, 22)} />
          <CarouselDetail imageCount={allWebps.slice(22, 26)} />
          <CarouselDetail imageCount={allWebps.slice(26, 30)} />
          <CarouselDetail imageCount={allWebps.slice(30, 34)} />
          <CarouselDetail imageCount={allWebps.slice(34, 38)} />

          <CarouselDetail imageCount={allWebps.slice(38, 42)} />
          <CarouselDetail imageCount={allWebps.slice(42, 46)} />
          <CarouselDetail imageCount={allWebps.slice(46, 50)} />
          <CarouselDetail imageCount={allWebps.slice(50, 54)} />
          <CarouselDetail imageCount={allWebps.slice(54, 58)} />
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute -left-8 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-8 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <ChevronRight className="h-4 w-4" />
      </button>
    </section>
  )
}

interface CarouselDeatilProps {
  imageCount: StaticImageData[]
}

function CarouselDetail({ imageCount }: CarouselDeatilProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-[210px] relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex touch-pan-x touch-pinch-zoom">
          {imageCount.map((image, index) => (
            <div className="flex-none min-w-0 roundend-3xl" key={index}>
              <div className="h-[158px] w-[210px] rounded-3xl flex items-center justify-center p-0">
                <Image
                  src={image}
                  alt={`${index} 인덱스입니다.`}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
