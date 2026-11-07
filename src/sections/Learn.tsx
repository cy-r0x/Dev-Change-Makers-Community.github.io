import { SiYoutube } from 'react-icons/si'
import { ExternalLink, LinkCard, LogoMark, SectionHead } from '@/components/site/primitives'
import { LINKS, PLAYLISTS } from '@/data/site'

export function Learn() {
  return (
    <section id="learn">
      <div className="wrap">
        <SectionHead
          title="Session recordings and playlists"
          lede="Missed a session? Recordings and tutorial series live on YouTube, grouped by topic."
        />
        <div className="yt">
          <ExternalLink className="yt-thumb" href={LINKS.youtube} aria-label="Open the YouTube channel">
            <LogoMark />
            <span className="yt-badge">
              <SiYoutube aria-hidden="true" />
              @mitul_shahriyar
            </span>
          </ExternalLink>
          <div className="yt-body">
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
                <SiYoutube aria-hidden="true" />
                Subscribe
              </ExternalLink>
            </div>
          </div>
        </div>
        {PLAYLISTS.length > 0 && (
          <div className="pl-grid">
            {PLAYLISTS.map((playlist) => (
              <LinkCard className="pl" key={playlist.url} href={playlist.url}>
                <div className="thumb">
                  <SiYoutube aria-hidden="true" />
                </div>
                <b>{playlist.title}</b>
                {playlist.note && <span>{playlist.note}</span>}
              </LinkCard>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
