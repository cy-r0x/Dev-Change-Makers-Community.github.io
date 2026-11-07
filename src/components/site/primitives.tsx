import { ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react'
import SpotlightCard from '@/components/SpotlightCard'
import type { Link } from '@/data/site'
import { useDarkScheme } from '@/lib/useDarkScheme'
import { Reveal, RevealHeading } from './motion'

export function LogoMark({ className = '' }: { className?: string }) {
  return <span className={`logo-mark ${className}`.trim()} aria-hidden="true" />
}

export function LogoWord({ label }: { label?: string }) {
  return label ? (
    <span className="logo-word" role="img" aria-label={label} />
  ) : (
    <span className="logo-word" aria-hidden="true" />
  )
}

export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener" {...props} />
}

/** The arrow that marks a link as leaving the site. */
export function ExtIcon() {
  return <ArrowUpRight className="ext" aria-hidden="true" />
}

/** A card lit by a pointer-following spotlight in the brand colour; a link unless `as` says otherwise. */
export function LinkCard({
  as = 'a',
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLElement> & { as?: 'a' | 'div' }) {
  const dark = useDarkScheme()
  const link = as === 'a' ? { target: '_blank', rel: 'noopener' } : {}
  return (
    <SpotlightCard
      as={as}
      bare
      {...link}
      className={`spot ${className ?? ''}`.trim()}
      theme={dark ? 'dark' : 'light'}
      spotlightColor="var(--brand-text)"
      intensity={dark ? 0.16 : 0.22}
      spotlightSize={260}
      borderGlow={0.9}
      proximity={40}
      flare={false}
      style={{ '--spotlight-card-border': 'var(--line)' } as CSSProperties}
      {...rest}
    >
      {children}
    </SpotlightCard>
  )
}

export function ResourceLinks({ links }: { links?: Link[] }) {
  if (!links?.length) return null
  return (
    <div className="res">
      {links.map((link) => (
        <ExternalLink key={link.url + link.label} href={link.url}>
          {link.label}
          <ExtIcon />
        </ExternalLink>
      ))}
    </div>
  )
}

export function SectionHead({ title, lede }: { title: ReactNode; lede?: ReactNode }) {
  return (
    <div className="head">
      {typeof title === 'string' ? <RevealHeading text={title} /> : <h2>{title}</h2>}
      {lede && (
        <Reveal delay={0.15}>
          <p className="lede">{lede}</p>
        </Reveal>
      )}
    </div>
  )
}
