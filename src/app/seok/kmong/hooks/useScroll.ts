import { useEffect, useState } from 'react'
import { useDebounce } from './useDebouse'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const debouncedScrollY = scrollY

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollY, debouncedScrollY }
}

export default useScroll
