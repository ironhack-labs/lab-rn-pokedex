import {Control, Path} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type Pokemon = {
    name: string;
    id: number;
    image: string;
    type: string;
    abilities: string[];
  };
  
  export type FormInputProps<T extends object> = {
    control: Control<T>;
    controlName: Path<T>;
    inputProps?: TextInputProps;
    error?: string;
    required?: boolean;
  };

export interface Welcome {
    pokemon: Pokemon[];
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