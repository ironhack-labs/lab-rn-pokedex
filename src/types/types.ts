
export interface Welcome {
    pokemon: Pokemon[];
}

export interface Pokemon {
    id:              number;
    num:             string;
    name:            string;
    img:             string;
    type:            Type[];
    height:          string;
    weight:          string;
    candy:           string;
    candy_count?:    number;
    egg:             Egg;
    spawn_chance:    number;
    avg_spawns:      number;
    spawn_time:      string;
    multipliers:     number[] | null;
    weaknesses:      Type[];
    next_evolution?: Evolution[];
    prev_evolution?: Evolution[];
}

export enum Egg {
    NotInEggs = "Not in Eggs",
    OmanyteCandy = "Omanyte Candy",
    The10km = "10 km",
    The2km = "2 km",
    The5km = "5 km",
}

export interface Evolution {
    num:  string;
    name: string;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}

export interface pokeContext {
    pokemon: Pokemon[];
    addPokemon: (Pokemon: Pokemon)=> void;
}