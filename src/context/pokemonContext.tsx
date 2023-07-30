import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import useFetch from '../hooks/UseFetch';
import {Pokemon} from '../types/types';

type Action =
  | {type: 'SET_POKEMON_LIST'; payload: Pokemon[]}
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'SET_SELECTED_POKEMON'; payload: Pokemon | null};

type State = {
  pokemonList: Pokemon[];
  myPokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
};

type PokemonDetails = {
  name: string;
  id: number;
  url: string;
};

type PokemonContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  fetchPokemonImage: (pokemon: PokemonDetails) => Promise<string>;
  addPokemon: (pokemon: Pokemon) => void;
  selectPokemon: (pokemon: Pokemon) => void;
};

const PokemonContext = createContext<PokemonContextType>({
  state: {pokemonList: [], selectedPokemon: null, myPokemons: []},
  dispatch: () => null,
  fetchPokemonImage: async () => '',
  addPokemon: () => {},
  selectPokemon: () => {},
});

const pokemonReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return {...state, pokemonList: action.payload};
    case 'ADD_POKEMON':
      return {...state, myPokemons: [action.payload, ...state.myPokemons]};
    case 'SET_SELECTED_POKEMON':
      return {...state, selectedPokemon: action.payload};
    default:
      return state;
  }
};

export const PokemonProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemonList: [],
    myPokemons: [],
    selectedPokemon: null,
  });

  const {data} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  const fetchPokemonImage = async (
    pokemon: PokemonDetails,
  ): Promise<string> => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data.sprites.front_default;
  };

  useEffect(() => {
    if (data) {
      const pokemonList: Pokemon[] = data.results.map(
        (pokemon: any) => {
          const id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          return {
            name: pokemon.name,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            type: [],
            abilities: [],
          };
        },
      );

      dispatch({type: 'SET_POKEMON_LIST', payload: pokemonList});
    }
  }, [data]);

  const addPokemon = (pokemon: Pokemon) => {
    dispatch({
      payload: pokemon,
      type: 'ADD_POKEMON',
    });
  };

  const selectPokemon = (pokemon: Pokemon) => {
    dispatch({
      payload: pokemon,
      type: 'SET_SELECTED_POKEMON',
    });
  };

  return (
    <PokemonContext.Provider
      value={{state, dispatch, fetchPokemonImage, addPokemon, selectPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
