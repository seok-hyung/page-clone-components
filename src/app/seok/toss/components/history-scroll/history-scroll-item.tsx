import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

// 섹션 데이터 타입 정의
interface HistorySectionData {
  image: string
  title: string
  content: string
  textStyle: string
}
interface HistoryScrollItemProps {
  section: HistorySectionData
  containerStart: number
  scrollYProgress: MotionValue<number>
}
export const HistoryScrollItem = ({ section, containerStart, scrollYProgress }: HistoryScrollItemProps) => {
  // 각 아이템마다 애니메이션 계산
  const imageStart = containerStart + 0.05
  const titleStart = containerStart + 0.1
  const contentStart = containerStart + 0.2
  const holdPhase = containerStart + 0.25
  const containerEnd = containerStart + 0.3

  const opacity = useTransform(scrollYProgress, [containerStart, imageStart, holdPhase, containerEnd], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [holdPhase, containerEnd], [1, 0.8])
  const imageY = useTransform(
    scrollYProgress,
    [containerStart, imageStart, holdPhase, containerEnd],
    ['160px', '0px', '0px', '0px']
  )
  const titleY = useTransform(
    scrollYProgress,
    [imageStart, titleStart, holdPhase, containerEnd],
    ['20px', '0px', '0px', '-20px']
  )
  const titleOpacity = useTransform(scrollYProgress, [imageStart, titleStart, holdPhase, containerEnd], [0, 1, 1, 0])
  const contentY = useTransform(
    scrollYProgress,
    [titleStart, contentStart, holdPhase, containerEnd],
    ['20px', '0px', '0px', '-10px']
  )
  const contentOpacity = useTransform(
    scrollYProgress,
    [titleStart, contentStart, holdPhase, containerEnd],
    [0, 1, 1, 0]
  )

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center mx-28" style={{ opacity }} initial={false}>
      <motion.div className="container mx-auto relative rounded-2x" style={{ scale, y: imageY }} initial={false}>
        <div className="relative w-full h-[70vh] overflow-hidden">
          <Image src={section.image} alt={section.title} fill className="object-cover rounded-2xl" loading="lazy" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className={`w-[36%] ${section.textStyle} pr-10`}>
              <motion.h2
                className="text-5xl font-bold mb-6 whitespace-pre-line leading-tight"
                style={{ y: titleY, opacity: titleOpacity }}
                initial={false}>
                {section.title}
              </motion.h2>

              <motion.p
                className="text-xl whitespace-pre-line leading-relaxed"
                style={{ y: contentY, opacity: contentOpacity }}
                initial={false}>
                {section.content}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
