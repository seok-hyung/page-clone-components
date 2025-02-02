import Image from 'next/image'
import carousel1 from '@public/seok/main-carousel1.png'
import carousel2 from '@public/seok/main-carousel2.png'
import carousel3 from '@public/seok/main-carousel3.png'
import carousel4 from '@public/seok/main-carousel4.png'
import arrowNext from '@public/woong/arrowNext.svg'
import arrowPrev from '@public/woong/arrowPrev.svg'
import { useState } from 'react'
import Link from 'next/link'

export default function Carousel() {
  const [centerImageOffset, setCenterImageOffset] = useState(3016)
  const [transitionTrigger, setTransitionTrigger] = useState(true)
  const images = [carousel1, carousel2, carousel3, carousel4]
  const loopedImages = [...images, ...images, ...images]
  const nextCarouselHandler = () => {
    const nextOffset = centerImageOffset + 724

    if (nextOffset === 5912) {
      setCenterImageOffset(nextOffset)
      setTransitionTrigger(true)

      setTimeout(() => {
        setCenterImageOffset(3016)
        setTransitionTrigger(false)
      }, 500)
    } else {
      setCenterImageOffset(nextOffset)
      setTransitionTrigger(true)
    }
  }
  console.log(centerImageOffset)

  const prevCarouselHandler = () => {
    const prevOffset = centerImageOffset - 724

    if (prevOffset === 120) {
      setCenterImageOffset(prevOffset)
      setTransitionTrigger(true)

      setTimeout(() => {
        setCenterImageOffset(3016)
        setTransitionTrigger(false)
      }, 500)
    } else {
      setCenterImageOffset(prevOffset)
      setTransitionTrigger(true)
    }
  }

  return (
    <div className="flex gap-6 mt-10 overflow-hidden">
      {/* gap-6 = 24px 
          width = 700px
          724px
      */}
      {loopedImages.map((v, i) => (
        <Link
          href="#"
          key={i}
          className={`w-[700px] h-[280px] flex-shrink-0 cursor-pointer`}
          style={{
            transform: `translateX(-${centerImageOffset}px)`,
            transition: transitionTrigger ? '0.5s ease-out' : '',
          }}>
          <Image
            src={v}
            alt="캐러셀 이미지"
            width={0}
            height={0}
            className="rounded-2xl"
          />
          <div></div>
        </Link>
      ))}
      <button
        onClick={nextCarouselHandler}
        className=" w-8 h-8 absolute rounded-full bg-[#919191] text-red-800 right-[33%] top-1/3 opacity-50 hover:bg-white">
        <Image
          width={0}
          height={0}
          src={arrowNext}
          alt="다음"
          className="absolute top-[7px] left-[5px]"
        />
      </button>
      <button
        onClick={prevCarouselHandler}
        className="w-8 h-8 absolute rounded-full bg-[#919191] text-red-800 left-[32%] top-1/3 opacity-50 hover:bg-white">
        <Image
          width={0}
          height={0}
          src={arrowPrev}
          alt="이전"
          className="absolute top-[7px] left-[5px]"
        />
      </button>
    </div>
  )
}
