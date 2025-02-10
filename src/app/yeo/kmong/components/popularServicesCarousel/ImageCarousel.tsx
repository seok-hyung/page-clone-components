import { useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselButton'
import { DotButton, useDotButton } from './CarouselDotButton'

interface ImageCarouselProps {
  title: string
  src: string[]
}

export default function ImageCarousel({ title, src }: ImageCarouselProps) {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true })
  const [isHovered, setIsHovered] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(carouselApi)

  const { selectedIndex, scrollSnaps } = useDotButton(carouselApi)

  const handleMouseEnter = () => setIsHovered(true)

  const handleMoustLeave = () => setIsHovered(false)

  return (
    <div className="relative w-full mb-2">
      <div
        className="overflow-hidden border border-[rgba(0, 0, 0, 0.1)] rounded-lg"
        ref={carouselRef}>
        <div className="flex">
          {src.map((image, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] transform translate-z-0 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMoustLeave}>
              <Image
                src={image}
                className={`h-full transition-transform origin-center duration-300 ${
                  isHovered ? 'scale-110' : ''
                } `}
                width={214}
                height={158}
                alt={title}
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton
        className={`absolute top-1/2 left-2 w-8 h-8 transform -translate-y-1/2 transition-all duration-300 hover:bg-white ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'matrix(1, 0, 0, 1, 0, -16)' }}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMoustLeave}
      />
      <NextButton
        className={`absolute top-1/2 right-2 w-8 h-8 transform -translate-y-1/2 transition-all duration-300 hover:bg-white ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'matrix(1, 0, 0, 1, 0, -16)' }}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMoustLeave}
      />
      <div
        className={`absolute flex justify-center gap-1 py-[6px] bottom-0 left-0 right-0 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
        {scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            className={`w-[6px] h-[6px] rounded-[50%]
              ${idx === selectedIndex ? 'bg-[#ffd400]' : 'bg-[#c8cad2]'}`}
          />
        ))}
      </div>
    </div>
  )
}
