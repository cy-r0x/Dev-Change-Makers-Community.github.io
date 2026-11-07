import { LogoMark } from '@/components/site/primitives'
import { STRIP } from '@/data/site'

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="pill">
              <i />
              Open community for CS students in Bangladesh
            </span>
            <h1>
              <span className="soft">Don't ask for guidelines.</span> Take your time and <em>guide yourself.</em>
            </h1>
            <p className="lede">
              DevChangeMakers runs free, hands-on events for students in Dhaka and beyond, and keeps a map of the two
              roads most CS students end up choosing between. You pick the road. We show up with the events, the people,
              and the resources.
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
            <LogoMark />
            <div className="labels" aria-hidden="true">
              <span>Industry-Focused</span>
              <span>Higher Study</span>
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
