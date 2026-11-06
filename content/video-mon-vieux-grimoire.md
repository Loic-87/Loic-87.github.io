# Vidéo de démo — Mon Vieux Grimoire

Objectif : une vidéo de **2 à 3 minutes** qui montre que l'API fonctionne vraiment, de bout en bout, et ce qui se passe côté serveur. Elle remplace une démo en ligne (le brief OpenClassrooms accepte « repo / démo / vidéo »).

## Avant d'enregistrer

1. **Lancer l'API** (dossier `Mon-vieux-grimoire_Mon-projet`) : `npm install` puis `npm start` (ou `nodemon`), avec ton `.env` (connexion MongoDB, clé JWT).
2. **Lancer le front React fourni par OpenClassrooms** et vérifier qu'il parle bien à ton API.
3. **Partir d'une base propre** : un ou deux livres déjà présents, pas de données perso visibles.
4. Préparer une image de couverture (JPEG ou PNG, 1 à 2 Mo) pour montrer la conversion en WebP.
5. Fermer les onglets et notifications. Ne jamais filmer le fichier `.env`.

## Réglages OBS (gratuit : obsproject.com)

- Source : « Capture de fenêtre » du navigateur (plus propre que tout l'écran), plus une deuxième pour le terminal ou Postman.
- Sortie : 1920×1080, 30 i/s, format **MP4**.
- Micro facultatif : une voix off courte aide beaucoup, sinon ajoute des sous-titres au montage.

## Déroulé (plan de tournage)

| # | Durée | À l'écran | Ce que ça prouve |
| --- | --- | --- | --- |
| 1 | 10 s | Titre « Mon Vieux Grimoire — API REST Node/Express/MongoDB » | Le contexte |
| 2 | 20 s | **Inscription** puis **connexion** dans le front ; onglet Réseau des DevTools : réponse avec le `token` | Auth JWT, mots de passe hashés (bcrypt) |
| 3 | 30 s | **Ajout d'un livre** avec image ; puis le dossier `images/` : le fichier est en **.webp** et léger | Multer + Sharp, éco-conception |
| 4 | 20 s | **Noter** un livre ; la note moyenne se met à jour ; page « mieux notés » | Logique métier côté serveur |
| 5 | 20 s | **Modifier** puis **supprimer** son livre ; l'image disparaît du dossier | CRUD complet, nettoyage des fichiers |
| 6 | 20 s | Postman : `DELETE` ou `PUT` sur le livre **d'un autre utilisateur** → **403** ; sans token → **401** | Sécurité des routes |
| 7 | 15 s | Envoyer plusieurs connexions ratées d'affilée → **429 Too Many Requests** | express-rate-limit |
| 8 | 10 s | En-têtes de réponse dans les DevTools (posés par Helmet) | En-têtes HTTP de sécurité |
| 9 | 5 s | Écran final : lien du repo GitHub | — |

Astuce : enregistre chaque étape séparément, c'est plus simple à refaire puis à monter (Clipchamp, déjà sur Windows, suffit).

## Publier la vidéo

- **YouTube en « Non répertoriée »** : seules les personnes qui ont le lien la voient. C'est le plus simple.
- Ou un **MP4 léger** (moins de 20 Mo) dans `public/videos/` du portfolio.

Ensuite, ajouter le lien dans `src/data/projects.js`, sur le projet `mon-vieux-grimoire` :

```js
video: 'https://youtu.be/xxxxxxxxxxx',
```

Le bouton « Voir la vidéo de démo » apparaît alors sur la fiche, et « Vidéo » sur la carte.
