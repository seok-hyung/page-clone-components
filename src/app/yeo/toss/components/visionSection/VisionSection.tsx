'use client'
import Image from 'next/image'
import { visionStatement } from '../../constants/data'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VisionSection() {
  const visionData = visionStatement
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // 이미지 opacity 범위 및 값 설정
  const IMAGE_OPACITY_RANGE = [0, 0.15, 0.3, 0.85, 1]
  const IMAGE_OPACITY_VALUES = [0, 0.5, 1, 1, 0]

  // 텍스트 범위 설정
  const TEXT1_RANGE = [0.3, 0.4, 0.5, 0.65]
  const TEXT2_RANGE = [0.65, 0.75, 0.85, 1]

  // 텍스트 opacity 값 설정
  const TEXT_OPACITY_VALUES = [0, 1, 1, 0]

  // 텍스트 y축 이동 값 설정
  const TEXT1_Y_VALUES = [40, 0, 0, -40]
  const TEXT2_Y_VALUES = [40, 0, 0, 0]

  const imageOpacity = useTransform(scrollYProgress, IMAGE_OPACITY_RANGE, IMAGE_OPACITY_VALUES)

  const textOpacity1 = useTransform(scrollYProgress, TEXT1_RANGE, TEXT_OPACITY_VALUES)
  const textY1 = useTransform(scrollYProgress, TEXT1_RANGE, TEXT1_Y_VALUES)

  const textOpacity2 = useTransform(scrollYProgress, TEXT2_RANGE, TEXT_OPACITY_VALUES)
  const textY2 = useTransform(scrollYProgress, TEXT2_RANGE, TEXT2_Y_VALUES)

  return (
    <div ref={ref} className="min-h-[300vh] bg-[#0d0a10]">
      <div className="sticky w-full h-screen top-0 left-0">
        <div className="flex flex-col justify-center items-center  mx-auto max-w-[1440px] h-full">
          <motion.div className="w-3/5 h-auto" style={{ opacity: imageOpacity }}>
            <Image
              src="/toss/logo-blue-bgblack90.png"
              width={864}
              height={486}
              alt="토스 로고"
              className="w-full h-full"
            />
          </motion.div>
          <div className="relative w-full">
            <motion.p
              className="absolute text-white text-[23px] text-center w-full top-0 leading-relaxed break-keep whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: visionData[0].content }}
              style={{ opacity: textOpacity1, y: textY1 }}
            />
            <motion.p
              className="absolute text-white text-[23px] text-center w-full top-0 leading-relaxed break-keep whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: visionData[1].content }}
              style={{ opacity: textOpacity2, y: textY2 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
