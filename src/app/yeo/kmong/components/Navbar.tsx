import Link from 'next/link'
import { HiOutlineChevronDown } from 'react-icons/hi'

interface Category {
  categoryName: string
  pathname: string
}

// 카테고리 배열을 받아 각 카테고리에 대해 <li> 요소 반환하는 함수
const navList = (categories: Category[]) => {
  return categories.map((category, idx) => (
    <li
      key={idx}
      className="relative py-3 after:absolute after:[''] after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#ffd401] after:opacity-0 hover:after:opacity-100">
      <Link href={`/yeo/kmong/${category.pathname}`} className="text-[#212224]">
        {category.categoryName}
      </Link>
    </li>
  ))
}

export default function Navbar() {
  // 서비스 관련 카테고리 목록, pathname은 예시로 지정(실제 경로는 추후에 변경)
  const serviceCategories = [
    { categoryName: '디자인', pathname: '1' },
    { categoryName: '마케팅', pathname: '2' },
    { categoryName: '영상·사진·음향', pathname: '3' },
    { categoryName: 'IT·프로그래밍', pathname: '4' },
    { categoryName: '전자책·템플릿', pathname: '5' },
  ]

  // 추가 카테고리 목록, pathname은 예시로 지정(실제 경로는 추후에 변경)
  const extraCategories = [
    { categoryName: '상위 2% Prime', pathname: '6' },
    { categoryName: '포트폴리오', pathname: '7' },
    { categoryName: '프리랜서클럽', pathname: '8' },
    { categoryName: '크몽로그', pathname: '9' },
  ]

  return (
    <nav className="bg-white border-b border-[#e4e5ed]">
      <div className="flex items-center gap-5 mx-auto max-w-[1200px] text-[#303441]">
        <button className="relative flex gap-1 items-center py-3 ml-4 text-[#303441] font-bold after:absolute after:[''] after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#ffd401] after:opacity-0 hover:after:opacity-100">
          <span>전체 카테고리</span>
          <HiOutlineChevronDown className="inline-block w-4 h-4" />
        </button>
        <ul className="flex gap-5 items-center">
          {navList(serviceCategories)}
        </ul>
        <div className="w-[1px] h-4 bg-[#e4e5ed]" />
        <ul className="flex gap-5 items-center">{navList(extraCategories)}</ul>
      </div>
    </nav>
  )
}
