import { createContext } from "react";
import { pokeContext } from "../types/types"

export const initialState = {
    pokemon: [] || null,
    addPokemon: () => { }
}

export const pokemonContext = createContext<pokeContext>(initialState);