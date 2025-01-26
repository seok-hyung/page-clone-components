import React from 'react'
import { Header } from './components/header/header'
import { Banner } from './components/banner'
import { Category } from './components/category/category'

const page = () => {
  return (
    <>
      <Banner />
      <Header />
      <Category />
    </>
  )
}

export default page
