import DotGrid from '@/components/DotGrid'
import { useDarkScheme } from '@/lib/useDarkScheme'

// DotGrid only accepts hex colours: a dot a step above --bg, and --brand-text where the pointer passes.
const THEMES = {
  dark: { base: '#1d2421', active: '#3ee8a0' },
  light: { base: '#dde3df', active: '#0a7a4a' },
}

/**
 * A sparse dot field fixed behind the page below the hero. It sits still while the content scrolls
 * over it; dots near the pointer light up and spring aside, and a click sends a ripple outward.
 */
export function PageBackground() {
  const dark = useDarkScheme()
  const theme = dark ? THEMES.dark : THEMES.light

  return (
    <div className="page-bg" aria-hidden="true">
      <DotGrid
        dotSize={2.5}
        gap={26}
        baseColor={theme.base}
        activeColor={theme.active}
        proximity={130}
        strength={0.8}
        returnDuration={1}
        shockRadius={260}
        shockStrength={3}
        glow={dark ? 0.6 : 0.2}
        intro={false}
        respectReducedMotion={false}
      />
    </div>
  )
}
