import { motion, useTransform, MotionValue } from 'framer-motion'
import Link from 'next/link'

interface LearnMoreButtonProps {
  scrollYProgress: MotionValue<number>
}

export const LearnMoreButton = ({ scrollYProgress }: LearnMoreButtonProps) => {
  const buttonStart = 0.8
  const buttonEnd = 0.9

  const opacity = useTransform(
    scrollYProgress,
    [buttonStart - 0.05, buttonStart, buttonEnd, buttonEnd + 0.05],
    [0, 1, 1, 1]
  )

  const y = useTransform(
    scrollYProgress,
    [buttonStart - 0.05, buttonStart, buttonEnd, buttonEnd + 0.05],
    ['50px', '0px', '0px', '0px']
  )

  return (
    <motion.div className="flex justify-center" style={{ opacity, y }}>
      <Link href="/seok/toss/more">
        <button className="bg-white text-black text-xl p-[18px] rounded-full font-bold hover:bg-[#333d4b]  hover:text-white px-[20px] py-[16px] hover:scale-110">
          더 알아보기
        </button>
      </Link>
    </motion.div>
  )
}
