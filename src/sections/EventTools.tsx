import { Pause, Play } from 'lucide-react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import {
  SiClaude,
  SiCursor,
  SiDocker,
  SiFigma,
  SiGithubcopilot,
  SiGooglecloud,
  SiGrafana,
  SiKubernetes,
  SiNotion,
  SiPrometheus,
  SiQwen,
  SiStripe,
  SiTerraform,
} from 'react-icons/si'
import LogoLoop, { type LogoItem } from '@/components/LogoLoop'

// Tools that past events and Project Hub builds were made with.
const TOOLS: [IconType, string][] = [
  [SiClaude, 'Claude'],
  [SiCursor, 'Cursor'],
  [SiGithubcopilot, 'GitHub Copilot'],
  [SiQwen, 'Qwen'],
  [FaAws, 'AWS'],
  [FaMicrosoft, 'Microsoft'],
  [SiGooglecloud, 'Google Cloud'],
  [SiTerraform, 'Terraform'],
  [SiKubernetes, 'Kubernetes'],
  [SiDocker, 'Docker'],
  [SiNotion, 'Notion'],
  [SiFigma, 'Figma'],
  [SiStripe, 'Stripe'],
  [SiGrafana, 'Grafana'],
  [SiPrometheus, 'Prometheus'],
]

const LOGOS: LogoItem[] = TOOLS.map(([Icon, name]) => ({
  node: (
    <span className="tool">
      <Icon aria-hidden="true" />
      {name}
    </span>
  ),
}))

export function EventTools() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="tools">
      <LogoLoop
        logos={LOGOS}
        speed={paused ? 0 : 36}
        logoHeight={20}
        gap={44}
        fadeOutWidth={0.08}
        respectReducedMotion={false}
        ariaLabel="Tools used at past events"
        className="tools-loop"
      />
      <button
        type="button"
        className="tools-toggle"
        aria-pressed={paused}
        aria-label={paused ? 'Resume the tools row' : 'Pause the tools row'}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </div>
  )
}
