import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface CardData {
  title: string
  content: string
  image: string
}

interface CardProps {
  card: CardData
  index: number
  scrollYProgress: MotionValue<number>
}

export const Card = ({ card, index, scrollYProgress }: CardProps) => {
  const cardStart = 0.1 + index * 0.2
  const cardEnd = cardStart + 0.15

  const opacity = useTransform(scrollYProgress, [cardStart - 0.05, cardStart, cardEnd, cardEnd + 0.05], [0, 1, 1, 1])

  const x = useTransform(scrollYProgress, [cardStart - 0.05, cardStart, cardEnd, cardEnd + 0.05], ['0', '0', '0', '0'])

  const textX = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.05, cardEnd, cardEnd + 0.05],
    ['-20px', '0px', '0px', '0px']
  )

  const textOpacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.05, cardEnd, cardEnd + 0.05],
    [0, 1, 1, 1]
  )

  return (
    <motion.div
      className="absolute w-[30%] h-[70%] rounded-3xl overflow-hidden max-h-[600px]"
      style={{
        opacity,
        x,
        left: `${index * 35}%`,
      }}
      initial={false}>
      <div className="relative w-full h-full">
        <Image src={card.image} alt={card.title} fill className="object-cover" priority={index === 0} quality={90} />

        <div className="absolute inset-0 px-[40px] py-[60px] h-full justify-center">
          <motion.h2
            className="text-2xl font-black mb-4 whitespace-pre-line leading-tight text-white"
            style={{ x: textX, opacity: textOpacity }}
            initial={false}>
            {card.title}
          </motion.h2>

          <motion.p
            className="text-2xl whitespace-pre-line text-white"
            style={{ x: textX, opacity: textOpacity }}
            initial={false}>
            {card.content}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
