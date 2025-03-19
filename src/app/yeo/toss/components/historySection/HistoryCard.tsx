import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { tossData } from '../../types/types'

interface HistoryCardProps {
  data: tossData
  index: number
}

const cardAnimationVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0 },
  hiddenNext: { opacity: 0, y: 120, scale: 0.92 },
}

const textAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hiddenNext: { opacity: 0, y: 20, scale: 0.92 },
}

export default function HistoryCard({ data, index }: HistoryCardProps) {
  const cardRef = useRef(null)
  const textRef = useRef(null)
  const isCardInView = useInView(cardRef, { amount: 0.5, once: false })
  const isTextInView = useInView(textRef, { amount: 0.5, once: false })

  return (
    <AnimatePresence>
      <motion.li
        key={index}
        ref={cardRef}
        variants={cardAnimationVariants}
        initial="hidden"
        whileInView="visible"
        exit="hiddenNext"
        animate={isCardInView ? 'visible' : 'hidden'}
        transition={{ ease: 'easeOut', duration: 1 }}
        className={`${
          isCardInView ? 'sticky' : 'relative'
        } flex justify-end items-center p-10 mx-auto w-4/5 h-[70%] max-w-[1440px] max-h-[720px] rounded-3xl bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url('${data.bgImage}')`, top: 'calc(50vh - 35%)' }}>
        <div
          className={`w-[36%] text-left ${data.id === 2 || data.id === 3 ? 'text-gray-800' : 'text-white'} break-keep`}>
          <motion.h2
            variants={textAnimationVariants}
            initial="hidden"
            whileInView="visible"
            exit="hiddenNext"
            animate={isTextInView ? 'visible' : 'hidden'}
            transition={{ ease: 'easeOut', duration: 0.6, delay: 0.5 }}
            className="mb-[18px] text-5xl font-semibold leading-[1.3]"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <motion.span
            ref={textRef}
            variants={textAnimationVariants}
            initial="hidden"
            whileInView="visible"
            exit="hiddenNext"
            animate={isTextInView ? 'visible' : 'hidden'}
            transition={{ ease: 'easeOut', duration: 0.6, delay: 1 }}
            className="my-3 text-lg font-medium leading-[1.6] ">
            {data.content}
          </motion.span>
        </div>
      </motion.li>
    </AnimatePresence>
  )
}
