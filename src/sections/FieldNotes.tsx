import { useState, type ReactNode } from 'react'
import { ExternalLink, SectionHead } from '@/components/site/primitives'
import { FIELD_NOTES, LINKS, type NoteSource } from '@/data/site'

type Filter = 'all' | NoteSource

const SOURCES: Record<NoteSource, { name: string; verb: string; icon: ReactNode }> = {
  youtube: {
    name: 'YouTube',
    verb: 'Watch on YouTube',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.5" y="5" width="21" height="14" rx="4" fill="var(--ink)" />
        <path d="M10 9 L15.5 12 L10 15 Z" fill="var(--bg)" />
      </svg>
    ),
  },
  instagram: {
    name: 'Instagram',
    verb: 'Watch on Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="var(--ink)" />
      </svg>
    ),
  },
  linkedin: {
    name: 'LinkedIn',
    verb: 'Read on LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--ink)" />
        <rect x="6" y="10" width="2.6" height="8" fill="var(--bg)" />
        <circle cx="7.3" cy="7" r="1.6" fill="var(--bg)" />
        <path
          d="M11 10h2.5v1.2c.5-.8 1.5-1.4 2.8-1.4 2 0 3 1.3 3 3.6V18h-2.6v-4.2c0-1.1-.4-1.8-1.4-1.8s-1.7.7-1.7 1.9V18H11z"
          fill="var(--bg)"
        />
      </svg>
    ),
  },
  x: {
    name: 'X',
    verb: 'Read on X',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--ink)" />
        <path
          d="M7 6.5h2.6l2.7 3.8 3.2-3.8h1.6l-4.1 4.9 4.6 6.1h-2.6l-3-4.1-3.5 4.1H6.9l4.4-5.2z"
          fill="var(--bg)"
        />
      </svg>
    ),
  },
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
    <section id="watch" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Field notes"
          title="Need motivation? Start here."
          lede="Short videos and posts where people talk about real work, real careers and how the world actually works. Picked by the community, one line on why each is worth your time."
        />
        <div className="fn-bar">
          <div className="chips" role="group" aria-label="Filter by platform">
            {FILTERS.map((f) => (
              <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
          <ExternalLink className="fn-suggest" href={LINKS.discord}>
            Suggest one on Discord ↗
          </ExternalLink>
        </div>
        <div className="fn-grid">
          {notes.length > 0 ? (
            notes.map((note) => {
              const source = SOURCES[note.type]
              return (
                <ExternalLink className="fn" key={note.url} href={note.url}>
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
                  <span className="go">{source.verb} ↗</span>
                </ExternalLink>
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
        </div>
      </div>
    </section>
  )
}
