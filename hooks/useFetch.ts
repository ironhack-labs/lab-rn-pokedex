import axios, {AxiosInstance} from 'axios';
import { useEffect, useState } from 'react';
import { usePokemons } from '../src/hooks/usePokemons';

type RequestItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  id: string;
  image: string;
  type: string;
  abilities: Object[];
};

type GetResponse = {
  results: RequestItem[];
};

const pokemonAxiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar', Accept: 'application/json'},
});

export const useFetch: Promise<Pokemon[]> = () => {
  const {addPokemons, pokemons} = usePokemons();
  useEffect(() => {
    const fetchData =async () => {
      try {
        const {data} = await pokemonAxiosInstance.get<GetResponse>(
          `?limit=151`,
        );
    
        const fetchDetails: Promise<Pokemon> = async (id: string) =>
          await pokemonAxiosInstance.get<GetResponse>(`/${id}/`);
    
        const ids = data?.results.map(async (item: RequestItem) => {
          const id = item.url.split('/').slice(-2, -1)[0];
          return id;
        });

        const pokemons = await Promise.all(ids.map(id => fetchDetails(id)));
        addPokemons(pokemons);
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
      fetchData();
    }
  },[]);
  return pokemons;
};
