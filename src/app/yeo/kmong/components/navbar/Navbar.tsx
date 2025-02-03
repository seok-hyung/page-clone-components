import Link from 'next/link'
import { HiOutlineChevronDown } from 'react-icons/hi'
import DropdownCategories from './DropdownCategories'
import {
  serviceCategories,
  extraCategories,
} from '../../constants/categoryList'

interface Category {
  id: number
  category: string
  link: string
}

// 카테고리 배열을 받아 각 카테고리에 대해 <li> 요소 반환하는 함수
const navList = (categories: Category[]) => {
  return categories.map((categoryItem) => (
    <li
      key={categoryItem.id}
      className="relative py-3 after:absolute after:[''] after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#ffd401] after:opacity-0 hover:after:opacity-100">
      <Link href={`/yeo/kmong${categoryItem.link}`} className="text-[#212224]">
        {categoryItem.category}
      </Link>
    </li>
  ))
}

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#e4e5ed]">
      <div className="flex items-center gap-5 mx-auto max-w-[1200px] text-[#303441]">
        <div className="relative group">
          <button className="relative flex gap-1 items-center py-3 ml-4 text-[#303441] font-bold after:absolute after:[''] after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#ffd401] after:opacity-0 hover:after:opacity-100">
            <span>전체 카테고리</span>
            <HiOutlineChevronDown className="inline-block w-4 h-4" />
          </button>
          <DropdownCategories />
        </div>
        <ul className="flex gap-5 items-center">
          {navList(serviceCategories)}
        </ul>
        <div className="w-[1px] h-4 bg-[#e4e5ed]" />
        <ul className="flex gap-5 items-center">{navList(extraCategories)}</ul>
      </div>
    </nav>
  )
}
