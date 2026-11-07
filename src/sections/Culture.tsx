import { Award, Megaphone, ShieldCheck } from 'lucide-react'
import { VOWS } from '@/data/site'

// In VOWS order: recognition, visibility, free events.
const VOW_ICONS = [Award, Megaphone, ShieldCheck]

export function Culture() {
  return (
    <section id="culture" className="culture">
      <div className="wrap">
        <div className="head head-statement">
          <h2>What we're changing in our own community</h2>
        </div>
        <div className="vows">
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
        </div>
      </div>
    </section>
  )
}
