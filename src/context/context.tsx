import React, {createContext, useContext, useReducer, Dispatch} from 'react';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: string;
  abilities: string;
};

type PokedexState = {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
};

type AppState = {
  pokemons: Pokemon[];
};

type Action =
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'REMOVE_POKEMON'; payload: Pokemon}
  | {type: 'ADD_POKEMONS'; payload: Pokemon[]};

const initialState = {pokemons: []};
const initialAppValue: PokedexState = {
  pokemons: [],
  addPokemon: (pokemon: Pokemon) => {},
};

const pokedexReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    default:
      break;
  }
  return state;
};

const PokedexContext = createContext<PokedexState>(initialAppValue);

export const PokedexProvider = ({children}: {children: React.ReactNode}) => {
  const [{pokemons}, dispatch] = useReducer(pokedexReducer, initialState);

  const addPokemon = (pokemon: Pokemon) => {
    dispatch({type: 'ADD_POKEMON', payload: pokemon});
  };

  const value = {pokemons, addPokemon};

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
