import axios from 'axios';
import {useEffect} from 'react';
import {usePokedex} from '../context/context';
const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

/** get pokemons custom hook */
export const useFetch = () => {
  const {dispatch} = usePokedex();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('pokemon?limit=151');
        dispatch({type: 'ADD_POKEMONS', payload: response.data.results});
      } catch (error) {
        throw new Error('Error when consulting list of pokemons!');
      }
    };
    fetchData();
  }, [dispatch]);
};
