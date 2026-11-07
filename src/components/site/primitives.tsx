import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { Link } from '@/data/site'

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

export function ResourceLinks({ links }: { links?: Link[] }) {
  if (!links?.length) return null
  return (
    <div className="res">
      {links.map((link) => (
        <ExternalLink key={link.url + link.label} href={link.url}>
          {link.label}
        </ExternalLink>
      ))}
    </div>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="head">
      <p className="eyebrow">{eyebrow}</p>
      {children}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
    </svg>
  )
}
