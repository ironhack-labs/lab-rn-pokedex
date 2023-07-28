import type {PokemonDetails} from './pokemon-details';

export type Pokemon = {
  id: number;
  name: string;
  thumbnail: string;
  detail?: Partial<PokemonDetails>;
};

export type GetPokemonResponse = {
  results: {
    name: string;
    url: string;
  }[];
};
