'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

const bannerList = [
  { id: 1, link: 'link1' },
  { id: 2, link: 'link2' },
  { id: 3, link: 'link3' },
  { id: 4, link: 'link4' },
  { id: 5, link: 'link5' },
  { id: 6, link: 'link6' },
  { id: 7, link: 'link7' },
]

export default function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(2)
  const [transition, setTransition] = useState(true)
  const [isInView, setIsInView] = useState(true)

  const firstBanner = bannerList[0]
  const secondBanner = bannerList[1]
  const lastBanner = bannerList[bannerList.length - 1]
  const secondLastBanner = bannerList[bannerList.length - 2]

  // 기존 배너 리스트의 앞,뒤에 배너 2개씩 추가
  const extendedBannerList = [
    secondLastBanner,
    lastBanner,
    ...bannerList,
    firstBanner,
    secondBanner,
  ]

  useEffect(() => {
    let transitionTimeout: NodeJS.Timeout

    // currentIdx가 1일 경우(1번 배너의 이전, 7번 배너) 0.2초 후 실제 7번 배너의 idx로 이동
    if (currentIdx === 1) {
      transitionTimeout = setTimeout(() => {
        setCurrentIdx(extendedBannerList.length - 3)
        // 실제 7번 배너로 이동 시 transiton이 보이지 않도록 false 설정
        setTransition(false)
      }, 200)
    } else if (currentIdx === extendedBannerList.length - 2) {
      // currentIdx가 extendedBannerList.length - 2일 경우(7번 배너의 이후, 1번 배너) 0.2초 후 실제 1번 배너의 idx로 이동
      transitionTimeout = setTimeout(() => {
        setCurrentIdx(2)
        // 실제 1번 배너로 이동 시 transiton이 보이지 않도록 false 설정
        setTransition(false)
      }, 200)
    }
    return () => clearTimeout(transitionTimeout)
  }, [currentIdx, extendedBannerList.length])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    // 브라우저 탭 활성화/비활성화에 따른 이벤트 핸들러
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsInView(false)
      } else {
        setIsInView(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (isInView) {
      // isInView가 true일 때 4초마다 캐러셀 자동 전환
      interval = setInterval(() => {
        setTransition(true)
        setCurrentIdx((prev) => prev + 1)
      }, 4000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isInView])

  // 이전 버튼 클릭 함수
  const handlePrevButton = () => {
    setTransition(true)
    setCurrentIdx((prev) => prev - 1)
  }

  // 다음 버튼 클릭 함수
  const handleNextButton = () => {
    setTransition(true)
    setCurrentIdx((prev) => prev + 1)
  }

  // 캐러셀 인덱스 포맷 함수
  const formattedIndex = (idx: number, total: number) => {
    if (idx === 1) {
      return String(total).padStart(2, '0')
    } else if (idx === extendedBannerList.length - 2) {
      return '01'
    } else {
      return String(idx - 1).padStart(2, '0')
    }
  }

  return (
    <div className="relative w-screen h-[280px] overflow-hidden">
      <ul
        className="flex gap-5 w-[2148px] overflow-hidden"
        style={{ transform: 'translateX(calc((100vw - 2148px) / 2))' }}>
        {extendedBannerList.map((bannerLink, idx) => (
          <li
            key={idx}
            className={`w-full min-w-[703px] max-w-[703px] min-h-full overflow-hidden ${
              transition && 'transition-transform duration-500'
            }`}
            style={{
              transform: `translateX(-${(currentIdx - 1) * 723}px)`,
            }}>
            <Link
              href={`yeo/kmong/${bannerLink.link}`}
              className="relative w-full">
              <div
                className={`absolute w-full h-full rounded-2xl ${
                  idx === currentIdx
                    ? 'transparent'
                    : 'bg-black opacity-50 transition-opacity duration-200'
                }`}
              />
              <Image
                src={`/banner/banner_${bannerLink.id}.webp`}
                className="rounded-2xl"
                width={703}
                height={280}
                alt={`${bannerLink.id}번째 배너 이미지`}
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute mx-auto w-[703px] h-[280px] top-0 left-[50%] -translate-x-1/2">
        <div className="relative w-full h-full">
          <button
            className="absolute flex justify-center items-center w-8 h-8 left-2 bottom-[124px] bg-white opacity-50 rounded-[50%] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_rgba(0,0,0,0.18)]"
            onClick={handlePrevButton}>
            <HiOutlineChevronLeft className="w-4 h-4 text-[#212224]" />
          </button>
          <button
            className="absolute flex justify-center items-center w-8 h-8 right-2 bottom-[124px] bg-white opacity-50 rounded-[50%] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_rgba(0,0,0,0.18)]"
            onClick={handleNextButton}>
            <HiOutlineChevronRight className="w-4 h-4 text-[#212224]" />
          </button>
          <div className="absolute py-1 px-2 min-w-16 h-7 left-[620px] bottom-4 text-center bg-black/40 text-[13px] rounded-[14px]">
            <span className="text-white">
              {formattedIndex(currentIdx, bannerList.length)}
            </span>
            <span className="mx-[2px] text-white/50">/</span>
            <span className="text-white/50">
              {String(bannerList.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
