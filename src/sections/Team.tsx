import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { TEAM } from '@/data/site'

export function Team() {
  return (
    <section id="team" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Team"
          title="The people behind DevChangeMakers"
          lede="Volunteers who plan the events, find the speakers and keep everything free. Want to help run the next one? Say hello on Discord."
        />
        <ul className="team">
          {TEAM.map((member) => (
            <li className="member" key={member.name}>
              <img src={member.photo} alt={member.name} width={220} height={220} loading="lazy" />
              <div>
                {member.url ? (
                  <ExternalLink className="m-name" href={member.url}>
                    <b>{member.name}</b>
                  </ExternalLink>
                ) : (
                  <b>{member.name}</b>
                )}
                <span>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
