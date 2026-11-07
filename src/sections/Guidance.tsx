import { Info } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { ExtIcon, ExternalLink, SectionHead } from '@/components/site/primitives'
import { GUIDES } from '@/data/site'

export function Guidance() {
  return (
    <section id="guidance">
      <div className="wrap">
        <SectionHead
          title="Community members you can ask for guidance"
          lede="Members who have been through open-source programs and are happy to answer questions. Message them on LinkedIn."
        />
        <p className="peer">
          <b>Nobody here is above you.</b> They started earlier, and that's the only difference. Network with them, take
          their guidance, and go further than they did.
        </p>
        <ul className="prog-list">
          {GUIDES.map((guide) => (
            <li key={guide.url}>
              <ExternalLink href={guide.url}>
                <b>{guide.name}</b>
                <span className="d">{guide.role}</span>
                <span className="o">
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                  <ExtIcon />
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
        <p className="map-note">
          <Info aria-hidden="true" />
          <span>
            Do your own research first, then ask one specific question. "How did you prepare your GSoC proposal?" gets
            an answer. "Please guide me" usually doesn't. Their time is volunteered, so be patient if a reply takes a
            while.
          </span>
        </p>
      </div>
    </section>
  )
}
