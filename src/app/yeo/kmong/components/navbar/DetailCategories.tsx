import Link from 'next/link'
import { designCategories } from '../../constants/categoryList'

interface DetailCategoryProps {
  title: string
  items: { id: number; category: string; link: string }[]
}

const DetailCategoryList = ({ title, items }: DetailCategoryProps) => (
  <>
    <p className="px-4 py-1 text-xs font-bold text-[#303441]">{title}</p>
    <ul className="mb-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center px-4 h-[27px] text-[13px] text-[#555969] cursor-pointer hover:bg-[#f2f3f7]">
          <Link href={`/yeo/kmong${item.link}`}>{item.category}</Link>
        </li>
      ))}
    </ul>
  </>
)

export default function DetailCategories() {
  return (
    <div className="grid py-3 bg-white">
      <div className="w-[180px]">
        {designCategories.map((categoryItem) => (
          <DetailCategoryList
            key={categoryItem.id}
            title={categoryItem.title}
            items={categoryItem.items}
          />
        ))}
      </div>
    </div>
  )
}
