import axios from 'axios';
import {PokeInfo} from '../interface/PokeTypes';
import {Pokemon} from '../interface/PokeDescription';

export async function fetchPokemon() {
  try {
    const {data} = await axios.get<{results: PokeInfo[]}>(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data.results;
  } catch (error) {
    return [];
  }
}

export async function fetchPokemonDescription(url: string) {
  try {
    const {data} = await axios.get<Pokemon>(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    return data;
  } catch (error) {
    return null;
  }
}

export async function fetchPokemonById(id: string) {
  try {
    const {data} = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return data;
  } catch (error) {
    return error;
  }
}
