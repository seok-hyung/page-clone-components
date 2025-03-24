'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export const LogoBlueBlack = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const firstTextY = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [40, 0, 0, -40])
  const firstTextOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0])

  const secondTextY = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [40, 0, 0])
  const secondTextOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={sectionRef} className="h-[200vh] relative bg-[#0c0b10]">
      {/* 고정된 뷰포트 */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        {/* 이미지 컨테이너 */}
        <motion.div
          style={{
            opacity: imageOpacity,
          }}
          className="relative w-[60%] h-[40%] max-w-[900px] mb-2">
          <Image src="/toss/logo-blue-bgblack.png" alt="로고 이미지" fill className="object-contain" />
        </motion.div>

        {/* 텍스트 컨테이너 */}
        <div className="relative z-10 w-full max-w-[900px]">
          <motion.div
            style={{
              y: firstTextY,
              opacity: firstTextOpacity,
            }}
            className="text-center px-4 absolute top-0 left-0 w-full">
            <p className="text-2xl font-bold mb-2 text-white w-full">
              토스가 생각하는 새로운 금융은 <br />
              혜택이 닿지 않던 곳까지 시선을 보내고 <br />
              세심한 변화를 만들어내는 것.
            </p>
          </motion.div>

          <motion.div
            style={{
              y: secondTextY,
              opacity: secondTextOpacity,
            }}
            className="text-center px-4 absolute top-0 left-0 w-full">
            <h2 className="text-2xl font-bold mb-2 text-white">
              모두의 평등한 금융경험을 위해 <br />
              일상에서 금융이 필요한 모든 순간에 귀 기울이고 <br />
              문제를 발견하고, 가장 명쾌한 답을 찾으려 합니다.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
