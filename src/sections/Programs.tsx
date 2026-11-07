import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { PROGRAMS } from '@/data/site'

export function Programs() {
  return (
    <section id="programs" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Programs"
          title="Community programs you can grow into"
          lede="Ambassador, champion and builder programs run by the companies behind the tools you use. They bring credits, swag, early access and a direct line to the product team. Most look for a track record: talks, blog posts, events or open-source work."
        />
        <div className="prog-groups">
          {PROGRAMS.map((group) => (
            <div className="prog-group" key={group.group}>
              <h3>{group.group}</h3>
              <ul className="prog-list">
                {group.items.map((program) => (
                  <li key={program.url}>
                    <ExternalLink href={program.url}>
                      <b>{program.name}</b>
                      <span className="d">{program.text}</span>
                      <span className="o">{program.org} ↗</span>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="map-note">
          Applications open and close in cohorts. If a page says closed, join the waitlist and keep building in public
          until it reopens.
        </p>
      </div>
    </section>
  )
}
