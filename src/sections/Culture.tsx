import { Award, Megaphone, ShieldCheck } from 'lucide-react'
import { Reveal, RevealHeading } from '@/components/site/motion'
import { VOWS } from '@/data/site'

// In VOWS order: recognition, visibility, free events.
const VOW_ICONS = [Award, Megaphone, ShieldCheck]

export function Culture() {
  return (
    <section id="culture" className="culture">
      <div className="wrap">
        <div className="head head-statement">
          <RevealHeading text="What we're changing in our own community" />
        </div>
        <Reveal className="vows" stagger delay={0.15}>
          {VOWS.map((vow, index) => {
            const Icon = VOW_ICONS[index] ?? Award
            return (
              <article className="vow" key={vow.tag}>
                <span className="vow-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{vow.title}</h3>
                <p>{vow.text}</p>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
