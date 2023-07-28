// src/context/PokemonContext.tsx
import React, {createContext, useEffect, useReducer} from 'react';
import {Pokemon} from '../types';

type Action =
  | {type: 'FETCH_POKEMONS'; payload: Pokemon[]}
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'UPDATE_POKEMON'; payload: Pokemon}; // Add this action type

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
    case 'UPDATE_POKEMON':
      const updatedPokemons = state.pokemons.map(pokemon =>
        pokemon.name === action.payload.name ? action.payload : pokemon,
      );
      return {...state, pokemons: updatedPokemons};
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
        const pokemons = data.results.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url,
          id: parseInt(pokemon.url.split('/').slice(-2, -1)[0], 10), // Extracting the ID from the URL
          image: '', // Placeholder for the image URL
          type: '', // Placeholder for the type
          abilities: '', // Placeholder for the abilities
        }));
        dispatch({type: 'FETCH_POKEMONS', payload: pokemons});
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
