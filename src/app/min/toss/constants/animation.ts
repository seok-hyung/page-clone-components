// 애니메이션 타이밍 상수
export const ANIMATION_TIMINGS = {
  FADE_OUT_START: 0.92,
  FADE_OUT_END: 0.98,
  BUTTON_START: 0.7,
  BUTTON_END: 0.75,
} as const

// 각 카드의 애니메이션 시작 타이밍
export const CARD_TIMINGS = [
  { imgStart: 0, imgEnd: 0.1, textStart: 0.1, textEnd: 0.2 },
  { imgStart: 0.2, imgEnd: 0.3, textStart: 0.3, textEnd: 0.4 },
  { imgStart: 0.4, imgEnd: 0.5, textStart: 0.5, textEnd: 0.6 },
] as const

// 애니메이션 값 상수
export const ANIMATION_VALUES = {
  OPACITY: [0, 1, 1, 0],
  TEXT_SLIDE: [-50, 0],
} as const
