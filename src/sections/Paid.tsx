import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { PICKS } from '@/data/site'

export function Paid() {
  return (
    <section id="paid" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Worth paying for"
          title="Paid platforms you can invest in"
          lede="Nobody pays us to list these, and none of the links are affiliate links. They're here because they genuinely helped us learn. Everything else on this page is free."
        />
        <div className="picks">
          {PICKS.map((pick) => (
            <ExternalLink className="pick" key={pick.url} href={pick.url}>
              <span className="eyebrow">{pick.kind}</span>
              <h3>{pick.name}</h3>
              <p>{pick.text}</p>
              <span className="go">{pick.host} ↗</span>
            </ExternalLink>
          ))}
        </div>
        <p className="map-note" style={{ marginTop: 28 }}>
          Try the free material first. Pay only when you know what you're paying for.
        </p>
      </div>
    </section>
  )
}
