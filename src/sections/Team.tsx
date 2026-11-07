import { FaLinkedin } from 'react-icons/fa6'
import { LinkCard, SectionHead } from '@/components/site/primitives'
import { TEAM } from '@/data/site'

export function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <SectionHead
          title="The people behind DevChangeMakers"
          lede="Volunteers who plan the events, find the speakers and keep everything free. Want to help run the next one? Say hello on Discord."
        />
        <ul className="team">
          {TEAM.map((member) => {
            const body = (
              <>
                <img src={member.photo} alt="" width={220} height={220} loading="lazy" />
                <span className="member-text">
                  <b>{member.name}</b>
                  <span>{member.role}</span>
                </span>
                {member.url && (
                  <span className="member-link">
                    <FaLinkedin aria-hidden="true" />
                    LinkedIn
                  </span>
                )}
              </>
            )
            return (
              <li key={member.name}>
                {member.url ? (
                  <LinkCard className="member" href={member.url} aria-label={`${member.name}, ${member.role}, on LinkedIn`}>
                    {body}
                  </LinkCard>
                ) : (
                  <LinkCard as="div" className="member">
                    {body}
                  </LinkCard>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
