import {AxiosError} from 'axios';
import {pokemonAPI} from '../../api';
import {useEffect, useState} from 'react';
import type {GetPokemonResponse, Pokemon, PokemonDetails} from '../../models';

type UseGetPokemonsProps = {
  onSuccess?: (pokemons: Pokemon[]) => void;
};

export const useGetPokemons = ({onSuccess}: UseGetPokemonsProps) => {
  const [state, setState] = useState<{
    loading: boolean;
    data: Pokemon[];
    error: string | null;
  }>({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {results: pokemonsResponse},
        } = await pokemonAPI.get<GetPokemonResponse>('/pokemon', {
          params: {limit: 151},
        });
        const getAllPokemonDetails = pokemonsResponse.map(({url}) =>
          pokemonAPI.get<PokemonDetails>(url),
        );
        const pokemonsDetails = await Promise.all(getAllPokemonDetails);

        const pokemons = pokemonsDetails.map(({data: pokemon}) => {
          const {id, name, ...detail} = pokemon;

          return {
            id,
            name,
            detail,
            // thumbnail: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            // NOTE: this is a patch since femsa VPN blocks the other image domain
            thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
          };
        }) as Pokemon[];

        onSuccess?.(pokemons);
        setState(prevState => ({
          ...prevState,
          data: pokemons,
          loading: false,
        }));
      } catch (err) {
        let message = 'something gone wrong';

        if (err instanceof Error || err instanceof AxiosError) {
          message = err.message;
        }

        setState(prevState => ({
          ...prevState,
          error: message,
          loading: false,
        }));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
