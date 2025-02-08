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

Create the base files needed for a React + Javascript + Bootstrap 5.3 frontend project. Setup should be as simple as possible.

> Il a créé une base mais certaines de fichiers sont écrits à l'envers, avec les imports à la fin. J'ai pu faire un npm install et la compilation webpack marche du premier coup. J'ai mettre à l'endroit index.js et App.js, et renommer App.js en App.jsx.

Knowing we are using bootstrap 5, display a giant welcome text in the center of the screen. It should adapt to desktop and mobile display. Prepare the fact that we will be able to switch from dark to light mode.

> OK

At page load, and each time the "reload" button on app is pressed, fetch a joke on the joke API. You should create a separate file for the joke service, to respect separation of concern. 

Here is an exemple of the joke API : 

fetch('https://v2.jokeapi.dev/joke/Any')
  .then(response => response.json())
  .then(data => {
    console.log(`Joke: ${data.joke}`);
  });


And here is the URL you should use : https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single

> OK

Replace the big welcome text with the loaded joke

> OK

Create a new component that display the image of a cat randomly fetch from the cat API.

Example usage of that cat API :

fetch('https://api.thecatapi.com/v1/images/search') .then(response => response.json()) .then(data => { const imageUrl = data[0].url; console.log(Here's a random cat image: ${imageUrl}); });

In the same way we created a jokeService, please create a cat service for fetching data. Display the cat above the joke.

> OK

The cat is sometimes too big, please make sure it fits nicely in the page. Also, please reload the cat image when pressing the reload button