'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Page() {
  return (
    <div className="relative bg-gray-900">
      <div className="w-full h-[400vh]">
        {/* 1️⃣ 위쪽 여백 */}
        <div className="h-[100vh]" />

        {/* 2️⃣ 이미지 섹션 */}
        <ImageTransitionSection
          images={['/toss/history1.png', '/toss/history2.png', '/toss/history3.png', '/toss/history4.png']}
        />

        {/* 3️⃣ 아래쪽 여백 */}
        <div className="h-[100vh]" />
      </div>
    </div>
  )
}

// 📌 여러 개의 이미지가 아래에서 위로 등장하면서 자연스럽게 대체되는 컴포넌트
function ImageTransitionSection({ images }: { images: string[] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  // ✅ 스크롤 진행에 따른 애니메이션 값 조정
  const translateY1 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.35], [100, 0, 0, -20])
  const translateY2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5, 0.6], [100, 0, 0, -20])
  const translateY3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75, 0.85], [100, 0, 0, -20])
  const translateY4 = useTransform(scrollYProgress, [0.75, 0.95, 1, 1], [100, 0, 0, -20])

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.35], [0, 1, 0.7, 0])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5, 0.6], [0, 1, 0.7, 0])
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75, 0.85], [0, 1, 0.7, 0])
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.95, 1, 1], [0, 1, 0.7, 0])

  // scale 값 조정 - 다음 이미지가 나타날 때 이전 이미지가 작아지며 사라지도록 함
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.35], [1, 1, 0.85, 0.7])
  const scale2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5, 0.6], [1, 1, 0.85, 0.7])
  const scale3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75, 0.85], [1, 1, 0.85, 0.7])
  const scale4 = useTransform(scrollYProgress, [0.75, 0.95, 1, 1], [1, 1, 0.85, 0.7])

  const transforms = [
    { y: translateY1, opacity: opacity1, scale: scale1 },
    { y: translateY2, opacity: opacity2, scale: scale2 },
    { y: translateY3, opacity: opacity3, scale: scale3 },
    { y: translateY4, opacity: opacity4, scale: scale4 },
  ]

  return (
    <div ref={ref} className="h-[1000vh] relative flex items-center justify-center">
      {images.map((src, index) => (
        <motion.div
          key={index}
          style={{
            opacity: transforms[index].opacity,
            y: transforms[index].y,
            scale: transforms[index].scale,
          }}
          className="fixed top-[10%]  -translate-x-1/2 -translate-y-1/4 w-[80vw] max-w-[1600px] h-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
          <Image src={src} alt={`배너 ${index + 1}`} width={1200} height={675} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  )
}
