import { useState, type ReactNode } from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { SiInstagram, SiX, SiYoutube } from 'react-icons/si'
import { Reveal } from '@/components/site/motion'
import { ExtIcon, ExternalLink, LinkCard, SectionHead } from '@/components/site/primitives'
import { FIELD_NOTES, LINKS, type NoteSource } from '@/data/site'

type Filter = 'all' | NoteSource

const SOURCES: Record<NoteSource, { name: string; verb: string; icon: ReactNode }> = {
  youtube: { name: 'YouTube', verb: 'Watch on YouTube', icon: <SiYoutube aria-hidden="true" /> },
  instagram: { name: 'Instagram', verb: 'Watch on Instagram', icon: <SiInstagram aria-hidden="true" /> },
  linkedin: { name: 'LinkedIn', verb: 'Read on LinkedIn', icon: <FaLinkedin aria-hidden="true" /> },
  x: { name: 'X', verb: 'Read on X', icon: <SiX aria-hidden="true" /> },
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'x', label: 'X' },
]

export function FieldNotes() {
  const [filter, setFilter] = useState<Filter>('all')
  const notes = FIELD_NOTES.filter((note) => filter === 'all' || note.type === filter)

  return (
    <section id="watch">
      <div className="wrap">
        <SectionHead
          title="Need motivation? Start here."
          lede="Short videos and posts where people talk about real work, real careers and how the world actually works. Picked by the community, one line on why each is worth your time."
        />
        <Reveal className="fn-bar">
          <div className="chips" role="group" aria-label="Filter by platform">
            {FILTERS.map((f) => (
              <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
          <ExternalLink className="fn-suggest" href={LINKS.discord}>
            Suggest one on Discord
            <ExtIcon />
          </ExternalLink>
        </Reveal>
        <Reveal className="fn-grid" stagger delay={0.1}>
          {notes.length > 0 ? (
            notes.map((note) => {
              const source = SOURCES[note.type]
              return (
                <LinkCard className="fn" key={note.url} href={note.url}>
                  <div className="fn-top">
                    <span className="fn-src">
                      {source.icon}
                      {source.name}
                    </span>
                    {note.topic && <span className="fn-topic">{note.topic}</span>}
                  </div>
                  <div>
                    <h3>{note.title}</h3>
                    {note.by && <p className="by">{note.by}</p>}
                  </div>
                  <p className="why">{note.note}</p>
                  <span className="go">
                    {source.verb}
                    <ExtIcon />
                  </span>
                </LinkCard>
              )
            })
          ) : (
            <div className="empty">
              <b>Nothing here yet</b>
              <span>
                No {filter !== 'all' && SOURCES[filter].name} picks so far. Know a good one? Share it on Discord.
              </span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
