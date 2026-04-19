import { useEffect, useRef, useState } from 'react'

export default function SlowScroll({
  children,
  speed = 0.2,
  direction = 'up',
  className = '',
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ticking = false

    const updatePosition = () => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const clamped = Math.max(0, Math.min(1, progress))

      const maxShift = 140
      const base = (clamped - 0.5) * maxShift * speed * 6
      const translateY = direction === 'down' ? -base : base

      setOffset(translateY)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition)
        ticking = true
      }
    }

    updatePosition()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updatePosition)
    }
  }, [speed, direction])

  return (
    <div ref={ref} className={`slow-scroll-wrap ${className}`}>
      <div
        className="slow-scroll-inner"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        {children}
      </div>
    </div>
  )
}