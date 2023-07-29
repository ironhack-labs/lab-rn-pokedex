import React, {createContext, useContext, useReducer, useEffect} from 'react';
import {useGetPokemons} from '../hooks/useGetPokemons';
import {Pokemon} from './pokemon-type';

export type DataT = {
  name: string;
  url: string;
};

export type CustomPokemonT = {
  id: string;
  image: string;
  name: string;
  type: string;
  abilities: string;
};

type PokedexState = {
  pokemons: DataT[];
  customPokemons: CustomPokemonT[];
  addPokemons: (pokemons: DataT[]) => void;
  addCustomPokemon: (pokemon: CustomPokemonT) => void;
};

type AppState = {
  pokemons: DataT[];
  customPokemons: CustomPokemonT[];
};

type Action =
  | {type: 'REMOVE_POKEMON'; payload: Pokemon}
  | {type: 'ADD_POKEMONS'; payload: DataT[]}
  | {type: 'ADD_CUSTOM_POKEMON'; payload: CustomPokemonT};

const initialState = {pokemons: [], customPokemons: []};
const initialAppValue: PokedexState = {
  pokemons: [],
  customPokemons: [],
  addPokemons: (pokemons: DataT[]) => {},
  addCustomPokemon: (pokemon: CustomPokemonT) => {},
};

const pokedexReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'ADD_CUSTOM_POKEMON':
      return {
        ...state,
        customPokemons: [...state.customPokemons, action.payload],
      };
    default:
      break;
  }
  return state;
};

const PokedexContext = createContext<PokedexState>(initialAppValue);

export const PokedexProvider = ({children}: {children: React.ReactNode}) => {
  const [{pokemons, customPokemons}, dispatch] = useReducer(
    pokedexReducer,
    initialState,
  );
  const {pokemons: pokemonsResult, loading} = useGetPokemons();

  const addCustomPokemon = (pokemon: CustomPokemonT) => {
    dispatch({type: 'ADD_CUSTOM_POKEMON', payload: pokemon});
  };

  const addPokemons = (pokemons: DataT[]) => {
    dispatch({type: 'ADD_POKEMONS', payload: pokemons});
  };

  const value = {pokemons, customPokemons, addCustomPokemon, addPokemons};

  useEffect(() => {
    if (!loading && pokemonsResult) {
      addPokemons(pokemonsResult);
    }
  }, [pokemonsResult, loading]);

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
};

export const usePokedex = () => {
  const context = useContext(PokedexContext);
  if (!context) {
    throw new Error('usePokedex debe ser utilizado dentro de PokedexProvider');
  }
  return context;
};
