import { ExtIcon, ExternalLink, SectionHead } from '@/components/site/primitives'
import { COMMUNITIES } from '@/data/site'

export function Communities() {
  return (
    <section id="communities">
      <div className="wrap">
        <SectionHead
          title="Groups that are part of DevChangeMakers"
          lede="Each group runs its own meetups around one technology. Follow the ones you care about to hear about their next event first."
        />
        <ul className="comm-grid">
          {COMMUNITIES.map((community) => (
            <li className="comm" key={community.name}>
              <div>
                <b>{community.name}</b>
                <span>{community.focus}</span>
              </div>
              <div className="comm-links">
                {community.links.map((link) => (
                  <ExternalLink key={link.url} href={link.url}>
                    {link.label}
                    <ExtIcon />
                  </ExternalLink>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
