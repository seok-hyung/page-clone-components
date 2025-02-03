import Image from 'next/image'
import carousel1 from '@public/seok/main-carousel1.png'
import carousel2 from '@public/seok/main-carousel2.png'
import carousel3 from '@public/seok/main-carousel3.png'
import carousel4 from '@public/seok/main-carousel4.png'
import arrowNext from '@public/woong/arrowNext.svg'
import arrowPrev from '@public/woong/arrowPrev.svg'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Carousel() {
  const [centerImageOffset, setCenterImageOffset] = useState(3016)
  const [transitionTrigger, setTransitionTrigger] = useState(true)

  const images = [carousel1, carousel2, carousel3, carousel4]
  const loopedImages = [...images, ...images, ...images]
  const nextOffset = centerImageOffset + 724

  const nextCarouselHandler = () => {
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

  useEffect(() => {
    const autoNextCarouselPlayer = () => {
      setCenterImageOffset(nextOffset)

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

    const intervalId = setInterval(() => {
      autoNextCarouselPlayer()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [centerImageOffset, nextOffset])

  console.log(centerImageOffset)
  let carouselNumber = (centerImageOffset - 3016) / 724 + 1
  if (carouselNumber > 4) {
    carouselNumber = 1
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
          className={`w-[700px] h-[280px] flex-shrink-0 cursor-pointer overflow-hidden relative`}
          style={{
            transform: `translateX(-${centerImageOffset}px)`,
            transition: transitionTrigger ? '0.5s ease-out' : '',
          }}>
          <Image
            src={v}
            alt="캐러셀 이미지"
            width={0}
            height={0}
            className="rounded-2xl "
          />
        </Link>
      ))}
      <div className="absolute left-[1230px] top-[440px] px-2 py-1 rounded-full bg-[#0006] text-white text-center ">
        <span>{'0' + carouselNumber}</span>
        <span className="ml-1 opacity-50">/</span>
        <span className="ml-1 opacity-50">{'0' + images.length}</span>
      </div>
      <button
        onClick={nextCarouselHandler}
        className=" w-8 h-8  rounded-full bg-[#ffffff] text-red-800 absolute left-[1250px] top-[320px] opacity-50 hover:opacity-100">
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
        className="w-8 h-8 rounded-full bg-[#ffffff] text-red-800 absolute left-[620px] top-[320px] opacity-50 hover:opacity-100">
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
