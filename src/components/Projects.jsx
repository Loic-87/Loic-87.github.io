import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'
import SectionGlow from './SectionGlow'
import SectionIconDecor from './SectionIconDecor'
import { FaGamepad } from 'react-icons/fa'

const FILTERS = ['Tous', 'Formation', 'Personnel']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <FadeInSection
      id="projets"
      className="mx-auto max-w-5xl px-6"
      glow={<SectionGlow color="primary" position="left" />}
    >
      <SectionIconDecor icon={FaGamepad} position="top-left" rotate={-10} />
      <SectionHeading number="03" title="Projets" />

      <div className="mb-8 flex gap-6 border-b border-white/10 font-mono text-sm">
        {FILTERS.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            whileTap={{ scale: 0.95 }}
            className={`relative pb-3 transition-colors ${
              activeFilter === filter
                ? 'text-primary'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <motion.span
                layoutId="activeFilterUnderline"
                className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
