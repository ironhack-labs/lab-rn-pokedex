// src/context/PokemonContext.tsx
import React, {createContext, useEffect, useReducer} from 'react';
import {Pokemon} from '../types';

type Action =
  | {type: 'FETCH_POKEMONS'; payload: Pokemon[]}
  | {type: 'ADD_POKEMON'; payload: Pokemon};

type State = {
  pokemons: Pokemon[];
};

type PokemonContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const PokemonContext = createContext<PokemonContextType>({
  state: {pokemons: []},
  dispatch: () => {},
});

const pokemonReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_POKEMONS':
      return {...state, pokemons: action.payload};
    case 'ADD_POKEMON':
      return {...state, pokemons: [...state.pokemons, action.payload]};
    default:
      return state;
  }
};

const PokemonProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(pokemonReducer, {pokemons: []});

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=151',
        );
        const data = await response.json();
        dispatch({type: 'FETCH_POKEMONS', payload: data.results});
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{state, dispatch}}>
      {children}
    </PokemonContext.Provider>
  );
};

export {PokemonContext, PokemonProvider};
