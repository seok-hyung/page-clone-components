import { HistoryScrollSection } from './components/history-scroll/history-scroll-section'
import { IntroCardSection } from './components/intro-card-scroll/intro-card-section'
import TheHeader from './components/the-header'
import { LogoBlueBlack } from './components/logo-blue-black/logo-blue-black'
import { YouTubeVideoSection } from './components/youtube-video/youtube-video'
export default function Page() {
  return (
    <>
      <TheHeader />
      <IntroCardSection />
      <HistoryScrollSection />
      <LogoBlueBlack />
      <YouTubeVideoSection />
    </>
  )
}
