import BlurText, { type BlurTextSegment } from '@/components/BlurText'
import { LogoMark } from '@/components/site/primitives'
import TechText from '@/components/TechText'
import { STRIP } from '@/data/site'
import { HeroBackground } from './HeroBackground'

const HEADLINE: BlurTextSegment[] = [
  { text: "Don't ask for guidelines.", className: 'soft' },
  { text: 'Take your time and' },
  { text: 'guide yourself.', className: 'accent' },
]

export function Hero() {
  return (
    <>
      <section className="hero">
        <HeroBackground />
        <div className="wrap">
          <div className="hero-wordmark">
            <TechText
            text="DevChangeMakers"
            align="left"
            fontSize={104}
            fontWeight={600}
            letterSpacing={-0.04}
            color="currentColor"
            accentColor="var(--brand-text)"
            intro="metrics"
            introDuration={1.6}
            sweep={false}
            specks={10}
            />
          </div>
          <p className="hero-tagline">Open community for CS students in Bangladesh</p>
          <div className="hero-grid">
            <div>
              <BlurText
                as="h1"
                segments={HEADLINE}
                trigger="load"
                effect="focus"
                blur={12}
                delay={70}
                stepDuration={0.55}
              />
              <p className="lede">
                DevChangeMakers runs free, hands-on events for students in Dhaka and beyond, and keeps a map of the two
                roads most CS students end up choosing between. You pick the road. We show up with the events, the
                people, and the resources.
              </p>
              <div className="cta-row">
                <a className="btn btn-ink" href="#guide">
                  Start guiding yourself <span className="arr">→</span>
                </a>
                <a className="btn btn-ghost" href="#events">
                  See events
                </a>
              </div>
            </div>
            <div
              className="fork"
              role="img"
              aria-label="The DevChangeMakers mark: two halves, one for the Industry-Focused path and one for the Higher Study path"
            >
              <span className="fork-mark" aria-hidden="true">
                <LogoMark className="half-dev" />
                <LogoMark className="half-study" />
              </span>
              <div className="labels" aria-hidden="true">
                <span>Industry-Focused</span>
                <span>Higher Study</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="wrap">
          {STRIP.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </>
  )
}
