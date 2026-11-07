import { ArrowRight } from 'lucide-react'
import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { LINKS, MONTHS } from '@/data/site'

export function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Monthly events · Project Hub"
          title="One event a month. One real project each time."
          lede="Every DevChangeMakers event builds a working project with several tools together. The code, setup steps and prompts go into the Project Hub, one folder per month, so you can rebuild it at home."
        />
        <div className="months">
          {MONTHS.map((month) => {
            const folderUrl = `${LINKS.projectHubTree}${month.folder}`
            return (
              <div className="month" key={month.folder}>
                <div className="month-head">
                  <h3>{month.month}</h3>
                  <span className="lede" style={{ fontSize: '.9rem' }}>
                    {month.projects.length} events · {month.projects.length} projects
                  </span>
                  <ExternalLink href={folderUrl}>Open the {month.month} folder ↗</ExternalLink>
                </div>
                <div className="proj-grid">
                  {month.projects.map((project) => (
                    <ExternalLink className="proj" key={project.path} href={`${folderUrl}/${project.path}`}>
                      <span className="proj-date">{project.date}</span>
                      <h4>{project.name}</h4>
                      <p>{project.note}</p>
                      <div className="chips-s">
                        {project.stack.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <span className="go">View code and setup guide ↗</span>
                    </ExternalLink>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="cta-row" style={{ marginTop: 28 }}>
          <ExternalLink className="btn btn-ghost" href={LINKS.projectHub}>
            Browse the Project Hub on GitHub
            <ArrowRight className="arr" aria-hidden="true" />
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
