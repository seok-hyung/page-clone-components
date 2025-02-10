import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import PopularServicesCarousel from './components/popularServicesCarousel/PopularServicesCarousel'

export default function KmongPage() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="my-10 h-screen bg-white">
        <Carousel />
        <PopularServicesCarousel />
      </section>
    </>
  )
}
