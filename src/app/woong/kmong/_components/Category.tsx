import dropDown from "@public/dropDown.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CategoryModal from "./modal/CategoryModal"

export default function Category() {
  const [modalOpen, setModalOpen] = useState(false)
  const trendingCategoryNav = [
    "디자인",
    "마케팅",
    "영상·사진·음향",
    "IT·프로그래밍",
    "전자책·템플릿",
  ]
  const businessCategoryNav = {
    prime: "상위 2% Prime",
    portfolio: "포트폴리오",
    "freelancer-club": "프리랜서클럽",
    blog: "크몽로그",
  }
  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <nav className="border-b-[1px] mt-2 items-center">
      <div className="w-full flex flex-row items-center justify-center -mx-20">
        <nav className="cursor-pointer mr-4 relative">
          <label
            htmlFor="category"
            onMouseEnter={toggleModal}
            onMouseLeave={toggleModal}
            className="font-bold flex gap-1 cursor-pointer py-[10px] border-b-4 border-b-transparent hover:border-b-yellow-400 ">
            전체 카테고리
            <Image
              src={dropDown}
              width={0}
              height={0}
              alt=""
              className="cursor-pointer"
            />
            {modalOpen && <CategoryModal />}
          </label>
        </nav>
        <ul className="flex flex-row gap-5 mr-8">
          {trendingCategoryNav.map((v, i) => (
            <li key={i} className="cursor-pointer navBarPseudo mb-2">
              <Link
                href={`category/${i}`}
                className="pb-[12px] hover:border-b-4 border-b-yellow-400">
                {v}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-row gap-5 ">
          {Object.entries(businessCategoryNav).map(([key, value], i) => (
            <li key={i} className="cursor-pointer mb-2">
              <Link
                href={"kmong/" + key}
                className="pb-[12px] hover:border-b-4 border-b-yellow-400">
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
