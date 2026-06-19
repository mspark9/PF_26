import { useContext, useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { LenisContext } from '../lenisContext'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lenis = useContext(LenisContext)
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  // 페이지가 바뀌면 모바일 메뉴 닫기
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // 아래로 스크롤하면 헤더 숨김, 위로 올리면 다시 보임 (Lenis의 scroll/direction 사용)
  useEffect(() => {
    if (!lenis) return
    const onScroll = (e: { scroll: number; direction: number }) => {
      const y = e.scroll
      if (open || y < 80) {
        setHidden(false)
      } else if (e.direction > 0) {
        setHidden(true)
      } else if (e.direction < 0) {
        setHidden(false)
      }
    }
    lenis.on('scroll', onScroll)
    return () => lenis.off('scroll', onScroll)
  }, [lenis, open])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-paper/70 backdrop-blur-xl transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" onClick={close} className="font-display text-lg font-bold tracking-tight">
          Park Miseon<span className="text-accent">.</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-ink ${isActive ? 'text-accent' : 'text-muted'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={close}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            연락하기
          </Link>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="border-t border-white/10 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-3 text-base transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-ink'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-paper"
            >
              연락하기
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
