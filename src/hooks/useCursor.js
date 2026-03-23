import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX - 4 + 'px'
      dot.style.top = e.clientY - 4 + 'px'
    }

    const onEnter = () => ringEl.classList.add('hovered')
    const onLeave = () => ringEl.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    let raf
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x - 16) * 0.1
      ring.current.y += (pos.current.y - ring.current.y - 16) * 0.1
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top = ring.current.y + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { dotRef, ringRef }
}
