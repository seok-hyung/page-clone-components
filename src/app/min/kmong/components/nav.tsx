'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const navList = [
  { name: '디자인', link: '/' },
  { name: '마케팅', link: '/' },
  { name: '영상·사진·음향', link: '/' },
  { name: 'IT·프로그래밍', link: '/' },
  { name: '전자책·템플릿', link: '/' },
  { name: '', link: '/' },
  { name: '상위 2% Prime', link: '/' },
  { name: '포트폴리오', link: '/' },
  { name: '프리랜서클럽', link: '/' },
  { name: '크몽로그', link: '/' },
]

const totalCategories = [
  {
    name: '디자인',
    link: '/',
    subCategories: [
      {
        name: '로고·브랜딩',
        items: [
          { name: '로고 디자인', link: '/' },
          { name: '브랜드 디자인·가이드', link: '/' },
        ],
      },
      {
        name: '인쇄·홍보물',
        items: [
          { name: '명함', link: '/' },
          { name: '전단지·포스터·인쇄물', link: '/' },
          { name: '현수막·X배너', link: '/' },
          { name: '메뉴판', link: '/' },
          { name: '홍보물 인쇄·출력', link: '/' },
          { name: '스티커·봉투·초대장', link: '/' },
        ],
      },
    ],
  },
  {
    name: 'IT·프로그래밍',
    link: '/',
    subCategories: [
      {
        name: '웹 개발',
        items: [
          { name: '웹비디', link: '/' },
          { name: '워드프레스', link: '/' },
          { name: '카페24', link: '/' },
          { name: '아임웹', link: '/' },
          { name: 'be 빌더', link: '/' },
        ],
      },
      {
        name: '웹 제작',
        items: [
          { name: '홈페이지 신규 제작', link: '/' },
          { name: '쇼핑몰 신규 제작', link: '/' },
          { name: '랜딩페이지', link: '/' },
        ],
      },
    ],
  },
  { name: '영상·사진·음향', link: '/' },
  { name: '번역·통역', link: '/' },
  { name: '문서·글쓰기', link: '/' },
  { name: '창업·사업', link: '/' },
  { name: '주문제작', link: '/' },
  { name: '세무·법인·노무', link: '/' },
]

export default function Nav() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [hoveredSubCategory, setHoveredSubCategory] = useState<boolean>(false)

  return (
    <section className="border-b border-b-gray-300 h-12 w-full flex items-center justify-center">
      <div className="flex w-[1200px] mx-auto gap-6 h-12">
        <div className="flex items-center relative group">
          <button
            className="relative h-full flex items-center gap-1"
            onMouseEnter={() => setActiveCategory(null)}>
            <h1 className="font-semibold">전체 카테고리</h1>
            <ChevronDown className="size-4" />
          </button>
          <span className="absolute left-0 w-full bottom-0 border-yellow-300 border opacity-0 group-hover:opacity-100 transition-opacity"></span>

          <div
            className="invisible absolute top-12 left-0 opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-50 flex"
            onMouseLeave={() => {
              setActiveCategory(null)
              setHoveredSubCategory(false)
            }}>
            <div className="border border-gray-200 w-[200px] py-2 bg-white">
              <ul className="py-1">
                <li className="font-medium px-2">비즈니스</li>
                {totalCategories.map((category, index) => (
                  <li
                    key={index}
                    className="relative px-1 group/item"
                    onMouseEnter={() => {
                      setActiveCategory(index)
                      setHoveredSubCategory(false)
                    }}>
                    <Link
                      href={category.link}
                      className={`flex w-full items-center justify-between rounded px-2 py-2 text-sm text-gray-500 hover:bg-gray-100 ${
                        activeCategory === index ? 'bg-gray-100' : ''
                      } ${
                        activeCategory === index && hoveredSubCategory
                          ? 'font-bold'
                          : ''
                      }`}>
                      {category.name}
                      {category.subCategories && (
                        <ChevronRight className="size-4 opacity-0 transition-opacity group-hover/item:opacity-100" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {activeCategory !== null &&
              totalCategories[activeCategory]?.subCategories && (
                <div
                  className="border-r border-t border-b border-gray-200 w-[200px] bg-white"
                  onMouseEnter={() => {
                    setActiveCategory(activeCategory)
                    setHoveredSubCategory(true)
                  }}
                  onMouseLeave={() => setHoveredSubCategory(false)}>
                  <ul className="py-2 px-1">
                    {totalCategories[activeCategory].subCategories.map(
                      (subCategory, subIndex) => (
                        <li key={subIndex}>
                          <h3 className="font-semibold px-2 py-1">
                            {subCategory.name}
                          </h3>
                          <ul>
                            {subCategory.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="py-1 px-2 text-gray-500 hover:bg-gray-100">
                                <Link href={item.link}>{item.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        </div>

        <nav className="flex gap-6 relative">
          <ul className="flex gap-6 self-center h-full">
            {navList.map((item, index) => (
              <li
                key={index}
                className="h-full relative flex items-center group">
                {index === 5 && <span className="text-gray-200">|</span>}
                <Link href={`${item.link}`}>
                  {item.name}
                  {index !== 5 && (
                    <span className="absolute left-0 w-full bottom-0 border-yellow-300 border opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
