# canard-break

Projet de génération de code avec VSCode + copilot + o3-mini.

Toutes les étapes seront documentées.

## Specs
Le but du site est de proposer une petite page où les gens peuvent prendre un break et se changer les idées.

- Affiche un chat aléatoire et une blague en français
- Affiche un bouton pour reload
- Mode dark ou light sous bootstrap 5
- Affiche un champ où l'utilisateur peut laisser une note, qui sera restorée à la prochaine visite
- Affiche la date de dernière visite (relative : il y a 5 minutes, 3 jours, etc) et un message en fonction depuis combien de temps ça fait

React + Javascript + Bootstrap 5

## Directives Copilot

> Create the base files needed for a React + Javascript + Bootstrap 5.3 frontend project. Setup should be as simple as possible.

Il a créé une base mais certaines de fichiers sont écrits à l'envers, avec les imports à la fin. J'ai pu faire un npm install et la compilation webpack marche du premier coup. J'ai mettre à l'endroit index.js et App.js, et renommer App.js en App.jsx.