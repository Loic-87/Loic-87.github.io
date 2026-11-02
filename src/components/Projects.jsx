import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FadeInSection from './FadeInSection'

const FILTERS = ['Tous', 'Formation', 'Personnel']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <FadeInSection id="projets" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Projets</h2>

      <div className="mt-6 flex gap-3">
        {FILTERS.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeFilter === filter
                ? 'border-primary bg-primary text-bg font-semibold'
                : 'border-white/10 text-text-muted hover:text-text'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </FadeInSection>
  )
}

export default Projects
