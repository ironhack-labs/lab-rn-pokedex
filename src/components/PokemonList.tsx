import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { PokemonContext } from '../context/PokemonContext';
import { useFetch } from '../hooks/useFetch';
import { PokemonCard } from './PokemonCard';
import { PokemonDetails } from '../interfaces/Pokemon';



export const PokemonList = ({onPress} : {onPress : (details: PokemonDetails) => void}) => {

  const {pokemonState} = useContext(PokemonContext)
  const {getPokemonsList} = useFetch();

  useEffect(() => {
    getPokemonsList()
  }, [])

  return (
    <FlatList
      data={pokemonState.items}
      keyExtractor={ (pokemon, index) => (index+1).toString()}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({item, index}) => <PokemonCard pokemon={item} onPress={() => onPress(item.details!)}/>}
      
    />
  )
}
