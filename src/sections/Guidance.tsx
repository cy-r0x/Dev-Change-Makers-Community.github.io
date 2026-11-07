import { Info } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { Reveal } from '@/components/site/motion'
import { LinkCard, SectionHead } from '@/components/site/primitives'
import { GUIDES } from '@/data/site'

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

export function Guidance() {
  return (
    <section id="guidance">
      <div className="wrap">
        <SectionHead
          title="Community members you can ask for guidance"
          lede="Members who have been through open-source programs and are happy to answer your questions on LinkedIn."
        />
        <Reveal as="ul" className="guides" stagger>
          {GUIDES.map((guide) => (
            <li key={guide.url}>
              <LinkCard className="guide" href={guide.url} aria-label={`Message ${guide.name} on LinkedIn`}>
                <span className="guide-avatar" aria-hidden="true">
                  {initials(guide.name)}
                </span>
                <span className="guide-text">
                  <b>{guide.name}</b>
                  <span>{guide.role}</span>
                </span>
                <span className="guide-link">
                  <FaLinkedin aria-hidden="true" />
                  Message on LinkedIn
                </span>
              </LinkCard>
            </li>
          ))}
        </Reveal>
        <Reveal className="guide-outro" stagger>
          <p className="peer">
            <b>Nobody here is above you.</b> They just started earlier. Learn from them, then go further than they did.
          </p>
          <p className="map-note">
            <Info aria-hidden="true" />
            <span>
              Research first, then ask one specific question. "How did you prepare your GSoC proposal?" gets an answer;
              "Please guide me" usually doesn't. Their time is volunteered, so be patient.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
