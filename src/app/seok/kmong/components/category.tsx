import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Category = () => {
  const [isOpen, setIsOpen] = useState(false)
  const categories1 = [
    '디자인',
    '마케팅',
    '영상·사진·음향',
    'IT·프로그래밍',
    '전자책·템플릿',
  ]
  const designDetails = {
    로고브랜딩: ['로고 디자인', '브랜드 디자인·가이드'],
    인쇄홍보물: [
      '명함',
      '전단지·포스터·인쇄물',
      '현수막·X배너',
      '메뉴판',
      '홍보물 인쇄·출력',
      '스티커·봉투·초대장',
    ],
    웹모바일디자인: [
      '웹 UI·UX',
      '앱·모바일 UI·UX',
      '템플릿형 홈페이지',
      '아이콘·버튼',
    ],
    마케팅디자인: [
      '상세페이지',
      'SNS·썸네일 디자인',
      '채널아트 디자인',
      '방송용 아바타',
      '배너·배달어플',
      '블로그·카페 디자인',
    ],
    패키지커버: ['책표지·내지', '전자책 표지·내지', '앨범커버', '패키지'],
    캐릭터일러스트: [
      '일러스트',
      '캐리커쳐',
      '웹툰·콘티',
      '2D 캐릭터',
      '이모티콘',
    ],
  }
  const categories2 = [
    '상위 2% Prime',
    '포트폴리오',
    '프리랜서클럽',
    '크몽로그',
  ]
  const businessCategories = [
    '디자인',
    'IT·프로그래밍',
    '영상·사진·음향',
    '마케팅',
    '번역·통역',
    '문서·글쓰기',
    '창업·사업',
    '주문제작',
    '세무·법무·노무',
  ]

  const careerCategories = ['취업·입시', '투잡·노하우', '직무역량 레슨']

  const hobbyCategories = ['운세', '심리상담', '취미 레슨', '생활서비스']
  return (
    <div className="">
      <div className="w-[1200px] flex items-center mx-auto pl-[14px]">
        <div
          className="flex group cursor-pointer relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          <div className="flex py-4">
            <span className="font-extrabold">전체 카테고리</span>
            <ChevronDown />
          </div>
          <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>

          {isOpen && (
            <div className="absolute left-0 top-12 z-10 mt-2 w-56 bg-gray-50 shadow-lg rounded-md">
              <div className="p-2">
                <h3 className="font-bold">비즈니스</h3>
                <ul className="flex flex-col">
                  {businessCategories.map((category, index) => (
                    <li
                      key={`business/${index}`}
                      className="py-1 hover:bg-gray-100">
                      <Link href={`category/business/${index + 1}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="border-t my-2"></div> */}
              <div className="p-2">
                <h3 className="font-bold">N잡·커리어</h3>
                <ul className="flex flex-col">
                  {careerCategories.map((category, index) => (
                    <li
                      key={`career/${index}`}
                      className="py-1 hover:bg-gray-100">
                      <Link href={`category/career/${index + 1}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="border-t my-2"></div> */}
              <div className="p-2">
                <h3 className="font-bold">취미생활</h3>
                <ul className="flex flex-col">
                  {hobbyCategories.map((category, index) => (
                    <li
                      key={`hobby/${index}`}
                      className="py-1 hover:bg-gray-100">
                      <Link href={`category/hobby/${index + 1}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <nav className="flex items-center ml-5">
          <ul className="flex">
            {/* 실제론 DB의 ID 사용 */}
            {categories1.map((category, index) => (
              <li
                key={`category/${index + 1}`}
                className="relative py-4 mr-4 last:mr-0 group">
                <Link href={`category/${index + 1}`}>{category}</Link>
                <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
          <div className="h-4 border-l border-gray-300 mx-4"></div>
          <ul className="flex">
            {categories2.map((category, index) => (
              <li
                key={`category/${index + 6}`}
                className="relative py-4 mr-4 last:mr-0 group">
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
