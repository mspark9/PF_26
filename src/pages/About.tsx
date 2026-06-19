import Reveal from '../components/Reveal'

const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'GSAP'] },
  { group: 'Backend & Tools', items: ['Node.js', 'REST API', 'PostgreSQL', 'Python', 'AWS', 'Docker', 'Git', 'GitHub', 'GitLab', 'Fly.io', 'Figma', 'Vercel'] },
]

const timeline: { period: string; title: string; desc: string }[] = [
  {
    period: '2026.01 — 2026.06',
    title: '코드랩아카데미 부트캠프 수료',
    desc: 'AI 기반 풀스택. 팀 프로젝트 진행.',
  },
  {
    period: '2022.10 — 2026.01',
    title: '프론비즈 · 대리 (정규직) — 퍼블리싱 및 프론트엔드',
    desc: '농협 웹/앱 구축·고도화·운영 등 프로젝트 다수 진행.',
  },
  {
    period: '2022.01 — 2022.07',
    title: '크레아이디 · 사원 (프리랜서) — 퍼블리싱',
    desc: '신한은행 사내업무 시스템 구축 및 전환.',
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">About</p>
      </Reveal>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              안녕하세요,
              <br />
              <span className="text-accent">박미선</span>입니다.
            </h1>
          </Reveal>
          {/* ▼ [수정] 자기소개 */}
          <Reveal delay={160}>
            <div className="mt-8 space-y-4 text-lg text-muted">
              <p>
                사용자 경험을 만드는 <span className="text-ink">프론트엔드 개발자</span>입니다.
                React와 TypeScript로 웹 서비스를 개발하며, 성능 최적화와 디테일에 관심이 많습니다.
              </p>
              <p>
                문제의 원인을 끝까지 파고드는 끈기가 있고, 배운 것은 팀과 나누는 걸 좋아합니다.
                좋은 코드만큼 좋은 협업이 중요하다고 생각합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12">
              <h2 className="font-display text-xl font-semibold">경력 / 이력</h2>
              <div className="mt-5 space-y-5">
                {timeline.map((t) => (
                  <div key={t.period} className="flex gap-5 border-l border-white/10 pl-5">
                    <span className="w-32 shrink-0 text-sm text-muted">{t.period}</span>
                    <div>
                      <p className="font-medium">{t.title}</p>
                      <p className="text-sm text-muted">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          {/* 포트레이트 이미지 */}
          <Reveal delay={120}>
            <div className="relative mb-8 aspect-[4/5] w-full max-w-xs">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-card">
                <img src="/about.jpg" alt="작업 공간" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>

          {skills.map((s, i) => (
            <Reveal key={s.group} delay={160 + i * 80}>
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-lg border border-white/10 px-3 py-1 text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
