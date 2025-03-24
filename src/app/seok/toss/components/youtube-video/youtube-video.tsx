'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { YoutubeVideo } from '../video'
import Image from 'next/image'

export const YouTubeVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 비디오 애니메이션 변환값
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const videoScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.6])
  const videoBorderRadius = useTransform(scrollYProgress, [0.1, 0.5], [0, 24])

  // 텍스트 애니메이션 변환값 - 비디오가 줄어든 후(0.5 이후)에 나타나도록 수정
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.5, 0.6], [50, 0])

  return (
    <section ref={sectionRef} className="h-[300vh] relative bg-black">
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
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center justify-end pb-20"
            style={{ opacity: overlayOpacity }}>
            <motion.div style={{ y: overlayY }} className="text-center p-4 text-white flex flex-col items-center">
              <div className="w-full h-full">
                <Image src="/toss/the-journey-title.svg" alt="로고 이미지" width={300} height={300} />
              </div>
              <p className="text-xl mb-8">Original Film by toss</p>
              <button className="bg-white text-black text-xl p-[18px] rounded-full font-bold hover:bg-[#333d4b]  hover:text-white px-[20px] py-[16px] hover:scale-110">
                오프닝 필름 보기
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
