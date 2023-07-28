import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import useFetch from '../hooks/useFetch';
import {Pokemon} from '../types';

type Action =
  | {type: 'SET_POKEMON_LIST'; payload: Pokemon[]}
  | {type: 'ADD_POKEMON'; payload: Pokemon}
  | {type: 'SET_SELECTED_POKEMON'; payload: Pokemon | null};

type State = {
  pokemonList: Pokemon[];
  myPokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
};

type PokemonContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
  addPokemon: (pokemon: Pokemon) => void;
};

const PokemonContext = createContext<PokemonContextType>({
  state: {pokemonList: [], selectedPokemon: null, myPokemons: []},
  dispatch: () => null,
  addPokemon: () => {},
});

const pokemonReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return {...state, pokemonList: action.payload};
    case 'ADD_POKEMON':
      return {...state, myPokemons: [...state.myPokemons, action.payload]};
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

  useEffect(() => {
    if (data) {
      const pokemonList: Pokemon[] = data.results.map(
        (pokemon: any, index: number) => ({
          name: pokemon.name,
          id: index + 1,
          image: `https://pokeres.bastionbot.org/images/pokemon/${
            index + 1
          }.png`,
          type: '',
          abilities: [],
        }),
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

  return (
    <PokemonContext.Provider value={{state, dispatch, addPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
