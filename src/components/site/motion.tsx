import type { ReactNode } from 'react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'

/**
 * Rises into place with a short blur as it scrolls into view, once. With `stagger`, its direct children
 * enter one after another instead, so pass the grid or list itself (not a wrapper around it).
 */
export function Reveal({
  children,
  className,
  as,
  stagger = false,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  stagger?: boolean
  delay?: number
}) {
  return (
    <AnimatedContent
      as={as}
      className={className}
      distance={28}
      duration={0.8}
      ease="power3.out"
      blur={6}
      threshold={0.12}
      delay={delay}
      stagger={stagger ? 0.08 : 0}
      respectReducedMotion={false}
    >
      {children}
    </AnimatedContent>
  )
}

/** A section heading whose words come into focus one by one, matching the statement headline. */
export function RevealHeading({ text }: { text: string }) {
  return (
    <BlurText
      as="h2"
      text={text}
      trigger="view"
      threshold={0.4}
      effect="focus"
      blur={10}
      delay={60}
      stepDuration={0.5}
    />
  )
}
