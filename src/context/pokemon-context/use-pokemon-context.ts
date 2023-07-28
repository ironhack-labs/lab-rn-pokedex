import {useReducer} from 'react';
import type {Pokemon, CustomPokemon} from '../../models';

import {
  PokemonState,
  pokemonReducer,
  initialPokemonState,
  POKEMON_TYPES,
} from './pokemon-reducer';

type PokemonContextActions = {
  setPokemons: (pokemons: Pokemon[]) => void;
  setCustomPokemon: (pokemon: CustomPokemon) => void;
};

export type PokemonContext = PokemonState & PokemonContextActions;

export const initialContextValue: PokemonContext = {
  ...initialPokemonState,
  setPokemons: () => null,
  setCustomPokemon: () => null,
};

export const useContextPokemon = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);

  const storeActions: PokemonContextActions = {
    setPokemons: (pokemons: Pokemon[]) => {
      dispatch({type: POKEMON_TYPES.SET_POKEMONS, payload: {pokemons}});
    },
    setCustomPokemon: (pokemon: CustomPokemon) => {
      dispatch({type: POKEMON_TYPES.SET_CUSTOM_POKEMON, payload: {pokemon}});
    },
  };

  return {
    ...state,
    ...storeActions,
  } as PokemonContext;
};
