import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import { CARDS } from '../object/CardAnimation'
import Image from 'next/image'

interface CardItemProps {
  card: (typeof CARDS)[number]
  imgOpacity: MotionValue<number>
  textOpacity: MotionValue<number>
  textX: MotionValue<number>
}

export default function CardItem({ card, imgOpacity, textOpacity, textX }: CardItemProps) {
  return (
    <motion.li className="h-full w-full relative aspect-[1/2]" style={{ opacity: imgOpacity }}>
      <Image src={card.image} alt={card.heading} fill className="object-cover rounded-3xl" />
      <motion.div
        className="absolute top-[3%] px-[8%] py-[10%]"
        style={{
          opacity: textOpacity,
          x: textX,
        }}>
        <h3 className="text-white text-3xl font-bold mb-1">{card.heading}</h3>
        <p className="text-white text-[1.7rem] font-medium leading-relaxed whitespace-pre-line">{card.description}</p>
      </motion.div>
    </motion.li>
  )
}
