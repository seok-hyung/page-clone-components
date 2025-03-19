import { tossData } from '../../types/types'
import { useTransform, motion, MotionValue } from 'framer-motion'

interface IntroCardProps {
  data: tossData
  index: number
  scrollYProgress: MotionValue<number>
}

export default function IntroCard({ data, index, scrollYProgress }: IntroCardProps) {
  const ANIMATION_STEP = 0.05 // 애니메이션 단계별 진행률
  const cardStart = index * 0.3
  const cardEnd = cardStart + ANIMATION_STEP * 3
  const textStart = cardEnd + ANIMATION_STEP
  const textEnd = textStart + ANIMATION_STEP * 3

  // 카드 애니메이션
  const cardOpacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + ANIMATION_STEP, cardStart + ANIMATION_STEP * 2, cardEnd],
    [0, 0.5, 1, 1]
  )

  // 텍스트 애니메이션
  const textOpacity = useTransform(
    scrollYProgress,
    [textStart, textStart + ANIMATION_STEP, textStart + ANIMATION_STEP * 2, textEnd],
    [0, 1, 1, 1]
  )

  const textX = useTransform(
    scrollYProgress,
    [textStart, textStart + ANIMATION_STEP, textStart + ANIMATION_STEP * 2, textEnd],
    [-20, 0, 0, 0]
  )

  return (
    <motion.div
      className="px-10 py-[59px] mx-6 my-[calc(59px + 20px)] w-full h-full rounded-3xl bg-cover bg-center bg-no-repeat"
      style={{
        opacity: cardOpacity,
        backgroundImage: `url('${data.bgImage}')`,
      }}>
      <motion.div
        className="text-[22.4px] text-left text-white leading-relaxed"
        style={{ opacity: textOpacity, x: textX }}>
        <h4 className="font-bold">{data.title}</h4>
        <p className="font-medium whitespace-pre-line">{data.content}</p>
      </motion.div>
    </motion.div>
  )
}
