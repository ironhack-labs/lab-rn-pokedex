import axios, {AxiosInstance} from 'axios';

type RequestItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  id: string;
  image: string;
  type: string;
  abilities: Object[];
};

type GetResponse = {
  data: RequestItem[];
};

const pokemonAxiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar', Accept: 'application/json'},
});

export const useFetch: Promise<Pokemon[]> = async () => {
  try {
    const {data, status} = await pokemonAxiosInstance.get<GetResponse>(
      `?limit=151`,
    );

    const fetchDetails: Promise<Pokemon> = async id =>
      await pokemonAxiosInstance.get<GetResponse>(`/${id}/`);

    data?.results.map(async (item: RequestItem) => {
      const id = item.url.split('/').slice(-2, -1)[0];
      const pokemon = await fetchDetails(id);
      console.log('poke: ', pokemon.data.name);
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};
