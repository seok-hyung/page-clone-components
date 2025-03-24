'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import VisionSection from './VisionSection'
import MediaSection from './MediaSection'

export default function VisionMediaFlow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // background color 애니메이션
  const containerBackground = useTransform(scrollYProgress, [0.65, 0.7], ['#0d0a10', '#ffffff'])

  return (
    <div ref={ref} className="min-h-[400vh]">
      <motion.div className="sticky w-full h-screen top-0 left-0" style={{ backgroundColor: containerBackground }}>
        <VisionSection scrollYProgress={scrollYProgress} />
        <MediaSection scrollYProgress={scrollYProgress} />
      </motion.div>
    </div>
  )
}
