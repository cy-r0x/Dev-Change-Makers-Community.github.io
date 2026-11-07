import { ArrowUpRight } from 'lucide-react'
import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { PROGRAMS } from '@/data/site'

export function Programs() {
  return (
    <section id="programs">
      <div className="wrap">
        <SectionHead
          title="Community programs you can grow into"
          lede="Ambassador and builder programs run by the companies behind your tools. They bring credits, swag, early access and a direct line to the product team. Most look for a track record: talks, posts, events or open-source work."
        />
        <div className="prog-groups">
          {PROGRAMS.map((group) => (
            <div className="prog-group" key={group.group}>
              <div className="prog-group-head">
                <h3>{group.group}</h3>
                <span>{group.items.length} programs</span>
              </div>
              <ul className="prog-list">
                {group.items.map((program) => (
                  <li key={program.url}>
                    <ExternalLink href={program.url}>
                      <span className="prog-name">
                        <b>{program.name}</b>
                        <span className="o">{program.org}</span>
                      </span>
                      <span className="d">{program.text}</span>
                      <ArrowUpRight className="prog-go" aria-hidden="true" />
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
