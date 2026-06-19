import type { Project } from '../data/projects'

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card">
      {/* 커버 */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* 폴백 그라데이션 (이미지 없을 때 / 로딩 전) */}
        <div className="absolute inset-0" style={{ background: p.gradient }} />

        {p.image && (
          <>
            {/* 뒤 배경: 같은 이미지를 블러로 채워 여백을 메움 */}
            <img
              src={p.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            {/* 메인: 가로 100% · 세로 중앙 · 잘리지 않게 contain */}
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {p.year && (
          <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {p.year}
          </span>
        )}

        <div className="absolute bottom-0 left-0 p-5">
          <p className="text-xs font-medium text-white/70">{p.type}</p>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow">
            {p.title}
          </h3>
        </div>
      </div>

      {/* 본문 */}
      <div className="p-5">
        <p className="text-sm text-muted">{p.desc}</p>

        {p.role && (
          <p className="mt-3 text-xs text-muted">
            <span className="text-ink/70">역할</span> · {p.role}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.result && (
            <span className="rounded-lg bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {p.result}
            </span>
          )}
          {p.tags.map((t) => (
            <span key={t} className="rounded-lg border border-white/10 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        {(p.github || p.notion || p.demo) && (
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                GitHub ↗
              </a>
            )}
            {p.notion && (
              <a href={p.notion} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                Notion ↗
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="text-ink hover:text-accent">
                Live ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
