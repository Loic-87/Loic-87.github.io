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
