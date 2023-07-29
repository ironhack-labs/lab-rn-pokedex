import axios from 'axios';
import {useEffect, useState} from 'react';
import {DataT} from '../context/context';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

/** get pokemons custom hook */
export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<DataT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('pokemon?limit=151');

        setPokemons(response.data.results);
        setLoading(false);
      } catch (error) {
        throw new Error('Error when consulting list of pokemons!');
      }
    };

    fetchData();
  }, []);

  return {pokemons, loading};
};
