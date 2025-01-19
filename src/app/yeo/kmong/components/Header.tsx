"use client"
import Image from "next/image"
import Link from "next/link"
import { CgSearch } from "react-icons/cg"
import { GoChevronRight } from "react-icons/go"

export default function Header() {
  return (
    <>
      {/* 이벤트 배너 */}
      <div className="py-3 bg-[#212224]">
        <Link
          href="/signup"
          className="flex justify-center items-center font-light text-white">
          신규 가입하면&nbsp;
          <span className="text-[#ffd400] font-semibold">10만원 쿠폰</span>
          &nbsp; 드려요
          <GoChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* 헤더 */}
      <header className="sticky top-0 flex justify-between items-center px-4 py-2 mx-auto max-w-[1200px] z-50">
        <Link href="/" className="">
          <Image src="/logo.gif" alt="로고" width={100} height={52} />
        </Link>
        <div className="flex flex-1 justify-between items-center px-4 py-2 mx-10 w-full border border-[#212224] rounded-3xl transition-colors duration-200 hover:bg-[#F2F3F7] group">
          <input
            type="text"
            maxLength={50}
            className="w-full h-full text-sm border-none outline-none transition-colors duration-200 group-hover:bg-[#F2F3F7]"
            aria-label="검색 입력창"
          />
          <button className="px-[6px] cursor-pointer">
            <CgSearch className="w-6 h-6" />
          </button>
        </div>
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
            className="flex items-center h-9 px-4 font-medium bg-[#ffd400] rounded-lg transition-colors duration-300 hover:bg-[#F4C126]">
            <span>회원가입</span>
          </Link>
        </div>
      </header>
    </>
  )
}
