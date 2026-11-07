import { lazy, Suspense, useState } from 'react'
import { hasWebGpu } from '@/lib/webgpu'

const ShapeWaves = lazy(() => import('@/components/ShapeWaves'))

// The card stays dark in both themes, so the field uses one palette: a step above --on-brand for the
// ground, dim shapes, and the dark-theme brand green under the pointer.
export function JoinBackground() {
  const [failed, setFailed] = useState(() => !hasWebGpu())

  if (failed) return <div className="join-bg-fallback" aria-hidden="true" />

  return (
    <div className="join-bg" aria-hidden="true">
      <Suspense fallback={null}>
        <ShapeWaves
          backgroundColor="#0d110f"
          color="#1d2521"
          hoverColor="#3ee8a0"
          glow={0.35}
          cellSize={12}
          speed={0}
          contrast={1.25}
          brightness={0.5}
          fade={0.35}
          splashRadius={56}
          splashStrength={0.45}
          respectReducedMotion={false}
          onError={() => setFailed(true)}
        />
      </Suspense>
    </div>
  )
}
