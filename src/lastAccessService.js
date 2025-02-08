export default function fetchLastAccessConfig() {
  return fetch('./lastAccessConfig.json')
    .then(response => response.json());
}
