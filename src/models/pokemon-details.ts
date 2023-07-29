// source: https://app.quicktype.io/ + https://pokeapi.co/api/v2/pokemon/1 endpoint
export type PokemonDetails = {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

type Ability = {
  ability: Species;
  is_hidden: boolean;
  slot: number;
};

type Species = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: Species;
};

type Move = {
  move: Species;
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
};

type GenerationV = {
  'black-white': Sprites;
};

type GenerationIv = {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
};

type Versions = {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': {[key: string]: Home};
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
};

type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
};

type GenerationI = {
  'red-blue': RedBlue;
  yellow: RedBlue;
};

type RedBlue = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

type GenerationIi = {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

type Gold = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
};

type GenerationIii = {
  emerald: OfficialArtwork;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
};

type OfficialArtwork = {
  front_default: string;
  front_shiny: string;
};

type Home = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationVii = {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
};

type DreamWorld = {
  front_default: string;
  front_female: null;
};

type GenerationViii = {
  icons: DreamWorld;
};

type Other = {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Species;
};

type Type = {
  slot: number;
  type: Species;
};
