'use client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SubCategoryData } from '../../types/types'
import { categories1, categories2 } from './categoryData'
import { fetchSubCategoryData } from '../../lib/fetch'
import { CategoryList } from './category-list'
import { SubCategoryDropdown } from './sub-category-dropdown'
import NavCategoryList from './nav-category-list'

export const Category = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [subCategoryData, setSubCategoryData] = useState<SubCategoryData | null>(null)

  const businessCategories = [
    { id: 1, name: '디자인' },
    { id: 2, name: 'IT·프로그래밍' },
  ]
  const careerCategories = [{ id: 3, name: '취업·입시' }]
  const hobbyCategories = [{ id: 4, name: '운세' }]

  const handleMouseEnter = async (id: number) => {
    const data = await fetchSubCategoryData(id)
    setSubCategoryData(data)
  }

  const onMouseEnterAllCategory = () => {
    setIsOpen(true)
  }
  const onMouseLeaveAllCategory = () => {
    setIsOpen(false)
    setSubCategoryData(null)
  }

  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="w-[1200px] flex items-center mx-auto pl-[14px]">
        {/* 전체 카테고리 드롭다운 */}
        <div
          className="relative flex py-4 cursor-pointer group"
          onMouseEnter={onMouseEnterAllCategory}
          onMouseLeave={onMouseLeaveAllCategory}>
          <span className="font-extrabold">전체 카테고리</span>
          <ChevronDown />
          {/* border-b 바 */}
          <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>

          {/* 드롭다운 메뉴 */}
          {isOpen && (
            <div className="absolute left-0 flex min-w-full shadow-lg w-max rounded-s-md top-full bg-gray-50 z-10">
              <div className="flex flex-col flex-shrink-0 w-48">
                <CategoryList title="비즈니스" categories={businessCategories} onMouseEnter={handleMouseEnter} />
                <CategoryList title="N잡·커리어" categories={careerCategories} onMouseEnter={handleMouseEnter} />
                <CategoryList title="취미생활" categories={hobbyCategories} onMouseEnter={handleMouseEnter} />
              </div>
              <SubCategoryDropdown subCategoryData={subCategoryData} />
            </div>
          )}
        </div>

        {/* 전체카테고리 이외의 nav */}
        <nav className="flex items-center ml-5">
          <NavCategoryList categories={categories1} />
          <div className="h-4 mx-4 border-l border-gray-300"></div>
          <NavCategoryList categories={categories2} />
        </nav>
      </div>
    </div>
  )
}
