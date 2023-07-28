import React, { createContext, useContext, useReducer } from "react";
import { fetchPokemon, fetchPokemonDescription } from "../hooks/useFetchPokemon";
import { PokeInfo } from "../interface/PokeTypes";



export type PokeReducerState = {
    pokeInfo: PokeInfo[]
}

type Action =
    | {
        type: 'FETCH_POKEMON',
        payload: PokeInfo[]
    };

export type PokemonState = {
    pokeInfo: PokeInfo[] | [];
    fetchPoke: () => void;
}

const initialPokeState = {
    pokeInfo: [], fetchPoke: () => { }
}

const PokeContext = createContext<PokemonState>(initialPokeState);

const PokeReducer = (state: PokeReducerState, action: Action): PokeReducerState => {
    switch (action.type) {
        case 'FETCH_POKEMON':
            console.log('fetch?')
            return { ...state, pokeInfo: action.payload }
        default:
            return state;
    }
}

export const PokeProvider = ({ ...props }) => {

    const [{ pokeInfo }, dispatch] = useReducer(PokeReducer, initialPokeState);

    const fetchPoke = async () => {
        console.log("poke fetch")
        const response: PokeInfo[] = await fetchPokemon()
        let auxPokeArray: PokeInfo[]
        response.map(async (poke)=>{
            auxPokeArray.push({name: poke.name, url: poke.url, description: await fetchPokemonDescription(poke.url)})
        })
        dispatch({ type: 'FETCH_POKEMON', payload: response })
    };

    const value = { pokeInfo, fetchPoke }

    return (<PokeContext.Provider {...props} value={value} />)
}

export const usePokeContextProvider = () => {
    const contextPoke = useContext(PokeContext);
    if (!contextPoke) {
        throw new Error('Error in context provider')
    }
    return contextPoke;
}