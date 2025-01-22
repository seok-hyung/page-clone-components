import React from "react"
import { createPortal } from "react-dom"
import SearchSuggestions from "./SearchSuggestions"

export default function ModalInput() {
  const modalRoot = document.getElementById("modal-root")

  if (!modalRoot) return null

  return createPortal(
    <>
      <dialog
        open
        className="m-0 left-[505px]  max-w-[626px] flex flex-col  shadow-xl rounded-xl text-[12px]">
        <div className="flex flex-col gap-3 p-3 ">
          <section>
            <h3 className="font-bold">최근 검색어</h3>
            <span className="my-4 text-[#9a9ba7] text-[14px] flex justify-center items-center">
              최근 검색어가 없습니다.
            </span>
          </section>

          <section className="">
            <h3 className="font-bold ">추천 검색어</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <SearchSuggestions>로고</SearchSuggestions>
              <SearchSuggestions>블로그</SearchSuggestions>
              <SearchSuggestions>상세페이지</SearchSuggestions>
              <SearchSuggestions>명함</SearchSuggestions>
              <SearchSuggestions>로고디자인</SearchSuggestions>
              <SearchSuggestions>포토샵</SearchSuggestions>
              <SearchSuggestions>타로</SearchSuggestions>
              <SearchSuggestions>사주</SearchSuggestions>
              <SearchSuggestions>홈페이지제작</SearchSuggestions>
              <SearchSuggestions>신점</SearchSuggestions>
              <SearchSuggestions>신점</SearchSuggestions>
            </div>
          </section>
        </div>
      </dialog>
    </>,
    modalRoot
  )
}
