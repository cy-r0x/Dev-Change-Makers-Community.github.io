import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { ExternalLink, PlayIcon, ResourceLinks } from '@/components/site/primitives'
import { PATHS, type PathKey } from '@/data/site'

const STORAGE_KEY = 'dcm-path'
const KEYS = Object.keys(PATHS) as PathKey[]

function initialPath(): PathKey {
  if (location.hash === '#study' || location.hash === '#higher-study') return 'study'
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && saved in PATHS) return saved as PathKey
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return 'dev'
}

export function PathExplorer() {
  const [active, setActive] = useState<PathKey>(initialPath)
  const path = PATHS[active]

  const select = (key: PathKey) => {
    setActive(key)
    try {
      localStorage.setItem(STORAGE_KEY, key)
    } catch {
      // Storage can be blocked; the choice just won't persist.
    }
  }

  return (
    <>
      <div className="switch" role="tablist" aria-label="Choose a path">
        {KEYS.map((key) => (
          <button
            key={key}
            role="tab"
            id={`tab-${key}`}
            data-path={key}
            aria-selected={key === active}
            aria-controls="path-panel"
            onClick={() => select(key)}
          >
            {PATHS[key].label}
          </button>
        ))}
      </div>

      <div id="path-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <p className="path-intro">{path.intro}</p>

        <ol className="line" data-path={active}>
          {path.stops.map((stop) => (
            <li className="stop" key={stop.title}>
              <div className="when">{stop.when}</div>
              <div className="rail" aria-hidden="true">
                <span />
              </div>
              <div className="body">
                <h3>{stop.title}</h3>
                <p>{stop.text}</p>
                <ResourceLinks links={stop.res} />
              </div>
            </li>
          ))}
        </ol>

        <div className="earn" data-path={active}>
          <p className="eyebrow">Earning beyond tuition and campus jobs</p>
          <h3>{path.earn.title}</h3>
          <p>{path.earn.text}</p>
          <ul>
            {path.earn.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="close">{path.earn.close}</p>
          {path.earn.feature && (
            <ExternalLink className="watch" href={path.earn.feature.url}>
              <span className="watch-play" aria-hidden="true">
                <PlayIcon />
              </span>
              <span className="watch-body">
                <span className="eyebrow">Watch · Instagram reel</span>
                <b>{path.earn.feature.title}</b>
                <span>{path.earn.feature.note}</span>
              </span>
              <ArrowRight className="watch-go" aria-hidden="true" />
            </ExternalLink>
          )}
          <ResourceLinks links={path.earn.res} />
        </div>
      </div>
    </>
  )
}
