import { ArrowRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Reveal, RevealHeading } from '@/components/site/motion'
import { ExtIcon, ExternalLink, LinkCard } from '@/components/site/primitives'
import { LINKS, MONTHS } from '@/data/site'

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="head">
          <RevealHeading text="One event a month. One real project each time." />
          <Reveal className="head-side" stagger delay={0.15}>
            <p className="lede">
              Every DevChangeMakers event builds a working project with several tools together. The code, setup steps
              and prompts go into the Project Hub, one folder per month, so you can rebuild it at home.
            </p>
            <ExternalLink className="btn btn-ghost" href={LINKS.projectHub}>
              <SiGithub aria-hidden="true" />
              Browse the Project Hub
              <ArrowRight className="arr" aria-hidden="true" />
            </ExternalLink>
          </Reveal>
        </div>
        <div className="months">
          {MONTHS.map((month) => {
            const folderUrl = `${LINKS.projectHubTree}${month.folder}`
            return (
              <div className="month" key={month.folder}>
                <Reveal className="month-head">
                  <h3>{month.month}</h3>
                  <span className="month-count">
                    {month.projects.length} events, {month.projects.length} projects
                  </span>
                  <ExternalLink href={folderUrl}>
                    Open the {month.month} folder
                    <ExtIcon />
                  </ExternalLink>
                </Reveal>
                <Reveal className="proj-grid" stagger delay={0.1}>
                  {month.projects.map((project) => (
                    <LinkCard className="proj" key={project.path} href={`${folderUrl}/${project.path}`}>
                      <span className="proj-date">{project.date}</span>
                      <h4>{project.name}</h4>
                      <p>{project.note}</p>
                      <div className="chips-s">
                        {project.stack.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <span className="go">
                        View code and setup guide
                        <ExtIcon />
                      </span>
                    </LinkCard>
                  ))}
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
