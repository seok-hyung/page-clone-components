import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SubCategoryData } from '../../types/types'
import { categories1, categories2 } from './categoryData'
import { fetchSubCategoryData } from '../../lib/fetch'

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

  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="w-[1200px] flex items-center mx-auto pl-[14px]">
        {/* 전체 카테고리 드롭다운 */}
        <div
          className="relative flex py-4 cursor-pointer group"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setIsOpen(false)
            setSubCategoryData(null)
          }}>
          <span className="font-extrabold">전체 카테고리</span>
          <ChevronDown />

          {/* border-b 바 */}
          <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>

          {/* 드롭다운 메뉴 */}
          {isOpen && (
            <div className="absolute left-0 flex min-w-full shadow-lg w-max rounded-s-md top-full bg-gray-50">
              <div className="flex flex-col flex-shrink-0">
                <div className="p-2">
                  <h3 className="font-bold cursor-default">비즈니스</h3>
                  <ul className="flex flex-col">
                    {businessCategories.map((category) => (
                      <li
                        key={`business/${category.id}`}
                        className="py-1 hover:bg-gray-100"
                        onMouseEnter={() => handleMouseEnter(category.id)}>
                        <Link href={`category/business/${category.id}`}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2">
                  <h3 className="font-bold cursor-default">N잡·커리어</h3>
                  <ul className="flex flex-col">
                    {careerCategories.map((category) => (
                      <li
                        key={`career/${category.id}`}
                        className="py-1 hover:bg-gray-100"
                        onMouseEnter={() => handleMouseEnter(category.id)}>
                        <Link href={`category/career/${category.id}`}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2">
                  <h3 className="font-bold cursor-default">취미생활</h3>
                  <ul className="flex flex-col">
                    {hobbyCategories.map((category) => (
                      <li
                        key={`hobby/${category.id}`}
                        className="py-1 hover:bg-gray-100"
                        onMouseEnter={() => handleMouseEnter(category.id)}>
                        <Link href={`category/hobby/${category.id}`}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {subCategoryData && (
                <div className="w-full p-3 bg-white shadow-lg rounded-e-md">
                  <ul className="flex">
                    {Object.entries(subCategoryData).map(([key, items]) => (
                      <li key={key} className="flex flex-col mr-8 font-bold cursor-default min-w-fit">
                        {key}
                        <ul className="">
                          {items.map((item, idx) => (
                            <li key={idx} className="py-[2px] font-normal cursor-pointer hover:bg-gray-100">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <nav className="flex items-center ml-5">
          <ul className="flex">
            {categories1.map((category, index) => (
              <li key={`category/${index + 6}`} className="relative py-4 mr-4 last:mr-0 group">
                <Link href={`category/${index + 6}`}>{category}</Link>
                <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
          <div className="h-4 mx-4 border-l border-gray-300"></div>
          <ul className="flex">
            {categories2.map((category, index) => (
              <li key={`category/${index + 6}`} className="relative py-4 mr-4 last:mr-0 group">
                <Link href={`category/${index + 6}`}>{category}</Link>
                <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
