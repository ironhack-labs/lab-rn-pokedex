import axios from 'axios';
import { PokeInfo } from '../interface/PokeTypes';
import { Pokemon } from '../interface/PokeDescription';


export async function fetchPokemon() {
    try {
        const { data } = await axios.get<{ results: PokeInfo[] }>(
            "https://pokeapi.co/api/v2/pokemon?limit=151",
            {
                headers: {
                    Accept: "application/json"
                }
            }
        );

        return data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return [];
        } else {
            console.log("unexpected error: ", error);
            return []
        }
    }
}

export async function fetchPokemonDescription(url: string) {
    try {
        const { data } = await axios.get<Pokemon>(
            url,
            {
                headers: {
                    Accept: "application/json"
                }
            }
        );
        console.log(data.sprites.front_default)
        return data;
    } catch (error) {
        return null;
    }

}
