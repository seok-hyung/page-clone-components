'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { YoutubeVideo } from '../video'
import Image from 'next/image'
import { Play } from 'lucide-react'

export const YouTubeVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 비디오 애니메이션 변환값
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.7])
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.5], [0, 38])

  // 오버레이 애니메이션 변환값
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.5, 0.6], [40, 0])

  return (
    <section ref={sectionRef} className="h-[300vh] relative bg-white">
      {/* 고정된 뷰포트 */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* 비디오 컨테이너 */}
        <motion.div
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            borderRadius: videoBorderRadius,
          }}
          className="relative w-full h-full overflow-hidden">
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

              <button className="bg-white mt-8 text-black text-xl p-[18px] rounded-full font-bold hover:bg-[#333d4b]  hover:text-white px-[16px] py-[11px] flex items-center gap-2">
                <Play fill="currentColor" />
                오프닝 필름 보기
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
