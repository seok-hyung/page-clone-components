import { useEffect, useState } from 'react'
import { useDebounce } from './useDebouse'

const useScroll = (delay: number = 100) => {
  const [scrollY, setScrollY] = useState(0)
  const debouncedScrollY = useDebounce(scrollY, delay)
  const isSticky = debouncedScrollY > 0 // 스크롤이 0보다 크면 sticky 상태

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollY: debouncedScrollY, isSticky }
}

export default useScroll
