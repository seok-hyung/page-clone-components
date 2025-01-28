import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Category = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  type Category = {
    name: string
    details: Record<string, string[]> // key는 문자열, 값은 문자열 배열
  }
  const categories1 = ['디자인', 'IT·프로그래밍', '영상·사진·음향', '마케팅', '전자책·템플릿']

  const categories2 = ['상위 2% Prime', '포트폴리오', '프리랜서클럽', '크몽로그']

  const designDetails = {
    로고브랜딩: ['로고 디자인', '브랜드 디자인·가이드'],
    인쇄홍보물: ['명함', '전단지·포스터·인쇄물', '현수막·X배너', '메뉴판', '홍보물 인쇄·출력', '스티커·봉투·초대장'],
    웹모바일디자인: ['웹 UI·UX', '앱·모바일 UI·UX', '템플릿형 홈페이지', '아이콘·버튼'],
    패키지커버: ['책표지·내지', '전자책 표지·내지', '앨범커버', '패키지'],
  }
  const programmingDetails = {
    웹개발: ['React', 'Vue', 'Angular', 'Node.js'],
    모바일개발: ['iOS', 'Android', 'React Native'],
    데이터베이스: ['MySQL', 'MongoDB', 'PostgreSQL'],
  }

  const careerDetails = {
    이력서: ['이력서 작성', '포트폴리오 작성'],
    면접: ['모의 면접', '면접 팁'],
    진로상담: ['진로 탐색', '커리어 코칭'],
  }

  const fortuneDetails = {
    타로: ['타로 카드', '타로 해석'],
    사주: ['사주 풀이', '사주 상담'],
    운세: ['일간 운세', '주간 운세', '월간 운세'],
  }

  const businessCategories: Category[] = [
    { name: '디자인', details: designDetails },
    { name: 'IT·프로그래밍', details: programmingDetails },
  ]

  const careerCategories: Category[] = [{ name: '취업·입시', details: careerDetails }]

  const hobbyCategories: Category[] = [{ name: '운세', details: fortuneDetails }]

  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="w-[1200px] flex items-center mx-auto pl-[14px]">
        <div
          className="relative flex cursor-pointer group"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          <div className="flex py-4">
            <span className="font-extrabold">전체 카테고리</span>
            <ChevronDown />
          </div>
          <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>

          {isOpen && (
            <div className="absolute left-0 z-10 w-56 mt-2 rounded-md shadow-lg top-12 bg-gray-50">
              <div className="p-2">
                <h3 className="font-bold">비즈니스</h3>
                <ul className="flex flex-col">
                  {businessCategories.map((category, index) => (
                    <li
                      key={`business/${index}`}
                      className="py-1 hover:bg-gray-100"
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onMouseLeave={() => setActiveCategory(null)}>
                      <Link href={`category/business/${index + 1}`}>{category.name}</Link>
                      {activeCategory === category.name && (
                        <div className="absolute left-48 top-0 bg-white min-w-[800px] shadow-lg rounded-md">
                          <ul className="flex flex-col p-2">
                            {Object.entries(category.details).map(([key, items]) => (
                              <li key={key} className="font-bold">
                                {key}
                                <ul className="">
                                  {items &&
                                    items.map((item, idx) => (
                                      <li key={idx} className="py-1 font-normal hover:bg-gray-100">
                                        <Link href={`category/business/details/${index + 1}/${idx + 1}`}>{item}</Link>
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-2">
                <h3 className="font-bold">N잡·커리어</h3>
                <ul className="flex flex-col">
                  {careerCategories.map((category, index) => (
                    <li
                      key={`career/${index}`}
                      className="py-1 hover:bg-gray-100"
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onMouseLeave={() => setActiveCategory(null)}>
                      <Link href={`category/career/${index + 1}`}>{category.name}</Link>
                      {activeCategory === category.name && (
                        <div className="absolute top-0 w-48 rounded-md shadow-lg left-48 bg-gray-50">
                          <ul className="flex flex-col p-2">
                            {Object.entries(category.details).map(([key, items]) => (
                              <li key={key} className="font-bold">
                                {key}
                                <ul>
                                  {items &&
                                    items.map((item, idx) => (
                                      <li key={idx} className="py-1 font-normal hover:bg-gray-100">
                                        <Link href={`category/career/details/${idx + 1}`}>{item}</Link>
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-2">
                <h3 className="font-bold">취미생활</h3>
                <ul className="flex flex-col">
                  {hobbyCategories.map((category, index) => (
                    <li
                      key={`hobby/${index}`}
                      className="py-1 hover:bg-gray-100"
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onMouseLeave={() => setActiveCategory(null)}>
                      <Link href={`category/hobby/${index + 1}`}>{category.name}</Link>
                      {activeCategory === category.name && (
                        <div className="absolute top-0 w-48 rounded-md shadow-lg left-48 bg-gray-50">
                          <ul className="flex flex-col p-2">
                            {Object.entries(category.details).map(([key, items]) => (
                              <li key={key} className="font-bold">
                                {key}
                                <ul>
                                  {items.map((item, idx) => (
                                    <li key={idx} className="py-1 font-normal hover:bg-gray-100">
                                      <Link href={`category/hobby/details/${idx + 1}`}>{item}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
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
