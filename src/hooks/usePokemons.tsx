import { useContext } from "react";
import { AppContext } from "../navigation/context";

export const usePokemons = () => {
    const {dispatch, pokemons} = useContext(AppContext);

    const addPokemons = (pokemons: {name: string, id: number}[]) => {
        dispatch({type: "ADD_POKEMONS", payload: pokemons});
    };

    return {addPokemons, pokemons};
};