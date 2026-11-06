# Fiches projets — personnels / stage

> Même principe que pour les fiches formation : brouillon à relire et reformuler avec tes mots.

---

## Démineur Antivirus
*Code privé — démo jouable : /jeux/demineur/ — React/Vite*

**Contexte** : Projet personnel pour s'exercer à un algorithme classique (le démineur) en le ré-habillant dans un univers "antivirus" : on scanne un système à la recherche de virus plutôt que de mines.

**Objectifs** : Réimplémenter de zéro la logique du démineur (placement aléatoire, calcul des cases adjacentes, propagation en cascade des cases vides, détection de victoire/défaite) sans librairie, et la rendre jouable aussi bien au clic/clic-droit sur PC qu'au tap/appui-long sur mobile.

**Stack technique** : React (hooks `useState`/`useRef`), Vite, JavaScript pur pour la logique de jeu (module `game.js` découplé de l'UI).

**Compétences développées** : Algorithmique récursive (ouverture en cascade des cases), gestion d'état immuable (`structuredClone` de la grille à chaque action), gestion des interactions tactiles (détection d'un appui long pour poser un drapeau sur mobile, sans librairie dédiée).

**Résultats et impact** : MVP entièrement jouable sur PC et mobile, logique de jeu testée et fiable (grille 9×9, 10 virus).

**Perspectives d'amélioration** : Ajouter des niveaux de difficulté, un chronomètre, et une couche "roguelike" (power-ups) envisagée comme évolution du projet.

---

## Le Comptoir de la Moto
*Code privé — projet réalisé en stage, React/Vite*

**Contexte** : Projet réalisé en stage : un site de petites annonces façon Leboncoin, mais entièrement dédié à la moto — un choix assumé car passionné de moto, pour donner une vraie identité au projet plutôt qu'un clone générique.

**Objectifs** : Construire le parcours complet d'un site d'annonces (liste, recherche, filtres, détail d'une annonce, dépôt d'une annonce) avec un design system sur-mesure pensé pour le secteur moto (filtres par cylindrée, type de moto, permis requis).

**Stack technique** : React 19, React Router v7, Vite, CSS avec design system dédié (palette anthracite/or, typographies Rajdhani + Inter).

**Compétences développées** : Conception d'un design system de A à Z (palette couleur selon la règle 60-30-10, choix typographique, composants réutilisables comme la carte d'annonce), structuration d'une arborescence multi-pages avec React Router, modélisation de données métier spécifiques (fiche technique moto : marque, cylindrée, permis, kilométrage...).

**Résultats et impact** : MVP front fonctionnel avec liste d'annonces, filtres, page détail et formulaire de dépôt sur données de démonstration.

**Perspectives d'amélioration** : Backend Node.js pour persister les annonces et les comptes utilisateurs, authentification, et une fonctionnalité d'OCR pour scanner la carte grise et pré-remplir automatiquement une annonce.

---

## TRON Light Cycles
*Code privé (repo tron-neon à créer en privé) — JavaScript, Three.js, WebRTC, Node.js/Express*

**Contexte** : Projet perso inspiré du film Tron : chaque moto laisse un mur de lumière derrière elle, le dernier survivant gagne. Mené avec un assistant de code IA (Claude Code) : j'ai imaginé le jeu, décidé de chaque fonctionnalité et fait les choix de conception, le code a été écrit et testé avec l'aide de l'IA.

**Objectifs** : Aller au-delà d'un simple jeu solo : trois vues (2D, 3D, poursuite), une IA, un tournoi, un éditeur de circuits, puis un vrai mode multijoueur en ligne entre amis avec un classement qu'on ne peut pas truquer seul.

**Stack technique** : JavaScript sans framework, Canvas 2D, Three.js (3D), Web Audio API (musique et moteurs générés en direct), Gamepad API, WebRTC via PeerJS, Node.js + Express, PostgreSQL (Neon) et SQLite en local.

**Compétences développées** : Boucle de jeu et collisions, IA qui mesure l'espace libre (parcours en largeur), synchronisation d'une partie en ligne (l'hôte calcule, les invités envoient leurs commandes), API REST avec jetons d'authentification, sécurité des données envoyées par les joueurs (validation, échappement contre l'injection de HTML).

**Résultats et impact** : Jeu complet jouable au clavier ou à la manette, jusqu'à 4 pilotes en ligne avec chat et pseudos. Le classement en ligne ne valide une partie que si la majorité des joueurs confirme le même résultat.

**Perspectives d'amélioration** : Mettre le jeu et le serveur en ligne (Render + Neon), ajouter de vrais comptes joueurs et des tests automatisés pour l'API.

---

## Neon Defense
*Code privé — démo jouable : /jeux/neon-defense/ — JavaScript vanilla, Canvas 2D*

**Contexte** : Projet perso autour d'un genre que j'aime, le tower defense : on pose des tours le long d'un chemin pour arrêter des vagues d'ennemis. Mené avec un assistant de code IA (Claude Code) : j'ai défini le jeu, les tours, les ennemis et l'équilibrage, le code a été écrit et testé avec l'aide de l'IA.

**Objectifs** : Construire un jeu complet sans framework ni moteur de jeu (boucle de jeu, déplacement des ennemis le long d'un chemin, ciblage des tours, projectiles, économie d'or) et le rendre jouable à la souris comme au doigt.

**Stack technique** : JavaScript ES6+ en modules (classes, sans dépendance), Canvas 2D pour le rendu et les effets néon, CSS3 pour l'interface (HUD, panneaux, responsive), Pointer Events pour la souris et le tactile.

**Compétences développées** : Boucle de jeu avec `requestAnimationFrame` et pas de temps borné, architecture data-driven (ajouter une tour, un ennemi, une vague ou une carte se fait sans toucher au moteur), géométrie (distance à un segment pour savoir où l'on peut construire), conversion des coordonnées écran vers le canevas pour un affichage responsive.

**Résultats et impact** : Jeu complet et jouable en ligne : 5 tours à 3 niveaux, 5 types d'ennemis (armure, régénération, ralentissement), 10 vagues, 2 cartes, vitesse x2, sur PC et mobile.

**Perspectives d'amélioration** : Nouvelles cartes, un boss, un aperçu de la prochaine vague, des effets sonores et la sauvegarde du meilleur score.

---

## Notes
- Comptoir de la Moto n'a pas encore de repo GitHub (code existe en local, pas encore versionné) — lien à ajouter une fois le repo créé et poussé.
- Menu Maker (projet OCR) : repo introuvable pour l'instant, en attente.
