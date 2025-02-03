import Header from './components/Header'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

export default function KmongPage() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="my-10 h-screen bg-white">
        <Carousel />
      </section>
    </>
  )
}
