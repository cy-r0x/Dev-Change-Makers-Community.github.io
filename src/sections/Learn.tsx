import { ExternalLink, LogoMark, PlayIcon, SectionHead } from '@/components/site/primitives'
import { LINKS, PLAYLISTS } from '@/data/site'

export function Learn() {
  return (
    <section id="learn" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Learn"
          title="Session recordings and playlists"
          lede="Missed a session? Recordings and tutorial series live on YouTube, grouped by topic."
        />
        <div className="yt">
          <ExternalLink className="yt-thumb" href={LINKS.youtube} aria-label="Open the YouTube channel">
            <LogoMark />
            <span className="yt-badge">
              <PlayIcon />
              @mitul_shahriyar
            </span>
          </ExternalLink>
          <div className="yt-body">
            <p className="eyebrow">YouTube · @mitul_shahriyar</p>
            <h3>Talks, session recordings and tutorials</h3>
            <p>
              Event recordings and tutorial series are grouped into playlists on the channel. Subscribe to get new
              sessions when they go up.
            </p>
            <div className="cta-row" style={{ marginTop: 6 }}>
              <ExternalLink className="btn btn-brand" href={`${LINKS.youtube}/playlists`}>
                Browse playlists
              </ExternalLink>
              <ExternalLink className="btn btn-ghost" href={`${LINKS.youtube}?sub_confirmation=1`}>
                Subscribe
              </ExternalLink>
            </div>
          </div>
        </div>
        {PLAYLISTS.length > 0 && (
          <div className="pl-grid">
            {PLAYLISTS.map((playlist) => (
              <ExternalLink className="pl" key={playlist.url} href={playlist.url}>
                <div className="thumb">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="4" y="10" width="40" height="28" rx="8" fill="var(--ink)" />
                    <path d="M20 18 L31 24 L20 30 Z" fill="var(--bg)" />
                  </svg>
                </div>
                <b>{playlist.title}</b>
                {playlist.note && <span>{playlist.note}</span>}
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
