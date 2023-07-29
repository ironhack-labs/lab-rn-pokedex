import axios from 'axios';
import {useEffect, useState} from 'react';
import {Pokemon} from '../context/pokemon-type';

/** get pokemons custom hook */
export const useGetPokemonDetail = (name: string, url: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseInfo = await axios.get(url);
        const info = responseInfo.data;

        //This url throws 404 https://pokeres.bastionbot.org/images/pokemon/${id}.png

        setPokemon({...info, name});
        setLoading(false);
      } catch (error) {
        throw new Error('Error when consulting pokemon detail!');
      }
    };

    fetchData();
  }, []);

  return {pokemon, loading};
};
