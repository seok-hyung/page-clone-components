'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CgSearch } from 'react-icons/cg'
import { GoChevronRight } from 'react-icons/go'
import SearchDropdown from './SearchDropdown'
import React, { useEffect, useRef, useState } from 'react'
import useScroll from '../hooks/useScroll'

export default function Header() {
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { scrollPosition } = useScroll()

  // 검색창 클릭 시 상태값 변경
  const handleFocusSearchBar = () => {
    setIsDropdownOpen(true)
  }

  // 검색창, SearchDropdown 바깥 영역 클릭 시 상태값 변경
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        searchInputRef.current?.contains(e.target as Node) ||
        dropdownRef.current?.contains(e.target as Node)
      ) {
        return
      }
      setIsDropdownOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      {/* 이벤트 배너 */}
      <aside className="py-3 bg-[#212224]">
        <Link
          href="/signup"
          className="flex justify-center items-center font-light text-white">
          신규 가입하면&nbsp;
          <span className="text-[#ffd400] font-semibold">10만원 쿠폰</span>
          &nbsp; 드려요
          <GoChevronRight className="w-6 h-6" />
        </Link>
      </aside>

      {/* 헤더 */}
      <header
        className={`sticky top-0 bg-white z-50 ${
          scrollPosition && 'border border-[#e4e5ed]'
        }`}>
        <div className="flex justify-between items-center pr-4 py-[6px] mx-auto max-w-[1200px]">
          <Link href="/yeo/kmong">
            <Image src="/logo.gif" alt="로고" width={100} height={52} />
          </Link>
          <form className="relative flex flex-1 justify-between items-center px-4 py-2 mx-10 w-full border border-[#212224] rounded-3xl transition-colors duration-200 hover:bg-[#f2f3f7] group">
            <input
              type="text"
              maxLength={50}
              className="w-full h-full text-sm border-none outline-none transition-colors duration-200 group-hover:bg-[#f2f3f7]"
              aria-label="검색 입력창"
              ref={searchInputRef}
              onFocus={handleFocusSearchBar}
            />
            <button className="px-[6px] cursor-pointer">
              <CgSearch className="w-6 h-6" />
            </button>
            {isDropdownOpen && <SearchDropdown dropdownRef={dropdownRef} />}
          </form>
          <div className="flex items-center gap-6 text-sm text-[#212224]">
            <div>
              <Link href="/">
                엔터프라이즈
                <div className="inline-block px-[6px] py-[2px] ml-1 text-[10px] font-medium text-[#4b94fa] bg-[#ebf4ff] rounded-xl">
                  기업용
                </div>
              </Link>
            </div>
            <Link href="/">전문가 등록</Link>
            <Link href="/login">로그인</Link>
            <Link
              href="/signup"
              className="flex items-center h-9 px-4 font-medium text-inherit bg-[#ffd400] rounded-lg transition-colors duration-300 hover:bg-[#f4c126]">
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
