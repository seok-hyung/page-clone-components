import { useEffect, useState } from 'react'

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(false)

  // scroll 위치에 따른 상태 관리
  const handleScroll = () => {
    if (window.scrollY > 64) {
      setScrollPosition(true)
    } else {
      setScrollPosition(false)
    }
  }

  // 상태에 따라 이벤트 등록, 삭제
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollPosition,
  }
}
