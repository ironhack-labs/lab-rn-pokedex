

export interface Pokemon {
  name: string;
  id: number;
  image: string;
  type: string[];
  abilities: string[];
}

export type RootStackParamList = {
  Home: undefined;
  AddPokemon: undefined;
  PokemonDetail: { pokemon: Pokemon };
};

