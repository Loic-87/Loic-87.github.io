import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'
import TechTag from './TechTag'

const HARD_SKILLS = {
  'Front-end': ['React', 'JavaScript (ES6+)', 'HTML5 sémantique', 'CSS3 / Sass', 'Tailwind CSS', 'Vite'],
  'Back-end': ['Node.js', 'Express', 'MongoDB', 'API REST', 'JWT'],
  Outils: ['Git / GitHub', 'Figma', 'Lighthouse / WAVE'],
}

const SOFT_SKILLS = [
  {
    title: 'Créativité',
    text: 'Je ne reproduis jamais un exemple à l’identique : je lui donne une identité propre.',
  },
  {
    title: 'Curiosité',
    text: 'Un fil rouge technique (l’OCR) revient sur plusieurs de mes projets, simplement parce qu’il m’intéresse.',
  },
  {
    title: 'Autonomie',
    text: 'Je gère mes projets de bout en bout, à mon rythme, sans me perdre.',
  },
]

function Skills() {
  return (
    <FadeInSection id="competences" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <SectionHeading number="02" title="Compétences" />

      {/* Stack technique */}
      <div className="flex flex-col gap-8">
        {Object.entries(HARD_SKILLS).map(([category, skills]) => (
          <div key={category}>
            <p className="font-mono text-xs tracking-wider text-primary uppercase">
              // {category}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TechTag key={skill}>{skill}</TechTag>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {SOFT_SKILLS.map((soft) => (
          <div
            key={soft.title}
            className="border-l-2 border-primary/40 pl-4"
          >
            <p className="font-display font-semibold text-primary">
              {soft.title}
            </p>
            <p className="mt-2 text-sm text-text-muted">{soft.text}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

export default Skills
