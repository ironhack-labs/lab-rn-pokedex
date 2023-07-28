// src/context/PokemonContext.tsx
import React, { createContext, useReducer } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface State {
  pokemons: Pokemon[];
  newPokemon: Pokemon | null;
}

type Action =
  | { type: 'SET_POKEMONS'; payload: Pokemon[] }
  | { type: 'ADD_NEW_POKEMON'; payload: Pokemon };

const initialState: State = {
  pokemons: [],
  newPokemon: null,
};

const pokemonReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload };
    case 'ADD_NEW_POKEMON':
      return { ...state, newPokemon: action.payload };
    default:
      return state;
  }
};

const PokemonContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  {} as any
);

const PokemonProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
