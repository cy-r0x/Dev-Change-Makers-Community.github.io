import { useEffect, useState } from 'react'
import { LINKS, MOBILE_NAV, NAV } from '@/data/site'
import { SiDiscord } from 'react-icons/si'
import { ExternalLink, LogoMark, LogoWord } from './primitives'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="DevChangeMakers home">
          <LogoMark />
          <LogoWord />
        </a>
        <nav className="links" aria-label="Sections">
          {NAV.map((item) => (
            <a key={item.url} href={item.url}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <ExternalLink className="btn btn-ghost btn-sm" href={LINKS.discord}>
            <SiDiscord aria-hidden="true" />
            Join Discord
          </ExternalLink>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="mnav" id="mnav" aria-label="Sections" hidden={!open} data-lenis-prevent>
        <div className="wrap">
          {MOBILE_NAV.map((item) => (
            <a key={item.url} href={item.url} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
