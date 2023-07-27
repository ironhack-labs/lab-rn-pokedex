import {useReducer} from 'react';
import type {Pokemon} from '../../models';

import {
  PokemonState,
  pokemonReducer,
  initialPokemonState,
  POKEMON_TYPES,
} from './pokemon-reducer';

type PokemonContextActions = {
  addPokemon: (pokemon: Pokemon) => void;
};

export type PokemonContext = PokemonState & PokemonContextActions;

export const initialContextValue: PokemonContext = {
  ...initialPokemonState,
  addPokemon: () => null,
};

export const useContextPokemon = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);

  const storeActions: PokemonContextActions = {
    addPokemon: (pokemon: Pokemon) => {
      dispatch({type: POKEMON_TYPES.ADD_POKEMON, payload: {pokemon}});
    },
  };

  return {
    ...state,
    ...storeActions,
  } as PokemonContext;
};
