import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'

interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = ({ className, ...restProps }) => {
  // twMerge 사용하여 추가된 className 합쳐서 적용
  const buttonClass = twMerge(
    'flex justify-center items-center bg-white/75 text-[#303441] rounded-[50%] shadow-[0px_0px_0px_1px_transparent,0px_0px_0px_4px_transparent,0px_2px_4px_rgba(0,0,0,0.18)]',
    className
  )

  return (
    <button className={buttonClass} type="button" {...restProps}>
      <HiOutlineChevronLeft className="w-6 h-6" />
    </button>
  )
}

export const NextButton: React.FC<PropType> = ({ className, ...restProps }) => {
  // twMerge 사용하여 추가된 className 합쳐서 적용
  const buttonClass = twMerge(
    'flex justify-center items-center bg-white/75 text-[#303441] rounded-[50%] shadow-[0px_0px_0px_1px_transparent,0px_0px_0px_4px_transparent,0px_2px_4px_rgba(0,0,0,0.18)]',
    className
  )

  return (
    <button className={buttonClass} type="button" {...restProps}>
      <HiOutlineChevronRight className="w-6 h-6" />
    </button>
  )
}
