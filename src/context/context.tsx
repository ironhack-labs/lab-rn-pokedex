import React, {createContext, useContext, useReducer, useEffect} from 'react';
import {useGetPokemons} from '../hooks/useGetPokemons';
import {Pokemon} from './pokemon-type';

export type DataT = {
  name: string;
  url: string;
};

type PokedexState = {
  pokemons: Array<DataT | Pokemon>;
  addPokemon: (pokemon: Pokemon) => void;
  addPokemons: (pokemons: DataT[]) => void;
};

type AppState = {
  pokemons: Array<DataT | Pokemon>;
};

type Action =
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'REMOVE_POKEMON'; payload: Pokemon}
  | {type: 'ADD_POKEMONS'; payload: DataT[]};

const initialState = {pokemons: []};
const initialAppValue: PokedexState = {
  pokemons: [],
  addPokemon: (pokemon: Pokemon) => {},
  addPokemons: (pokemons: DataT[]) => {},
};

const pokedexReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case 'ADD_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      break;
  }
  return state;
};

const PokedexContext = createContext<PokedexState>(initialAppValue);

export const PokedexProvider = ({children}: {children: React.ReactNode}) => {
  const [{pokemons}, dispatch] = useReducer(pokedexReducer, initialState);
  const {pokemons: pokemonsResult, loading} = useGetPokemons();

  const addPokemon = (pokemon: Pokemon) => {
    dispatch({type: 'ADD_POKEMON', payload: pokemon});
  };

  const addPokemons = (pokemons: DataT[]) => {
    dispatch({type: 'ADD_POKEMONS', payload: pokemons});
  };

  const value = {pokemons, addPokemon, addPokemons};

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
