import { useTransform, useScroll, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { articles } from '../object/ImageTransitionSection'

// 📌 여러 개의 이미지가 아래에서 위로 등장하면서 자연스럽게 대체되는 컴포넌트
export default function ImageTransitionSection({ images }: { images: string[] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // ✅ 스크롤 진행에 따른 애니메이션 값 조정 - 이미지 표시 시간 늘림
  // [시작, 완전히 보임, 유지, 사라짐] 형태로 조정
  const translateY1 = useTransform(scrollYProgress, [0, 0.08, 0.28, 0.35], [100, 0, 0, -20])
  const translateY2 = useTransform(scrollYProgress, [0.25, 0.33, 0.53, 0.6], [100, 0, 0, -20])
  const translateY3 = useTransform(scrollYProgress, [0.5, 0.58, 0.78, 0.85], [100, 0, 0, -20])
  const translateY4 = useTransform(scrollYProgress, [0.75, 0.83, 0.93, 1], [100, 0, 0, -20])

  // 불투명도 - 이미지가 오래 유지되도록 조정
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.28, 0.35], [0, 1, 0.6, 0])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.33, 0.53, 0.6], [0, 1, 0.6, 0])
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.58, 0.78, 0.85], [0, 1, 0.6, 0])
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.83, 0.93, 1], [0, 1, 0.6, 0])

  // scale 값 조정 - 이미지가 완전한 크기로 등장하고, 퇴장할 때만 작아지도록 수정
  const scale1 = useTransform(scrollYProgress, [0, 0.08, 0.28, 0.35], [1, 1, 1, 0.9])
  const scale2 = useTransform(scrollYProgress, [0.25, 0.33, 0.53, 0.6], [1, 1, 1, 0.9])
  const scale3 = useTransform(scrollYProgress, [0.5, 0.58, 0.78, 0.85], [1, 1, 1, 0.9])
  const scale4 = useTransform(scrollYProgress, [0.75, 0.83, 0.93, 1], [1, 1, 1, 0.9])

  const transforms = [
    { y: translateY1, opacity: opacity1, scale: scale1 },
    { y: translateY2, opacity: opacity2, scale: scale2 },
    { y: translateY3, opacity: opacity3, scale: scale3 },
    { y: translateY4, opacity: opacity4, scale: scale4 },
  ]

  // 제목(h2) 애니메이션 - 이미지가 완전히 보이는 상태에서 시작
  const titleOpacity1 = useTransform(scrollYProgress, [0.1, 0.13, 0.25, 0.28], [0, 1, 1, 0])
  const titleOpacity2 = useTransform(scrollYProgress, [0.35, 0.38, 0.5, 0.53], [0, 1, 1, 0])
  const titleOpacity3 = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.78], [0, 1, 1, 0])
  const titleOpacity4 = useTransform(scrollYProgress, [0.85, 0.87, 0.9, 0.93], [0, 1, 1, 0])

  const titleY1 = useTransform(scrollYProgress, [0.1, 0.13, 0.25, 0.28], [30, 0, 0, -30])
  const titleY2 = useTransform(scrollYProgress, [0.35, 0.38, 0.5, 0.53], [30, 0, 0, -30])
  const titleY3 = useTransform(scrollYProgress, [0.6, 0.63, 0.75, 0.78], [30, 0, 0, -30])
  const titleY4 = useTransform(scrollYProgress, [0.85, 0.87, 0.9, 0.93], [30, 0, 0, -30])

  // 설명(p) 애니메이션 - 제목이 완전히 보이는 상태에서 시작
  const descOpacity1 = useTransform(scrollYProgress, [0.15, 0.18, 0.25, 0.28], [0, 1, 0.9, 0])
  const descOpacity2 = useTransform(scrollYProgress, [0.4, 0.43, 0.5, 0.53], [0, 1, 0.9, 0])
  const descOpacity3 = useTransform(scrollYProgress, [0.65, 0.68, 0.75, 0.78], [0, 1, 0.9, 0])
  const descOpacity4 = useTransform(scrollYProgress, [0.88, 0.89, 0.9, 0.93], [0, 1, 0.9, 0])

  const descY1 = useTransform(scrollYProgress, [0.15, 0.18, 0.25, 0.28], [50, 0, 0, -30])
  const descY2 = useTransform(scrollYProgress, [0.4, 0.43, 0.5, 0.53], [50, 0, 0, -30])
  const descY3 = useTransform(scrollYProgress, [0.65, 0.68, 0.75, 0.78], [50, 0, 0, -30])
  const descY4 = useTransform(scrollYProgress, [0.88, 0.89, 0.9, 0.93], [50, 0, 0, -30])

  return (
    <div ref={ref} className="h-[600vh] relative flex items-center justify-center">
      {images.map((src, index) => (
        <motion.div
          key={index}
          style={{
            opacity: transforms[index].opacity,
            y: transforms[index].y,
            scale: transforms[index].scale,
          }}
          className="fixed top-[10%] w-[80vw] max-w-[1600px] h-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
          <Image src={src} alt={`배너 ${index + 1}`} fill className="w-full h-full object-cover" />

          {/* 텍스트 영역 */}
          <div className="absolute inset-0 flex flex-col justify-center items-end mr-16">
            <div className={`w-[35%] ${index === 1 || index === 2 ? 'text-black' : 'text-white'}`}>
              <motion.h2
                style={{
                  opacity:
                    index === 0
                      ? titleOpacity1
                      : index === 1
                      ? titleOpacity2
                      : index === 2
                      ? titleOpacity3
                      : titleOpacity4,
                  y: index === 0 ? titleY1 : index === 1 ? titleY2 : index === 2 ? titleY3 : titleY4,
                }}
                className="text-5xl font-semibold mb-6 leading-tight whitespace-pre-line">
                {articles[index].header}
              </motion.h2>
              <motion.p
                style={{
                  opacity:
                    index === 0 ? descOpacity1 : index === 1 ? descOpacity2 : index === 2 ? descOpacity3 : descOpacity4,
                  y: index === 0 ? descY1 : index === 1 ? descY2 : index === 2 ? descY3 : descY4,
                }}
                className="text-xl leading-relaxed whitespace-pre-line">
                {articles[index].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
