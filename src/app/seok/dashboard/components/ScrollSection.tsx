import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// 섹션 데이터 정의
const imageContainer = [
  {
    image: '/toss/history1.png',
    title: '불편함이\n당연했던 일상',
    content:
      '불과 7년 전만 해도, 송금은 복잡하고 오래 걸리는 일이었어요.\n공인인증서와 보안카드, 그리고 무한 로딩을 견뎌낼 인내심까지 필요했죠.',
    textStyle: 'text-white',
  },
  {
    image: '/toss/history2.png',
    title: '메시지 보내듯\n쉬운 송금',
    content:
      '2015년 2월, 토스는 공인인증서가 필요없는 간편 송금 서비스를 선보입니다.\n문자 메시지 보내듯 쉽고 편한 송금. 토스가 첫 번째로 해결한 금융의 불편함이에요.',
    textStyle: 'text-black',
  },
  {
    image: '/toss/history3.png',
    title: '금융, 더 쉽고\n간편할 순 없을까?',
    content:
      '토스는 송금을 시작으로 금융 구석구석, 더 많은 불편함을 찾기 시작했어요.\n대출이라도 받으려면 연차를 내고 전전긍긍, 누군가는 간단한 은행 업무를 보기 위해 먼 길을 나서야 했죠.',
    textStyle: 'text-black',
  },
  {
    image: '/toss/history4.png',
    title: '공 던지듯\n 쉽고 간편한 금융',
    content:
      '2019년 2월, 송금부터 계좌, 대출, 보험, 투자까지.\n토스는 삶에서 꼭 필요한 금융경험을 공 던지듯 쉽고 간편하게 만들기 시작했어요.',
    textStyle: 'text-white',
  },
]

export const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 각 섹션에 대한 애니메이션 값들을 미리 계산
  const animations = imageContainer.map((_, index) => {
    const containerStart = index * 0.25
    const containerMid1 = containerStart + 0.1
    const containerMid2 = containerStart + 0.2
    const containerEnd = containerStart + 0.25
    const containerFade = containerStart + 0.4

    // 섹션 투명도
    const opacity = useTransform(
      scrollYProgress,
      [containerStart, containerMid1, containerMid2, containerFade],
      [0, 1, 1, 0]
    )

    // 이미지 크기
    const scale = useTransform(scrollYProgress, [containerMid2, containerEnd], [1, 0.95])

    // 이미지 위치
    const imageY = useTransform(
      scrollYProgress,
      [containerStart, containerMid1, containerMid2, containerEnd],
      ['10vh', '0vh', '0vh', '-10vh']
    )

    // 타이틀 위치
    const titleY = useTransform(
      scrollYProgress,
      [containerStart + 0.05, containerMid1 + 0.05, containerMid2, containerEnd],
      ['30vh', '0vh', '0vh', '-10vh']
    )

    // 내용 위치
    const contentY = useTransform(
      scrollYProgress,
      [containerMid1, containerMid2, containerEnd],
      ['30vh', '0vh', '-10vh']
    )

    // 타이틀 투명도
    const titleOpacity = useTransform(
      scrollYProgress,
      [containerStart + 0.05, containerMid1 + 0.05, containerMid2, containerEnd],
      [0, 1, 1, 0]
    )

    // 내용 투명도
    const contentOpacity = useTransform(scrollYProgress, [containerMid1, containerMid2, containerEnd], [0, 1, 0])

    return {
      opacity,
      scale,
      imageY,
      titleY,
      contentY,
      titleOpacity,
      contentOpacity,
    }
  })

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-black" // 스크롤 영역 확보
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {imageContainer.map((section, index) => {
          const animation = animations[index]

          return (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center mx-28"
              style={{ opacity: animation.opacity }}>
              <motion.div
                className="container mx-auto relative rounded-2xl"
                style={{ scale: animation.scale, y: animation.imageY }}>
                <div className="relative w-full h-[70vh] overflow-hidden p-10">
                  <Image src={section.image} alt={section.title} fill className="object-cover rounded-2xl" />

                  <div className="absolute inset-0 flex items-center justify-end">
                    <div className={`w-[36%] ${section.textStyle} pr-10`}>
                      <motion.h2
                        className="text-5xl font-bold mb-4 whitespace-pre-line leading-tight"
                        style={{ y: animation.titleY, opacity: animation.titleOpacity }}>
                        {section.title}
                      </motion.h2>

                      <motion.p
                        className="text-xl whitespace-pre-line leading-relaxed"
                        style={{ y: animation.contentY, opacity: animation.contentOpacity }}>
                        {section.content}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
