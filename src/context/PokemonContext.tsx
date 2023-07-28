import React, {createContext, useReducer} from 'react';
import { pokemonReducer } from './pokemonReducer';
import { Pokemon, PokemonForm } from '../interfaces/Pokemon';

export interface PokemonState {
  items: Pokemon[];
}

export const authInitialState: PokemonState = {
  items: [],
};

export interface AuthContextProps {
  pokemonState: PokemonState;
  setPokemonsList: (pokemons : Pokemon[]) => void,
  addPokemon : (pokemon : PokemonForm) => void
}

export const PokemonContext = createContext({} as AuthContextProps);

export const PokemonProvider = ({children}: any) => {
  const [pokemonState, dispatch] = useReducer(pokemonReducer, authInitialState);

  const setPokemonsList = (pokemons : Pokemon[]) => {
    dispatch({type: "setPokemons", payload: pokemons})
  }

  const addPokemon = (pokemon : PokemonForm) => {
    const pokemonInfo : Pokemon = {
      name:pokemon.name,
      id:pokemon.id,
      url: "",
      details: {
        name: pokemon.name,
        types: [
          {slot: 0, type: {url:"", name:pokemon.type}}
        ],
        abilities: [
          {
            ability: {name: pokemon.abilities, url: ""},
            is_hidden: false,
            slot: 1
          }
        ],
        sprites: {
          front_default: pokemon.image
        }
      }
    }
    dispatch({type: "addPokemon", payload: pokemonInfo})
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonState,
        setPokemonsList,
        addPokemon
      }}>
      {children}
    </PokemonContext.Provider>
  );
};
