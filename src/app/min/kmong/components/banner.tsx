'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Banner1 from '@public/mainBanner1.png'
import Banner2 from '@public/mainBanner2.png'
import Banner3 from '@public/mainBanner3.png'
import Banner4 from '@public/mainBanner4.png'

const Banners = [
  { source: Banner1, alt: 'banner1', width: 700, height: 280 },
  { source: Banner2, alt: 'banner2', width: 700, height: 280 },
  { source: Banner3, alt: 'banner3', width: 700, height: 280 },
  { source: Banner4, alt: 'banner4', width: 700, height: 280 },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const moveSlide = (direction) => {
    const totalSlides = Banners.length
    const newSlide = (currentSlide + direction + totalSlides) % totalSlides // 순환 이동
    setCurrentSlide(newSlide)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1)
    }, 2000) // 2초마다 자동으로 슬라이드 이동

    return () => clearInterval(interval) // 컴포넌트 언마운트 시 클리어
  }, [currentSlide])

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {Banners.map((item, index) => (
          <div
            key={item.alt}
            className={`flex-shrink-0 w-full h-48 bg-gray-200 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-50'
            }`}>
            {' '}
            {/* 현재 슬라이드와 대기 슬라이드 구분 */}
            <Image
              src={item.source}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={() => moveSlide(1)}>
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
        <span className="text-white ml-2">
          {currentSlide + 1} / {Banners.length}
        </span>
      </div>
    </div>
  )
}
