'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { LearnMoreButton } from './learn-more-button'
import { Card } from './card'
import { cards } from './intro-card-data'

export const IntroCardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      {/* 고정된 뷰포트 */}
      <div className="sticky top-0 h-screen flex items-center justify-center max-w-[1400px] mx-auto">
        <div className="relative w-full h-full">
          {/* 카드 컨테이너 */}
          <div className="flex items-center justify-center h-[calc(80%-60px)] mt-[60px] mb-[40px]">
            {cards.map((card, index) => (
              <Card key={index} card={card} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          {/* 더 알아보기 버튼 */}
          <LearnMoreButton scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  )
}
