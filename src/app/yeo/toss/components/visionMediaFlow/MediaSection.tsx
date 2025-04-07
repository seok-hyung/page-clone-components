import Video from './Video'
import { motion, MotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function MediaSection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // 이미지 및 버튼 범위 설정
  const TEXT_IMAGE_RANGE = [0.85, 0.9]
  const BUTTON_RANGE = [0.9, 1]

  // opacity 및 y 값 설정
  const OPACITY_VALUES = [0, 1]
  const Y_VALUES = [40, 0]

  // 비디오 애니메이션
  const videoOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.7, 0.8], [1, 0.7])

  // 이미지 애니메이션
  const textImageOpacity = useTransform(scrollYProgress, TEXT_IMAGE_RANGE, OPACITY_VALUES)
  const textImageY = useTransform(scrollYProgress, TEXT_IMAGE_RANGE, Y_VALUES)

  // 버튼 애니메이션
  const buttonOpacity = useTransform(scrollYProgress, BUTTON_RANGE, OPACITY_VALUES)
  const buttonY = useTransform(scrollYProgress, BUTTON_RANGE, Y_VALUES)

  return (
    <motion.div className="absolute w-full h-screen top-0 left-0" style={{ opacity: videoOpacity, scale: videoScale }}>
      <Video />
      <motion.div
        className="absolute flex flex-col justify-center items-center w-full h-full top-0 left-0"
        style={{ opacity: textImageOpacity, y: textImageY }}>
        <Image
          src="/toss/the-journey-title.svg"
          width={630}
          height={245}
          alt="The Journey"
          className="w-3/5 max-w-[900px] mb-[60px]"
        />
        <motion.div
          className="px-4 py-1 min-w-[180px] text-[#191f28] bg-[#f2f4f6] rounded-full hover:bg-slate-700 group"
          style={{ opacity: buttonOpacity, y: buttonY }}>
          <Link
            href="/yeo/toss"
            className="flex justify-center items-center text-[23px] font-medium group-hover:filter group-hover:invert">
            <Image src="/yeo/icons/play_icon.svg" width={20} height={20} alt="play 아이콘" className="mr-2" />
            오프닝 필름 보기
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
