import React from 'react'
import { Header } from './components/header/header'
import { Banner } from './components/banner'
import { Category } from './components/category/category'
import { MainCarousel } from './components/carousel/main-carousel'
import { OuterCarousel } from './components/carousel/outer-carousel'

const page = () => {
  return (
    <>
      <Banner />
      <Header />
      <Category />
      <MainCarousel />
      <OuterCarousel />
    </>
  )
}

export default page
