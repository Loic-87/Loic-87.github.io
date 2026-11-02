export const projects = [
  {
    slug: 'booki',
    title: 'Booki',
    category: 'Formation',
    stack: ['HTML5', 'CSS3'],
    blurb: "Intégration d'une maquette Figma en HTML/CSS pur, sans JavaScript.",
    repo: 'https://github.com/Loic-87/Booki-mon-projet',
    contexte:
      "Premier projet d'intégration de la formation : reproduire fidèlement une maquette Figma pour Booki, un site de recherche d'hébergements et d'activités de voyage, en HTML/CSS pur.",
    objectifs:
      'Traduire une maquette desktop et mobile en code HTML sémantique et CSS responsive, sans JavaScript, en respectant les contraintes de mise en page et les breakpoints.',
    stackDetail: 'HTML5 sémantique, CSS3 (Flexbox, Grid, media queries).',
    competences:
      "Rigueur dans le respect d'une maquette au pixel près, structuration sémantique d'une page, mise en page responsive en CSS pur sans framework.",
    resultats:
      'Site statique entièrement responsive, base des projets suivants où le JavaScript est introduit.',
    perspectives:
      'Passer à une architecture CSS plus maintenable (variables CSS, méthodologie BEM), ajouter des micro-interactions.',
  },
  {
    slug: 'sophie-bluel',
    title: 'Sophie Bluel',
    category: 'Formation',
    stack: ['JavaScript', 'API REST'],
    blurb: 'Galerie dynamique avec mode édition protégé par authentification.',
    repo: 'https://github.com/Loic-87/Mon-projet-Sophie-Bluel',
    contexte:
      "Portfolio en ligne pour une architecte d'intérieur fictive, avec une interface d'administration permettant d'ajouter/supprimer des réalisations sans toucher au code.",
    objectifs:
      "Consommer une API REST fournie en JavaScript vanilla pour afficher une galerie filtrable par catégorie, et développer un mode édition protégé par authentification.",
    stackDetail:
      'JavaScript ES6+ (fetch, DOM, modules), authentification par token JWT, API REST fournie (dossier Backend/).',
    competences:
      'Manipulation du DOM sans framework, gestion d’un état de session utilisateur, création de modales et formulaires d’upload, gestion des erreurs API.',
    resultats:
      'Galerie dynamique avec ajout/suppression de projets en direct, mode connecté/déconnecté opérationnel.',
    perspectives:
      'Migrer vers un framework pour simplifier la gestion d’état de la modale et des filtres, ajouter des retours visuels sur les actions.',
  },
  {
    slug: 'nina-carducci',
    title: 'Nina Carducci',
    category: 'Formation',
    stack: ['Performance', 'SEO', 'Accessibilité'],
    blurb: "Audit et optimisation perf/SEO/accessibilité d'un site existant.",
    repo: 'https://github.com/Loic-87/mon-projet-Nina-Carducci',
    contexte:
      "Audit et optimisation du site vitrine existant d'une photographe. Reprendre un projet existant plutôt que le construire de zéro.",
    objectifs:
      "Corriger les problèmes de performance (poids des images, temps de chargement), d'accessibilité (contrastes, alt, navigation clavier) et de référencement naturel (balisage sémantique, meta).",
    stackDetail:
      'HTML5, CSS3, JavaScript, outils d’audit (Lighthouse, WAVE), format d’image WebP.',
    competences:
      "Lecture et diagnostic de code existant, priorisation des correctifs par impact réel, justification documentée des choix face aux faux positifs des outils d'audit.",
    resultats:
      'Score Lighthouse et accessibilité nettement amélioré, temps de chargement réduit.',
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
      'API back-end pour un site de notation de livres, consommée par un front-end React fourni par OpenClassrooms.',
    objectifs:
      "Concevoir une API REST sécurisée (authentification, upload et optimisation d'images) connectée à MongoDB, en respectant des bonnes pratiques de sécurité professionnelles.",
    stackDetail:
      'Node.js, Express, MongoDB/Mongoose, bcrypt, JWT, Multer, Sharp, Helmet, express-rate-limit.',
    competences:
      "Architecture back-end (routes/contrôleurs/modèles), sécurisation d'une API (hash des mots de passe, tokens, en-têtes HTTP, rate limiting), optimisation d'images côté serveur dans une démarche d'éco-conception.",
    resultats:
      'API avec 8 routes sécurisées ; images automatiquement compressées et converties en WebP.',
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
      'Reconstruire le site en composants React réutilisables avec routage client, en gérant proprement les états de chargement et d’erreur.',
    stackDetail: 'React 19 (hooks), React Router v7, Vite, Sass (SCSS, mobile-first), Oxlint.',
    competences:
      'Architecture en composants réutilisables (Banner, Card, Collapse, Slideshow...), hooks personnalisés isolant la logique de données, couche service découplée prête à être connectée à une vraie API, accessibilité (navigation clavier, aria-expanded).',
    resultats:
      'SPA complète (liste, détail, à propos, 404), responsive mobile-first et accessible au clavier.',
    perspectives:
      'Brancher la couche service sur une vraie API, tests unitaires sur les hooks personnalisés.',
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
      "Le Product Owner du projet MenuMaker (une application pour le client fictif Qwenta) étant en congé, j'ai dû reprendre exceptionnellement son rôle pour préparer et planifier le projet à sa place, à partir de la maquette Figma et des spécifications fonctionnelles fournies.",
    objectifs:
      'Traduire les besoins utilisateurs (user stories) en un document de spécifications techniques complet (architecture, hébergement, sécurité) puis en un Kanban détaillé découpant chaque user story en tâches techniques concrètes, estimées et assignées (front-end / back-end).',
    stackDetail:
      'Pas de code sur ce projet, du travail d’analyse et de conception : lecture de maquette Figma en mode prototype, rédaction de spécifications techniques, veille technologique organisée sur Feedly/Inoreader, outil de gestion de projet type Notion pour le Kanban.',
    competences:
      'Analyse fonctionnelle (transformer un "quoi" utilisateur en "comment" technique), rédaction de documentation technique argumentée, découpage d’un projet en tâches précises et estimables (story points), veille technologique structurée, communication orientée non-développeur.',
    resultats:
      'Document de spécifications techniques finalisé, Kanban d’une vingtaine de tâches techniques détaillées, support de présentation complété pour la restitution client.',
    perspectives:
      'Mettre ce travail de conception à l’épreuve en développant réellement une partie du Menu Maker.',
  },
  {
    slug: 'demineur-antivirus',
    title: 'Démineur Antivirus',
    category: 'Personnel',
    stack: ['React', 'Vite'],
    blurb: 'Démineur réhabillé en antivirus, jouable au clic comme au tactile.',
    repo: 'https://github.com/Loic-87/demineur-antivirus',
    contexte:
      'Projet personnel pour s’exercer à un algorithme classique (le démineur) en le ré-habillant dans un univers "antivirus" : on scanne un système à la recherche de virus plutôt que de mines.',
    objectifs:
      'Réimplémenter de zéro la logique du démineur (placement aléatoire, calcul des cases adjacentes, propagation en cascade des cases vides, détection de victoire/défaite) sans librairie, et la rendre jouable aussi bien au clic/clic-droit sur PC qu’au tap/appui-long sur mobile.',
    stackDetail: 'React (hooks useState/useRef), Vite, JavaScript pur pour la logique de jeu (module game.js découplé de l’UI).',
    competences:
      'Algorithmique récursive (ouverture en cascade des cases), gestion d’état immuable (structuredClone de la grille à chaque action), gestion des interactions tactiles (détection d’un appui long pour poser un drapeau sur mobile).',
    resultats:
      'MVP entièrement jouable sur PC et mobile, logique de jeu testée et fiable (grille 9×9, 10 virus).',
    perspectives:
      'Niveaux de difficulté, chronomètre, et une couche "roguelike" (power-ups) envisagée comme évolution du projet.',
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
      'Projet réalisé en stage : un site de petites annonces façon Leboncoin, mais entièrement dédié à la moto, un choix assumé car passionné de moto, pour donner une vraie identité au projet plutôt qu’un clone générique.',
    objectifs:
      'Construire le parcours complet d’un site d’annonces (liste, recherche, filtres, détail d’une annonce, dépôt d’une annonce) avec un design system sur-mesure pensé pour le secteur moto.',
    stackDetail:
      'React 19, React Router v7, Vite, CSS avec design system dédié (palette anthracite/or, typographies Rajdhani + Inter).',
    competences:
      'Conception d’un design system de A à Z (palette couleur, choix typographique, composants réutilisables), structuration d’une arborescence multi-pages avec React Router, modélisation de données métier spécifiques.',
    resultats:
      'MVP front fonctionnel avec liste d’annonces, filtres, page détail et formulaire de dépôt sur données de démonstration.',
    perspectives:
      'Backend Node.js pour persister les annonces et les comptes utilisateurs, authentification, et une fonctionnalité d’OCR pour scanner la carte grise et pré-remplir automatiquement une annonce.',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
