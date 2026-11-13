# Démos des jeux (code privé)

Depuis le 12/11/2026, les jeux perso ne sont plus dans le portfolio : **chaque jeu a son propre repo GitHub privé et son propre site Netlify**, pour qu'aucune adresse de jeu ne contienne mon nom. Le portfolio garde les fiches projet et leur bouton « Jouer », qui pointe vers le site du jeu. Les anciennes adresses du portfolio (`/jeux/...` et les anciens slugs de fiches) redirigent vers les nouvelles (`netlify.toml`).

Les jeux ont aussi changé de nom (12-13/11/2026) pour des noms inventés : TRON (marque Disney) → **PixelBiker**, Neon Defense → **Stratigon**, Démineur Antivirus → **Quarantix**.

| Jeu | Site Netlify | Repo GitHub (privé) | Dossier local | Comment Netlify le publie |
| --- | --- | --- | --- | --- |
| PixelBiker (ex-TRON) | https://pixelbiker.netlify.app | `Loic-87/pixelbiker` (ex-`tron-neon`) | `C:\Users\oprob\dev\tron-neon` ; akuma `C:\Users\p c\Desktop\codage\tron` | `npm run build` (`build-demo.mjs` : rolldown + lightningcss), publie `dist/` |
| Stratigon (ex-Neon Defense) | https://stratigon.netlify.app | `Loic-87/neon-defense` (à renommer `stratigon`) | `C:\Users\oprob\dev\neon-defense` | `npm run build` (Vite), publie `dist/` |
| Quarantix (ex-Démineur Antivirus) | https://quarantix.netlify.app | `Loic-87/demineur-antivirus` (à renommer `quarantix`) | `C:\Users\oprob\dev\demineur-antivirus` | `npm run build` (Vite), publie `dist/` |

Mettre à jour un jeu = commit + push dans son repo : Netlify recompile et republie tout seul. Rien à faire dans le portfolio.

Rappel : le JavaScript d'un jeu web est toujours téléchargé par le navigateur. La minification le rend illisible en pratique, mais ne le cache pas complètement. Ce qui reste privé, c'est le code source propre (commentaires, structure, historique Git). Ne jamais activer les source maps (`build.sourcemap`).

### PixelBiker (ex-TRON Light Cycles)

« TRON » et « Light Cycles » sont des marques de Disney : le jeu a été renommé dans le code source (titre « PixelBiker », écran d'accueil « PIXEL » / « BIKER »), et le mode de murs « LEGACY » (clin d'œil à *Tron: Legacy*) est devenu « MIRAGE ». Les noms internes (clés `tron-*` du localStorage, `TRON_SERVER`) ne s'affichent nulle part et restent tels quels. Sur le PC akuma, faire un `git pull` avant de retoucher le jeu.

## Démo Kasa (repo public, site compilé dans le portfolio)

Kasa est une SPA React : elle est compilée dans `public/demos/kasa/` et publiée à `/demos/kasa/`. Une règle de `netlify.toml` renvoie ses routes internes vers son propre `index.html`.

Le repo GitHub de Kasa n'est pas modifié : on compile une copie fraîche, en adaptant seulement deux chemins pour le sous-dossier `/demos/kasa/` : `basename={import.meta.env.BASE_URL}` sur le `<BrowserRouter>`, et l'URL du `fetch` des logements préfixée par `import.meta.env.BASE_URL`.

```bash
git clone https://github.com/Loic-87/Kasa-Mon-projet.git kasa-build && cd kasa-build
npm ci
sed -i 's#<BrowserRouter>#<BrowserRouter basename={import.meta.env.BASE_URL}>#' src/router/index.jsx
sed -i 's#fetch(.\/accommodations.json.)#fetch(`${import.meta.env.BASE_URL}accommodations.json`)#' src/services/accommodations.js
npx vite build --base=/demos/kasa/ --outDir "<dossier du portfolio>/public/demos/kasa" --emptyOutDir
```

Attention : le dossier local `C:\Users\oprob\dev\kasa` a divergé du repo GitHub (36 commits locaux, 48 sur GitHub au 2026-11-06). La démo est compilée depuis la version GitHub.

## Autres sites de formation (GitHub Pages)

- Booki : https://loic-87.github.io/Booki-mon-projet/
- Nina Carducci : https://loic-87.github.io/mon-projet-Nina-Carducci/

## Démo Sophie Bluel (front en ligne, API simulée)

Le site a besoin du back-end OpenClassrooms (Node/Express + SQLite), qui n'est pas hébergé. La démo `/demos/sophie-bluel/` est donc le dossier `FrontEnd/` du repo, dans lequel **seul `assets/JS/api.js` est remplacé** par une version qui simule l'API : mêmes fonctions exportées, mêmes formats de réponse. `index.js` et `login.js` sont identiques à l'original.

- Données de départ : les 11 travaux et 3 catégories fournis par OpenClassrooms.
- Connexion admin : `sophie.bluel@test.tld` / `S0phie` (les identifiants de démo publics du README OpenClassrooms). Un bandeau les affiche en bas de page.
- Ajouts et suppressions sont gardés dans `sessionStorage` (jusqu'à la fermeture de l'onglet). Rien n'est envoyé nulle part.
- Les photos ont été converties en JPEG 1000 px max (12 Mo → 1 Mo) ; les chemins dans `api.js` et `index.html` pointent vers les `.jpg`.

Pour mettre à jour : recopier `FrontEnd/` du repo dans `public/demos/sophie-bluel/`, puis remettre le `api.js` simulé (celui actuellement dans `public/demos/sophie-bluel/assets/JS/api.js` — le sauvegarder avant) et reconvertir les images.
