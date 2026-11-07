import { ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { LogoMark } from '@/components/site/primitives'
import TechText from '@/components/TechText'
import { HeroBackground } from './HeroBackground'

// Matches the single-column breakpoint in site.css, where the hero content centers.
const STACKED_QUERY = '(max-width: 900px)'

const subscribeStacked = (onChange: () => void) => {
  const query = matchMedia(STACKED_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const isStacked = () => matchMedia(STACKED_QUERY).matches

// The intros wait for the waves, but never longer than this if the GPU is slow to start.
const INTRO_WAIT_MS = 1800

export function Hero() {
  const stacked = useSyncExternalStore(subscribeStacked, isStacked, () => false)
  const [play, setPlay] = useState(false)
  const start = useCallback(() => setPlay(true), [])

  useEffect(() => {
    const timer = setTimeout(start, INTRO_WAIT_MS)
    return () => clearTimeout(timer)
  }, [start])

  return (
    <section className="hero">
      <HeroBackground onReady={start} />
      <div className="wrap hero-grid">
        <div>
          <p className="hero-tagline">Open community for CS students in Bangladesh</p>
          <h1 className="hero-wordmark">
            <TechText
              text="DevChangeMakers"
              align={stacked ? 'center' : 'left'}
              fontSize={104}
              fontWeight={600}
              letterSpacing={-0.04}
              color="currentColor"
              accentColor="var(--brand-text)"
              intro="metrics"
              introDuration={1.6}
              introPlay={play}
              respectReducedMotion={false}
              sweep={false}
              specks={10}
            />
          </h1>
          <div className="cta-row">
            <a className="btn btn-brand" href="#guide">
              Start guiding yourself
              <ArrowRight className="arr" aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#events">
              See events
            </a>
          </div>
        </div>

        <div
          className="fork"
          data-play={play || undefined}
          role="img"
          aria-label="The DevChangeMakers mark: two halves, one for the Industry-Focused path and one for the Higher Study path"
        >
          <span className="half half-dev" aria-hidden="true">
            <LogoMark />
          </span>
          <span className="half half-study" aria-hidden="true">
            <LogoMark />
          </span>
        </div>
      </div>
    </section>
  )
}
