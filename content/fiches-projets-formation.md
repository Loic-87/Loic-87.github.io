# Fiches projets — formation OpenClassrooms

> Brouillon généré à partir des README/code des repos GitHub. À relire, corriger et reformuler avec tes mots avant intégration au site — tu dois pouvoir défendre chaque phrase à l'oral.

---

## 1. Booki
*Repo : [Booki-mon-projet](https://github.com/Loic-87/Booki-mon-projet) — HTML/CSS*

**Contexte** : Premier projet d'intégration de la formation : reproduire fidèlement une maquette Figma pour Booki, un site de recherche d'hébergements et d'activités de voyage, en HTML/CSS pur.

**Objectifs** : Traduire une maquette desktop et mobile en code HTML sémantique et CSS responsive, sans JavaScript, en respectant les contraintes de mise en page et les breakpoints.

**Stack technique** : HTML5 sémantique, CSS3 (Flexbox, Grid, media queries).

**Compétences développées** : Rigueur dans le respect d'une maquette au pixel près, structuration sémantique d'une page, mise en page responsive en CSS pur sans framework.

**Résultats et impact** : Site statique entièrement responsive, base des projets suivants où le JavaScript est introduit.

**Perspectives d'amélioration** : Passer à une architecture CSS plus maintenable (variables CSS, méthodologie BEM), ajouter des micro-interactions.

---

## 2. Sophie Bluel
*Repo : [Mon-projet-Sophie-Bluel](https://github.com/Loic-87/Mon-projet-Sophie-Bluel) — JavaScript*

**Contexte** : Portfolio en ligne pour une architecte d'intérieur fictive, avec une interface d'administration permettant d'ajouter/supprimer des réalisations sans toucher au code.

**Objectifs** : Consommer une API REST fournie en JavaScript vanilla pour afficher une galerie filtrable par catégorie, et développer un mode édition protégé par authentification.

**Stack technique** : JavaScript ES6+ (fetch, DOM, modules), authentification par token JWT, API REST fournie (dossier Backend/).

**Compétences développées** : Manipulation du DOM sans framework, gestion d'un état de session utilisateur, création de modales et formulaires d'upload, gestion des erreurs API.

**Résultats et impact** : Galerie dynamique avec ajout/suppression de projets en direct, mode connecté/déconnecté opérationnel.

**Perspectives d'amélioration** : Migrer vers un framework pour simplifier la gestion d'état de la modale et des filtres, ajouter des retours visuels sur les actions.

---

## 3. Nina Carducci
*Repo : [mon-projet-Nina-Carducci](https://github.com/Loic-87/mon-projet-Nina-Carducci) — HTML/JS*

**Contexte** : Audit et optimisation du site vitrine existant d'une photographe — reprendre un projet existant plutôt que le construire de zéro.

**Objectifs** : Corriger les problèmes de performance (poids des images, temps de chargement), d'accessibilité (contrastes, alt, navigation clavier) et de référencement naturel (balisage sémantique, meta).

**Stack technique** : HTML5, CSS3, JavaScript, outils d'audit (Lighthouse, WAVE), format d'image WebP.

**Compétences développées** : Lecture et diagnostic de code existant, priorisation des correctifs par impact réel, justification documentée des choix face aux faux positifs des outils d'audit.

**Résultats et impact** : Score Lighthouse et accessibilité nettement amélioré, temps de chargement réduit.

**Perspectives d'amélioration** : Lazy loading systématique, images responsives avec `srcset`.

---

## 4. Mon Vieux Grimoire (back-end)
*Repo : [Mon-vieux-grimoire_Mon-projet](https://github.com/Loic-87/Mon-vieux-grimoire_Mon-projet) — Node.js*

**Contexte** : API back-end pour un site de notation de livres, consommée par un front-end React fourni par OpenClassrooms.

**Objectifs** : Concevoir une API REST sécurisée (authentification, upload et optimisation d'images) connectée à MongoDB, en respectant des bonnes pratiques de sécurité professionnelles.

**Stack technique** : Node.js, Express, MongoDB/Mongoose, bcrypt, JWT, Multer, Sharp, Helmet, express-rate-limit.

**Compétences développées** : Architecture back-end (routes/contrôleurs/modèles), sécurisation d'une API (hash des mots de passe, tokens, en-têtes HTTP, rate limiting), optimisation d'images côté serveur dans une démarche d'éco-conception.

**Résultats et impact** : API avec 8 routes sécurisées ; images automatiquement compressées et converties en WebP.

**Perspectives d'amélioration** : Tests automatisés (Jest/Supertest), pagination de la liste des livres.

---

## 5. Kasa
*Repo : [Kasa-Mon-projet](https://github.com/Loic-87/Kasa-Mon-projet) — React*

**Contexte** : Refonte en Single Page Application React de Kasa, une plateforme de location de logements entre particuliers.

**Objectifs** : Reconstruire le site en composants React réutilisables avec routage client, en gérant proprement les états de chargement et d'erreur.

**Stack technique** : React 19 (hooks), React Router v7, Vite, Sass (SCSS, mobile-first), Oxlint.

**Compétences développées** : Architecture en composants réutilisables (Banner, Card, Collapse, Slideshow...), hooks personnalisés isolant la logique de données, couche service découplée prête à être connectée à une vraie API, accessibilité (navigation clavier, `aria-expanded`).

**Résultats et impact** : SPA complète (liste, détail, à propos, 404), responsive mobile-first et accessible au clavier.

**Perspectives d'amélioration** : Brancher la couche service sur une vraie API, tests unitaires sur les hooks personnalisés.

---

## 6. Menu Maker (by Qwenta)
*Pas de repo — projet de gestion de projet / conception, sans code. ⚠️ Fiche provisoire, à affiner avec le document de spécifications techniques réel (sur l'autre PC de Loïc) pour préciser la section "Stack technique".*

**Contexte** : Le Product Owner du projet MenuMaker (une application pour le client fictif Qwenta) étant en congé, j'ai dû reprendre exceptionnellement son rôle pour préparer et planifier le projet à sa place, à partir de la maquette Figma et des spécifications fonctionnelles fournies.

**Objectifs** : Traduire les besoins utilisateurs (user stories) en un document de spécifications techniques complet (architecture, hébergement, sécurité) puis en un Kanban détaillé découpant chaque user story en tâches techniques concrètes, estimées et assignées (front-end / back-end).

**Stack technique** : Pas de code sur ce projet — travail d'analyse et de conception : lecture de maquette Figma en mode prototype, rédaction de spécifications techniques, veille technologique organisée sur Feedly/Inoreader (deux axes : technologies du projet, bonnes pratiques web générales), outil de gestion de projet type Notion pour le Kanban.

**Compétences développées** : Analyse fonctionnelle (transformer un "quoi" utilisateur en "comment" technique), rédaction de documentation technique argumentée, découpage d'un projet en tâches précises et estimables (story points), veille technologique structurée, communication orientée non-développeur (présentation finale à restituer au client).

**Résultats et impact** : Document de spécifications techniques finalisé, Kanban d'une vingtaine de tâches techniques détaillées (sous-tâches, attribution, critères de succès), support de présentation complété pour la restitution client.

**Perspectives d'amélioration** : Mettre ce travail de conception à l'épreuve en développant réellement une partie du Menu Maker, pour vérifier que les choix techniques spécifiés tiennent la route en pratique.

---

## Notes
- Les 5 projets forment une bonne progression à raconter en soutenance : HTML/CSS pur → JS vanilla + API → audit perf/SEO/a11y → back-end sécurisé → React.
- Visuels à prévoir par projet : screenshot ou mockup, logos des technos utilisées.
- Liens à ajouter : repo GitHub (fait), démo live (à vérifier si certains sont déployés), vidéo de démo (optionnel).
