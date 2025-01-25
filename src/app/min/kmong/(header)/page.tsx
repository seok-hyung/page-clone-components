'use client'

import Image from 'next/image'
import Link from 'next/link'
import magnifying from '@public/magnifying.svg'
import { useEffect, useRef, useState } from 'react'

const list = ['react', 'html', 'javascript', 'next', 'css']

const list2 = [
  '홈페이지제작',
  '홈페이지',
  '워드프레스',
  '크롤링',
  '카페24',
  '블로그',
  '아임웹',
  '카페24',
  '블로그',
  '아임웹',
]

export default function Header() {
  const [searchState, setSearchState] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const headerTop = useRef<HTMLHeadingElement | null>(null)

  const handleScroll = () => {
    if (headerTop.current) {
      const header = headerTop.current.getBoundingClientRect()

      if (header.top === 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="w-full bg-[#212224] h-13 text-center my-auto">
        <Link
          href={'/'}
          className="w-full block leading-[3rem] text-white text-lg font-normal">
          신규 가입하면
          <span className="text-[#f5c126] font-semibold"> 10만원 쿠폰 </span>
          드려요 〉
        </Link>
      </div>
      <header
        ref={headerTop}
        className={`flex-col sticky top-0 ${
          isSticky ? 'border-b border-gray-300' : ''
        } `}>
        <div className="flex items-center justify-center h-16 w-full bg-white">
          <div>
            <Link href={'/'}>
              <Image src="/kmong_logo.gif" alt="로고" width={100} height={52} />
            </Link>
          </div>
          <div className="mx-4 relative">
            <input
              type="search"
              className="border border-black rounded-3xl h-11 w-[600px] outline-none hover:bg-gray-200 px-4 placeholder:text-black placeholder:text-sm focus:placeholder:text-opacity-0"
              placeholder="내년 운세가 궁금하다면? 답답한 순간 속 시원한 상담"
              onFocus={() => {
                setSearchState(true)
              }}
              onBlur={() => {
                setSearchState(false)
              }}
            />
            <button>
              <Image
                src={magnifying}
                alt="New Year Logo"
                width={24}
                height={24}
                className="absolute right-[3%] top-1/4"
              />
            </button>
            {searchState && <InputDialog />}
          </div>

          <div className="flex">
            <ul className="flex gap-5 items-center text-sm">
              <li className="flex gap-1">
                <Link href={'/'}>
                  <span className="items-center leading-5">엔터프라이즈</span>
                  <span className="text-blue-500 bg-blue-100 font-bold rounded-xl px-1.5 text-[10px]">
                    기업용
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/'}>전문가 등록</Link>
              </li>
              <li>
                <Link href={'/'}>로그인</Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="bg-[#f5c126] rounded-lg py-1.5 px-3 font-medium hover:bg-yellow-500 active:bg-yellow-600">
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="h-screen"></main>
      <main className="bg-red-100 h-screen"></main>
    </>
  )
}

function InputDialog() {
  return (
    <div
      onMouseDown={(e) => e.preventDefault()}
      className="absolute w-[580px] rounded-xl px-4 pt-3 pb-1 left-[10px] top-[50px] shadow-md">
      <div className="flex justify-between mb-2">
        <div className="text-xs font-bold items-center leading-6">
          최근 검색어
        </div>
        <button className="text-xs font-bold text-blue-700 hover:bg-blue-100 rounded-md py-1 px-2">
          전체 삭제
        </button>
      </div>
      <div>
        <ul>
          {list &&
            list.map((item, index) => (
              <li key={index} className="flex justify-between my-1">
                <span className="hover:font-medium hover:cursor-pointer hover:underline">
                  {item}
                </span>
                <button className="text-gray-400 hover:bg-gray-100 rounded-full px-1.5">
                  ⨉
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-4">
        <div className="text-xs font-bold">추천 검색어</div>
        <div className="px-0.5 mt-2 flex flex-wrap">
          {list2 &&
            list2.map((item, index) => (
              <span key={index}>
                <button className="rounded-xl border-gray-300 border px-2 py-1 text-xs mr-2 mb-2 hover:bg-gray-100">
                  {item}
                </button>
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
