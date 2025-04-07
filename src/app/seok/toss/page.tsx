import { HistoryScrollSection } from './components/history-scroll/history-scroll-section'
import { IntroCardSection } from './components/intro-card-scroll/intro-card-section'
import TheHeader from './components/the-header'
import { CombinedSection } from './components/blue-black-and-youtube-video-scroll/combined-section'
export default function Page() {
  return (
    <>
      <TheHeader />
      <IntroCardSection />
      <HistoryScrollSection />
      <CombinedSection />
    </>
  )
}
