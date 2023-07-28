export type Pokemon = {
  id: number;
  name: string;
  url: string;
  thumbnail: string;
};

export type GetPokemonResponse = {
  results: Pick<Pokemon, 'name' | 'url'>[];
};
