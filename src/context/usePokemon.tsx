import React, { createContext, useContext, useReducer } from "react";

export type PokeInfo = {
    name: string;
    url: string;
}
export type PokeDescription = {

}

type PokeReducerState = {
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

    const fetchPoke = () => {
        console.log("poke fetch")
        //TODO: Fecth pokes
        dispatch({ type: 'FETCH_POKEMON', payload: [] })
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