'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { HistoryScrollItem } from './history-scroll-item'
import { imageContainer } from './data'

export const HistoryScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {imageContainer.map((section, index) => (
          <HistoryScrollItem
            key={index}
            section={section}
            containerStart={index * 0.25}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
