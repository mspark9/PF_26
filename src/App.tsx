import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Logo from './components/Logo'
import { LenisContext } from './lenisContext'

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const animatingRef = useRef(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Lenis 부드러운 스크롤 초기화
  useEffect(() => {
    const instance = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = instance
    setLenis(instance)

    let rafId = 0
    const raf = (time: number) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      lenisRef.current = null
      setLenis(null)
    }
  }, [])

  // 페이지 이동 시 맨 위로 (전환 없이 바뀌는 경우 대비)
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  // 커튼 커버 → 공개 전환: 내부 링크 클릭을 가로채서 실행
  useEffect(() => {
    const runTransition = (to: string) => {
      const ov = overlayRef.current
      if (!ov || animatingRef.current) {
        navigate(to)
        return
      }
      animatingRef.current = true
      const tl = gsap.timeline({ onComplete: () => (animatingRef.current = false) })
      tl.set(ov, { display: 'flex', yPercent: 100 })
      tl.to(ov, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' })
      tl.add(() => {
        navigate(to)
        lenisRef.current?.scrollTo(0, { immediate: true })
      })
      tl.to(ov, { yPercent: -100, duration: 0.55, ease: 'power3.inOut' }, '+=0.12')
      tl.set(ov, { display: 'none' })
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      const target = anchor.getAttribute('target')
      if (!href || !href.startsWith('/') || target === '_blank') return
      e.preventDefault()
      e.stopPropagation()
      if (href !== window.location.pathname) runTransition(href)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigate])

  return (
    <LenisContext.Provider value={lenis}>
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* 페이지 전환 커튼 */}
      <div
        ref={overlayRef}
        style={{ display: 'none' }}
        className="fixed inset-0 z-[100] items-center justify-center bg-paper"
      >
        <Logo className="h-24 w-24 text-ink sm:h-32 sm:w-32" />
      </div>
    </LenisContext.Provider>
  )
}
