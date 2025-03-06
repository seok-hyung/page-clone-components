import Header from './components/header/Header'
import HistoryList from './components/HistoryList'

export default function TossPage() {
  return (
    <>
      <Header />
      <section className="inset-auto bg-black">
        <div className="min-h-[956px]">
          <HistoryList />
        </div>
      </section>
    </>
  )
}
