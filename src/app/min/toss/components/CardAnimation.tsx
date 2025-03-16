import { motion } from 'framer-motion'
import { CARDS } from '../object/CardAnimation'
import useCardAnimations from '../hooks/useCardAnimations'
import CardItem from './CardItem'
import Link from 'next/link'

export default function CardAnimation() {
  const { ref, imgOpacities, textOpacities, textXs, buttonAnimation } = useCardAnimations()

  return (
    <div ref={ref} className="h-[500vh] bg-black relative">
      <div className="fixed top-[38%] px-[6rem] left-1/2 mt-20 transform -translate-x-1/2 -translate-y-1/2 w-full h-[73%]">
        <ul className="flex gap-14 mx-auto w-full h-full justify-between">
          {CARDS.map((card, index) => (
            <CardItem
              key={card.id}
              card={card}
              imgOpacity={imgOpacities[index]}
              textOpacity={textOpacities[index]}
              textX={textXs[index]}
            />
          ))}
        </ul>
      </div>
      <motion.button
        style={{
          ...buttonAnimation,
          backgroundColor: 'white',
          color: 'black',
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: '#333d4b',
          color: 'white',
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="cursor-pointer fixed bottom-[5%] text-2xl group left-[45%] -translate-x-1/2 px-8 py-5 rounded-full font-medium z-50">
        <Link href="/min/toss/about" className="w-full h-full group-hover:scale-110">
          더 알아보기
        </Link>
      </motion.button>
    </div>
  )
}
