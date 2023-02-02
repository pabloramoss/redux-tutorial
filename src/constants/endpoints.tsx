const BASE_URL = "https://rickandmortyapi.com/api/";
const ENDPOINTS = {
  characters: "character",
  locations: "location",
  episodes: "episode",
};
const API = {
  characters: `${BASE_URL}${ENDPOINTS.characters}`,
  locations: `${BASE_URL}${ENDPOINTS.locations}`,
  episodes: `${BASE_URL}${ENDPOINTS.episodes}`,
};

export {API, ENDPOINTS};
