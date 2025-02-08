export default function fetchCat() {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => data[0].url);
}
