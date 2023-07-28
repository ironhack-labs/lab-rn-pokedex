import React, { useContext } from 'react'
import axios from 'axios';
import { Pokemon, PokemonDetails, PokemonResponse } from '../interfaces/Pokemon';
import { PokemonContext } from '../context/PokemonContext';

export const api = axios.create();

export const useFetch = () => {

  const {setPokemonsList, pokemonState} = useContext(PokemonContext)

  const getPokemonsList = async () => {
    if(pokemonState.items.length === 0){
      try {
        const pokemons = await fetchPokemonList()
        setPokemonsList(pokemons)
      } catch (error) {
        console.log("error")
      }
      
    }
  }

  const fetchPokemonList = async () => {
    try {
      const resp = await api.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=151")
      const pokemonsdata =  resp.data.results;

      const detailsPromise = pokemonsdata.map( async (item, index) => {
        try {
          const details = await fetchPokemonDetails(index+1)
          return {
            ...item,
            id: index+1,
            details
          }
        } catch (error) {
          console.log(error)
          return item;
        }
      })
      const pokemonsWithDetails = await Promise.all(detailsPromise)
      return pokemonsWithDetails
    } catch (error) {
      console.log(error)
      return pokemonState.items;
    }
  }

  const fetchPokemonDetails = async (id : number) => {
    try {
      const resp = await api.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const pokemonDetails =  resp.data;
      return pokemonDetails;
    } catch (error) {
      console.log(error)
    }
  }

  
  
  
  return {
    fetchPokemonList,
    getPokemonsList
  }
}
