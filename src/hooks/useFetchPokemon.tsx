import axios from 'axios';
import { PokeInfo } from '../interface/PokeTypes';


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
