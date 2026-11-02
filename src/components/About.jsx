import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const PITCH = [
  {
    label: 'Qui je suis',
    text: "Loïc Le Faucheur, développeur full-stack junior. Solide en front-end, encore en train de construire mes bases back-end. Je code, je joue, je roule, pas forcément dans cet ordre.",
  },
  {
    label: 'Mon parcours',
    text: "J'ai passé plusieurs années en usine, dans des secteurs différents. Pour des raisons personnelles, j'ai dû repenser mon avenir pro. L'informatique et le jeu vidéo, ça a toujours été mon truc, donc je me suis lancé dans une formation de dev pour en faire mon métier.",
  },
  {
    label: 'Ma stack',
    text: "React et Vite en front, la plupart du temps. Côté back, je débute avec Node.js, Express et MongoDB : j'ai sécurisé une API (JWT, hash des mots de passe, images optimisées) sur Mon Vieux Grimoire. Kasa reste mon projet React le plus abouti : composants réutilisables, hooks perso, couche service découplée.",
  },
  {
    label: 'Ce qui me représente le mieux',
    text: "Le Comptoir de la Moto, mon projet de stage. Un site d'annonces dédié à la moto, pas un clone de plus, un vrai sujet qui me parle. J'ai construit le design system et toute l'arborescence de A à Z.",
  },
  {
    label: 'Ma façon de travailler',
    text: "Je bosse mieux seul, à mon rythme, sans me disperser, même si j'ai déjà fait de l'équipe (Cave à Vin, le jeu de rôle Broken Sunshine). Deux trucs qui reviennent sur mes projets perso : je rethème toujours plutôt que de copier (un démineur devient un antivirus, un Leboncoin devient dédié à la moto), et un sujet technique, l'OCR, revient sans arrêt, juste parce qu'il m'intéresse.",
  },
  {
    label: 'Ce que je vise',
    text: "Un poste de développeur full-stack, idéalement dans le jeu vidéo ou la moto, mais je reste ouvert. L'objectif : monter en compétence côté back-end, au contact de devs plus expérimentés.",
  },
]

function About() {
  return (
    <FadeInSection id="apropos" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <SectionHeading number="01" title="À propos" />

      <div className="flex flex-col gap-8">
        {PITCH.map((part) => (
          <div key={part.label}>
            <p className="font-mono text-xs tracking-wider text-primary uppercase">
              {part.label}
            </p>
            <p className="mt-2 text-text-muted">{part.text}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

export default About
