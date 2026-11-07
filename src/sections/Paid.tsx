import { Info } from 'lucide-react'
import { Reveal } from '@/components/site/motion'
import { ExtIcon, LinkCard, SectionHead } from '@/components/site/primitives'
import { PICKS } from '@/data/site'

export function Paid() {
  return (
    <section id="paid">
      <div className="wrap">
        <SectionHead
          title="Paid platforms you can invest in"
          lede="Nobody pays us to list these, and none of the links are affiliate links. They're here because they genuinely helped us learn. Everything else on this page is free."
        />
        <Reveal className="picks" stagger>
          {PICKS.map((pick) => (
            <LinkCard className="pick" key={pick.url} href={pick.url}>
              <div className="pick-head">
                <h3>{pick.name}</h3>
                <span>{pick.kind}</span>
              </div>
              <p>{pick.text}</p>
              <span className="go">
                {pick.host}
                <ExtIcon />
              </span>
            </LinkCard>
          ))}
        </Reveal>
        <p className="map-note">
          <Info aria-hidden="true" />
          <span>Try the free material first. Pay only when you know what you're paying for.</span>
        </p>
      </div>
    </section>
  )
}
