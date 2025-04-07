import Image from 'next/image'
import { visionStatement } from '../../constants/data'
import { motion, MotionValue, useTransform } from 'framer-motion'

export default function VisionSection({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const visionData = visionStatement

  // 이미지 opacity 범위 및 값 설정
  const IMAGE_OPACITY_RANGE = [0, 0.2, 0.5, 0.6]
  const IMAGE_OPACITY_VALUES = [0, 1, 1, 0]

  // 텍스트 범위 설정
  const TEXT1_RANGE = [0.2, 0.27, 0.33, 0.4]
  const TEXT2_RANGE = [0.4, 0.47, 0.53, 0.6]

  // 텍스트 opacity 값 설정
  const TEXT_OPACITY_VALUES = [0, 1, 1, 0]

  // 텍스트 y축 이동 값 설정
  const TEXT1_Y_VALUES = [40, 0, 0, -40]
  const TEXT2_Y_VALUES = [40, 0, 0, 0]

  // 로고 이미지 애니메이션
  const imageOpacity = useTransform(scrollYProgress, IMAGE_OPACITY_RANGE, IMAGE_OPACITY_VALUES)

  // 텍스트 애니메이션
  const text1Opacity = useTransform(scrollYProgress, TEXT1_RANGE, TEXT_OPACITY_VALUES)
  const text1Y = useTransform(scrollYProgress, TEXT1_RANGE, TEXT1_Y_VALUES)

  const text2Opacity = useTransform(scrollYProgress, TEXT2_RANGE, TEXT_OPACITY_VALUES)
  const text2Y = useTransform(scrollYProgress, TEXT2_RANGE, TEXT2_Y_VALUES)

  return (
    <div className="flex flex-col justify-center items-center  mx-auto max-w-[1440px] h-full">
      <motion.div className="w-3/5 h-auto -mt-[100px]" style={{ opacity: imageOpacity }}>
        <Image src="/toss/logo-blue-bgblack90.png" width={864} height={486} alt="토스 로고" className="w-full h-full" />
      </motion.div>
      <div className="relative w-full">
        <motion.p
          className="absolute text-white text-[23px] text-center w-full top-0 leading-relaxed break-keep whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: visionData[0].content }}
          style={{ opacity: text1Opacity, y: text1Y }}
        />
        <motion.p
          className="absolute text-white text-[23px] text-center w-full top-0 leading-relaxed break-keep whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: visionData[1].content }}
          style={{ opacity: text2Opacity, y: text2Y }}
        />
      </div>
    </div>
  )
}
