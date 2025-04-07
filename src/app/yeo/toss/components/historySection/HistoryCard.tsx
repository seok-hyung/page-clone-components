import { tossData } from '../../types/types'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface HistoryCardProps {
  data: tossData
  index: number
  scrollYProgress: MotionValue<number>
}

export default function HistoryCard({ data, index, scrollYProgress }: HistoryCardProps) {
  const ANIMATION_STEP = 0.08
  const cardStart = index * 0.25
  const cardEnd = cardStart + ANIMATION_STEP * 3

  const TEXT_ANIMATION_STEP = 0.05
  const titleStart = cardStart + ANIMATION_STEP
  const contentStart = titleStart + TEXT_ANIMATION_STEP

  // 카드 애니메이션
  const cardOpacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + ANIMATION_STEP, cardStart + ANIMATION_STEP * 2.5, cardEnd],
    [0, 1, 1, 0]
  )
  const cardY = useTransform(
    scrollYProgress,
    [cardStart, cardStart + ANIMATION_STEP, cardStart + ANIMATION_STEP * 2.5, cardEnd],
    [120, 0, 0, 0]
  )

  const cardScale = useTransform(
    scrollYProgress,
    [cardStart, cardStart + ANIMATION_STEP, cardStart + ANIMATION_STEP * 2.5, cardEnd],
    [1, 1, 1, 0.92]
  )

  // 텍스트 애니메이션
  const titleOpacity = useTransform(
    scrollYProgress,
    [titleStart, titleStart + TEXT_ANIMATION_STEP, titleStart + TEXT_ANIMATION_STEP * 2.5, cardEnd],
    [0, 1, 1, 0]
  )
  const titleY = useTransform(
    scrollYProgress,
    [titleStart, titleStart + TEXT_ANIMATION_STEP, titleStart + TEXT_ANIMATION_STEP * 2.5, cardEnd],
    [20, 0, 0, 0]
  )

  const contentOpacity = useTransform(
    scrollYProgress,
    [contentStart, contentStart + TEXT_ANIMATION_STEP, contentStart + TEXT_ANIMATION_STEP * 2.5, cardEnd],
    [0, 1, 1, 0]
  )
  const contentY = useTransform(
    scrollYProgress,
    [contentStart, contentStart + TEXT_ANIMATION_STEP, contentStart + TEXT_ANIMATION_STEP * 2.5, cardEnd],
    [20, 0, 0, 0]
  )

  return (
    <div className="absolute flex items-center top-0 left-0 w-full h-full">
      <motion.li
        className="
      flex justify-end items-center p-10 mx-auto w-4/5 h-[70%]  max-w-[1440px] max-h-[720px] rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data.bgImage}')`,
          top: 'calc(50vh - 35%)',
          opacity: cardOpacity,
          y: cardY,
          scale: cardScale,
        }}>
        <div
          className={`w-[36%] text-left ${data.id === 2 || data.id === 3 ? 'text-gray-800' : 'text-white'} break-keep`}>
          <motion.h2
            className="mb-[18px] text-5xl font-semibold leading-[1.3]"
            style={{ opacity: titleOpacity, y: titleY }}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <motion.span
            className="my-3 text-lg font-medium leading-[1.6]"
            style={{ opacity: contentOpacity, y: contentY }}>
            {data.content}
          </motion.span>
        </div>
      </motion.li>
    </div>
  )
}
