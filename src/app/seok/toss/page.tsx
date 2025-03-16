import { HistoryScrollSection } from './components/history-scroll/history-scroll-section'
import { IntroCardSection } from './components/intro-card-scroll/intro-card-section'
import TheHeader from './components/TheHeader'

export default function Page() {
  return (
    <>
      <TheHeader />
      <IntroCardSection />
      <HistoryScrollSection />
    </>
  )
}
