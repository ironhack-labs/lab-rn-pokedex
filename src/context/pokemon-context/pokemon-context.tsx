import React, {ReactNode, createContext, useContext} from 'react';

import {
  PokemonContext,
  useContextPokemon,
  initialContextValue,
} from './use-pokemon-context';
import {useFetch} from '../../hooks';
import {GetPokemonResponse, Pokemon} from '../../models';

const pokemonContext = createContext<PokemonContext>(initialContextValue);

export const PokemonProvider = ({children}: {children: ReactNode}) => {
  const ctxValue = useContextPokemon();
  const {loading} = useFetch<Pokemon[]>({
    method: 'get',
    url: 'pokemon',
    params: {limit: 151},
    transformResponse: (data: GetPokemonResponse) => {
      if (data?.results) {
        // NOTE: endpoint doesn't return the id, so i get the id by the url, manipulating the response
        return data.results.map(pokemon => {
          // NOTE: this can be risky because I asume that the url have the pokemon ID
          const id = +/(\d+)\/$/.exec(pokemon.url)![1];

          return {
            ...pokemon,
            id,
            // thumbnail: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            // NOTE: this is a patch since femsa VPN blocks the other image domain
            thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        }) as Pokemon[];
      }

      return data;
    },
    onSuccess: pokemons => {
      ctxValue.setPokemons(pokemons);
    },
  });

  return (
    <pokemonContext.Provider value={ctxValue}>
      {loading ? null : children}
    </pokemonContext.Provider>
  );
};

export const usePokemonCtx = () => {
  const ctxValue = useContext(pokemonContext);

  if (!ctxValue) {
    throw new Error('pokemonContext must be use whitin the PokemonProvider');
  }

  return ctxValue;
};
