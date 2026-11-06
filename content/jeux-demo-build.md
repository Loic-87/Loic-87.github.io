# Démos des jeux (code privé)

Les repos des projets perso sont privés. Pour que les jeux restent jouables, leur version **compilée et minifiée** est copiée dans `public/jeux/` et publiée avec le portfolio sur Netlify :

| Jeu | Adresse | Repo (privé) |
| --- | --- | --- |
| Neon Defense | `/jeux/neon-defense/` | `C:\Users\oprob\dev\neon-defense` |
| Démineur Antivirus | `/jeux/demineur/` | `C:\Users\oprob\dev\demineur-antivirus` |

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
