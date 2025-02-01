import React from "react"
import SearchSuggestions from "../button/SearchSuggestions"

export default function HeaderInputModal() {
  const SearchSuggestionsArray = [
    "로고",
    "블로그",
    "상세페이지",
    "명함",
    "로고디자인",
    "포토샵",
    "타로",
    "사주",
    "홈페이지제작",
    "신점",
  ]
  return (
    <>
      <dialog
        open
        className="w-[626px] flex flex-col shadow-xl rounded-xl text-[12px] z-10 top-[52px]"
        onMouseDown={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-3 p-3">
          <div>
            <h3 className="font-bold">최근 검색어</h3>
            <span className="my-4 text-[#9a9ba7] text-[14px] flex justify-center items-center">
              최근 검색어가 없습니다.
            </span>
          </div>

          <section className="">
            <h3 className="font-bold ">추천 검색어</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SearchSuggestionsArray.map((v, i) => (
                <SearchSuggestions key={i}>{v}</SearchSuggestions>
              ))}
            </div>
          </section>
        </div>
      </dialog>
    </>
  )
}
