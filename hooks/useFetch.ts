import axios, {AxiosRequestConfig} from 'axios';

export type Pokemon = {
  name: 'string';
  url: 'string';
};

type GetResponse = {
  data: Pokemon[];
};

const pokemonAxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar', Accept: 'application/json'},
});

export async function useFetch() {
  try {
    const {data, status} = await pokemonAxiosInstance.get<GetResponse>(
      `?limit=151`,
    );
    console.log('response status is: ', status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
