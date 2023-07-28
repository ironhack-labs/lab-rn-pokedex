import { Pokemon } from "./PokeDescription";

export type PokeInfo = {
    name: string;
    url: string;
    description: Pokemon | null;
}
