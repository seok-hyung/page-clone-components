'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import useScroll from '../hooks/useScroll'
import { Banner } from './banner'

export const Header = () => {
  const [searchTexts, setSearchTexts] = useState('')
  const [isSearchUi, setIsSearchUi] = useState(false)
  const { scrollY } = useScroll()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // Header의 위치가 최상단인지 확인
    const headerOffset = document
      .querySelector('header')
      ?.getBoundingClientRect().top

    if (headerOffset! <= 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }, [scrollY])

  const recentSearches: string[] = []
  const recommendedSearches = [
    '홈페이지제작',
    '홈페이지',
    '워드프레스',
    '크롤링',
    '카페24',
    '블로그',
    '아임웹',
    '상세페이지',
    '엑셀',
    '매크로',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTexts(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('검색 버튼 클릭', searchTexts)
    setSearchTexts('')
    setIsSearchUi(false)
    redirect('/seok/kmong')
  }

  const openSearchModal = () => {
    setIsSearchUi(true)
  }

  const closeSearchModal = () => {
    setIsSearchUi(false)
  }

  return (
    <>
      <Banner />
      {/* 로고, 검색창, 버튼들 */}
      <header
        className={`w-full py-2 z-10 h-16 sticky top-0 insent-x-0 bg-white ${
          isSticky ? 'border-b-[1px] border-gray-400 border-solid' : ''
        }`}>
        <div id="header" className="w-[1200px] m-auto flex items-center">
          <Image
            src={'/kmong-main-logo.gif'}
            width={100}
            height={60}
            alt="main-logo"
          />
          <form onSubmit={handleSearchSubmit} className="mx-10 w-[60%]">
            <div className="w-full py-2 border-solid border-[1px] border-black rounded-full relative hover:bg-[#f2f3f7] group">
              <div className="flex justify-between gap-4 mx-5">
                <input
                  type="text"
                  className="w-full focus:outline-none group-hover:bg-[#f2f3f7]"
                  value={searchTexts}
                  onChange={handleInputChange}
                  onFocus={openSearchModal}
                  onBlur={closeSearchModal}
                  alt="검색 창"
                />
                <button type="submit" className="cursor-pointer">
                  <Search />
                </button>
              </div>
              {isSearchUi && (
                <div
                  className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-xl shadow-md z-10"
                  onMouseDown={(e) => e.preventDefault()}>
                  <div className="p-5">
                    <h4 className="font-bold">최근 검색어</h4>
                    <ul>
                      {recentSearches.length > 0 ? (
                        recentSearches.map((item) => (
                          <li
                            key={item}
                            className="py-1 hover:bg-gray-100 cursor-pointer">
                            {item}
                          </li>
                        ))
                      ) : (
                        <p className="text-center text-gray-400">
                          최근 검색어가 없습니다.
                        </p>
                      )}
                    </ul>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold mb-4">추천 검색어</h4>
                    <ul className="flex flex-wrap gap-2">
                      {recommendedSearches.length > 0 &&
                        recommendedSearches.map((item, index) => (
                          <li
                            key={`${item}${index}`}
                            className="py-1 px-4 hover:bg-gray-100 cursor-pointer rounded-full border-[#eee] border-2">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </form>

          <div className="flex w-[40%]">
            <div className="mr-4">
              <Link href={'/#'}>
                엔터프라이즈{' '}
                <span className="rounded-xl bg-[#ebf4ff] px-1 py-1 text-blue-500 text-xs font-extrabold">
                  기업용
                </span>
              </Link>
            </div>
            <div className="mr-4">
              <Link href={'/#'}>전문가등록</Link>
            </div>

            <div className="mr-4">
              <Link href={'/#'}>로그인</Link>
            </div>
            <div>
              <Link href={'/#'} className="bg-yellow-400 px-4 py-2 rounded-md ">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
