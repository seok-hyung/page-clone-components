import React from 'react'
import { Header } from './components/header/header'
import { Banner } from './components/banner'
import { Category } from './components/category/category'
import { MainCarousel } from './components/carousel/main-carousel'

const page = () => {
  return (
    <>
      <Banner />
      <Header />
      <Category />
      <MainCarousel />
    </>
  )
}

export default page
