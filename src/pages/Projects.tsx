import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Projects</p>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          무엇을 만들었나보다,
          <br />
          <span className="text-accent">어떻게 풀었나.</span>
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
