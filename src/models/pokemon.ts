import type {PokemonDetails} from './pokemon-details';

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
} & Partial<PokemonDetails>;

export type GetPokemonResponse = {
  results: Pick<Pokemon, 'name' | 'url'>[];
};
