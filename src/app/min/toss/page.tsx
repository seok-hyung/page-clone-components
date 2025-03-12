'use client'

import Header from '@/app/yeo/toss/components/header/Header'
import ImageTransitionSection from './components/ImageTransitionSection'
import { articles } from './object/ImageTransitionSection'
import ThreeCard from './components/ThreeCard'

export default function Page() {
  return (
    <div className="relative bg-gray-900">
      <Header />
      <div className="w-full h-[1000vh]">
        {/* 1️⃣ 위쪽 여백 */}
        <div className="h-[100vh]" />

        <ThreeCard />

        {/* 2️⃣ 이미지 섹션 */}
        <ImageTransitionSection images={articles.map((article) => article.image)} />

        {/* 3️⃣ 아래쪽 여백 */}
        <div className="h-[100vh]" />
      </div>
    </div>
  )
}
