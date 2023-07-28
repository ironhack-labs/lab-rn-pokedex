import type {Pokemon, PokemonDetails} from '../../models';

export type PokemonState = {
  pokemons: Pokemon[];
};

export const initialPokemonState: PokemonState = {
  pokemons: [],
};

export enum POKEMON_TYPES {
  SET_POKEMONS = 'SET_POKEMONS',
  ADD_POKEMON = 'ADD_POKEMON',
  SET_POKEMON_DETAIL = 'SET_POKEMON_DETAIL',
}

type SetPokemonsAction = {
  type: POKEMON_TYPES.SET_POKEMONS;
  payload: {pokemons: Pokemon[]};
};

type SetPokemonDetailAction = {
  type: POKEMON_TYPES.SET_POKEMON_DETAIL;
  payload: {pokemon: PokemonDetails};
};

type AddPokemonAction = {
  type: POKEMON_TYPES.ADD_POKEMON;
  payload: {pokemon: Pokemon};
};

type PokemonTypeActions =
  | SetPokemonsAction
  | SetPokemonDetailAction
  | AddPokemonAction;

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
    case POKEMON_TYPES.SET_POKEMON_DETAIL:
      return {
        ...state,
        pokemons: state.pokemons.map(pokemon => {
          const pokemonDetails = action.payload.pokemon;
          if (pokemon.id === pokemonDetails.id) {
            return {
              ...pokemon,
              detail: pokemonDetails,
            };
          }
          return pokemon;
        }),
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
