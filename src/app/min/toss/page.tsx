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

        {/* 2️⃣ 이미지 섹션 (아래에서 위로 등장 + 자연스럽게 대체 + 크기 줄어들며 사라짐) */}
        <ImageTransitionSection
          images={['/toss/history1.png', '/toss/history2.png', '/toss/history3.png', '/toss/history4.png']}
        />

        {/* 3️⃣ 아래쪽 여백 */}
        <div className="h-[100vh]" />
      </div>
    </div>
  )
}

// 📌 여러 개의 이미지가 아래에서 위로 등장하면서 크기가 줄어들며 사라지는 컴포넌트
function ImageTransitionSection({ images }: { images: string[] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  return (
    <div ref={ref} className="h-[1000vh] relative flex items-center justify-center">
      {images.map((src, index) => {
        // ✨ 각 이미지의 등장 & 사라지는 타이밍 조정
        const start = index / images.length
        const end = (index + 1) / images.length

        // 🔹 아래에서 위로 등장하는 효과 추가
        const translateY = useTransform(scrollYProgress, [start, start + 0.2, end, end + 0.2], [100, 0, 0, -20])

        // 🔹 opacity 조정 (자연스럽게 대체)
        const opacity = useTransform(scrollYProgress, [start, start + 0.2, end, end + 0.2], [0, 1, 1, 0])

        // 🔹 사라질 때 크기를 줄이면서 자연스럽게 축소됨
        const scale = useTransform(scrollYProgress, [start, start + 0.2, end, end + 0.2], [1, 1, 1, 0.9])

        return (
          <motion.div
            key={index}
            style={{ opacity, y: translateY, scale }}
            className="fixed top-1/4 left-1/4 translate-x-1/4 -translate-y-1/4 w-[80vw] max-w-[1200px] h-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`배너 ${index + 1}`}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
