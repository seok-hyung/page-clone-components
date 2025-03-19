'use client'
import Link from 'next/link'
import { IntroData } from '../../constants/data'
import IntroCard from './IntroCard'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function IntroList() {
  const introDataList = IntroData
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // 버튼 애니메이션
  const buttonOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1])

  const buttonY = useTransform(scrollYProgress, [0.9, 1], [20, 0])

  return (
    <div ref={ref} className="min-h-[300vh]">
      <div className="fixed m-auto top-0 left-0 w-full h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div
            className="flex justify-center items-center mx-auto mt-[59px] mb-10 max-w-[1400px] max-h-[600px] break-keep"
            style={{ height: 'calc(80% - 59px)' }}>
            {introDataList.map((data, index) => (
              <IntroCard data={data} key={data.id} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
          <motion.button
            className="flex justify-center items-center w-[144px] h-[54px] p-[18px] text-[20px] font-medium text-[#191f28] bg-white rounded-full"
            style={{ opacity: buttonOpacity, y: buttonY }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 }, backgroundColor: '#333D4B', color: 'white' }}>
            <Link href="/yeo/toss">더 알아보기</Link>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
