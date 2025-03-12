import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const CardList = [
  {
    id: 1,
    image: '',
    heading: '더 자유롭게.',
    description: '푸른 컬러는 모두의 자유로운 금융생활을 꿈꾸는 토스의 비전을',
  },
  {
    id: 2,
    image: '',
    heading: '더 유연하게.',
    description: '부드럽게 이어지는 곡선은 끊임없이 도전하는 토스의 태도를',
  },
  {
    id: 3,
    image: '',
    heading: '더 대담하게.',
    description: '공간감을 가진 토스의 새로운 로고는 새로운 차원의 금융을 만들겠다는 토스의 의지를 담고 있습니다.',
  },
]

export default function ThreeCard() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // ==== opacity ====
  // const imageOpacity = useTransform(scrollYProgress, [], [])
  // const headingOpacity = useTransform(scrollYProgress, [], [])
  // const descOpacity = useTransform(scrollYProgress, [], [])
  // const buttonOpacity = useTransform(scrollYProgress, [], [])

  // ==== transition ====
  // const headingTransition = useTransform(scrollYProgress, [], [])
  // const descTransition = useTransform(scrollYProgress, [], [])
  // const buttonTransition = useTransform(scrollYProgress, [], [])

  return (
    <div ref={ref} className="h-[200vh]">
      <ul>
        {CardList.map((card) => (
          <motion.li key={card.id} className="w-full">
            <Image src={card.image} alt={card.image} fill style={{ opacity: 0 }} />
            <h3>{card.heading}</h3>
            <span>{card.description}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
