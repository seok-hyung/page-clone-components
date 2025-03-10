import Header from './components/header/Header'
import HistoryList from './components/HistoryList'

export default function TossPage() {
  return (
    <>
      <Header />
      <section className="inset-auto bg-black">
        {/* <div className="pt-[100vh] min-h-screen"> */}
        <HistoryList />
        {/* </div> */}
      </section>
    </>
  )
}
