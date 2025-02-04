'use client'
import './style.css'
import Category from './_components/Category'
import EventPromotionBar from './_components/EventPromotionBar'
import Header from './_components/Header'
import Carousel from './_components/Carousel'

export default function Page() {
  return (
    <div className="min-w-[1200px]">
      <EventPromotionBar />
      <Header />
      <Category />
      <Carousel />
    </div>
  )
}
