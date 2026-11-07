import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { ARCHIVE, LINKS } from '@/data/site'

export function Events() {
  return (
    <section id="events" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Events" title="Free meetups, built around the tools you'll actually use." />
        <div className="ev-grid">
          <div className="luma">
            <p className="eyebrow">Upcoming</p>
            <h3>Event calendar on Luma</h3>
            <p>
              Every upcoming DevChangeMakers meetup, workshop and watch party is listed on our Luma calendar. Subscribe
              once and new events land in your own calendar.
            </p>
            <div>
              <ExternalLink className="btn btn-brand" href={LINKS.luma}>
                Open the Luma calendar
              </ExternalLink>
            </div>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>
              Past events · materials on GitHub
            </p>
            <ul className="archive">
              {ARCHIVE.map((event) => (
                <li key={event.repo}>
                  <ExternalLink href={`${LINKS.githubOrg}/${event.repo}`}>
                    <span className="t">{event.title}</span>
                    <span className="k">{event.kind}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
