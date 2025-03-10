'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { historyData } from '../constants/historyData'
import HistoryCard from './HistoryCard'
import { useEffect, useRef, useState } from 'react'

export default function HistoryList() {
  const historyDataList = historyData
  const { scrollY } = useScroll()
  const [isFixed, setIsFixed] = useState(false)
  const ref = useRef(null)
  const divHeight = useTransform(scrollY, [0, 1080], ['auto', '1080px'])

  useEffect(() => {
    if (!ref.current) return

    const ulTop = ref.current?.getBoundingClientRect().top + window.scrollY

    const onScroll = () => {
      const currentScrollY = scrollY.get()

      if (ulTop <= currentScrollY) {
        setIsFixed(true)
      } else if (currentScrollY < ulTop && isFixed) {
        setIsFixed(false)
      }
    }
    const unsubscribe = scrollY.on('change', onScroll)

    return () => unsubscribe()
  }, [scrollY, isFixed])

  return (
    <div className="pt-[100vh] pb-[300vh] min-h-screen" style={{ height: divHeight.get() }}>
      <motion.ul
        ref={ref}
        className={`relative m-auto left-0 top-0 right-auto bottom-auto w-full`}
        style={{ height: '100vh' }}>
        {historyDataList.map((data, index) => (
          <HistoryCard data={data} key={index} index={index} />
        ))}
      </motion.ul>
    </div>
  )
}
