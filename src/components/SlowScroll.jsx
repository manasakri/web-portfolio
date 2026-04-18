import { useEffect, useRef, useState } from 'react'

export default function SlowScroll({ children, speed = 0.12, className = '' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const clamped = Math.max(0, Math.min(1, progress))
      const translateY = (clamped - 0.5) * 120 * speed * 10

      setOffset(translateY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [speed])

  return (
    <div ref={ref} className={`slow-scroll-wrap ${className}`}>
      <div
        className="slow-scroll-inner"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  )
}