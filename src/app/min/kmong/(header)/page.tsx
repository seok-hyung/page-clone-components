"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const list = ["react", "html", "javascript", "next", "css"]

const list2 = [
  "홈페이지제작",
  "홈페이지",
  "워드프레스",
  "크롤링",
  "카페24",
  "블로그",
  "아임웹",
  "카페24",
  "블로그",
  "아임웹",
]

export default function Header() {
  const [searchState, toggleSearchState] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const threshold = window.innerHeight
    setIsSticky(window.scrollY > threshold)
  }

  const handleFocus = () => {
    toggleSearchState(true)
  }

  const handleBlur = () => {
    toggleSearchState(false)
  }

  return (
    <>
      <div className="w-full bg-[#212224] h-13 text-center my-auto">
        <Link
          href={"/"}
          className="w-full block leading-[3rem] text-white text-lg font-normal">
          신규 가입하면
          <span className="text-[#f5c126] font-semibold"> 10만원 쿠폰 </span>
          드려요 〉
        </Link>
      </div>
      <header
        className={`flex-col sticky top-0 ${
          isSticky ? "border-b border-gray-300" : ""
        } `}>
        <div className="flex items-center justify-center h-16 w-full	 bg-white">
          <div className="mr-6">
            <Link href={"/"}>
              <Image src="/kmong_logo.gif" alt="로고" width={100} height={52} />
            </Link>
          </div>
          <div className="mx-4 relative">
            <input
              type="search"
              className="border border-black rounded-3xl h-11 w-[600px] outline-none hover:bg-gray-200 px-4 placeholder:text-black placeholder:text-sm focus:placeholder:text-opacity-0"
              placeholder="내년 운세가 궁금하다면? 답답한 순간 속 시원한 상담"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button>
              <SearchIcon />
            </button>
            <InputDialog searchState={searchState} />
          </div>
          <div className="flex">
            <ul className="flex gap-5 items-center text-sm">
              <li className="flex gap-1">
                <span className="items-center leading-5">엔터프라이즈</span>
                <span className="text-blue-500 bg-blue-100 font-bold rounded-xl px-1.5 text-[10px]">
                  기업용
                </span>
              </li>
              <li>
                <Link href={"/"}>전문가 등록</Link>
              </li>
              <li>
                <Link href={"/"}>로그인</Link>
              </li>
              <li>
                <button className="bg-[#f5c126] rounded-lg py-1.5 px-3 font-medium hover:bg-yellow-500 active:bg-yellow-600 ml-2">
                  회원가입
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="h-screen"></main>
      <main className="bg-red-100 h-screen"></main>
      <main className="bg-red-200 h-screen"></main>
      <main className="bg-red-300 h-screen"></main>
      <main className="bg-red-400 h-screen"></main>
      <main className="bg-red-500 h-screen"></main>
    </>
  )
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="24"
      className="absolute right-[3%] top-1/4">
      <path
        d="M14.9401 16.2929C13.5799 17.3622 11.8644 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.833 17.3835 13.522 16.3466 14.871L20.7071 19.2315C21.0976 19.622 21.0976 20.2552 20.7071 20.6457C20.3166 21.0362 19.6834 21.0362 19.2929 20.6457L14.9401 16.2929ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
        fillRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"></path>
    </svg>
  )
}

interface InputDialogProps {
  searchState: boolean
}

function InputDialog({ searchState }: InputDialogProps) {
  return (
    <div
      className={
        !searchState
          ? "hidden"
          : `absolute w-[580px] rounded-xl px-4 pt-3 pb-1 left-[10px] top-[50px] shadow-md`
      }>
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
