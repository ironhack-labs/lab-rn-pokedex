export type PokeInfo = {
  name: string;
  url: string;
  description: PokeDescription | null;
};
export type PokeDescription = {
  sprites: {
    front_default: string;
  };
};
