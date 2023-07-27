import axios from 'axios';

// NOTE: this should be an env var
const API_URL = 'https://pokeapi.co/api/v2';

// NOTE: I use this kind of scafolding in case the api needs interceptors
export const pokemonAPI = axios.create({
  baseURL: API_URL,
});
