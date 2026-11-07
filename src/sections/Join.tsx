import { useEffect, useRef, useState } from 'react'
import { SiDiscord } from 'react-icons/si'
import { ExternalLink } from '@/components/site/primitives'
import { LINKS, SOCIALS } from '@/data/site'

const COPY_LABEL = 'Copy email'

export function Join() {
  const emailRef = useRef<HTMLElement>(null)
  const [label, setLabel] = useState(COPY_LABEL)

  useEffect(() => {
    if (label === COPY_LABEL) return
    const timer = setTimeout(() => setLabel(COPY_LABEL), 2200)
    return () => clearTimeout(timer)
  }, [label])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email)
      setLabel('Copied')
    } catch {
      if (!emailRef.current) return
      const range = document.createRange()
      range.selectNodeContents(emailRef.current)
      const selection = getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
      setLabel('Selected, press Ctrl+C')
    }
  }

  return (
    <section id="join">
      <div className="wrap">
        <div className="join-card">
          <div>
            <h2>Find your people on Discord</h2>
            <p>
              Event announcements, study groups, project feedback, and seniors who've walked both paths. Come in,
              introduce yourself, and ask specific questions.
            </p>
          </div>
          <ExternalLink className="btn btn-brand" href={LINKS.discord}>
            <SiDiscord aria-hidden="true" />
            Join the Discord server
          </ExternalLink>
        </div>
        <div className="socials">
          {SOCIALS.map((social) => (
            <ExternalLink className="btn btn-ghost btn-sm" key={social.url} href={social.url}>
              {social.label}
            </ExternalLink>
          ))}
        </div>
        <div className="contact">
          Partnerships and speaking: <code ref={emailRef}>{LINKS.email}</code>{' '}
          <button className="btn btn-ghost btn-sm" type="button" onClick={copyEmail}>
            {label}
          </button>
        </div>
      </div>
    </section>
  )
}
