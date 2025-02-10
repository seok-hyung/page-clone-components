'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { popularServicesList } from '../../constants/popularServicesList'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselButton'
import CarouselCard from './CarouselCard'
import Image from 'next/image'

export default function PopularServicesCarousel() {
  const servicesList = popularServicesList
  const [carouselRef, carouselApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 'auto',
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(carouselApi)

  return (
    <section className="px-4 mx-auto my-20 w-[1200px]">
      <div className="flex items-center gap-1">
        <h2 className="text-xl font-medium text-[#212224]">
          프리랜서 마켓 No.1 크몽, 인기 서비스
        </h2>
        <Image
          src={'/yeo/icons/HOT_icon.png'}
          width={38}
          height={20}
          alt={'HOT 아이콘'}
        />
      </div>
      <div className="relative min-h-[279px]">
        <PrevButton
          className={`absolute -left-11 top-1/2 w-10 h-10 transform -translate-y-1/2 transition-all duration-300 ${
            prevBtnDisabled ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <div ref={carouselRef} className="my-6 overflow-hidden">
          <div className="flex gap-6">
            {servicesList.map((service, idx) => (
              <CarouselCard key={idx} service={service} />
            ))}
          </div>
        </div>
        <NextButton
          className={`absolute -right-11 top-1/2 w-10 h-10 transform -translate-y-1/2 transition-all duration-300 ${
            nextBtnDisabled ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </section>
  )
}
