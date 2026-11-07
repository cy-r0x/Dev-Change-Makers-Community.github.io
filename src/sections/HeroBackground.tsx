import { lazy, Suspense, useState, useSyncExternalStore } from 'react'

const ShapeWaves = lazy(() => import('@/components/ShapeWaves'))

const DARK_QUERY = '(prefers-color-scheme: dark)'

const subscribe = (onChange: () => void) => {
  const query = matchMedia(DARK_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const isDark = () => matchMedia(DARK_QUERY).matches

// ShapeWaves only accepts hex colours, so these mirror --bg, --line and --brand-text in site.css.
const THEMES = {
  dark: { background: '#0b0d0c', color: '#1e2422', hover: '#3ee8a0', glow: 0.25 },
  light: { background: '#fbfbfa', color: '#e1e5e1', hover: '#0a7a4a', glow: 0 },
}

export function HeroBackground() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false)
  const [failed, setFailed] = useState(false)

  // Without WebGPU the component errors out; unmounting lets the CSS grid underneath show instead.
  if (failed) return null

  const theme = dark ? THEMES.dark : THEMES.light
  return (
    <div className="hero-bg">
      <Suspense fallback={null}>
        <ShapeWaves
        backgroundColor={theme.background}
        color={theme.color}
        hoverColor={theme.hover}
        glow={theme.glow}
        cellSize={12}
        brightness={0.45}
        fade={0.35}
        splashRadius={44}
        splashStrength={0.28}
        onError={() => setFailed(true)}
        />
      </Suspense>
    </div>
  )
}
