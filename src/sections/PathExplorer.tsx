import { ArrowRight, ChevronDown, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { SiInstagram } from 'react-icons/si'
import { ExternalLink, ResourceLinks } from '@/components/site/primitives'
import { PATHS, type PathKey } from '@/data/site'

const STORAGE_KEY = 'dcm-path'
const KEYS = Object.keys(PATHS) as PathKey[]
const EASE_OUT = [0.16, 1, 0.3, 1] as const

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

/** The first sentence stays visible; the rest of a step opens on demand. */
function splitLead(text: string) {
  const match = text.match(/^(.+?[.!?])\s+([\s\S]+)$/)
  return match ? { lead: match[1], rest: match[2] } : { lead: text, rest: '' }
}

export function PathExplorer() {
  const [active, setActive] = useState<PathKey>(initialPath)
  const [openStop, setOpenStop] = useState(0)
  const path = PATHS[active]

  const select = (key: PathKey) => {
    setActive(key)
    setOpenStop(0)
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
            {key === active && (
              <motion.span
                className="switch-pill"
                layoutId="path-pill"
                transition={{ type: 'spring', stiffness: 520, damping: 40 }}
              />
            )}
            <span className="switch-label">{PATHS[key].label}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        id="path-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <p className="path-intro">{path.intro}</p>

        <ol className="line" data-path={active}>
          {path.stops.map((stop, index) => {
            const { lead, rest } = splitLead(stop.text)
            const expandable = Boolean(rest || stop.res?.length)
            const isOpen = expandable && index === openStop
            const panelId = `stop-${active}-${index}`
            return (
              <li className="stop" key={stop.title} data-open={isOpen || undefined}>
                <div className="when">{stop.when}</div>
                <div className="rail" aria-hidden="true">
                  <span />
                </div>
                <div className="body">
                  <h3>
                    {expandable ? (
                      <button
                        type="button"
                        className="stop-toggle"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenStop(isOpen ? -1 : index)}
                      >
                        {stop.title}
                        <ChevronDown className="stop-chev" aria-hidden="true" />
                      </button>
                    ) : (
                      stop.title
                    )}
                  </h3>
                  <p className="stop-lead">{lead}</p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="more"
                        id={panelId}
                        className="stop-more"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_OUT }}
                      >
                        <div className="stop-more-inner">
                          {rest && <p>{rest}</p>}
                          <ResourceLinks links={stop.res} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="earn" data-path={active}>
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
                <Play fill="currentColor" strokeWidth={0} />
              </span>
              <span className="watch-body">
                <span className="watch-src">
                  <SiInstagram aria-hidden="true" />
                  Instagram reel
                </span>
                <b>{path.earn.feature.title}</b>
                <span>{path.earn.feature.note}</span>
              </span>
              <ArrowRight className="watch-go" aria-hidden="true" />
            </ExternalLink>
          )}
          <ResourceLinks links={path.earn.res} />
        </div>
      </motion.div>
    </>
  )
}
