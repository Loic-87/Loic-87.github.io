# Consignes du projet — Portfolio professionnel (OpenClassrooms)

> Récapitulatif complet du brief, reconstitué à partir des consignes que tu m'as transmises.

## Introduction

Dernier projet de la formation : concevoir, développer et déployer un portfolio professionnel responsive. Démonstration vivante des compétences techniques, de la créativité et de la capacité à mener un projet de A à Z.

**Approches techniques autorisées :**
- **Option 1 (full-code, recommandée)** : HTML5/CSS3/JS ES6+/React, frameworks CSS (Tailwind, Sass...), outils d'animation (Framer Motion, AOS...), IA en assistance. Repo GitHub dédié, déploiement (GitHub Pages, Vercel, Netlify, ou hébergeur payant). Minimum HTML/CSS, mais technologies avancées fortement recommandées.
- **Option 2 (low-code enrichi)** : au moins un composant React significatif (bannière 3D, galerie filtrable, formulaire avancé, dashboard, slider témoignages...).
- **Interdits** : solutions 100% no-code (Wix, Webflow sans perso). WordPress toléré seulement avec personnalisation de code significative.
- IA autorisée en assistance, mais chaque ligne doit être comprise et expliquée en soutenance. Copier-coller sans compréhension strictement interdit et détectable.

---

## Phase 1 — Cadrage (Kanban)

Mettre en place un tableau Kanban (Notion, Trello...) avec au minimum les colonnes : **À faire / En cours / À tester-Valider / Terminé**.

Tâches concrètes à lister, par exemple : choisir les projets, rédiger les fiches projet (IA), créer les wireframes, définir le design system, intégrer HTML/CSS, accessibilité/SEO, tester le responsive, publier, communiquer sur LinkedIn.

Découper en sous-étapes avec : estimation de temps, priorité, tag (contenu/design/dev/test), et cocher au fur et à mesure. Mettre à jour tout au long du projet — sert de support pour la soutenance.

---

## Phase 2 — Contenu

### Étape 1 — Projets de formation
- Minimum **2 projets significatifs** montrant progression et diversité de compétences.
- Chaque fiche projet doit contenir :
  - **Visuels** : titre accrocheur, screenshot/mockup, logos des technos
  - **Description narrative (IA)** : Contexte, Objectifs, Stack technique, Compétences développées, Résultats et impact, Perspectives d'amélioration
  - **Liens** : repo GitHub (README détaillé), démo live si possible, vidéo de démo (optionnel)

### Étape 2 — Projets personnels (optionnel mais recommandé)
Montrent passion, autonomie, créativité, veille techno. Même structure de présentation que les projets de formation. Maquettes Figma fournies en inspiration si besoin (Taskmaster, Culturelist) — à personnaliser significativement, pas à suivre à la lettre.

### Étape 3 — Pitch personnel (page "À propos")
Histoire cohérente en **6 actes** :
1. **Accroche identitaire** — prénom/nom, spécialité, domaine d'intérêt
2. **Parcours et légitimité** — contexte précédent, reconversion, élément déclencheur
3. **Stack technique et expertise** — technos maîtrisées, spécialisation, projet illustratif
4. **Projets marquants et impact** — projet(s) clé(s), défi, résultat mesurable
5. **Approche et différenciation** — méthode de travail, valeur ajoutée, vision
6. **Projection et ambitions** — poste visé, type d'entreprise, ce qu'on veut continuer à apprendre

---

## Phase 3 — Architecture et design

### Étape 1 — Architecture
**Navigation principale suggérée** : Accueil/Hero, À propos, Compétences, Projets (avec filtres), Parcours, Blog/Veille (optionnel), Contact.
**Sections secondaires suggérées** : Témoignages, Certifications, Hobbies tech, Ressources.

Wireframing recommandé (non obligatoire, pas un livrable) : sketch papier puis digital (Figma, Whimsical, draw.io), mobile-first. Outils IA (v0, Lovable) possibles pour une première ébauche.

### Étape 2 — Design system
**Palette** : couleur dominante (30-40%), complémentaire (20-30%), accent pour CTA (5-10%), nuances de gris (30-40%). Outils : Coolors, Adobe Color, Paletton, Material Design Colors.

**Typographie** — 3 options proposées :
1. Classique : serif pour les titres (Playfair Display...) + sans-serif pour le corps (Inter...)
2. Monochrome moderne : sans-serif bold pour titres + même famille en regular/light
3. Tech-oriented : police technique (JetBrains Mono...) + sans-serif clean pour le corps

---

## Phase 4 — SEO et accessibilité

### SEO
1. Trouver **3 offres d'emploi réelles** (WeLoveDevs, Welcome to the Jungle, LesJeudis) qui t'intéressent.
2. En extraire : termes techniques récurrents, vocabulaire sectoriel, combinaisons géographiques, soft skills valorisées.
3. Intégrer naturellement ces mots-clés dans : `<title>`, meta description, titres H1/H2, descriptions de projets et de parcours — **sans bourrage de mots-clés**.
4. Tester avec Lighthouse, WAVE ou Screaming Frog SEO Spider.

### Accessibilité
Bonnes pratiques minimales :
- Navigation clavier fluide, focus visible
- HTML sémantique (`main`, `section`, `nav`, `footer`)
- Contrastes visuels suffisants (tester avec WAVE)
- `alt=""` pour images décoratives, `alt` pertinent pour images informatives, labels sur les icônes
- Formulaires accessibles (labels, bons types d'input, messages d'erreur clairs)
- ARIA en dernier recours seulement

Tester avec au moins **2 outils** parmi : Lighthouse, WAVE, axe DevTools.

---

## Phase 5 — Publication et valorisation

### Publication (site codé)
1. Choisir l'hébergement : GitHub Pages (statique), Vercel/Netlify (avec build), ou hébergeur classique.
2. Préparer le repo : push sur `main`, README.md.
3. Déployer et configurer le build.
4. Vérifier : desktop/mobile/tablette, liens, formulaires, vitesse, HTTPS.

### Valorisation
- Publier sur LinkedIn (contexte, choix techniques, apprentissages, captures, lien).
- Ajouter le portfolio : bio GitHub, CV (lien actif), profils freelance/pro.
- Contacter directement des professionnels/recruteurs avec message personnalisé.
- Tenir à jour le portfolio avec les futurs projets/formations.

---

## Livrables et soutenance

### Livrables
- Lien du portfolio en ligne, dans un document texte converti en PDF.
- Déposer dans un ZIP nommé `Titre_du_projet_Nom_Prénom`, fichiers nommés `Nom_Prénom_n°_nom-du-livrable_mmaaa` (ex. `LeFaucheur_Loic_1_portfolio_mmaaa`).

### Soutenance (30 minutes)
- **Présentation (15 min, ±5 min, strict)** : architecture globale, 2 projets de formation valorisés, pitch personnel, choix techniques (full-code/low-code, outils), optimisation SEO/accessibilité/perf, initiatives personnelles complémentaires.
- **Discussion (10 min)** : questions sur les choix (structure, design system, projet le plus représentatif, plus grande difficulté technique, usage de l'IA).
- **Débrief (5 min)** : retour d'expérience, hors jeu de rôle.

---

## Points clés à retenir pour la soutenance
- Savoir justifier **chaque** choix technique et de design.
- Savoir expliquer précisément l'usage fait de l'IA sur ce projet.
- Respecter le timing (15 min ±5, en dehors = refusé).
