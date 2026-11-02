const PITCH = [
  {
    label: 'Qui je suis',
    text: 'Je suis Loïc Le Faucheur, développeur full-stack junior — une base front-end solide, et des premières bases back-end encore en construction. Passionné de code, de gaming et de moto.',
  },
  {
    label: 'Mon parcours',
    text: "Avant le développement, j'ai travaillé plusieurs années en usine, dans des secteurs variés. Pour des raisons personnelles, j'ai eu l'opportunité de repenser mon avenir professionnel. Passionné d'informatique et de jeux vidéo depuis toujours, j'ai vu dans le développement web une voie qui me correspondait enfin, et je me suis lancé dans une formation complète pour en faire mon métier.",
  },
  {
    label: 'Ma stack',
    text: "Je travaille principalement avec React et Vite côté front-end. J'ai aussi posé mes premières bases back-end avec Node.js, Express et MongoDB, où j'ai sécurisé une API (authentification JWT, hash des mots de passe, optimisation d'images). Mon projet React le plus complet, Kasa, illustre cette logique : composants réutilisables, hooks personnalisés, couche de service découplée.",
  },
  {
    label: 'Ce qui me représente le mieux',
    text: "Le projet dont je suis le plus fier est Le Comptoir de la Moto, réalisé en stage : un site d'annonces dédié à la moto, un sujet qui me parle en tant que motard. J'y ai construit un design system complet de A à Z et toute l'arborescence du site.",
  },
  {
    label: 'Ma façon de travailler',
    text: "Je travaille mieux seul : je gère mes projets de bout en bout, à mon rythme — même si j'ai déjà collaboré en équipe (Cave à Vin, le jeu de rôle Broken Sunshine). Ce qui me caractérise le plus, c'est ma créativité — je ne reproduis jamais un exemple à l'identique, j'aime lui donner une identité propre — et ma curiosité, avec un fil rouge technique (l'OCR) qui revient sur plusieurs de mes projets personnels, simplement parce qu'il m'intéresse.",
  },
  {
    label: 'Ce que je vise',
    text: "Je recherche un poste de développeur full-stack, idéalement dans un secteur qui me parle — le jeu vidéo ou la moto — mais je reste ouvert à d'autres domaines. Je veux surtout continuer à monter en compétence côté back-end, au contact de développeurs plus expérimentés.",
  },
]

function About() {
  return (
    <section id="apropos" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">
        À propos
      </h2>

      <div className="mt-10 flex flex-col gap-8">
        {PITCH.map((part) => (
          <div key={part.label}>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
              {part.label}
            </p>
            <p className="mt-2 text-text-muted">{part.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
