import BlurText, { type BlurTextSegment } from '@/components/BlurText'

const HEADLINE: BlurTextSegment[] = [
  { text: "Don't ask for guidelines.", className: 'soft' },
  { text: 'Take your time and' },
  { text: 'guide yourself.', className: 'accent' },
]

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
        <p className="lede">
          DevChangeMakers runs free, hands-on events for students in Dhaka and beyond, and keeps a map of the two roads
          most CS students end up choosing between. You pick the road. We show up with the events, the people, and the
          resources.
        </p>
      </div>
    </section>
  )
}
