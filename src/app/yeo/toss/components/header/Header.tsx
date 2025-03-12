'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="fixed w-full h-[60px] bg-[#001d3a]/[0.18] backdrop-blur-lg border-b border-b-[#001b37]/[0.1] z-10">
      <div className="m-auto w-full h-full max-w-[1140px]">
        <div className="flex justify-between items-center mx-auto w-[92%] h-full max-w-[calc(100%-48px)]">
          <Link href="/yeo/toss" className="text-3xl font-semibold text-white">
            toss
          </Link>
          <ul className="flex justify-between items-center gap-2 text-sm text-white">
            <li>
              <Link href="/yeo/toss" className="px-[10px] py-3">
                브랜드 스토리
              </Link>
            </li>
            <li>
              <Link href="/yeo/toss" className="px-[10px] py-3">
                토스의 도전
              </Link>
            </li>
            <li>
              <Link href="/yeo/toss" className="px-[10px] py-3">
                응원카드 만들기
              </Link>
            </li>
            <li>
              <button className="px-3 py-[7px] bg-white/20 text-sm rounded-[20px]">공유하기</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
