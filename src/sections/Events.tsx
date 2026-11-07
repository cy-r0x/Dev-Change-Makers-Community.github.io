import { CalendarDays } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { ExtIcon, ExternalLink } from '@/components/site/primitives'
import { ARCHIVE, LINKS } from '@/data/site'
import { EventTools } from './EventTools'

export function Events() {
  return (
    <section id="events">
      <div className="wrap">
        <div className="head head-statement">
          <h2>Free meetups, built around the tools you'll actually use.</h2>
        </div>
        <EventTools />
        <div className="ev-grid">
          <div className="luma">
            <span className="luma-icon" aria-hidden="true">
              <CalendarDays />
            </span>
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
            <div className="archive-head">
              <h3>Past events</h3>
              <ExternalLink href={LINKS.githubOrg}>
                <SiGithub aria-hidden="true" />
                Slides and code on GitHub
              </ExternalLink>
            </div>
            <ul className="archive">
              {ARCHIVE.map((event) => (
                <li key={event.repo}>
                  <ExternalLink href={`${LINKS.githubOrg}/${event.repo}`}>
                    <span className="t">{event.title}</span>
                    <span className="k">{event.kind}</span>
                    <ExtIcon />
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
