import { lazy, Suspense, useEffect, useState } from 'react'
import { hasWebGpu } from '@/lib/webgpu'
import { useDarkScheme } from '@/lib/useDarkScheme'

const ShapeWaves = lazy(() => import('@/components/ShapeWaves'))

// ShapeWaves only accepts hex colours, so these mirror --bg, --line and --brand-text in site.css.
const THEMES = {
  dark: { background: '#0b0d0c', color: '#242b28', hover: '#3ee8a0', glow: 0.35 },
  light: { background: '#fbfbfa', color: '#dde2de', hover: '#0a7a4a', glow: 0 },
}

/** `onReady` fires once the waves have drawn their first frame, or straight away on the grid fallback. */
export function HeroBackground({ onReady }: { onReady?: () => void }) {
  const dark = useDarkScheme()
  const [failed, setFailed] = useState(() => !hasWebGpu())

  useEffect(() => {
    if (failed) onReady?.()
  }, [failed, onReady])

  // Without WebGPU (no API, or no usable adapter) the waves can't run; show the grid instead.
  if (failed) return <div className="hero-bg-fallback" aria-hidden="true" />

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
          // A still field: only the one-time intro and the pointer ripples move it.
          speed={0}
          contrast={1.25}
          brightness={0.5}
          fade={0.35}
          splashRadius={64}
          splashStrength={0.45}
          // Every 5s a band of colour crosses the field, alternating left-to-right and right-to-left.
          sweepInterval={5}
          sweepDuration={2.6}
          sweepWidth={110}
          sweepStrength={0.03}
          // Keeps the mount intro playing under reduced motion; the field itself never churns.
          respectReducedMotion={false}
          onReady={onReady}
          onError={() => setFailed(true)}
        />
      </Suspense>
    </div>
  )
}
