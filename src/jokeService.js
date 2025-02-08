const API_URL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single';

export default function fetchJoke() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data.joke || 'No joke found.');
}
