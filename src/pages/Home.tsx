import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiVite,
  SiReactquery,
  SiGreensock,
  SiClaude,
} from 'react-icons/si'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const stack: { name: string; Icon: IconType }[] = [
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Vite', Icon: SiVite },
  { name: 'TanStack Query', Icon: SiReactquery },
  { name: 'GSAP', Icon: SiGreensock },
  { name: 'Claude Code', Icon: SiClaude },
]

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
      tl.from('.fd-letter', { yPercent: 120, opacity: 0, duration: 0.5, stagger: 0.1 })
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
        <div className="relative">
          {/* 배경 영상 (흑백 · 검정배경은 screen 블렌드로 제거) */}
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* 가독성 오버레이 */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-paper/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />

          <div ref={heroRef} className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
            <h1
              ref={nameRef}
              className="font-display text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
            >
              Park Miseon
              <span className="text-accent">.</span>
            </h1>

            <h2 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-8xl">
              <span className="text-hollow" aria-label={ROLE}>
                {ROLE.split('').map((ch, i) => (
                  <span key={i} aria-hidden="true" className="fd-letter inline-block">
                    {ch === ' ' ? ' ' : ch}
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
        </div>

        {/* 기술 스택 카드 */}
        <div className="border-y border-white/10 py-10">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="mb-5 text-xs font-medium uppercase tracking-widest text-muted">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {stack.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2.5 text-sm font-medium text-ink/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink"
                  >
                    <Icon className="text-base text-ink/55 transition-colors duration-200 group-hover:text-ink" aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
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
