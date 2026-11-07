import { BotMessageSquare, BriefcaseBusiness, Compass, GraduationCap, Info, TrendingUp } from 'lucide-react'
import { SiCursor } from 'react-icons/si'
import CountUp from '@/components/CountUp'
import { ResourceLinks } from '@/components/site/primitives'
import { CURSOR_EXAMPLE_LINKS, DECIDE_STEPS } from '@/data/site'
import { PathExplorer } from './PathExplorer'

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
              <b>
                Tech is far bigger than web development, app development, video editing and competitive programming.
              </b>{' '}
              Cloud, data, security, research, embedded systems and more are open to you.
            </p>
            <p className="lede">
              Most CS students in Bangladesh end up choosing between building a career in industry and going abroad for
              a master's or PhD. Pick a path to see its stops. Nobody is waiting at the end to grade you.
            </p>
          </div>
        </div>

        <div className="decide">
          <div className="decide-intro">
            <h3>Spend one day researching, then decide</h3>
            <p className="decide-lede">
              Whether you're in first year or have already graduated and are moving into software engineering, start the
              same way. Give yourself one or two semesters at most to decide. Longer than that and you lose time you
              could spend going deep.
            </p>
            <p className="decide-close">
              Then make the call yourself. Nobody knows where the world is going, or which path suits you, better than
              you do. Other people can give you information. The decision is yours.
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

        <PathExplorer />

        <div className="guide-outro">
          <p className="peer">
            <b>There is no fixed path.</b> It takes trial and error, some risks, some calculated risks, sometimes the
            goal of reaching the top 1%, and some luck. The people at the top needed all of them.
          </p>
          <p className="map-note">
            <Info aria-hidden="true" />
            <span>
              This is a map, not a syllabus. Steps and years are rough. Skip stops you've passed, stay longer where you
              need to, and switch paths whenever you want. Ask seniors on Discord when you're stuck on a specific
              problem.
            </span>
          </p>
        </div>

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
              At ৳20 lakh a month, the top end of corporate pay in Bangladesh, it would take about 5,000 years to earn
              one billion dollars. A product that solves a real problem for enough people can create that much value in
              a decade.
            </p>
            <p className="math">
              ৳20 lakh × 12 = ৳2.4 crore a year · $1 billion ≈ ৳12,000 crore at ~৳120/$ · 12,000 ÷ 2.4 = 5,000 years
            </p>
            <div className="example">
              <p className="example-head">
                <SiCursor aria-hidden="true" />A real example: Cursor
              </p>
              <p>
                Cursor was started by four MIT students in 2022. One of them, Sualeh Asif, is from Karachi. By November
                2025, Forbes estimated each co-founder's stake at over $1.3 billion, at age 25 or 26. In August 2026,
                SpaceX completed its $60 billion acquisition of the company, which Forbes estimated would put each
                founder at about $2.7 billion.
              </p>
              <ResourceLinks links={CURSOR_EXAMPLE_LINKS} />
            </div>
            <p>
              Most ventures fail, and that is part of the deal. You only find out by building. Whichever path you
              choose, keep a side project going.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
