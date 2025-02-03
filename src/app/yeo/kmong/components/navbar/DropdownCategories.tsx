import Link from 'next/link'
import {
  businessCategories,
  jobCategories,
  hobbyCategories,
} from '../../constants/categoryList'
import DetailCategories from './DetailCategories'

interface CategoryListProps {
  title: string
  categories: { id: number; category: string; link: string }[]
}

// 카테고리 목록 컴포넌트
const CategoryList = ({ title, categories }: CategoryListProps) => (
  <div>
    <p className="px-4 py-1 text-xs font-bold text-[#303441]">{title}</p>
    <ul>
      {categories.map((categoryItem) => (
        <li
          key={categoryItem.id}
          className="flex items-center px-4 h-[27px] text-[13px] text-[#555969] cursor-pointer hover:bg-[#f2f3f7] group">
          <Link href={`/yeo/kmong${categoryItem.link}`}>
            {categoryItem.category}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default function DropdownCategories() {
  return (
    <div className="absolute h-[550px] rounded-lg shadow-[rgba(0,_0,_0,_0.07)_0px_5px_11px_0px] z-20 hidden group-hover:flex">
      <div className="flex flex-col gap-2 w-[180px] py-3 left-4 bg-[#fafafc] ">
        <CategoryList title="비즈니스" categories={businessCategories} />
        <CategoryList title="N잡·커리어" categories={jobCategories} />
        <CategoryList title="취미·생활" categories={hobbyCategories} />
      </div>
      <DetailCategories />
    </div>
  )
}
