import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    let lenis
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      })
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
    })
    return () => lenis?.destroy()
  }, [])
}
