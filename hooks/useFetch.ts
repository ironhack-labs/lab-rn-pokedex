import axios, {AxiosInstance} from 'axios';
import {useEffect} from 'react';
import {usePokemons} from '../src/hooks/usePokemons';

type RequestItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  id: string;
  image: string;
  type: string;
  abilities: string[];
};

type ApiPokemon = {
  name: string;
  types: {type: {name: string}}[];
  id: number;
  abilities: {ability: []}[];
};

name: pok.name,
type: pok.types[0].type.name,
id: pok.id.toString(),
image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`,
abilities: pok.abilities.map(ab => ab.ability.name),

type GetResponse = {
  results: RequestItem[];
};

const pokemonAxiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar', Accept: 'application/json'},
});

export const useFetch = () => {
  const {addPokemons, pokemons} = usePokemons();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await pokemonAxiosInstance.get<GetResponse>(`?limit=20`);

        const fetchDetails = async (id: string) => {
          const {data} = await pokemonAxiosInstance.get<GetResponse>(`/${id}/`);
          return data;
        };

        const ids = data?.results.map((item: RequestItem) => {
          const id = item.url.split('/').slice(-2, -1)[0];
          return id;
        });

        const pokemons = await Promise.all(ids.map(id => fetchDetails(id)));
        const mappedPokemons = pokemons.map(pok => {
          return {
            name: pok.name,
            type: pok.types[0].type.name,
            id: pok.id.toString(),
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`,
            abilities: pok.abilities.map(ab => ab.ability.name),
          };
        });

        addPokemons(mappedPokemons);
        //        const pokemon = await fetchDetails(id);
        //      console.log('poke: ', pokemon.data.name);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    };
    fetchData();
  }, []);
  return pokemons;
};
