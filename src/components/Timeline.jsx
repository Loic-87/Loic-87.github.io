import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'
import SectionGlow from './SectionGlow'

const STEPS = [
  {
    period: '2017 – 2025',
    title: 'Expériences en usine',
    text: 'Plusieurs années dans des secteurs industriels variés.',
  },
  {
    period: '2025 – 2026',
    title: 'Reconversion professionnelle',
    text: "Une période de transition qui m'a amené à repenser mon avenir et à me tourner vers le développement web.",
  },
  {
    period: 'Mars 2026',
    title: 'Formation Développeur Web',
    text: 'Démarrage de la formation (OpenClassrooms / Greta Limoges) : HTML/CSS, JavaScript, React, Symfony/Twig, Node.js...',
  },
  {
    period: 'Août – Octobre 2026',
    title: 'Stage : Le Comptoir de la Moto',
    text: "Développement front-end d'un site d'annonces moto, design system sur-mesure de A à Z.",
  },
  {
    period: 'Décembre 2026',
    title: 'Fin de formation',
    text: 'Soutenance de ce portfolio, et recherche d’un poste de développeur full-stack.',
  },
]

function Timeline() {
  return (
    <FadeInSection
      id="parcours"
      className="mx-auto max-w-3xl px-6"
      glow={<SectionGlow color="highlight" position="right" />}
    >
      <SectionHeading number="04" title="Parcours" />

      <ol className="border-l border-white/10 pl-6">
        {STEPS.map((step, index) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute top-1 -left-[25px] h-2 w-2 rotate-45 bg-primary" />
            <p className="font-mono text-xs tracking-wider text-primary uppercase">
              {step.period}
            </p>
            <p className="mt-1 font-semibold">{step.title}</p>
            <p className="mt-1 text-sm text-text-muted">{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </FadeInSection>
  )
}

export default Timeline
