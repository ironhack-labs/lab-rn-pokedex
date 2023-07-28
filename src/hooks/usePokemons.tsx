import { useContext } from "react";
import { AppContext } from "../navigation/context";

const usePokemons = () => {
    const {dispatch, pokemons} = useContext(AppContext);

    const addPokemons = (pokemons: {name: string, id: number}[]) => {
        dispatch({type: "ADD_POKEMONS", payload: pokemons});
    };

    return {addPokemons, pokemons};
};