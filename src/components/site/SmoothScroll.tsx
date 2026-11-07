import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'

// Height of the sticky header, so in-page links land with the section top just below it.
const HEADER_OFFSET = 69

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      anchors: { offset: -HEADER_OFFSET },
      // Smoothing is a deliberate part of the site's feel, so it stays on even when the OS asks for
      // reduced motion. Set this back to true to hand that choice to the visitor's system setting.
      respectReducedMotion: false,
    })
    return () => lenis.destroy()
  }, [])

  return null
}
