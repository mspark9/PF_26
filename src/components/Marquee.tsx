type Props = {
  items: string[]
  reverse?: boolean
  className?: string
  separator?: string
}

export default function Marquee({ items, reverse = false, className = '', separator = '✦' }: Props) {
  const loop = [...items, ...items]
  return (
    <div className="pause-hover relative flex overflow-hidden">
      <div className={`flex w-max shrink-0 items-center gap-8 pr-8 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {loop.map((it, i) => (
          <span key={i} className={`flex items-center gap-8 whitespace-nowrap ${className}`}>
            {it}
            <span className="text-accent">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
