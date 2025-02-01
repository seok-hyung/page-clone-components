import Link from "next/link"
import { useState } from "react"
import CategoryModalDetail from "./CategoryModalDetail"

export default function CategoryModal() {
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal() {
    setModalOpen(!modalOpen)
  }
  return (
    <div className="flex flex-row">
      <dialog
        open
        onMouseEnter={(e) => e.preventDefault()}
        className="w-[180px] absolute bg-[#fafafc] top-12 text-[12px] font-normal  text-[#727585] categoryPseudo pb-5 shadow-sm">
        <ul className=" flex flex-col gap-1 ">
          <li className="font-bold mb-1 cursor-default text-black pl-4 pt-4">
            비즈니스
          </li>

          <Link href={`#`}>
            <li
              onMouseEnter={toggleModal}
              onMouseLeave={toggleModal}
              className=" w-full hover:bg-gray-100 pl-4 categoryLi">
              디자인
            </li>
          </Link>
          <Link href={`#`}>
            <li
              onMouseEnter={toggleModal}
              onMouseLeave={toggleModal}
              className=" w-full hover:bg-gray-100 pl-4 categoryLi">
              IT·프로그래밍
            </li>
          </Link>
        </ul>
        <ul className="mb-2 flex flex-col gap-1 ">
          <li className="font-bold mb-1 cursor-default text-black pl-4 pt-4 ">
            N잡·커리어
          </li>
          <li className=" w-full hover:bg-gray-100 pl-4 categoryLi">
            취업·입시
          </li>
          <li className=" w-full hover:bg-gray-100 pl-4 categoryLi">
            투잡·노하우
          </li>
        </ul>
        <ul className="mb-2 flex flex-col gap-1">
          <li className="font-bold mb-1 cursor-default text-black pl-4 pt-4 ">
            취미·생활
          </li>
          <li className=" w-full hover:bg-gray-100 pl-4 categoryLi">운세</li>
          <li className=" w-full hover:bg-gray-100 pl-4 categoryLi">
            심리상담
          </li>
        </ul>
      </dialog>
      {modalOpen && <CategoryModalDetail />}
    </div>
  )
}
