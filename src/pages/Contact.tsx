import Reveal from '../components/Reveal'

const channels: { label: string; value: string; href: string }[] = [
  { label: 'Email', value: 'mii6080@naver.com', href: 'mailto:mii6080@naver.com' },
  { label: 'GitHub', value: 'github.com/mspark9', href: 'https://github.com/mspark9' },
]

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-8">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Contact</p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-8xl">
            함께 일하고
            <br />
            싶으신가요<span className="text-accent">?</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-md text-lg text-muted">
            새로운 기회와 협업에 언제나 열려 있습니다. 편하게 연락 주세요.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 max-w-3xl divide-y divide-white/10 border-y border-white/10">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-start gap-1 py-6 transition-colors hover:text-accent sm:flex-row sm:items-center sm:justify-between sm:py-7"
              >
                <span className="text-sm uppercase tracking-widest text-muted">{c.label}</span>
                <span className="font-display text-xl font-semibold break-all sm:text-3xl">
                  {c.value}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-2">↗</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
