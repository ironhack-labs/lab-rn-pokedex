
import { Pokemon, PokemonDetails } from '../interfaces/Pokemon';
import {PokemonContext, PokemonState} from './PokemonContext';

type CartAction =
  | {type: 'setPokemons'; payload: Pokemon[]}
  | {type: "setPokemonDetails"; paylod: {index: number, details : PokemonDetails}}
  | {type: "addPokemon"; payload: Pokemon}

// generaEstado
export const pokemonReducer = (
  state: PokemonState,
  action: CartAction,
): PokemonState => {
  switch (action.type) {
    case 'setPokemons':
      return {
        ...state,
        items: action.payload
      };
    case 'setPokemonDetails' :
      return {
        ...state,
        items: state.items.map((item, index) => 
          index+1 === action.paylod.index
          ? {...state.items[index+1], details: action.paylod.details}
          : state.items[index+1]
        )
      }
    case 'addPokemon' : 
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    
    default:
      return state;
  }
};
