# ADONIS — Plan Canicule · Application installable (PWA)

Ce dossier contient une **Progressive Web App** complète : une fois mise en ligne,
chaque auxiliaire peut l'installer sur l'écran d'accueil de son téléphone, comme
une vraie application, avec fonctionnement hors connexion.

## Contenu du dossier

```
index.html        → l'application
manifest.json      → carte d'identité de l'app (nom, icône, couleurs)
sw.js              → service worker (fonctionnement hors connexion)
icons/             → icônes aux différentes tailles requises
```

Gardez ces 4 éléments **ensemble, dans le même dossier**, sans rien renommer.

## Pourquoi une mise en ligne est nécessaire

Un téléphone ne peut installer une application sur son écran d'accueil que si
elle est servie en **HTTPS** depuis une adresse web. Ce n'est pas spécifique à
ce projet : c'est une règle de sécurité commune à tous les smartphones (Apple
et Android). Il faut donc héberger ces fichiers une seule fois sur un service
gratuit, puis partager le lien obtenu à toute l'équipe.

## Mise en ligne en 5 minutes (gratuit, sans compétence technique)

**Option recommandée — Netlify Drop**
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer ce dossier complet (`pwa/`) dans la page.
3. Un lien du type `https://nom-aleatoire.netlify.app` est généré : c'est le
   lien à partager avec les équipes.

**Autre option — GitHub Pages**
1. Créer un dépôt GitHub et y déposer le contenu de ce dossier.
2. Dans les réglages du dépôt → *Pages*, activer la publication sur la
   branche principale.
3. L'application est disponible à l'adresse fournie par GitHub.

**Autre option — Vercel**
1. Aller sur https://vercel.com/new
2. Importer ou glisser-déposer ce dossier.
3. Récupérer le lien de déploiement.

> Quel que soit l'hébergeur choisi, le lien final est fixe : il peut être
> envoyé par SMS, affiché en QR code, ou ajouté à l'intranet du service.

## Installation sur le téléphone d'un·e auxiliaire

**Android (Chrome)**
1. Ouvrir le lien de l'application.
2. Appuyer sur le menu ⋮ → *Ajouter à l'écran d'accueil* (ou bandeau
   « Installer l'application » qui apparaît automatiquement).
3. L'icône thermomètre apparaît parmi les autres applications.

**iPhone (Safari — obligatoirement Safari, pas Chrome)**
1. Ouvrir le lien de l'application dans Safari.
2. Appuyer sur l'icône de partage (carré avec une flèche).
3. Choisir *Sur l'écran d'accueil*, puis *Ajouter*.

Une fois installée, l'application s'ouvre en plein écran, sans barre de
navigateur, et reste utilisable même sans réseau (les données saisies restent
enregistrées sur l'appareil de chaque utilisateur·rice).

## Mettre à jour l'application plus tard

Si vous modifiez `index.html`, changez le numéro de version dans `sw.js`
(`CACHE_NAME = 'plan-canicule-adonis-v1'` → `v2`) puis redéployez le dossier
sur le même hébergeur : les téléphones récupéreront automatiquement la
nouvelle version au prochain lancement.
