import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import TossYoutube from './TossYoutube'

export default function VideoAnimation() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // 스크롤 위치에 따른 애니메이션 값 조정
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.6, 0.8], [0, 1, 1, 1, 1]) // 항상 보이도록
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.6]) // 처음엔 크게, 스크롤하면 작게
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ['100vw', '80%', '95%'])
  const height = useTransform(scrollYProgress, [0, 0.5, 1], ['100vh', '80%', '95%'])

  // 텍스트 애니메이션 - 비디오가 완전히 작아진 후에 등장
  const textOpacity = useTransform(scrollYProgress, [0.95, 1, 1.5, 1.7], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0.95, 1, 1.5, 1.7], [30, 0, 0, -30])

  return (
    <div ref={ref} className="relative w-full h-[300vh] bg-white">
      <motion.div
        className="fixed left-0 top-[500px] w-full h-full rounded-[3rem] overflow-hidden"
        style={{
          opacity,
          scale,
          width,
          height,
          left: '50%',
          x: '-50%',
          top: '50%',
          y: '-50%',
        }}>
        <TossYoutube />
        {/* 텍스트 오버레이 */}
        <motion.div
          className="absolute inset-0 flex flex-col gap-10 items-center justify-center text-white p-8 bg-black/30"
          style={{
            opacity: textOpacity,
            y: textY,
          }}>
          <div className="relative w-[70%] h-[50%]">
            <Image src={'/toss/sm/THE_JOURNEY.svg'} alt="THE_JOURNEY" fill objectFit="contain" />
          </div>
          <button
            className="bg-white group text-black px-4 py-2 
					rounded-3xl text-2xl font-bold flex items-center gap-2 hover:bg-black hover:text-white">
            <Link href="#" className="relative flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src={'/toss/sm/play_icon.svg'}
                  alt="play_icon"
                  fill
                  objectFit="contain"
                  className="items-center group-hover:filter group-hover:invert"
                />
              </div>
              <span>오프닝 필름 보기</span>
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
