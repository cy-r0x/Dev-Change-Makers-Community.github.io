import { SectionHead } from '@/components/site/primitives'
import { VOWS } from '@/data/site'

export function Culture() {
  return (
    <section id="culture" className="culture">
      <div className="wrap">
        <SectionHead eyebrow="Culture" title="What we're changing in our own community" />
        <div className="vows">
          {VOWS.map((vow) => (
            <article className="vow" key={vow.tag}>
              <span className="tag">{vow.tag}</span>
              <h3>{vow.title}</h3>
              <p>{vow.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
