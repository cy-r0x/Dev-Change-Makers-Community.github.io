import { LogoWord } from './primitives'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <LogoWord label="DevChangeMakers" />
        <span>
          © {YEAR} DevChangeMakers Community, Bangladesh. Free events, open materials.
        </span>
      </div>
    </footer>
  )
}
