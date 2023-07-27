import type {Pokemon} from '../../models';

export type PokemonState = {
  pokemons: Pokemon[];
};

export const initialPokemonState: PokemonState = {
  pokemons: [],
};

export enum POKEMON_TYPES {
  SET_POKEMONS = 'SET_POKEMONS',
  ADD_POKEMON = 'ADD_POKEMON',
}

type SetPokemonsAction = {
  type: POKEMON_TYPES.SET_POKEMONS;
  payload: {pokemons: Pokemon[]};
};

type AddPokemonAction = {
  type: POKEMON_TYPES.ADD_POKEMON;
  payload: {pokemon: Pokemon};
};

type PokemonTypeActions = SetPokemonsAction | AddPokemonAction;

export const pokemonReducer = (
  state: PokemonState,
  action: PokemonTypeActions,
): PokemonState => {
  switch (action.type) {
    case POKEMON_TYPES.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    case POKEMON_TYPES.ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons].concat(action.payload.pokemon),
      };
    default:
      return state;
  }
};
