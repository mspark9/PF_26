import { useEffect, useRef, useState, type ReactNode } from 'react'

type Step = { cmd: string; out: ReactNode[] }

const steps: Step[] = [
  { cmd: 'whoami', out: ['Park Miseon — Frontend Developer'] },
  {
    cmd: 'cat status.txt',
    out: [
      <span>
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#38EF7D] align-middle" />
        Available for new opportunities · Seoul, KR
      </span>,
    ],
  },
  {
    cmd: 'cat README.md',
    out: [
      'From idea to deploy — I build the whole front-to-back experience.',
      'I turn complex problems into simple, delightful interfaces.',
    ],
  },
  {
    cmd: 'contact --now',
    out: [
      <span>
        <span className="inline-block w-16 text-muted">email</span>
        <a className="text-ink underline underline-offset-4 hover:text-accent" href="mailto:mii6080@naver.com">
          mii6080@naver.com
        </a>
      </span>,
      <span>
        <span className="inline-block w-16 text-muted">github</span>
        <a className="text-ink underline underline-offset-4 hover:text-accent" href="https://github.com/mspark9" target="_blank" rel="noreferrer">
          github.com/mspark9
        </a>
      </span>,
    ],
  },
]

export default function TerminalFooter() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [printed, setPrinted] = useState<ReactNode[]>([])
  const [typing, setTyping] = useState('')
  const [done, setDone] = useState(false)

  // 화면에 들어오면 시작
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // 시퀀스 재생
  useEffect(() => {
    if (!started) return
    let cancelled = false
    const timeouts: number[] = []
    const wait = (ms: number) =>
      new Promise<void>((r) => {
        const t = window.setTimeout(r, ms)
        timeouts.push(t)
      })

    const run = async () => {
      for (let s = 0; s < steps.length; s++) {
        const step = steps[s]
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return
          setTyping(step.cmd.slice(0, i))
          await wait(48)
        }
        await wait(260)
        if (cancelled) return
        setTyping('')
        setPrinted((prev) => [
          ...prev,
          <div key={`c${s}`}>
            <span className="text-muted">$ </span>
            <span>{step.cmd}</span>
          </div>,
          ...step.out.map((o, oi) => (
            <div key={`o${s}-${oi}`} className="text-ink/70">
              {o}
            </div>
          )),
          <div key={`sp${s}`} className="h-2" />,
        ])
        await wait(420)
      }
      if (!cancelled) setDone(true)
    }
    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [started])

  return (
    <div ref={ref} className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/12 bg-[#0e0e10]">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">miseon@portfolio — zsh</span>
      </div>
      <div className="min-h-[210px] px-5 pb-7 pt-5 font-mono text-sm leading-[1.9] text-ink">
        {printed}
        {!done && (
          <div>
            <span className="text-muted">$ </span>
            <span>{typing}</span>
            <span className="term-cursor" />
          </div>
        )}
        {done && (
          <div>
            <span className="text-muted">$ </span>
            <span className="term-cursor" />
          </div>
        )}
      </div>
    </div>
  )
}
