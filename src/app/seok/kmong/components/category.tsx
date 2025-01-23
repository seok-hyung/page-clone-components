import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const Category = () => {
  const categories1 = [
    '디자인',
    '마케팅',
    '영상·사진·음향',
    'IT·프로그래밍',
    '전자책·템플릿',
  ]
  const categories2 = [
    '상위 2% Prime',
    '포트폴리오',
    '프리랜서클럽',
    '크몽로그',
  ]
  return (
    <div className="shadow-[inset_0_0_0_2px_red]">
      <div className="w-[1200px] flex items-center mx-auto pl-[14px] shadow-[inset_0_0_0_2px_blue]">
        <div className="flex group font-extrabold cursor-pointer">
          <span>전체 카테고리</span>
          <ChevronDown />
        </div>

        <nav className="flex items-center ml-5">
          <ul className="flex">
            {/* 실제론 DB의 ID 사용 */}
            {categories1.map((category, index) => (
              <li key={`category/${index + 1}`} className="py-4 pr-4 last:pr-0">
                <Link href={`category/${index + 1}`}>{category}</Link>
              </li>
            ))}
          </ul>
          <div className="h-4 border-l border-gray-300 mx-4"></div>
          <ul className="flex">
            {categories2.map((category, index) => (
              <li key={`category/${index + 6}`} className="py-4 pr-4 last:pr-0">
                <Link href={`category/${index + 6}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
