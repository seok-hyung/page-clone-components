import Link from 'next/link'
import React from 'react'

interface SearchDropdownProps {
  dropdownRef: React.RefObject<HTMLDivElement | null>
}

export default function SearchDropdown({ dropdownRef }: SearchDropdownProps) {
  return (
    <div
      className="absolute flex flex-col gap-4 top-[46px] left-0 right-0 p-2 bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] rounded-2xl"
      ref={dropdownRef}>
      <div className="px-3">
        <h3 className="py-[7px] text-xs font-bold text-[#303441]">
          최근 검색어
        </h3>
        <div className="py-[5px] text-sm text-center text-[#9a9ba7]">
          최근 검색어가 없습니다.
        </div>
      </div>

      <div className="px-3">
        <h3 className="py-[7px] text-xs font-bold text-[#303441]">
          추천 검색어
        </h3>
        <div className="flex flex-wrap gap-2 my-2">
          {Array.from({ length: 10 }, (_, idx) => (
            <Link
              href="/"
              key={idx}
              className="flex justify-center items-center px-2 h-[30px] text-xs text-[#212224] bg-white border border-[#e4e5ed] rounded-[14px] hover:bg-[#f5f5f5]">
              검색어{idx + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
