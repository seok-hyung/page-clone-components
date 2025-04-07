import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const text = [
  {
    id: 1,
    text: '토스가 생각하는 새로운 금융은\n혜택이 닿지 않던 곳까지 시선을 보내고\n세심한 변화를 만들어내는 것.',
  },
  {
    id: 2,
    text: '모두의 평등한 금융경험을 위해\n일상에서 금융이 필요한 모든 순간에 귀 기울이고\n문제를 발견하고, 가장 명쾌한 답을 찾으려 합니다.',
  },
]

export default function TossTextAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // 전체 컨테이너 애니메이션
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 0.9], // 시작할 때 페이드인, 끝날 때 페이드아웃
    [0, 1, 1, 0]
  )

  // 이미지 애니메이션
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 0.9], // 시작과 끝에서 스케일 효과
    [0.8, 1, 1, 0.8]
  )

  // 첫 번째 텍스트 애니메이션
  const text1Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [30, 0, 0, -30])

  // 두 번째 텍스트 애니메이션
  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0])
  const text2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [30, 0, 0, -30])

  return (
    <div ref={ref} className="relative w-full h-[300vh] bg-[#0c0b0f]">
      <motion.div className="fixed inset-0 flex flex-col items-center top-[20%]" style={{ opacity: containerOpacity }}>
        {/* 이미지 */}
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="mb-2">
          <Image src="/toss/toss_Logo.png" alt="toss-Logo" width={1000} height={1000} className="object-contain" />
        </motion.div>

        {/* 텍스트 */}
        <div className="relative w-full max-w-4xl text-center">
          <motion.p
            style={{
              opacity: text1Opacity,
              y: text1Y,
            }}
            className="absolute w-full text-white text-2xl leading-relaxed whitespace-pre-line">
            {text[0].text}
          </motion.p>
          <motion.p
            style={{
              opacity: text2Opacity,
              y: text2Y,
            }}
            className="absolute w-full text-white text-2xl leading-relaxed whitespace-pre-line">
            {text[1].text}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
