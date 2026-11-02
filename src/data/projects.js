export const projects = [
  {
    slug: 'booki',
    title: 'Booki',
    category: 'Formation',
    stack: ['HTML5', 'CSS3'],
    blurb: "Intégration d'une maquette Figma en HTML/CSS pur, sans JavaScript.",
    repo: 'https://github.com/Loic-87/Booki-mon-projet',
    contexte:
      "Premier projet de la formation : reproduire une maquette Figma à l'identique, en HTML/CSS pur, pour Booki, un site de recherche d'hébergements et d'activités de voyage.",
    objectifs:
      "Traduire une maquette desktop et mobile en HTML sémantique et CSS responsive, sans JavaScript, en respectant les breakpoints à la lettre.",
    stackDetail: 'HTML5 sémantique, CSS3 (Flexbox, Grid, media queries).',
    competences:
      "J'ai appris à respecter une maquette au pixel près, à structurer une page sémantiquement, et à faire du responsive en CSS pur, sans framework.",
    resultats:
      "Un site statique entièrement responsive. La base sur laquelle les projets suivants, avec JavaScript, sont venus se greffer.",
    perspectives:
      'Passer à une architecture CSS plus maintenable (variables, BEM) et ajouter quelques micro-interactions.',
  },
  {
    slug: 'sophie-bluel',
    title: 'Sophie Bluel',
    category: 'Formation',
    stack: ['JavaScript', 'API REST'],
    blurb: 'Galerie dynamique avec mode édition protégé par authentification.',
    repo: 'https://github.com/Loic-87/Mon-projet-Sophie-Bluel',
    contexte:
      "Portfolio en ligne pour une architecte d'intérieur fictive, avec une interface d'admin pour ajouter ou supprimer des réalisations sans toucher au code.",
    objectifs:
      "Consommer une API REST fournie en JavaScript vanilla pour afficher une galerie filtrable par catégorie, et coder un mode édition protégé par authentification.",
    stackDetail:
      'JavaScript ES6+ (fetch, DOM, modules), authentification par token JWT, API REST fournie (dossier Backend/).',
    competences:
      "Manipulation du DOM sans framework, gestion d'une session utilisateur, modales et formulaires d'upload, gestion des erreurs API.",
    resultats:
      "Une galerie dynamique où j'ajoute et supprime des projets en direct, avec un vrai mode connecté/déconnecté.",
    perspectives:
      "Migrer vers un framework pour simplifier la gestion d'état de la modale et des filtres, et ajouter des retours visuels sur les actions.",
  },
  {
    slug: 'nina-carducci',
    title: 'Nina Carducci',
    category: 'Formation',
    stack: ['Performance', 'SEO', 'Accessibilité'],
    blurb: "Audit et optimisation perf/SEO/accessibilité d'un site existant.",
    repo: 'https://github.com/Loic-87/mon-projet-Nina-Carducci',
    contexte:
      "Reprendre le site vitrine existant d'une photographe plutôt que de le construire de zéro, pour l'auditer et l'optimiser.",
    objectifs:
      "Corriger les problèmes de performance (images trop lourdes, chargement lent), d'accessibilité (contrastes, alt, navigation clavier) et de référencement (balisage, meta).",
    stackDetail:
      'HTML5, CSS3, JavaScript, outils d’audit (Lighthouse, WAVE), format d’image WebP.',
    competences:
      "Lire et diagnostiquer du code existant, prioriser les correctifs par impact réel, justifier mes choix quand un outil d'audit remonte un faux positif.",
    resultats:
      'Score Lighthouse et accessibilité nettement meilleurs, temps de chargement réduit.',
    perspectives: 'Lazy loading systématique, images responsives avec srcset.',
  },
  {
    slug: 'mon-vieux-grimoire',
    title: 'Mon Vieux Grimoire',
    category: 'Formation',
    stack: ['Node.js', 'Express', 'MongoDB'],
    blurb: 'API REST sécurisée pour un site de notation de livres.',
    repo: 'https://github.com/Loic-87/Mon-vieux-grimoire_Mon-projet',
    contexte:
      'API back-end pour un site de notation de livres, consommée par un front React fourni par OpenClassrooms.',
    objectifs:
      "Concevoir une API REST sécurisée (authentification, upload et optimisation d'images) connectée à MongoDB, avec de vraies bonnes pratiques de sécurité.",
    stackDetail:
      'Node.js, Express, MongoDB/Mongoose, bcrypt, JWT, Multer, Sharp, Helmet, express-rate-limit.',
    competences:
      "Architecture back-end (routes, contrôleurs, modèles), sécurisation d'une API (hash des mots de passe, tokens, en-têtes HTTP, rate limiting), optimisation d'images côté serveur pour l'éco-conception.",
    resultats:
      'Une API avec 8 routes sécurisées. Les images sont automatiquement compressées et converties en WebP.',
    perspectives: 'Tests automatisés (Jest/Supertest), pagination de la liste des livres.',
  },
  {
    slug: 'kasa',
    title: 'Kasa',
    category: 'Formation',
    stack: ['React', 'React Router', 'Sass'],
    blurb: 'SPA de location de logements avec hooks personnalisés.',
    repo: 'https://github.com/Loic-87/Kasa-Mon-projet',
    contexte:
      'Refonte en Single Page Application React de Kasa, une plateforme de location de logements entre particuliers.',
    objectifs:
      "Reconstruire le site en composants React réutilisables avec routage client, en gérant proprement les états de chargement et d'erreur.",
    stackDetail: 'React 19 (hooks), React Router v7, Vite, Sass (SCSS, mobile-first), Oxlint.',
    competences:
      "Composants réutilisables (Banner, Card, Collapse, Slideshow...), hooks personnalisés qui isolent la logique de données, couche service découplée prête pour une vraie API, accessibilité (navigation clavier, aria-expanded).",
    resultats:
      'Une SPA complète (liste, détail, à propos, 404), responsive mobile-first et accessible au clavier.',
    perspectives:
      'Brancher la couche service sur une vraie API, écrire des tests unitaires pour les hooks personnalisés.',
  },
  {
    slug: 'menu-maker',
    title: 'Menu Maker',
    category: 'Formation',
    stack: ['Spécifications techniques', 'Kanban'],
    blurb: 'Spécifications techniques et Kanban pour une application fictive, sans code sur ce projet.',
    repo: null,
    noRepoReason: 'Pas de code sur ce projet',
    contexte:
      "Le Product Owner du projet était en congé. J'ai repris son rôle exceptionnellement pour préparer et planifier le projet à sa place, à partir de la maquette Figma et des spécifications fonctionnelles fournies.",
    objectifs:
      "Traduire les besoins utilisateurs (user stories) en document de spécifications techniques, puis en Kanban détaillé découpant chaque user story en tâches techniques concrètes, estimées et assignées.",
    stackDetail:
      'Pas de code sur ce projet, du travail d’analyse et de conception : lecture de maquette Figma en mode prototype, rédaction de spécifications techniques, veille technologique organisée sur Feedly/Inoreader, outil de gestion de projet type Notion pour le Kanban.',
    competences:
      'Analyse fonctionnelle (transformer un "quoi" utilisateur en "comment" technique), rédaction de documentation technique argumentée, découpage d’un projet en tâches estimables, veille technologique structurée, communication orientée non-développeur.',
    resultats:
      "Un document de spécifications techniques finalisé, un Kanban d'une vingtaine de tâches détaillées, et un support de présentation prêt pour la restitution client.",
    perspectives:
      "Mettre ce travail de conception à l'épreuve en développant réellement une partie du Menu Maker.",
  },
  {
    slug: 'demineur-antivirus',
    title: 'Démineur Antivirus',
    category: 'Personnel',
    stack: ['React', 'Vite'],
    blurb: 'Démineur réhabillé en antivirus, jouable au clic comme au tactile.',
    repo: 'https://github.com/Loic-87/demineur-antivirus',
    contexte:
      "Projet perso pour m'exercer sur un algorithme classique, le démineur, en le réhabillant dans un univers antivirus : on scanne un système à la recherche de virus plutôt que de mines.",
    objectifs:
      "Réimplémenter de zéro la logique du démineur (placement aléatoire, calcul des cases adjacentes, propagation en cascade, victoire/défaite), sans librairie, jouable au clic/clic droit sur PC comme au tap/appui long sur mobile.",
    stackDetail: 'React (hooks useState/useRef), Vite, JavaScript pur pour la logique de jeu (module game.js découplé de l’UI).',
    competences:
      "Algorithmique récursive (ouverture en cascade), gestion d'état immuable (structuredClone de la grille à chaque action), gestion des interactions tactiles (détecter un appui long pour poser un drapeau).",
    resultats:
      "Un MVP entièrement jouable sur PC et mobile, avec une logique de jeu fiable (grille 9×9, 10 virus).",
    perspectives:
      'Niveaux de difficulté, chronomètre, et une couche roguelike (power-ups) en évolution possible.',
  },
  {
    slug: 'comptoir-de-la-moto',
    title: 'Le Comptoir de la Moto',
    category: 'Personnel',
    stack: ['React', 'React Router'],
    blurb: 'Site de petites annonces dédié à la moto, design system sur-mesure (stage).',
    repo: null,
    noRepoReason: 'Repo à venir',
    contexte:
      "Projet de stage : un site de petites annonces façon Leboncoin, mais entièrement dédié à la moto. Un choix assumé, parce que je suis motard, pour donner une vraie identité au projet plutôt qu'un clone générique.",
    objectifs:
      "Construire le parcours complet d'un site d'annonces (liste, recherche, filtres, détail, dépôt) avec un design system sur-mesure pensé pour le secteur moto.",
    stackDetail:
      'React 19, React Router v7, Vite, CSS avec design system dédié (palette anthracite/or, typographies Rajdhani + Inter).',
    competences:
      "Conception d'un design system de A à Z (palette, typographie, composants réutilisables), structuration d'une arborescence multi-pages avec React Router, modélisation de données métier spécifiques.",
    resultats:
      "Un MVP front fonctionnel : liste d'annonces, filtres, page détail et formulaire de dépôt sur données de démonstration.",
    perspectives:
      "Un backend Node.js pour persister les annonces et les comptes, l'authentification, et une fonctionnalité d'OCR pour scanner la carte grise et pré-remplir une annonce automatiquement.",
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
