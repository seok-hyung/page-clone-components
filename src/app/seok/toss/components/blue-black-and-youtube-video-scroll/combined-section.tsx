'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { YoutubeVideo } from '../video'

export const CombinedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 첫 번째 섹션 애니메이션 값
  const logoImageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.45], [0, 1, 1, 0])
  const firstTextY = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [40, 0, 0, -40])
  const firstTextOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0])
  const secondTextY = useTransform(scrollYProgress, [0.3, 0.35, 0.4], [40, 0, 0])
  const secondTextOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45], [0, 1, 0])

  // 두 번째 섹션 애니메이션 값
  const videoOpacity = useTransform(scrollYProgress, [0.449, 0.45], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.7])
  const videoBorderRadius = useTransform(scrollYProgress, [0.5, 0.8], [0, 38])
  const overlayOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.8, 0.9], [20, 0])

  // 배경색 변경
  const backgroundColor = useTransform(scrollYProgress, [0.449, 0.45], ['#0c0b10', '#ffffff'])

  return (
    <div ref={sectionRef} className="h-[600vh] relative">
      <motion.div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
        style={{ backgroundColor }}>
        {/* 로고 이미지 */}
        <motion.div style={{ opacity: logoImageOpacity }} className="relative w-[60%] h-[40%] max-w-[900px] mb-2">
          <Image src="/toss/logo-blue-bgblack.png" alt="로고 이미지" fill className="object-contain" />
        </motion.div>

        {/* 텍스트 컨테이너 */}
        <div className="relative z-10 w-full max-w-[900px]">
          <motion.div
            style={{ y: firstTextY, opacity: firstTextOpacity }}
            className="text-center px-4 absolute top-0 left-0 w-full">
            <p className="text-2xl font-bold mb-2 text-white w-full">
              토스가 생각하는 새로운 금융은 <br />
              혜택이 닿지 않던 곳까지 시선을 보내고 <br />
              세심한 변화를 만들어내는 것.
            </p>
          </motion.div>

          <motion.div
            style={{ y: secondTextY, opacity: secondTextOpacity }}
            className="text-center px-4 absolute top-0 left-0 w-full">
            <h2 className="text-2xl font-bold mb-2 text-white">
              모두의 평등한 금융경험을 위해 <br />
              일상에서 금융이 필요한 모든 순간에 귀 기울이고 <br />
              문제를 발견하고, 가장 명쾌한 답을 찾으려 합니다.
            </h2>
          </motion.div>
        </div>

        {/* 두 번째 섹션 (YouTubeVideo) */}
        <motion.div
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            borderRadius: videoBorderRadius,
          }}
          className="overflow-hidden z-20 absolute inset-0">
          <div className="absolute inset-0">
            <YoutubeVideo />
          </div>

          {/* 비디오 위에 오버레이 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center"
            style={{ opacity: overlayOpacity }}>
            <motion.div
              style={{ y: overlayY }}
              className="text-center text-white flex flex-col justify-center w-full h-full items-center">
              <div className="w-full max-w-[900px] mb-4">
                <Image
                  src="/toss/the-journey-title.svg"
                  alt="journey title"
                  width={500}
                  height={200}
                  className="w-full h-auto"
                />
              </div>

              <button className="bg-white mt-8 text-black text-xl p-[18px] rounded-full font-bold hover:bg-[#333d4b] hover:text-white px-[16px] py-[11px] flex items-center gap-2">
                <Play fill="currentColor" />
                오프닝 필름 보기
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
