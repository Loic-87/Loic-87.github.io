import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const FILTERS = ['Tous', 'Formation', 'Personnel']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Projets</h2>

      <div className="mt-6 flex gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeFilter === filter
                ? 'border-primary bg-primary text-bg font-semibold'
                : 'border-white/10 text-text-muted hover:text-text'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
