'use client'

import Header from '@/app/yeo/toss/components/header/Header'
import ImageTransitionSection from './components/ImageTransitionSection'
import { articles } from './object/ImageTransitionSection'
import CardAnimation from './components/CardAnimation'
// import ThreeCard from './components/ThreeCard'

export default function Page() {
  return (
    <div className="relative bg-black h-full">
      <Header />
      <div className="w-full h-full bg-black">
        {/* 😣 위쪽 여백 */}
        <div className="h-[100vh]" />

        {/* 1️⃣ 카드 애니메이션 */}
        <CardAnimation />

        {/* 2️⃣ 이미지 섹션 */}
        <ImageTransitionSection images={articles.map((article) => article.image)} />

        {/* 😣 아래쪽 여백 */}
        <div className="h-[100vh]" />
      </div>
    </div>
  )
}
