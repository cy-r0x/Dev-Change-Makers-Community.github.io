import { BotMessageSquare, BriefcaseBusiness, Compass, GraduationCap, Info, TrendingUp } from 'lucide-react'
import { SiCursor } from 'react-icons/si'
import CountUp from '@/components/CountUp'
import { ResourceLinks } from '@/components/site/primitives'
import { CURSOR_EXAMPLE_LINKS, DECIDE_STEPS } from '@/data/site'
import { PathExplorer } from './PathExplorer'

const MATH_STEPS = [
  { label: 'A year at the top', value: '৳2.4 crore', how: '৳20 lakh × 12 months' },
  { label: 'One billion dollars', value: '৳12,000 crore', how: 'at about ৳120 per dollar' },
  { label: 'Years to earn it', value: '5,000', how: '12,000 ÷ 2.4' },
]

// In DECIDE_STEPS order: trends, AI, industry, professor.
const DECIDE_ICONS = [TrendingUp, BotMessageSquare, BriefcaseBusiness, GraduationCap]

export function Guide() {
  return (
    <section id="guide">
      <div className="wrap">
        <div className="head guide-head">
          <h2>Two halves. Same starting point.</h2>
          <div className="guide-lede">
            <p className="lede">
              <b>Tech is far bigger than web, apps, video editing and competitive programming.</b> Cloud, data,
              security, research, embedded systems and more are open to you.
            </p>
            <p className="lede">
              Most CS students in Bangladesh end up choosing between an industry career and a master's or PhD abroad.
              Pick a path to see its steps. Nobody is waiting at the end to grade you.
            </p>
          </div>
        </div>

        <div className="decide">
          <div className="decide-intro">
            <h3>Spend one day researching, then decide</h3>
            <p className="decide-lede">
              First year or already graduated, start the same way, and take one or two semesters at most to decide. Any
              longer costs time you could spend going deep.
            </p>
            <p className="decide-close">
              Then make the call yourself. Nobody knows where the world is going, or which path suits you, better than
              you do. Others can inform you; the decision is yours.
            </p>
          </div>
          <ul className="decide-list">
            {DECIDE_STEPS.map((step, index) => {
              const Icon = DECIDE_ICONS[index] ?? Compass
              return (
                <li key={step.title}>
                  <span className="decide-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="guide-outro">
          <p className="peer">
            <b>There is no fixed path.</b> It takes trial and error, some risks, some calculated ones, sometimes aiming
            for the top 1%, and some luck. The people at the top needed all of them.
          </p>
          <p className="map-note">
            <Info aria-hidden="true" />
            <span>
              This is a map, not a syllabus, and the timings are rough. Skip steps you've done, stay longer where you
              need to, and switch paths anytime. Stuck on something specific? Ask seniors on Discord.
            </span>
          </p>
        </div>

        <PathExplorer />

        <div className="scale">
          <div className="scale-num">
            <b>
              <CountUp to={5000} separator="," duration={1.8} easing="expo" respectReducedMotion={false} />
            </b>
            <span className="unit">years of top corporate salary to earn $1 billion</span>
          </div>
          <div className="scale-body">
            <h3>One idea can be worth more than a lifetime of salary. Several lifetimes, in fact.</h3>
            <p>
              At ৳20 lakh a month, the top of corporate pay in Bangladesh, earning one billion dollars would take about
              5,000 years. A product that solves a real problem for enough people can create that value in a decade.
            </p>
            <dl className="math" aria-label="How the 5,000 years adds up">
              {MATH_STEPS.map((step) => (
                <div key={step.label}>
                  <dt>{step.label}</dt>
                  <dd className="math-value">{step.value}</dd>
                  <dd className="math-how">{step.how}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="scale-row-head">
            <span className="scale-logo" aria-hidden="true">
              <SiCursor />
            </span>
            <h4>A real example: Cursor</h4>
          </div>
          <div className="scale-body">
            <p>
              Four MIT students started Cursor in 2022; one of them, Sualeh Asif, is from Karachi. By November 2025,
              Forbes put each co-founder's stake at over $1.3 billion, at age 25 or 26. After SpaceX's $60 billion
              acquisition in August 2026, Forbes estimated each founder's share at about $2.7 billion.
            </p>
            <ResourceLinks links={CURSOR_EXAMPLE_LINKS} />
          </div>
        </div>
      </div>
    </section>
  )
}
