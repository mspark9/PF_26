import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const stack = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Vite', 'TanStack Query']
const ROLE = 'Frontend Developer'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.set([nameRef.current, taglineRef.current, ctaRef.current], { autoAlpha: 0, y: 24 })
      tl.from('.fd-letter', { yPercent: 120, opacity: 0, duration: 0.5, stagger: 0.2 })
      tl.to(nameRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, '+=0.15')
      tl.to(taglineRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
      tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div ref={heroRef} className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
          <h1
            ref={nameRef}
            className="font-display text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
          >
            박미선
            <span className="text-accent">.</span>
          </h1>

          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-7xl">
            <span className="text-hollow" aria-label={ROLE}>
              {ROLE.split('').map((ch, i) => (
                <span key={i} aria-hidden="true" className="fd-letter inline-block">
                  {ch === ' ' ? ' ' : ch}
                </span>
              ))}
            </span>
          </h2>

          <p ref={taglineRef} className="mt-8 max-w-xl text-lg text-muted">
            사용자의 문제를 코드로 풀어내는 것을 좋아합니다. React와 TypeScript로
            빠르고 즐거운 웹 경험을 만듭니다.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5">
              프로젝트 보기 →
            </Link>
            <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
              연락하기
            </Link>
          </div>
        </div>

        {/* 기술 스택 마퀴 */}
        <div className="border-y border-white/10 py-6">
          <Marquee
            items={stack}
            className="font-display text-2xl font-semibold text-ink/60 sm:text-3xl"
          />
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Selected Work</p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                대표 프로젝트
              </h2>
            </div>
            <Link to="/projects" className="hidden text-sm text-muted hover:text-accent sm:block">
              전체 보기 ↗
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
