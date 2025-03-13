import Header from './components/header/Header'
import HistoryList from './components/historySection/HistoryList'
import IntroList from './components/introSection/IntroList'

export default function TossPage() {
  return (
    <>
      <Header />
      <section className="inset-auto bg-black">
        {/* <div className="pt-[100vh] min-h-screen"> */}
        <IntroList />
        <HistoryList />
        {/* </div> */}
      </section>
    </>
  )
}
