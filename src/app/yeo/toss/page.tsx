import Header from './components/header/Header'
import HistoryList from './components/historySection/HistoryList'
import IntroList from './components/introSection/IntroList'

export default function TossPage() {
  return (
    <>
      <Header />
      <section className="inset-auto bg-black">
        <IntroList />
        {/* <HistoryList /> */}
      </section>
    </>
  )
}
