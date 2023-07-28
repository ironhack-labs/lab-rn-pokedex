import {useReducer} from 'react';
import type {Pokemon, PokemonDetails} from '../../models';

import {
  PokemonState,
  pokemonReducer,
  initialPokemonState,
  POKEMON_TYPES,
} from './pokemon-reducer';

type PokemonContextActions = {
  setPokemons: (pokemons: Pokemon[]) => void;
  setPokemonDetails: (pokemon: PokemonDetails) => void;
  addPokemon: (pokemon: Pokemon) => void;
};

export type PokemonContext = PokemonState & PokemonContextActions;

export const initialContextValue: PokemonContext = {
  ...initialPokemonState,
  setPokemons: () => null,
  setPokemonDetails: () => null,
  addPokemon: () => null,
};

export const useContextPokemon = () => {
  const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);

  const storeActions: PokemonContextActions = {
    setPokemons: (pokemons: Pokemon[]) => {
      dispatch({type: POKEMON_TYPES.SET_POKEMONS, payload: {pokemons}});
    },
    setPokemonDetails: (pokemon: PokemonDetails) => {
      dispatch({type: POKEMON_TYPES.SET_POKEMON_DETAIL, payload: {pokemon}});
    },
    addPokemon: (pokemon: Pokemon) => {
      dispatch({type: POKEMON_TYPES.ADD_POKEMON, payload: {pokemon}});
    },
  };

  return {
    ...state,
    ...storeActions,
  } as PokemonContext;
};
