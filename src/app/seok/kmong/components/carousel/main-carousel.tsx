'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

export const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = [
    '/seok/main-carousel1.png',
    '/seok/main-carousel2.png',
    '/seok/main-carousel3.png',
    '/seok/main-carousel4.png',
    '/seok/main-carousel5.png',
  ]

  // 현재 인덱스에 따라 보여줄 이미지 배열 생성
  const displayedItems = [
    items[(currentIndex - 1 + items.length) % items.length], // 이전 이미지
    items[currentIndex], // 현재 이미지
    items[(currentIndex + 1) % items.length], // 다음 이미지
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  // 제스처 처리 관련 변수
  const touchStartRef = useRef<number | null>(null)
  const touchMoveRef = useRef<number | null>(null)

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchMoveRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartRef.current !== null && touchMoveRef.current !== null) {
      const touchDiff = touchStartRef.current - touchMoveRef.current

      if (touchDiff > 50) {
        goToNext()
      } else if (touchDiff < -50) {
        goToPrevious()
      }
    }

    // 초기화
    touchStartRef.current = null
    touchMoveRef.current = null
  }

  return (
    <div className="w-full mt-10">
      <div className="w-full max-w-[2148px] mx-auto overflow-hidden relative flex justify-center gap-5 touch-pan-x">
        {/* 현재 인덱스에 따라 3개의 이미지를 표시 */}
        {displayedItems.map((item, index) => (
          <div
            key={item}
            className={`w-[700px] h-[280px] shrink-0 rounded-2xl ${index === 1 ? '' : 'bg-black'}  `}
            onDragStart={(e) => e.preventDefault()}>
            <Link href={''}>
              <Image
                src={item}
                width={700}
                height={280}
                alt="캐러셀 이미지"
                draggable="false"
                className={`w-auto h-auto cursor-pointer rounded-2xl ${index === 1 ? '' : 'opacity-50'}`}
              />
            </Link>
          </div>
        ))}

        <div
          className="absolute w-[700px] h-[280px] rounded-2xl cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDragStart={(e) => e.preventDefault()}>
          <Link href={''}>
            <Image
              src={items[currentIndex]}
              width={700}
              height={280}
              alt="현재 캐러셀 이미지"
              className="w-auto h-auto rounded-2xl"
              draggable="false"
            />
          </Link>
          <div className="absolute p-1 bg-white rounded-full left-3 top-[calc(50%-12px)] opacity-50 hover:opacity-100 cursor-pointer">
            <ChevronLeft onClick={goToPrevious} />
          </div>
          <div className="absolute p-1 bg-white rounded-full right-3 top-[calc(50%-12px)] opacity-50 hover:opacity-100 cursor-pointer">
            <ChevronRight onClick={goToNext} />
          </div>

          <div className="absolute flex gap-1 px-3 py-1 font-semibold text-white justify-items-center bg-black/30 bottom-4 right-4 rounded-2xl">
            <span className="">{String(currentIndex + 1).padStart(2, '0')}</span>/
            <span className="opacity-50">{String(items.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
