import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { ANIMATION_TIMINGS, CARD_TIMINGS, ANIMATION_VALUES } from '../constants/animation'

/**
 * 애니메이션 설정을 위한 타입
 */
type AnimationConfig = {
  start: number
  end: number
  fadeOutStart?: number
  fadeOutEnd?: number
}

/**
 * 카드 타이밍 설정을 위한 타입
 */
type CardTiming = {
  imgStart: number
  imgEnd: number
  textStart: number
  textEnd: number
}

/**
 * 스크롤 진행도에 따른 투명도 변환 애니메이션을 생성합니다.
 */
const useOpacityTransform = (scrollYProgress: MotionValue<number>, config: AnimationConfig) => {
  const {
    start,
    end,
    fadeOutStart = ANIMATION_TIMINGS.FADE_OUT_START,
    fadeOutEnd = ANIMATION_TIMINGS.FADE_OUT_END,
  } = config

  return useTransform(scrollYProgress, [start, end, fadeOutStart, fadeOutEnd], [...ANIMATION_VALUES.OPACITY])
}

/**
 * 스크롤 진행도에 따른 슬라이드 애니메이션을 생성합니다.
 */
const useSlideTransform = (scrollYProgress: MotionValue<number>, config: AnimationConfig) => {
  const { start, end } = config
  return useTransform(scrollYProgress, [start, end], [...ANIMATION_VALUES.TEXT_SLIDE])
}

/**
 * 단일 카드의 애니메이션 값들을 생성하는 헬퍼 훅
 */
const useCardAnimation = (scrollYProgress: MotionValue<number>, timing: CardTiming) => {
  const imageOpacity = useOpacityTransform(scrollYProgress, {
    start: timing.imgStart,
    end: timing.imgEnd,
  })

  const textOpacity = useOpacityTransform(scrollYProgress, {
    start: timing.textStart,
    end: timing.textEnd,
  })

  const textX = useSlideTransform(scrollYProgress, {
    start: timing.textStart,
    end: timing.textEnd,
  })

  return { imageOpacity, textOpacity, textX }
}

/**
 * 카드 섹션의 모든 애니메이션을 관리하는 커스텀 훅
 */
export default function useCardAnimations() {
  // 스크롤 감지를 위한 ref와 진행도 설정
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // 각 카드별 애니메이션 생성
  const card1 = useCardAnimation(scrollYProgress, CARD_TIMINGS[0])
  const card2 = useCardAnimation(scrollYProgress, CARD_TIMINGS[1])
  const card3 = useCardAnimation(scrollYProgress, CARD_TIMINGS[2])

  // 버튼 애니메이션 설정
  const buttonAnimation = {
    opacity: useOpacityTransform(scrollYProgress, {
      start: ANIMATION_TIMINGS.BUTTON_START,
      end: ANIMATION_TIMINGS.BUTTON_END,
    }),
    y: useTransform(scrollYProgress, [ANIMATION_TIMINGS.BUTTON_START, ANIMATION_TIMINGS.BUTTON_END], [30, 0]),
  }

  return {
    ref,
    imgOpacities: [card1.imageOpacity, card2.imageOpacity, card3.imageOpacity],
    textOpacities: [card1.textOpacity, card2.textOpacity, card3.textOpacity],
    textXs: [card1.textX, card2.textX, card3.textX],
    buttonAnimation,
  }
}
