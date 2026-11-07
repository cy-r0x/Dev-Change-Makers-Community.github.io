import BlurText, { type BlurTextSegment } from '@/components/BlurText'
import { PATHS, type PathKey } from '@/data/site'

const HEADLINE: BlurTextSegment[] = [
  { text: "Don't ask for guidelines.", className: 'soft' },
  { text: 'Take your time and' },
  { text: 'guide yourself.', className: 'accent' },
]

const PATH_ORDER: PathKey[] = ['dev', 'study']

export function Statement() {
  return (
    <section id="about" className="statement">
      <div className="wrap statement-grid">
        <BlurText
          as="h2"
          segments={HEADLINE}
          trigger="view"
          threshold={0.4}
          effect="focus"
          blur={12}
          delay={70}
          stepDuration={0.55}
        />
        <div className="statement-body">
          <p className="lede">
            DevChangeMakers runs free, hands-on events for students in Dhaka and beyond, and keeps a map of the two
            roads most CS students end up choosing between. You pick the road. We show up with the events, the people,
            and the resources.
          </p>
          <ul className="statement-paths" aria-label="The two paths">
            {PATH_ORDER.map((key) => {
              const path = PATHS[key]
              return (
                <li key={key} data-path={key}>
                  <div className="statement-path-head">
                    <b>{path.label}</b>
                    <span>{path.stops.length} steps</span>
                  </div>
                  <p>{path.summary}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
