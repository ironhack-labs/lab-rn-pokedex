import { useContext } from "react";
import { AppContext } from "../navigation/context";
import { Pokemon } from "./useFetch";

export const usePokemons = () => {
    const {dispatch, pokemons} = useContext(AppContext);

    const addPokemons = (pokemons: Pokemon[]) => {
        dispatch({type: "ADD_POKEMONS", payload: pokemons});
    };

    return {addPokemons, pokemons};
};