import { Link } from 'react-router-dom'
import Marquee from './Marquee'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="py-10 font-display text-4xl font-bold text-ink/15 sm:text-6xl">
        <Marquee items={['LET’S BUILD SOMETHING', 'GET IN TOUCH', '함께 만들어요']} />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold">Park Miseon<span className="text-accent">.</span></p>
          <p className="text-sm text-muted">Frontend Developer · Seoul</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <a href="mailto:mii6080@naver.com" className="hover:text-accent">Email</a>
          <a href="https://github.com/mspark9" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-muted">
        © {new Date().getFullYear()} Park Miseon. Built with React &amp; Tailwind.
      </div>
    </footer>
  )
}
