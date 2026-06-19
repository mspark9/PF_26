import { useLocation } from 'react-router-dom'
import TerminalFooter from './TerminalFooter'

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <footer className="mt-32 border-t border-white/10">
      {isHome && (
        <div className="mx-auto max-w-6xl px-6 py-16">
          <TerminalFooter />
        </div>
      )}
      <div className={isHome ? 'border-t border-white/10' : ''}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            Park Miseon<span className="text-accent">.</span> — Frontend Developer · Seoul
          </span>
          <span>© {new Date().getFullYear()} Park Miseon. Built with React &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  )
}
