# Démos des jeux (code privé)

Les repos des projets perso sont privés. Pour que les jeux restent jouables, leur version **compilée et minifiée** est copiée dans `public/jeux/` et publiée avec le portfolio sur Netlify :

| Jeu | Adresse | Repo (privé) |
| --- | --- | --- |
| Neon Defense | `/jeux/neon-defense/` | `C:\Users\oprob\dev\neon-defense` |
| Démineur Antivirus | `/jeux/demineur/` | `C:\Users\oprob\dev\demineur-antivirus` |
| TRON Light Cycles | `/jeux/tron/` | `C:\Users\p c\Desktop\codage\tron` (dépôt `tron-neon` à créer) |

Rappel : le JavaScript d'un jeu web est toujours téléchargé par le navigateur. La minification le rend illisible en pratique, mais ne le cache pas complètement. Ce qui reste privé, c'est le code source propre (commentaires, structure, historique Git).

## Mettre à jour une démo après une modification du jeu

Depuis le dossier du portfolio (PowerShell), puis commit + push du portfolio :

```powershell
# Neon Defense (pas de Vite dans le jeu : on utilise celui du portfolio)
cd C:\Users\oprob\dev\neon-defense
node "C:\Users\oprob\OneDrive\Bureau\test portfolio\Loic-87.github.io\node_modules\vite\bin\vite.js" build . --base=/jeux/neon-defense/ --outDir "C:\Users\oprob\OneDrive\Bureau\test portfolio\Loic-87.github.io\public\jeux\neon-defense" --emptyOutDir

# Démineur Antivirus
cd C:\Users\oprob\dev\demineur-antivirus
npx vite build --base=/jeux/demineur/ --outDir "C:\Users\oprob\OneDrive\Bureau\test portfolio\Loic-87.github.io\public\jeux\demineur" --emptyOutDir
```

Ne jamais activer les source maps (`build.sourcemap`) : elles permettraient de retrouver le code d'origine.

### TRON Light Cycles

Le jeu tient dans un seul `index.html` (pas de Vite). Son script `build-demo.mjs` minifie le JS et le CSS avec les outils du portfolio (rolldown et lightningcss, fournis avec Vite) et écrit la démo dans `public/jeux/tron/`, avec un `config.js` qui désactive le classement en ligne (le serveur n'est pas encore hébergé : la démo l'indique au lieu d'essayer de s'y connecter). Le multijoueur en ligne entre amis fonctionne quand même.

```powershell
cd "C:\Users\p c\Desktop\codage\tron"
node build-demo.mjs "C:\Users\p c\Desktop\codage\portfolio"
```

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
