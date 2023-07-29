import type {Pokemon, CustomPokemon} from '../../models';

export type PokemonState = {
  pokemons: Pokemon[];
  customPokemons: Pokemon[];
};

export const initialPokemonState: PokemonState = {
  pokemons: [],
  customPokemons: [],
};

export enum POKEMON_TYPES {
  SET_POKEMONS = 'SET_POKEMONS',
  SET_CUSTOM_POKEMON = 'SET_CUSTOM_POKEMON',
}

type SetPokemonsAction = {
  type: POKEMON_TYPES.SET_POKEMONS;
  payload: {pokemons: Pokemon[]};
};

type SetCustomPokemonAction = {
  type: POKEMON_TYPES.SET_CUSTOM_POKEMON;
  payload: {pokemon: CustomPokemon};
};

type PokemonTypeActions = SetPokemonsAction | SetCustomPokemonAction;

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
    case POKEMON_TYPES.SET_CUSTOM_POKEMON: {
      const customPokemon = action.payload.pokemon;
      const defaultThumbnail =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

      return {
        ...state,
        customPokemons: [...state.customPokemons].concat({
          id: customPokemon.id,
          name: customPokemon.name,
          thumbnail: customPokemon.thumbnail || defaultThumbnail,
          detail: {
            abilities: [
              {
                ability: {
                  name: customPokemon.ability,
                },
              },
            ],
            types: [
              {
                type: {
                  name: customPokemon.type,
                },
              },
            ],
          },
        } as Pokemon),
      };
    }
    default:
      return state;
  }
};
