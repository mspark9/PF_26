import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      )
    }, ref)
    return () => ctx.revert()
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
