import React, {ReactNode, createContext, useContext} from 'react';
import {
  PokemonContext,
  useContextPokemon,
  initialContextValue,
} from './use-pokemon-context';

const pokemonContext = createContext<PokemonContext>(initialContextValue);

export const PokemonProvider = ({children}: {children: ReactNode}) => {
  const ctxValue = useContextPokemon();

  return (
    <pokemonContext.Provider value={ctxValue}>
      {children}
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
