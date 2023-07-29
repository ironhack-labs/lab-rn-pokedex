import React, {ReactNode, createContext, useContext} from 'react';

import {
  PokemonContext,
  useContextPokemon,
  initialContextValue,
} from './use-pokemon-context';
import {useGetPokemons} from '../../hooks';

const pokemonContext = createContext<PokemonContext>(initialContextValue);

export const PokemonProvider = ({children}: {children: ReactNode}) => {
  const ctxValue = useContextPokemon();
  const {loading} = useGetPokemons({
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
