'use client'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { historyData } from '../../constants/data'
import HistoryCard from './HistoryCard'

export default function HistoryList() {
  const historyDataList = historyData
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <div ref={ref} className="relative min-h-[400vh] mb-[100vh]">
      <ul className="sticky m-auto top-0 left-0 w-full h-screen">
        {historyDataList.map((data, index) => (
          <HistoryCard data={data} key={data.id} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </ul>
    </div>
  )
}
