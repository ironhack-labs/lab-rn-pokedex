import type {Pokemon} from '../../models';

export type PokemonState = {
  pokemons: Pokemon[];
};

export const initialPokemonState: PokemonState = {
  pokemons: [],
};

export enum POKEMON_TYPES {
  ADD_POKEMON = 'ADD_POKEMON',
}

type AddPokemonAction = {
  type: POKEMON_TYPES.ADD_POKEMON;
  payload: {pokemon: Pokemon};
};

type PokemonTypeActions = AddPokemonAction;

export const pokemonReducer = (
  state: PokemonState,
  action: PokemonTypeActions,
): PokemonState => {
  switch (action.type) {
    case POKEMON_TYPES.ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons].concat(action.payload.pokemon),
      };
    default:
      return state;
  }
};
